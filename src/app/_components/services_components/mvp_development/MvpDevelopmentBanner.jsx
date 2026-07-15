import React from 'react';
import Link from 'next/link';

const MvpDevelopmentBanner = () => {
  const capabilities = [
    "Validate Your Business Idea",
    "Reduce Product Development Risks",
    "Launch Faster",
    "Optimize Development Costs",
    "Gain Investor Confidence",
    "Scale Based on Real User Feedback"
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
        style={{ 
          backgroundImage: 'url(/img/mvp-development-company-in-india.png)', // Fixed background image path
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
            <h1 id="mvp-development-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              MVP Development Company in India for Startups, SaaS & Enterprises
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee" }}>
              Looking for a reliable MVP development company in India to transform your product idea into a market-ready solution? TGAYS Technology Pvt. Ltd. helps startups, entrepreneurs, SaaS businesses, SMEs, and enterprises build Minimum Viable Products (MVPs) that validate ideas, attract investors, reduce development risks, and accelerate time-to-market.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Build Your MVP" style={{ margin: "0" }}>
                Build Your MVP
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Request a Free Product Assessment" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Request a Free Product Assessment
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
                  A Trusted MVP Development Partner
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  As a leading <Link href="https://www.tgaystechnology.com" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>MVP development company in India</Link>, our MVP development experts focus on building only the most critical features required to test market demand, gather real user feedback, and achieve product-market fit. Whether you're launching a SaaS platform, mobile app, healthcare solution, fintech product, marketplace, or enterprise software, we help you build smarter, faster, and more cost-effectively.
                </p>
                
                <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Get a Free MVP Consultation</h4>
                  <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "12px" }}>
                    Discuss your product vision with our MVP specialists and receive a tailored technical roadmap.
                  </p>
                  <div className="d-flex flex-wrap gap-3" style={{ gap: "15px" }}>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Get a Free Consultation Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm" style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "16px" }}>
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Turn Your Idea into a Market-Ready Product</h3>
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

export default MvpDevelopmentBanner;