'use client'
import React from 'react';
import Link from 'next/link';

const MobileCTA = () => {
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
                  Let's Discuss Your Project
                </span>
                
                <h2 className="text-white mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
                  Ready to Build Your Mobile App?
                </h2>
                
                <p className="text-white-50 mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto 20px auto" }}>
                  Whether you're a startup launching an innovative idea or an enterprise seeking digital transformation, TGAYS Technology delivers mobile applications that drive growth, engagement, and ROI.
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3 mb-5" style={{ color: "#fff", fontSize: "0.95rem", fontWeight: "600" }}>
                  {['Free Consultation', 'Business Requirement Analysis', 'Technology Recommendations', 'Project Estimation', 'Dedicated Experts'].map((item, index) => (
                    <span key={index} className="d-flex align-items-center" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '6px 16px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <span style={{ color: '#00e676', marginRight: '8px' }}>✓</span> {item}
                    </span>
                  ))}
                </div>

                <div className="d-flex justify-content-center">
                  <Link href="/contact-us" className="btn" 
                    style={{ 
                      minWidth: "250px", 
                      background: "#0083FF", 
                      color: "#fff", 
                      fontWeight: "600",
                      padding: "14px 28px",
                      borderRadius: "30px",
                      border: "none",
                      transition: "all 0.3s ease",
                      boxShadow: "0 4px 15px rgba(0, 131, 255, 0.3)"
                    }}>
                    Contact TGAYS Technology Today
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

export default MobileCTA;
