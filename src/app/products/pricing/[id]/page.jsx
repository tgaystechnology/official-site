"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import PaymentForm from '@/app/_components/products/PaymentForm';
import styles from './PricingDetail.module.css';

// Helper to format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount).replace('₹', '₹ ');
};

const PLAN_DETAILS = {
    basic: {
        description: "Hy-Shop UI Ecommerce Design is a Ecommerce Design created for Adobe Figma and XD. Full of nice UI elements, placed in 32+ modern screens.",
        features: [
            "Vector based & well organized",
            "Modern & Clean Design",
            "Compatible with Adobe XD, Figma",
            "32+ Screens",
            "Easily Scalable & Customizable",
            "Use Free Font"
        ],
        files: ["Adobe XD", "Figma", "Notes"],
        tags: ["Mobile", "App", "Ui", "Ux", "Kits", "Illustration", "Clean", "Branding", "Application", "Icons", "Template", "Corporate", "Business", "Screen", "Ecommerce"]
    },
    standard: {
        description: "Hy-Shop UI Ecommerce Design is a Ecommerce Design created for Adobe Figma and XD. Full of nice UI elements, placed in 32+ modern screens.",
        features: [
            "Vector based & well organized",
            "Modern & Clean Design",
            "Compatible with Adobe XD, Figma",
            "32+ Screens",
            "Easily Scalable & Customizable",
            "Use Free Font"
        ],
        files: ["Adobe XD", "Figma", "Notes"],
        tags: ["Mobile", "App", "Ui", "Ux", "Kits", "Illustration", "Clean", "Branding", "Application", "Icons", "Template", "Corporate", "Business", "Screen", "Ecommerce"]
    },
    premium: {
        description: "Hy-Shop UI Ecommerce Design is a Ecommerce Design created for Adobe Figma and XD. Full of nice UI elements, placed in 32+ modern screens.",
        features: [
            "Vector based & well organized",
            "Modern & Clean Design",
            "Compatible with Adobe XD, Figma",
            "32+ Screens",
            "Easily Scalable & Customizable",
            "Use Free Font"
        ],
        files: ["Adobe XD", "Figma", "Notes"],
        tags: ["Mobile", "App", "Ui", "Ux", "Kits", "Illustration", "Clean", "Branding", "Application", "Icons", "Template", "Corporate", "Business", "Screen", "Ecommerce"]
    }
};

const ProductDescription = ({ planType }) => {
    const details = PLAN_DETAILS[planType] || PLAN_DETAILS.basic;

    return (
        <div className={styles.productDescSection}>
            <div className={styles.sectionHeading}>Description</div>
            <p className={styles.descText}>
                {details.description}
            </p>

            <div className={styles.sectionHeading}>Features</div>
            <ul className={styles.bulletList}>
                {details.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                ))}
            </ul>

            <div className={styles.sectionHeading}>Include Files</div>
            <ul className={styles.bulletList}>
                {details.files.map((file, idx) => (
                    <li key={idx}>{file}</li>
                ))}
            </ul>

            <div className={styles.sectionHeading}>Item Tags</div>
            <div className={styles.tagsContainer}>
                {details.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tagChip}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const PricingDetailPage = () => {
    const params = useParams();
    const router = useRouter();
    const { id } = params;
    
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);
    const [isSupportChecked, setIsSupportChecked] = useState(true);

    const SUPPORT_COST = 3000;

    // Fetch Plan Data
    useEffect(() => {
        const fetchPlan = async () => {
            try {
                // In a real app, you might have a specific API for fetching by ID, 
                // but here we'll fetch all and filter since it's a small list.
                const response = await fetch('/api/pricing');
                if (response.ok) {
                    const data = await response.json();
                    const foundPlan = data.find(p => p.type === id);
                    if (foundPlan) {
                        setPlan(foundPlan);
                    } else {
                        // Handle not found
                        router.push('/products/pricing');
                    }
                }
            } catch (error) {
                console.error("Failed to fetch plan", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPlan();
        }
    }, [id, router]);

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

    // Derived State
    const baseAmount = Number(plan.amount);
    const totalAmount = isSupportChecked ? baseAmount + (SUPPORT_COST * 100) : baseAmount;
    
    // Consistent Display Logic
    const numericPrice = Number(plan.price.replace(/,/g, ''));
    const displayTotal = (numericPrice + (isSupportChecked ? SUPPORT_COST : 0)).toLocaleString('en-IN');
    
    const finalPaymentAmount = isSupportChecked 
        ? (Number(plan.amount) + SUPPORT_COST) 
        : Number(plan.amount);


    const slides = [
        { src: plan.img, alt: plan.title },
        // Placeholder images as per original file
        { src: "https://images.unsplash.com/photo-1759395073808-17782f3d8d66?q=80&w=1471&auto=format&fit=crop", alt: "Slide 2" },
        { src: "https://images.unsplash.com/photo-1759434192768-fe3facebd5f6?q=80&w=1471&auto=format&fit=crop", alt: "Slide 3" },
        { src: "https://images.unsplash.com/photo-1618220649687-ba860f3176e7?q=80&w=1474&auto=format&fit=crop", alt: "Slide 4" },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                
                {/* Back Button / Breadcrumb */}
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
                                <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
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
                                </Carousel>
                            </div>
                            
                            {/* Thumbnails */}
                            <div className={styles.thumbnails}>
                                {slides.map((slide, index) => (
                                    <button
                                        key={index}
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
                                ))}
                            </div>
                            </div>


                         {/* Product Description Section */}
                         <ProductDescription planType={plan.type} />
                    </div>

                    {/* Right Column: Details & Checkout */}
                    <div className={styles.detailsWrapper}>
                        
                        {/* Header */}
                        <div className={styles.header}>
                            <h1 className={styles.title}>
                                {plan.title}
                            </h1>
                            <div className={styles.priceContainer}>
                                <span className={styles.price}>
                                    ₹{plan.price}
                                </span>
                                <span className={styles.period}>/month</span>
                            </div>
                            <p className={styles.description}>
                                Get started with our {plan.title}. Includes premium features, dedicated resources, and everything you need to scale your business effectively.
                            </p>
                        </div>



                        {/* Payment Section (Card-like container) */}
                        <div className={styles.paymentSection} style={{ padding: '20px' }}>
                            <h2 className={styles.checkoutTitle}>
                                Complete your subscription
                            </h2>
                            
                            <PaymentForm 
                                plan={plan}
                                isSupportChecked={isSupportChecked}
                                setIsSupportChecked={setIsSupportChecked}
                                totalAmount={finalPaymentAmount}
                                displayTotal={displayTotal}
                            />
                            
                            <p className={styles.secureText}>
                                Secure payment via Razorpay. Cancel anytime.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* Lightbox Overlay */}
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
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                            />
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
};

export default PricingDetailPage;
