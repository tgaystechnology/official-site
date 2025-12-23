import React from 'react';

const DigitalMarketingServicesSecondSection = () => {
  // Service data array
  const services = [
    {
      id: 1,
      icon: "construct-outline",
      title: "Advanced SEO Audit",
      description: "We perform technical, on‑page, and off‑page audits to identify growth opportunities and optimize site health."
    },
    {
      id: 2,
      icon: "cog-outline",
      title: "Keyword & Competitor Analysis",
      description: "We research high‑ROI keywords and analyze competitors to ensure your campaigns outperform the competition."
    },
    {
      id: 3,
      icon: "logo-microsoft",
      title: "PPC Campaign Management",
      description: "From ad setup to ongoing optimization, we manage campaigns to maximize conversions and minimize cost‑per‑click."
    },
    {
      id: 4,
      icon: "layers-outline",
      title: "Retargeting & Display Ads",
      description: "We re‑engage previous visitors with dynamic retargeting campaigns to boost conversion and brand recall."
    }
  ];

  return (
    <>
      {/* Services Header Section */}
      <section className="staff-key-benefits">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 className="heading-title">Our Digital Marketing Services</h2>
          <p>Here's why businesses choose us to strengthen their digital teams with proven strategies.</p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="key-list">
        <div className="container">
          <div className="row">
            {services.map(service => (
              <div key={service.id} className="col-sm-12 col-md-12 col-lg-3">
                <div className="key-wrap">
                  <div className="key-icon">
                    <span>
                      <ion-icon name={service.icon}></ion-icon>
                    </span>
                  </div>
                  <div className="key-text">
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingServicesSecondSection;