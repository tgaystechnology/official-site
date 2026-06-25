'use client'
import React from 'react';
import Link from 'next/link';

const HealthFitnessCTA = () => {
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
                  Let's Build the Future of Digital Fitness
                </span>
                <h2 className="text-white mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
                  Ready to Launch a Successful Health & Fitness Platform?
                </h2>
                <p className="text-white-50 mb-3" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto 15px auto" }}>
                  Partner with TGAYS Technology Pvt. Ltd., a trusted fitness app development company India, to create engaging, scalable, and revenue-generating health and fitness solutions.
                </p>
                <p className="text-white-50 mb-5" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto" }}>
                  Whether you need a fitness mobile app, wellness platform, gym management software, wearable integration, AI-powered coaching solution, or a complete fitness SaaS ecosystem, our experts are ready to help bring your vision to life.
                </p>

                <div className="d-flex flex-wrap justify-content-center align-items-center gap-3" style={{ gap: "15px" }}>
                  <Link href="/contact-us" className="btn m-0" 
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
                    Request a Free Consultation
                  </Link>
                  <Link href="/contact-us" className="btn m-0" 
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
                    Get a Custom Estimate
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

export default HealthFitnessCTA;
