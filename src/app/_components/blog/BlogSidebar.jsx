'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogSidebar() {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [loadingPopular, setLoadingPopular] = useState(true);

  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [tags, setTags] = useState([]);
  const [loadingTags, setLoadingTags] = useState(true);

  useEffect(() => {
    const popularController = new AbortController();
    const catsController = new AbortController();
    const tagsController = new AbortController();

    async function loadPopular() {
      try {
        setLoadingPopular(true);
        const res = await fetch(`/api/blogs?status=publish&is_popular=1&limit=6`, {
          signal: popularController.signal,
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to load popular blogs');
        const data = await res.json();
        setPopularBlogs(Array.isArray(data.blogs) ? data.blogs : []);
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
      } finally {
        setLoadingPopular(false);
      }
    }

    async function loadCategories() {
      try {
        setLoadingCategories(true);
        const res = await fetch(`/api/categories?limit=50`, {
          signal: catsController.signal,
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to load categories');
        const data = await res.json();
        setCategories(Array.isArray(data.categories) ? data.categories : []);
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
      } finally {
        setLoadingCategories(false);
      }
    }

    async function loadTags() {
      try {
        setLoadingTags(true);
        const res = await fetch(`/api/tags?limit=100`, {
          signal: tagsController.signal,
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('Failed to load tags');
        const data = await res.json();
        setTags(Array.isArray(data.tags) ? data.tags : []);
      } catch (err) {
        if (err.name !== 'AbortError') console.error(err);
      } finally {
        setLoadingTags(false);
      }
    }

    loadPopular();
    loadCategories();
    loadTags();

    return () => {
      popularController.abort();
      catsController.abort();
      tagsController.abort();
    };
  }, []);

  return (
    <aside aria-label="sidebar" className="sidebar sidebar-right" style={{ width: '100%' }}>
      {/* Categories */}
      <div className="widget w-tags">
        <h5 className="widget-title">Categories</h5>
        <ul className="tags-list">
          {loadingCategories && <li>Loading...</li>}
          {!loadingCategories && categories.length === 0 && <li>No categories found.</li>}

          {!loadingCategories && categories.length > 0 && (
            <>
              {/* Optional: All link to clear the filter */}
              <li key="all">
                <Link href="/blog" scroll={false}>All</Link>
              </li>

              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={{ pathname: '/blog', query: { category: cat.slug } }}
                    scroll={false}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>

      {/* Tags */}
      <div className="widget w-tags">
        <h5 className="widget-title">Tags</h5>
        <ul className="tags-list">
          {loadingTags && <li>Loading...</li>}
          {!loadingTags && tags.length === 0 && <li>No tags found.</li>}
          {!loadingTags && tags.map((tag) => (
            <li key={tag.id}>
              <a href={`/blog/tag/${tag.slug}`} style={{ cursor: 'pointer' }}>
                {tag.name}
              </a>
            </li>
          ))}
        </ul>
      </div>


      {/* Popular Post */}
      <div className="widget w-popular-products crumina-module crumina-module-slider">
        <h5 className="widget-title">Popular Post</h5>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {loadingPopular && (
              <div className="swiper-slide product-item">
                <div className="product-item-content">
                  <h6 className="title">Loading...</h6>
                </div>
              </div>
            )}

            {!loadingPopular && popularBlogs.length === 0 && (
              <div className="swiper-slide product-item">
                <div className="product-item-content">
                  <h6 className="title">No popular posts found.</h6>
                </div>
              </div>
            )}

            {!loadingPopular && popularBlogs.map((post) => {
              const link = `/blog/blog-detail/${post.slug}`;
              const imgSrc = post.featured_image_url || '/img/banner.png';
              return (
                <div key={post.id || post.slug} className="swiper-slide product-item">
                  <div className="product-item-thumb">
                    <div className="square-colored bg-product-blue-dark"></div>
                    <a href={link}>
                      <img src={imgSrc} alt={post.title || post.slug} style={{ cursor: 'pointer' }} />
                    </a>
                  </div>
                  <a href={link}>
                    <div className="product-item-content" style={{ cursor: 'pointer' }}>
                      <h6 className="title">{post.title}</h6>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="widget w-contacts">
        <h5 className="widget-title">Quick Contact</h5>
        <div className="contact-item display-flex">
          <span className="info">+91-9319239730</span>
        </div>
        <div className="contact-item">
          <span className="info">info@techsgeeks.in</span>
          <br />
          <span className="info">sales@techsgeeks.in</span>
        </div>
        <ul className="socials socials--round socials--colored">
          <li>
            <a href="https://www.facebook.com/web.mobileapp.services" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/tgays-technology/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube-play" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
