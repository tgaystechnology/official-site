'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const SocialMediaMarketingSectionOne = () => {
  return (
    <section className="background-contain pt100 web-solution-section social-md-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image 
                  src="/img/-Social Media-ero_image.png" 
                  alt="app-developmen"
                  width={600}
                  height={400}
                  className="img-responsive"
                /> */}
                <Lottie
                  path="/lottie/Social Media Customers.json"
                  loop
                  autoplay
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">
                  Results-Driven<span className="c-primary"> Social Media Marketing</span>
                </h2>
              </div>
              <h6 className="slider-content-text">
                At <strong>TGAYS Technology Pvt. Ltd.</strong>, we turn social media into a powerful growth tool. Whether you're a startup or an established business, we help you cut through the noise and get noticed.
              </h6>
              <h6 className="slider-content-text">
                From eye-catching posts and story campaigns to influencer collaborations and paid ads—we handle it all. Our team crafts tailored strategies backed by data, creativity, and market insight to deliver the results your business deserves.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaMarketingSectionOne;