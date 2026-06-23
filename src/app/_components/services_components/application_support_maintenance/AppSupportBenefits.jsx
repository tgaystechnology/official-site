'use client'
import React from 'react';

const AppSupportBenefits = () => {
  const benefits = [
    {
      title: "Increased Application Availability",
      desc: "Ensure uninterrupted access for users and customers with proactive uptime monitoring.",
      icon: "cloud-done-outline"
    },
    {
      title: "Faster Issue Resolution",
      desc: "Minimize business disruption through rapid support response and expert troubleshooting.",
      icon: "flash-outline"
    },
    {
      title: "Improved Security",
      desc: "Reduce exposure to vulnerabilities and cyber threats with regular security patching.",
      icon: "shield-checkmark-outline"
    },
    {
      title: "Lower Operational Costs",
      desc: "Optimize maintenance expenses and eliminate the overhead of managing in-house teams.",
      icon: "cash-outline"
    },
    {
      title: "Better User Experience",
      desc: "Deliver fast, stable, and reliable application performance that keeps users engaged.",
      icon: "happy-outline"
    },
    {
      title: "Scalability for Growth",
      desc: "Support increasing workloads and seamlessly expand business operations on demand.",
      icon: "expand-outline"
    },
    {
      title: "Predictable IT Costs",
      desc: "Benefit from SLA-driven and transparent support models that fit your budget.",
      icon: "calculator-outline"
    },
    {
      title: "Enhanced Business Continuity",
      desc: "Reduce risks associated with unexpected application failures and costly downtime.",
      icon: "sync-circle-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="appsupport-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="appsupport-benefits-heading" className="heading-title text-uppercase" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF <span className="c-primary">MANAGED APP SUPPORT</span>
          </h2>
          <p>Deliver digital solutions that drive user adoption, maximize ROI, and grow with your target market.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="appsupport-advantages-heading">
        <div className="container">
          <div className="row justify-content-center">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="key-wrap" style={{ minHeight: "220px" }}>
                  <div className="key-icon" aria-hidden="true">
                    <span><ion-icon name={benefit.icon}></ion-icon></span>
                  </div>
                  <div className="key-text">
                    <h3 className="benefit-title" style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "15px" }}>{benefit.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-answer-box p-4 text-center" style={{ background: "rgba(0, 131, 255, 0.03)", border: "1px solid rgba(0, 131, 255, 0.15)", borderRadius: "16px", marginTop: "45px", boxShadow: "rgba(0, 0, 0, 0.01) 0px 10px 20px" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: Why is application maintenance important?</h4>
            <p className="mb-0 text-muted" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              Application maintenance is critical because it prevents costly downtime, patches security vulnerabilities, improves system performance, and extends the overall lifespan of the software, ensuring it continues to deliver value as your business evolves.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppSupportBenefits;