import React from 'react';
import Link from 'next/link';

const EcommerceBanner = () => {
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
        aria-label="ecommerce development company India"
        title="ecommerce development company India"
        aria-labelledby="ecommerce-heading"
        style={{ backgroundImage: "url('/img/ecommerce-development-company-india.png')", height: "100vh", minHeight: "650px", display: "flex", alignItems: "center", padding: "0", margin: "0", overflow: "hidden", position: "relative" }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "linear-gradient(90deg, rgba(6, 11, 25, 0.9) 0%, rgba(6, 11, 25, 0.75) 50%, rgba(6, 11, 25, 0.4) 100%)", zIndex: 1 }}></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="banner-text" style={{ padding: "0" }}>
            <h1 id="ecommerce-heading" style={{ fontWeight: "700", lineHeight: "1.2", marginBottom: "20px", fontSize: "2.8rem" }}>
              Build, Scale & Grow with a High-Performance E-Commerce System
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "30px", color: "#eee", maxWidth: "800px" }}>
              TGAYS Technology Pvt. Ltd. helps businesses launch, manage, and scale powerful online stores, B2B portals, multi-vendor marketplaces, and enterprise eCommerce platforms.
            </p>
            
            <p className="fw-bold text-white mb-2" style={{ fontSize: "1.15rem" }}>Turn Visitors into Customers with a Future-Ready E-Commerce Platform</p>
            <div className="d-flex flex-wrap gap-4 mb-4 text-white-50" style={{ fontSize: "0.95rem" }}>
              <div className="d-flex align-items-center"><ion-icon name="checkmark-circle" className="text-primary me-2"></ion-icon> Custom Development</div>
              <div className="d-flex align-items-center"><ion-icon name="checkmark-circle" className="text-primary me-2"></ion-icon> Mobile-First Design</div>
              <div className="d-flex align-items-center"><ion-icon name="checkmark-circle" className="text-primary me-2"></ion-icon> Secure Payment Integration</div>
            </div>

            <div className="d-flex flex-wrap gap-3 mt-4" style={{ gap: "12px" }}>
              <Link href="/contact-us" className="first-tag" aria-label="Request a Free Consultation" style={{ margin: "0" }}>
                Request a Free Consultation
              </Link>
              <Link href="/contact-us" className="first-tag" aria-label="Get a Custom Quote" style={{ margin: "0", background: "transparent", border: "2px solid #fff", color: "#fff" }}>
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcommerceBanner;
