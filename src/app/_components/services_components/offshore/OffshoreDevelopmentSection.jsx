'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const OffshoreDevelopmentSection = () => {
  return (
    <section className="background-contain pt100 web-solution-section">
      <div className="container">
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">
                  Scaling Success Through <span className="c-primary">Offshore Expertise</span>
                </h2>
              </div>
              <h6 className="slider-content-text">
                Offshore development is a smart, strategic approach that allows businesses to delegate their software development needs to expert teams in other countries. At TGaysTechnology, we specialize in providing offshore development solutions that combine technical excellence, agile execution, and cost efficiency.
              </h6>
              <h6 className="slider-content-text">
                Whether you're a startup looking to launch faster, or an enterprise aiming to scale without overextending budgets, our offshore services help you stay ahead of the competition. We offer dedicated resources, round-the-clock productivity, and full transparency — all while maintaining strict quality and security standards.
              </h6>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image 
                  src="/img/Offshore-work-image.png" 
                  alt="Offshore Development Illustration"
                  width={300}
                  height={200}
                  className="img-responsive"
                /> */}
                <div className="lottie-container strategy-execution-diagram-svg">
                    <Lottie
                      path="/lottie/Strategy Execution diagram.json"
                      loop
                      autoplay
                      className="responsive-lottie"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffshoreDevelopmentSection;