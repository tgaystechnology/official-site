import React from 'react';
import Image from 'next/image';

const AppSolutions = () => {
  // Mobile app services data
  const leftServices = [
    {
      id: 1,
      icon: "/img/consulting.png",
      alt: "Consulting",
      title: "Consulting & Strategy",
      description: "Before a single line of code is written, we dive deep into your vision. Our experts work with you to define your app's goals, identify your target audience, and create a strategic roadmap for success. We ensure your app is not just functional, but market-ready."
    },
    {
      id: 2,
      icon: "/img/custom-appdevelopment.png",
      alt: "Custom App Development",
      title: "UI/UX Design",
      description: "We craft stunning, intuitive user interfaces (UI) and seamless user experiences (UX) that captivate your audience. Our design process focuses on creating an engaging journey for your users, ensuring high retention and satisfaction."
    },
    {
      id: 3,
      icon: "/img/UI_UX-design.png",
      alt: "UI/UX Design",
      title: "Custom App Development",
      description: "Our core strength lies in building bespoke mobile applications from the ground up. Whether you need an iOS, Android, or cross-platform app, our developers use clean code and scalable architecture to bring your unique vision to life."
    },
    {
      id: 4,
      icon: "/img/back-end-development.png",
      alt: "Back-end Development",
      title: "Back-end Development",
      description: "A great app needs a powerful engine. We build robust, secure, and scalable back-end systems, databases, and server logic to ensure your application performs flawlessly under any load and handles data with absolute integrity."
    },
  ];

  const rightServices = [
    {
      id: 5,
      icon: "/img/API-development-integration.png",
      alt: "API Development/Integration",
      title: "API Development/Integration",
      description: "We seamlessly connect your app to third-party services, payment gateways, social media platforms, and other essential tools. Our custom API development ensures smooth data flow and expands your app's functionality."
    },
    {
      id: 6,
      icon: "/img/testing-quality-assurance.png",
      alt: "Testing & Quality Assurance",
      title: "Testing & Quality Assurance",
      description: "We are obsessed with quality. Our dedicated QA team conducts rigorous manual and automated testing across multiple devices to identify and eliminate bugs, ensuring your app is reliable, secure, and ready for a five-star rating."
    },
    {
      id: 7,
      icon: "/img/maintenance-support.png",
      alt: "Maintenance & Support",
      title: "Maintenance & Support",
      description: [
        "Our partnership doesn’t end at launch. We provide ongoing maintenance and support to keep your app updated with the latest OS versions, fix any issues, and implement new features to ensure its long-term success."
      ]
    },
    {
      id: 8,
      icon: "/img/deployment.png",
      alt: "Deployment",
      title: "Deployment",
      description: "We handle the entire submission process for the Apple App Store and Google Play Store. Our team ensures your app meets all guidelines for a smooth and successful launch, getting it into the hands of your users."
    }
  ];

  return (
    <>
      <div className="container our_mobile_app_sol_section">
        <div className="crumina-module crumina-heading">
          <h2 className="heading-title">OUR <span className="c-primary">MOBILE APP</span> SOLUTIONS</h2>
        </div>
      </div>
      
      <section className="bg-9 background-contain medium-padding220 mobile_app_item_section">
        <div className="container">
          <div className="row">
            <div className="display-flex info-boxes">
              {/* Left Services Column */}
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                {leftServices.map(service => (
                  <div key={service.id} className="crumina-module crumina-info-box info-box--standard-round icon-right negative-margin-right150">
                    <div className="info-box-image">
                      <Image 
                        src={service.icon} 
                        alt={service.alt} 
                        width={60} 
                        height={60}
                        className="utouch-icon"
                      />
                    </div>
                    <div className="info-box-content">
                      <h5 className="info-box-title">{service.title}</h5>
                      <p className="info-box-text" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Image Column */}
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 align-center">
                {/* Optional: Add your center image here if needed */}
              </div>

              {/* Right Services Column */}
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                {rightServices.map(service => (
                  <div key={service.id} className="crumina-module crumina-info-box info-box--standard-round negative-margin-left150">
                    <div className="info-box-image">
                      <Image 
                        src={service.icon} 
                        alt={service.alt} 
                        width={60} 
                        height={60}
                        className="utouch-icon"
                      />
                    </div>
                    <div className="info-box-content">
                      <h5 className="info-box-title">{service.title}</h5>
                      {Array.isArray(service.description) ? (
                        service.description.map((item, index) => (
                          <p key={index} className="info-box-text" dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))
                      ) : (
                        <p className="info-box-text" dangerouslySetInnerHTML={{ __html: service.description }}></p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppSolutions;