import { createConnection2 } from '@/lib/db2';
import { NextResponse } from 'next/server';

const ASSET_BASE = process.env.NEXT_PUBLIC_ASSET_BASE_URL || ''; // e.g. https://admin.example.com

// --- Utility Functions ---

function normalizePath(val) {
  if (!val) return null;
  if (Buffer.isBuffer(val)) val = val.toString();

  let s = String(val).trim().replace(/^"|"$/g, '').replace(/\\/g, '/');
  if (s.toLowerCase().startsWith('public/')) s = s.slice(6);
  if (!s.startsWith('/')) s = `/${s}`;
  return s;
}

function withUrls(row) {
  const p = normalizePath(row.featured_image);
  const absolute = p && ASSET_BASE ? new URL(p, ASSET_BASE).toString() : p;
  return { ...row, featured_image: p, featured_image_url: absolute };
}

// --- Main Handler ---

export async function GET(request) {
  try {
    const db2 = await createConnection2();
    const { searchParams } = new URL(request.url);

    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    const status = searchParams.get('status') || 'publish';
    const isPopularRaw = searchParams.get('is_popular');

    // --- Pagination Inputs ---
    const pageParam = searchParams.get('page');
    let limit = parseInt(searchParams.get('limit') || '6', 10);
    if (!Number.isFinite(limit) || limit <= 0) limit = 6;

    // Support both page+limit and offset (offset takes precedence if provided)
    let offset;
    if (searchParams.has('offset')) {
      offset = parseInt(searchParams.get('offset') || '0', 10);
      if (!Number.isFinite(offset) || offset < 0) offset = 0;
    } else {
      const page = Math.max(1, parseInt(pageParam || '1', 10));
      offset = (page - 1) * limit;
    }

    // --- Build Query ---
    let query = 'SELECT * FROM blogs WHERE 1=1';
    const params = [];

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }

    if (slug) {
      query += ' AND slug = ?';
      params.push(slug);
    }

    if (category) {
      query += ' AND category = ?';
      params.push(category);
    }

    if (isPopularRaw !== null) {
      const popVal = Number(isPopularRaw);
      if (!Number.isNaN(popVal)) {
        query += ' AND is_popular = ?';
        params.push(popVal);
      }
    }

    query += ' ORDER BY created_at DESC';

    // Apply pagination only for list queries (not single slugs)
    if (!slug) {
      query += ' LIMIT ? OFFSET ?';
      params.push(limit, offset);
    }

    const [rows] = await db2.query(query, params);
    const normalized = rows.map(withUrls);

    // --- Single Blog Fetch ---
    if (slug) {
      if (normalized.length === 0) {
        return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
      }
      return NextResponse.json({ blog: normalized[0] }, { status: 200 });
    }

    // --- Count Query for Pagination ---
    let countQuery = 'SELECT COUNT(*) as total FROM blogs WHERE 1=1';
    const countParams = [];

    if (status) {
      countQuery += ' AND status = ?';
      countParams.push(status);
    }

    if (category) {
      countQuery += ' AND category = ?';
      countParams.push(category);
    }

    if (isPopularRaw !== null) {
      const popVal = Number(isPopularRaw);
      if (!Number.isNaN(popVal)) {
        countQuery += ' AND is_popular = ?';
        countParams.push(popVal);
      }
    }

    const [countResult] = await db2.query(countQuery, countParams);
    const total = Number(countResult?.[0]?.total || 0);

    // Derive page if using explicit offset
    const page = Math.floor(offset / limit) + 1;
    const totalPages = Math.max(1, Math.ceil(total / limit));

    // --- Response ---
    return NextResponse.json(
      {
        blogs: normalized,
        total,
        count: normalized.length,
        offset,
        limit,
        page,
        pageSize: limit,
        totalPages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs', details: error.message },
      { status: 500 }
    );
  }
}
