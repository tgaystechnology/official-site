// app/api/seo/[...slug]/route.js
import { NextResponse } from 'next/server';

// You'll need to replace this with your actual database connection
async function connectToDatabase() {
  const mysql = require('mysql2/promise');
  
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  
  return connection;
}

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    
    if (!slug || slug.length === 0) {
      return NextResponse.json(
        { error: 'Slug parameter is required' }, 
        { status: 400 }
      );
    }

    // Construct the full slug path
    const slugPath = '/' + slug.join('/');
    
    console.log('Looking for slug:', slugPath); // Debug log

    const connection = await connectToDatabase();
    
    // Query to fetch SEO data based on slug
    const [rows] = await connection.execute(
      `SELECT 
        seo_id,
        page_id,
        page_seo_title,
        seo_title,
        seo_slug,
        meta_keyword,
        meta_description,
        created_at
      FROM seo_pages 
      WHERE seo_slug = ?`,
      [slugPath]
    );

    await connection.end();

    if (rows.length === 0) {
      console.log('No data found for slug:', slugPath); // Debug log
      return NextResponse.json(
        { error: 'SEO data not found for this slug', searchedSlug: slugPath }, 
        { status: 404 }
      );
    }

    const seoData = rows[0];

    // Format the response
    const response = {
      title: seoData.seo_title || seoData.page_seo_title || 'Default Title',
      description: seoData.meta_description || 'Default description',
      keywords: seoData.meta_keyword ? seoData.meta_keyword.split(',').map(k => k.trim()) : [],
      slug: seoData.seo_slug,
      pageId: seoData.page_id,
      createdAt: seoData.created_at
    };

    console.log('Found SEO data:', response); // Debug log

    return NextResponse.json(response);

  } catch (error) {
    console.error('Error fetching SEO data:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}