'use client'
import React from 'react';
import Lottie from 'lottie-react';

const WorldOfItSolutions = () => {
  const points = [
    {
      title: "Access to Pre-Vetted Technology Professionals",
      desc: "Every developer undergoes technical screening, practical assessments, and communication evaluations before joining client projects."
    },
    {
      title: "Faster Team Scaling",
      desc: "Build your technology team within days instead of spending months on recruitment and onboarding."
    },
    {
      title: "Flexible Engagement Models",
      desc: "Scale resources up or down based on project demands without long-term commitments."
    },
    {
      title: "Cost-Effective Global Talent",
      desc: "Reduce hiring, infrastructure, and operational expenses while maintaining high-quality development standards."
    },
    {
      title: "Seamless Team Integration",
      desc: "Our professionals work as an extension of your in-house team using your preferred tools, workflows, and communication channels."
    },
    {
      title: "Proven Industry Experience",
      desc: "Our engineers have experience delivering projects across multiple industries and technologies."
    }
  ];

  return (
    <section className="background-contain pt100 web-solution-section world-it-staff" role="region"
      aria-labelledby="it-staff-augmentation-solutions-heading">
      <div className="container">
        <div className="row">
          {/* Text Content */}
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 id="it-staff-augmentation-solutions-heading" className="heading-title" style={{ fontSize: "2rem", fontWeight: "700" }}>
                  Why Choose TGAYS Technology for IT Staff Augmentation Services?
                </h2>
              </div>
              <p className="slider-content-text" style={{ fontSize: "1.05rem", lineHeight: "1.6", marginBottom: "25px" }}>
                Businesses today need agility, scalability, and access to specialized talent. Our staff augmentation model helps organizations build high-performing teams quickly while minimizing operational overhead.
              </p>
              
              <h3 className="mb-4" style={{ fontSize: "1.4rem", fontWeight: "600", color: "#0083FF" }}>What Sets Us Apart?</h3>
              
              <div className="row">
                {points.map((point, idx) => (
                  <div key={idx} className="col-md-6 mb-4">
                    <div className="set-apart-card p-3 h-100 rounded-3" style={{ background: "rgba(0, 0, 0, 0.02)", borderLeft: "4px solid #0083FF" }}>
                      <h4 style={{ fontSize: "1.05rem", fontWeight: "600", marginBottom: "8px" }}>{point.title}</h4>
                      <p style={{ fontSize: "0.9rem", color: "#666", margin: "0" }}>{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Lottie Column */}
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
            <div className="crumina-module w-100" style={{ maxWidth: "350px" }}>
              <div className="img-thumb" aria-hidden="true">                
                <Lottie
                  path="/lottie/Information Technology.json"
                  loop
                  autoplay
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldOfItSolutions;