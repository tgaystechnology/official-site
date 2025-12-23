'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const CustomCrmSection = () => {
  return (
    <section className="background-contain pt100 web-solution-section crm-services-area tailored-crm-solutions">
      <div className="container">
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">
                  Tailored CRM Solutions That Fit Your Workflow
                </h2>
              </div>
              <h6 className="slider-content-text">
                At TGAYS Technology, we craft CRM systems specifically tailored to your unique business goals and processes. Unlike generic platforms, our custom-built CRM empowers your team to work smarter, automate tasks, and build stronger customer relationships.
              </h6>
              <h6 className="slider-content-text">
                From lead tracking and sales pipeline management to customer support and analytics, our solutions are built to scale as your business grows. Whether you’re a startup or an enterprise, we’ll align your CRM with your vision and objectives.
              </h6>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image
                  src="/img/crm-image.png"
                  alt="Custom CRM Solutions"
                  width={600}
                  height={290}
                  className="img-responsive"
                  priority
                /> */}
                <Lottie
                  path="/lottie/Project Management.json"
                  loop
                  autoplay
                  className="w-[320px] h-[200px] md:w-[400px] md:h-[250px] lg:w-[600px] lg:h-[220px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCrmSection;
