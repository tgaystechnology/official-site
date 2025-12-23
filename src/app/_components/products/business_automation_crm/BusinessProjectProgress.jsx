'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";

const BusinessProjectProgress = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });       // 📱 Mobile
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 📲 Tablet
  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 }); // 💻 Laptop
  const isDesktop = useMediaQuery({ minWidth: 1440 });     // 🖥️ Large Desktop

  let width = 320;
  let height = 300;

  if (isMobile) {
    width = 320;
    height = 400;
  } else if (isTablet) {
    width = 300;
    height = 350;
  } else if (isLaptop) {
    width = 600;
    height = 650;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }
  return (
    <section className="background-contain pt100 web-solution-section ai-power-two-sec business-project-progress">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image
                  src="/img/Business-Automation-img.png"
                  alt="app-development"
                  width={600}  // Set to your image's actual width
                  height={400}  // Set to your image's actual height
                  className="w-full h-auto"
                /> */}
                <div className="lottie-container business-team-brainstorming-svg">
                    <Lottie
                      path="/lottie/Business team brainstorming and discussing startup project.json"
                      loop
                      autoplay
                      className="responsive-lottie"
                    />
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">
                  <span className="c-primary">See project</span> progress at a glance
                </h2>
              </div>
              <h6 className="slider-content-text">
                Our Business Automation CRM is more than just a contact list. It's a powerful, centralized platform designed to streamline your entire sales, marketing, and customer service workflow.
              </h6>
              <h6 className="slider-content-text">
                Stop wasting hours on manual data entry, follow-ups, and administrative tasks. We provide you with intelligent automation tools that capture leads, nurture them through your sales pipeline, and manage customer relationships effortlessly.
              </h6>
              <h6 className="slider-content-text">
                By automating your core processes, you reduce human error, ensure consistent follow-up, and empower your team with the data they need to make smarter, faster decisions. It's time to work smarter, not harder.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProjectProgress;