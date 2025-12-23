'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import styles from './BottomNavigation.module.css';

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [highlightPosition, setHighlightPosition] = useState(0);
  const [showHighlight, setShowHighlight] = useState(false);

  // Simple navigation data with direct routes
  const navigationData = [
    { 
      label: 'Home', 
      icon: '🏠', 
      route: '/' 
    },
    { 
      label: 'Portfolio', 
      icon: '💼', 
      route: '/portfolio' 
    },
    { 
      label: 'Testimonials', 
      icon: '⭐', 
      route: '/testimonials' 
    },
    { 
      label: 'Contact', 
      icon: '📞', 
      route: '/contact-us' 
    }
  ];

  // Route mapping to determine which tab is active
  const getActiveTabIndex = (currentPath) => {
    // Check for exact matches first
    const exactMatch = navigationData.findIndex(item => item.route === currentPath);
    if (exactMatch !== -1) return exactMatch;

    // Check for partial matches (for nested routes)
    if (currentPath.startsWith('/portfolio')) return 1;
    if (currentPath.startsWith('/testimonials')) return 2;
    if (currentPath.startsWith('/contact-us')) return 3;
    
    // Default to home for root or unmatched paths
    return 0;
  };

  // Effect to detect current active tab based on pathname
  useEffect(() => {
    const activeIndex = getActiveTabIndex(pathname);
    setHighlightPosition(activeIndex);
    setShowHighlight(true);
  }, [pathname]);

  // Handle tab click - navigate directly to the page
  const handleTabClick = (item, index) => {
    setHighlightPosition(index);
    router.push(item.route);
  };

  // Animation variants
  const tabVariants = {
    inactive: {
      scale: 1,
      y: 0
    },
    active: {
      scale: 1.05,
      y: -2,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25
      }
    }
  };

  const highlightVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
        duration: 0.3
      }
    }
  };

  return (
    <div className={styles.bottomNavigation}>
      {/* Main Navigation Bar */}
      <nav className={styles.mainNav}>
        <div className={styles.navContainer}>
          {/* Sliding Highlight Indicator */}
          <AnimatePresence>
            {showHighlight && (
              <motion.div
                className={styles.highlightIndicator}
                variants={highlightVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{
                  left: `${(highlightPosition * 100) / navigationData.length}%`,
                  width: `${100 / navigationData.length}%`
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                  duration: 0.4
                }}
              />
            )}
          </AnimatePresence>

          {navigationData.map((item, index) => {
            const isActive = highlightPosition === index && showHighlight;
            
            return (
              <motion.button
                key={item.label}
                className={`${styles.navTab} ${isActive ? styles.highlighted : ''}`}
                variants={tabVariants}
                initial="inactive"
                animate={isActive ? 'active' : 'inactive'}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleTabClick(item, index)}
                aria-label={`Navigate to ${item.label}`}
                role="tab"
                aria-selected={isActive}
              >
                <motion.div 
                  className={styles.tabIcon}
                  initial={{ scale: 1, y: 0 }}
                  animate={isActive ? 
                    { scale: 1.15, y: -2 } : 
                    { scale: 1, y: 0 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    duration: 0.3
                  }}
                >
                  {item.icon}
                </motion.div>
                <motion.span 
                  className={styles.tabText}
                  initial={{ y: 0, opacity: 0.7 }}
                  animate={isActive ? 
                    { y: 1, opacity: 1 } : 
                    { y: 0, opacity: 0.7 }
                  }
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                    duration: 0.3
                  }}
                >
                  {item.label}
                </motion.span>
                
                {/* Ripple effect */}
                <motion.div
                  className={styles.ripple}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 0, opacity: 0 }}
                  whileTap={{ 
                    scale: [0, 1.2], 
                    opacity: [0.3, 0],
                    transition: { duration: 0.4 }
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: 'rgba(0, 122, 255, 0.3)',
                    pointerEvents: 'none'
                  }}
                />
              </motion.button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default BottomNavigation;