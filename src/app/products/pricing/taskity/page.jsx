"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/components/ui/carousel';
import { 
    ShieldCheck, 
    Users, 
    FileText, 
    Zap, 
    TrendingUp, 
    ClipboardCheck, 
    Award, 
    CalendarCheck2, 
    ArrowRight,
    Lock,
    Settings,
    CheckCircle,
    Clock,
    Wallet,
    Layers,
    PhoneCall,
    ChevronDown
} from 'lucide-react';
import PaymentForm from '@/app/_components/products/PaymentForm';
import styles from '../PricingDetail.module.css'; // Reuse container styles
import Autoplay from "embla-carousel-autoplay";
import StackingCards from '@/app/_components/products/StackingCards';

const PLAN_DETAILS = {
    sections: [
        {
            image: "/img/taskity/cropped_01.png",
            title: "Ultimate HRMS & Corporate Portal",
            description: "Taskity bridges the gap between daily human resource tracking, granular financial auditing, and active project execution under a unified corporate operating ecosystem."
        },
        {
            image: "/img/taskity/cropped_02.png",
            title: "Executive Command Center",
            description: "Tracks active project statuses, overall operating costs, and visual goal-tracking progress bars against target revenue milestones in real-time."
        },
        {
            image: "/img/taskity/cropped_03.png",
            title: "Financial Ledger & Payroll Matrix",
            description: "Accountants process CTC, Basic Pay, and HRA payrolls easily while verifying sales/purchase invoices with integrated GST/TDS ledger rules."
        },
        {
            image: "/img/taskity/cropped_04.png",
            title: "Smart Time Clock Attendance",
            description: "Monitors precise punch in/out times, break durations, daily active hours, and generates engagement reports instantly."
        },
        {
            image: "/img/taskity/cropped_05.png",
            title: "Advanced Evaluations & Project Trackers",
            description: "Evaluate core team member competencies using continuous metric sliders and oversee project allocations from Not Started to Under Testing."
        }
    ],
    features: [
        "Super Admin, Executive & Department Manager Portals",
        "Smart Punch Clock with Attendance Red Flags & Idle Tracker",
        "Continuous Competency Metric Rating Sliders (Productivity, Initiative)",
        "Salary Slip Engine with custom CTC & HRA calculators",
        "Tax Invoice Vault (GST / TDS LEDGER) and Reports",
        "Project Lifecycle Pipelines & Task Board orchestrators",
        "White-Label custom branding & deployment settings"
    ],
    technology: ["Next.js", "React", "Node.js", "MySQL Database", "Framer Motion", "Bootstrap Grid", "Lucide Icons"],
    tags: ["HRMS", "Portal", "SaaS", "Operations", "Finance Ledger", "Project Management", "Invoice Vault", "Attendance Clock"]
};

