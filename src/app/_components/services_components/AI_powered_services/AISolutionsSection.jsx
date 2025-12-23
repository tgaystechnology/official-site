'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const AISolutionsSection = () => {
  return (
    <section className="background-contain pt100 web-solution-section ai-power-two-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">
                  <span className="c-primary">AI</span> Solutions That Drive Innovation
                </h2>
              </div>
              <h6 className="slider-content-text">
                At TGAYS Technology Pvt. Ltd., we harness the full potential of Artificial Intelligence to help businesses innovate, scale, and thrive. Whether you're looking to automate routine tasks, enhance customer experiences, or gain deeper insights through data — our AI solutions are designed to fit your unique business needs.
              </h6>
              <h6 className="slider-content-text">
                From intelligent chatbots and AI agents to RAG systems, predictive analytics, and workflow automation — we deliver smart, scalable tools that drive measurable impact. Every solution we build is focused on solving real-world problems and unlocking new growth opportunities. <strong>Partner with us and take the first step towards a more intelligent, efficient future.</strong>
              </h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image 
                  src="/img/ai-about-us-image.jpg" 
                  alt="app-developmen" 
                  width={600} 
                  height={400}
                  className="img-responsive"
                /> */}
                <Lottie
                  path="/lottie/Robot Futuristic Ai animated.json"
                  loop
                  autoplay
                  className="w-[300px] h-[200px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;