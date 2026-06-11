'use client'
import React, { useState } from 'react';

const DetailedAIServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "startup-ai",
      tabTitle: "AI for Startups",
      title: "AI Development Company for Startups",
      intro: "Launch innovative AI-driven products faster while reducing development risks and costs.",
      listTitle: "Startup AI Solutions",
      listItems: [
        "AI MVP Development",
        "AI Product Engineering",
        "Intelligent Customer Support Systems",
        "AI Recommendation Engines",
        "Conversational AI Applications",
        "Generative AI Products"
      ],
      outcomeTitle: "Benefits",
      outcomeItems: [
        "Faster product launch",
        "Reduced operational costs",
        "Enhanced customer engagement",
        "Competitive market advantage"
      ]
    },
    {
      id: "enterprise-ai",
      tabTitle: "Enterprise AI",
      title: "Enterprise AI Development Services",
      intro: "Large organizations require secure, scalable, and reliable AI systems that integrate seamlessly with existing infrastructures.",
      listTitle: "Enterprise AI Capabilities",
      listItems: [
        "Predictive Analytics",
        "Intelligent Process Automation",
        "AI-Powered Decision Support",
        "Enterprise Knowledge Management",
        "AI-Powered Business Intelligence",
        "Workflow Automation"
      ],
      outcomeTitle: "Business Impact",
      outcomeItems: [
        "Increased productivity",
        "Improved forecasting accuracy",
        "Reduced operational inefficiencies",
        "Better strategic decision-making"
      ]
    },
    {
      id: "generative-ai",
      tabTitle: "Generative AI",
      title: "Generative AI Development Company",
      intro: "Build next-generation applications powered by advanced language models and generative technologies.",
      listTitle: "Generative AI Solutions",
      listItems: [
        "AI Content Generation Platforms",
        "Enterprise Knowledge Assistants",
        "AI Search Solutions",
        "AI-Powered Documentation Systems",
        "Intelligent Copilots",
        "Custom LLM Applications"
      ],
      outcomeTitle: "Key Advantages",
      outcomeItems: [
        "Faster content creation",
        "Improved employee productivity",
        "Better information accessibility",
        "Enhanced customer experiences"
      ]
    },
    {
      id: "ai-agents",
      tabTitle: "AI Agent Dev",
      title: "AI Agent Development Company India",
      intro: "Deploy autonomous AI agents capable of handling repetitive tasks, customer interactions, business operations, and workflow management.",
      listTitle: "AI Agent Services",
      listItems: [
        "Customer Support Agents",
        "Sales Automation Agents",
        "HR Automation Agents",
        "Data Processing Agents",
        "Workflow Automation Agents",
        "Multi-Agent Systems"
      ],
      outcomeTitle: "Outcomes",
      outcomeItems: [
        "24/7 operational efficiency",
        "Lower labor costs",
        "Faster task execution",
        "Improved service delivery"
      ]
    },
    {
      id: "custom-ai",
      tabTitle: "Custom AI Apps",
      title: "Custom AI Application Development",
      intro: "Every business has unique challenges. Our custom AI application development services create tailored solutions aligned with your objectives.",
      listTitle: "Solutions Include",
      listItems: [
        "Predictive Analytics Platforms",
        "Recommendation Systems",
        "Computer Vision Applications",
        "Fraud Detection Systems",
        "Smart Business Dashboards",
        "AI-Powered SaaS Platforms"
      ],
      outcomeTitle: "Why Custom AI",
      outcomeItems: [
        "Highly customized logic",
        "Full control over data",
        "Proprietary IP development",
        "Perfect alignment with workflows"
      ]
    },
    {
      id: "ai-automation",
      tabTitle: "AI Automation",
      title: "AI Automation Development Services",
      intro: "Replace manual processes with intelligent automation solutions that improve efficiency and accuracy.",
      listTitle: "Automation Areas",
      listItems: [
        "Customer Service Automation",
        "Lead Qualification",
        "Document Processing",
        "Data Extraction",
        "Workflow Management",
        "Business Process Optimization"
      ],
      outcomeTitle: "Key Benefits",
      outcomeItems: [
        "Error reduction",
        "Minimized manual workloads",
        "24/7 processing times",
        "Resource optimization"
      ]
    },
    {
      id: "ai-consulting",
      tabTitle: "AI Consulting",
      title: "AI Consulting Company for Enterprises",
      intro: "Develop a clear roadmap for AI adoption, implementation, governance, and optimization.",
      listTitle: "Consulting Services",
      listItems: [
        "AI Readiness Assessment",
        "AI Strategy Development",
        "Technology Selection",
        "Risk Assessment",
        "Governance Frameworks",
        "AI Transformation Planning"
      ],
      outcomeTitle: "Value Delivered",
      outcomeItems: [
        "Clear ROI projection",
        "Minimized tech stack waste",
        "Secure deployment roadmap",
        "Smooth transition strategy"
      ]
    }
  ];

  return (
    <section className="detailed-services-section pt100 pb100" style={{ background: "#fff" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            AI POWERED SERVICES <span className="c-primary">DESIGNED FOR MODERN BUSINESSES</span>
          </h2>
          <p className="slider-content-text">Explore our comprehensive range of artificial intelligence services engineered to scale your operations.</p>
        </div>

        <div className="row mt-5">
          {/* Left Tab Pills */}
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="d-flex flex-column nav nav-pills" role="tablist" style={{ gap: "10px" }}>
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
                    <span style={{ fontSize: "1.2rem", opacity: activeTab === index ? 1 : 0.3 }}>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Detail Panel */}
          <div className="col-lg-8 col-md-12">
            <div className="card border-0 shadow-sm p-4 p-md-5 h-100"
              style={{
                borderRadius: "16px",
                background: "#fafafa",
                border: "1px solid #f0f0f0",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 10px 30px"
              }}>
              <div className="card-body p-0">
                <span className="badge mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px" }}>
                  TGAYS AI Capabilities
                </span>

                <h3 className="mb-3 text-dark" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
                  {services[activeTab].title}
                </h3>

                <p className="text-muted mb-4" style={{ fontSize: "1.02rem", lineHeight: "1.6" }}>
                  {services[activeTab].intro}
                </p>

                <hr style={{ borderTop: "1px solid #eaeaea", margin: "25px 0" }} />

                <div className="row">
                  {/* Left Column: Solutions */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="options-outline"></ion-icon>
                      </div>
                      <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab].listTitle}</h4>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                      {services[activeTab].listItems.map((item, index) => (
                        <li key={index} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.95rem" }}>
                          <span style={{ color: "#0083ff", marginRight: "8px", fontWeight: "bold" }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Outcomes/Benefits */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#ff5e3a", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="sparkles-outline"></ion-icon>
                      </div>
                      <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab].outcomeTitle}</h4>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                      {services[activeTab].outcomeItems.map((item, index) => (
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

export default DetailedAIServices;
