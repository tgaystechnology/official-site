import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementEighthSection = () => {
    return (
        <section className={styles.certificateTwo} style={{ backgroundImage: "url(/img/about-shadow.png)" }}>
            <div className="container">
                <div className="row clearfix">

                    {/* Title Column */}
                    <div className={`col-lg-4 col-md-12 col-sm-12 ${styles.certificateTwoTitleColumn}`}>
                        <div className={styles.certificateTwoTitleOuter}>
                            <div className={styles.certificateTwoImage}>
                                <Image src="/img/certificate-pro.jpg" alt="Pro Certificate" width={400} height={500} style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className={`col-lg-8 col-md-12 col-sm-12 ${styles.certificateTwoContentColumn}`}>
                        <div className={styles.certificateTwoContentOuter}>
                            {/* Sec Title */}
                            <div className={styles.secTitle}>
                                <div>
                                    <h2 className={styles.secTitleHeading}>Certificate of Completion – Python & Artificial Intelligence Workshop.</h2>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-5 col-md-6 col-sm-12">
                                    <div className={styles.certificateTwoImage}>
                                        <Image src="/img/certificate.jpg" alt="Certificate" width={400} height={300} style={{objectFit: 'cover'}}/>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-6 col-sm-12">
                                    <div className={styles.certificateTwoText}>This certificate is awarded for successfully completing the Python and Artificial Intelligence Workshop, demonstrating essential knowledge, practical skills, and hands-on project experience.</div>
                                    <ul className={styles.certificateOneList}>
                                        <li>Practical Learning</li>
                                        <li>Programming</li>
                                        <li>Next-Generation Skills</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AchievementEighthSection;
