// lib/generateMetadata.js
export async function generateMetadata({ params, searchParams }) {
  try {
    const slug = params?.slug || searchParams?.slug;
    
    if (!slug) {
      return {
        title: 'Default Title | Technology',
        description: 'Default description for the website.',
        keywords: ['tech', 'solutions', 'services'],
      };
    }

    let cleanSlug = slug || '';
    if (typeof cleanSlug === 'string') {
      cleanSlug = cleanSlug.trim();
    } else if (Array.isArray(cleanSlug)) {
      cleanSlug = cleanSlug.join('/');
    }

    // Strip leading/trailing slashes for segment counting, but detect if it's the home route
    const isHome = cleanSlug === '' || cleanSlug === '/';
    const strippedSlug = cleanSlug.replace(/^\/+|\/+$/g, '');
    const segments = strippedSlug.split('/').filter(Boolean);
    let apiUrl = '';

    if (isHome) {
      apiUrl = `https://admin.tgaystechnology.com/api/api_v1/seo/page/%2F`;
    } else if (segments.length === 1) {
      apiUrl = `https://admin.tgaystechnology.com/api/api_v1/seo/page/${strippedSlug}`;
    } else if (segments.length >= 2) {
      apiUrl = `https://admin.tgaystechnology.com/api/api_v1/seo/subpage/${strippedSlug}`;
    } else {
      return {
        title: 'Default Title | Technology',
        description: 'Default description for the website.',
        keywords: ['tech', 'solutions', 'services'],
      };
    }

    const response = await fetch(apiUrl, {
      cache: 'force-cache',
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      return {
        title: 'Default Title | Technology',
        description: 'Default description for the website.',
        keywords: ['tech', 'solutions', 'services'],
      };
    }

    const seoData = await response.json();

    // The API might return an array or a single object directly. Let's handle both.
    const seo = Array.isArray(seoData)
      ? (seoData.length > 0 ? seoData[0] : null)
      : seoData;

    if (!seo) {
      return {
        title: 'Default Title | Technology',
        description: 'Default description for the website.',
        keywords: ['tech', 'solutions', 'services'],
      };
    }

    // Helper to strip HTML tags if present (e.g. <p>About</p> -> About)
    const cleanText = (str) => {
      if (!str) return '';
      return str.replace(/<\/?[^>]+(>|$)/g, '').trim();
    };

    const title = seo.seo_title || seo.page_seo_title || 'Default Title | Technology';
    const description = cleanText(seo.meta_description) || 'Default description for the website.';
    const keywords = seo.meta_keyword ? seo.meta_keyword.split(',').map(k => k.trim()) : ['tech', 'solutions', 'services'];
    
    return {
      title,
      description,
      keywords,
      openGraph: {
        title: seo.og_title || title,
        description: cleanText(seo.og_description) || description,
        images: seo.og_image ? [{ url: seo.og_image }] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: seo.og_title || title,
        description: cleanText(seo.og_description) || description,
      },
      robots: seo.robots || 'index,follow',
      alternates: {
        canonical: seo.canonical_url || undefined,
      }
    };

  } catch (error) {
    // console.error('Error generating metadata:', error);

    return {
      title: 'Default Title | Technology',
      description: 'Default description for the website.',
      keywords: ['tech', 'solutions', 'services'],
    };
  }
}

