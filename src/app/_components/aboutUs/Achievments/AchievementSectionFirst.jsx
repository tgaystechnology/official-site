import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementSectionFirst = () => {
    return (
        <section className={`about-section py-5 overflow-hidden ${styles.ourAchievementFirst}`}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Images Group */}
                    <div className="col-lg-6">
                        <div className={`position-relative ${styles.imagesContainer}`}>
                            <div className={styles.aboutImgGrid}>
                                <div className={`${styles.imgItem} ${styles.img1}`}>
                                    <Image src="/img/gnsu5.jpeg" alt="GNS University Summit" width={800} height={400} style={{objectFit: 'cover'}}/>
                                </div>
                                <div className={`${styles.imgItem} ${styles.img2}`}>
                                    <Image src="/img/gnsu3.jpg" alt="GNS University Summit" width={400} height={300} style={{objectFit: 'cover'}}/>
                                </div>
                                <div className={`${styles.imgItem} ${styles.img3}`}>
                                    <Image src="/img/gnsu4.jpeg" alt="GNS University Summit" width={400} height={300} style={{objectFit: 'cover'}}/>
                                </div>

                                {/* Explore Badge */}
                                <div className={styles.exploreBadge}>
                                    <div className={styles.badgeInner}>
                                        <svg viewBox="0 0 100 100">
                                            <path id="circlePathFirst" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                            <text>
                                                <textPath href="#circlePathFirst">
                                                    Invited as a Chief Guest in the Startup Summit 2022
                                                </textPath>
                                            </text>
                                        </svg>
                                        <div className={styles.arrowIcon}>
                                            <i className="fa-solid fa-trophy"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="col-lg-6">
                        <div className="about-content ps-lg-4 mt-5 mt-lg-0 position-relative z-2">
                            <h2 className={`display-5 fw-bolder mb-4 text-dark ${styles.title}`}>
                                Invited as a Chief Guest <span>in the Startup Summit 2022 organized by Gopal Narayan Singh University, Rohtas.</span>
                            </h2>

                            <p className={`text-muted mb-4 pe-lg-5 ${styles.leadP}`}>
                                Mr. Jamal Ashraf, Managing Director and Mr. Vikash Kumar, Chief Technical Officer of TGAYS Technology were one of the chief guests invited in the Start Up Summit organized by Gopal Narayan Singh University, Rohtas in the December month. Mr. Ashraf had a discussion with the University Director, Dean and students about how the Universities are adapting towards preparing their students for Entrepreneurship. Mr. Ashraf and Mr. Kumar also met Mr. Ravi Ranjan, Business Ex-Advisor, Shark Tank India and had an interaction on encouraging Start-up ecosystem in the state.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementSectionFirst;
