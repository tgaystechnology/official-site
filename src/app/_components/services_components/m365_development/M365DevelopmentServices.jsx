import React from 'react';

const M365DevelopmentServices = () => {
  // Services data
  const services = [
    {
      id: 1,
      icon: "construct-outline",
      title: "SharePoint Customization",
      description: "Build modern, branded SharePoint intranet portals with secure access and easy collaboration."
    },
    {
      id: 2,
      icon: "cog-outline",
      title: "Power Automate Workflows",
      description: "Streamline business processes with Power Automate — from approvals to complex triggers."
    },
    {
      id: 3,
      icon: "logo-microsoft",
      title: "Microsoft Teams Integrations",
      description: "Extend Teams with bots, tabs, and connectors that fit your business workflow."
    },
    {
      id: 4,
      icon: "layers-outline",
      title: "PowerApps Development",
      description: "Create responsive, mobile-friendly apps to digitize internal operations — no heavy coding needed."
    }
  ];

  return (
    <>
      <section className="staff-key-benefits">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 className="heading-title">Our M365 Development Services</h2>
          <p>Seamlessly integrate your business workflows with Microsoft 365 tools built to perform and scale.</p>
        </div>
      </section>

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

export default M365DevelopmentServices;