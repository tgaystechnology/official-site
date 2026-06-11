'use client'
import React from 'react';

const WhyChooseWebDev = () => {
  const differentiators = [
    {
      icon: "briefcase-outline",
      title: "Business-First Development Approach",
      desc: "We build solutions aligned with your business goals, customer expectations, and growth objectives."
    },
    {
      icon: "construct-outline",
      title: "Custom-Built Solutions",
      desc: "Every website and web application is developed according to your specific requirements, workflows, and industry needs."
    },
    {
      icon: "trending-up-outline",
      title: "Conversion-Focused Design",
      desc: "Our websites are designed to improve engagement, lead generation, and customer acquisition."
    },
    {
      icon: "search-outline",
      title: "SEO & GEO Optimized Development",
      desc: "We develop websites that are optimized for search engines and AI-driven search platforms like ChatGPT, Gemini, Perplexity, and Claude."
    },
    {
      icon: "resize-outline",
      title: "Scalable Architecture",
      desc: "Our solutions are built to handle future growth, increased traffic, and evolving business requirements."
    },
    {
      icon: "people-circle-outline",
      title: "Dedicated Project Management",
      desc: "Transparent communication, agile development processes, and continuous collaboration throughout the project lifecycle."
    }
  ];

  return (
    <section className="why-choose-webdev pt100 pb70" style={{ background: '#fdfdfd' }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE <span className="c-primary">TGAYS TECHNOLOGY</span> FOR WEB DEVELOPMENT SERVICES?
          </h2>
          <p className="slider-content-text" style={{ maxWidth: "800px", margin: "15px auto 0 auto" }}>
            Choosing the right development partner can significantly impact your business growth. At TGAYS Technology, we focus on delivering websites and applications that not only look great but also drive measurable business outcomes.
          </p>
        </div>

        <div className="text-center mb-5">
          <span className="badge text-uppercase" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "bold", padding: "8px 20px", fontSize: "0.85rem", borderRadius: "30px", letterSpacing: "1px" }}>
            What Makes Us Different?
          </span>
        </div>

        <div className="row mt-4">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="diff-card p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.03) 0px 10px 30px"
                }}>
                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "12px",
                    background: "rgba(0, 131, 255, 0.1)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={diff.icon} style={{ fontSize: "1.6rem" }}></ion-icon>
                </div>
                <h3 className="h5 fw-bold text-dark mb-3" style={{ fontSize: "1.15rem" }}>{diff.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                  {diff.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWebDev;
