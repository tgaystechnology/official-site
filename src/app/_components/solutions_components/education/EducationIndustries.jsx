'use client'
import React from 'react';

const EducationIndustries = () => {
  const industries = [
    {
      title: "Schools",
      desc: "Primary, secondary, and international schools.",
      icon: "school-outline"
    },
    {
      title: "Colleges",
      desc: "Undergraduate and technical institutions.",
      icon: "library-outline"
    },
    {
      title: "Universities",
      desc: "Large scale research and higher education.",
      icon: "globe-outline"
    },
    {
      title: "Training Institutes",
      desc: "Skill development and coaching centers.",
      icon: "bulb-outline"
    },
    {
      title: "E-Learning Providers",
      desc: "Online academies and corporate training.",
      icon: "laptop-outline"
    }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            INSTITUTIONS <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            Tailored digital education solutions designed for every segment of the academic and training landscape.
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          {industries.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="industry-card p-4 text-center h-100" style={{ transition: "all 0.3s ease", borderBottom: "3px solid transparent", cursor: "default", borderRadius: "8px" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottom = "3px solid #0083FF";
                  e.currentTarget.style.background = "#fafafa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = "3px solid transparent";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div className="icon-wrap mx-auto mb-3" style={{ fontSize: "2.5rem", color: "#0083FF" }}>
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                <h3 className="h6 fw-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationIndustries;
