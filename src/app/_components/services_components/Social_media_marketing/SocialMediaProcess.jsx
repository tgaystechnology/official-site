'use client'
import React from 'react';

const SocialMediaProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Business Analysis",
      desc: "We analyze your business objectives, target audience, competitor strategies, and market opportunities."
    },
    {
      num: "02",
      title: "Strategy Development",
      desc: "Create a customized social media growth roadmap tailored to your specific goals and platforms."
    },
    {
      num: "03",
      title: "Content Planning",
      desc: "Develop strategic monthly content calendars aligned with your overarching business objectives."
    },
    {
      num: "04",
      title: "Campaign Execution",
      desc: "Launch high-quality organic content and targeted paid social advertising campaigns."
    },
    {
      num: "05",
      title: "Community Engagement",
      desc: "Proactively build relationships with your followers, prospects, and industry influencers."
    },
    {
      num: "06",
      title: "Performance Optimization",
      desc: "Analyze real-time campaign data, A/B test creatives, and continuously improve results."
    },
    {
      num: "07",
      title: "Growth & Scaling",
      desc: "Scale successful campaigns and allocate budgets to top-performing channels for sustained growth."
    }
  ];

  return (
    <section className="process-workflow-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            OUR SOCIAL MEDIA <span className="c-primary">MARKETING PROCESS</span>
          </h2>
          <p className="slider-content-text">A structured 7-step methodology that ensures seamless delivery and measurable ROI.</p>
        </div>

        <div className="row justify-content-center">
          {steps.map((step, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="step-card p-4 h-100 rounded-4 shadow-sm transition-all" 
                style={{ 
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.08) 0px 15px 30px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="step-num-badge" style={{ 
                  fontSize: "3rem", 
                  fontWeight: "800", 
                  color: "rgba(0, 131, 255, 0.1)", 
                  position: "absolute", 
                  right: "20px", 
                  top: "10px",
                  lineHeight: "1"
                }}>
                  {step.num}
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span className="d-inline-block p-2 rounded-3 text-white mb-3" style={{ background: "#0083FF", fontSize: "0.85rem", fontWeight: "bold", padding: "4px 10px" }}>
                    Step {step.num}
                  </span>
                  <h3 className="h5 fw-bold mb-3 text-dark">{step.title}</h3>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaProcess;
