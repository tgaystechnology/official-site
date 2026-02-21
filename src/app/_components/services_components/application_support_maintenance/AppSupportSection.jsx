'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';import { useMediaQuery } from "react-responsive";

const AppSupportSection = () => {
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
    width = 300;
    height = 450;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }
  return (
    <section className="background-contain pt100 web-solution-section e-to-e-application-care-sec" aria-labelledby="end-to-end-application-care-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 about-us-sec e-to-e-application-care-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 id="end-to-end-application-care-heading" className="heading-title">End-to-End Application Care That Grows With You</h2>
              </div>
              <p className="slider-content-text">
                Our Application Support & Maintenance services are designed to empower your business with round-the-clock stability, rapid issue resolution, and performance optimization. We don't just fix bugs — we proactively prevent them, ensuring your apps evolve with changing technologies and user expectations.
              </p>
              <p className="slider-content-text">
                From legacy systems to modern cloud-based applications, our team ensures high availability, continuous monitoring, timely upgrades, and seamless user experiences. Whether it's reducing downtime, enhancing functionality, or scaling securely — we help you stay agile, competitive, and digitally resilient.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb" role="img"
              aria-label="Enterprise application monitoring, maintenance, and performance optimization illustration">
                
                <Lottie
                  path="/lottie/Mobile Apps Features.json"
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

export default AppSupportSection;