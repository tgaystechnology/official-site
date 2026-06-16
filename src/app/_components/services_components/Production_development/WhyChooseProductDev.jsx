'use client'
import React from 'react';

const WhyChooseProductDev = () => {
  const comparisonData = [
    { factor: "Product Strategy", tgays: "✓ Included", typical: "Limited" },
    { factor: "MVP Development", tgays: "✓ Comprehensive", typical: "Basic" },
    { factor: "AI Integration", tgays: "✓ Advanced", typical: "Optional" },
    { factor: "Dedicated Teams", tgays: "✓ Available", typical: "Limited" },
    { factor: "Agile Methodology", tgays: "✓ Standard Practice", typical: "Varies" },
    { factor: "Global Delivery", tgays: "✓ USA, UK, India", typical: "Regional" },
    { factor: "Post-Launch Support", tgays: "✓ Ongoing", typical: "Limited" }
  ];

  const differentiators = [
    {
      title: "Product-First Approach",
      desc: "We don't just develop software—we build products that solve real business problems."
    },
    {
      title: "AI-Powered Innovation",
      desc: "As an emerging AI product development company, we help businesses leverage artificial intelligence, machine learning, automation, and predictive analytics."
    },
    {
      title: "Startup-Friendly Development",
      desc: "Our specialized product development for startups services help founders validate ideas, build MVPs, and achieve product-market fit faster."
    },
    {
      title: "Experienced Product Teams",
      desc: "Multidisciplinary talent pool including Product Strategists, Business Analysts, UI/UX Designers, Architects, Full Stack & AI Engineers, QA, and DevOps specialists."
    }
  ];

  return (
    <section className="why-choose-product-dev pt100 pb70 bg-white" role="region" aria-labelledby="why-choose-pd-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="why-choose-pd-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE TGAYS TECHNOLOGY AS YOUR <span className="c-primary">PRODUCT DEVELOPMENT</span> COMPANY?
          </h2>
          <p className="slider-content-text">
            Businesses worldwide choose TGAYS Technology because we combine technical expertise, strategic thinking, and business-focused execution.
          </p>
        </div>

        <div className="row align-items-start mt-5">
          {/* Table comparison Column */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>What Makes Us Different?</h3>
            <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
              <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
                <thead>
                  <tr style={{ background: "#0c1527", color: "#fff" }}>
                    <th className="p-3 text-start" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#fff" }}>Feature</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#0083FF" }}>TGAYS Technology</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#aaa" }}>Typical Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-3 text-start fw-semibold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.factor}
                      </td>
                      <td className="p-3 fw-bold text-success" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem", color: "#0083FF" }}>
                        {item.tgays}
                      </td>
                      <td className="p-3 text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Differentiators Column */}
          <div className="col-lg-5">
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>Our Core Differentiators</h3>
            <div className="d-flex flex-column gap-3" style={{ gap: "15px" }}>
              {differentiators.map((diff, idx) => (
                <div key={idx} className="adv-card p-3 rounded-3" style={{ background: "rgba(0, 0, 0, 0.02)", borderLeft: "4px solid #0083FF", borderRadius: "8px" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "6px", color: "#111" }}>{diff.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.5" }}>{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseProductDev;
