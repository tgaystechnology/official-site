'use client'
import React, { useState } from 'react';
import '../../products/PricingCards.css'; // Load Uiverse tab styling classes

const CrmServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "custom-crm",
      tabTitle: "Custom CRM Dev",
      title: "Custom CRM Software Development",
      intro: "We build tailored CRM platforms to align precisely with your internal sales operations, support pipelines, and customer relation dynamics.",
      listTitle: "Key Feature Focus Areas",
      listItems: [
        "Sales Management & Funnel Tracking",
        "Customer Service & Incident Logging",
        "Marketing Automation & Campaign Tracking",
        "Lead Tracking & Scoring Mechanisms",
        "Customer Lifecycle & Relationship Management"
      ],
      outcomeTitle: "Key Outcomes",
      outcomeItems: [
        "100% custom-fit operational tools",
        "Centralized lead pipeline view",
        "Highly automated task assignments",
        "Increased employee platform adoption"
      ]
    },
    {
      id: "crm-consulting",
      tabTitle: "CRM Consulting",
      title: "CRM Consulting & Strategy",
      intro: "Our experienced CRM architects analyze your existing manual workflows, identify bottlenecks, and recommend optimal automation plans.",
      listTitle: "Strategic Scopes Included",
      listItems: [
        "Workflow & Pipeline Analysis",
        "Feature Roadmap & Architecture Planning",
        "CRM Software Selection Audits",
        "Platform Scalability Mapping",
        "Compliance & Security Scoping"
      ],
      outcomeTitle: "Business Benefits",
      outcomeItems: [
        "Clear deployment milestones",
        "Lower tech stack overheads",
        "Aligned business logic architecture",
        "Higher return on software ROI"
      ]
    },
    {
      id: "crm-integrations",
      tabTitle: "CRM Integration",
      title: "CRM Integration Services",
      intro: "Connect your custom CRM system to all critical third-party systems, ensuring seamless data flow across enterprise departments.",
      listTitle: "Supported Integrations",
      listItems: [
        "Enterprise ERP Systems",
        "Accounting & Invoicing Platforms",
        "Email Marketing Systems (Mailchimp, ActiveCampaign)",
        "Secure Payment Gateways (Stripe, PayPal)",
        "Inventory & E-commerce APIs",
        "Customer Support Ticketing Platforms"
      ],
      outcomeTitle: "Key Advancements",
      outcomeItems: [
        "Elimination of manual double-entry",
        "Unified multi-channel reporting",
        "Instant transaction sync states",
        "Faster cross-team data access"
      ]
    },
    {
      id: "crm-migration",
      tabTitle: "CRM Migration",
      title: "CRM Migration Services",
      intro: "Transition from legacy desktop platforms or rigid SaaS solutions like Salesforce or Zoho to your own customizable, cost-effective setup.",
      listTitle: "Migration Workflow Phases",
      listItems: [
        "Legacy Data Cleanups & Audits",
        "Custom Schema Matching & Mapping",
        "Zero-Data-Loss Extraction Scripts",
        "Sandbox Target Testing validation",
        "Post-migration Integrity Checkups"
      ],
      outcomeTitle: "Protection Measures",
      outcomeItems: [
        "Secure encrypted data transfers",
        "Complete historical log retention",
        "Zero workflow runtime downtime",
        "Immediate fallback fail-safes"
      ]
    },
    {
      id: "mobile-crm",
      tabTitle: "Mobile CRM App",
      title: "Mobile CRM Development",
      intro: "Empower field sales reps and executives with custom iOS and Android CRM applications that run smoothly on smartphones and tablets.",
      listTitle: "Mobile Focus Highlights",
      listItems: [
        "Offline Data Sync Mode",
        "Real-Time Push Notifications",
        "GPS & Location-Based Check-ins",
        "Native Android & iOS SDK codebases",
        "Responsive Tablet Dashboards"
      ],
      outcomeTitle: "Field Operational Wins",
      outcomeItems: [
        "Instant updates from the road",
        "Improved field rep communication",
        "Fast document/invoice signature uploads",
        "Enhanced tracking of lead check-ins"
      ]
    },
    {
      id: "cloud-crm",
      tabTitle: "Cloud CRM Systems",
      title: "Cloud CRM Development",
      intro: "Deploy your CRM on robust, highly scalable cloud architectures like AWS, Microsoft Azure, or GCP to handle millions of records securely.",
      listTitle: "Cloud Infrastructure Setup",
      listItems: [
        "AWS Elastic Beanstalk & EC2",
        "Microsoft Azure App Services",
        "Google Cloud Platform Compute Engine",
        "Automated Failovers & Load Balancing",
        "Encrypted Cloud Backups & Backlogs"
      ],
      outcomeTitle: "Infrastructure Benefits",
      outcomeItems: [
        "99.99% system uptime guarantees",
        "Auto-scaling resource sizing",
        "Global low-latency performance",
        "Advanced perimeter firewall security"
      ]
    },
    {
      id: "enterprise-crm",
      tabTitle: "Enterprise CRM",
      title: "Enterprise CRM Development",
      intro: "Scale custom CRM modules to support large-scale organizations with multiple departments, complex hierarchies, and automated roles.",
      listTitle: "Enterprise Scale Systems",
      listItems: [
        "Role-Based Access Control (RBAC)",
        "Multi-Division Workflow Automation",
        "Advanced BI Reports & Executive Summaries",
        "LDAP / Active Directory (SSO) integration",
        "Enterprise-grade Security Audits"
      ],
      outcomeTitle: "Corporate Control Wins",
      outcomeItems: [
        "Secure department-level access partitioning",
        "Custom cross-functional automations",
        "Enterprise compliance (HIPAA, GDPR, etc.)",
        "Consolidated group analytics views"
      ]
    }
  ];

  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <section className="crm-services-tabs pt100 pb70" style={{ background: "#fcfcfc" }} role="region" aria-labelledby="crm-services-tabs-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="crm-services-tabs-heading" className="heading-title text-uppercase" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            End-to-End <span className="c-primary">CRM Development Services</span>
          </h2>
          <p className="slider-content-text">
            We provide full-lifecycle custom CRM services, from business process analysis and design to complex integration, data migration, and cloud scaling.
          </p>
        </div>

        {/* Mobile View Accordion (d-block d-lg-none) */}
        <div className="row d-block d-lg-none">
          <div className="col-12">
            {services.map((service, index) => {
              const isOpen = activeAccordion === index;
              return (
                <div key={service.id} className="card mb-3 border-0 shadow-sm overflow-hidden" style={{ borderRadius: "12px", background: "#fff" }}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-100 p-3 text-start border-0 d-flex justify-content-between align-items-center"
                    style={{
                      background: isOpen ? "rgba(0, 131, 255, 0.05)" : "#fff",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      outline: "none"
                    }}
                  >
                    <span className="fw-bold text-dark" style={{ fontSize: "1.05rem" }}>{service.tabTitle}</span>
                    <span style={{
                      transform: isOpen ? "rotate(90deg)" : "none",
                      transition: "transform 0.3s ease",
                      color: "#0083ff",
                      fontWeight: "bold"
                    }}>
                      ▶
                    </span>
                  </button>

                  {isOpen && (
                    <div className="p-4" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.05)" }}>
                      <span className="badge mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px" }}>
                        Custom CRM System
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
          {/* Left Tab Pills */}
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
                  Custom CRM System
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

export default CrmServicesTabs;
