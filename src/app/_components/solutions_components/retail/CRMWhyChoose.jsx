'use client'
import React from 'react';

const CRMWhyChoose = () => {
  const comparisonData = [
    { feature: "Fully Customized CRM", tgays: "Yes", generic: "Limited" },
    { feature: "Business Process Mapping", tgays: "Yes", generic: "Partial" },
    { feature: "Third-Party Integrations", tgays: "Yes", generic: "Limited" },
    { feature: "Dedicated Development Team", tgays: "Yes", generic: "Additional Cost" },
    { feature: "Scalable Architecture", tgays: "Yes", generic: "Varies" },
    { feature: "AI-Ready CRM Solutions", tgays: "Yes", generic: "Limited" },
    { feature: "Ongoing Support", tgays: "Yes", generic: "Limited" },
    { feature: "Enterprise Security Standards", tgays: "Yes", generic: "Varies" },
  ];

  const differentiators = [
    { title: "Tailor-Made Solutions", desc: "Built precisely for your workflows.", icon: "cut-outline" },
    { title: "Agile Methodology", desc: "Iterative, fast, and flexible delivery.", icon: "sync-circle-outline" },
    { title: "Dedicated Consultants", desc: "Expert guidance at every step.", icon: "people-circle-outline" },
    { title: "Advanced Automation", desc: "Eliminate repetitive manual tasks.", icon: "flash-outline" },
    { title: "AI-Powered Workflows", desc: "Intelligent data & predictive insights.", icon: "hardware-chip-outline" },
    { title: "Scalable Cloud", desc: "Architecture that grows with you.", icon: "cloud-upload-outline" },
    { title: "Transparent Communication", desc: "Clear reporting and updates.", icon: "chatbubbles-outline" },
    { title: "Long-Term Support", desc: "Ongoing maintenance and optimization.", icon: "shield-checkmark-outline" },
  ];

  return (
    <section className="why-choose-section pt100 pb100 bg-light">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800", textTransform: "uppercase" }}>
            WHY CHOOSE <span className="c-primary">TGAYS TECHNOLOGY?</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px", fontSize: "1.05rem" }}>
            Businesses across India, USA, UK, Australia, and Dubai choose us because we focus on delivering CRM solutions that solve real business challenges rather than just providing software.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="row mb-5 pb-4">
          <div className="col-12 text-center mb-4">
             <h3 className="h4 fw-bold">Our Key Differentiators</h3>
          </div>
          {differentiators.map((diff, idx) => (
            <div className="col-lg-3 col-md-6 mb-4" key={idx}>
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center" style={{ border: "1px solid #eee", transition: "transform 0.3s ease", cursor: "default" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.1) 0px 15px 30px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 4px 6px -1px";
                }}
              >
                <div className="icon-wrap mx-auto mb-3" style={{ width: "60px", height: "60px", background: "rgba(0, 131, 255, 0.05)", color: "#0083FF", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontSize: "1.8rem" }}>
                  <ion-icon name={diff.icon}></ion-icon>
                </div>
                <h3 className="h6 fw-bold mb-2 text-dark">{diff.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{diff.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="row justify-content-center pt-4">
          <div className="col-lg-10">
            <div className="crumina-module crumina-heading text-center mb-5">
              <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
                WHAT MAKES US <span className="c-primary">DIFFERENT?</span>
              </h2>
            </div>
            <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden" }}>
              <table className="table mb-0 bg-white" style={{ minWidth: "700px" }}>
                <thead>
                  <tr>
                    <th className="p-4 text-dark border-bottom-0" style={{ width: "40%", fontSize: "1.1rem", background: "#f8f9fa" }}>Feature</th>
                    <th className="p-4 text-center border-bottom-0" style={{ width: "30%", background: "#0083FF", color: "#fff", fontSize: "1.1rem" }}>TGAYS Technology</th>
                    <th className="p-4 text-center text-muted border-bottom-0" style={{ width: "30%", background: "#f8f9fa", fontSize: "1.1rem" }}>Typical CRM Vendors</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} style={{ transition: "background 0.2s ease" }} onMouseEnter={(e) => e.currentTarget.style.background = "#fafafa"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                      <td className="p-4 text-dark fw-semibold" style={{ borderBottom: "1px solid #f5f5f5", verticalAlign: "middle" }}>{row.feature}</td>
                      <td className="p-4 text-center fw-bold" style={{ borderBottom: "1px solid #f5f5f5", background: "rgba(0, 131, 255, 0.03)", color: "#0083FF", verticalAlign: "middle" }}>
                        <div className="d-flex align-items-center justify-content-center">
                          <ion-icon name="checkmark-circle" style={{ fontSize: "1.3rem", marginRight: "6px" }}></ion-icon>
                          {row.tgays}
                        </div>
                      </td>
                      <td className="p-4 text-center text-muted" style={{ borderBottom: "1px solid #f5f5f5", verticalAlign: "middle" }}>
                        {row.generic}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMWhyChoose;
