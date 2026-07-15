'use client'
import React from 'react';
import Link from 'next/link';

const TourWhyChoose = () => {
  const reasons = [
    { title: "Travel Technology Expertise", desc: "Our team specializes in developing robust travel platforms for agencies, tour operators, aggregators, and travel management companies.", icon: "airplane-outline" },
    { title: "Fully Customized Solutions", desc: "We create systems tailored to your workflows, suppliers, inventory structure, and customer journey.", icon: "color-wand-outline" },
    { title: "Scalable Architecture", desc: "Our platforms are designed to support growing user bases, increasing bookings, and expanding product offerings.", icon: "bar-chart-outline" },
    { title: "Global Market Experience", desc: "We serve clients across the USA, India, UK, Australia, and Dubai with solutions aligned to international standards.", icon: "earth-outline" },
    { title: "Advanced Integrations", desc: "Integrate flights, hotels, transfers, activities, payment gateways, CRM tools, accounting software, and APIs.", icon: "git-network-outline" },
    { title: "Dedicated Support", desc: "Receive continuous maintenance, technical support, updates, and performance optimization.", icon: "headset-outline" }
  ];

  return (
    <section className="why-choose-section pt100 pb100 bg-light">
      <style dangerouslySetInnerHTML={{__html: `
        .tour-why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .tour-why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 131, 255, 0.1);
          border-color: #0083FF;
        }
        .tour-why-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(0, 131, 255, 0.1);
          color: #0083FF;
          font-size: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .tour-why-card:hover .tour-why-icon {
          background: #0083FF;
          color: #ffffff;
          transform: scale(1.1);
        }
      `}} />
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "700", padding: "8px 16px", letterSpacing: "1px", borderRadius: "30px" }}>
              Why Choose TGAYS?
            </span>
            <h2 className="heading-title mb-4" style={{ fontSize: "2.5rem", fontWeight: "800", textTransform: "uppercase", color: "#1f2937" }}>
              Why Choose TGAYS Technology for <span className="c-primary">Travel Portal Development?</span>
            </h2>
            <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
              As a leading <Link href="https://www.tgaystechnology.com" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>travel portal development company India</Link>, we combine deep travel industry knowledge with cutting-edge engineering to build platforms that scale.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {reasons.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 h-100 rounded-4 tour-why-card">
                <div className="tour-why-icon mb-4">
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                
                <h4 className="fw-bold mb-3" style={{ color: "#1e293b", fontSize: "1.2rem" }}>{item.title}</h4>
                <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#475569" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourWhyChoose;
