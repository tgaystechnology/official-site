import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementSecondSection = () => {
    return (
        <section className={`py-5 position-relative overflow-hidden ${styles.ourSkillSection}`}>
            <div className="container mt-5 position-relative z-2">
                <div className="row align-items-center g-5">
                    {/* Left Content */}
                    <div className="col-lg-6">
                        <div className={`pe-lg-5 ${styles.skillContent}`}>
                            <h2 className={`display-5 fw-bolder mb-4 text-dark ${styles.titleSkill}`}>
                                Collaboration with <span>KIAGTS LLC, A Dubai based Company</span>
                            </h2>

                            <p className={`text-muted mb-2 ${styles.leadP}`}>
                                Our company had a collaboration with Dubai based company KIAGTS LLC as their technology partner. Mr. Francis Wills, the managing partner of the Company from Dubai visited our office in Noida to have a discussion about this collaboration process and the memorandum of understanding (MOU).
                            </p>
                            <p className={`text-muted ${styles.leadP}`}>
                                During the meeting, both companies discussed future technology initiatives, project opportunities, and long-term cooperation. This collaboration aimed to strengthen our global presence and create new possibilities for delivering innovative technology solutions to international clients.
                            </p>
                        </div>
                    </div>

                    {/* Right Images Redesign (v2) */}
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <div className={`position-relative ${styles.skillImagesV2}`}>
                            {/* Orange Accents */}
                            <div className={`${styles.skillOrangeAccent} ${styles.accent1}`}></div>
                            <div className={`${styles.skillOrangeAccent} ${styles.accent2}`}></div>

                            {/* Top Image */}
                            <div className={`${styles.skillImgV2} ${styles.topImg} shadow`}>
                                <Image src="/img/kiagts2.jpg" alt="KIAGTS LLC partnership signing" width={600} height={400} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                            </div>

                            {/* Bottom Image Overlapping */}
                            <div className={`${styles.skillImgV2} ${styles.bottomImg} shadow`}>
                                <Image src="/img/kiagts1.jpg" alt="KIAGTS LLC collaboration meeting" width={600} height={400} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementSecondSection;
