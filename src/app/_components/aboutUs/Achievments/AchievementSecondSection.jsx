import React from 'react';
import Image from 'next/image';

const AchievementSecondSection = () => {
  return (
    <section className="our-achievement-second">
      <div className="container">
        <div className="row">
          {/* Left Column - Content */}
          <div className="col-md-12 col-lg-6">
            <div className="our-achived-title">
              <div className="crumina-module crumina-heading">
                <h2 className="heading-title">
                  Organized Vibrant Bihar-{' '}
                  <span className="c-primary">
                    Entrepreneurship Global Summit
                  </span>
                </h2>
              </div>
              <p>
                In co-ordination with a few more companies and Lets Inspire Bihar,
                TGAYS Technology have facilitated and helped in organizing an
                Entreperenueship Global Summit on 5th June 2022 at Hotel Maurya in
                Patna. The aim of organizing this Global Summit was to revolutionize
                industrialization, entrepreneurship eco-system and better skill
                development in Bihar. The Entrepreneurs from all over the world
                attended this event making it a grand success. More than 110 start-ups
                attended this event to try their luck and potential for investment by
                50+ angel investors.
              </p>
            </div>
          </div>

          {/* Right Column - Main Image */}
          <div className="col-md-12 col-lg-6">
            <div className="box-img">
              <figure>
                <Image
                  src="/img/jama-lib.jpg"
                  alt="Vibrant Bihar Entrepreneurship Summit"
                  width={600}
                  height={400}
                />
              </figure>
            </div>
          </div>

          {/* Bottom Row - Additional Images */}
          <div className="col-md-4 col-lg-4">
            <figure>
              <Image
                src="/img/lib-event-organizers.png"
                alt="Event organizers at Vibrant Bihar Summit"
                width={400}
                height={300}
              />
            </figure>
          </div>
          <div className="col-md-4 col-lg-4">
            <figure>
              <Image
                src="/img/jamal-speaker.jpg"
                alt="Jamal Ashraf speaking at the summit"
                width={400}
                height={300}
              />
            </figure>
          </div>
          <div className="col-md-4 col-lg-4">
            <figure>
              <Image
                src="/img/vikash-speaker.jpg"
                alt="Vikash Kumar speaking at the summit"
                width={400}
                height={300}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSecondSection;
