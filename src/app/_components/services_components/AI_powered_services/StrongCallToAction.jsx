'use client'
import React from 'react';
import Link from 'next/link';

const StrongCallToAction = () => {
  return (
    <section className="bg-cover free-call-section" style={{ background: "#060913", padding: "120px 0" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="p-5 text-center shadow-lg position-relative overflow-hidden" 
              style={{ 
                borderRadius: "24px", 
                background: "linear-gradient(135deg, #091020 0%, #0c1527 100%)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 60px -15px"
              }}>
              {/* Glowing background light */}
              <div style={{
                position: "absolute",
                top: "-150px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "300px",
                height: "300px",
                background: "radial-gradient(circle, rgba(0, 131, 255, 0.25) 0%, transparent 70%)",
                pointerEvents: "none"
              }} />

              <div style={{ position: "relative", zIndex: 2 }}>
                <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.15)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
                  Schedule a Free AI Consultation Today
                </span>
                <h2 className="text-white mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-white-50 mb-3" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto 15px auto" }}>
                  Partner with TGAYS Technology Pvt. Ltd. to build intelligent, scalable, and future-ready AI solutions that drive measurable business growth.
                </p>
                <p className="text-white-50 mb-5" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto" }}>
                  Whether you're a startup exploring AI opportunities or an enterprise scaling digital transformation, our AI specialists can help.
                </p>

                <div className="d-flex flex-wrap justify-content-center align-items-center gap-3" style={{ gap: "15px" }}>
                  <Link href="/contact-us" className="btn" 
                    style={{ 
                      minWidth: "220px", 
                      background: "#0083FF", 
                      color: "#fff", 
                      fontWeight: "600",
                      padding: "14px 28px",
                      borderRadius: "30px",
                      border: "none",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(0, 131, 255, 0.3)"
                    }}>
                    Talk to an AI Expert
                  </Link>
                  <Link href="/contact-us" className="btn" 
                    style={{ 
                      minWidth: "220px", 
                      background: "#ff5e3a", 
                      color: "#fff", 
                      fontWeight: "600",
                      padding: "14px 28px",
                      borderRadius: "30px",
                      border: "none",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(255, 94, 58, 0.3)"
                    }}>
                    Request a Custom Proposal
                  </Link>
                  <Link href="/contact-us" className="btn" 
                    style={{ 
                      minWidth: "220px", 
                      background: "rgba(255, 255, 255, 0.05)", 
                      color: "#fff", 
                      fontWeight: "600",
                      padding: "14px 28px",
                      borderRadius: "30px",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      transition: "all 0.3s ease"
                    }}>
                    Book a Discovery Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrongCallToAction;
