'use client'
import React, { useState } from 'react';
import '../../products/PricingCards.css'; // Load Uiverse tab styling classes

const ProductServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "discovery",
      tabTitle: "Discovery & Validation",
      title: "Product Discovery & Validation Services",
      intro: "Before development begins, we validate your product concept to reduce risk and ensure better market alignment.",
      listTitle: "Discovery Activities",
      listItems: [
        "Market research & feasibility studies",
        "Competitor analysis & benchmarking",
        "User research & persona definition",
        "Technical feasibility studies",
        "Business model validation & mapping"
      ],
      outcomeTitle: "Expected Outcomes",
      outcomeItems: [
        "Reduced business and financial risk",
        "Verified customer demand signals",
        "Clear feature roadmap definition",
        "Better technology choices upfront"
      ]
    },
    {
      id: "mvp",
      tabTitle: "MVP Development",
      title: "MVP Product Development Services",
      intro: "Our MVP product development services help businesses launch quickly and validate ideas before investing in full-scale development. Perfect for startups and innovation-driven businesses.",
      listTitle: "MVP Scope & Focus",
      listItems: [
        "Core feature mapping & prioritization",
        "Rapid UI/UX wireframing & prototyping",
        "SaaS & Cloud platform setup",
        "Security & database schema architecture",
        "Beta launcher & feedback instrumentation"
      ],
      outcomeTitle: "Benefits of MVP Development",
      outcomeItems: [
        "Faster time-to-market",
        "Lower investment risk",
        "Real user feedback and analytics",
        "Better investor confidence & proof"
      ]
    },
    {
      id: "custom",
      tabTitle: "Custom Products",
      title: "Custom Software Product Development",
      intro: "We build scalable, custom software products tailored specifically to your unique target audience and business objectives.",
      listTitle: "Products We Build",
      listItems: [
        "SaaS Platforms & Customer Portals",
        "Enterprise Applications",
        "CRM & ERP Systems",
        "Marketplaces & Retail Hubs",
        "Mobile Applications",
        "AI-Powered Platforms"
      ],
      outcomeTitle: "Business Value",
      outcomeItems: [
        "Enterprise-grade scalability",
        "Modern frontend-backend systems",
        "Zero dependency on generic platforms",
        "Robust multi-tenant frameworks"
      ]
    },
    {
      id: "ai",
      tabTitle: "AI Engineering",
      title: "AI Product Development Services",
      intro: "As an advanced AI product development company, we create intelligent solutions powered by modern machine learning models and neural frameworks.",
      listTitle: "AI Capabilities We Build",
      listItems: [
        "Machine Learning & Generative AI Models",
        "Chatbots & Conversational AI Agents",
        "Predictive Analytics & Forecasting Engines",
        "Computer Vision & Pattern Recognition",
        "Natural Language Processing (NLP) tools"
      ],
      outcomeTitle: "AI Business Use Cases",
      outcomeItems: [
        "Customer support automation & routing",
        "Sales intelligence & lead prediction",
        "Healthcare diagnostics & data analytics",
        "Demand forecasting & fraud detection"
      ]
    },
    {
      id: "modernization",
      tabTitle: "Modernization",
      title: "Product Modernization Services",
      intro: "Transform legacy systems into modern digital products with performance enhancements, API integrations, and cloud architectures.",
      listTitle: "Modernization Scope",
      listItems: [
        "Cloud Migration & Microservices Setup",
        "API Integration & Legacy Connectivity",
        "Database Architecture Overhauls",
        "Security & Compliance Enhancements",
        "UX Modernization & Mobile Extensions"
      ],
      outcomeTitle: "Modernization Benefits",
      outcomeItems: [
        "Zero legacy security vulnerabilities",
        "Lower cloud operational costs",
        "Faster system response times",
        "Significantly higher user satisfaction"
      ]
    }
  ];

  return (
    <section className="detailed-services-section pt100 pb100" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            COMPREHENSIVE <span className="c-primary">PRODUCT DEVELOPMENT</span> SERVICES
          </h2>
          <p className="slider-content-text">Seamlessly transform your vision into high-performing, scalable, and user-centric digital products.</p>
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
                        Product Life Cycle
                      </span>

                      <h3 className="mb-3 text-dark" style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                        {service.title}
                      </h3>

                      <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {service.intro}
                      </p>

                      <hr style={{ borderTop: "1px solid #eaeaea", margin: "20px 0" }} />

                      <div className="row">
                        {/* Scope */}
                        <div className="col-12 mb-4">
                          <div className="d-flex align-items-center mb-2">
                            <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.1rem", display: "flex" }}>
                              <ion-icon name="apps-outline"></ion-icon>
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
                  Product Life Cycle
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
                        <ion-icon name="apps-outline"></ion-icon>
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

export default ProductServicesTabs;
