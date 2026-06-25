'use client'
import React from 'react';

const TourBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Reduced Operational Costs",
      description: "Automate manual booking tasks, invoicing, and inventory management, significantly reducing administrative overhead.",
      icon: "trending-down-outline"
    },
    {
      id: 2,
      title: "Increased Bookings",
      description: "Provide customers with a seamless, mobile-responsive, 24/7 self-service booking portal to capture more sales.",
      icon: "cart-outline"
    },
    {
      id: 3,
      title: "Real-time Inventory",
      description: "Synchronize flights, hotels, and tour availability instantly across all B2B and B2C channels.",
      icon: "sync-outline"
    },
    {
      id: 4,
      title: "Better Customer Insights",
      description: "Leverage integrated CRM analytics to understand traveler preferences and run targeted marketing campaigns.",
      icon: "pie-chart-outline"
    },
    {
      id: 5,
      title: "Global Reach",
      description: "Support multiple currencies, languages, and international payment gateways to expand your market globally.",
      icon: "globe-outline"
    },
    {
      id: 6,
      title: "Streamlined Accounting",
      description: "Automate commission tracking, vendor payouts, and financial reporting with integrated ERP systems.",
      icon: "calculator-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="tour-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="tour-benefits-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF OUR <span className="c-primary">TOUR & TRAVEL SYSTEM</span>
          </h2>
          <p>Discover how our travel technology solutions can transform your agency's efficiency and profitability.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="tour-advantages-heading">
        <div className="container">
          <div className="row">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="key-wrap" style={{ minHeight: "220px" }}>
                  <div className="key-icon" aria-hidden="true">
                    <span><ion-icon name={benefit.icon}></ion-icon></span>
                  </div>
                  <div className="key-text">
                    <h3 className="benefit-title" style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "15px" }}>{benefit.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-answer-box mt-5 p-4 text-center" style={{ background: "rgba(0, 131, 255, 0.03)", border: "1px solid rgba(0, 131, 255, 0.15)", borderRadius: "16px", marginTop: "45px", boxShadow: "rgba(0, 0, 0, 0.01) 0px 10px 20px" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: Why Upgrade Your Travel Tech?</h4>
            <p className="mb-0" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              A modern Tour & Travel System eliminates manual errors, connects you to global suppliers instantly, and provides your customers with the rapid, self-service booking experience they expect.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourBenefits;
