import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementSixthSection = () => {
    return (
        <section className={styles.workshopCourseOne}>
            <div className="container">
                <div className="row clearfix">
                    {/* Title Column */}
                    <div className={`col-lg-5 col-md-12 col-sm-12 ${styles.workshopCourseOneTitleColumn}`}>
                        <div className={styles.workshopCourseOneTitleOuter}>
                            {/* Sec Title */}
                            <div className={styles.secTitle}>
                                <div>
                                    <h2 className={styles.secTitleHeading}>Promote growth with better workshops.</h2>
                                </div>
                            </div>
                            <div className={styles.workshopCourseImage}>
                                <Image src="/img/about-22.jpg" alt="" width={500} height={500} style={{objectFit: 'cover'}}/>
                            </div>
                        </div>
                    </div>
                    {/* Content Column */}
                    <div className={`col-lg-7 col-md-12 col-sm-12 ${styles.workshopCourseOneContentColumn}`}>
                        <div className={styles.workshopCourseOneContentOuter}>
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className={styles.workshopCourseImage}>
                                        <Image src="/img/about-299.jpg" alt="" width={300} height={300} style={{objectFit: 'cover'}}/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className={styles.workshopCourseImage}>
                                        <Image src="/img/about-39.jpg" alt="" width={300} height={300} style={{objectFit: 'cover'}}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                                <p>Tempor Commado ullamcorper a lacus.Amet Commodo nulla facilis nulam. Molestie nunc non blandit massa enim nec. Felis bibendum ut trisitique et egestas quis ipsum Suspendisse ultrices. eros in cursus turpis massa tincidunt dui. </p>
                                <p>Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementSixthSection;
