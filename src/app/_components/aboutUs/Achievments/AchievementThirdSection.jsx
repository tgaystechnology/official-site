import React from 'react';
import Image from 'next/image';

const AchievementThirdSection = () => {
  return (
    <section className="our-achievement-third">
      <div className="container">
        <div className="row">
          {/* Left Column - Content */}
          <div className="col-12 col-md-12 col-lg-6">
            <div className="our-achived-title">
              <div className="crumina-module crumina-heading">
                <h2 className="heading-title">
                  Collaboration with{' '}
                  <span className="c-primary">
                    KIAGTS LLC, A Dubai based Company
                  </span>
                </h2>
              </div>
              <p>
                Our company had a collaboration with Dubai based company KIAGTS LLC
                as their technology partner. Mr. Francis Wills, the managing partner
                of the Company from Dubai visited our office in Noida to have a
                discussion about this collaboration process and the memorandum of
                understanding (MOU).
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="col-12 col-md-12 col-lg-6">
            <div className="achieve-images-box">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="achievement_img-sec">
                    <Image
                      src="/img/kiagts1.jpg"
                      alt="KIAGTS LLC collaboration meeting"
                      width={400}
                      height={300}
                      className="group"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="achievement_img-sec">
                    <Image
                      src="/img/kiagts2.jpg"
                      alt="KIAGTS LLC partnership signing"
                      width={400}
                      height={300}
                      className="avode"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementThirdSection;
