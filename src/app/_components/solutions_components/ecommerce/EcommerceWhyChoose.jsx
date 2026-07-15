'use client'
import React from 'react';
import Link from 'next/link';

const EcommerceWhyChoose = () => {
  const reasons = [
    {
      title: "Business-Focused Development",
      description: "We don't just build websites—we create revenue-generating eCommerce ecosystems designed to maximize conversions and profitability.",
      icon: "trending-up-outline"
    },
    {
      title: "Fully Customized Solutions",
      description: "Every business has unique workflows, products, and customer journeys. We build solutions tailored specifically to your requirements.",
      icon: "construct-outline"
    },
    {
      title: "Scalable Architecture",
      description: "Our systems are built to handle increasing traffic, product catalogs, transactions, and customer growth.",
      icon: "git-network-outline"
    },
    {
      title: "Conversion-Driven Design",
      description: "We prioritize user experience, customer engagement, and checkout optimization to improve sales performance.",
      icon: "cart-outline"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Protect customer data, transactions, and business operations with advanced security protocols and compliance standards.",
      icon: "shield-checkmark-outline"
    },
    {
      title: "End-to-End Support",
      description: "From strategy and development to deployment and ongoing maintenance, we provide complete lifecycle support.",
      icon: "headset-outline"
    }
  ];

  return (
    <section className="why-choose-section pt100 pb100 bg-light">
      <style dangerouslySetInnerHTML={{__html: `
        .ecommerce-why-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .ecommerce-why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 131, 255, 0.1);
          border-color: #0083FF;
        }
        .ecommerce-why-icon {
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
        .ecommerce-why-card:hover .ecommerce-why-icon {
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
              Why Choose TGAYS as Your <span className="c-primary">Ecommerce Development</span> Company?
            </h2>
            <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
              As a trusted <Link href="https://www.tgaystechnology.com/solutions/e-commerce-solution" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>ecommerce development company India</Link>, businesses across the USA, India, UK, Australia, and Dubai trust TGAYS Technology because we combine technical excellence, industry expertise, and strategic business thinking.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {reasons.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 h-100 rounded-4 ecommerce-why-card">
                <div className="ecommerce-why-icon mb-4">
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                
                <h4 className="fw-bold mb-3" style={{ color: "#1e293b", fontSize: "1.2rem" }}>{item.title}</h4>
                <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#475569" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceWhyChoose;
