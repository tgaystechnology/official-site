import React from 'react';
import Image from 'next/image';

const AchievementSectionFirst = () => {
  return (
    <section className="our-achievement-first">
      <div className="container">
        <div className="achiv-box">
          <div className="row">
            {/* Left Column - Images */}
            <div className="col-12 col-md-12 col-lg-6">
              <div className="achieve-images-box">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="achievement_img-sec">
                      <Image
                        src="/img/gnsu3.jpg"
                        alt="GNS University Summit event"
                        width={400}
                        height={300}
                        className="group"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="achievement_img-sec">
                      <Image
                        src="/img/gnsu4.jpeg"
                        alt="GNS University Summit attendees"
                        width={400}
                        height={300}
                        className="avode"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-12">
                    <Image
                      src="/img/gnsu5.jpeg"
                      alt="GNS University Summit group photo"
                      width={800}
                      height={400}
                      className="gnsu5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="col-12 col-md-12 col-lg-6">
              <div className="crumina-module crumina-heading">
                <h2 className="heading-title">
                  Invited as a Chief Guest{' '}
                  <span className="c-primary">
                    in the Startup Summit 2022 organized by Gopal Narayan Singh University, Rohtas.
                  </span>
                </h2>
                <p>
                  Mr. Jamal Ashraf, Managing Director and Mr. Vikash Kumar, Chief Technical Officer of TGAYS Technology were one of the chief guests invited in the Start Up Summit organized by Gopal Narayan Singh University, Rohtas in the December month. Mr. Ashraf had a discussion with the University Director, Dean and students about how the Universities are adapting towards preparing their students for Entrepreneurship. Mr. Ashraf and Mr. Kumar also met Mr. Ravi Ranjan, Business Ex-Advisor, Shark Tank India and had an interaction on encouraging Start-up ecosystem in the state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSectionFirst;
