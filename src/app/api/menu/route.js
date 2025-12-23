// api/menu/route.js
import { createConnection } from "@/lib/db.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    
    // Get all pages with active status, ordered by page_order
    const pagesSql = "SELECT * FROM pages WHERE page_status = 1 ORDER BY page_order";
    const [pagesRows] = await db.query(pagesSql);
    
    // Get all subpages with active status, ordered by page_id and sub_page_order
    const subPagesSql = "SELECT * FROM sub_pages WHERE sub_page_status = 1 ORDER BY page_id, sub_page_order";
    const [subPagesRows] = await db.query(subPagesSql);

    // Group subpages by page_id
    const groupedSubPages = subPagesRows.reduce((acc, item) => {
      if (!acc[item.page_id]) acc[item.page_id] = [];
      acc[item.page_id].push(item);
      return acc;
    }, {});

    // Combine pages with their subpages
    const menuData = pagesRows.map(page => ({
      ...page,
      subPages: groupedSubPages[page.page_id] || []
    }));

    return NextResponse.json(menuData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}