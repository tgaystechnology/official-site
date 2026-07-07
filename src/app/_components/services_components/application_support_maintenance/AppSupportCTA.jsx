'use client'
import React from 'react';
import Link from 'next/link';

const AppSupportCTA = () => {
  return (
    <section className="smm-cta-section pt100 pb100" style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
      <div className="container">
        <div 
          className="cta-wrapper p-5 rounded-4 shadow-lg position-relative" 
          style={{ 
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            overflow: "hidden"
          }}
        >
          {/* Decorative background circles */}
          <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", background: "rgba(0, 131, 255, 0.2)", borderRadius: "50%", filter: "blur(50px)" }}></div>
          <div style={{ position: "absolute", bottom: "-50px", left: "-50px", width: "200px", height: "200px", background: "rgba(0, 131, 255, 0.15)", borderRadius: "50%", filter: "blur(60px)" }}></div>

          <div className="row align-items-center position-relative" style={{ zIndex: 2 }}>
            {/* Left Column: Text Content */}
            <div className="col-lg-7 text-center text-lg-start mb-5 mb-lg-0 pe-lg-5">
              <span className="badge mb-3" style={{ background: "rgba(255, 94, 58, 0.2)", color: "#ff5e3a", padding: "8px 16px", borderRadius: "30px", fontWeight: "bold" }}>
                Get a Free Application Health Assessment
              </span>
              <h2 style={{ fontSize: "2.4rem", fontWeight: "800", color: "#ffffff", marginBottom: "20px", lineHeight: "1.2" }}>
                Ready to Improve Application Reliability?
              </h2>
              <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", marginBottom: "30px", lineHeight: "1.6" }}>
                Your applications are critical business assets. Don't let downtime, security vulnerabilities, or performance issues affect your growth. Partner with TGAYS Technology Pvt. Ltd. for reliable, scalable, and cost-effective <Link href="https://www.tgaystechnology.com/services/application-support-maintenance" style={{ color: "#0083FF", textDecoration: "none" }}>Application Support & Maintenance Services India</Link> designed to keep your business running efficiently.
              </p>
              
              <div className="d-flex flex-column flex-sm-row flex-wrap gap-3 mt-4">
                <Link href="/contact-us" className="btn m-0 px-4 py-3 fw-bold rounded-3 d-inline-flex align-items-center justify-content-center text-center" style={{ background: "#0083FF", color: "#fff", border: "none", boxShadow: "0 4px 15px rgba(0, 131, 255, 0.4)", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                  Schedule a Free Consultation
                </Link>
                <Link href="/contact-us" className="btn m-0 px-4 py-3 fw-bold rounded-3 d-inline-flex align-items-center justify-content-center text-center" style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.2)", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0083FF"; e.currentTarget.style.background = "rgba(0, 131, 255, 0.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.background = "transparent"; }}>
                  Request a Custom Support Plan
                </Link>
              </div>
            </div>

            {/* Right Column: Checklist */}
            <div className="col-lg-5">
              <div className="p-4 rounded-4" style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)" }}>
                <h4 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#fff", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "15px" }}>
                  What You'll Receive:
                </h4>
                <ul className="list-unstyled m-0">
                  {[
                    "24x7 Monitoring",
                    "Dedicated Support Team",
                    "SLA-Based Support",
                    "Performance Optimization",
                    "Security Management",
                    "Global Delivery Capability"
                  ].map((item, index) => (
                    <li key={index} className="d-flex align-items-center mb-3" style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.05rem", fontWeight: "500" }}>
                      <span className="d-flex align-items-center justify-content-center rounded-circle me-3" style={{ width: "24px", height: "24px", background: "rgba(0, 131, 255, 0.2)", color: "#0083FF", fontSize: "0.8rem" }}>
                        <ion-icon name="checkmark-outline"></ion-icon>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSupportCTA;