const TaskityDetailPage = () => {
    const router = useRouter();
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [isSupportChecked, setIsSupportChecked] = useState(true);
    const [selectedSubscription, setSelectedSubscription] = useState("");
    
    // Interactive Tab state for deep dive
    const [activeModuleTab, setActiveModuleTab] = useState('command');

    const SUPPORT_COST = 3000;

    // Fetch Plan Data specifically for taskity
    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const response = await fetch('/api/pricing');
                if (response.ok) {
                    const data = await response.json();
                    const foundPlan = data.find(p => p.type === 'taskity');
                    if (foundPlan) {
                        setPlan(foundPlan);
                    } else {
                        router.push('/products/pricing');
                    }
                }
            } catch (error) {
                console.error("Failed to fetch plan", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPlan();
    }, [router]);

    // Carousel State Sync
    useEffect(() => {
        if (!api) return;
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    // Lightbox State
    const [selectedImage, setSelectedImage] = useState(null);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (loading) {
        return (
            <div className={styles.container} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!plan) return null;

    const numericPrice = Number(plan.price.replace(/,/g, ''));
    const displayTotal = (numericPrice + (isSupportChecked ? SUPPORT_COST : 0)).toLocaleString('en-IN');
    const finalPaymentAmount = isSupportChecked 
        ? (Number(plan.amount) + SUPPORT_COST) 
        : Number(plan.amount);

    const slides = plan.sliderImages;

    const cardsData = PLAN_DETAILS.sections.map((section) => ({
        title: section.title,
        description: section.description,
        src: section.image,
        color: '#ffffff',
        url: "#"
    }));

    const renderTabContent = (tabId) => {
        switch (tabId) {
            case 'command':
                return (
                    <div>
                        <span className={styles.detailPillarBadge} style={{ backgroundColor: '#8b5cf615', color: '#8b5cf6' }}>Pillar 01</span>
                        <h3 className={styles.detailTitle}>Command Center & Strategic Goal Tracking</h3>
                        <p className={styles.detailDesc}>Provides executives with immediate macro and micro-level visibility into business health, ensuring company-wide alignment on targets.</p>
                        
                        <div className={`${styles.featuresGrid} ${styles.featuresGridTwoCol}`}>
                            {[
                                { title: "Executive Dashboard", desc: "Tracks live active projects alongside exact monthly operating costs. Visualizes progress towards massive annual financial milestones (e.g., a Rs. 200,000,000 yearly goal)." },
                                { title: "Business Goal Engine", desc: "Create, manage, and track specific business goals across distinct departments to match individual output with company vision." },
                                { title: "Granular Filtering", desc: "Filter corporate goals by specific Financial Years, priority levels, and exact start/end dates to monitor status." },
                                { title: "Target Milestones", desc: "Dedicated modules for defining and monitoring precise Monthly Targets and Yearly Targets to trace recurring overhead and returns." }
                            ].map((card, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <h4 className={styles.featureTitle}>
                                        <span className={styles.bulletDot} style={{ backgroundColor: '#8b5cf6' }}></span>
                                        {card.title}
                                    </h4>
                                    <p className={styles.featureDesc}>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'hrms':
                return (
                    <div>
                        <span className={styles.detailPillarBadge} style={{ backgroundColor: '#3b82f615', color: '#3b82f6' }}>Pillar 02</span>
                        <h3 className={styles.detailTitle}>Advanced HRMS & Time Tracking</h3>
                        <p className={styles.detailDesc}>Eliminate manual timesheets and leave requests. Taskity automates employee time tracking and applies structured logic to your HR policies.</p>
                        
                        <div className={styles.featuresGrid}>
                            {[
                                { title: "Smart Attendance Console", desc: "Employees can log in to start their day, log specific break times, flag idle times, and securely log out." },
                                { title: "Audit-Ready Time Logs", desc: "The system records exact login/logout timestamps, calculates total break time, and generates 'Red Flags' for attendance anomalies." },
                                { title: "Automated Leave Workflows", desc: "Staff can view their total paid leaves remaining, apply for specific dates (e.g., Full-day leaves), and submit detailed reasoning. HR and management can view pending queues and approve/reject requests seamlessly." },
                                { title: "Global Attendance Settings", desc: "Define the total number of paid annual leaves for the company and automate the 'Yearly' reset cycle for the entire workforce." },
                                { title: "Engagement Analytics", desc: "Generate precise 'Employee Engagement Reports' to track and analyze working hours across custom date ranges." }
                            ].map((card, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <h4 className={styles.featureTitle}>
                                        <span className={styles.bulletDot} style={{ backgroundColor: '#3b82f6' }}></span>
                                        {card.title}
                                    </h4>
                                    <p className={styles.featureDesc}>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'directory':
                return (
                    <div>
                        <span className={styles.detailPillarBadge} style={{ backgroundColor: '#f59e0b15', color: '#f59e0b' }}>Pillar 03</span>
                        <h3 className={styles.detailTitle}>Employee Directory & Performance Matrix</h3>
                        <p className={styles.detailDesc}>Manage your workforce dynamically, from onboarding documentation to detailed, metric-driven appraisal cycles.</p>
                        
                        <div className={`${styles.featuresGrid} ${styles.featuresGridTwoCol}`}>
                            {[
                                { title: "Comprehensive Profiles", desc: "Track vital staff data including Job Position, assigned Employee IDs, secure login emails, initial Join Dates, and Next Appraisal Dates." },
                                { title: "Configurable Evaluation Metrics", desc: "Admins can customize performance scoring boundaries, setting numerical thresholds for 'Good' (e.g., 8), 'Average' (e.g., 7), and 'Bad' (e.g., 4) ratings." },
                                { title: "Visual Metric Sliders", desc: "Managers evaluate staff utilizing dynamic sliders across four core competencies: Productivity, Initiative Taking, Technical Skills, and Learning Skills." },
                                { title: "Automated Categorization", desc: "The system calculates a total and average score to automatically assign a performance level (e.g., Needs Improvement, Average, or Excellent)." }
                            ].map((card, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <h4 className={styles.featureTitle}>
                                        <span className={styles.bulletDot} style={{ backgroundColor: '#f59e0b' }}></span>
                                        {card.title}
                                    </h4>
                                    <p className={styles.featureDesc}>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'finance':
                return (
                    <div>
                        <span className={styles.detailPillarBadge} style={{ backgroundColor: '#10b98115', color: '#10b981' }}>Pillar 04</span>
                        <h3 className={styles.detailTitle}>Financial Ledger, Payroll & Tax Compliance</h3>
                        <p className={styles.detailDesc}>Taskity is built to handle complex corporate ledgers, ensuring external vendor payouts, internal payroll, and government tax compliance are tightly managed.</p>
                        
                        <div className={styles.featuresGrid}>
                            {[
                                { title: "Automated Salary Processing", desc: "Generate professional, printable salary slips dynamically. The system breaks down Total CTC into specific categories like Monthly In-Hand Salary, Basic Pay, and HRA (House Rent Allowance)." },
                                { title: "Invoice Command Center", desc: "Generate and track Sales and Purchase Invoices across financial years. The ledger breaks down exact Taxable Amounts alongside specific client and company GST metrics." },
                                { title: "Expense & Revenue Auditing", desc: "Track revenue payment modes and sources. Record deep expense details, highlighting precise TDS Deductions and GST Transactions attached to uploaded invoice files." },
                                { title: "Granular Corporate Expenses", desc: "Track overhead safely by categorizing monthly cash flows into distinct buckets: Permanent Employees, Employees on Contract, Companies on Contract, and external CA Consultancies." },
                                { title: "Regulatory Readiness", desc: "Dedicated modules to input bank details (IFSC, SWIFT) and register company tax structures requiring 15-character GST numbers and exact LUT format tracking. Auto-pull GST and TDS tax reports." }
                            ].map((card, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <h4 className={styles.featureTitle}>
                                        <span className={styles.bulletDot} style={{ backgroundColor: '#10b981' }}></span>
                                        {card.title}
                                    </h4>
                                    <p className={styles.featureDesc}>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'projects':
                return (
                    <div>
                        <span className={styles.detailPillarBadge} style={{ backgroundColor: '#e11d4815', color: '#e11d48' }}>Pillar 05</span>
                        <h3 className={styles.detailTitle}>Project Orchestration & Task Delegation</h3>
                        <p className={styles.detailDesc}>Keep deliverables on schedule and under budget with interconnected project and task orchestration hubs.</p>
                        
                        <div className={`${styles.featuresGrid} ${styles.featuresGridTwoCol}`}>
                            {[
                                { title: "Project Lifecycle Tracking", desc: "View initiatives through distinct pipelines: All, Active, On-Hold, and Closed. Track the assigned client, billing type (e.g. Fixed-Price), overall cost, and hard start/end deadlines." },
                                { title: "Task Workflows", desc: "Break large projects down and assign discrete tasks to specific team members. Track task priority (e.g. High) and monitor progression across distinct phases: Not Started, In Progress, Under Testing, Completed, On-hold, and Closed." }
                            ].map((card, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <h4 className={styles.featureTitle}>
                                        <span className={styles.bulletDot} style={{ backgroundColor: '#e11d48' }}></span>
                                        {card.title}
                                    </h4>
                                    <p className={styles.featureDesc}>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'crm':
                return (
                    <div>
                        <span className={styles.detailPillarBadge} style={{ backgroundColor: '#06b6d415', color: '#06b6d4' }}>Pillar 06</span>
                        <h3 className={styles.detailTitle}>CRM & Lead Management</h3>
                        <p className={styles.detailDesc}>Maintain a dedicated roster of incoming business leads and schedule active follow-up pipelines to prevent dropped deals.</p>
                        
                        <div className={`${styles.featuresGrid} ${styles.featuresGridTwoCol}`}>
                            {[
                                { title: "Sales Pipeline", desc: "Maintain a dedicated roster of incoming business leads. Track country of origin, attach file specifications, and write custom remarks." },
                                { title: "Conversion Tracking", desc: "Schedule Last Follow-Up and Next Follow-Up dates to prevent dropped leads. Monitor Lead Status alongside the ultimate Client Status (e.g. Converted, Active, Inactive)." }
                            ].map((card, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <h4 className={styles.featureTitle}>
                                        <span className={styles.bulletDot} style={{ backgroundColor: '#06b6d4' }}></span>
                                        {card.title}
                                    </h4>
                                    <p className={styles.featureDesc}>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'admin':
                return (
                    <div>
                        <span className={styles.detailPillarBadge} style={{ backgroundColor: '#64748b15', color: '#64748b' }}>Pillar 07</span>
                        <h3 className={styles.detailTitle}>Architecture & System Administration</h3>
                        <p className={styles.detailDesc}>Taskity provides ultimate flexibility for scaling organizations through uncompromising structural controls.</p>
                        
                        <div className={styles.featuresGrid}>
                            {[
                                { title: "Granular RBAC maps", desc: "Move beyond simple admin/user dynamics. Create highly specific User Roles (e.g., Business Admin, Super Admin, Manager, Team Lead, Freelancer, Intern, Contractual)." },
                                { title: "Department-Level Permissions", desc: "Assign access maps based on specific departments such as HR, Network Security, Sales, IT, Marketing, or Accounts." },
                                { title: "Dynamic Menu Configurations", desc: "Administrators can explicitly grant or restrict visibility to exact system Features and Sub-Features (e.g., restricting a freelancer from seeing 'Operating Costs' or 'Bank Details') ensuring airtight internal data security." }
                            ].map((card, i) => (
                                <div key={i} className={styles.featureCard}>
                                    <h4 className={styles.featureTitle}>
                                        <span className={styles.bulletDot} style={{ backgroundColor: '#64748b' }}></span>
                                        {card.title}
                                    </h4>
                                    <p className={styles.featureDesc}>{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                
                {/* Back Button */}
                <button 
                    onClick={() => router.back()} 
                    className={styles.backButton}
                    style={{marginBottom: '10px'}}
                >
                    <svg className={styles.backIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Products
                </button>

                <div className={styles.layoutGrid}>
                    
                    {/* Left Column: Media / Carousel */}
                    <div className={styles.mediaWrapper}>
                        <div className={styles.stickyWrapper}>
                            <div className={styles.carouselContainer}>
                                <div className={`${styles.gradientEdge} ${styles.gradientLeft}`} />
                                <div className={`${styles.gradientEdge} ${styles.gradientRight}`} />
                                
                                <Carousel 
                                    setApi={setApi} 
                                    opts={{ loop: true }} 
                                    plugins={[
                                        Autoplay({
                                            delay: 4000,
                                        }),
                                    ]}
                                    className="w-full"
                                >
                                    <CarouselContent>
                                        {slides.map((slide, index) => (
                                            <CarouselItem key={index}>
                                                <div 
                                                    className={`${styles.carouselItemBox} group`}
                                                    onClick={() => setSelectedImage(slide.src)}
                                                >
                                                    <img 
                                                        src={slide.src} 
                                                        alt={slide.alt} 
                                                        className={styles.carouselImage}
                                                    />
                                                    <div className={styles.carouselOverlay}>
                                                        <svg className={styles.zoomIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className={`${styles.navArrow} ${styles.navArrowPrev}`} />
                                    <CarouselNext className={`${styles.navArrow} ${styles.navArrowNext}`} />
                                </Carousel>
                            </div>
                            
                            {/* Thumbnails Carousel */}
                            <div className={styles.thumbnailCarouselWrapper}>
                                <Carousel 
                                    setApi={() => {}}
                                    opts={{ 
                                        align: "start",
                                        dragFree: true,
                                        containScroll: "trimSnaps"
                                    }} 
                                    className="w-full"
                                >
                                    <CarouselContent className={styles.thumbnailContent}>
                                        {slides.map((slide, index) => (
                                            <CarouselItem key={index} className={styles.thumbnailItem}>
                                                <button
                                                    onClick={() => api?.scrollTo(index)}
                                                    className={`${styles.thumbnailBtn} ${
                                                        current === index 
                                                        ? styles.thumbActive 
                                                        : styles.thumbInactive
                                                    }`}
                                                >
                                                    <img 
                                                        src={slide.src} 
                                                        alt={`View ${index + 1}`} 
                                                        className={styles.thumbnailImg}
                                                    />
                                                </button>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            </div>
                        </div>

                        {/* Mobile Payment Form */}
                        <div className={styles.mobilePaymentContainer}>
                            <div className={styles.paymentSection} style={{ padding: '20px' }}>
                                <h2 className={styles.checkoutTitle}>
                                    Starting From ₹25,000
                                </h2>
                                <p className={styles.pricingSubText}>
                                    *For basic features. Price increases with advanced modules.
                                </p>
                                <PaymentForm 
                                    plan={plan}
                                    isSupportChecked={isSupportChecked}
                                    setIsSupportChecked={setIsSupportChecked}
                                    totalAmount={finalPaymentAmount}
                                    displayTotal={displayTotal}
                                    selectedSubscription={selectedSubscription}
                                />
                            </div>
                        </div>

                        {/* Product Header */}
                        <div className={styles.header}>
                            <h1 className={styles.title}>
                                {plan.title}
                            </h1>
                            <p className={styles.description}>
                                Connect your HR operations, project execution, and financial payroll systems under one secure white-labeled environment. Built specifically for growing agencies and enterprise startups.
                            </p>
                        </div>

                        <div className={styles.productDescSection}>
                            <StackingCards data={cardsData} />
                        </div>

                        {/* Custom Detailed Modules - Interactive 7-Pillar Explorer */}
                        <div className={styles.explorerContainer}>
                            <div className={styles.explorerHeader}>
                                <span className={styles.explorerBadge}>Feature Architecture</span>
                                <h2 className={styles.explorerTitle}>Deep-Dive Feature Architecture</h2>
                                <p className={styles.explorerDesc}>Explore the complete operating system modules designed to run modern corporate workflows.</p>
                            </div>
                            
                            {/* Desktop Explorer View (Sidebar + Pane Layout) */}
                            <div className={styles.desktopExplorer}>
                                <div className={styles.explorerLayout}>
                                    {/* Vertical Tabs Sidebar (Left) */}
                                    <div className={styles.sidebar}>
                                        {[
                                            { id: 'command', label: 'Command & Goals', icon: TrendingUp, color: '#8b5cf6', subtitle: 'Strategic Command Center' },
                                            { id: 'hrms', label: 'HRMS & Time tracking', icon: Clock, color: '#3b82f6', subtitle: 'Attendance & Leave Workflows' },
                                            { id: 'directory', label: 'Employee & Appraisals', icon: Users, color: '#f59e0b', subtitle: 'Profiles & Rating Sliders' },
                                            { id: 'finance', label: 'Ledger & Payroll', icon: Wallet, color: '#10b981', subtitle: 'CTC, Invoices & Tax Audit' },
                                            { id: 'projects', label: 'Project Orchestration', icon: Layers, color: '#e11d48', subtitle: 'Pipelines & Tasks Delegation' },
                                            { id: 'crm', label: 'CRM & Leads Management', icon: PhoneCall, color: '#06b6d4', subtitle: 'Sales Pipeline & Conversion' },
                                            { id: 'admin', label: 'System Administration', icon: ShieldCheck, color: '#64748b', subtitle: 'RBAC Permissions & Menu Config' }
                                        ].map((tab) => {
                                            const IconComponent = tab.icon;
                                            const isActive = activeModuleTab === tab.id;
                                            return (
                                                <button
                                                    key={tab.id}
                                                    onClick={() => setActiveModuleTab(tab.id)}
                                                    className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                                                >
                                                    <div 
                                                        className={styles.tabIconWrapper}
                                                        style={{ 
                                                            backgroundColor: isActive ? tab.color : '',
                                                            color: isActive ? '#ffffff' : ''
                                                        }}
                                                    >
                                                        <IconComponent size={16} />
                                                    </div>
                                                    <div className={styles.tabText}>
                                                        <span className={styles.tabLabel}>{tab.label}</span>
                                                        <span className={styles.tabSubtitle}>{tab.subtitle}</span>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Active Tab Contents (Right) */}
                                    <div className={styles.detailPane}>
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeModuleTab}
                                                initial={{ opacity: 0, x: 15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -15 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {renderTabContent(activeModuleTab)}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Explorer View (Collapsible Accordion Layout) */}
                            <div className={styles.mobileExplorer}>
                                {[
                                    { id: 'command', label: 'Command & Goals', icon: TrendingUp, color: '#8b5cf6', subtitle: 'Strategic Command Center' },
                                    { id: 'hrms', label: 'HRMS & Time tracking', icon: Clock, color: '#3b82f6', subtitle: 'Attendance & Leave Workflows' },
                                    { id: 'directory', label: 'Employee & Appraisals', icon: Users, color: '#f59e0b', subtitle: 'Profiles & Rating Sliders' },
                                    { id: 'finance', label: 'Ledger & Payroll', icon: Wallet, color: '#10b981', subtitle: 'CTC, Invoices & Tax Audit' },
                                    { id: 'projects', label: 'Project Orchestration', icon: Layers, color: '#e11d48', subtitle: 'Pipelines & Tasks Delegation' },
                                    { id: 'crm', label: 'CRM & Leads Management', icon: PhoneCall, color: '#06b6d4', subtitle: 'Sales Pipeline & Conversion' },
                                    { id: 'admin', label: 'System Administration', icon: ShieldCheck, color: '#64748b', subtitle: 'RBAC Permissions & Menu Config' }
                                ].map((tab, idx) => {
                                    const IconComponent = tab.icon;
                                    const isOpen = activeModuleTab === tab.id;
                                    return (
                                        <div 
                                            key={tab.id} 
                                            className={`${styles.accordionItem} ${isOpen ? styles.accordionItemOpen : ''}`}
                                            style={{ borderColor: isOpen ? tab.color + '30' : '' }}
                                        >
                                            <button 
                                                className={styles.accordionHeader} 
                                                onClick={() => setActiveModuleTab(isOpen ? null : tab.id)}
                                                style={{ 
                                                    borderBottom: isOpen ? '1px solid #f1f5f9' : 'none'
                                                }}
                                            >
                                                <div className={styles.accordionHeaderLeft}>
                                                    <div 
                                                        className={styles.accordionIconWrapper}
                                                        style={{ 
                                                            backgroundColor: tab.color + '15', 
                                                            color: tab.color 
                                                        }}
                                                    >
                                                        <IconComponent size={18} />
                                                    </div>
                                                    <div className={styles.accordionText}>
                                                        <span className={styles.accordionLabel}>{tab.label}</span>
                                                        <span className={styles.accordionSubtitle}>{tab.subtitle}</span>
                                                    </div>
                                                </div>
                                                <div 
                                                    className={styles.accordionChevron}
                                                    style={{ 
                                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                        color: isOpen ? tab.color : '#64748b'
                                                    }}
                                                >
                                                    <ChevronDown size={18} />
                                                </div>
                                            </button>
                                            
                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        <div className={styles.accordionContentInner}>
                                                            {renderTabContent(tab.id)}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Agency Benefits Checklist */}
                        <div className={styles.complianceSection}>
                            <div className={styles.lockBgIcon}>
                                <Lock size={180} />
                            </div>
                            <span className={styles.complianceBadge}>Security & Compliance</span>
                            <h3 className={styles.complianceTitle}>Airtight Corporate Audits</h3>
                            <p className={styles.complianceDesc}>Taskity is engineered with absolute transaction accountability. Designed to stand up to corporate tax reviews and audits.</p>
                            
                            <div className={styles.complianceGrid}>
                                {[
                                    "Airtight ledger logs tracing contractor payments vs employee CTC matrices.",
                                    "GST tax calculations dynamically generated for direct sales invoice audits.",
                                    "Break-hour punch details log to cross-validate developer project time sheets.",
                                    "White-labeled domain hosting supporting advanced corporate access logs."
                                ].map((item, i) => (
                                    <div key={i} className={styles.complianceItem}>
                                        <CheckCircle className={styles.complianceIcon} size={18} />
                                        <span className={styles.complianceText}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features & Technologies */}
                        <div className={styles.paymentSection} style={{ padding: '20px', marginTop: '20px' }}>
                            <div className={styles.sectionHeading} style={{ fontSize: '1.2rem', marginBottom: '10px', marginTop: '0' }}>Features</div>
                            <ul className={styles.bulletList} style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                                {PLAN_DETAILS.features.map((feature, idx) => (
                                    <li key={idx} style={{ marginBottom: '8px' }}>{feature}</li>
                                ))}
                            </ul>

                            <div className={styles.sectionHeading} style={{ fontSize: '1.2rem', marginBottom: '10px', marginTop: '0' }}>Technologies Used</div>
                            <ul className={styles.bulletList} style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                                {PLAN_DETAILS.technology.map((tech, idx) => (
                                    <li key={idx} style={{ marginBottom: '8px' }}>{tech}</li>
                                ))}
                            </ul>

                            <div className={styles.sectionHeading} style={{ fontSize: '1.2rem', marginBottom: '10px', marginTop: '0' }}>Item Tags</div>
                            <div className={styles.tagsContainer} style={{ fontSize: '0.8rem' }}>
                                {PLAN_DETAILS.tags.map((tag, idx) => (
                                    <span key={idx} className={styles.tagChip} style={{ padding: '4px 8px', margin: '0 4px 4px 0' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Checkout */}
                    <div className={styles.detailsWrapper}>
                        <div className={styles.paymentSection} style={{ padding: '20px' }}>
                            <h2 className={styles.checkoutTitle}>
                                Starting From ₹25,000
                            </h2>
                            <p className={styles.pricingSubText}>
                                *For basic features. Price increases with advanced modules.
                            </p>
                            <PaymentForm 
                                plan={plan}
                                isSupportChecked={isSupportChecked}
                                setIsSupportChecked={setIsSupportChecked}
                                totalAmount={finalPaymentAmount}
                                displayTotal={displayTotal}
                                selectedSubscription={selectedSubscription}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Lightbox */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={styles.lightboxOverlay}
                            onClick={() => setSelectedImage(null)}
                        >
                            <button 
                                className={styles.lightboxCloseBtn}
                                onClick={() => setSelectedImage(null)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <motion.img 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                src={selectedImage} 
                                alt="Full screen view" 
                                className={styles.lightboxImage}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default TaskityDetailPage;
