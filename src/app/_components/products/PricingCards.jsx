"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import './PricingCards.css';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogContainer,
  DialogImage,
  DialogTitle,
  DialogSubtitle,
  DialogDescription,
  DialogClose,
} from '@/components/uilayouts/linear-modal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
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
import { motion, AnimatePresence } from 'motion/react';

import PaymentStatusModal from './PaymentStatusModal';

const INTERFACES = [
    {
        id: 'instructor',
        label: 'Instructor',
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
        label: 'Student',
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
        label: 'Superadmin',
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

// Removed loadRazorpay function

const PricingModal = ({ plan }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, type: 'success' });
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  // Form refs
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  
  // Added useEffect for carousel API
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Added handleThumbnailClick function
  const handleThumbnailClick = (index) => {
    api?.scrollTo(index);
  };

  // Added slides array
  // Use dynamic slides from plan or fallback
  const slides = plan.sliderImages || [
    // { src: plan.img, alt: plan.title },
    { src: "/img/admin-dashboard.png", alt: "Admin Dashboard" },
    { src: "/img/admin-dashboard-2.png", alt: "Admin Dashboard 2" },
    { src: "/img/class-schedule.png", alt: "Class Schedule" },
    { src: "/img/instructor.png", alt: "Instructor" },
    { src: "/img/language-selection.png", alt: "Language Selection" },
    { src: "/img/quiz-selection.png", alt: "Quiz Selection" },
    { src: "/img/student-home-page.png", alt: "Student Home Page" },
    { src: "/img/quiz-protector.png", alt: "Quiz Protector" },
    { src: "/img/ai-hints.png", alt: "AI Hints" },
    { src: "/img/quiz-servilance.png", alt: "Quiz Surveillance" },
  ];

  const [isSupportChecked, setIsSupportChecked] = useState(true);
  const SUPPORT_COST = 3000;

  const totalAmount = isSupportChecked 
      ? (Number(plan.amount) + SUPPORT_COST) 
      : Number(plan.amount);

  const displayTotal = isSupportChecked
      ? (Number(plan.price.replace(/,/g, '')) + SUPPORT_COST).toLocaleString('en-IN')
      : plan.price;

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
    if (modalState.type === 'success') {
         window.location.reload(); // Reload after success modal closed
    }
  };

  const [errors, setErrors] = useState({});

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({}); // Clear previous errors

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!email) newErrors.email = true;
    if (!phone) newErrors.phone = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Send the user's data to the new lead collection endpoint
      const leadData = {
          full_name: name,
          email: email,
          phone: phone,
          note: `Interested in the ${plan?.title || 'Unknown Plan'} (Quick Preview Lead)`
      };

      const result = await fetch('https://lmsadmin.tgaystechnology.com/api/leads/collect/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
      });

      const data = await result.json();

      if (!result.ok) {
          console.error("DEBUG: API Response Error Details:", data);
          throw new Error(data.message || data.error || 'Failed to submit lead');
      }

      setLoading(false);
      setModalState({ isOpen: true, type: 'success' });

    } catch (error) {
      console.error('Error submitting lead:', error);
      setLoading(false);
      setModalState({ isOpen: true, type: 'failure' });
    }
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
     setMounted(true);
  }, []);

  return (
    <>
      <Dialog 
          transition={{
              type: "spring",
              bounce: 0.05,
              duration: 0.25,
          }}
      >
        <DialogTrigger className="pricing-trigger-wrapper">
          <button className={`btn btn-primary btn-round ${plan.btnClass} pricing-trigger-btn-override`}>
            Quick Preview
          </button>
        </DialogTrigger>
        
        <DialogContainer>
          <DialogContent
              className="pricing-modal-content"
          >
            {/* Close Button */}
            <DialogClose className="pricing-modal-close">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </DialogClose>
            
            <div className="pricing-modal-layout">
              {/* Left/Top Panel: Carousel / Dark Side */}
              <div className="pricing-modal-left">
                  <div className="pricing-modal-left-bg" />
                  <div className="pricing-modal-left-content">
                      <div className="pricing-modal-carousel-wrapper">
                          <Carousel setApi={setApi} opts={{ loop: false }} className="pricing-carousel">
                              <CarouselContent className="pricing-carousel-content">
                                  {slides.map((slide, index) => (
                                      <CarouselItem key={index} className="pricing-carousel-item">
                                          <div 
                                            className="pricing-carousel-item-wrapper"
                                            onClick={() => setSelectedImage(slide.src)}
                                          >
                                            <img
                                                src={slide.src}
                                                alt={slide.alt}
                                                className="pricing-carousel-img"
                                            />
                                          </div>
                                      </CarouselItem>
                                  ))}
                              </CarouselContent>
                              
                              {/* Draggable Thumbnail Slider */}
                              <div className="pricing-thumbnail-carousel-wrapper">
                                  <Carousel
                                      setApi={() => {}}
                                      opts={{ 
                                          align: "start", 
                                          dragFree: true,
                                          containScroll: "trimSnaps" 
                                      }}
                                      className="pricing-thumbnail-carousel"
                                  >
                                      <CarouselContent className="pricing-thumbnail-content">
                                          {slides.map((slide, index) => (
                                              <CarouselItem key={index} className="pricing-thumbnail-item">
                                                  <button
                                                      onClick={() => handleThumbnailClick(index)}
                                                      className={`pricing-thumbnail-btn ${
                                                          current === index 
                                                          ? 'active' 
                                                          : ''
                                                      }`}
                                                  >
                                                      <img 
                                                          src={slide.src} 
                                                          alt={`Thumbnail ${index + 1}`}
                                                          className="pricing-thumbnail-img"
                                                      />
                                                  </button>
                                              </CarouselItem>
                                          ))}
                                      </CarouselContent>
                                  </Carousel>
                              </div>
                          </Carousel>
                          
                      </div>
                  </div>
              </div>

              {/* Right/Bottom Panel: Content */}
              <div className="pricing-modal-right">
                  <AnimatePresence mode='wait'>
                      {step === 1 ? (
                          <motion.div 
                              key="step1"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="pricing-modal-step"
                          >
                              <div 
                                  className="flex-1 overflow-y-auto scrollbar-hide"
                                  style={{ padding: '3rem 3rem 2rem 2rem' }} 
                              >
                                  <DialogTitle className="pricing-modal-title mb-4">
                                      {plan.title}
                                  </DialogTitle>

                                  <DialogDescription className="pricing-modal-desc">
                                      Unlock full potential with the {plan.title}. Includes {plan.features[0]?.text}, priority support, and all premium features designed to help you scale.
                                  </DialogDescription>
                              </div>

                              {/* Footer Button Area */}
                              <div className="pricing-modal-footer">
                                  <button 
                                      onClick={() => setStep(2)}
                                      className="pricing-modal-cta-btn"
                                  >
                                      Get Started
                                  </button>
                              </div>
                          </motion.div>
                      ) : (
                          <motion.div 
                              key="step2"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              className="pricing-modal-step"
                          >
                              <div 
                                  className="flex-1 overflow-y-auto scrollbar-hide"
                                  style={{ padding: '3rem 3rem 2rem 2rem' }} 
                              >
                                  <div className="pricing-modal-step2-header">
                                      <button 
                                          onClick={() => setStep(1)}
                                          className="pricing-modal-back-btn"
                                      >
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                              <path d="M15 18l-6-6 6-6"/>
                                          </svg>
                                      </button>
                                      <h3 className="pricing-modal-step2-title">Contact Details</h3>
                                  </div>

                                  <form onSubmit={handlePayment} className="pricing-modal-form">
                                      <div className="pricing-form-group">
                                          <input 
                                              ref={nameRef}
                                              type="text" 
                                              className={`pricing-form-input ${errors.name ? 'error' : ''}`}
                                              placeholder="Full Name"
                                              onChange={() => {
                                                  if (errors.name) setErrors(prev => ({ ...prev, name: false }));
                                              }}
                                          />
                                      </div>
                                      <div className="pricing-form-group">
                                          <input 
                                              ref={emailRef}
                                              type="email" 
                                              className={`pricing-form-input ${errors.email ? 'error' : ''}`}
                                              placeholder="Email Address"
                                              onChange={() => {
                                                  if (errors.email) setErrors(prev => ({ ...prev, email: false }));
                                              }}
                                          />
                                      </div>
                                      <div className="pricing-form-group">
                                          <input 
                                              ref={phoneRef}
                                              type="tel" 
                                              className={`pricing-form-input ${errors.phone ? 'error' : ''}`}
                                              placeholder="Phone Number"
                                              onChange={() => {
                                                  if (errors.phone) setErrors(prev => ({ ...prev, phone: false }));
                                              }}
                                          />
                                      </div>

                                      {/* Support Checkbox */}
                                      {/* 
                                      <div className="pricing-support-wrapper">
                                          <label className="pricing-support-label">
                                              <div className="pricing-support-check-area">
                                                  <input 
                                                      type="checkbox"
                                                      checked={isSupportChecked}
                                                      onChange={(e) => setIsSupportChecked(e.target.checked)}
                                                      className="pricing-support-checkbox" 
                                                  />
                                              </div>
                                              <div className="pricing-support-content">
                                                  <div className="pricing-support-header">
                                                      <span className="pricing-support-title">3 Months Support</span>
                                                      <span className="pricing-support-badge">Recommended</span>
                                                  </div>
                                                  <p className="pricing-support-text">
                                                      Get dedicated support and maintenance for your website for 3 months.
                                                  </p>
                                              </div>
                                              <div className="pricing-support-gradient" />
                                          </label>
                                      </div>
                                      */}

                                      {/* Total Amount Display */}
                                      {/* 
                                      <div className="pricing-total-row">
                                          <span className="pricing-total-label">Total Amount:</span>
                                          <span className="pricing-total-amount">
                                            ₹{displayTotal}
                                          </span>
                                      </div>
                                      */}

                                      {/* Hidden submit trigger logic if needed, but we use the footer button */}
                                  </form>
                              </div>

                              {/* Footer Button Area */}
                              <div className="pricing-modal-footer">
                                  <button 
                                      onClick={(e) => {
                                          handlePayment(e);
                                      }}
                                      disabled={loading}
                                      className="pricing-modal-cta-btn"
                                  >
                                      {loading ? (
                                          <span className="loading-text-wrapper">
                                              <svg className="spinner" viewBox="0 0 24 24" fill="none">
                                                  <circle className="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                  <path className="spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                              </svg>
                                              Processing...
                                          </span>
                                      ) : (
                                          `Submit Interest`
                                      )}
                                  </button>
                              </div>
                          </motion.div>
                      )}
                  </AnimatePresence>
              </div>
            </div>
          </DialogContent>
        </DialogContainer>
      </Dialog>
      
      {/* Custom Lightbox Overlay */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, zIndex: 999 }}
              className="lightbox-overlay"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="lightbox-close-btn"
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
                className="lightbox-img"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* Payment Status Modal */}
      <PaymentStatusModal 
        type={modalState.type}
        isOpen={modalState.isOpen}
        onClose={closeModal}
      />
    </>
  );
};

