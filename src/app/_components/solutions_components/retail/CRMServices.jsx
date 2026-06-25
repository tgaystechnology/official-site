'use client'
import React, { useState } from 'react';
import '../../products/PricingCards.css';

const CRMServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "custom-crm",
      tabTitle: "Custom CRM Development",
      title: "Custom CRM Software Development",
      intro: "We build CRM platforms specifically designed around your unique business workflows to ensure perfect alignment with your operations.",
      listTitle: "Core Features",
      listItems: [
        "Lead management",
        "Contact management",
        "Sales pipeline tracking",
        "Opportunity management"
      ],
      outcomeTitle: "Advanced Capabilities",
      outcomeItems: [
        "Customer communication history",
        "Workflow automation",
        "Reporting dashboards",
        "Performance analytics"
      ]
    },
    {
      id: "crm-integration",
      tabTitle: "CRM Integration",
      title: "CRM Integration Services",
      intro: "Businesses often use multiple software tools. Our CRM integration services ensure seamless connectivity and real-time data sync across your entire ecosystem.",
      listTitle: "Business Systems",
      listItems: [
        "ERP systems",
        "Accounting software",
        "Payment gateways",
        "E-commerce platforms"
      ],
      outcomeTitle: "Marketing & Support",
      outcomeItems: [
        "Marketing automation platforms",
        "WhatsApp Business API",
        "Email marketing tools",
        "Customer support platforms"
      ]
    },
    {
      id: "small-business",
      tabTitle: "Small Business CRM",
      title: "CRM for Small Businesses",
      intro: "Small businesses need affordable, intuitive CRM solutions without unnecessary complexity to manage growth effectively.",
      listTitle: "Key Advantages",
      listItems: [
        "Faster lead response times",
        "Better customer management",
        "Increased sales visibility"
      ],
      outcomeTitle: "Business Growth",
      outcomeItems: [
        "Reduced manual work",
        "Improved customer retention",
        "Scalable foundation"
      ]
    },
    {
      id: "startups",
      tabTitle: "Startup CRM",
      title: "CRM Development for Startups",
      intro: "Startups require highly scalable and agile CRM systems that can adapt and grow as the business scales rapidly.",
      listTitle: "Startup Focus",
      listItems: [
        "Build scalable sales processes",
        "Automate customer acquisition",
        "Rapid implementation"
      ],
      outcomeTitle: "Operational Scalability",
      outcomeItems: [
        "Track investor relationships",
        "Improve customer onboarding",
        "Scale operations efficiently"
      ]
    },
    {
      id: "enterprise",
      tabTitle: "Enterprise CRM",
      title: "Enterprise CRM Development",
      intro: "Enterprise organizations require highly secure, compliant, and advanced CRM capabilities to handle complex, multi-layered operations.",
      listTitle: "Enterprise Architecture",
      listItems: [
        "Multi-location CRM architecture",
        "Granular multi-user access controls",
        "Enterprise-grade security integrations"
      ],
      outcomeTitle: "Advanced Capabilities",
      outcomeItems: [
        "Advanced predictive analytics",
        "AI-powered automation engines",
        "Custom enterprise reporting systems"
      ]
    },
    {
      id: "hire-developers",
      tabTitle: "Hire CRM Developers",
      title: "Hire Dedicated CRM Developers",
      intro: "Scale your internal team quickly by hiring our experienced CRM developers, architects, and consultants for your specific project needs.",
      listTitle: "Engagement Models",
      listItems: [
        "Full-time dedicated engagement",
        "Part-time development support",
        "Dedicated remote teams"
      ],
      outcomeTitle: "Project Types",
      outcomeItems: [
        "Project-based CRM development",
        "Legacy CRM modernization projects",
        "Ongoing maintenance and support"
      ]
    }
  ];

  return (
    <section className="detailed-services-section pt100 pb100" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800", textTransform: "uppercase" }}>
            CRM SOFTWARE DEVELOPMENT <span className="c-primary">SERVICES</span>
          </h2>
          <p className="slider-content-text">As a leading CRM software development company, we provide end-to-end development and consulting services.</p>
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

                  {isOpen && (
                    <div style={{ padding: '20px', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                      <span className="badge mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px" }}>
                        CRM Solution
                      </span>

                      <h3 className="mb-3 text-dark" style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                        {service.title}
                      </h3>

                      <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {service.intro}
                      </p>

                      <hr style={{ borderTop: "1px solid #eaeaea", margin: "20px 0" }} />

                      <div className="row">
                        <div className="col-12 mb-4">
                          <div className="d-flex align-items-center mb-2">
                            <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.1rem", display: "flex" }}>
                              <ion-icon name="options-outline"></ion-icon>
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

                        <div className="col-12">
                          <div className="d-flex align-items-center mb-2">
                            <div className="icon-wrap me-2" style={{ color: "#ff5e3a", fontSize: "1.1rem", display: "flex" }}>
                              <ion-icon name="stats-chart-outline"></ion-icon>
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
                    flex: '1',
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
                  CRM Solution
                </span>

                <h3 className="mb-3 text-dark" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
                  {services[activeTab >= 0 ? activeTab : 0].title}
                </h3>

                <p className="text-muted mb-4" style={{ fontSize: "1.02rem", lineHeight: "1.6" }}>
                  {services[activeTab >= 0 ? activeTab : 0].intro}
                </p>

                <hr style={{ borderTop: "1px solid #eaeaea", margin: "25px 0" }} />

                <div className="row">
                  {/* Left Column */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="options-outline"></ion-icon>
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

                  {/* Right Column */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#ff5e3a", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="stats-chart-outline"></ion-icon>
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

export default CRMServices;
