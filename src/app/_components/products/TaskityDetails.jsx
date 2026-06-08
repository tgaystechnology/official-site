import React from 'react';
import styles from './QuizMasterDetails.module.css';

const TaskityDetails = () => (
    <div className={styles.container}>
        
        {/* Intro Section */}
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
                Taskity — Ultimate Business Operations & HRMS Portal
            </h2>
            <div className={styles.prose}>
                <p className={styles.boldText}>
                    Taskity is an all-in-one corporate operating ecosystem designed for modern enterprises, agencies, and startups.
                </p>
                <p>
                    It serves as a unified command center that bridges the gap between daily human resource tracking, granular financial auditing, and active project execution. Built as a fully dynamic, white-labelable SAAS solution, it enables organizations to completely digitalize their administrative, operational, and financial pipelines under a single custom-branded umbrella.
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
                        "Absolute Operational Transparency: Real-time financial tracking from a $200,000,000 macro-level annual goal down to micro-level monthly operating expenses.",
                        "Frictionless Workspace Efficiency: Streamline attendance tracking, leave applications, and individual task lists to eliminate HR bottlenecks.",
                        "Granular Compliance & Security: Maintain an airtight financial and access trail through automated tax ledger reporting (GST/TDS) and custom permission maps."
                    ].map((item, i) => (
                        <li key={i} className={styles.objectiveItem}>
                            <svg className={styles.checkIcon} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span className={styles.objectiveText}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        {/* Pathways Section (Replaced with Primary Operational Pathways) */}
        <section className={styles.section}>
            <h3 className={styles.pathwaySubtitle}>Primary Operational Pathways</h3>
            <p className={styles.pathwayDesc}>Taskity structures the corporate environment across key organization roles:</p>
            
            <div className={styles.pathwaysGrid}>
                {/* Pathway 1 */}
                <div className={styles.pathwayCard}>
                    <svg className={styles.bgIcon} fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                    
                    <div className={styles.numberBadge}>1</div>
                    <h4 className={styles.pathwayTitle}>Super Admin & Executive Dashboard</h4>
                    <span className={styles.tag}>Organization Health View</span>
                    
                    <p className={styles.pathwayText}>
                        Offers a comprehensive bird's-eye view of organization-wide health. Features instant tracking of active project counts, current operating costs, and visual goal-tracking progress bars against target revenue milestones.
                    </p>
                </div>

                {/* Pathway 2 */}
                <div className={`${styles.pathwayCard} ${styles.emerald}`}>
                    <svg className={styles.bgIcon} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                    
                    <div className={styles.numberBadge}>2</div>
                    <h4 className={styles.pathwayTitle}>HR & Department Managers</h4>
                    <span className={styles.tag}>Performance & Leaves</span>
                    
                    <p className={styles.pathwayText}>
                        Provides a dedicated management layer to oversee employee records, track daily performance metrics, configure annual leave policies, and review/approve time-off requests with full audit logs.
                    </p>
                </div>

                {/* Pathway 3 */}
                <div className={styles.pathwayCard}>
                    <svg className={styles.bgIcon} fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h3a1 1 0 100-2H9z" /></svg>
                    
                    <div className={styles.numberBadge}>3</div>
                    <h4 className={styles.pathwayTitle}>Finance & Accounts Hub</h4>
                    <span className={styles.tag}>Banking & Payroll</span>
                    
                    <p className={styles.pathwayText}>
                        A secure workspace for accountants to handle company banking records, process monthly payroll matrices (CTC, Basic Pay, HRA), manage sales/purchase invoices, and generate localized tax reports.
                    </p>
                </div>

                {/* Pathway 4 */}
                <div className={`${styles.pathwayCard} ${styles.emerald}`}>
                    <svg className={styles.bgIcon} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
                    
                    <div className={styles.numberBadge}>4</div>
                    <h4 className={styles.pathwayTitle}>Execution Team Member Portal</h4>
                    <span className={styles.tag}>Employee Self Service</span>
                    
                    <p className={styles.pathwayText}>
                        A focused interface for day-to-day operations. Employees can punch in/out, log project breaks, track their individual daily planners, and update the status of assigned tasks.
                    </p>
                </div>
            </div>
        </section>

        {/* Modules Section */}
        <section className={styles.section}>
            <div className={styles.modulesHeader}>
                <h3 className={styles.pathwaySubtitle}>Core System Modules</h3>
                <p className={styles.pathwayDesc}>The functional pillars constituting Taskity's corporate operations engine.</p>
            </div>

            <div className={styles.modulesList}>
                {/* Module 1 */}
                <div className={`${styles.moduleLarge} ${styles.blueHov}`}>
                    <div className={styles.moduleSidebar}>
                        <span className={`${styles.moduleLabel} ${styles.blue}`}>Module 01</span>
                        <h4 className={styles.moduleTitle}>Attendance & Leave Matrix</h4>
                        <p className={styles.moduleSubtitle}>Smart Time Clock & Policy Configurator</p>
                    </div>
                    <div className={styles.moduleContent}>
                        <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                <h5 className={styles.featureTitle}>Digital Punch Console</h5>
                                <p className={styles.featureDesc}>Tracks exact login/logout times, total active hours, idle time, and red flags.</p>
                            </div>
                            <div className={styles.featureCard}>
                                <h5 className={styles.featureTitle}>Leave Lifecycle Pipeline</h5>
                                <p className={styles.featureDesc}>Apply for full/partial leaves, view leave balances, and track manager approval logs.</p>
                            </div>
                            <div className={`${styles.featureCard} ${styles.fullWidth}`}>
                                <h5 className={styles.featureTitle}>Policy Configurator</h5>
                                <p className={styles.featureDesc}>Configure global and department-specific annual paid leave rules and automated reset cycles.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Module 2 */}
                <div className={`${styles.moduleLarge} ${styles.emeraldHov}`}>
                    <div className={styles.moduleSidebar}>
                        <span className={`${styles.moduleLabel} ${styles.emerald}`}>Module 02</span>
                        <h4 className={styles.moduleTitle}>Financial Ledger & Payroll</h4>
                        <p className={styles.moduleSubtitle}>Salary Engine & Invoice Vault</p>
                    </div>
                    <div className={styles.moduleContent}>
                         <div className={styles.featuresGrid}>
                            <div className={styles.featureCard}>
                                 <h5 className={styles.featureTitle}>Salary Structuring Engine</h5>
                                 <p className={styles.featureDesc}>Generate salary slips factoring in CTC structure, Basic Pay, and HRA metrics.</p>
                            </div>
                             <div className={`${styles.featureCard} ${styles.emeraldBox}`}>
                                 <h5 className={`${styles.featureTitle} ${styles.emeraldText}`}>
                                     Invoice & Tax Vault
                                </h5>
                                 <p className={`${styles.featureDesc} ${styles.emeraldText}`}>Log sales/purchase invoices with GST verification, TDS rules, and export tax statements.</p>
                            </div>
                         </div>
                    </div>
                </div>

                {/* Additional Modules Grid */}
                <div className={styles.smallModulesGrid}>
                    {/* Module 3 */}
                    <div className={`${styles.moduleSmall} ${styles.purpleHov}`}>
                        <span className={`${styles.moduleLabel} ${styles.purple}`}>Module 03</span>
                        <h4 className={styles.smallModuleTitle}>Project Orchestration</h4>
                        <ul className={styles.smallFeatureList}>
                            <li>
                                <span className={styles.smFeatureName}>Project Pipelines</span>
                                <span className={styles.smFeatureDesc}>Track active, on-hold, and closed projects with cost and billing model parameters.</span>
                            </li>
                            <li>
                                <span className={styles.smFeatureName}>Task Allocation</span>
                                <span className={styles.smFeatureDesc}>Break down projects into granular tasks assigned to specific team members.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Module 4 */}
                    <div className={`${styles.moduleSmall} ${styles.orangeHov}`}>
                        <span className={`${styles.moduleLabel} ${styles.orange}`}>Module 04</span>
                        <h4 className={styles.smallModuleTitle}>Performance Evaluation</h4>
                        <p className={styles.smFeatureDesc}>Rate competencies visually (Productivity, Initiative, Technical/Learning Skills) using visual sliders.</p>
                        <div className={styles.quoteBox}>
                           Output levels (Needs Improvement, Average, Excellent) calculated automatically.
                        </div>
                    </div>

                    {/* Module 5 */}
                    <div className={`${styles.moduleSmall} ${styles.tealHov}`}>
                        <span className={`${styles.moduleLabel} ${styles.teal}`}>Module 05</span>
                        <h4 className={styles.smallModuleTitle}>White-Label & RBAC</h4>
                        <ul className={styles.smallFeatureList}>
                            <li>
                                <span className={styles.smFeatureName}>White-Label Deployment</span>
                                <span className={styles.smFeatureDesc}>Adapt the portal layout to your agency's branding guidelines and custom hosting.</span>
                            </li>
                            <li>
                                <span className={styles.smFeatureName}>Granular RBAC Control</span>
                                <span className={styles.smFeatureDesc}>Secure administrative data with feature-level role permissions by department.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Business Problems Solved Section */}
        <section className={styles.impactSection}>
            <div className={styles.glowTopRight}></div>
            <div className={styles.glowBottomLeft}></div>
            
            <div className={styles.impactContent}>
                <div className={styles.impactHeader}>
                    <span className={styles.impactHeaderLabel}>Why It Matters</span>
                    <h3 className={styles.impactHeaderTitle}>Business Problems Solved</h3>
                    <p className={styles.impactHeaderDesc}>Unifying scattered systems into one clean, high-performance operations portal.</p>
                </div>
                
                <div className={styles.impactGrid}>
                    <div className={styles.impactCard}>
                        <div className={`${styles.impactCardIcon} ${styles.yellow}`}>
                             <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h4 className={styles.impactCardTitle}>Fragmented Tool Sprawl</h4>
                        <p className={styles.impactCardDesc}>Consolidates separated payroll, attendance, invoicing, and task management subscriptions into a single corporate platform.</p>
                    </div>

                    <div className={styles.impactCard}>
                        <div className={`${styles.impactCardIcon} ${styles.green}`}>
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <h4 className={styles.impactCardTitle}>Operating Cost Leakage</h4>
                        <p className={styles.impactCardDesc}>Provides instant corporate visibility into overhead, contractor, and employee expenses in real time to prevent financial bleed.</p>
                    </div>

                    <div className={styles.impactCard}>
                         <div className={`${styles.impactCardIcon} ${styles.blue}`}>
                             <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                        </div>
                        <h4 className={styles.impactCardTitle}>Ambiguous Performance Metric Evaluation</h4>
                        <p className={styles.impactCardDesc}>Backs corporate decisions, appraisals, and employee promotions with concrete performance slider stats.</p>
                    </div>

                    <div className={styles.impactCard}>
                         <div className={`${styles.impactCardIcon} ${styles.purple}`}>
                             <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <h4 className={styles.impactCardTitle}>Tax Compliance Hurdles</h4>
                        <p className={styles.impactCardDesc}>Avoids regulatory mistakes by introducing structured fields for GSTIN verification and TDS ledger compliance.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
);

export default TaskityDetails;
