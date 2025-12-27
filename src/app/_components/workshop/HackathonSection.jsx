import React from 'react';
import styles from './HackathonSection.module.css';

const HackathonSection = () => {
  const images = [
    '/img/heckathon-img/26.png',
    '/img/heckathon-img/5.png',
    '/img/heckathon-img/8.png',
    '/img/heckathon-img/9.png',
    // '/img/heckathon-img/18.png',
    '/img/heckathon-img/24.png',
    '/img/heckathon-img/25.png',
    '/img/heckathon-img/29.png',
    '/img/heckathon-img/27.png',
    // '/img/heckathon-img/28.png',
    '/img/heckathon-img/1 (1).png'
  ];

  return (
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
        <div className={styles['heckathon-gallery']}>
          <div className={styles['heck-grid-container']}>
            {images.map((src, index) => (
              <div key={index} className={styles['heck-item']}>
                <img src={src} alt={`Hackathon Moment ${index + 1}`} loading="lazy" />
              </div>
            ))}
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
  );
};

export default HackathonSection;
