import React from 'react';
import Link from 'next/link';

const HealthcareBanner = () => {
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
        aria-labelledby="healthcare-heading"
        style={{ backgroundImage: "url('/img/HealthHub-bg.png')", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", padding: "0", margin: "0", overflow: "hidden", position: "relative" }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(90deg, rgba(6, 11, 25, 0.9) 0%, rgba(6, 11, 25, 0.75) 50%, rgba(6, 11, 25, 0.4) 100%)", zIndex: 1 }}></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="banner-text" style={{ padding: "0" }}>
            <h1 id="healthcare-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Healthcare Software Development Solutions for Modern Healthcare Organizations
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee", maxWidth: "800px" }}>
              As a leading healthcare software development company India, TGAYS Technology Pvt. Ltd. helps healthcare providers, hospitals, clinics, and medical enterprises accelerate digital transformation through secure, scalable, and intelligent healthcare technology solutions.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Schedule a Free Healthcare Technology Consultation" style={{ margin: "0" }}>
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthcareBanner;
