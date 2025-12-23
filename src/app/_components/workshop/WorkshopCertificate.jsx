import React from 'react';

const WorkshopCertificate = () => {
  return (
    <section
      className="certificate-two"
      style={{
        backgroundImage: 'url(/assets/images/background/about-shadow.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="row clearfix">
          {/* Title Column */}
          <div className="certificate-two_title-column col-lg-4 col-md-12 col-sm-12">
            <div className="certificate-two_title-outer">
              <div className="certificate-two_image overlay-anim img-reveal">
                <img src="/img/certificate-pro.jpg" alt="Workshop Instructor" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="certificate-two_content-column col-lg-8 col-md-12 col-sm-12">
            <div className="certificate-two_content-outer">
              {/* Section Title */}
              <div className="sec-title title-anim">
                <div>
                  <h2 className="sec-title_heading">
                    Certificate of Completion – Python & Artificial Intelligence Workshop.
                  </h2>
                </div>
              </div>

              <div className="row clearfix">
                <div className="column col-lg-5 col-md-6 col-sm-12">
                  <div className="certificate-two_image overlay-anim img-reveal">
                    <img
                      src="/img/certificate.jpg"
                      alt="Python AI Workshop Certificate"
                    />
                  </div>
                </div>

                <div className="column col-lg-7 col-md-6 col-sm-12">
                  <div className="certificate-two_text">
                    This certificate is awarded for successfully completing the
                    Python and Artificial Intelligence Workshop, demonstrating
                    essential knowledge, practical skills, and hands-on project
                    experience.
                  </div>
                  <ul className="certificate-one_list">
                    <li>Practical Learning</li>
                    <li>Programming</li>
                    <li>Next-Generation Skills</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopCertificate;
