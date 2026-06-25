import React from 'react';
import Link from 'next/link';

const TourBanner = () => {
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
        aria-labelledby="tour-travel-heading"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", padding: "0", margin: "0", overflow: "hidden", position: "relative" }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(90deg, rgba(6, 11, 25, 0.9) 0%, rgba(6, 11, 25, 0.7) 50%, rgba(6, 11, 25, 0.4) 100%)", zIndex: 1 }}></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="banner-text" style={{ padding: "0" }}>
            <h1 id="tour-travel-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Transform Your Travel Business with a Smart Tour & Travel System
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee", maxWidth: "800px" }}>
              As a leading travel portal development company India, TGAYS Technology Pvt. Ltd. helps travel agencies, tour operators, DMCs, and travel startups streamline operations, automate bookings, and increase revenue through advanced Tour & Travel System solutions.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Request a Demo" style={{ margin: "0" }}>
                Request a Demo
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Schedule a Free Consultation" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourBanner;
