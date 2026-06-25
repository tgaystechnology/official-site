'use client'
import React from 'react';

const EducationModules = () => {
  const modules = [
    {
      title: "Admissions Management",
      icon: "person-add-outline",
      features: ["Online applications", "Document verification", "Admission approvals", "Enrollment workflows"]
    },
    {
      title: "Attendance Management",
      icon: "calendar-outline",
      features: ["Student attendance", "Faculty attendance", "Leave records", "Attendance reports"]
    },
    {
      title: "Examination Management",
      icon: "document-text-outline",
      features: ["Exam scheduling", "Online assessments", "Result generation", "Grade calculations"]
    },
    {
      title: "Fee Management",
      icon: "wallet-outline",
      features: ["Fee collection", "Payment tracking", "Automated reminders", "Financial reporting"]
    },
    {
      title: "Learning Management",
      icon: "laptop-outline",
      features: ["Online classes", "Course management", "Learning resources", "Assignment submissions"]
    },
    {
      title: "Communication Portal",
      icon: "chatbubbles-outline",
      features: ["Students", "Parents", "Teachers", "Administrators"]
    }
  ];

  return (
    <section className="modules-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            EDUCATION MANAGEMENT <span className="c-primary">MODULES</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            A complete suite of integrated modules designed to automate every aspect of your educational institution's operations.
          </p>
        </div>

        <div className="row justify-content-center mt-5">
          {modules.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="module-card p-4 rounded-4 h-100" style={{ background: "#f8f9fa", border: "1px solid #eee", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.15) 0px 10px 30px";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f8f9fa";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div className="icon-wrap mb-4" style={{ width: "50px", height: "50px", background: "#0083FF", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", fontSize: "1.5rem" }}>
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                <h3 className="h5 fw-bold mb-3 text-dark">{item.title}</h3>
                <ul className="list-unstyled mb-0">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-center">
                      <ion-icon name="ellipse" style={{ color: "#0083FF", fontSize: "0.4rem", marginRight: "10px" }}></ion-icon>
                      <span className="text-muted" style={{ fontSize: "0.95rem" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationModules;
