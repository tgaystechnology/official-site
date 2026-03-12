import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementThirdSection = () => {
    return (
        <section className={`bg-white ${styles.ourAchievementSecond} ${styles.py100} ${styles.trustedPartnerSection}`}>
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Left Column: Text Content */}
                    <div className="col-lg-6">
                        <div className={`ps-lg-5 ${styles.trustedTextContent}`}>
                            {/* Main Title */}
                            <h2 className={`display-5 fw-bolder mb-4 text-dark ${styles.titleTrusted}`}>
                                Organized <span>Vibrant Bihar- Entrepreneurship</span> Global Summit
                            </h2>

                            {/* Description */}
                            <p className={`text-muted mb-4 ${styles.leadP}`}>
                                In co-ordination with a few more companies and Lets Inspire Bihar, TGAYS Technology have facilitated and helped in organizing an Entreperenueship Global Summit on 5th June 2022 at Hotel Maurya in Patna.
                            </p>

                            {/* Featured Solution Box */}
                            <div className={`position-relative p-4 mb-4 rounded-3 overflow-hidden shadow-sm ${styles.featuredSolutionBox}`}>
                                <div className={styles.boxOverlayImg}></div>
                                <div className="d-flex align-items-center position-relative z-2">
                                    <div className={`me-3 ${styles.boxIcon}`}>
                                        <div className={`bg-dark text-white rounded-circle d-flex align-items-center justify-content-center ${styles.iconCircle}`} style={{ width: '50px', height: '50px' }}>
                                            <i className="fa-solid fa-users-gear"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold mb-1 text-dark">Deliver Perfect Solution</h5>
                                        <p className="mb-0 text-muted small">The aim was to revolutionize industrialization and entrepreneurship eco-system in Bihar.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sub Features */}
                            <div className="row g-4 mb-5">
                                <div className="col-md-6">
                                    <div className={`d-flex align-items-start ${styles.subFeature}`}>
                                        <div className={`me-3 mt-1 ${styles.subFeatureIcon}`}>
                                            <div className={`bg-dark text-warning rounded-circle d-flex align-items-center justify-content-center ${styles.iconCircleSm}`} style={{ width: '35px', height: '35px', fontSize: '0.8rem' }}>
                                                <i className="fa-solid fa-microchip"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">Manage Tech Services</h6>
                                            <p className="mb-0 text-muted small">Facilitating global summit for industrial success.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={`d-flex align-items-start ${styles.subFeature}`}>
                                        <div className={`me-3 mt-1 ${styles.subFeatureIcon}`}>
                                            <div className={`bg-dark text-warning rounded-circle d-flex align-items-center justify-content-center ${styles.iconCircleSm}`} style={{ width: '35px', height: '35px', fontSize: '0.8rem' }}>
                                                <i className="fa-solid fa-lightbulb"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-1">IT Consulting Solution</h6>
                                            <p className="mb-0 text-muted small">Collaborating with global experts for better skill dev.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <a href="#" className={`btn px-4 py-3 fw-bold text-uppercase shadow-sm ${styles.btnOrange}`} style={{ borderRadius: '5px', fontSize: '0.9rem' }}>Discover More</a>
                        </div>
                    </div>

                    {/* Right Column: Image Collage */}
                    <div className="col-lg-6">
                        <div className={`position-relative ${styles.trustedImageCollage}`}>
                            {/* Trophy Badge Overlay */}
                            <div className={styles.trophyBadge}>
                                <i className="fa-solid fa-trophy"></i>
                            </div>

                            {/* Main Large Image */}
                            <div className={`shadow-sm overflow-hidden ${styles.mainCollageImg}`}>
                                <Image src="/img/take-trophy.png" alt="Vibrant Bihar Entrepreneurship Summit" width={600} height={500} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>

                            {/* Circular Small Image Overlay */}
                            <div className={`border border-white border-4 overflow-hidden ${styles.circularBadgeImg}`}>
                                <Image src="/img/jamal-speaker.jpg" alt="GNSU 5th Summit" width={400} height={230} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>

                            {/* Decorative Vertical Bar */}
                            <div className={styles.decorativeBarOrange}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementThirdSection;
