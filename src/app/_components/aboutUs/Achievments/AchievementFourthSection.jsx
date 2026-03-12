import React from 'react';
import Image from 'next/image';
import styles from './achievements.module.css';

const AchievementFourthSection = () => {
    return (
        <section className={`position-relative ${styles.celebrationSection} ${styles.bgDarkCustom}`}>
            <div className="container pb-5">
                <div className="row gx-lg-5 gy-4">
                    {/* Left Image (Overlapping Top) */}
                    <div className="col-lg-5">
                        <div className={`shadow-sm ${styles.celebrationImgLeft}`}>
                            <Image src="/img/bidr.jpg" alt="Bidraves celebration event in Los Angeles" width={500} height={480} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-7 d-flex">
                        <div className={`shadow-sm w-100 ${styles.celebrationImgRight}`}>
                            <Image src="/img/bidraves1.jpeg" alt="Bidraves team celebrating success in Los Angeles" width={700} height={320} className="img-fluid w-100 h-100 object-fit-cover" style={{objectFit: 'cover'}}/>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="row mt-5">
                    <div className="col-12">
                        <h2 className={`text-white mb-4 ${styles.celebrationTitle}`}>Bidraves Success Celebration at Los Angeles</h2>
                        <p className={`pe-lg-5 mb-0 ${styles.celebrationText}`}>
                            Bidraves was one of the successful marketplace B2B business. The entire operation was managed successfully by mobile application developed by our Company. The pictures below depict the celebration of the Bidraves success at a hotel in Los Angeles in California State, USA.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementFourthSection;
