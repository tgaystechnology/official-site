import React from 'react';

const WorkshopCourses = () => {
  return (
    <section className="workshop-course-one">
      <div className="container">
        <div className="row clearfix">
          {/* Title Column */}
          <div className="workshop-course_title-column col-lg-5 col-md-12 col-sm-12">
            <div className="workshop-course_title-outer">
              {/* Section Title */}
              <div className="sec-title title-anim">
                <div>
                  <h2 className="sec-title_heading">What You'll Learn</h2>
                </div>
              </div>
              <div className="workshop-course_image overlay-anim img-reveal">
                <img src="/img/about-22.jpg" alt="Workshop Learning Overview" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="workshop-course_content-column col-lg-7 col-md-12 col-sm-12">
            <div className="workshop-course_content-outer">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="workshop-course_image overlay-anim img-reveal">
                    <img src="/img/about-299.jpg" alt="Workshop Topic Visual 1" />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="workshop-course_image overlay-anim img-reveal">
                    <img src="/img/about-39.jpg" alt="Workshop Topic Visual 2" />
                  </div>
                </div>
              </div>

              <div className="content">
                <p>
                  Our workshop curriculum is meticulously crafted by industry
                  veterans to cover the most in-demand technologies. We focus on
                  building a strong foundation while also exploring advanced
                  topics.
                </p>
                <p>
                  From front-end frameworks and mobile app development to the
                  complexities of AI and machine learning, our sessions are
                  designed to be relevant, challenging, and incredibly
                  rewarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopCourses;
