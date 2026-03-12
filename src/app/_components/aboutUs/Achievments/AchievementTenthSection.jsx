import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementTenthSection = () => {
    return (
        <section className={`py-5 position-relative text-white ${styles.aiSummitIndustriesSection}`}>
            {/* Tech Pattern Background */}
            <div className={styles.techPatternCircles}></div>
            <div className="container position-relative z-2">
                {/* Top Content */}
                <div className="row align-items-center mb-5 pb-lg-4">
                    <div className="col-lg-7">
                        <div className={`pe-lg-5 ${styles.aiSummitIndustriesHeader}`}>
                            <h2 className={`display-4 fw-bolder mb-4 text-white ${styles.aiSummitIndustriesTitle}`}>
                                We're Dedicated to<br />Serve you All Time
                            </h2>
                            <p className={`${styles.aiSummitIndustriesDesc, styles.textSecondary}`}>
                                During the summit, our team actively engaged in meaningful discussions on AI-driven business transformation, automation, and the practical implementation of intelligent systems for startups and enterprises. We also showcased our expertise in building AI-enabled web and mobile applications, scalable SaaS platforms, and automation-focused solutions designed to help businesses grow faster and smarter.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-5 mt-lg-0">
                        <div className="position-relative">
                            <div className={styles.orangeAccentBarLeft}></div>
                            <div className={styles.featureImgWrap}>
                                <Image src="/img/ai-summit-main-img.png" alt="Team dedication" width={500} height={380} className="img-fluid w-100 h-100 object-fit-cover rounded-1" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Gallery */}
                <div className="mt-5">
                    <div className="row g-3">
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className={`rounded-2 overflow-hidden shadow-sm ${styles.aspectSquare} ${styles.galleryCard}`}>
                                <Image src="/img/ai-summit-impact-1.png" alt="GNSU Event" width={200} height={200} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className={`rounded-2 overflow-hidden shadow-sm ${styles.aspectSquare} ${styles.galleryCard}`}>
                                <Image src="/img/ai-summit-impact-2.png" alt="Team meeting" width={200} height={200} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className={`rounded-2 overflow-hidden shadow-sm ${styles.aspectSquare} ${styles.galleryCard}`}>
                                <Image src="/img/ai-summit-impact-3.png" alt="Expo" width={200} height={200} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className={`rounded-2 overflow-hidden shadow-sm ${styles.aspectSquare} ${styles.galleryCard}`}>
                                <Image src="/img/ai-summit-impact-4.png" alt="Presentation" width={200} height={200} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className={`rounded-2 overflow-hidden shadow-sm ${styles.aspectSquare} ${styles.galleryCard}`}>
                                <Image src="/img/ai-summit-impact-5.png" alt="Dubai Summit" width={200} height={200} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <div className={`rounded-2 overflow-hidden shadow-sm ${styles.aspectSquare} ${styles.galleryCard}`}>
                                <Image src="/img/ai-summit-impact-6.png" alt="Innovation Hub" width={200} height={200} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementTenthSection;
