'use client'
import React from 'react';

const AITrustSection = () => {
  const trustPoints = [
    {
      title: "Experienced AI Engineers",
      desc: "Dedicated specialists with expertise in AI, ML, NLP, Generative AI, and enterprise software development."
    },
    {
      title: "Agile Delivery Model",
      desc: "Rapid development cycles with complete transparency."
    },
    {
      title: "Long-Term Support",
      desc: "Continuous monitoring, optimization, maintenance, and enhancements."
    }
  ];

  const stacks = [
    {
      category: "AI Technologies",
      items: ["OpenAI", "Claude", "Gemini", "Llama", "Mistral", "LangChain", "CrewAI", "AutoGen"]
    },
    {
      category: "Development Technologies",
      items: ["Python", "Node.js", "React", "Angular", ".NET", "Java"]
    },
    {
      category: "Cloud Platforms",
      items: ["AWS", "Azure", "Google Cloud"]
    }
  ];

  return (
    <section className="ai-trust-section pt100 pb70" style={{ background: "#fff" }}>
      <div className="container">
        <div className="row">
          {/* Trust points */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="pe-lg-4">
              <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
                Proven Partner
              </span>
              <h2 className="fw-bold text-dark mb-4" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
                Why Businesses Trust TGAYS Technology
              </h2>
              
              <div className="mt-4">
                {trustPoints.map((point, index) => (
                  <div key={index} className="mb-4 d-flex">
                    <div className="icon me-3" style={{ color: "#0083FF", fontSize: "1.5rem", marginTop: "3px" }}>
                      <ion-icon name="shield-checkmark"></ion-icon>
                    </div>
                    <div>
                      <h4 className="fw-bold text-dark mb-2" style={{ fontSize: "1.1rem" }}>{point.title}</h4>
                      <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="col-lg-6">
            <div className="p-4 p-md-5 rounded-4 shadow-sm h-100"
              style={{
                borderRadius: "24px",
                background: "#fafafa",
                border: "1px solid #f0f0f0"
              }}>
              <h3 className="fw-bold text-dark mb-4" style={{ fontSize: "1.5rem" }}>Modern Technology Stack</h3>
              
              {stacks.map((stack, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="fw-bold text-primary mb-3" style={{ fontSize: "1rem", color: "#0083FF", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    {stack.category}
                  </h4>
                  <div className="d-flex flex-wrap gap-2">
                    {stack.items.map((item, itemIdx) => (
                      <span key={itemIdx} className="px-3 py-2 rounded-3 text-dark font-medium"
                        style={{
                          background: "#fff",
                          border: "1px solid #e2e8f0",
                          fontSize: "0.85rem",
                          fontWeight: "500",
                          boxShadow: "rgba(0, 0, 0, 0.02) 0px 2px 4px"
                        }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrustSection;
