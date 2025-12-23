'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const OurMission = () => {
  return (
    <section className="medium-padding100 our-mission-box-sec">
      <div className="container">
        <div className="row">
          {/* Left Column - Images */}
          <div className="image-column col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <div className="inner-column">
              <figure className="image-1">
                {/* <Image 
                  src="/img/our-mission-1.jpg" 
                  alt="Our Mission Illustration"
                  width={400}
                  height={500}
                  className="mission-image"
                /> */}
                <Lottie
                  path="/lottie/Business Goal _ Target illustration.json" // Direct path from public folder
                  loop
                  autoplay
                  style={{ width: 400, height: 'auto' }}
                />
              </figure>
              <figure className="image-2">
                {/* <Image 
                  src="/img/our-mission-2.jpg" 
                  alt="Our Team Working"
                  width={400}
                  height={300}
                  className="mission-image"
                /> */}
              </figure>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module crumina-heading">
              <h2 className="heading-title hire-heading">Mission</h2>
            </div>
            <p>
              Our mission is to create innovative and user-friendly web and mobile applications 
              that meet the needs and exceed the expectations of our clients. We strive to be a 
              leader in the industry, leveraging the latest technologies and tools to deliver 
              exceptional products and services.
            </p>
            <p>
              We are committed to building long-term relationships with our clients, based on trust, 
              transparency, and mutual respect. We listen to their feedback and work collaboratively 
              to ensure that their vision is realized in every aspect of the project. Our team of 
              talented and experienced developers, designers, and project managers are dedicated to 
              delivering high-quality solutions that help our clients achieve their business objectives.
            </p>
            
            <div className="crumina-module crumina-heading">
              <h2 className="heading-title hire-heading">Vision</h2>
            </div>
            <p>
              Our vision is to revolutionize the way people interact with technology. Through innovative 
              software solutions, we strive to enhance the lives of individuals and businesses around the 
              world, empowering them to achieve their goals and aspirations. We aim to be the leading 
              provider of cutting-edge software solutions that enable our customers to thrive in a rapidly 
              changing technological landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;