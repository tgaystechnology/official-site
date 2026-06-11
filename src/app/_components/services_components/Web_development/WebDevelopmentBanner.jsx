'use client'
import React from 'react'
import Link from 'next/link'

const WebDevelopmentBanner = () => {
  const expertise = [
    "Custom Website Development",
    "Web Application Development",
    "Enterprise Web Solutions",
    "eCommerce Website Development",
    "WordPress Development",
    "SaaS Platform Development",
    "Progressive Web Apps (PWAs)",
    "API Development & Integrations",
    "CMS Development",
    "Website Modernization Services"
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
        aria-labelledby="web-development-heading"
        style={{ backgroundImage: "url('/img/Web-App-Development-bg.png')", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", padding: "0", margin: "0", overflow: "hidden" }}
      >
        <div className="container">
          <div className="banner-text text-start" style={{ padding: "0" }}>
            <h1 id="web-development-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Transform Your Digital Presence with a Leading Web Development Company India
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee" }}>
              Looking for a reliable web development company India that can build high-performance websites, scalable web applications, and revenue-generating digital experiences? TGAYS Technology Pvt. Ltd. helps startups, SMEs, enterprises, and growing brands across the USA, UK, and India create powerful web solutions that drive traffic, increase conversions, and accelerate business growth.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Get Free Consultation" style={{ margin: "0" }}>
                Get Free Consultation
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Request a Custom Quote" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Access Section directly below hero */}
      <section className="expertise-intro-section pt100 pb70 bg-white" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-start">
              <div className="crumina-module crumina-heading">
                <h2 style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.3", marginBottom: "20px" }}>
                  Future-Ready Web Solutions Tailored to Your Business Objectives
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  As a trusted technology partner, we combine strategic thinking, modern technologies, and user-centric design to deliver custom websites and web applications tailored to your business objectives. Whether you need a corporate website, eCommerce platform, enterprise application, SaaS solution, or custom portal, our expert developers deliver future-ready digital solutions that perform.
                </p>
                
                <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Get Started Today</h4>
                  <div className="d-flex flex-wrap gap-3" style={{ gap: "15px" }}>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Get Free Consultation
                    </Link>
                    <span style={{ color: "#aaa" }}>|</span>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Request a Custom Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-start">
              <div className="p-4 rounded-4 shadow-sm" style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "16px" }}>
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Our Web Development Expertise</h3>
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
  )
}

export default WebDevelopmentBanner


