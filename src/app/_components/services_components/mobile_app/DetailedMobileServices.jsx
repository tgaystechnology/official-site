'use client'
import React, { useState } from 'react';

const DetailedMobileServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "custom-app",
      tabTitle: "Custom Mobile Apps",
      title: "Custom Mobile App Development",
      intro: "We develop tailored mobile applications designed specifically around your business objectives, workflows, and customer requirements.",
      listTitle: "Benefits",
      listItems: [
        "Unique business functionality",
        "Enhanced customer engagement",
        "Better operational efficiency",
        "Competitive market advantage"
      ]
    },
    {
      id: "android-app",
      tabTitle: "Android Development",
      title: "Android App Development Company",
      intro: "As a leading android app development company, we create feature-rich Android applications optimized for performance, security, and scalability.",
      listTitle: "Android Development Expertise",
      listItems: [
        "Native Android Apps",
        "Kotlin Development",
        "Java Development",
        "Android Enterprise Solutions",
        "Android App Modernization"
      ]
    },
    {
      id: "ios-app",
      tabTitle: "iOS Development",
      title: "iOS App Development Company",
      intro: "As an experienced ios app development company, we build premium Apple ecosystem applications designed for seamless user experiences.",
      listTitle: "iOS Development Services",
      listItems: [
        "Native iPhone Apps",
        "iPad Applications",
        "Apple Watch Integration",
        "App Store Deployment",
        "iOS Maintenance & Support"
      ]
    },
    {
      id: "react-native",
      tabTitle: "React Native Apps",
      title: "React Native App Development Company",
      intro: "Our React Native experts develop high-performance cross-platform applications using a single codebase.",
      listTitle: "Advantages",
      listItems: [
        "Faster Development",
        "Reduced Costs",
        "Consistent User Experience",
        "Easier Maintenance"
      ]
    },
    {
      id: "flutter-app",
      tabTitle: "Flutter Mobile Apps",
      title: "Flutter Mobile App Development",
      intro: "Build visually stunning mobile applications for Android and iOS with Flutter technology.",
      listTitle: "Key Benefits",
      listItems: [
        "Faster Time-to-Market",
        "Native-like Performance",
        "Beautiful UI Components",
        "Cross-Platform Compatibility"
      ]
    },
    {
      id: "startups",
      tabTitle: "Apps for Startups",
      title: "Mobile App Development for Startups",
      intro: "We help startups validate ideas, build MVPs, attract investors, and scale successfully.",
      listTitle: "Startup-Focused Solutions",
      listItems: [
        "MVP Development",
        "Product Strategy",
        "Rapid Prototyping",
        "Growth-Oriented Architecture"
      ]
    },
    {
      id: "ecommerce",
      tabTitle: "Ecommerce Apps",
      title: "Ecommerce Mobile App Development",
      intro: "Transform online shopping experiences with feature-rich mobile commerce applications.",
      listTitle: "Ecommerce Features",
      listItems: [
        "Product Catalogs",
        "Payment Gateway Integration",
        "Order Tracking",
        "Loyalty Programs",
        "Push Notifications"
      ]
    },
    {
      id: "fintech",
      tabTitle: "Fintech Apps",
      title: "Fintech Mobile App Development",
      intro: "Develop secure and compliant financial applications with advanced security mechanisms.",
      listTitle: "Fintech Solutions",
      listItems: [
        "Mobile Banking Apps",
        "Payment Apps",
        "Digital Wallets",
        "Investment Platforms",
        "Loan Management Systems"
      ]
    },
    {
      id: "healthcare",
      tabTitle: "Healthcare Apps",
      title: "Healthcare Mobile App Development",
      intro: "Build HIPAA-compliant and patient-centric healthcare solutions.",
      listTitle: "Healthcare Applications",
      listItems: [
        "Telemedicine Platforms",
        "Appointment Scheduling",
        "EHR Integration",
        "Remote Monitoring",
        "Healthcare Analytics"
      ]
    },
    {
      id: "realestate",
      tabTitle: "Real Estate Apps",
      title: "Real Estate Mobile App Development",
      intro: "Enhance property discovery and client engagement with modern real estate applications.",
      listTitle: "Real Estate Features",
      listItems: [
        "Property Listings",
        "Virtual Tours",
        "Agent Portals",
        "CRM Integration",
        "Lead Management"
      ]
    }
  ];

  return (
    <section className="detailed-services-section pt100 pb100 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            MOBILE APP DEVELOPMENT <span className="c-primary">SERVICES WE OFFER</span>
          </h2>
          <p className="slider-content-text">Explore our comprehensive mobile engineering capabilities tailored to drive real business value.</p>
        </div>

        <div className="row mt-5">
          {/* Left Navigation Buttons */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="d-flex flex-column nav nav-pills" role="tablist" style={{ gap: "8px" }}>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`nav-link text-start p-3 border-0 transition-all ${activeTab === index ? 'active-tab-btn' : 'inactive-tab-btn'}`}
                  onClick={() => setActiveTab(index)}
                  style={{
                    borderRadius: "10px",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    background: activeTab === index ? "linear-gradient(90deg, rgb(0, 109, 255) 0%, rgb(29, 84, 159) 100%)" : "#fafafa",
                    color: activeTab === index ? "#fff" : "#333",
                    boxShadow: "rgba(0, 0, 0, 0.03) 0px 4px 12px",
                    borderLeft: activeTab === index ? "none" : "4px solid #eaeaea",
                    outline: "none"
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <span>{service.tabTitle}</span>
                    <span style={{ fontSize: "1.1rem", opacity: activeTab === index ? 1 : 0.3 }}>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Detail Card */}
          <div className="col-lg-8 col-md-12">
            <div className="card border-0 shadow-sm p-4 p-md-5 h-100"
              style={{
                borderRadius: "16px",
                background: "#fafafa",
                border: "1px solid #f0f0f0",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 10px 30px"
              }}>
              <div className="card-body p-0">
                <span className="badge mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px", display: "inline-block" }}>
                  TGAYS Mobile Division
                </span>

                <h3 className="mb-3 text-dark" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
                  {services[activeTab].title}
                </h3>

                <p className="text-muted mb-4" style={{ fontSize: "1.02rem", lineHeight: "1.6" }}>
                  {services[activeTab].intro}
                </p>

                <hr style={{ borderTop: "1px solid #eaeaea", margin: "25px 0" }} />

                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.2rem", display: "flex", alignSelf: "center", marginRight: "10px" }}>
                    <ion-icon name="checkbox-outline" style={{ fontSize: "1.4rem" }}></ion-icon>
                  </div>
                  <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab].listTitle}</h4>
                </div>

                <ul className="list-unstyled p-0 m-0" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '10px' }}>
                  {services[activeTab].listItems.map((item, index) => (
                    <li key={index} className="text-muted d-flex align-items-center" style={{ fontSize: "0.95rem" }}>
                      <span style={{ color: "#0083ff", marginRight: "8px", fontWeight: "bold" }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedMobileServices;
