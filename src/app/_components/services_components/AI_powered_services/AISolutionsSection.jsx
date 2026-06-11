'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import Link from 'next/link';

const AISolutionsSection = () => {
  const expertise = [
    "AI Agent Development",
    "Generative AI Solutions",
    "AI Chatbot Development",
    "Enterprise AI Integration",
    "AI Process Automation",
    "Predictive Analytics",
    "Custom AI Applications",
    "Machine Learning Solutions",
    "Conversational AI Platforms",
    "AI Consulting & Strategy"
  ];

  return (
    <section className="background-contain pt100 pb70 web-solution-section ai-power-two-sec" role="region" aria-labelledby="ai-solutions-overview-heading" style={{ background: "#fff" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Text content column */}
          <div className="col-lg-7 col-md-12 about-us-sec mb-4 mb-lg-0">
            <div className="crumina-module crumina-heading">
              <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
                AI Innovation Partner
              </span>
              <h2 id="ai-solutions-overview-heading" className="heading-title mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", lineHeight: "1.25" }}>
                Best AI Development Company in India Delivering <span className="c-primary">Intelligent AI Solutions</span> That Drive Growth
              </h2>
              
              <p className="slider-content-text mb-3" style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "#444" }}>
                Looking for the Best AI Development Company in India to accelerate innovation, automate business processes, and gain a competitive advantage? TGAYS Technology Pvt. Ltd. delivers cutting-edge AI-powered services that help startups, SMEs, and enterprises transform operations, improve customer experiences, and unlock new revenue opportunities. From AI agents and generative AI solutions to intelligent automation and custom AI applications, we develop scalable AI systems tailored to your unique business goals.
              </p>
              
              <p className="slider-content-text mb-4" style={{ fontSize: "1.02rem", lineHeight: "1.7", color: "#444" }}>
                Whether you're seeking enterprise-grade AI implementation, AI-powered product development, or business process automation, our team combines deep technical expertise with strategic consulting to deliver measurable business outcomes.
              </p>

              <div className="expertise-block mb-4">
                <h4 className="fw-bold text-dark mb-3" style={{ fontSize: "1.15rem" }}>Our AI Expertise Includes:</h4>
                <div className="row">
                  {expertise.map((item, idx) => (
                    <div className="col-md-6 mb-2" key={idx}>
                      <div className="d-flex align-items-center">
                        <span style={{ color: "#0083FF", marginRight: "8px", fontWeight: "bold", display: "inline-flex" }}>
                          <ion-icon name="checkmark-circle-outline" style={{ fontSize: "1.2rem" }}></ion-icon>
                        </span>
                        <span style={{ fontSize: "0.95rem", color: "#333", fontWeight: "500" }}>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                <Link href="/contact-us" className="btn text-white px-4 py-3"
                  style={{
                    background: "linear-gradient(90deg, #0083FF 0%, #1D549F 100%)",
                    fontWeight: "600",
                    borderRadius: "30px",
                    boxShadow: "0 4px 15px rgba(0, 131, 255, 0.3)",
                    border: "none"
                  }}>
                  Book a Free AI Strategy Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Animation column */}
          <div className="col-lg-5 col-md-12 text-center">
            <div className="crumina-module">
              <div className="img-thumb d-inline-block">
                <Lottie
                  path="/lottie/Robot Futuristic Ai animated.json"
                  loop
                  autoplay
                  className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[480px] lg:h-[480px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;