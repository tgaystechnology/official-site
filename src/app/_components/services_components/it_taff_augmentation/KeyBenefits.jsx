import React from 'react';

const KeyBenefits = () => {
  // Benefits data
  const benefits = [
    {
      id: 1,
      title: "Reduce Hiring Costs",
      description: "Avoid expenses associated with recruitment agencies, onboarding, infrastructure, and employee benefits.",
      icon: "cash-outline"
    },
    {
      id: 2,
      title: "Accelerate Time-to-Market",
      description: "Quickly deploy skilled professionals to meet project deadlines and market opportunities.",
      icon: "time-outline"
    },
    {
      id: 3,
      title: "Access Specialized Skills",
      description: "Gain immediate access to experts in emerging technologies and niche development areas.",
      icon: "medal-outline"
    },
    {
      id: 4,
      title: "Improve Business Agility",
      description: "Scale teams according to changing project requirements and market conditions.",
      icon: "git-branch-outline"
    },
    {
      id: 5,
      title: "Focus on Core Business Goals",
      description: "Let your internal leadership focus on strategy while we provide the technical expertise.",
      icon: "flag-outline"
    },
    {
      id: 6,
      title: "Increase Productivity",
      description: "Experienced professionals contribute from day one with minimal ramp-up time.",
      icon: "trending-up-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="it-staff-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="it-staff-benefits-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF CHOOSING AN <span className="c-primary">IT STAFF AUGMENTATION</span> COMPANY INDIA
          </h2>
          <p>Here's how partnering with TGAYS for IT staff augmentation helps your business thrive.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="it-staff-advantages-heading">
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
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: Why Staff Augmentation?</h4>
            <p className="mb-0" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              IT staff augmentation enables businesses to quickly add skilled technology professionals to existing teams without the costs, risks, and delays associated with traditional hiring.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyBenefits;