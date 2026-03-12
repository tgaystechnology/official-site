import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementEleventhSection = () => {
    return (
        <section className={`py-5 position-relative ${styles.businessConferenceSection}`}>
            <div className="container">
                <div className="row align-items-start mb-5 pb-lg-5">
                    {/* Left Content */}
                    <div className="col-lg-12">
                        <div className={styles.conferenceHeader}>
                            <h2 className="text-white mb-4">
                                TGAYS Technology at the AI Impact Summit
                            </h2>

                            <p className="mb-0 opacity-75">
                                Our presence at the AI Impact Summit reflects TGAYS Technology’s continuous commitment to staying at the forefront of innovation and contributing to the evolving AI ecosystem. It was not just participation, but a step forward in strengthening our position as a future-ready technology company.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className={`d-flex justify-content-center ${styles.secureBadgeWrapper}`}>
                    <div className={styles.secureBadge}>
                        <p className="mb-1 text-uppercase small">AI<br />IMPACT SUMMIT</p>
                        <h3 className="fw-bold mb-1">2026</h3>
                    </div>
                </div>

                {/* Image Gallery Gallery */}
                <div className={`mt-5 pt-lg-5 ${styles.conferenceGallery}`}>
                    <div className={styles.galleryWrapper}>
                        <div className={`${styles.galleryItem} ${styles.gallery1}`}>
                            <Image src="/img/ai-gallery-1.png" alt="Conference speaker 1" width={300} height={450} style={{objectFit: 'cover'}}/>
                        </div>
                        <div className={`${styles.galleryItem} ${styles.gallery2}`}>
                            <Image src="/img/ai-gallery-4.png" alt="Conference venue" width={300} height={350} style={{objectFit: 'cover'}}/>
                        </div>
                        <div className={`${styles.galleryItem} ${styles.gallery3}`}>
                            <Image src="/img/ai-gallery-3.png" alt="Conference team" width={300} height={220} style={{objectFit: 'cover'}}/>
                        </div>
                        <div className={`${styles.galleryItem} ${styles.gallery4}`}>
                            <Image src="/img/ai-gallery-2.png" alt="Conference hall" width={300} height={350} style={{objectFit: 'cover'}}/>
                        </div>
                        <div className={`${styles.galleryItem} ${styles.gallery5}`}>
                            <Image src="/img/ai-gallery-6.png" alt="Conference speaker 2" width={300} height={450} style={{objectFit: 'cover'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementEleventhSection;
