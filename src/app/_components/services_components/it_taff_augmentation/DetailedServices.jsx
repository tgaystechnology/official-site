'use client'
import React, { useState } from 'react';

const DetailedServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "software-dev",
      tabTitle: "Software Development",
      title: "Software Development Staff Augmentation",
      intro: "Extend your software development capabilities with experienced developers who can contribute immediately to your projects.",
      listTitle: "Available Resources",
      listItems: [
        "Full Stack Developers",
        "Frontend Developers",
        "Backend Developers",
        "Mobile App Developers",
        "Software Architects",
        "UI/UX Designers"
      ],
      outcomeTitle: "Business Benefits",
      outcomeItems: [
        "Faster project delivery",
        "Reduced recruitment cycles",
        "Immediate productivity gains",
        "Access to specialized expertise"
      ]
    },
    {
      id: "enterprise-services",
      tabTitle: "Enterprise Staffing",
      title: "Enterprise Staff Augmentation Services",
      intro: "Large organizations often require niche technical expertise for digital transformation initiatives, modernization projects, and enterprise application development.",
      listTitle: "Enterprise Resource Solutions",
      listItems: [
        "Enterprise Software Engineers",
        "Cloud Specialists",
        "DevOps Engineers",
        "Data Engineers",
        "AI Engineers",
        "Security Experts"
      ],
      outcomeTitle: "Expected Outcomes",
      outcomeItems: [
        "Accelerated transformation initiatives",
        "Reduced operational risks",
        "Improved scalability",
        "Enhanced technical capabilities"
      ]
    },
    {
      id: "startup-services",
      tabTitle: "Startup Solutions",
      title: "IT Staff Augmentation for Startups",
      intro: "Startups need flexibility and speed to compete effectively in fast-moving industries.",
      listTitle: "Startup-Focused Solutions",
      listItems: [
        "MVP Development Teams",
        "Product Engineering Experts",
        "SaaS Developers",
        "Full Stack Engineers",
        "Agile Development Teams"
      ],
      outcomeTitle: "Advantages for Startups",
      outcomeItems: [
        "Lower hiring costs",
        "Faster product launches",
        "Flexible resource allocation",
        "Access to senior-level expertise"
      ]
    },
    {
      id: "dedicated-team",
      tabTitle: "Dedicated Teams",
      title: "Hire Dedicated Development Teams",
      intro: "Build an entire development team tailored to your project requirements and infrastructure.",
      listTitle: "Team Composition Options",
      listItems: [
        "Developers",
        "QA Engineers",
        "DevOps Specialists",
        "Business Analysts",
        "Project Managers",
        "Product Owners"
      ],
      outcomeTitle: "Ideal Project Types",
      outcomeItems: [
        "Long-term projects",
        "Product development",
        "Digital transformation",
        "Enterprise modernization"
      ]
    },
    {
      id: "full-stack",
      tabTitle: "Full Stack Developers",
      title: "Hire Full Stack Developers",
      intro: "Access highly skilled professionals capable of handling both frontend and backend development.",
      listTitle: "Technical Expertise",
      listItems: [
        "React & Angular",
        "Vue.js & Next.js",
        "Node.js & Python",
        "Java & .NET",
        "PHP & Laravel"
      ],
      outcomeTitle: "Key Benefits",
      outcomeItems: [
        "Faster development cycles",
        "Better project coordination",
        "Reduced resource dependency",
        "Enhanced product quality"
      ]
    }
  ];

  return (
    <section className="detailed-services-section pt100 pb100" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            IT STAFF <span className="c-primary">AUGMENTATION SERVICES</span> INDIA
          </h2>
          <p className="slider-content-text">Tailored staff augmentation solutions designed for startups, SMEs, and large scale enterprises.</p>
        </div>

        <div className="row mt-5">
          {/* Left Vertical Tab Navigation */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="d-flex flex-column nav nav-pills" role="tablist" style={{ gap: "10px" }}>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`nav-link text-start p-3 border-0 transition-all ${activeTab === index ? 'active-tab-btn' : 'inactive-tab-btn'}`}
                  onClick={() => setActiveTab(index)}
                  style={{
                    borderRadius: "10px",
                    fontWeight: "600",
                    fontSize: "1rem",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: activeTab === index ? "linear-gradient(90deg, rgb(0, 109, 255) 0%, rgb(29, 84, 159) 100%)" : "#fff",
                    color: activeTab === index ? "#fff" : "#333",
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 12px",
                    borderLeft: activeTab === index ? "none" : "4px solid #f0f0f0"
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span>{service.tabTitle}</span>
                    <span style={{ fontSize: "1.2rem", opacity: activeTab === index ? 1 : 0.3 }}>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Detail Content Box */}
          <div className="col-lg-8 col-md-12">
            <div className="card border-0 shadow-sm p-4 p-md-5 h-100" 
              style={{ 
                borderRadius: "16px", 
                background: "#fff",
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 30px"
              }}>
              <div className="card-body p-0">
                <span className="badge mb-3" style={{ background: "rgba(0, 240, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px" }}>
                  TGAYS Staff Augmentation
                </span>
                
                <h3 className="mb-3 text-dark" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
                  {services[activeTab].title}
                </h3>
                
                <p className="text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                  {services[activeTab].intro}
                </p>

                <hr style={{ borderTop: "1px solid #f0f0f0", margin: "25px 0" }} />

                <div className="row">
                  {/* Resources lists */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="people-outline"></ion-icon>
                      </div>
                      <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab].listTitle}</h4>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                      {services[activeTab].listItems.map((item, index) => (
                        <li key={index} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.95rem" }}>
                          <span style={{ color: "#00F0FF", marginRight: "8px", fontWeight: "bold" }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business benefits lists */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#ff5e3a", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="rocket-outline"></ion-icon>
                      </div>
                      <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab].outcomeTitle}</h4>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                      {services[activeTab].outcomeItems.map((item, index) => (
                        <li key={index} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.95rem" }}>
                          <span style={{ color: "#ff5e3a", marginRight: "8px", fontWeight: "bold" }}>✦</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
