import React from 'react';
import Link from 'next/link';

const CrmDevelopmentBanner = () => {
  const capabilities = [
    "Fully Customized CRM Platforms",
    "Sales & Marketing Automation",
    "Enterprise-Grade Security",
    "Cloud-Based & Scalable Architecture",
    "Third-Party Integrations",
    "Mobile-Friendly CRM Applications",
    "Dedicated CRM Developers",
    "Ongoing Support & Optimization"
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
        aria-label="custom CRM development company in India"
        title="custom CRM development company in India"
        style={{ 
          backgroundImage: 'url(/img/custom-crm-development-company-in-india.png)',
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
            <h1 id="crm-development-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Custom CRM Development Company in India
            </h1>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "15px", color: "#0083FF" }}>
              Build a CRM That Fits Your Business, Not the Other Way Around
            </h3>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee" }}>
              Looking for a reliable custom CRM development company in India that can design, develop, and scale a CRM solution tailored to your unique business processes?
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Schedule a Free CRM Consultation" style={{ margin: "0" }}>
                Schedule a Free CRM Consultation
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Get a Custom CRM Development Quote" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Get a Custom CRM Development Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Intro Section directly below hero */}
      <section className="expertise-intro-section pt100 pb70 bg-white" style={{ borderBottom: "1px solid #f0f0f0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="crumina-module crumina-heading">
                <h2 style={{ fontSize: "2rem", fontWeight: "700", lineHeight: "1.3", marginBottom: "20px" }}>
                  A Strategic CRM Development Partner for Global Businesses
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  As a leading <Link href="https://www.tgaystechnology.com/services/customized-crm-development" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>custom CRM development company in India</Link>, TGAYS Technology Pvt. Ltd. helps startups, SMEs, enterprises, healthcare providers, real estate firms, and eCommerce businesses streamline operations, automate workflows, improve customer engagement, and accelerate growth through fully customized CRM solutions. Unlike off-the-shelf CRM platforms that force businesses to adapt their processes, our custom CRM development services are built around your workflows, goals, customer journey, and operational requirements. Whether you need sales automation, lead management, customer support, marketing automation, analytics, or enterprise-level integrations, we deliver CRM systems that create measurable business value.
                </p>
                
                <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Ready to Build a CRM That Drives Growth?</h4>
                  <p style={{ fontSize: "0.95rem", color: "#333", marginBottom: "12px" }}>
                    Discuss your project requirements with our CRM specialists and receive a tailored engagement plan.
                  </p>
                  <div className="d-flex flex-wrap gap-3" style={{ gap: "15px" }}>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Schedule a Free CRM Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm" style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "16px" }}>
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Why Businesses Choose Our CRM Solutions</h3>
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

export default CrmDevelopmentBanner;