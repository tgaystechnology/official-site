'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const WorldOfItSolutions = () => {
  return (
    <section className="background-contain pt100 web-solution-section world-it-staff">
      <div className="container">
        <div className="row">
          {/* Text Content */}
          <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">A World of IT Solutions</h2>
              </div>
              <h6 className="slider-content-text">
                In today's fast-paced digital world, accessing the right talent at the right time
                can make or break your project. Our IT Staff Augmentation services bridge the talent
                gap with certified, experienced professionals who integrate seamlessly into your
                team—delivering measurable results.
              </h6>
              <h6 className="slider-content-text">
                From scaling your engineering team to bringing in niche skills like DevOps, AI, or
                mobile development, we help you accelerate timelines, improve productivity, and
                reduce overhead—all without compromising on quality or control.
              </h6>
            </div>
          </div>

          {/* Image Content */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image
                  src="/img/Home-3-Filler-img-1.png"
                  alt="app-developmen"
                  width={300}
                  height={300}
                  style={{ height: 'auto', width: '100%' }}
                /> */}
                <Lottie
                  path="/lottie/Information Technology.json"
                  loop
                  autoplay
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldOfItSolutions;