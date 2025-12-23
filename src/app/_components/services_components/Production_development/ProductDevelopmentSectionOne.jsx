'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";

const ProductDevelopmentSectionOne = () => {
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
    height = 550;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }
  return (
    <section className="background-contain pt100 web-solution-section product-secont-sec">
      <div className="container">
        <div className="row">
          {/* Image Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image 
                  src="/img/dev-product-image.png" 
                  alt="Product Development"
                  width={600}
                  height={400}
                  className="img-responsive"
                /> */}

                <div className="lottie-container product-dev-svg">
                    <Lottie
                      path="/lottie/Software Development.json"
                      loop
                      autoplay
                      className="responsive-lottie"
                    />
                  </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">Product <span className="c-primary">Development</span></h2>
              </div>
              <h6 className="slider-content-text">
                At TGAYS Technology, we specialize in turning ambitious ideas into powerful digital products. 
                Whether you're a startup aiming to disrupt the market or an enterprise seeking efficiency, 
                our custom product development services ensure agility, scalability, and performance. 
                We blend creativity with cutting-edge technology to build solutions that solve real problems and drive growth.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentSectionOne;