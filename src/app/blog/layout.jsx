// app/blog/layout.jsx (or wherever you keep your layouts)

import React from "react";
import BlogSidebar from "../_components/blog/BlogSidebar";

export default function BlogLayout({ children }) {
  return (
    <div className="content-wrapper blog_page">
      <div className="container blog-container">
        <div className="row blog-page">
          {/* Main content area */}
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <main className="main">{children}</main>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
