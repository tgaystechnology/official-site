'use client';

import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, currentPage, onPageChange, className }) => {
  if (!totalPages || totalPages <= 1) return null;

  const goToPage = (p) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    onPageChange(p);
  };

  const buildPages = () => {
    const pages = [];
    const showAll = totalPages <= 7;

    if (showAll) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) pages.push('...');
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push('...');

    pages.push(totalPages);
    return pages;
  };

  const pages = buildPages();

  return (
    <div className={`${styles.paginationWrap} ${className || ''}`}>
      <nav className={styles.nav} role="navigation" aria-label="Pagination Navigation">
        <ul className={`${styles.list} ${styles.animateIn}`}>
          {/* First */}
          <li>
            <button
              className={`${styles.btn} ${currentPage === 1 ? styles.btnDisabled : ''}`}
              onClick={() => goToPage(1)}
              aria-label="Go to first page"
              disabled={currentPage === 1}
            >
              <span className={styles.arrow}>«</span>
              <span className={styles.srOnly}>First</span>
            </button>
          </li>

          {/* Previous */}
          <li>
            <button
              className={`${styles.btn} ${currentPage === 1 ? styles.btnDisabled : ''}`}
              onClick={() => goToPage(currentPage - 1)}
              aria-label="Go to previous page"
              disabled={currentPage === 1}
            >
              <span className={styles.arrow}>‹</span>
              <span className={styles.srOnly}>Previous</span>
            </button>
          </li>

          {/* Page Numbers */}
          {pages.map((p, idx) =>
            p === '...' ? (
              <li key={`ellipsis-${idx}`} className={styles.ellipsis}>…</li>
            ) : (
              <li key={p}>
                <button
                  className={`${styles.btn} ${p === currentPage ? styles.btnActive : ''}`}
                  aria-current={p === currentPage ? 'page' : undefined}
                  aria-label={`Go to page ${p}`}
                  onClick={() => goToPage(p)}
                >
                  {p}
                </button>
              </li>
            )
          )}

          {/* Next */}
          <li>
            <button
              className={`${styles.btn} ${currentPage === totalPages ? styles.btnDisabled : ''}`}
              onClick={() => goToPage(currentPage + 1)}
              aria-label="Go to next page"
              disabled={currentPage === totalPages}
            >
              <span className={styles.arrow}>›</span>
              <span className={styles.srOnly}>Next</span>
            </button>
          </li>

          {/* Last */}
          <li>
            <button
              className={`${styles.btn} ${currentPage === totalPages ? styles.btnDisabled : ''}`}
              onClick={() => goToPage(totalPages)}
              aria-label="Go to last page"
              disabled={currentPage === totalPages}
            >
              <span className={styles.arrow}>»</span>
              <span className={styles.srOnly}>Last</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
