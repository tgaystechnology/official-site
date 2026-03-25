"use client";
import React, { useState } from 'react';
import { 
    Users, 
    GraduationCap, 
    ShieldCheck, 
    CalendarCheck2, 
    Award, 
    BookOpen, 
    ClipboardCheck, 
    Trophy, 
    MessageSquareQuote,
    LayoutDashboard,
    FileText,
    BrainCircuit,
    History,
    TrendingUp,
    Zap,
    CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProductHighlights.module.css';

const INTERFACES = [
    {
        id: 'instructor',
        label: 'Instructor Interface',
        icon: GraduationCap,
        color: '#3b82f6', // blue
        features: [
            { title: "Batch Scheduling", description: "Schedule online classes in batches with ease.", icon: CalendarCheck2 },
            { title: "Performance Evaluation", description: "In-depth tools to evaluate student academic progress.", icon: TrendingUp },
            { title: "Quiz Creation", description: "Easily design and assign interactive quizzes.", icon: ClipboardCheck },
            { title: "Competitive Hackathons", description: "Conduct time-restricted competitive coding events.", icon: Trophy },
            { title: "Material Sharing", description: "Share study resources and documents instantly.", icon: BookOpen },
            { title: "Attendance Tracking", description: "Automated student attendance capturing system.", icon: Users },
            { title: "Live Class Notes", description: "AI-powered generation of live class highlights.", icon: FileText }
        ]
    },
    {
        id: 'student',
        label: 'Student Interface',
        icon: Users,
        color: '#10b981', // emerald
        features: [
            { title: "Real-time Live Classes", description: "Join live interactive sessions with instructors.", icon: Zap },
            { title: "Personalized Dashboard", description: "Track progress, schedules, and assessments.", icon: LayoutDashboard },
            { title: "AI-Assisted Quizzes", description: "Take quizzes with help from an AI Avatar.", icon: BrainCircuit },
            { title: "Gamified Hackathons", description: "Engage in timed contests with AI assistance.", icon: Award },
            { title: "Curated Courses", description: "Browse and enroll in high-quality learning paths.", icon: BookOpen },
            { title: "Progress Analytics", description: "Visualize your learning journey and growth.", icon: History },
            { title: "Gamified Engagement", description: "Learn better with points, badges, and rewards.", icon: Trophy },
            { title: "AI Learning Mentor", description: "Personalized assistance tailored to your needs.", icon: MessageSquareQuote }
        ]
    },
    {
        id: 'superadmin',
        label: 'Superadmin Interface',
        icon: ShieldCheck,
        color: '#8b5cf6', // purple
        features: [
            { title: "Revenue Analytics", description: "Centralized tracking of revenue and platform growth.", icon: TrendingUp },
            { title: "System Analytics", description: "Monitor global platform usage and performance.", icon: LayoutDashboard },
            { title: "User Management", description: "Complete control over all platform participants.", icon: Users },
            { title: "Global Security", description: "Advanced protection for all academic data.", icon: ShieldCheck }
        ]
    }
];

const ProductHighlights = () => {
    const [activeTab, setActiveTab] = useState(INTERFACES[0].id);

    const activeInterface = INTERFACES.find(i => i.id === activeTab);

    return (
        <div className={styles.container}>
            <div className={styles.headerArea}>
                <h2 className={styles.sectionTitle}>Product <span className={styles.highlightText}>Highlights</span></h2>
                <p className={styles.sectionSubtitle}>Explore the powerful features designed for every role in your educational ecosystem.</p>
            </div>

            {/* Tab Navigation */}
            <div className={styles.tabContainer}>
                {INTERFACES.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`${styles.tabButton} ${activeTab === item.id ? styles.activeTab : ''}`}
                        style={{ '--hover-color': item.color }}
                    >
                        <item.icon className={styles.tabIcon} size={20} />
                        <span className={styles.tabLabel}>{item.label}</span>
                        {activeTab === item.id && (
                            <motion.div 
                                layoutId="activeTabUnderline" 
                                className={styles.tabUnderline}
                                style={{ backgroundColor: item.color }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className={styles.contentArea}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={styles.featureGrid}
                    >
                        {activeInterface.features.map((feature, idx) => (
                            <div key={idx} className={styles.featureCard}>
                                <div 
                                    className={styles.iconWrapper}
                                    style={{ backgroundColor: `${activeInterface.color}15`, color: activeInterface.color }}
                                >
                                    <feature.icon size={22} />
                                </div>
                                <div className={styles.featureInfo}>
                                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                                <div className={styles.checkMarker}>
                                    <CheckCircle2 size={16} />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            
            {/* Callout */}
            <div className={styles.callout}>
                <div className={styles.calloutIcon}>
                    <ShieldCheck size={24} />
                </div>
                <div className={styles.calloutText}>
                    Integrated with secure payment & AI-driven assessment logic.
                </div>
            </div>
        </div>
    );
};

export default ProductHighlights;
