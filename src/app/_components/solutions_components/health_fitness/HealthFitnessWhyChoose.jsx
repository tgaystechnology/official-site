'use client'
import React from 'react';

const HealthFitnessWhyChoose = () => {
  const advantages = [
    {
      title: "Specialized Industry Expertise",
      desc: "We understand the unique needs of fitness businesses, gyms, wellness providers, healthcare organizations, and fitness startups.",
      icon: "barbell-outline"
    },
    {
      title: "User-Centric Development",
      desc: "Our solutions are designed to maximize engagement, motivation, retention, and customer satisfaction.",
      icon: "people-outline"
    },
    {
      title: "Scalable Technology Architecture",
      desc: "Build platforms capable of supporting thousands or millions of active users without performance bottlenecks.",
      icon: "server-outline"
    },
    {
      title: "Data-Driven Fitness Experiences",
      desc: "Leverage analytics, AI, and user insights to improve outcomes and business performance.",
      icon: "pie-chart-outline"
    },
    {
      title: "Secure & Reliable Platforms",
      desc: "Protect sensitive health and wellness data with advanced security practices and compliance standards.",
      icon: "lock-closed-outline"
    },
    {
      title: "End-to-End Product Development",
      desc: "From ideation and UX design to deployment and long-term support, we cover the full product lifecycle.",
      icon: "rocket-outline"
    }
  ];

  return (
    <section className="why-choose-section pt100 pb70 bg-light">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE TGAYS FOR <span className="c-primary">HEALTH & FITNESS SOFTWARE?</span>
          </h2>
          <p className="slider-content-text">The global fitness industry is rapidly embracing digital transformation. Businesses need technology partners who understand user behavior, fitness trends, and scalable software architecture.</p>
        </div>

        <div className="row mt-5">
          {advantages.map((adv, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100" style={{ border: "1px solid #eee", transition: "transform 0.3s ease", cursor: "default" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.1) 0px 15px 30px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 4px 6px -1px";
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrap p-2 rounded-circle me-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", display: "flex", fontSize: "1.5rem" }}>
                    <ion-icon name={adv.icon}></ion-icon>
                  </div>
                  <h3 className="h5 fw-bold mb-0 text-dark">{adv.title}</h3>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthFitnessWhyChoose;
