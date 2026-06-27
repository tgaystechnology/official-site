'use client'
import React, { useState } from 'react';
import '../../products/PricingCards.css'; // Load Uiverse tab styling classes

const HealthcareServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "custom-software",
      tabTitle: "Custom Software",
      title: "Custom Healthcare Software Development",
      intro: "Our custom healthcare software development services help healthcare organizations create tailored digital solutions that improve efficiency, patient engagement, and care delivery.",
      listTitle: "Solutions We Develop",
      listItems: [
        "Healthcare Management Platforms",
        "Patient Portals",
        "Medical Billing Systems",
        "Clinical Workflow Automation",
        "Healthcare CRM Platforms"
      ],
      outcomeTitle: "Business Benefits",
      outcomeItems: [
        "Improved patient satisfaction",
        "Reduced administrative burden",
        "Faster clinical workflows",
        "Enhanced operational efficiency"
      ]
    },
    {
      id: "hospital-management",
      tabTitle: "Hospital Management",
      title: "Hospital Management Software Development",
      intro: "Our hospital management software development solutions help hospitals digitize and streamline every aspect of healthcare operations.",
      listTitle: "Core Modules",
      listItems: [
        "Patient Management",
        "Appointment Scheduling",
        "Billing & Finance",
        "Pharmacy Management",
        "Laboratory Management"
      ],
      outcomeTitle: "Outcomes",
      outcomeItems: [
        "Reduced paperwork",
        "Faster service delivery",
        "Better patient experiences",
        "Increased operational transparency"
      ]
    },
    {
      id: "hims",
      tabTitle: "HIMS Systems",
      title: "Hospital Information Management System (HIMS)",
      intro: "Our hospital information management system centralizes clinical, administrative, and financial processes into a unified platform.",
      listTitle: "Key Capabilities",
      listItems: [
        "Electronic Patient Records",
        "Appointment Management",
        "Resource Allocation",
        "Medical History Tracking",
        "Insurance Management",
        "Reporting & Analytics"
      ],
      outcomeTitle: "Strategic Benefits",
      outcomeItems: [
        "Unified data environment",
        "Data-driven clinical decisions",
        "Optimized resource allocation",
        "Scalable enterprise growth"
      ]
    },
    {
      id: "app-development",
      tabTitle: "Mobile Apps",
      title: "Healthcare Application Development",
      intro: "As a trusted healthcare application development company, we build innovative healthcare applications that improve patient engagement and healthcare delivery.",
      listTitle: "Applications We Develop",
      listItems: [
        "Patient Mobile Apps",
        "Doctor Consultation Apps",
        "Healthcare Marketplaces",
        "Remote Monitoring Platforms",
        "Wellness Applications"
      ],
      outcomeTitle: "Digital Advantages",
      outcomeItems: [
        "24/7 patient access",
        "Improved health tracking",
        "Direct provider communication",
        "Modernized brand experience"
      ]
    },
    {
      id: "telemedicine",
      tabTitle: "Telemedicine",
      title: "Telemedicine Software Development",
      intro: "Enable virtual healthcare delivery through secure, reliable, and easy-to-use telemedicine platforms.",
      listTitle: "Features",
      listItems: [
        "Video Consultations",
        "Appointment Scheduling",
        "E-Prescriptions",
        "Secure Messaging",
        "Patient Monitoring"
      ],
      outcomeTitle: "Benefits",
      outcomeItems: [
        "Expanded patient reach",
        "Improved accessibility",
        "Reduced operational costs",
        "Better patient convenience"
      ]
    },
    {
      id: "ehr-emr",
      tabTitle: "EHR / EMR",
      title: "Electronic Health Records (EHR) & EMR Solutions",
      intro: "Centralize patient information and improve healthcare coordination through secure digital records designed for high compliance.",
      listTitle: "Record Management Features",
      listItems: [
        "Digital health tracking",
        "Lab results integration",
        "Provider collaboration tools",
        "Secure data archiving",
        "Audit trail reporting"
      ],
      outcomeTitle: "Advantages",
      outcomeItems: [
        "Better patient history management",
        "Improved treatment decisions",
        "Enhanced collaboration among providers",
        "Reduced documentation errors"
      ]
    },
    {
      id: "healthcare-crm",
      tabTitle: "Healthcare CRM",
      title: "Healthcare CRM Development",
      intro: "Our healthcare CRM solutions help organizations improve patient communication, relationship management, and retention.",
      listTitle: "CRM Features",
      listItems: [
        "Patient Journey Tracking",
        "Appointment Reminders",
        "Lead Management",
        "Automated Communication",
        "Patient Engagement Campaigns"
      ],
      outcomeTitle: "Operational Results",
      outcomeItems: [
        "Higher patient retention",
        "Proactive patient care",
        "Streamlined marketing efforts",
        "Optimized communication workflows"
      ]
    }
  ];

  return (
    <section className="detailed-services-section pt100 pb100" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "700", padding: "8px 16px", letterSpacing: "1px", borderRadius: "30px" }}>
            Our Solutions
          </span>
          <h2 className="heading-title">
            Healthcare Software <span className="c-primary">Development Services</span>
          </h2>
          <p className="slider-content-text">We build scalable, secure, and compliant healthcare platforms tailored for modern hospitals, clinics, and digital health startups.</p>
        </div>

        {/* Mobile View Accordion (d-block d-lg-none) */}
        <div className="row mt-5 d-block d-lg-none">
          <div className="col-12" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {services.map((service, index) => {
              const isOpen = activeTab === index;
              return (
                <div 
                  key={service.id} 
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    background: '#ffffff',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  {/* Accordion Header */}
                  <button 
                    onClick={() => setActiveTab(isOpen ? -1 : index)}
                    className="w-100 p-3"
                    style={{
                      width: '100%',
                      height: '3.5em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 1.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      borderRadius: '0',
                      border: 'none',
                      boxShadow: 'none',
                      outline: 'none',
                      background: isOpen ? 'rgba(0, 131, 255, 0.05)' : 'transparent',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    <span style={{ color: isOpen ? '#0083ff' : '#000000' }}>{service.tabTitle}</span>
                    <span style={{ 
                      color: isOpen ? '#0083ff' : '#64748b',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}>▼</span>
                  </button>

                  {/* Accordion Content (Visible only when open) */}
                  {isOpen && (
                    <div style={{ padding: '20px', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                      <span className="badge mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px" }}>
                        Health Tech Solutions
                      </span>

                      <h3 className="mb-3 text-dark" style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                        {service.title}
                      </h3>

                      <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {service.intro}
                      </p>

                      <hr style={{ borderTop: "1px solid #eaeaea", margin: "20px 0" }} />

                      <div className="row">
                        {/* Solutions */}
                        <div className="col-12 mb-4">
                          <div className="d-flex align-items-center mb-2">
                            <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.1rem", display: "flex" }}>
                              <ion-icon name="medkit-outline"></ion-icon>
                            </div>
                            <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "0.95rem" }}>{service.listTitle}</h4>
                          </div>
                          <ul className="list-unstyled p-0 m-0">
                            {service.listItems.map((item, idx) => (
                              <li key={idx} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.9rem" }}>
                                <span style={{ color: "#0083ff", marginRight: "8px", fontWeight: "bold" }}>✓</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes */}
                        <div className="col-12">
                          <div className="d-flex align-items-center mb-2">
                            <div className="icon-wrap me-2" style={{ color: "#ff5e3a", fontSize: "1.1rem", display: "flex" }}>
                              <ion-icon name="trending-up-outline"></ion-icon>
                            </div>
                            <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "0.95rem" }}>{service.outcomeTitle}</h4>
                          </div>
                          <ul className="list-unstyled p-0 m-0">
                            {service.outcomeItems.map((item, idx) => (
                              <li key={idx} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.9rem" }}>
                                <span style={{ color: "#ff5e3a", marginRight: "8px", fontWeight: "bold" }}>✦</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View (d-none d-lg-flex) */}
        <div className="row mt-5 d-none d-lg-flex" style={{ alignItems: 'stretch' }}>
          {/* Left Tab Pills (Desktop only) */}
          <div className="col-lg-4 mb-4 mb-lg-0" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="d-flex flex-column nav nav-pills" role="tablist" style={{ gap: "12px", height: '100%', justifyContent: 'space-between' }}>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`custom-uiverse-tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{
                    '--active-color': '#0083ff',
                    width: '100%',
                    height: 'auto',
                    flex: '1', /* Let buttons dynamically scale to distribute heights evenly */
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: "pointer",
                    outline: "none"
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between w-100 px-3" style={{ zIndex: 2 }}>
                    <span>{service.tabTitle}</span>
                    <span style={{ fontSize: "1.2rem", transition: "transform 0.3s", transform: activeTab === index ? "translateX(4px)" : "none" }}>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Detail Panel */}
          <div className="col-lg-8" style={{ display: 'flex' }}>
            <div className="card border-0 shadow-sm p-4 p-md-5 w-100"
              style={{
                borderRadius: "16px",
                background: "#ffffff",
                border: "1px solid #f0f0f0",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 10px 30px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
              <div className="card-body p-0">
                <span className="badge mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px" }}>
                  Health Tech Solutions
                </span>

                <h3 className="mb-3 text-dark" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
                  {services[activeTab >= 0 ? activeTab : 0].title}
                </h3>

                <p className="text-muted mb-4" style={{ fontSize: "1.02rem", lineHeight: "1.6" }}>
                  {services[activeTab >= 0 ? activeTab : 0].intro}
                </p>

                <hr style={{ borderTop: "1px solid #eaeaea", margin: "25px 0" }} />

                <div className="row">
                  {/* Left Column: Key Features */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="medkit-outline"></ion-icon>
                      </div>
                      <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab >= 0 ? activeTab : 0].listTitle}</h4>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                      {services[activeTab >= 0 ? activeTab : 0].listItems.map((item, index) => (
                        <li key={index} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.95rem" }}>
                          <span style={{ color: "#0083ff", marginRight: "8px", fontWeight: "bold" }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Business Benefits */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#ff5e3a", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="trending-up-outline"></ion-icon>
                      </div>
                      <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab >= 0 ? activeTab : 0].outcomeTitle}</h4>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                      {services[activeTab >= 0 ? activeTab : 0].outcomeItems.map((item, index) => (
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

export default HealthcareServices;
