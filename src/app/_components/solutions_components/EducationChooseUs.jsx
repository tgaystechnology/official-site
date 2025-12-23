'use client';
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";

const EducationChooseUs = ({
  heading,
  highlighted,
  subHeading,
  description,
  image,
  features
}) => {
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
    width = 500;
    height = 550;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }
  return (
    <div className="education-choose-us why-education-choose-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 js-tilt md-mb-40">
            <div className="img-part">
              {/* <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="img-fluid"
              /> */}
              <div className="lottie-container left-section-svg">
                <Lottie
                  path={`/lottie/${image.src}`}  // always prepends /lottie/
                  loop
                  autoplay
                  className='responsive-lottie'
                 />
              </div>
            </div>
          </div>
          <div className="col-lg-6 pl-60 md-pl-15">
            <div className="crumina-module crumina-heading">
              <h2 className="heading-title">
                {heading} <span className="c-primary">{highlighted}</span> {subHeading}
              </h2>
              <p>{description}</p>
            </div>

            {features.map((feature, index) => (
              <div className={`services-part ${index < features.length - 1 ? 'mb-20' : ''}`} key={index}>
                <div className="services-icon">
                  <i className={feature.icon}></i>
                </div>
                <div className="services-text">
                  <h2 className="title">{feature.title}</h2>
                  <p className="services-txt">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationChooseUs;
