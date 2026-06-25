'use client'
import React from 'react';
import Link from 'next/link';

const CRMBanner = () => {
  const capabilities = [
    "Lead & Opportunity Tracking",
    "Sales Pipeline Automation",
    "Performance Analytics",
    "Omnichannel Customer Support",
    "Secure Cloud Infrastructure",
    "Seamless Third-Party Integrations"
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
        aria-labelledby="crm-heading"
        style={{ backgroundImage: "url('/img/Retail-bg.png')", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", padding: "0", margin: "0", overflow: "hidden", position: "relative" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.65)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="banner-text" style={{ padding: "0" }}>
            <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.2)", color: "#4da3ff", fontWeight: "bold", padding: "8px 16px", fontSize: "0.85rem", borderRadius: "30px", letterSpacing: "1px", border: "1px solid rgba(0, 131, 255, 0.4)" }}>
              Custom CRM Solutions
            </span>
            <h1 id="crm-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "3rem", color: "#fff", textTransform: "capitalize" }}>
              Custom CRM Development Services for Growing Businesses
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee", maxWidth: "800px" }}>
              Looking for a reliable CRM development company India that can transform the way you manage leads, customers, sales pipelines, and business operations? TGAYS Technology Pvt. Ltd. specializes in designing and developing custom CRM solutions that help startups, SMEs, enterprises, and growing organizations streamline customer interactions, automate workflows, improve team productivity, and accelerate revenue growth.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag m-0" aria-label="Get a Free CRM Consultation" style={{ margin: "0" }}>
                Get a Free CRM Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section directly below hero */}
      <section className="expertise-intro-section pt100 pb70 bg-white" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="crumina-module crumina-heading">
                <h2 style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.3", marginBottom: "20px" }}>
                  Intelligent Solutions to Drive Measurable Outcomes
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "15px" }}>
                  Our CRM experts build scalable, secure, and feature-rich CRM platforms tailored to your unique business processes. Whether you need a cloud-based CRM, sales automation system, customer support platform, or enterprise-grade customer relationship management solution, we deliver CRM software that drives measurable business outcomes.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  Stop managing customers with disconnected tools and spreadsheets. Build a powerful ecosystem that unites your sales, marketing, and support teams.
                </p>
                
                 <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Receive a Customized Roadmap</h4>
                  <div className="d-flex flex-wrap gap-3" style={{ gap: "15px" }}>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Request a Free Demo Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm" style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "16px" }}>
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Core Capabilities</h3>
                <div className="row">
                  {capabilities.map((item, index) => (
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

export default CRMBanner;
