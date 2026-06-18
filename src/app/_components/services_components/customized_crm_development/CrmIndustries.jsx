'use client'
import React from 'react';

const CrmIndustries = () => {
  const industries = [
    {
      title: "Healthcare CRM Development",
      icon: "medical-outline",
      desc: "Patient-centered CRM portals matching secure and automated healthcare management standards.",
      items: ["Patient Information Systems", "Appointment Scheduling Automations", "Telehealth CRM Integrations", "Secure Compliance (HIPAA) Rules"]
    },
    {
      title: "Real Estate CRM Development",
      icon: "business-outline",
      desc: "Manage properties, automate agent assignments, and nurture buyer/renter leads efficiently.",
      items: ["Lead Tracking & Management", "Property Inventory Lists", "Agent Performance Boards", "Automated Client Emails"]
    },
    {
      title: "E-commerce CRM Solutions",
      icon: "cart-outline",
      desc: "Drive online purchase conversions, reward loyalty, and optimize custom marketing segments.",
      items: ["User Purchase Segmentation", "Marketing Campaign Triggers", "Loyalty Point Programs", "Order Status Integrations"]
    },
    {
      title: "Financial & Fintech CRM",
      icon: "wallet-outline",
      desc: "Secure customer relationship portals for tracking loan applications, onboarding, and portfolios.",
      items: ["Secure User Onboarding", "Compliance Auditing Tools", "Broker Pipeline Trackers", "Financial Yield Reporting"]
    },
    {
      title: "SaaS CRM Solutions",
      icon: "cloud-outline",
      desc: "Build platforms that monitor product usage metrics, support tickets, and subscriber lifecycles.",
      items: ["Subscription Billing Syncs", "Customer Success Portals", "Help Desk Ticket Routing", "Account Analytics Dashboards"]
    },
    {
      title: "Small Business CRM Development",
      icon: "rocket-outline",
      desc: "Simple, easy-to-use custom setups designed for scaling businesses without unnecessary bloat.",
      items: ["Simplified Contacts Log", "Basic Task Reminders", "Unified Email Templates", "Cost-effective Growth Paths"]
    }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white" role="region" aria-labelledby="crm-industries-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="crm-industries-heading" className="heading-title text-uppercase" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Designing highly specialized, industry-compliant CRM features configured to match your target domain.</p>
        </div>

        <div className="row mt-5">
          {industries.map((ind, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100 p-4 border-0 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #eee",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.1) 0px 15px 30px";
                  e.currentTarget.style.borderColor = "#0083FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#eee";
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrap p-3 rounded-3 me-3" style={{ background: "rgba(0, 131, 255, 0.08)", color: "#0083FF", display: "flex", fontSize: "1.5rem" }}>
                    <ion-icon name={ind.icon}></ion-icon>
                  </div>
                  <h3 className="h5 fw-bold mb-0 text-dark" style={{ fontSize: "1.15rem" }}>{ind.title}</h3>
                </div>
                <p className="text-muted mb-3" style={{ fontSize: "0.88rem", lineHeight: "1.5" }}>{ind.desc}</p>
                <ul className="list-unstyled p-0 m-0 mt-auto">
                  {ind.items.map((item, idx) => (
                    <li key={idx} className="mb-2 text-dark d-flex align-items-center" style={{ fontSize: "0.85rem", fontWeight: "500" }}>
                      <span className="me-2 text-primary" style={{ fontSize: "0.9rem", color: "#0083FF" }}>●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmIndustries;
