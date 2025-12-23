'use client'
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';

const PortfolioBanner = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    // Dynamically import lottie-web to avoid SSR issues
    const loadLottie = async () => {
      const lottie = (await import('lottie-web')).default;
      
      if (lottieRef.current) {
        const animation = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/lottie/Background Grey Wave.json'
        });

        return () => {
          animation.destroy();
        };
      }
    };

    loadLottie();
  }, []);

  return (
    <section 
      className="testomonial-banner hero-section portfolio-banner"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '500px',
        overflow: 'hidden'
      }}
    >
      {/* Lottie Background */}
      <div 
        ref={lottieRef}
        style={{
          position: 'absolute',
          top: '-200px',
          left: 0,
          width: '100%',
          height: 'auto',
          zIndex: 0
        }}
        className="portfolio-wrap"
      />
      
      {/* Content Overlay */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div class="row portfolio-bg-sec">
          <div class="col-lg-7">
              <div className="banner-text" style={{ color: 'black' }}>
                <h3 style={{ color: 'black' }}>Our Portfolio</h3>
                <p style={{ color: 'black' }}>
                  Unify your entire operation with an all-in-one platform. Our system streamlines everything from <span style={{ color: '#0261b9ff' }}>sales and inventory to customer management</span>, giving you the control to make smarter decisions and drive growth.
                </p>
                <Link href="/contact-us" className="first-tag">
                  Contact Us
                </Link>
              </div>
          </div>
          <div class="col-lg-5">
            <div class="animation-sec">
                <div className="lottie-container product-dev-svg">
                  <Lottie
                    path="/lottie/portfolio.json"
                    loop
                    autoplay
                    className="responsive-lottie"
                  />
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default PortfolioBanner;