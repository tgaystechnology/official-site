import { createConnection } from "./db.js";

// Static fallback menu in case both database and external API are down
const FALLBACK_MENU = [
  {
    page_id: 1,
    page_title: "Home",
    page_slug: "/",
    subPages: []
  },
  {
    page_id: 2,
    page_title: "About Us",
    page_slug: "/about-us",
    subPages: []
  },
  {
    page_id: 3,
    page_title: "Services",
    page_slug: "#",
    subPages: [
      { id: 1, sub_page_title: "Web Development", sub_page_slug: "/services/web-development" },
      { id: 2, sub_page_title: "Mobile App Development", sub_page_slug: "/services/mobile-app-development" },
      { id: 3, sub_page_title: "UI/UX Design", sub_page_slug: "/services/ui-ux-design" }
    ]
  },
  {
    page_id: 4,
    page_title: "Portfolio",
    page_slug: "/portfolio",
    subPages: []
  },
  {
    page_id: 5,
    page_title: "Contact Us",
    page_slug: "/contact-us",
    subPages: []
  }
];

/**
 * Fetches menu data on the server side.
 * Tries:
 * 1. Database query (if environment variables are available)
 * 2. External API with Next.js ISR cache
 * 3. Static fallback menu (fail-safe)
 */
export async function getMenuData() {
  // 1. Try to fetch from external API with server-side caching (Fast & Reliable)
  try {
    const response = await fetch("https://api.tgaystechnology.com/api_v1/menus", {
      next: { revalidate: 3600 } // Cache for 1 hour (ISR)
    });
    
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (error) {
    console.warn("Server-side menu fetch from API failed:", error.message);
  }

  // 2. Try to fetch from direct database (if configured)
  try {
    if (process.env.DB_HOST && process.env.DB_HOST !== "localhost") {
      const db = await createConnection();
      
      const [pagesRows] = await db.query(
        "SELECT * FROM pages WHERE page_status = 1 ORDER BY page_order"
      );
      
      const [subPagesRows] = await db.query(
        "SELECT * FROM sub_pages WHERE sub_page_status = 1 ORDER BY page_id, sub_page_order"
      );

      const groupedSubPages = subPagesRows.reduce((acc, item) => {
        if (!acc[item.page_id]) acc[item.page_id] = [];
        acc[item.page_id].push(item);
        return acc;
      }, {});

      return pagesRows.map(page => ({
        ...page,
        subPages: groupedSubPages[page.page_id] || []
      }));
    }
  } catch (dbError) {
    console.warn("Direct database fetch for menu failed:", dbError.message);
  }

  // 3. Absolute Fallback to keep the website functional
  console.warn("Using fallback static menu data.");
  return FALLBACK_MENU;
}
