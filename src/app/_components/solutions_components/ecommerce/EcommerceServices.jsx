'use client'
import React, { useState } from 'react';
import '../../products/PricingCards.css'; // Load Uiverse tab styling classes

const EcommerceServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "custom-ecommerce",
      tabTitle: "Custom Software",
      title: "Custom Ecommerce Software",
      intro: "Our custom ecommerce software development services help businesses build unique online selling platforms that align with their operational and growth requirements.",
      listTitle: "What We Deliver",
      listItems: [
        "Custom online stores",
        "Product management systems",
        "Shopping cart solutions",
        "Secure checkout systems",
        "Customer account portals",
        "Inventory synchronization",
        "Multi-channel selling platforms"
      ],
      outcomeTitle: "Business Benefits",
      outcomeItems: [
        "Greater flexibility",
        "Better scalability",
        "Improved user experience",
        "Higher conversion rates"
      ]
    },
    {
      id: "website-development",
      tabTitle: "Website Development",
      title: "Ecommerce Website Development",
      intro: "Our ecommerce website development services focus on creating fast, secure, and customer-centric digital storefronts.",
      listTitle: "Core Features",
      listItems: [
        "Responsive design",
        "Advanced search functionality",
        "Product filtering",
        "Wishlist functionality",
        "Personalized recommendations",
        "Secure payment gateways",
        "SEO-friendly architecture"
      ],
      outcomeTitle: "Business Benefits",
      outcomeItems: [
        "Increased traffic",
        "Higher user engagement",
        "Lower bounce rates",
        "Optimized checkout flows"
      ]
    },
    {
      id: "multi-vendor",
      tabTitle: "Multi Vendor",
      title: "Multi Vendor Marketplace",
      intro: "Launch a marketplace similar to Amazon, Etsy, Flipkart, or Alibaba with advanced multi-vendor functionality.",
      listTitle: "Vendor Features",
      listItems: [
        "Vendor dashboards",
        "Product listing management",
        "Commission management",
        "Sales reporting",
        "Vendor onboarding",
        "Inventory management",
        "Vendor payouts"
      ],
      outcomeTitle: "Marketplace Benefits",
      outcomeItems: [
        "Multiple revenue streams",
        "Expanded product offerings",
        "Faster business growth",
        "Lower inventory risk"
      ]
    },
    {
      id: "b2b-ecommerce",
      tabTitle: "B2B Ecommerce",
      title: "B2B Ecommerce Platform",
      intro: "Create a powerful B2B portal that simplifies wholesale transactions and distributor management.",
      listTitle: "B2B Features",
      listItems: [
        "Custom pricing",
        "Bulk ordering",
        "RFQ management",
        "Corporate accounts",
        "Dealer portals",
        "Credit management",
        "Multi-level approvals"
      ],
      outcomeTitle: "Business Benefits",
      outcomeItems: [
        "Streamlined purchasing",
        "Reduced manual errors",
        "Higher B2B retention",
        "Automated wholesale operations"
      ]
    },
    {
      id: "order-management",
      tabTitle: "Order Management",
      title: "Order Management System",
      intro: "Efficient order management is critical for customer satisfaction and operational efficiency.",
      listTitle: "Key Features",
      listItems: [
        "Order tracking",
        "Shipment management",
        "Returns processing",
        "Automated notifications",
        "Order analytics",
        "Fulfillment workflows"
      ],
      outcomeTitle: "Outcomes",
      outcomeItems: [
        "Reduced processing time",
        "Fewer operational errors",
        "Faster deliveries",
        "Improved customer satisfaction"
      ]
    },
    {
      id: "inventory-management",
      tabTitle: "Inventory Management",
      title: "Inventory Management Software",
      intro: "Manage inventory across warehouses, stores, and sales channels from a centralized dashboard.",
      listTitle: "Capabilities",
      listItems: [
        "Real-time stock updates",
        "Warehouse management",
        "Low-stock alerts",
        "Demand forecasting",
        "Inventory reporting",
        "Barcode integration"
      ],
      outcomeTitle: "Business Benefits",
      outcomeItems: [
        "Eliminate stockouts",
        "Reduce overstocking",
        "Multi-location tracking",
        "Optimized warehouse space"
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
            Comprehensive <span className="c-primary">E-Commerce System</span> Development Services
          </h2>
          <p className="slider-content-text">We provide end-to-end ecommerce technology solutions designed to handle everything from frontend storefronts to backend operational management.</p>
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
                        Ecommerce Solutions
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
                              <ion-icon name="list-outline"></ion-icon>
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
                  Ecommerce Solutions
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
                        <ion-icon name="list-outline"></ion-icon>
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

export default EcommerceServices;
