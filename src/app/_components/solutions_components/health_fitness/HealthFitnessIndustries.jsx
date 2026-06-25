'use client'
import React from 'react';

const HealthFitnessIndustries = () => {
  const industries = [
    {
      title: "Fitness Startups",
      desc: "Launch innovative fitness products quickly and efficiently.",
      icon: "rocket-outline"
    },
    {
      title: "Gym Chains & Fitness Centers",
      desc: "Digitize operations and improve member experiences.",
      icon: "business-outline"
    },
    {
      title: "Personal Trainers",
      desc: "Manage clients, coaching programs, and communication.",
      icon: "body-outline"
    },
    {
      title: "Wellness Brands",
      desc: "Build platforms that support holistic wellness journeys.",
      icon: "leaf-outline"
    },
    {
      title: "Healthcare Organizations",
      desc: "Promote preventive healthcare through digital wellness solutions.",
      icon: "medkit-outline"
    },
    {
      title: "Sports Organizations",
      desc: "Track athlete performance and fitness metrics.",
      icon: "football-outline"
    },
    {
      title: "Corporate Wellness",
      desc: "Support employee health and productivity.",
      icon: "briefcase-outline"
    },
    {
      title: "Nutrition & Diet Businesses",
      desc: "Deliver personalized nutrition guidance and meal planning.",
      icon: "restaurant-outline"
    }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHO <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Tailored digital fitness solutions for every segment of the health and wellness industry.</p>
        </div>

        <div className="row mt-5 justify-content-center">
          {industries.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="industry-card p-4 text-center h-100" style={{ transition: "all 0.3s ease", borderBottom: "3px solid transparent", cursor: "default" }}
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
                <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthFitnessIndustries;
