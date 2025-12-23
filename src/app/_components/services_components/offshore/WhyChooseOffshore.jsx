import React from 'react';

const WhyChooseOffshore = () => {
  // Benefits data
  const benefits = [
    {
      id: 1,
      icon: "bulb-outline",
      title: "Cost Advantage",
      description: "Cut your development costs by up to 60% without compromising on quality or innovation."
    },
    {
      id: 2,
      icon: "timer-outline",
      title: "Time Zone Flexibility",
      description: "Leverage our global presence for round-the-clock collaboration and faster project delivery."
    },
    {
      id: 3,
      icon: "desktop-outline",
      title: "Dedicated Resources",
      description: "Gain access to a dedicated offshore team that works exclusively for you with full visibility and control."
    },
    {
      id: 4,
      icon: "key-outline",
      title: "Secure & Reliable",
      description: "We prioritize your security. Our offshore process is backed by NDAs, IP protection, and enterprise-grade infrastructure."
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="staff-key-benefits">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 className="heading-title">Why Choose Offshore with TGaysTechnology?</h2>
          <p>Businesses worldwide trust TGaysTechnology for their offshore development needs. Here's why we stand out when it comes to building scalable, secure, and cost-effective development teams.</p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="key-list">
        <div className="container">
          <div className="row">
            {benefits.map(benefit => (
              <div key={benefit.id} className="col-sm-12 col-md-12 col-lg-3">
                <div className="key-wrap">
                  <div className="key-icon">
                    <span>
                      <ion-icon name={benefit.icon}></ion-icon>
                    </span>
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

export default WhyChooseOffshore;