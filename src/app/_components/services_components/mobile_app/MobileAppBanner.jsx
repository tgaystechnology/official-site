import React from 'react';
import Link from 'next/link';

const MobileAppBanner = () => {
  const expertise = [
    "Custom Mobile Applications",
    "Android & iOS Development",
    "React Native & Flutter Apps",
    "Enterprise-Grade Security",
    "Dedicated Development Teams",
    "AI-Powered Mobile Apps",
    "Native Swift & Kotlin Apps",
    "App Store Deployment"
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .hero-section,
        .hero-section h1,
        .hero-section p,
        .hero-section a {
          font-family: 'Nunito', sans-serif !important;
        }
      `}} />
      <section 
        className="testomonial-banner bg-cover hero-section"
        role="banner"
        aria-labelledby="mobile-app-development-heading"
        style={{ 
          backgroundImage: 'url(/img/mobile-app-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          minHeight: '650px',
          display: 'flex',
          alignItems: 'center',
          padding: '0',
          margin: '0',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div className="banner-text" style={{ padding: '0', maxWidth: '800px' }}>
            <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.15)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px", display: 'inline-block' }}>
              Trusted Mobile App Agency
            </span>
            <h1 id="mobile-app-development-heading" style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}>
              Mobile App Development Company in India
            </h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px', color: '#eee' }}>
              Build Scalable, High-Performance Mobile Apps That Drive Business Growth. Partner with TGAYS Technology Pvt. Ltd. to design, build, and launch custom mobile products tailored to your goals.
            </p>
            <div className="d-flex flex-wrap gap-3" style={{ gap: '15px' }}>
              <Link href="/contact-us" className="first-tag" style={{ margin: 0 }} aria-label="Get Started with Mobile App Development">
                Get Started Today
              </Link>
              <Link href="/contact-us" className="first-tag" style={{ margin: 0, background: 'transparent', border: '2px solid #fff' }} aria-label="Schedule a Free Consultation">
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Access Section directly below hero */}
      <section className="expertise-intro-section pt100 pb70 bg-white" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Business objectives and CTA */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="crumina-module crumina-heading">
                <h2 style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.3", marginBottom: "20px" }}>
                  Build Scalable, Future-Ready Mobile Applications Tailored to Your Business Objectives
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  TGAYS Technology Pvt. Ltd. is a trusted mobile app development company in India helping startups, SMEs, enterprises, healthcare providers, real estate companies, e-commerce brands, and fintech businesses transform ideas into powerful mobile applications. Our team specializes in designing, developing, and deploying custom mobile solutions that enhance customer engagement, streamline operations, and accelerate revenue growth.
                </p>
                
                 <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Get Started Today</h4>
                  <div className="d-flex flex-wrap gap-3" style={{ gap: "15px" }}>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Schedule a Free Consultation Today
                    </Link>
                    <span style={{ color: "#aaa" }}>|</span>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Get Started Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Key capabilities Checklist */}
            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm" style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "16px" }}>
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Our Mobile Engineering Expertise</h3>
                <div className="row">
                  {expertise.map((item, index) => (
                    <div key={index} className="col-md-6 mb-3">
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

export default MobileAppBanner;