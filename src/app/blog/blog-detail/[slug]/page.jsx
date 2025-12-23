'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BlogContactForm from '@/app/_components/blog/BlogContactForm';

export default function BlogDetail() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [imgSrc, setImgSrc] = useState('/img/default-blog.png');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Build absolute URL like your list component
  const toAbsoluteUrl = (url) => {
    if (!url) return '/img/default-blog.png';
    let u = String(url).trim().replace(/^"|"$/g, '').replace(/\\/g, '/');
    if (u.toLowerCase().startsWith('public/')) u = u.slice(6); // strip accidental public/
    if (/^(https?:)?\/\//i.test(u) || u.startsWith('data:')) return u; // already absolute/data URI
    u = u.replace(/^\.?\//, ''); // strip leading ./ or /
    return typeof window !== 'undefined' ? `${window.location.origin}/${u}` : `/${u}`;
  };

  // If API returns Buffer-like object { type:'Buffer', data:[...] }
  const bufferToDataUrl = (buf, mime = 'image/jpeg') => {
    try {
      const bytes = Array.isArray(buf?.data) ? buf.data : [];
      let binary = '';
      const chunkSize = 0x8000;
      for (let i = 0; i < bytes.length; i += chunkSize) {
        const sub = bytes.slice(i, i + chunkSize);
        binary += String.fromCharCode.apply(null, sub);
      }
      const base64 = typeof btoa !== 'undefined' ? btoa(binary) : '';
      return base64 ? `data:${mime};base64,${base64}` : '/img/default-blog.png';
    } catch {
      return '/img/default-blog.png';
    }
  };

  const resolveFeaturedImage = (val) => {
    if (!val) return '/img/default-blog.png';
    if (typeof val === 'string') return toAbsoluteUrl(val);
    if (val && typeof val === 'object' && Array.isArray(val.data)) {
      return bufferToDataUrl(val, 'image/jpeg');
    }
    return '/img/default-blog.png';
  };

  const toRootOrAbsolute = (src) => {
    if (!src) return '';
    let s = String(src).trim().replace(/^"|"$/g, '').replace(/\\/g, '/');
    if (s.toLowerCase().startsWith('public/')) s = s.slice(6);
    if (/^(https?:)?\/\//i.test(s) || s.startsWith('data:')) return s;
    s = s.replace(/^\.?\//, '');
    return typeof window !== 'undefined' ? `${window.location.origin}/${s}` : `/${s}`;
  };

  const processContent = (content) => {
    if (!content) return '';

    let html = content;

    // Normalize <img src="">
    html = html.replace(
      /<img\b([^>]*?)\bsrc=(["'])(.*?)\2([^>]*?)>/gi,
      (_m, pre, q, src, post) => `<img${pre}src="${toRootOrAbsolute(src)}"${post}>`
    );

    // Normalize <source src="">
    html = html.replace(
      /<source\b([^>]*?)\bsrc=(["'])(.*?)\2([^>]*?)>/gi,
      (_m, pre, q, src, post) => `<source${pre}src="${toRootOrAbsolute(src)}"${post}>`
    );

    // Ensure videos have controls
    html = html.replace(/<video\b([^>]*?)>/gi, (_m, attrs) => `<video${attrs} controls>`);

    // Make iframes lazy (optional)
    html = html.replace(/<iframe\b([^>]*?)>/gi, (_m, attrs) => `<iframe${attrs} loading="lazy">`);

    return html;
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/blogs?slug=${params.slug}`);
        if (!response.ok) throw new Error('Blog not found');

        const data = await response.json();
        const b = data.blog || null;

        if (b && typeof b.tags === 'string') {
          try { b.tags = JSON.parse(b.tags); } catch { b.tags = []; }
        }

        setBlog(b);
        setImgSrc(
          resolveFeaturedImage(
            b?.featured_image_url || b?.featured_image || b?.featuredImage || b?.image
          )
        );
      } catch (err) {
        setError(err.message || 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) fetchBlog();
  }, [params.slug]);

  const formatDateParts = (dateString) => {
    try {
      const date = new Date(dateString);
      return {
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        number: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
      };
    } catch {
      return { day: 'N/A', number: '--', month: '---' };
    }
  };

  if (loading) return <p className="text-center py-20">Loading blog...</p>;
  if (error || !blog) return <p className="text-center text-red-600 py-20">{error || 'Blog not found'}</p>;

  const { day, number, month } = formatDateParts(blog.created_at);
  const shareBtnStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: 0,
    font: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
  };
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="content-wrapper blog_page" style={{ width: '100%', margin: 0 }}>
      <div className="container-fluid" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="row blog-page" style={{ marginLeft: 0, marginRight: 0 }}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <article className="hentry post post-standard has-post-thumbnail post-standard-details">
              {/* Featured Image */}
              <div className="post-thumb">
                <img
                  src={imgSrc}
                  alt={blog.title || 'Blog featured image'}
                  style={{ width: '100%', height: 'auto' }}
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/img/default-blog.png';
                  }}
                />
              </div>

              <div className="post__content">
                {/* Date */}
                <div className="post__date">
                  <time className="published" dateTime={blog.created_at}>
                    <span className="day">{day}</span>
                    <a className="number">{number}</a>
                    <span className="month">{month}</span>
                  </time>
                </div>

                {/* Title */}
                <div className="post__content-info">
                  <h3 className="post__title entry-title">{blog.title}</h3>
                </div>

                {/* Rich Text Body */}
                <div
                  className="blog-content"
                  style={{ marginTop: '24px' }}
                  dangerouslySetInnerHTML={{ __html: processContent(blog.content) }}
                />

                {/* Tags + Share */}
                <div className="post-details-shared">
                  {/* Tags */}
                  {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                    <ul className="tags-inline">
                      <li>Tags:</li>
                      {blog.tags.map((tag, idx) => (
                        <li key={`${tag}-${idx}`}>
                          <a>{tag}</a>
                          {idx < blog.tags.length - 1 && ','}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Share */}
                  <div className="widget w-follow">
                    <ul className="socials socials--round">
                      <li>Share:</li>

                      <li>
                        <button
                          onClick={() =>
                            window.open(
                              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
                              'name',
                              'width=600,height=400'
                            )
                          }
                          title={blog.title}
                          aria-label="facebook"
                          className="react-share__ShareButton"
                          style={shareBtnStyle}
                        >
                          <svg viewBox="0 0 64 64" width="32" height="32">
                            <circle cx="32" cy="32" r="31" fill="#3b5998" />
                            <path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white" />
                          </svg>
                        </button>
                      </li>

                      <li>
                        <button
                          onClick={() =>
                            window.open(
                              `https://twitter.com/share?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(currentUrl)}`,
                              'name',
                              'width=600,height=400'
                            )
                          }
                          aria-label="twitter"
                          className="react-share__ShareButton"
                          style={shareBtnStyle}
                        >
                          <svg viewBox="0 0 64 64" width="32" height="32">
                            <circle cx="32" cy="32" r="31" fill="#00aced" />
                            <path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" fill="white" />
                          </svg>
                        </button>
                      </li>

                      <li>
                        <button
                          onClick={() =>
                            window.open(
                              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.title)}`,
                              'name',
                              'width=600,height=400'
                            )
                          }
                          aria-label="linkedin"
                          className="react-share__ShareButton"
                          style={shareBtnStyle}
                        >
                          <svg viewBox="0 0 64 64" width="32" height="32">
                            <circle cx="32" cy="32" r="31" fill="#007fb1" />
                            <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" fill="white" />
                          </svg>
                        </button>
                      </li>

                      <li>
                        <button
                          onClick={() =>
                            window.open(
                              `whatsapp://send?text=${encodeURIComponent(currentUrl)}`,
                              'name',
                              'width=600,height=400'
                            )
                          }
                          aria-label="whatsapp"
                          className="react-share__ShareButton"
                          style={shareBtnStyle}
                        >
                          <svg viewBox="0 0 64 64" width="32" height="32">
                            <circle cx="32" cy="32" r="31" fill="#25D366" />
                            <path d="m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548" fill="white" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scoped styles for rich content */}
              <style jsx>{`
                .blog-content img {
                  max-width: 100% !important;
                  height: auto !important;
                  border-radius: 8px;
                  margin: 16px 0;
                  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
                }
                .blog-content video,
                .blog-content iframe {
                  max-width: 100% !important;
                  height: auto !important;
                  border-radius: 8px;
                  margin: 16px 0;
                }
                .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6 {
                  margin-top: 24px;
                  margin-bottom: 16px;
                  font-weight: 600;
                }
                .blog-content p { margin-bottom: 16px; }
                .blog-content ul, .blog-content ol {
                  margin: 16px 0;
                  padding-left: 24px;
                }
                .blog-content blockquote {
                  border-left: 4px solid #e5e7eb;
                  padding-left: 16px;
                  margin: 24px 0;
                  font-style: italic;
                }
                .blog-content code {
                  background-color: #f3f4f6;
                  padding: 2px 6px;
                  border-radius: 4px;
                  font-family: ui-monospace, SFMono-Regular, "SF Mono", monospace;
                }
                .blog-content pre {
                  background-color: #f3f4f6;
                  padding: 16px;
                  border-radius: 8px;
                  overflow-x: auto;
                  margin: 16px 0;
                }
                .blog-content pre code {
                  background-color: transparent;
                  padding: 0;
                }
                .blog-content table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 16px 0;
                }
                .blog-content th, .blog-content td {
                  border: 1px solid #e5e7eb;
                  padding: 8px 12px;
                  text-align: left;
                }
                .blog-content th { background-color: #f9fafb; font-weight: 600; }
              `}</style>
            </article>
          </div>
          <BlogContactForm/>
        </div>
      </div>
    </div>
  );
}