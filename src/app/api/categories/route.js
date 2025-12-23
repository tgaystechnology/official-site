import { createConnection2 } from '@/lib/db2';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const db2 = await createConnection2();
    const { searchParams } = new URL(request.url);

    const slug = searchParams.get('slug');
    const q = searchParams.get('q');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset') || '0';

    let query = 'SELECT id, name, slug, created_at, updated_at FROM categories WHERE 1=1';
    const params = [];

    if (slug) { query += ' AND slug = ?'; params.push(slug); }
    if (q) { query += ' AND (name LIKE ? OR slug LIKE ?)'; params.push(`%${q}%`, `%${q}%`); }

    query += ' ORDER BY name ASC';
    if (limit) { query += ' LIMIT ? OFFSET ?'; params.push(parseInt(limit), parseInt(offset)); }

    const [rows] = await db2.query(query, params);

    if (slug) {
      if (rows.length === 0) return NextResponse.json({ error: 'Category not found' }, { status: 404 });
      return NextResponse.json({ category: rows[0] }, { status: 200 });
    }

    // Count
    let countQuery = 'SELECT COUNT(*) as total FROM categories WHERE 1=1';
    const countParams = [];

    if (slug) { countQuery += ' AND slug = ?'; countParams.push(slug); }
    if (q) { countQuery += ' AND (name LIKE ? OR slug LIKE ?)'; countParams.push(`%${q}%`, `%${q}%`); }

    const [countResult] = await db2.query(countQuery, countParams);
    const total = countResult[0].total;

    return NextResponse.json({
      categories: rows,
      total,
      count: rows.length,
      offset: parseInt(offset),
      limit: limit ? parseInt(limit) : null,
    }, { status: 200 });

  } catch (error) {
    console.error('Database Error (categories):', error);
    return NextResponse.json({ error: 'Failed to fetch categories', details: error.message }, { status: 500 });
  }
}
