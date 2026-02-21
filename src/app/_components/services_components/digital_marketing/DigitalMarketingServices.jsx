'use client'
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from "react-responsive";
import Lottie from 'lottie-react';

const DigitalMarketingServices = () => {
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
    width = 400;
    height = 450;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }
  return (
    <section className="background-contain pt100 web-solution-section digital-second-area digital-mrk-success-sec digi-mark-ser"
    aria-labelledby="digital-services-overview-heading">
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 about-us-sec align-center">
            <div className="about-us-hedding">
              <h2 id="digital-services-overview-heading" className="heading-title">
                Introducing Our <span className="c-primary">Cutting-Edge Digital Marketing</span> Services - Unlock Your Online Success!
              </h2>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <p className="slider-content-text">
                Are you finding it hard to grow your online presence? We’re here to help! Our digital marketing services—SEO, SEM, and PPC—are designed to bring more visitors to your website and turn them into customers.
              </p>
              <p className="slider-content-text">
                With SEO, we make sure your website shows up higher on Google and other search engines. We do keyword research, write great content, and fix technical issues to improve your rankings and bring in more organic traffic.
              </p>
              <p className="slider-content-text">
                Our SEM service includes running paid ads on platforms like Google. We target the right people at the right time so that your ads bring real, valuable traffic to your website.
              </p>
              <p className="slider-content-text">
                Through PPC campaigns, you pay only when someone clicks on your ad. It’s a smart way to get fast results and track how your money is being spent.
              </p>
              <p className="slider-content-text">
                Don’t let your competitors take all the attention online. Let us help you grow with powerful digital marketing that works. Get in touch and let’s take your business to the next level!
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb" role="img" aria-label="Digital marketing strategy including SEO, SEM, PPC, and online growth analytics illustration">
                <Lottie
                  path="/lottie/Digital Marketing.json"
                  loop
                  autoplay
                  style={{
                    width,
                    height,
                    margin: "0 auto", // centers the animation
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;
