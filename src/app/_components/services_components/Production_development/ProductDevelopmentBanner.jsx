import React from 'react';
import Link from 'next/link';

const ProductDevelopmentBanner = () => {
  const capabilities = [
    "Free Product Consultation",
    "MVP Development Roadmap",
    "Dedicated Product Team",
    "Agile Development Process"
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hero-section,
        .hero-section h1,
        .hero-section p,
        .hero-section a {
          font-family: 'Rajdhani', sans-serif !important;
        }
      `}} />
      <section 
        className="testomonial-banner bg-cover hero-section"
        role="banner"
        aria-label="product development company in India"
        title="product development company in India"
        style={{ 
          backgroundImage: 'url(/img/product-development-company-in-india.png)',
          height: "100vh", 
          minHeight: "650px", 
          display: "flex", 
          alignItems: "center", 
          padding: "0", 
          margin: "0", 
          overflow: "hidden"
        }}
      >
        <div className="container">
          <div className="banner-text" style={{ padding: "0" }}>
            <h1 id="product-development-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Product Development Services for Startups, SMEs & Enterprises
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee" }}>
              Looking for a reliable product development partner that can transform your idea into a successful digital product? TGAYS Technology Pvt. Ltd. helps startups, SMEs, and enterprises build innovative, scalable, and user-centric products that accelerate growth and maximize ROI.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Schedule a Free Product Discovery Call" style={{ margin: "0" }}>
                Schedule a Free Product Discovery Call
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Get Started Today" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Access Section directly below hero */}
      <section className="expertise-intro-section pt100 pb70 bg-white" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="crumina-module crumina-heading">
                <h2 style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.3", marginBottom: "20px" }}>
                  Accelerate Innovation. Reduce Development Risk. Launch Faster.
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  As a leading <Link href="https://www.tgaystechnology.com" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>product development company in India</Link>, from idea validation and MVP development to AI integration, cloud architecture, and full-scale product engineering, our experts deliver end-to-end product development solutions tailored to your business goals. Whether you're launching a new SaaS platform, healthcare application, fintech solution, or enterprise product, we provide the technology, strategy, and execution needed to succeed in competitive markets across the USA, UK, and India.
                </p>
                
                <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Get Started Today</h4>
                  <div className="d-flex flex-wrap gap-3" style={{ gap: "15px" }}>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Schedule a Free Product Discovery Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm" style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "16px" }}>
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Our Development Advantages</h3>
                <div className="row">
                  {capabilities.map((item, index) => (
                    <div key={index} className="col-md-12 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="me-2" style={{ color: "#0083FF", fontSize: "1.2rem", fontWeight: "bold" }}>✓</span>
                        <span style={{ fontSize: "0.95rem", color: "#333", fontWeight: "500" }}>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDevelopmentBanner;