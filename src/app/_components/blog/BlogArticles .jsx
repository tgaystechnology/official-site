'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useParams, useRouter, usePathname } from 'next/navigation';
import Pagination from '../Pagination/Pagination';
import styles from './../../blog/Blog.module.css';

const DEFAULT_LIMIT = 6;

const BlogArticles = () => {
  // State
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(DEFAULT_LIMIT);

  const searchParams = useSearchParams();
  const routeParams = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const topRef = useRef(null);

  const selectedCategory = useMemo(() => {
    const fromQuery = searchParams?.get('category') || '';
    const fromRoute = routeParams?.slug
      ? (Array.isArray(routeParams.slug) ? routeParams.slug[0] : routeParams.slug)
      : '';
    return (fromQuery || fromRoute || '').trim();
  }, [searchParams, routeParams]);

  const [page, setPage] = useState(() => {
    const initial = Number(searchParams?.get('page') || '1');
    return Number.isFinite(initial) && initial > 0 ? initial : 1;
  });

  // Sync with URL
  useEffect(() => {
    const p = Number(searchParams?.get('page') || '1');
    setPage(Number.isFinite(p) && p > 0 ? p : 1);
  }, [searchParams]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setPage(1);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set('page', '1');
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [selectedCategory, pathname, router]);

  // Fetch blogs
  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const qs = new URLSearchParams();
        qs.set('status', 'publish');
        qs.set('page', String(page));
        qs.set('limit', String(limit));
        if (selectedCategory) qs.set('category', selectedCategory);

        const response = await fetch(`/api/blogs?${qs.toString()}`, {
          signal: controller.signal,
          cache: 'no-store',
        });

        if (!response.ok) throw new Error('Failed to fetch blogs');

        const data = await response.json();
        setArticles(data.blogs || []);
        const total = data.total || 0;
        const pageSize = data.pageSize || limit;
        setTotalPages(data.totalPages ?? Math.ceil(total / pageSize));
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
    return () => controller.abort();
  }, [selectedCategory, page, limit]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('en-US', { month: 'short' }),
    };
  };

  const getExcerpt = (html, maxChars = 200) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    tmp.querySelectorAll('script, style, img, video, iframe, figure, object, embed, audio, source')
      .forEach((el) => el.remove());
    const text = (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
    if (text.length <= maxChars) return text;
    const slice = text.slice(0, maxChars);
    const lastSpace = slice.lastIndexOf(' ');
    return `${(lastSpace > 0 ? slice.slice(0, lastSpace) : slice).trim()}…`;
  };

  const handlePageChange = (nextPage) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set('page', String(nextPage));
    if (selectedCategory && !routeParams?.slug) params.set('category', selectedCategory);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
    setPage(nextPage);

    requestAnimationFrame(() => {
      const top = topRef.current?.getBoundingClientRect().top ?? 0;
      const y = window.scrollY + top - 90;
      window.scrollTo({ top: y < 0 ? 0 : y, behavior: 'smooth' });
    });
  };

  if (loading) return <div style={{ textAlign: 'center', padding: 40 }}>Loading blogs...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: 40, color: 'red' }}>Error: {error}</div>;
  if (articles.length === 0) return <div style={{ textAlign: 'center', padding: 40 }}>No blogs found.</div>;

  return (
    <>
      <div ref={topRef} id="articles-top" />
      {articles.map((article, idx) => {
        const dateInfo = formatDate(article.created_at);
        const href = `/blog/blog-detail/${article.slug}`;
        return (
          <article
            key={article.id}
            style={{
              animation: 'fadeUp 360ms ease both',
              animationDelay: `${idx * 40}ms`,
            }}
          >
            {article.featured_image && (
              <div className="post-thumb">
                <Link href={href}>
                  <img
                    src={article.featured_image_url || article.featured_image || '/img/default-blog.png'}
                    alt={article.title || 'Blog post'}
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                  />
                </Link>
              </div>
            )}
            <div className="post__content">
              <div className="post__date">
                <time dateTime={article.created_at}>
                  <span className="day">{dateInfo.day}</span>
                  <a className="number">{dateInfo.date}</a>
                  <span className="month">{dateInfo.month}</span>
                </time>
              </div>
              <div className="post__content-info">
                <Link href={href} className="h5 post__title entry-title">
                  {article.title}
                </Link>
                <div className={styles.blogContent}>{getExcerpt(article.content, 220)}</div>
                <Link href={href} className="click-next">Read More</Link>
              </div>
            </div>
          </article>
        );
      })}

      <Pagination totalPages={totalPages} currentPage={page} onPageChange={handlePageChange} />

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
};

export default BlogArticles;
