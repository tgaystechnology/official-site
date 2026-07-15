'use client'
import React from 'react';
import Link from 'next/link';

const HealthcareWhyChoose = () => {
  const reasons = [
    { title: "Healthcare Domain Expertise", desc: "Our development team understands healthcare workflows, patient journeys, provider requirements, and regulatory considerations.", icon: "medkit-outline" },
    { title: "Custom Healthcare Software Development", desc: "We design and develop tailored healthcare applications that align with your business goals and clinical processes.", icon: "color-wand-outline" },
    { title: "Security & Compliance Focus", desc: "Healthcare data demands the highest level of protection. We implement industry-standard security protocols and compliance-ready architectures.", icon: "lock-closed-outline" },
    { title: "Scalable & Future-Proof Solutions", desc: "Our healthcare systems are built to support growing patient volumes, expanding services, and evolving healthcare technologies.", icon: "trending-up-outline" },
    { title: "Global Delivery Capability", desc: "Serving clients across India, USA, UK, Australia, and Dubai with world-class healthcare software solutions.", icon: "earth-outline" },
    { title: "Long-Term Support & Innovation", desc: "We provide ongoing support, maintenance, upgrades, and technology consulting to ensure continuous improvement.", icon: "headset-outline" }
  ];

  return (
    <section className="why-choose-section pt100 pb100 bg-light">
      <style dangerouslySetInnerHTML={{__html: `
        .health-why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .health-why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 131, 255, 0.1);
          border-color: #0083FF;
        }
        .health-why-icon {
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
        .health-why-card:hover .health-why-icon {
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
            <h2 className="heading-title mb-4">
              Why Choose TGAYS as Your <span className="c-primary">Healthcare Software</span> Development Partner?
            </h2>
            <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
              As a leading <Link href="https://www.tgaystechnology.com" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>healthcare software development company India</Link>, we help healthcare providers, hospitals, clinics, and medical enterprises implement reliable, compliant, and future-ready digital solutions that support patient care and operational excellence.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {reasons.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 h-100 rounded-4 health-why-card">
                <div className="health-why-icon mb-4">
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

export default HealthcareWhyChoose;
