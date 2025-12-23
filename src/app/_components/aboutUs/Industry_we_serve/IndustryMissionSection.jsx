'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";


const IndustryMissionSection = () => {
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
    width = 600;
    height = 650;
  } else if (isLaptop) {
    width = 400;
    height = 450;
  } else if (isDesktop) {
    width = 450;
    height = 350;
  }
  return (
    <section className="medium-padding100 our-mission-box-sec serve-section">
      <div className="container">
        <div className="row">
          <div className="image-column col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <figure className="image-1">
                {/* <Image 
                  src="/img/shape-sec-img.png" 
                  alt="Digital transformation illustration"
                  width={500} // Set appropriate width
                  height={500} // Set appropriate height
                  layout="responsive" // or "intrinsic", "fixed", "fill" depending on your needs
                  quality={100}
                  priority={false}
                /> */}
                <Lottie
                  path='/lottie/coding.json'  // always prepends /lottie/
                  loop
                  autoplay
                  style={{
                    width: width,
                    height: height,
                    margin: "0 auto",
                  }}
                />
              </figure>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module crumina-heading">
              <h2 className="heading-title hire-heading">Innovate. Automate. Transform.</h2>
            </div>
            <p>
              At <strong>TGAYS Technology Pvt. Ltd.</strong>, we don't just develop software—we create customized digital 
              ecosystems that solve real business problems. Whether you're a startup ready to scale or an 
              enterprise looking to innovate, we deliver smart, efficient, and user-friendly solutions 
              tailored to your industry.
            </p>
            <p>
              Our core focus lies in building AI-driven automation systems, intuitive mobile and web 
              applications, and scalable CRMs that make operations smoother and more intelligent. 
              From retail to healthcare, our technology adapts to your needs—so you can focus on 
              what you do best.
            </p>
            <p>
              We believe that great technology should feel simple, be secure, and create impact. 
              And that's exactly what we deliver—across every industry we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryMissionSection;