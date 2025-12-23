import React from 'react';

const WorkshopAboutUs = () => {
  return (
    <section className="home-aboutus">
      <div className="container">
        <div className="home-aboutus-inner">
          <div className="about-gallary">
            <figure className="figure-round-border">
              <img src="/img/eventum-img33.jpg" alt="Workshop Image 1" />
            </figure>
            <figure className="figure-round-border">
              <img src="/img/eventum-img35.jpg" alt="Workshop Image 2" />
            </figure>
            <figure className="figure-round-border">
              <img src="/img/eventum-img34.jpg" alt="Workshop Image 3" />
            </figure>
          </div>

          <div className="home-about-right">
            <div className="about-content">
              <figure className="about-top-right-img figure-round-border">
                <img src="/img/eventum-img36.jpg" alt="About Top Right" />
              </figure>
              <div className="section-head">
                <span className="section-sub-title">Introduction</span>
                <h3 className="section-title">About Us</h3>
                <p className="section-paragraph">
                  At TGAYS Technology, we believe in the power of practical
                  education. Our workshops are intensive, hands-on experiences
                  designed to bridge the gap between academic theory and
                  real-world application.
                </p>
              </div>
            </div>

            <div className="about-detail">
              <figure className="about-bottom-right-img figure-round-border">
                <img src="/img/eventum-img37.jpg" alt="About Bottom Right" />
              </figure>
              <div className="about-detail-inner">
                <div className="about-list">
                  <ul>
                    <li>
                      <i aria-hidden="true" className="icon icon-checkmark-circle"></i>
                      <span>
                        Gain practical skills through interactive,
                        project-based learning.
                      </span>
                    </li>
                    <li>
                      <i aria-hidden="true" className="icon icon-checkmark-circle"></i>
                      <span>
                        Learn directly from industry experts with years of
                        experience in the field.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="author-content">
                  <div className="author-detail">
                    <h6 className="author-name">Jamal Ashraf</h6>
                    <span className="author-prof">Chairman & Director</span>
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

export default WorkshopAboutUs;
