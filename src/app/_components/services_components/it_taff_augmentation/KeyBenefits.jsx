import React from 'react';

const KeyBenefits = () => {
  // Benefits data
  const benefits = [
    {
      id: 1,
      title: "Rapid Scaling",
      description: "Quickly expand or reduce your team size based on project needs. Our talent pool is ready for deployment within days.",
      icon: "magnet-outline"
    },
    {
      id: 2,
      title: "Cost Effective",
      description: "Cut down hiring costs and operational overhead. Pay only for what you need—no long-term obligations.",
      icon: "cash-outline"
    },
    {
      id: 3,
      title: "Top Talent",
      description: "Work with pre-vetted professionals who bring proven experience and excellence in modern technologies.",
      icon: "medal-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 className="heading-title">Key Benefits</h2>
          <p>Here's why businesses choose us to strengthen their teams with highly capable tech talent.</p>
        </div>
      </section>

      <section className="key-list">
        <div className="container">
          <div className="row">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="col-sm-12 col-md-12 col-lg-4">
                <div className="key-wrap">
                  <div className="key-icon">
                    <span><ion-icon name={benefit.icon}></ion-icon></span>
                  </div>
                  <div className="key-text">
                    <h5>{benefit.title}</h5>
                    <p>{benefit.description}</p>
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

export default KeyBenefits;