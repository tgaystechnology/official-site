'use client'
import React from 'react';

const EducationWhyChoose = () => {
  const comparisonData = [
    { feature: "Customized Education Platform", tgays: "Yes", generic: "Limited" },
    { feature: "School ERP Development", tgays: "Yes", generic: "Partial" },
    { feature: "Student Lifecycle Management", tgays: "Yes", generic: "Limited" },
    { feature: "Cloud-Based Deployment", tgays: "Yes", generic: "Varies" },
    { feature: "Mobile App Integration", tgays: "Yes", generic: "Additional Cost" },
    { feature: "AI & Analytics Integration", tgays: "Yes", generic: "Limited" },
    { feature: "Multi-Campus Support", tgays: "Yes", generic: "Limited" },
    { feature: "Ongoing Technical Support", tgays: "Yes", generic: "Varies" },
  ];

  const coreStrengths = [
    { title: "Education Software Expertise", desc: "Deep domain knowledge.", icon: "school-outline" },
    { title: "Scalable Cloud Architecture", desc: "Built for high performance.", icon: "cloud-done-outline" },
    { title: "User-Friendly Interfaces", desc: "Intuitive design for all users.", icon: "color-palette-outline" },
    { title: "Mobile-First Design", desc: "Seamless mobile experiences.", icon: "phone-portrait-outline" },
    { title: "Data-Driven Analytics", desc: "Actionable insights & reports.", icon: "stats-chart-outline" },
    { title: "Secure Student Management", desc: "Enterprise-grade data security.", icon: "shield-checkmark-outline" },
    { title: "End-to-End Development", desc: "Full lifecycle support.", icon: "construct-outline" },
    { title: "Global Delivery Capabilities", desc: "Serving institutions worldwide.", icon: "globe-outline" },
  ];

  return (
    <section className="why-choose-section pt100 pb100 bg-light">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            WHY CHOOSE <span className="c-primary">TGAYS TECHNOLOGY?</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px", fontSize: "1.05rem" }}>
            Our team combines deep expertise in educational technology, enterprise software development, cloud computing, and workflow automation to create powerful education management solutions tailored to institutional needs.
          </p>
        </div>

        {/* Core Strengths Grid */}
        <div className="row mb-5 pb-4">
          {coreStrengths.map((strength, idx) => (
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
                  <ion-icon name={strength.icon}></ion-icon>
                </div>
                <h3 className="h6 fw-bold mb-2 text-dark">{strength.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{strength.desc}</p>
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
            
            {/* Desktop Table View */}
            <div className="table-responsive rounded-4 shadow-sm d-none d-md-block" style={{ border: "1px solid #eee", overflow: "hidden" }}>
              <table className="table mb-0 bg-white" style={{ minWidth: "700px" }}>
                <thead>
                  <tr>
                    <th className="p-4 text-dark border-bottom-0" style={{ width: "40%", fontSize: "1.1rem", background: "#f8f9fa" }}>Feature</th>
                    <th className="p-4 text-center border-bottom-0" style={{ width: "30%", background: "#0083FF", color: "#fff", fontSize: "1.1rem" }}>TGAYS Technology</th>
                    <th className="p-4 text-center text-muted border-bottom-0" style={{ width: "30%", background: "#f8f9fa", fontSize: "1.1rem" }}>Generic Providers</th>
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

            {/* Mobile Card View */}
            <div className="d-block d-md-none">
              {comparisonData.map((row, idx) => (
                <div key={idx} className="card mb-3 border-0 shadow-sm rounded-4" style={{ border: "1px solid #eee" }}>
                  <div className="card-body p-4">
                    <h5 className="fw-bold text-dark border-bottom pb-3 mb-3" style={{ fontSize: "1.1rem" }}>{row.feature}</h5>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted fw-semibold" style={{ fontSize: "0.95rem" }}>TGAYS Technology:</span>
                      <span className="fw-bold d-flex align-items-center" style={{ color: "#0083FF", fontSize: "1rem" }}>
                        <ion-icon name="checkmark-circle" style={{ marginRight: "6px", fontSize: "1.2rem" }}></ion-icon>
                        {row.tgays}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted fw-semibold" style={{ fontSize: "0.95rem" }}>Generic Providers:</span>
                      <span className="text-muted" style={{ fontSize: "0.95rem" }}>{row.generic}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationWhyChoose;
