import React from 'react';

const WorkshopGallery = () => {
  return (
    <section className="workshop-gallery">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-head">
              <span className="section-sub-title">Workshop Gallery</span>
              <h3 className="section-title">Highlights From Our Workshops</h3>
              <p className="section-paragraph">
                See our students and mentors in action. Explore moments of
                collaboration, innovation, and learning from our recent tech
                workshops.
              </p>
            </div>
          </div>
        </div>

        <div className="gallery-container">
          {/* First Row */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="first-tag">
                <figure className="masonry-item gallery-card">
                  <img
                    loading="lazy"
                    src="/img/eventum-img17.jpg"
                    alt="Workshop gallery image 1"
                  />
                </figure>

                <figure className="masonry-item gallery-card">
                  <img
                    loading="lazy"
                    src="/img/eventum-img019.jpg"
                    alt="Workshop gallery image 2"
                  />
                </figure>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="second-tag">
                <figure className="masonry-item gallery-card">
                  <img
                    loading="lazy"
                    src="/img/eventum-img23.jpg"
                    alt="Workshop gallery image 3"
                  />
                </figure>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="third-tag">
                <div className="row">
                  <div className="col-12">
                    <figure className="masonry-item gallery-card">
                      <img
                        loading="lazy"
                        src="/img/eventum-img20.jpg"
                        alt="Workshop gallery image 4"
                      />
                    </figure>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <figure className="masonry-item gallery-card">
                      <img
                        loading="lazy"
                        src="/img/eventum-img24.jpg"
                        alt="Workshop gallery image 5"
                      />
                    </figure>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <figure className="masonry-item gallery-card">
                      <img
                        loading="lazy"
                        src="/img/eventum-img21.jpg"
                        alt="Workshop gallery image 6"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="first-tag">
                <figure className="masonry-item gallery-card">
                  <img
                    loading="lazy"
                    src="/img/eventum-img22.jpg"
                    alt="Workshop gallery image 7"
                  />
                </figure>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-3 col-lg-3">
              <div className="second-tag">
                <figure className="masonry-item gallery-card">
                  <img
                    loading="lazy"
                    src="/img/eventum-img18.jpg"
                    alt="Workshop gallery image 8"
                  />
                </figure>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="second-tag">
                <figure className="masonry-item gallery-card">
                  <img
                    loading="lazy"
                    src="/img/eventum-img99.jpg"
                    alt="Workshop gallery image 9"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopGallery;
