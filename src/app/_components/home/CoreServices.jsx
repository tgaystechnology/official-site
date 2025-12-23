import React from 'react';

const CoreServices = () => {
  const services = [
    {
      title: "AI Powered Services",
      icon: "img/ai.png",
      alt: "smartphone"
    },
    {
      title: "Social Media Marketing",
      icon: "img/Socia-Media-Marketing.png",
      alt: "smartphone"
    },
    {
      title: "IT Staff Augmentation",
      icon: "img/IT-Consulting.png",
      alt: "smartphone"
    },
    {
      title: "Web Development",
      icon: "img/mvp_icon.png",
      alt: "smartphone"
    },
    {
      title: "Mobile App Development",
      icon: "img/Mobile-App-Development.png",
      alt: "smartphone"
    },
    {
      title: "Product Development",
      icon: "img/Product-Development.png",
      alt: "smartphone"
    },
    {
      title: "M365 Development",
      icon: "img/M365-Development.png",
      alt: "smartphone"
    },
    {
      title: "Offshore Development",
      icon: "img/offshop.png",
      alt: "smartphone"
    },
    {
      title: "Custom Software Development",
      icon: "img/Custom-Software-Development.png",
      alt: "smartphone"
    },
    {
      title: "MVP Development",
      icon: "img/MVP-Development.png",
      alt: "smartphone"
    },
    {
      title: "Digital Marketing",
      icon: "img/Digital_Marketing.png",
      alt: "smartphone"
    },
    {
      title: "Application Support",
      icon: "img/Application-Support.png",
      alt: "smartphone"
    }
  ];

  return (
    <section className="hm-core-secvice">
      <div className="container core-secvice-sec mt-0">
        <div className="text-center title_core">
          <h1 className="display-4">Our Core Services</h1>
          <h6>HIRE A REMOTE EMPLOYEE FOR ANY ROLE!</h6>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-12 col-xxl-3">
              <div className="crumina-module crumina-info-box info-box--standard-hover">
                <div className="shape1">
                  <img src="img/intro-v1-shape1.png" alt="#" />
                </div>
                <div className="info-box-image">
                  <img className="utouch-icon" src={service.icon} alt={service.alt} />
                </div>
                <div className="info-box-content text-center">
                  <a href="#" className="h5 info-box-title">{service.title}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;