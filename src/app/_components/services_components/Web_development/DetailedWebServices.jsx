'use client'
import React, { useState } from 'react';
import '../../products/PricingCards.css'; // Load Uiverse tab styling classes

const DetailedWebServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Custom Website Development",
      shortTitle: "Custom Websites",
      intro: "Your website is often the first impression customers have of your business.",
      itemsHeader: "Our Custom Website Solutions Include:",
      items: [
        "Corporate Websites",
        "Business Websites",
        "Service-Based Websites",
        "Startup Websites",
        "Landing Pages",
        "Custom Portals"
      ],
      benefitsHeader: "Benefits",
      benefits: [
        "Unique brand identity",
        "Improved user experience",
        "Better search visibility",
        "Higher conversion rates"
      ],
      bgGrad: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
    },
    {
      title: "Web Application Development",
      shortTitle: "Web Applications",
      intro: "Build powerful web applications that streamline operations and improve customer experiences.",
      itemsHeader: "Web Application Development Expertise:",
      items: [
        "SaaS Platforms",
        "CRM Systems",
        "ERP Applications",
        "Customer Portals",
        "Booking Platforms",
        "Business Management Systems"
      ],
      benefitsHeader: "Business Benefits",
      benefits: [
        "Process automation",
        "Increased productivity",
        "Better customer engagement",
        "Reduced operational costs"
      ],
      bgGrad: "linear-gradient(135deg, #1f4037, #2c5364)"
    },
    {
      title: "Enterprise Web Application Development",
      shortTitle: "Enterprise Web Solutions",
      intro: "Large organizations require secure, scalable, and high-performing web solutions.",
      itemsHeader: "Enterprise Development Solutions:",
      items: [
        "Digital Transformation Platforms",
        "Enterprise Portals",
        "Workflow Management Systems",
        "Data Analytics Dashboards",
        "Business Intelligence Applications"
      ],
      benefitsHeader: "Enterprise Advantages",
      benefits: [
        "Enhanced scalability",
        "Improved security",
        "Better operational efficiency",
        "Future-ready architecture"
      ],
      bgGrad: "linear-gradient(135deg, #3a7bd5, #3a6073)"
    },
    {
      title: "Ecommerce Website Development",
      shortTitle: "eCommerce Solutions",
      intro: "Turn visitors into customers with high-performing eCommerce solutions.",
      itemsHeader: "eCommerce Development Services Include:",
      items: [
        "Shopify Development",
        "WooCommerce Development",
        "Magento Development",
        "Custom eCommerce Platforms",
        "Marketplace Development",
        "B2B eCommerce Solutions"
      ],
      benefitsHeader: "Outcomes",
      benefits: [
        "Increased online sales",
        "Improved customer experience",
        "Better conversion rates",
        "Streamlined inventory management"
      ],
      bgGrad: "linear-gradient(135deg, #e65c00, #F9D423)"
    },
    {
      title: "WordPress Website Development",
      shortTitle: "WordPress Development",
      intro: "Leverage the flexibility and scalability of WordPress to create feature-rich business websites.",
      itemsHeader: "WordPress Services Include:",
      items: [
        "Custom Theme Development",
        "Plugin Development",
        "WooCommerce Integration",
        "Website Migration",
        "Performance Optimization",
        "Security Enhancement"
      ],
      benefitsHeader: "Benefits",
      benefits: [
        "Easy content management",
        "Faster deployment",
        "SEO-friendly architecture",
        "Cost-effective maintenance"
      ],
      bgGrad: "linear-gradient(135deg, #283c86, #45a247)"
    }
  ];

  return (
    <section className="detailed-web-services pt100 pb100 bg-white" style={{ position: "relative" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            COMPREHENSIVE <span className="c-primary">WEB DEVELOPMENT SERVICES</span>
          </h2>
          <p className="slider-content-text">Tailored solutions designed to convert users, scale efficiently, and drive real business outcomes.</p>
        </div>

        {/* Mobile View Accordion (d-block d-lg-none) */}
        <div className="row mt-5 d-block d-lg-none">
          <div className="col-12" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {services.map((service, index) => {
              const isOpen = activeTab === index;
              return (
                <div 
                  key={index} 
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
                    <span style={{ color: isOpen ? '#0083ff' : '#000000' }}>{service.shortTitle}</span>
                    <span style={{ 
                      color: isOpen ? '#0083ff' : '#64748b',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}>▼</span>
                  </button>

                  {/* Accordion Content (Visible only when open) */}
                  {isOpen && (
                    <div style={{ padding: '20px', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                      <span className="badge text-uppercase mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "bold", padding: "6px 14px", fontSize: "0.8rem", borderRadius: "30px" }}>
                        What We Do
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
                            <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "0.95rem" }}>{service.itemsHeader}</h4>
                          </div>
                          <div className="row">
                            {service.items.map((item, idx) => (
                              <div key={idx} className="col-md-6 mb-2 d-flex align-items-center text-dark" style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                                <span className="me-2 text-primary" style={{ fontWeight: "bold" }}>●</span>
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes */}
                        <div className="col-12">
                          <div className="p-4 rounded-4 text-white" 
                            style={{
                              background: service.bgGrad,
                              borderRadius: "16px",
                              boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px"
                            }}>
                            <h3 className="h5 fw-bold mb-3 text-white">{service.benefitsHeader}</h3>
                            <ul className="list-unstyled mb-0">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="mb-2 d-flex align-items-center text-white" style={{ fontSize: "0.95rem" }}>
                                  <span className="me-3 d-inline-flex align-items-center justify-content-center rounded-circle" 
                                    style={{
                                      width: "24px",
                                      height: "24px",
                                      background: "rgba(255,255,255,0.2)",
                                      fontSize: "0.8rem"
                                    }}>
                                    ✓
                                  </span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
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
                  key={index}
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
                    <span>{service.shortTitle}</span>
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
                borderRadius: "24px",
                background: "#ffffff",
                border: "1px solid #eee",
                boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
              <div className="card-body p-0">
                <div className="row align-items-stretch">
                  <div className="col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-between">
                    <div>
                      <span className="badge text-uppercase mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "bold", padding: "6px 14px", fontSize: "0.8rem", borderRadius: "30px" }}>
                        What We Do
                      </span>
                      <h3 className="h3 fw-bold text-dark mb-3" style={{ fontSize: "1.8rem" }}>{services[activeTab >= 0 ? activeTab : 0].title}</h3>
                      <p className="lead text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>{services[activeTab >= 0 ? activeTab : 0].intro}</p>
                      
                      <h4 className="h6 fw-bold text-dark mb-3 uppercase" style={{ fontSize: "0.9rem", color: "#666", letterSpacing: "1px" }}>
                        {services[activeTab >= 0 ? activeTab : 0].itemsHeader}
                      </h4>
                      <div className="row">
                        {services[activeTab >= 0 ? activeTab : 0].items.map((item, index) => (
                          <div key={index} className="col-md-6 mb-2 d-flex align-items-center text-dark" style={{ fontSize: "0.95rem", fontWeight: "500" }}>
                            <span className="me-2 text-primary" style={{ fontWeight: "bold" }}>●</span>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center text-white" 
                      style={{
                        background: services[activeTab >= 0 ? activeTab : 0].bgGrad,
                        borderRadius: "20px",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 15px 30px"
                      }}>
                      <span className="text-white-50 text-uppercase fw-bold mb-2" style={{ letterSpacing: "1px", fontSize: "0.8rem" }}>
                        The Value
                      </span>
                      <h3 className="h4 fw-bold mb-4 text-white">{services[activeTab >= 0 ? activeTab : 0].benefitsHeader}</h3>
                      <ul className="list-unstyled mb-0">
                        {services[activeTab >= 0 ? activeTab : 0].benefits.map((benefit, index) => (
                          <li key={index} className="mb-3 d-flex align-items-center text-white" style={{ fontSize: "1.05rem" }}>
                            <span className="me-3 d-inline-flex align-items-center justify-content-center rounded-circle" 
                              style={{
                                width: "28px",
                                height: "28px",
                                background: "rgba(255,255,255,0.2)",
                                fontSize: "0.9rem"
                              }}>
                              ✓
                            </span>
                            {benefit}
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
      </div>
    </section>
  );
};

export default DetailedWebServices;
