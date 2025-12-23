'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from "lottie-react";

const OurApproachProcess = () => {
  return (
    <section className="our-approach-section">
      <div className="container pb-70">
        <div className="crumina-module crumina-heading align-center">
          <h2 className="heading-title">Our Approach & Process</h2>
        </div>
        <div className="ns-custom-inner">
          <div className="ns-custom-content">
            <div className="ns-custom-content-top">
              <h4 className="ns-custom-content-title">Our Collaborative Path to Digital Excellence</h4>
              <p>We believe a successful product is born from a transparent and collaborative partnership. Our structured yet flexible process ensures your vision is perfectly translated into a high-impact digital solution that delivers tangible results and maximizes your ROI.</p>
            </div>
            <div className="ns-custom-content-bottom">
              <ul>
                <li>
                  <span className="ns-custom-content-bottom-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <div className="ns-custom-content-bottom-info">
                    <h5>1. Discovery & Design</h5>
                    <p>We begin by diving deep into your business goals, market, and user needs. This phase involves strategic planning, wireframing, and creating intuitive UI/UX designs that form the blueprint for success.</p>
                  </div>
                </li>
                <li>
                  <span className="ns-custom-content-bottom-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <div className="ns-custom-content-bottom-info">
                    <h5>2. Agile Development & Testing</h5>
                    <p>Our expert developers bring the designs to life using agile methodologies for speed and precision. Rigorous quality assurance is integrated at every stage to ensure a robust, secure, and bug-free solution.</p>
                  </div>
                </li>
                <li>
                  <span className="ns-custom-content-bottom-icon">
                    <ion-icon name="checkmark-outline"></ion-icon>
                  </span>
                  <div className="ns-custom-content-bottom-info">
                    <h5>3. Launch & Continuous Growth</h5>
                    <p>We handle a seamless deployment to get your product to market. Post-launch, we provide ongoing support and data-driven insights to help you scale, adapt, and achieve long-term growth.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="ns-custom-img">
            <div className="lottie-container business-team-svg">
              <Lottie
                path="/lottie/Business team.json"
                loop
                autoplay
                className="responsive-lottie"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproachProcess;