import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementNinthSection = () => {
    return (
        <section className={`py-5 overflow-hidden ${styles.softwareProgrammingSection}`}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Column */}
                    <div className="col-lg-6 position-relative mb-5 mb-lg-0">
                        <div className={`position-relative ${styles.imageWrapper}`}>
                            {/* Frame Accent */}
                            <div className={styles.frameAccent}></div>
                            {/* Main Image */}
                            <div className={styles.mainImageContainer}>
                                <Image src="/img/ai-summit-team.jpg" alt="Software Programming Expert" width={600} height={500} className={`img-fluid rounded-0 ${styles.teamAi}`} style={{objectFit: 'cover'}}/>
                                {/* Experience Badge */}
                                <div className={styles.experienceBadge}>
                                    <h2 className="mb-0">2026</h2>
                                    <p className="mb-0"><span>AI</span><br />IMPACT SUMMIT</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="col-lg-6 ps-lg-5">
                        <div className={`mb-4 ${styles.sectionHeader}`}>
                            <h2 className="display-5 fw-bold text-dark-blue mb-4">Expert of Software Programming</h2>
                            <p className="text-muted mb-4">
                                TGAYS Technology proudly participated in the AI Impact Summit 2026, a prestigious platform that brought together industry leaders, innovators, startup founders, and technology experts to explore the growing impact of Artificial Intelligence across industries.
                            </p>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-6 mb-3">
                                <div className={`d-flex align-items-center ${styles.featureItem}`}>
                                    <span className={`me-2 ${styles.checkIcon}`}><i className="fa-solid fa-circle-check"></i></span>
                                    <span>Advanced AI Integration</span>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className={`d-flex align-items-center ${styles.featureItem}`}>
                                    <span className={`me-2 ${styles.checkIcon}`}><i className="fa-solid fa-circle-check"></i></span>
                                    <span>Scalable Cloud Solutions</span>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className={`d-flex align-items-center ${styles.featureItem}`}>
                                    <span className={`me-2 ${styles.checkIcon}`}><i className="fa-solid fa-circle-check"></i></span>
                                    <span>Predictive Analytics</span>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className={`d-flex align-items-center ${styles.featureItem}`}>
                                    <span className={`me-2 ${styles.checkIcon}`}><i className="fa-solid fa-circle-check"></i></span>
                                    <span>Ethical AI Development</span>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className={`d-flex align-items-center ${styles.featureItem}`}>
                                    <span className={`me-2 ${styles.checkIcon}`}><i className="fa-solid fa-circle-check"></i></span>
                                    <span>Real-time Data Processing</span>
                                </div>
                            </div>
                            <div className="col-sm-6 mb-3">
                                <div className={`d-flex align-items-center ${styles.featureItem}`}>
                                    <span className={`me-2 ${styles.checkIcon}`}><i className="fa-solid fa-circle-check"></i></span>
                                    <span>Cross-Industry Innovation</span>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-wrap align-items-center">
                            <a href="/contact-us" className={`btn btn-lg px-5 py-3 text-uppercase fw-bold me-4 mb-3 ${styles.btnOrange}`}>Contact Us</a>
                            <div className="d-flex align-items-center mb-3">
                                <div className={`me-3 ${styles.phoneIconBox}`}>
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div>
                                    <span className="d-block text-muted small">AI Impact Summit</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementNinthSection;
