// app/blog/page.jsx
import React, { Suspense } from "react";
import BlogArticles from "./../_components/blog/BlogArticles ";

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div style={{ textAlign: 'center', padding: 40 }}>
        Loading blogs...
      </div>
    }>
      <BlogArticles />
    </Suspense>
  );
}
