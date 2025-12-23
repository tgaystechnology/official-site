import React from 'react';
import Image from 'next/image';

const AchievementFourthSection = () => {
  return (
    <section className="our-achievement-fourth">
      <div className="container">
        <div className="our-achiv-second-section">
          {/* Title Row */}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
              <div className="our-achived-title">
                <div className="crumina-module crumina-heading">
                  <h2 className="heading-title">
                    Bidraves Success{' '}
                    <span className="c-primary">
                      Celebration at Los Angeles
                    </span>
                  </h2>
                </div>
                <p>
                  Bidraves was one of the successful marketplace B2B business. The
                  entire operation was managed successfully by mobile application
                  developed by our Company. The pictures below depict the celebration
                  of the Bidraves success at a hotel in Los Angeles in California
                  State, USA.
                </p>
              </div>
            </div>
          </div>

          {/* Images Row */}
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 col-xxl-4">
              <figure>
                <Image
                  src="/img/bidr.jpg"
                  alt="Bidraves celebration event in Los Angeles"
                  width={400}
                  height={300}
                />
              </figure>
            </div>
            <div className="col-lg-8 col-md-8 col-12 col-xxl-8">
              <figure>
                <Image
                  src="/img/bidraves1.jpeg"
                  alt="Bidraves team celebrating success in Los Angeles"
                  width={800}
                  height={400}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementFourthSection;
