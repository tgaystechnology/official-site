'use client'
import React from 'react';

const EducationBenefits = () => {
  const benefits = [
    {
      title: "Improve Operational Efficiency",
      desc: "Automate repetitive administrative tasks and drastically reduce manual effort for staff.",
      icon: "flash-outline",
      bgColor: "#ffecec",
      textColor: "#ff4d4d"
    },
    {
      title: "Enhance Student Experience",
      desc: "Provide seamless access to academic resources, assignments, and personalized learning info.",
      icon: "school-outline",
      bgColor: "#e6f9ec",
      textColor: "#28a745"
    },
    {
      title: "Increase Parent Engagement",
      desc: "Enable transparent communication and real-time progress tracking for parents and guardians.",
      icon: "people-outline",
      bgColor: "#fff4e6",
      textColor: "#fd7e14"
    },
    {
      title: "Better Decision-Making",
      desc: "Use real-time dashboards and analytics to improve academic and operational performance.",
      icon: "pie-chart-outline",
      bgColor: "#e6f2ff",
      textColor: "#0083FF"
    },
    {
      title: "Reduce Administrative Costs",
      desc: "Digitization significantly lowers operational overhead, paper usage, and resource waste.",
      icon: "cash-outline",
      bgColor: "#f3e6ff",
      textColor: "#6f42c1"
    },
    {
      title: "Support Institutional Growth",
      desc: "A highly scalable cloud infrastructure that seamlessly supports future expansion and new campuses.",
      icon: "trending-up-outline",
      bgColor: "#fff9e6",
      textColor: "#ffc107"
    }
  ];

  return (
    <section className="benefits-section pt100 pb100 bg-white" style={{ borderTop: "1px solid #f5f5f5" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            KEY BENEFITS OF A CUSTOM <span className="c-primary">EMS</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            Transform the way your institution operates and deliver exceptional value to students, parents, and staff.
          </p>
        </div>

        <div className="row mt-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="benefit-card p-4 rounded-4 text-center h-100" style={{ background: "#fff", border: "1px solid #eee", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.03)";
                }}
              >
                <div className="icon-wrap mx-auto mb-4" style={{ width: "70px", height: "70px", background: benefit.bgColor, color: benefit.textColor, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "20px", fontSize: "2rem" }}>
                  <ion-icon name={benefit.icon}></ion-icon>
                </div>
                <h3 className="h5 fw-bold mb-3 text-dark">{benefit.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationBenefits;
