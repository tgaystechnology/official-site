'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";


const MvpDevelopmentSection = () => {
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
    height = 350;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }
  return (
    <section className="background-contain pt100 web-solution-section wvp-dev-sec">
      <div className="container">
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">
                  MVP <span className="c-primary">Development</span>
                </h2>
              </div>
              <h6 className="slider-content-text">
                Minimum Viable Product (MVP) development is a strategic way to validate your product idea with minimal investment and faster time-to-market. It focuses on building only the core features that solve the main problem for your target audience—helping you gain real user feedback early and iterate quickly.
              </h6>
              <h6 className="slider-content-text">
                As a leading <Link href="https://www.tgaystechnology.com" style={{ color: "#0083FF", background: "transparent", textDecoration: "none" }}>MVP development company in India</Link>, TGAYS Technology specializes in delivering custom MVP solutions tailored to your business goals. Whether you’re a startup exploring a new market or an enterprise testing product innovation, our team ensures your MVP is scalable, secure, and designed for measurable impact. Let’s transform your idea into a working product that attracts users and investors.
              </h6>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image 
                  src="/img/mvp-second-sec.png" 
                  alt="MVP Development Process"
                  width={600}
                  height={450}
                  className="img-responsive"
                  priority
                /> */}
                <Lottie
                  path="/lottie/Web Development_rocket.json"
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

export default MvpDevelopmentSection;
