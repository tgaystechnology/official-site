'use client'
import React from 'react';

const M365SolutionsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Increase Productivity",
      description: "Automate repetitive business workflows and tasks to streamline employee operations daily.",
      icon: "trending-up-outline"
    },
    {
      id: 2,
      title: "Reduce Costs",
      description: "Eliminate expensive legacy licensing, operational redundancies, and optimize resource deployment.",
      icon: "cash-outline"
    },
    {
      id: 3,
      title: "Improve Collaboration",
      description: "Enable seamless communication, file sharing, and remote teamwork through configured workspaces.",
      icon: "people-outline"
    },
    {
      id: 4,
      title: "Strengthen Security",
      description: "Integrate enterprise-grade security structures, conditional access, compliance rules, and identity controls.",
      icon: "shield-checkmark-outline"
    },
    {
      id: 5,
      title: "Accelerate Decision-Making",
      description: "Utilize real-time Power BI reporting dashboards and business intelligence inputs instantly.",
      icon: "speedometer-outline"
    },
    {
      id: 6,
      title: "Scale with Confidence",
      description: "Build flexible ecosystems that adapt, grow, and sync seamlessly with your corporate scaling goals.",
      icon: "expand-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="m365-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="m365-benefits-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF <span className="c-primary">MICROSOFT 365 DEVELOPMENT</span> SERVICES
          </h2>
          <p>Unlock corporate agility, team collaboration, and cloud-first scaling using M365 systems.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="m365-advantages-heading">
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
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: Why Microsoft 365 Development?</h4>
            <p className="mb-0 text-muted" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              Microsoft 365 development leverages low-code applications, automated workflows, and centralized SharePoint hubs to transform modern collaboration and eliminate operational inefficiencies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default M365SolutionsSection;