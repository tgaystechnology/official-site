import React from 'react';
import Link from 'next/link';

const CoreServices = () => {
  const services = [
    {
      title: "AI Powered Services",
      link: "/services/ai-powered-services",
      icon: "img/ai.png",
      alt: "smartphone"
    },
    {
      title: "Social Media Marketing",
      link: "/services/social-media-marketing",
      icon: "img/Socia-Media-Marketing.png",
      alt: "smartphone"
    },
    {
      title: "IT Staff Augmentation",
      link: "/services/it-staff-augmentation",
      icon: "img/IT-Consulting.png",
      alt: "smartphone"
    },
    {
      title: "Web Development",
      link: "/services/web-development",
      icon: "img/mvp_icon.png",
      alt: "smartphone"
    },
    {
      title: "Mobile App Development",
      link: "/services/mobile-app",
      icon: "img/Mobile-App-Development.png",
      alt: "smartphone"
    },
    {
      title: "Product Development",
      link: "/services/product-development",
      icon: "img/Product-Development.png",
      alt: "smartphone"
    },
    {
      title: "M365 Development",
      link: "/services/m365-development",
      icon: "img/M365-Development.png",
      alt: "smartphone"
    },
    {
      title: "Offshore Development",
      link: "/services/offshore-development",
      icon: "img/offshop.png",
      alt: "smartphone"
    },
    {
      title: "Custom Software Development",
      link: "/services/customized-crm-development",
      icon: "img/Custom-Software-Development.png",
      alt: "smartphone"
    },
    {
      title: "MVP Development",
      link: "/services/mvp-development",
      icon: "img/MVP-Development.png",
      alt: "smartphone"
    },
    {
      title: "Digital Marketing",
      link: "/services/digital-marketing",
      icon: "img/Digital_Marketing.png",
      alt: "smartphone"
    },
    {
      title: "Application Support",
      link: "/services/application-support-maintenance",
      icon: "img/Application-Support.png",
      alt: "smartphone"
    }
  ];

  return (
    <section className="hm-core-secvice">
      <div className="container core-secvice-sec mt-0">
        <div className="text-center title_core">
          <h2 className="display-4">Our Core Services</h2>
          <p>HIRE A REMOTE EMPLOYEE FOR ANY ROLE!</p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-12 col-xxl-3">
              <div className="crumina-module crumina-info-box info-box--standard-hover">
                <div className="shape1">
                  <img src="img/intro-v1-shape1.png" alt="Decorative design element" loading="lazy" />
                </div>
                <div className="info-box-image">
                  <img className="utouch-icon" src={service.icon} alt={service.alt} service by TGays Technology />
                </div>
                <div className="info-box-content text-center">
                  <Link href={service.link} className="h5 info-box-title">{service.title}</Link>
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