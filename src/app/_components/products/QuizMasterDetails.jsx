import React from 'react';
import styles from './QuizMasterDetails.module.css';

const QuizMasterDetails = () => (
    <div className={styles.container}>
        
        {/* Intro Section */}
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                Vidya AI LMS – Comprehensive Platform Overview
            </h2>
            <div className={styles.prose}>
                <p className={styles.boldText}>
                    Vidya AI LMS is a full-scale AI-powered Learning Management System (LMS) designed to operate as a complete digital education ecosystem rather than just a repository of educational videos.
                </p>
                <p>
                    Traditional LMS platforms mainly store course videos and documents. Vidya AI LMS, however, integrates AI assistance, automated operations, learning analytics, secure access control, and competitive learning tools to create a fully interactive learning environment.
                </p>
            </div>
            
            <div className={styles.objectivesBox}>
                <h3 className={styles.objectivesTitle}>
                    <svg className={styles.objectivesIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Platform Objectives
                </h3>
                <ul className={styles.objectivesGrid}>
                    {[
                        "Automating operational processes in online education",
                        "Providing personalized AI-based learning assistance",
                        "Creating a secure and scalable digital classroom infrastructure",
                        "Preventing revenue leakage in live training programs",
                        "Enhancing student engagement through gamified learning mechanisms"
                    ].map((item, i) => (
                        <li key={i} className={styles.objectiveItem}>
                            <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className={styles.objectiveText}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        {/* Pathways Section */}
        <section className={styles.section}>
            <h3 className={styles.pathwaySubtitle}>Primary Learning Pathways</h3>
            <p className={styles.pathwayDesc}>Vidya AI LMS supports two primary learning pathways that mirror real-world education models:</p>
            
            <div className={styles.pathwaysGrid}>
                {/* Pathway 1 */}
                <div className={styles.pathwayCard}>
                    <svg className={styles.bgIcon} fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    
                    <div className={styles.numberBadge}>1</div>
                    <h4 className={styles.pathwayTitle}>Live Cohort-Based Learning</h4>
                    <span className={styles.tag}>Synchronous Learning</span>
                    
                    <p className={styles.pathwayText}>
                        Students attend scheduled live classes with instructors in real time. This is similar to attending a traditional classroom but in an online environment.
                    </p>
                    
                    <div className={styles.examplesBox}>
                        <div className={styles.examplesTitle}>Examples:</div>
                        <ul className={styles.examplesList}>
                            <li className={styles.exampleItem}><span className={styles.dot}></span> Bootcamps</li>
                            <li className={styles.exampleItem}><span className={styles.dot}></span> Live workshops</li>
                            <li className={styles.exampleItem}><span className={styles.dot}></span> Coaching batches</li>
                            <li className={styles.exampleItem}><span className={styles.dot}></span> Short-term training</li>
                        </ul>
                    </div>
                </div>

                {/* Pathway 2 */}
                <div className={`${styles.pathwayCard} ${styles.emerald}`}>
                    <svg className={styles.bgIcon} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                    
                    <div className={styles.numberBadge}>2</div>
                    <h4 className={styles.pathwayTitle}>Recorded Self-Paced</h4>
                    <span className={styles.tag}>Asynchronous Learning</span>
                    
                    <p className={styles.pathwayText}>
                        Students can purchase recorded courses and study at their own pace, allowing learners to learn independently without time restrictions.
                    </p>
                    
                    <div className={styles.examplesBox}>
                        <div className={styles.examplesTitle}>Benefits:</div>
                        <ul className={`${styles.examplesList} ${styles.singleCol}`}>
                            <li className={styles.exampleItem}><span className={styles.emeraldCheck}>✓</span> Watch lessons anytime</li>
                            <li className={styles.exampleItem}><span className={styles.emeraldCheck}>✓</span> Repeat content when needed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Modules Section */}
        <section className={styles.section}>
            <div className={styles.modulesHeader}>
                <h3 className={styles.pathwaySubtitle}>Core System Modules</h3>
                <p className={styles.pathwayDesc}>The 5 pillars forming the complete LMS ecosystem.</p>
            </div>

            <div className={styles.modulesList}>
                {/* Module 1 */}
                <div className={`${styles.moduleLarge} ${styles.blueHov}`}>
                    <div className={styles.moduleSidebar}>
                        <span className={`${styles.moduleLabel} ${styles.blue}`}>Module 01</span>
                        <h4 className={styles.moduleTitle}>Training Module</h4>
                        <p className={styles.moduleSubtitle}>Live Cohort Classes & Batch Management</p>
                    </div>
                    <div className={styles.moduleContent}>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h5 className={styles.featureTitle}>Smart Gatekeeper</h5>
                                <p className={styles.featureDesc}>Meeting URLs are hidden. Active "Join Now" appears only for enrolled users during session time.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h5 className={styles.featureTitle}>Automated Logistics</h5>
                                <p className={styles.featureDesc}>Cron jobs mapping email reminders. Auto-attendance logged upon "Join Now" click.</p>
                            </div>
                            <div className={`${styles.featureCard} ${styles.fullWidth}`}>
                                <h5 className={styles.featureTitle}>Workshop & Command Center</h5>
                                <p className={styles.featureDesc}>Structured learning cohorts mapped via a dynamic UI to plan learning schedules.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Module 2 */}
                <div className={`${styles.moduleLarge} ${styles.emeraldHov}`}>
                    <div className={styles.moduleSidebar}>
                        <span className={`${styles.moduleLabel} ${styles.emerald}`}>Module 02</span>
                        <h4 className={styles.moduleTitle}>Courses Module</h4>
                        <p className={styles.moduleSubtitle}>Recorded Learning & AI Note Generation</p>
                    </div>
                    <div className={styles.moduleContent}>
                         <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                 <h5 className={styles.featureTitle}>E-Commerce & "My Learning"</h5>
                                 <p className={styles.featureDesc}>Built-in marketplace and visual student panel to track video completion via API safely.</p>
                            </div>
                             <div className={`${styles.featureCard} ${styles.emeraldBox}`}>
                                 <h5 className={`${styles.featureTitle} ${styles.emeraldText}`}>
                                     <svg className={styles.checkIcon} style={{color: 'inherit', width: '1rem', height: '1rem'}} fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                                     On-Demand AI
                                </h5>
                                 <p className={`${styles.featureDesc} ${styles.emeraldText}`}>Students request Notes/Quizzes instantly from transcripts, minimizing global AI processing costs.</p>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Additional Modules Grid */}
                <div className={styles.smallModulesGrid}>
                    {/* Module 3 */}
                    <div className={`${styles.moduleSmall} ${styles.purpleHov}`}>
                        <span className={`${styles.moduleLabel} ${styles.purple}`}>Module 03</span>
                        <h4 className={styles.smallModuleTitle}>Quiz Engine</h4>
                        <ul className={styles.smallFeatureList}>
                            <li>
                                <span className={styles.smFeatureName}>Hackathons</span>
                                <span className={styles.smFeatureDesc}>Time-restricted competitive mode with live leaderboards.</span>
                            </li>
                            <li>
                                <span className={styles.smFeatureName}>AI Lifelines</span>
                                <span className={styles.smFeatureDesc}>Gamified assistance mimicking real-world logic (Ask AI or 50/50).</span>
                            </li>
                        </ul>
                    </div>

                    {/* Module 4 */}
                    <div className={`${styles.moduleSmall} ${styles.orangeHov}`}>
                        <span className={`${styles.moduleLabel} ${styles.orange}`}>Module 04</span>
                        <h4 className={styles.smallModuleTitle}>AI Mentor</h4>
                        <p className={styles.smFeatureDesc}>Monitors student behavior to generate tailored performance insights.</p>
                        <div className={styles.quoteBox}>
                           "You perform strongly in conceptual questions but struggle with time-based quizzes."
                        </div>
                    </div>

                    {/* Module 5 */}
                    <div className={`${styles.moduleSmall} ${styles.tealHov}`}>
                        <span className={`${styles.moduleLabel} ${styles.teal}`}>Module 05</span>
                        <h4 className={styles.smallModuleTitle}>Control System</h4>
                         <ul className={styles.smallFeatureList}>
                            <li>
                                <span className={styles.smFeatureName}>Custom Admin</span>
                                <span className={styles.smFeatureDesc}>Bespoke dashboard configured solely for educational logistics.</span>
                            </li>
                            <li>
                                <span className={styles.smFeatureName}>Coupon Framework</span>
                                <span className={styles.smFeatureDesc}>Manages complex token access with dynamic duration stacking.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Business Impact Secton Highlight */}
        <section className={styles.impactSection}>
            <div className={styles.glowTopRight}></div>
            <div className={styles.glowBottomLeft}></div>
            
            <div className={styles.impactContent}>
                <div className={styles.impactHeader}>
                    <span className={styles.impactHeaderLabel}>Why It Matters</span>
                    <h3 className={styles.impactHeaderTitle}>Business Problems Solved</h3>
                    <p className={styles.impactHeaderDesc}>Addressing major operational challenges in the online education industry.</p>
                </div>
                
                <div className={styles.impactGrid}>
                    <div className={styles.impactCard}>
                        <div className={`${styles.impactCardIcon} ${styles.yellow}`}>
                             <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h4 className={styles.impactCardTitle}>AI Cost Management</h4>
                        <p className={styles.impactCardDesc}>Prevents extreme API bills by shifting heavy processing from pre-computation to on-demand generation explicitly requested by the user.</p>
                    </div>

                    <div className={styles.impactCard}>
                        <div className={`${styles.impactCardIcon} ${styles.green}`}>
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <h4 className={styles.impactCardTitle}>Revenue Protection & Security</h4>
                        <p className={styles.impactCardDesc}>Conceals direct meeting links behind internal gateways. Verifies user tokens simultaneously to block session hijacking or password sharing permanently.</p>
                    </div>

                    <div className={styles.impactCard}>
                         <div className={`${styles.impactCardIcon} ${styles.blue}`}>
                             <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                        </div>
                        <h4 className={styles.impactCardTitle}>Operational Automation</h4>
                        <p className={styles.impactCardDesc}>Cron-based automated attendance gathering limits manipulation, substituting manual administration with scalable automation parameters.</p>
                    </div>

                    <div className={styles.impactCard}>
                         <div className={`${styles.impactCardIcon} ${styles.purple}`}>
                             <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <h4 className={styles.impactCardTitle}>Tool Consolidation</h4>
                        <p className={styles.impactCardDesc}>Integrates external analytics, standalone LMS tools, and marketing gateways directly into one sophisticated proprietary infrastructure stack.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
);

export default QuizMasterDetails;
