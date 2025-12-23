import React from 'react';

const AppSupportServices = () => {
  const services = [
    {
      id: 1,
      icon: "construct-outline",
      title: "Proactive Monitoring",
      description: "Track application health and performance in real-time to detect and prevent issues before they occur."
    },
    {
      id: 2,
      icon: "cog-outline",
      title: "Bug Fixing & Optimization",
      description: "Swift resolution of bugs and performance bottlenecks to ensure seamless user experience."
    },
    {
      id: 3,
      icon: "logo-microsoft",
      title: "Version Upgrades",
      description: "Keep your applications secure and compatible with the latest technologies through planned updates."
    },
    {
      id: 4,
      icon: "layers-outline",
      title: "24/7 Technical Support",
      description: "Our dedicated team ensures your critical applications are supported anytime, anywhere."
    }
  ];

  return (
    <>
      <section className="staff-key-benefits">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 className="heading-title">Expertise Across Platforms & Technologies</h2>
          <p>We deliver robust support strategies tailored to your unique application environment — from cloud-native to enterprise-scale systems.</p>
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

export default AppSupportServices;