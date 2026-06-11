'use client'
import React, { useState } from 'react';

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
      bgGrad: "linear-gradient(135deg, #1f4037, #99f2c8)"
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

        {/* Custom Tab headers */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {services.map((svc, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="px-4 py-3 rounded-pill fw-bold border-0 transition-all"
              style={{
                fontSize: "0.95rem",
                cursor: "pointer",
                background: activeTab === idx ? "#0083FF" : "#fafafa",
                color: activeTab === idx ? "#fff" : "#444",
                boxShadow: activeTab === idx ? "0px 8px 20px rgba(0, 131, 255, 0.3)" : "none",
                transition: "all 0.3s ease"
              }}
            >
              {svc.shortTitle}
            </button>
          ))}
        </div>

        {/* Tab content panel */}
        <div className="p-4 p-md-5 rounded-4 shadow-sm text-start"
          style={{
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: "24px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)"
          }}>
          <div className="row align-items-stretch">
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-between">
              <div>
                <span className="badge text-uppercase mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "bold", padding: "6px 14px", fontSize: "0.8rem", borderRadius: "30px" }}>
                  What We Do
                </span>
                <h3 className="h3 fw-bold text-dark mb-3" style={{ fontSize: "1.8rem" }}>{services[activeTab].title}</h3>
                <p className="lead text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>{services[activeTab].intro}</p>
                
                <h4 className="h6 fw-bold text-dark mb-3 uppercase" style={{ fontSize: "0.9rem", color: "#666", letterSpacing: "1px" }}>
                  {services[activeTab].itemsHeader}
                </h4>
                <div className="row">
                  {services[activeTab].items.map((item, index) => (
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
                  background: services[activeTab].bgGrad,
                  borderRadius: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 15px 30px"
                }}>
                <span className="text-white-50 text-uppercase fw-bold mb-2" style={{ letterSpacing: "1px", fontSize: "0.8rem" }}>
                  The Value
                </span>
                <h3 className="h4 fw-bold mb-4 text-white">{services[activeTab].benefitsHeader}</h3>
                <ul className="list-unstyled mb-0">
                  {services[activeTab].benefits.map((benefit, index) => (
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
    </section>
  );
};

export default DetailedWebServices;
