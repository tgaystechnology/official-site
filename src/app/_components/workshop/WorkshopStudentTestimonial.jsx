import React from 'react';

const WorkshopStudentTestimonial = () => {
  return (
    <section className="about-workshop-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-head">
              <h3 className="section-title">Students Testimonials</h3>
            </div>
          </div>
        </div>

        <div className="about-workshop-img">
          <figure className="about-workshop-left-img">
            <img src="/img/eventum-img9.jpg" alt="Student Workshop Video Preview" />
            <div className="video-button">
              <a id="video-container" data-video-id="IUN664s7N-c">
                <i className="fas fa-play"></i>
              </a>
            </div>
          </figure>

          <figure className="about-workshop-right-img">
            <img src="/img/eventum-img8.jpg" alt="Students at Workshop" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WorkshopStudentTestimonial;
