'use client'
import React from 'react';
import Link from 'next/link';

const WebDevCTA = () => {
  return (
    <section className="web-cta section-padding" style={{ background: "#0c1527", position: "relative", overflow: "hidden" }}>
      <div className="container py-5 text-center text-white position-relative" style={{ zIndex: 2 }}>
        <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.2)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
          Let's Build Something Exceptional Together
        </span>
        <h2 className="fw-bold text-white mb-3" style={{ fontSize: "2.5rem", lineHeight: "1.2" }}>
          Build a Website That Drives Real Business Growth
        </h2>
        <p className="text-white-50 mx-auto mb-4" style={{ maxWidth: "750px", fontSize: "1.05rem", lineHeight: "1.6" }}>
          Your website should do more than look attractive—it should generate leads, improve customer experiences, and help your business grow. Partner with TGAYS Technology to create a powerful digital presence that delivers measurable results.
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Link href="/contact-us" className="btn btn-primary px-4 py-3 fw-bold rounded-pill" style={{ minWidth: "200px" }}>
            Schedule a Free Consultation
          </Link>
          <Link href="/contact-us" className="btn btn-outline-light px-4 py-3 fw-bold rounded-pill" style={{ minWidth: "200px" }}>
            Request a Custom Proposal
          </Link>
          <Link href="/contact-us" className="btn btn-info px-4 py-3 fw-bold text-white rounded-pill" style={{ minWidth: "200px", background: "#ff5e3a", borderColor: "#ff5e3a" }}>
            Talk to an Expert Today
          </Link>
        </div>
      </div>
      <div className="position-absolute" style={{ top: "-50px", left: "-50px", width: "300px", height: "300px", background: "rgba(0,131,255,0.08)", borderRadius: "50%", filter: "blur(60px)" }}></div>
      <div className="position-absolute" style={{ bottom: "-50px", right: "-50px", width: "300px", height: "300px", background: "rgba(255,94,58,0.08)", borderRadius: "50%", filter: "blur(60px)" }}></div>
    </section>
  );
};

export default WebDevCTA;
