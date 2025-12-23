'use client';
import { useState, useEffect } from 'react';
import BottomNavigation from './BottomNavigation';

export default function BottomNavigationWrapper() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 992);
    };

    checkScreenSize(); // run on mount
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isMobileOrTablet) return null; // don’t render if too big
  return <BottomNavigation />;
}