const PricingCards = () => {
    const [plans, setPlans] = useState([]);
    const [activeRoleTab, setActiveRoleTab] = useState(INTERFACES[0].id);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch('/api/pricing');
                if (response.ok) {
                    const data = await response.json();
                    setPlans(data);
                } else {
                    console.error('Failed to fetch pricing plans');
                }
            } catch (error) {
                console.error('Error fetching pricing plans:', error);
            }
        };
        fetchPlans();
    }, []);

    return (
        <div className="pricing-wrapper">
            <div className="container py-5">
                <div className="row text-center align-items-center justify-content-center header-row pb-5">
                    <div className="col-12">
                        <h2 className="text-uppercase fw-bold text-dark mb-2">Our Products</h2>
                    </div>
                </div>

                <div className="row gap-4 gap-md-0">
                    {plans.map((plan, index) => (
                        <div key={index} className="col-md-4 col-lg-4 mb-4 mb-md-0">
                            <div className={`pricing-card ${plan.type}-card`}>
                                <div className="card-header-img">
                                    <img src={plan.img} alt={`${plan.type} Plan`} className="img-fluid w-100 rounded-top" style={{ objectFit: 'cover' }} />
                                </div>
                                <div className="card-body pt-4 pb-4 px-4">
                                    <h3 className="plan-title fw-bold mb-4">{plan.title}</h3>

                                    <div className="role-tabs-container mb-4">
                                        <div className="role-tabs-nav">
                                            {INTERFACES.map((item) => (
                                                <button
                                                    key={item.id}
                                                    onClick={() => setActiveRoleTab(item.id)}
                                                    className={`role-tab-btn ${activeRoleTab === item.id ? 'active' : ''}`}
                                                    style={{ '--active-color': item.color }}
                                                >
                                                    <item.icon size={18} />
                                                    <span>{item.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="role-features-content">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeRoleTab}
                                                initial={{ opacity: 0, x: 10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                transition={{ duration: 0.2 }}
                                                className="role-feature-list"
                                            >
                                                {INTERFACES.find(i => i.id === activeRoleTab).features.map((feature, idx) => (
                                                    <div key={idx} className="role-feature-item">
                                                        <div 
                                                            className="role-feature-icon"
                                                            style={{ 
                                                                backgroundColor: `${INTERFACES.find(i => i.id === activeRoleTab).color}15`, 
                                                                color: INTERFACES.find(i => i.id === activeRoleTab).color 
                                                            }}
                                                        >
                                                            <feature.icon size={16} />
                                                        </div>
                                                        <div className="role-feature-info">
                                                            <h4 className="role-feature-title">{feature.title}</h4>
                                                            <p className="role-feature-desc">{feature.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    <Link href={`/products/pricing/${plan.type}`} className={`btn btn-outline-primary btn-round mt-4 w-100`}>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingCards;
