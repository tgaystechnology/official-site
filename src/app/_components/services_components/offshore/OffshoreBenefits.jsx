'use client'
import React from 'react';
import Link from 'next/link';

const OffshoreBenefits = () => {
  const models = [
    { model: "Dedicated Team", bestFor: "Long-Term Projects", cost: "High Efficiency", flex: "High Flexibility" },
    { model: "Staff Augmentation", bestFor: "Skill Gaps & Extensions", cost: "High Efficiency", flex: "Very High Flexibility" },
    { model: "Fixed Cost Project", bestFor: "Defined Scope & Specs", cost: "Medium Efficiency", flex: "Low Flexibility" },
    { model: "Time & Material", bestFor: "Evolving Projects & Agile", cost: "High Efficiency", flex: "Very High Flexibility" },
    { model: "Offshore Development Center (ODC)", bestFor: "Enterprise Scale & Branding", cost: "Very High Efficiency", flex: "High Flexibility" }
  ];

  const benefits = [
    {
      title: "Significant Cost Savings",
      desc: "Reduce development costs by 40–60% compared to local hiring in the USA, UK, Australia, and Dubai.",
      icon: "cash-outline"
    },
    {
      title: "Access to Global Talent",
      desc: "India is home to one of the world's largest pre-vetted software engineering talent pools.",
      icon: "globe-outline"
    },
    {
      title: "Faster Time-to-Market",
      desc: "Dedicated offshore teams accelerate product validation, engineering velocity, and deployment schedules.",
      icon: "time-outline"
    },
    {
      title: "Business Scalability",
      desc: "Scale teams up or down based on project phase, budgeting metrics, and requirements.",
      icon: "expand-outline"
    },
    {
      title: "Focus on Core Business",
      desc: "Allow internal corporate leaders to focus fully on marketing, strategy, and business growth.",
      icon: "flag-outline"
    },
    {
      title: "Enhanced Innovation",
      desc: "Gain immediate access to cutting-edge artificial intelligence, blockchain, cloud, and SaaS specialists.",
      icon: "bulb-outline"
    }
  ];

  return (
    <>
      {/* Offshore Models Comparison */}
      <section className="offshore-models-section pt100 pb70 bg-white" role="region" aria-labelledby="offshore-models-heading">
        <div className="container">
          <div className="crumina-module crumina-heading text-center mb-5">
            <h2 id="offshore-models-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
              OFFSHORE DEVELOPMENT <span className="c-primary">ENGAGEMENT MODELS</span>
            </h2>
            <p className="slider-content-text">Choose the perfect hiring framework configured to your scope, budget, and flexibility criteria.</p>
          </div>

          <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
            <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
              <thead>
                <tr style={{ background: "#0f172a", color: "#fff" }}>
                  <th className="p-3 text-start" style={{ borderBottom: "none", fontSize: "1rem", color: "#fff" }}>Engagement Model</th>
                  <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", color: "#fff" }}>Best For</th>
                  <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", color: "#0083FF" }}>Cost Efficiency</th>
                  <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", color: "#ff5e3a" }}>Flexibility</th>
                </tr>
              </thead>
              <tbody>
                {models.map((item, index) => (
                  <tr key={index}>
                    <td className="p-3 text-start fw-bold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                      {item.model}
                    </td>
                    <td className="p-3 text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                      {item.bestFor}
                    </td>
                    <td className="p-3 fw-semibold text-primary" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                      {item.cost}
                    </td>
                    <td className="p-3 fw-semibold text-warning" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem", color: "#ff5e3a !important" }}>
                      {item.flex}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Offshore Benefits in India Grid */}
      <section className="staff-key-benefits" role="region" aria-labelledby="india-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="india-benefits-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF HIRING AN <span className="c-primary">OFFSHORE COMPANY</span> IN INDIA
          </h2>
          <p>Deliver digital solutions that drive user adoption, maximize ROI, and grow with your target market.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="india-advantages-heading">
        <div className="container">
          <div className="row">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="col-sm-12 col-md-6 col-lg-4 mb-4">
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

          <div className="quick-answer-box mt-5 p-4 text-center" style={{ background: "rgba(0, 131, 255, 0.03)", border: "1px solid rgba(0, 131, 255, 0.15)", borderRadius: "16px", marginTop: "45px", boxShadow: "rgba(0, 0, 0, 0.01) 0px 10px 20px" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: Why Choose an Offshore Development Company in India?</h4>
            <p className="mb-0 text-muted" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              An offshore development company in India provides access to highly skilled developers, lower development costs, faster project execution, and flexible engagement models. Businesses in the USA, UK, Australia, and Dubai choose Indian offshore teams to accelerate growth while maintaining quality and operational efficiency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffshoreBenefits;
