'use client'
import React from 'react';

const MobileBenefits = () => {
  const benefits = [
    {
      title: "Increase Customer Engagement",
      desc: "Mobile apps provide direct communication channels, instant updates, and personalized experiences that keep your audience active.",
      icon: "chatbubbles-outline"
    },
    {
      title: "Improve Brand Visibility",
      desc: "Stay top-of-mind and easily accessible to your target customers 24/7 right on their smartphones and tablets.",
      icon: "eye-outline"
    },
    {
      title: "Generate More Revenue",
      desc: "Enable direct digital transactions, premium subscriptions, simple checkout systems, and integrated in-app purchases.",
      icon: "cash-outline"
    },
    {
      title: "Streamline Operations",
      desc: "Automate complex business workflows, sync mobile databases with cloud ERP systems, and improve employee productivity.",
      icon: "settings-outline"
    },
    {
      title: "Gain Valuable Insights",
      desc: "Leverage native analytics platforms to deeply understand consumer behavior, user preferences, and product performance.",
      icon: "trending-up-outline"
    },
    {
      title: "Enhance Customer Loyalty",
      desc: "Create personalized loyalty card integrations, dynamic referral schemes, and rewards programs that boost retention.",
      icon: "heart-outline"
    }
  ];

  return (
    <section className="mobile-benefits-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF <span className="c-primary">PROFESSIONAL MOBILE APP SERVICES</span>
          </h2>
          <p className="slider-content-text">Unlock strategic advantages and drive business scale with a custom application</p>
        </div>

        <div className="row mt-5">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="benefit-card p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.03) 0px 10px 30px"
                }}>
                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(0, 131, 255, 0.08)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={benefit.icon} style={{ fontSize: "1.5rem" }}></ion-icon>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2" style={{ fontSize: "1.1rem" }}>{benefit.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileBenefits;
