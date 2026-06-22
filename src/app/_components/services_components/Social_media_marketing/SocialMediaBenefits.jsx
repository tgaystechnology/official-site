'use client'
import React from 'react';

const SocialMediaBenefits = () => {
  const benefits = [
    {
      title: "Increased Brand Awareness",
      desc: "Reach more potential customers through strategic content distribution and targeted organic growth.",
      icon: "megaphone-outline"
    },
    {
      title: "Better Audience Engagement",
      desc: "Build stronger relationships with customers and followers through proactive community management.",
      icon: "heart-outline"
    },
    {
      title: "Improved Lead Generation",
      desc: "Generate high-quality inquiries and build sales pipelines through targeted campaigns.",
      icon: "magnet-outline"
    },
    {
      title: "Higher Conversion Rates",
      desc: "Convert social media traffic into paying customers using optimized sales funnels and retargeting.",
      icon: "trending-up-outline"
    },
    {
      title: "Stronger Customer Loyalty",
      desc: "Create meaningful interactions that encourage repeat business and transform buyers into brand advocates.",
      icon: "star-outline"
    },
    {
      title: "Better Marketing ROI",
      desc: "Track, optimize, and improve campaign performance continuously through data-driven insights.",
      icon: "pie-chart-outline"
    },
    {
      title: "Competitive Advantage",
      desc: "Stay ahead of competitors through innovative social media strategies and platform-specific execution.",
      icon: "trophy-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="smm-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="smm-benefits-heading" className="heading-title text-uppercase" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF HIRING A <span className="c-primary">SOCIAL MEDIA AGENCY</span>
          </h2>
          <p>Deliver digital marketing campaigns that drive user adoption, maximize ROI, and grow your brand.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="smm-advantages-heading">
        <div className="container">
          <div className="row justify-content-center">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="key-wrap" style={{ minHeight: "220px" }}>
                  <div className="key-icon" aria-hidden="true">
                    <span><ion-icon name={benefit.icon}></ion-icon></span>
                  </div>
                  <div className="key-text">
                    <h3 className="benefit-title" style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "15px" }}>{benefit.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-answer-box p-4 text-center" style={{ background: "rgba(0, 131, 255, 0.03)", border: "1px solid rgba(0, 131, 255, 0.15)", borderRadius: "16px", marginTop: "45px", boxShadow: "rgba(0, 0, 0, 0.01) 0px 10px 20px" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: What Does a Social Media Marketing Company Do?</h4>
            <p className="mb-0 text-muted" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              A social media marketing company helps businesses build brand awareness, engage audiences, generate leads, increase website traffic, and drive sales through strategic content creation, paid advertising, community management, and performance optimization across social media platforms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaBenefits;
