import React from 'react';
import Link from 'next/link';

const ItStaffAugmentationBanner = () => {
  const expertise = [
    "Software Development Staff Augmentation",
    "Dedicated Development Teams",
    "Full Stack Developers",
    "Frontend & Backend Engineers",
    "AI & Machine Learning Specialists",
    "Cloud & DevOps Engineers",
    "QA & Testing Experts",
    "Mobile App Developers",
    "Project Managers & Scrum Masters"
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
        aria-labelledby="it-staff-augmentation-heading"
        style={{ backgroundImage: "url('/img/it-staff-banner.png')", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", padding: "0", margin: "0", overflow: "hidden" }}
      >
        <div className="container">
          <div className="banner-text" style={{ padding: "0" }}>
            <h1 id="it-staff-augmentation-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Scale Your Business with a Trusted IT Staff Augmentation Company India
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee" }}>
              Quickly scale your development capabilities and reduce recruitment costs. TGAYS Technology Pvt. Ltd. provides top-tier pre-vetted developers, cloud experts, and dedicated development teams on demand to accelerate your product timeline while you maintain complete control.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Schedule a Free Consultation" style={{ margin: "0" }}>
                Schedule a Free Consultation
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Hire Dedicated Developers" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Hire Dedicated Developers
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
                  Access Top-Tier Technology Talent Without Long-Term Hiring Risks
                </h2>
                <p style={{ fontSize: "1.05rem", lineHeight: "1.6", color: "#555", marginBottom: "25px" }}>
                  Whether you need a single developer, a specialized technical resource, or a complete offshore development team, we provide pre-vetted professionals who seamlessly integrate into your existing processes and deliver measurable business results.
                </p>
                
                 <div className="get-started-box p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "10px", color: "#0c1527" }}>Get Started Today</h4>
                  <div className="d-flex flex-wrap gap-3" style={{ gap: "15px" }}>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Schedule a Free Consultation
                    </Link>
                    <span style={{ color: "#aaa" }}>|</span>
                    <Link href="/contact-us" style={{ fontWeight: "600", color: "#0083FF", textDecoration: "underline" }}>
                      Hire Dedicated Developers
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-4 shadow-sm" style={{ background: "#fafafa", border: "1px solid #eee", borderRadius: "16px" }}>
                <h3 className="mb-4 text-dark" style={{ fontSize: "1.25rem", fontWeight: "700" }}>Our IT Staff Augmentation Expertise</h3>
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

export default ItStaffAugmentationBanner;
