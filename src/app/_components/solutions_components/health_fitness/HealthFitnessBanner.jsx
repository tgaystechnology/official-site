'use client'
import React from 'react';
import Link from 'next/link';

const HealthFitnessBanner = () => {
  const expertise = [
    "Custom Fitness App Development",
    "AI-Powered Personalization",
    "Wearable Device Integration",
    "Subscription & Membership Management",
    "Cloud-Native Architecture",
    "Enterprise-Grade Security"
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
        aria-label="fitness app development company India"
        title="fitness app development company India"
        aria-labelledby="health-fitness-heading"
        style={{ backgroundImage: "url('/img/fitness-app-development-company-india.png')", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", padding: "0", margin: "0", overflow: "hidden", position: "relative" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="banner-text" style={{ padding: "0" }}>
            <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.2)", color: "#4da3ff", fontWeight: "bold", padding: "8px 16px", fontSize: "0.85rem", borderRadius: "30px", letterSpacing: "1px", border: "1px solid rgba(0, 131, 255, 0.4)" }}>
              Fitness App Development Company India
            </span>
            <h1 id="health-fitness-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem", color: "#fff" }}>
              Build the Next Generation of Health & Fitness Applications
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee", maxWidth: "800px" }}>
              Create innovative digital fitness experiences that drive user engagement, retention, and revenue growth with smart technology.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag m-0" aria-label="Schedule a Free Fitness App Consultation" style={{ margin: "0" }}>
                Schedule a Free Fitness App Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Access Section directly below hero */}
      <section className="expertise-intro-section pt100 pb70 bg-white" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="crumina-module crumina-heading">
                <h2 style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.3", marginBottom: "20px" }}>
                  Transform Fitness Experiences with Smart Technology
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "15px" }}>
                  We specialize in designing and developing high-performance health and fitness applications, gym management systems, wearable integrations, nutrition platforms, wellness ecosystems, fitness marketplaces, AI-powered coaching apps, and SaaS fitness solutions that transform how people manage their health and wellness.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  As a leading <Link href="https://www.tgaystechnology.com" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>fitness app development company India</Link>, we help fitness startups, gym chains, personal trainers, wellness brands, healthcare providers, sports organizations, and enterprises deliver scalable and secure solutions tailored to their business goals.
                </p>
                
                 <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Start Building Your Platform Today</h4>
                  <div className="d-flex flex-wrap gap-3" style={{ gap: "15px" }}>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Schedule a Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm" style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "16px" }}>
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Our Capabilities</h3>
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

export default HealthFitnessBanner;
