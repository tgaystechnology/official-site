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

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const apiSlug = slug.startsWith('/') ? slug.substring(1) : slug;

    const response = await fetch(
      `https://api.tgaystechnology.com/api_v1/seo-pages/${apiSlug}`,
      {
        cache: 'force-cache',
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      // console.warn(`SEO data not found for slug: ${slug}`);
      return {
        title: 'Default Title | Technology',
        description: 'Default description for the website.',
        keywords: ['tech', 'solutions', 'services'],
      };
    }

    const seoData = await response.json();
    // console.log('seo data: ', seoData);

    // ✅ Safely take the first object
    const seo = Array.isArray(seoData) && seoData.length > 0 ? seoData[0] : null;

    if (!seo) {
      return {
        title: 'Default Title | Technology',
        description: 'Default description for the website.',
        keywords: ['tech', 'solutions', 'services'],
      };
    }

    return {
      title: seo.seo_title || seo.page_seo_title || 'Default Title | Technology',
      description: seo.meta_description || 'Default description for the website.',
      keywords: seo.meta_keyword ? seo.meta_keyword.split(',').map(k => k.trim()) : ['tech', 'solutions', 'services'],
      openGraph: {
        title: seo.seo_title || seo.page_seo_title,
        description: seo.meta_description,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: seo.seo_title || seo.page_seo_title,
        description: seo.meta_description,
      },
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
