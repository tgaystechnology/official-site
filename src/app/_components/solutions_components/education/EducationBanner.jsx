'use client'
import React from 'react';
import Link from 'next/link';

const EducationBanner = () => {
  const expertise = [
    "Customized Solutions",
    "Cloud-Based Infrastructure",
    "Mobile-Friendly Access",
    "AI & Automation Ready",
    "Secure & Scalable Architecture",
    "Seamless Integrations"
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
        aria-labelledby="education-heading"
        style={{ backgroundImage: "url('/img/Education-bg.png')", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", padding: "0", margin: "0", overflow: "hidden", position: "relative" }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="banner-text" style={{ padding: "0" }}>
            <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.2)", color: "#4da3ff", fontWeight: "bold", padding: "8px 16px", fontSize: "0.85rem", borderRadius: "30px", letterSpacing: "1px", border: "1px solid rgba(0, 131, 255, 0.4)" }}>
              Education Management System
            </span>
            <h1 id="education-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem", color: "#fff" }}>
              Transform Educational Institutions with a Smart Education Management System
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee", maxWidth: "800px" }}>
              As a leading education software development company India, TGAYS Technology Pvt. Ltd. develops advanced Education Management Systems (EMS) that help schools, colleges, universities, coaching institutes, and training organizations streamline administration, improve student engagement, automate academic processes, and enhance institutional performance.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag m-0" aria-label="Request a Free Consultation Today" style={{ margin: "0" }}>
                Request a Free Consultation Today
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
                  Build a Future-Ready Education Management Platform
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "15px" }}>
                  While many organizations searching for a CRM development company India seek solutions to manage relationships and operations, educational institutions require a specialized Education Management System that combines student lifecycle management, admissions, attendance tracking, fee management, examination management, communication tools, and analytics within a single platform.
                </p>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  Our customized Education Management Systems empower educational institutions across India, USA, UK, Australia, and Dubai to digitize operations, improve efficiency, reduce administrative workloads, and deliver better learning experiences.
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

export default EducationBanner;