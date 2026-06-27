'use client'
import React from 'react';

const EcommerceIndustries = () => {
  const industries = [
    { title: "Retail & Consumer Goods", desc: "Launch online stores that drive product sales and customer engagement.", icon: "cart-outline" },
    { title: "Manufacturing", desc: "Enable distributors and dealers to order products online efficiently.", icon: "cog-outline" },
    { title: "Healthcare", desc: "Sell healthcare products securely while maintaining compliance standards.", icon: "medkit-outline" },
    { title: "Real Estate", desc: "Develop property listing and transaction platforms.", icon: "business-outline" },
    { title: "Fashion & Apparel", desc: "Create engaging shopping experiences for fashion brands.", icon: "shirt-outline" },
    { title: "Electronics", desc: "Manage large product catalogs and complex inventory structures.", icon: "hardware-chip-outline" },
    { title: "Automotive", desc: "Sell parts, accessories, and services online.", icon: "car-sport-outline" },
    { title: "Food & Beverage", desc: "Support online ordering, delivery, and subscription services.", icon: "restaurant-outline" }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            Delivering specialized ecommerce technology solutions across key sectors.
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          {industries.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="industry-card p-4 text-center h-100" style={{ transition: "all 0.3s ease", borderBottom: "3px solid transparent", cursor: "default", borderRadius: "8px" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottom = "3px solid #0083FF";
                  e.currentTarget.style.background = "#fafafa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = "3px solid transparent";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div className="icon-wrap mx-auto mb-3" style={{ fontSize: "2.5rem", color: "#0083FF" }}>
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                <h3 className="h6 fw-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceIndustries;
