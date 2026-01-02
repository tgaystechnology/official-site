import React from 'react';
import styles from './HackathonSection.module.css';

const HackathonSection = () => {
    return (
        /* HECKATHON SECTION */
        <section className={styles['about-edukation-section']}>
            <div className="container">
                <div className={styles['section-head']}>
                    <span className={styles['section-sub-title']}>CAREER GUIDANCE</span>
                    <h2 className={styles['section-title']}>Career Clarity Session – <span className={styles['highlight']}>Guiding Students</span>
                        Toward the Right Future</h2>

                    <p className={styles['description']}>We recently organized an impactful <strong>Career Clarity Session</strong>, a
                        dedicated initiative focused on helping students gain clear direction, confidence,
                        and a practical understanding of today’s evolving career landscape.</p>

                    <p className={styles['description']}>Students from <strong>Galgotias University (Greater Noida),
                        Vellore Institute of Technology (Tamil Nadu)</strong>, and <strong>IIHS
                            Ghaziabad</strong>enthusiastically attended the session,
                        making it highly interactive and insightful.</p>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-12">
                                <div className="third-tag">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <figure className="masonry-item gallery-card">
                                                <img loading="lazy" src="/img/heckathon-img/heckathon-img-1.png" alt="Big Ben and Westminster Bridge" />
                                            </figure>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <figure className="masonry-item gallery-card">
                                                <img loading="lazy" src="/img/heckathon-img/heckathon-img-2.png" alt="Big Ben and Westminster Bridge" />
                                            </figure>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                            <figure className="masonry-item gallery-card">
                                                <img loading="lazy" src="/img/heckathon-img/heckathon-img-3.png" alt="Big Ben and Westminster Bridge" />
                                            </figure>
                                        </div>

                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                            <figure className="masonry-item gallery-card">
                                                <img loading="lazy" src="/img/heckathon-img/heckathon-img-4.png" alt="Big Ben and Westminster Bridge" />
                                            </figure>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                            <figure className="masonry-item gallery-card">
                                                <img loading="lazy" src="/img/heckathon-img/heckathon-img-5.png" alt="Big Ben and Westminster Bridge" />
                                            </figure>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                            <figure className="masonry-item gallery-card">
                                                <img loading="lazy" src="/img/heckathon-img/heckathon-img-6.png" alt="Big Ben and Westminster Bridge" />
                                            </figure>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                                            <figure className="masonry-item gallery-card">
                                                <img loading="lazy" src="/img/heckathon-img/heckathon-img-7.png" alt="Big Ben and Westminster Bridge" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className={styles['about-edukation-content']}>
                            <div className={styles['speakers-box']}>
                                <h5><i className="fas fa-microphone-alt"></i> Esteemed Guest Speakers</h5>
                                <ul className={styles['speakers-list']}>
                                    <li>
                                        <strong>Ashish Ranjan</strong>
                                        <span>With over 18 years of experience in the software industry, Ex-Infosys, and currently
                                            associated with Capgemini, Belgium.</span>
                                    </li>
                                    <li>
                                        <strong>Rahul Kumar</strong>
                                        <span>Bringing 15+ years of industry experience, having worked with Fidelity, Wipro, and
                                            TCS.</span>
                                    </li>
                                </ul>
                                <p>Their sessions provided students with clarity on industry
                                    expectations, career transitions, skill-building, and long-term growth strategies.</p>
                            </div>

                            <div className={styles['feature-list']}>
                                <h5>Key Highlights of the Session</h5>
                                <div className={styles['grid-2-columns']}>
                                    <div className={styles['feature-item']}>
                                        <div className={styles['icon-box']}>
                                            <i className="fas fa-road"></i>
                                        </div>
                                        <div className={styles['text-box']}>
                                            <h5>Career Roadmap Guidance:</h5>
                                            <p>Students received structured and practical career roadmaps, helping them understand
                                                different
                                                career paths, required skills, and future opportunities aligned with their interests.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles['feature-item']}>
                                        <div className={styles['icon-box']}>
                                            <i className="fas fa-comments"></i>
                                        </div>
                                        <div className={styles['text-box']}>
                                            <h5>Interactive Q&A Session:</h5>
                                            <p>An open discussion forum allowed students to ask questions related to careers, skills,
                                                higher education,
                                                and industry challenges. Each query was addressed with clear, experience-backed
                                                solutions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles['feature-item']}>
                                        <div className={styles['icon-box']}>
                                            <i className="fas fa-laptop-code"></i>
                                        </div>
                                        <div className={styles['text-box']}>
                                            <h5>Hands-on Hackathon:</h5>
                                            <p>To promote innovation and practical thinking, a hackathon was conducted where students
                                                actively participated,
                                                applied their knowledge, and worked collaboratively on problem-solving tasks.</p>
                                        </div>
                                    </div>
                                    <div className={styles['feature-item']}>
                                        <div className={styles['icon-box']}>
                                            <i className="fas fa-trophy"></i>
                                        </div>
                                        <div className={styles['text-box']}>
                                            <h5>Recognition & Rewards:</h5>
                                            <p>The top five performers of the hackathon were recognized and awarded gifts,
                                                motivating students to push their limits and celebrate excellence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles['speakers-box']} ${styles['move-forward-box']}`}>
                    <h5>Moving Forward</h5>
                    <p>The <strong>Career Clarity Session</strong> is an ongoing initiative. We aim to conduct many
                        more such sessions in the future, continuing our mission to bridge the gap
                        between academics and industry expectations.</p>

                    <p>Through expert mentorship, interactive learning, and hands-on experiences,
                        we strive to empower students with the clarity and confidence needed to make
                        informed and successful career decisions.</p>
                </div>
            </div>
        </section>
    );
};

export default HackathonSection;
