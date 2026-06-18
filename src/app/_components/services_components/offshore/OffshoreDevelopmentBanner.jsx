import React from 'react';
import Link from 'next/link';

const OffshoreDevelopmentBanner = () => {
  const capabilities = [
    "Access Top Indian Developers",
    "Reduce Development Costs by up to 60%",
    "Faster Time-to-Market",
    "Flexible Engagement Models",
    "Dedicated Development Teams",
    "Agile Delivery Process",
    "Transparent Communication",
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
        style={{ 
          backgroundImage: 'url(/img/offshope-bg.png)',
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
            <h1 id="offshore-development-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Offshore Development Company in India for Scalable Business Growth
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee" }}>
              Looking for a reliable offshore development company in India to build, scale, and support your software projects? TGAYS Technology Pvt. Ltd. helps startups, SMEs, and enterprises hire highly skilled offshore developers, dedicated teams, and technology experts who deliver high-quality solutions while reducing development costs by up to 60%.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Hire Offshore Developers Now" style={{ margin: "0" }}>
                Hire Offshore Developers
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Schedule a Free Strategy Call" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Schedule a Free Strategy Call
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
                  A Trusted Offshore Partner for Global Delivery Expertise
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  Whether you're launching a SaaS platform, modernizing enterprise systems, building healthcare software, developing fintech applications, or expanding your eCommerce operations, our offshore development services provide the expertise, flexibility, and scalability your business needs.
                </p>
                
                <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Get Started Today</h4>
                  <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "12px" }}>
                    Discuss your project requirements with our offshore development specialists and receive a tailored engagement plan.
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
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Why Businesses Worldwide Choose TGAYS</h3>
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

export default OffshoreDevelopmentBanner;
