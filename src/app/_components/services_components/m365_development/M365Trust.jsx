'use client'
import React from 'react';

const M365Trust = () => {
  return (
    <section className="m365-trust-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY BUSINESSES TRUST <span className="c-primary">TGAYS TECHNOLOGY</span>
          </h2>
          <p className="slider-content-text">We are an enterprise-grade Microsoft 365 development partner offering global delivery standards.</p>
        </div>

        <div className="row mt-5">
          {/* Experienced Experts */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex">
            <div className="card w-100 p-4 border-0 shadow-sm rounded-4 text-center d-flex flex-column" style={{ borderRadius: "16px", background: "#fff" }}>
              <div className="icon mb-3 text-primary" style={{ fontSize: "2rem" }}>
                <ion-icon name="people-outline"></ion-icon>
              </div>
              <h3 className="h6 fw-bold mb-3 text-dark">Experienced Microsoft Experts</h3>
              <ul className="list-unstyled text-start m-0 p-0" style={{ fontSize: "0.85rem", color: "#666" }}>
                <li className="mb-2">✓ Microsoft 365</li>
                <li className="mb-2">✓ Azure Cloud Services</li>
                <li className="mb-2">✓ Power Platform Suite</li>
                <li className="mb-2">✓ SharePoint & Teams</li>
                <li className="mb-2">✓ Enterprise Integrations</li>
              </ul>
            </div>
          </div>

          {/* Modern Tech Stack */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex">
            <div className="card w-100 p-4 border-0 shadow-sm rounded-4 text-center d-flex flex-column" style={{ borderRadius: "16px", background: "#fff" }}>
              <div className="icon mb-3 text-success" style={{ fontSize: "2rem" }}>
                <ion-icon name="layers-outline"></ion-icon>
              </div>
              <h3 className="h6 fw-bold mb-3 text-dark">Modern Technology Stack</h3>
              <ul className="list-unstyled text-start m-0 p-0" style={{ fontSize: "0.85rem", color: "#666" }}>
                <li className="mb-2">✓ SharePoint Online (SPFx)</li>
                <li className="mb-2">✓ PowerApps & Flow</li>
                <li className="mb-2">✓ Power BI Analytics</li>
                <li className="mb-2">✓ Azure Serverless Functions</li>
                <li className="mb-2">✓ Microsoft Graph API</li>
              </ul>
            </div>
          </div>

          {/* Flexible Engagement Models */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex">
            <div className="card w-100 p-4 border-0 shadow-sm rounded-4 text-center d-flex flex-column" style={{ borderRadius: "16px", background: "#fff" }}>
              <div className="icon mb-3 text-warning" style={{ fontSize: "2rem" }}>
                <ion-icon name="contract-outline"></ion-icon>
              </div>
              <h3 className="h6 fw-bold mb-3 text-dark">Flexible Engagement Models</h3>
              <ul className="list-unstyled text-start m-0 p-0" style={{ fontSize: "0.85rem", color: "#666" }}>
                <li className="mb-2">✓ Dedicated Development Teams</li>
                <li className="mb-2">✓ Fixed Cost Projects</li>
                <li className="mb-2">✓ Time & Material Contracts</li>
                <li className="mb-2">✓ Managed Support Services</li>
              </ul>
            </div>
          </div>

          {/* Global Support Coverage */}
          <div className="col-lg-3 col-md-6 mb-4 d-flex">
            <div className="card w-100 p-4 border-0 shadow-sm rounded-4 text-center d-flex flex-column" style={{ borderRadius: "16px", background: "#fff" }}>
              <div className="icon mb-3 text-danger" style={{ fontSize: "2rem" }}>
                <ion-icon name="globe-outline"></ion-icon>
              </div>
              <h3 className="h6 fw-bold mb-3 text-dark">Global Support Coverage</h3>
              <p className="mb-3 text-muted text-start" style={{ fontSize: "0.8rem", lineHeight: "1.4" }}>
                Serving organizations across:
              </p>
              <ul className="list-unstyled text-start m-0 p-0" style={{ fontSize: "0.85rem", color: "#666" }}>
                <li className="mb-2">✓ India</li>
                <li className="mb-2">✓ United States (USA)</li>
                <li className="mb-2">✓ United Kingdom (UK)</li>
                <li className="mb-2">✓ Australia</li>
                <li className="mb-2">✓ Dubai (UAE)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-muted" style={{ fontSize: "0.95rem", fontStyle: "italic", maxWidth: "800px", margin: "0 auto" }}>
            Whether you're searching for a Microsoft 365 Development Company in USA, Microsoft 365 Development Company in UK, Microsoft 365 Development Company in Australia, or a reliable offshore development partner, TGAYS Technology delivers enterprise-grade solutions with global standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default M365Trust;
