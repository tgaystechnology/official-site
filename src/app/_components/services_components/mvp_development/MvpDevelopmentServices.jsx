import React from 'react';

const MvpDevelopmentServices = () => {
  // Services data
  const services = [
    {
      id: 1,
      icon: "construct-outline",
      title: "MVP Architecture Planning",
      description: "Define the tech stack and essential features needed to build a lean, focused product."
    },
    {
      id: 2,
      icon: "cog-outline",
      title: "Rapid Prototyping",
      description: "Create interactive wireframes or mockups to visualize your MVP before development begins."
    },
    {
      id: 3,
      icon: "logo-microsoft",
      title: "Core Feature Development",
      description: "Build only the core features to launch faster, get real feedback, and iterate effectively."
    },
    {
      id: 4,
      icon: "layers-outline",
      title: "MVP Testing & Iteration",
      description: "Refine your MVP with user feedback and improve product-market fit through fast iterations."
    }
  ];

  return (
    <>
      {/* Header Section */}
      <section className="staff-key-benefits">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 className="heading-title">Our MVP Development Services</h2>
          <p>Here's why businesses choose us to strengthen their product ideas with powerful MVP solutions.</p>
        </div>
      </section>

      {/* Services Grid */}
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

export default MvpDevelopmentServices;