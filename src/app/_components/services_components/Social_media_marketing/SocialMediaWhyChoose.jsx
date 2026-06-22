'use client'
import React from 'react';

const SocialMediaWhyChoose = () => {
  const comparisonData = [
    { factor: "Campaign Approach", tgays: "Data-Driven & Full-Funnel", typical: "Generic Posting" },
    { factor: "Metrics Focus", tgays: "Leads, Sales & ROI", typical: "Vanity Metrics (Likes)" },
    { factor: "Content Quality", tgays: "Custom Creative & Video Production", typical: "Basic Stock Templates" },
    { factor: "Team Structure", tgays: "Dedicated Niche Specialists", typical: "Shared/Generalist Accounts" },
    { factor: "Reporting", tgays: "Transparent Real-Time Analytics", typical: "Basic Monthly Reports" },
    { factor: "Industry Alignment", tgays: "Tailored Strategies (B2B/B2C/SaaS)", typical: "One-Size-Fits-All" }
  ];

  const advantages = [
    {
      title: "Data-Driven Social Media Strategies",
      desc: "Every campaign is built using customer insights, competitor analysis, industry trends, and audience behavior."
    },
    {
      title: "Full-Funnel Social Media Marketing",
      desc: "We guide potential customers through every stage of the buying journey—from awareness to conversion."
    },
    {
      title: "Industry-Specific Expertise",
      desc: "We create tailored social media solutions for healthcare, SaaS, real estate, eCommerce, education, finance, and local service businesses."
    },
    {
      title: "Creative Meets Performance",
      desc: "Our team combines compelling content with advanced targeting strategies to maximize campaign effectiveness."
    },
    {
      title: "Transparent Reporting",
      desc: "Track campaign performance through detailed reports and real-time analytics dashboards."
    },
    {
      title: "Dedicated Social Media Experts",
      desc: "Work with strategists, content creators, designers, video editors, community managers, and advertising specialists."
    }
  ];

  return (
    <section className="why-choose-offshore pt100 pb70 bg-white" role="region" aria-labelledby="why-choose-smm-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="why-choose-smm-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE TGAYS TECHNOLOGY AS YOUR <span className="c-primary">SOCIAL MEDIA AGENCY</span>
          </h2>
          <p className="slider-content-text">
            More Than Likes and Followers—We Deliver Business Growth. At TGAYS Technology, we focus on generating measurable business outcomes including leads, sales, customer engagement, brand awareness, and long-term customer loyalty.
          </p>
        </div>

        <div className="row align-items-start mt-5">
          {/* Table comparison Column */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>What Makes Us Different?</h3>
            <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
              <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
                <thead>
                  <tr style={{ background: "#0c1527", color: "#fff" }}>
                    <th className="p-3 text-start" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#fff" }}>Feature</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#0083FF" }}>TGAYS Technology</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#aaa" }}>Typical Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-3 text-start fw-semibold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.factor}
                      </td>
                      <td className="p-3 fw-bold text-success" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem", color: "#0083FF" }}>
                        {item.tgays}
                      </td>
                      <td className="p-3 text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Advantages Column */}
          <div className="col-lg-5">
            <style dangerouslySetInnerHTML={{__html: `
              .custom-scrollbar-advantages::-webkit-scrollbar {
                width: 4px;
              }
              .custom-scrollbar-advantages::-webkit-scrollbar-track {
                background: rgba(0, 131, 255, 0.05);
                border-radius: 10px;
              }
              .custom-scrollbar-advantages::-webkit-scrollbar-thumb {
                background: #0083FF;
                border-radius: 10px;
              }
              .custom-scrollbar-advantages::-webkit-scrollbar-thumb:hover {
                background: #005bb5;
              }
            `}} />
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>Our Key Advantages</h3>
            <div className="d-flex flex-column gap-3 custom-scrollbar-advantages" style={{ gap: "15px", maxHeight: "500px", overflowY: "auto", paddingRight: "10px" }}>
              {advantages.map((adv, idx) => (
                <div key={idx} className="adv-card p-3 rounded-3" style={{ background: "rgba(0, 0, 0, 0.02)", borderLeft: "4px solid #0083FF", borderRadius: "8px" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "6px", color: "#111" }}>{adv.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.5" }}>{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaWhyChoose;
