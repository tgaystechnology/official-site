import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementFifthSection = () => {
    return (
        <section className={styles.homeAboutus}>
            <div className="container">
                <div className={styles.homeAboutusInner}>
                    <div className={styles.aboutGallary}>
                        <figure className={styles.figureRoundBorder}>
                            <Image src="/img/eventum-img33.jpg" alt="" width={300} height={200} style={{objectFit: 'cover'}}/>
                        </figure>
                        <figure className={styles.figureRoundBorder}>
                            <Image src="/img/eventum-img35.jpg" alt="" width={300} height={200} style={{objectFit: 'cover'}}/>
                        </figure>
                        <figure className={styles.figureRoundBorder}>
                            <Image src="/img/eventum-img34.jpg" alt="" width={300} height={200} />
                        </figure>
                    </div>
                    <div className={styles.homeAboutRight}>
                        <div className={styles.aboutContent}>
                            <figure className={`${styles.aboutTopRightImg} ${styles.figureRoundBorder}`}>
                                <Image src="/img/eventum-img36.jpg" alt="" width={300} height={300} style={{objectFit: 'cover'}}/>
                            </figure>
                            <div className={styles.sectionHead}>
                                <span className={styles.sectionSubTitle}>Introduction</span>
                                <h3 className={styles.sectionTitle}>
                                    About Us
                                </h3>
                                <p className={styles.sectionParagraph}>
                                    Consequat sociosqu sem officiis aute ridiculus repellat in aliquip at, metus sociosqu veritatis cubilia ac soluta? Faucibus ipsam, incidunt cras.
                                </p>
                            </div>
                        </div>
                        <div className={styles.aboutDetail}>
                            <figure className={`${styles.aboutBottomRightImg} ${styles.figureRoundBorder}`}>
                                <Image src="/img/eventum-img37.jpg" alt="" width={400} height={300} style={{objectFit: 'cover'}}/>
                            </figure>
                            <div className={styles.aboutDetailInner}>
                                <div className={styles.aboutList}>
                                    <ul>
                                        <li>
                                            <i aria-hidden="true" className="fa-solid fa-circle-check text-primary"></i>
                                            <span>
                                                Gain practical skills through interactive, project-based learning.
                                            </span>
                                        </li>
                                        <li>
                                            <i aria-hidden="true" className="fa-solid fa-circle-check text-primary"></i>
                                            <span>
                                                Learn directly from industry experts with years of experience in the field.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={styles.authorContent}>
                                    <div className={styles.authorDetail}>
                                        <h6 className={styles.authorName}>Jamal Ashraf</h6>
                                        <span className={styles.authorProf}>Chairman & Director</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementFifthSection;
