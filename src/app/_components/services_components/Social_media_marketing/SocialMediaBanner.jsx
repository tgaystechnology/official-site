import React from 'react';
import Link from 'next/link';

const SocialMediaBanner = () => {
  const capabilities = [
    "Strategic Social Media Growth Plans",
    "Platform-Specific Marketing Expertise",
    "Creative Content Development",
    "Paid Social Advertising Management",
    "Lead Generation Campaigns",
    "Community Building & Engagement",
    "Real-Time Performance Tracking",
    "ROI-Focused Marketing Execution"
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
        aria-label="social media marketing company India"
        title="social media marketing company India"
        style={{ 
          backgroundImage: 'url(/img/social-media-marketing-company-india.png)',
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
            <h1 id="social-media-marketing-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Social Media Marketing Services That Drive Engagement, Leads & Revenue
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee" }}>
              Looking for a trusted social media marketing partner to grow your brand, generate qualified leads, and increase customer engagement? TGAYS Technology Pvt. Ltd. delivers result-driven social media marketing services that help startups, SMEs, enterprises, eCommerce brands, healthcare organizations, real estate firms, and local businesses build meaningful connections with their target audience across today's most influential social platforms.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Book a Free Consultation" style={{ margin: "0" }}>
                Book a Free Consultation
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Request a Social Media Audit" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Request a Social Media Audit
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
                  A Trusted Social Media Management Company in India
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  As a leading <Link href="https://www.tgaystechnology.com" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>social media marketing company India</Link>, we combine strategy, content creation, paid advertising, audience targeting, community management, influencer collaborations, and performance analytics to transform social media into a powerful business growth engine. Whether you are targeting customers in India, USA, UK, Australia, Dubai, or global markets, our social media specialists create data-driven campaigns that deliver measurable business outcomes.
                </p>
                
                <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Get Your Free Strategy</h4>
                  <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "12px" }}>
                    Discuss your brand goals with our social media marketing specialists and receive a tailored growth plan.
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
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Why Businesses Choose TGAYS Technology</h3>
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

export default SocialMediaBanner;