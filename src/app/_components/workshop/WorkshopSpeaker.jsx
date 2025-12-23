import React from 'react';

const WorkshopSpeaker = () => {
  return (
    <section
      className="workshop-speaker bg-cover hero-section"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="speaker-text">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="speaker-detail">
                <h3>About Workshop</h3>
                <p>
                  Our workshops are structured to provide a comprehensive
                  learning journey. We begin with foundational concepts and
                  quickly move into practical, hands-on exercises that simulate
                  real-world development challenges.
                </p>

                <p>
                  Participants collaborate in teams, tackle complex problems,
                  and build tangible projects from start to finish. This
                  immersive approach ensures that every student leaves with not
                  only new knowledge but also the confidence to apply it.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <img src="/img/workshop-imgsec.png" alt="Workshop Session" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSpeaker;
