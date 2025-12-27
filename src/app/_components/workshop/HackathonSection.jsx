'use client'
import React, { useState } from 'react';
import styles from './HackathonSection.module.css';

const HackathonSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className={styles['heckathon-section']}>
        <div className={styles['container']}>
          
          {/* Header Section */}
          <div className={styles['section-head']}>
            <span className={styles['section-sub-title']}>Career Clarity Session</span>
            <h3 className={styles['section-title']}>
              Guiding Students Toward the Right Future
            </h3>
            <p className={styles['section-paragraph']}>
              We recently organized an impactful Career Clarity Session, dedicating to helping students gain clear direction, confidence, and a practical understanding of today’s evolving career landscape.
            </p>
          </div>

          {/* Intro Text */}
          <div className={styles['intro-text']}>
            <p>
              Students from <strong>Galgotias University (Greater Noida)</strong>, <strong>Vellore Institute of Technology (Tamil Nadu)</strong>, and <strong>IIHS Ghaziabad</strong> enthusiastically attended the session, making it highly interactive and insightful.
            </p>
          </div>

          {/* Speakers Section */}
          <h4 className={styles['sub-section-title']}>Esteemed Guest Speakers</h4>
          <div className={styles['speakers-grid']}>
            {/* Speaker 1 */}
            <div className={styles['speaker-card']}>
              <div className={styles['speaker-name']}>Ashish Ranjan</div>
              <span className={styles['speaker-role']}>Ex-Infosys, Capgemini Belgium</span>
              <p className={styles['speaker-bio']}>
                With over 18 years of experience in the software industry. He shared real-world insights on industry expectations and global career opportunities.
              </p>
            </div>

            {/* Speaker 2 */}
            <div className={styles['speaker-card']}>
              <div className={styles['speaker-name']}>Rahul Kumar</div>
              <span className={styles['speaker-role']}>Fidelity, Wipro, TCS</span>
              <p className={styles['speaker-bio']}>
                Bringing 15+ years of industry experience. He provided guidance on career transitions, skill-building, and long-term growth strategies.
              </p>
            </div>
          </div>

          {/* Key Highlights Section */}
          <h4 className={styles['sub-section-title']}>Key Highlights</h4>
          <div className={styles['highlights-grid']}>
            <div className={styles['highlight-card']}>
              <div className={styles['highlight-title']}>
                <i className="fas fa-map-signs" style={{color: '#0d6efd'}}></i> Career Roadmap
              </div>
              <p className={styles['highlight-desc']}>
                Students received structured and practical career roadmaps, helping them understand different career paths, required skills, and future opportunities.
              </p>
            </div>

            <div className={styles['highlight-card']}>
              <div className={styles['highlight-title']}>
                <i className="fas fa-comments" style={{color: '#0d6efd'}}></i> Interactive Q&A
              </div>
              <p className={styles['highlight-desc']}>
                An open discussion forum allowed students to ask questions related to careers, skills, higher education, and industry challenges.
              </p>
            </div>

            <div className={styles['highlight-card']}>
              <div className={styles['highlight-title']}>
                <i className="fas fa-laptop-code" style={{color: '#0d6efd'}}></i> Hands-on Hackathon
              </div>
              <p className={styles['highlight-desc']}>
                To promote innovation, a hackathon was conducted where students applied their knowledge and worked collaboratively on problem-solving tasks.
              </p>
            </div>

            <div className={styles['highlight-card']}>
              <div className={styles['highlight-title']}>
                <i className="fas fa-trophy" style={{color: '#0d6efd'}}></i> Recognition & Rewards
              </div>
              <p className={styles['highlight-desc']}>
                The top five performers of the hackathon were recognized and awarded gifts, motivating students to push their limits and celebrate excellence.
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <h4 className={styles['sub-section-title']}>Hackathon Gallery</h4>
          < div className={styles['heckathon-gallery']}>
            <div className={styles['heck-grid-container']}>
              {/* Item 1 */}
              <div className={`${styles['heck-item']} ${styles['item-1']}`}>
                <img src="/img/heckathon-img/heckathon-1.png" alt="Hackathon 1" />
              </div>

              {/* Item 2 */}
              <div className={`${styles['heck-item']} ${styles['item-2']}`}>
                <img src="/img/heckathon-img/heckathon-2.png" alt="Hackathon 2" />
              </div>

              {/* Item 3 */}
              <div className={`${styles['heck-item']} ${styles['item-3']}`}>
                <img src="/img/heckathon-img/heckathon-5.png" alt="Hackathon 3" />
              </div>

              {/* Item 4 */}
              <div className={`${styles['heck-item']} ${styles['item-4']}`}>
                <img src="/img/heckathon-img/heckathon-4.png" alt="Hackathon 4" />
              </div>

              {/* Item 5 */}
              <div className={`${styles['heck-item']} ${styles['item-5']}`}>
                <img src="/img/heckathon-img/heckathon-3.png" alt="Hackathon 5" />
              </div>

              {/* Item 6 - Video */}
              <div 
                className={`${styles['heck-item']} ${styles['item-6']}`} 
                onClick={openModal}
              >
                {/* Visual placeholder for the video */}
                <video className={styles['video-container']} muted loop playsInline onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()}>
                  <source src="/img/heckathon-img/heckathon-6.mp4" type="video/mp4" />
                </video>
                <span className={styles['video-icon']}><i className="fas fa-play"></i></span>
              </div>
            </div>
          </div>

          {/* Moving Forward Section */}
          <div className={styles['conclusion-section']}>
            <h4 className={styles['conclusion-title']}>Moving Forward</h4>
            <p className={styles['conclusion-text']}>
              The Career Clarity Session is an ongoing initiative. We aim to conduct many more such sessions in the future, 
              continuing our mission to bridge the gap between academics and industry expectations. Through expert mentorship 
              and hands-on experiences, we strive to empower students for successful careers.
            </p>
          </div>

        </div>
      </section>

      {/* Video Modal */}
      <div 
        className={`${styles['modal-overlay']} ${modalOpen ? styles['open'] : ''}`} 
        onClick={closeModal}
      >
        <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
          <button className={styles['modal-close']} onClick={closeModal} aria-label="Close modal">
            <i className="fas fa-times"></i>
          </button>
          
          {modalOpen && (
            <video 
              controls 
              autoPlay 
              className={styles['modal-video']}
            >
              <source src="/img/heckathon-img/heckathon-6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </>
  );
};

export default HackathonSection;
