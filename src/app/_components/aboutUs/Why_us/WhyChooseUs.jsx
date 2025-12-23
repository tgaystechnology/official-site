import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "We listen to you carefully.",
      description: "We listen to our customers' requirements very carefully to understand their business needs better and offer solutions that fulfill those needs."
    },
    {
      title: "We have a strong portfolio to check.",
      description: "We are open to sharing our work samples and past client experiences."
    },
    {
      title: "Clear Timeline and Roadmap.",
      description: "We provide a clear timeline(development time, testing time and time to go live) and a competitive budget with a roadmap to finish the project in phases."
    },
    {
      title: "Skilled and experienced Developers and Managers.",
      description: "We have good project management ability, experienced and efficient developers and a fast turnaround time in responses."
    },
    {
      title: "Open to multi-channel communication.",
      description: "We are available for multi-channel communication such as Phone, WhatsApp, Botim, Skype, Zoom and Hangout."
    },
    {
      title: "Assign a Dedicated Manager.",
      description: "We assign a manager to hear your feedback and concerns and provide consistent maintenance and support after the completion of the project."
    }
  ];

  return (
    <section className="tech-management-area-6 p-relative pt-100 pb-35 why-technology-best">
      {/* Background Image - Hidden on mobile */}
      
        <Image 
          src="/img/management-bg-6.png" 
          alt="Decorative background pattern"
          width={1200}
          height={800}
          className="tech-management-bg-6 d-none d-lg-block"
        />
      
      
      <div className="container">
        <div className="row">
          {/* Left Column - Benefits List */}
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-flex order-2 order-lg-0">
            <div className="tech-management-wrap-6">
              <div className="tech-section mb-35">
                <span className="tech-section-subtitle">Why TGAYS Technology?</span>
                <h2 className="tech-section-title mb-15 tech-section-title-white">
                  Let Everyone Know Why We are the Best!
                </h2>
              </div>
              
              <div className="tech-management-content mb-50">
                <ul>
                  {benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="tech-management-content-icon">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <div className="tech-management-content-info">
                        <h5>{benefit.title}</h5>
                        <p>{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Image with decorative elements */}
          <div className="col-xxl-6 col-xl-7 col-lg-6">
            <div className="tech-management-img-6 mb-50">
              {/* Main Image */}
              <Image
                src="/img/management-6.png"
                alt="TGAYS Technology team working"
                width={600}
                height={500}
                className="tech-management-main-img img-w-100"
              />
              
              {/* Decorative Icons */}
              <div className="tech-management-head-icon-6">
                <Image 
                  src="/img/headphones-icon-2.png" 
                  alt="Customer support icon"
                  width={50}
                  height={50}
                />
              </div>
              
              <div className="tech-management-img-icon-6">
                <Image 
                  src="/img/press-icon-6.png" 
                  alt="Media coverage icon"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;