'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";


const AIJourneySection = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });       // 📱 Mobile
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 📲 Tablet
  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 }); // 💻 Laptop
  const isDesktop = useMediaQuery({ minWidth: 1440 });     // 🖥️ Large Desktop

  let width = 320;
  let height = 300;

  if (isMobile) {
    width = 320;
    height = 400;
  } else if (isTablet) {
    width = 600;
    height = 650;
  } else if (isLaptop) {
    width = 600;
    height = 650;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }
  return (
    <section className="ai-step">
      <div className="container">
        <div className="ai-shape">
          <Image 
            src="/img/intro-v2-shape3.png" 
            alt="Decorative shape"
            width={100} 
            height={100}
            className="img-fluid"
          />
        </div>
        
        <div className="crumina-module crumina-heading text-center">
          <h2 className="heading-title">Your AI Journey, One Smart Step at a Time</h2>
          <p className="subheading">From strategy to scalable execution — we guide you through every stage of AI adoption</p>
        </div>
        
        <div className="row">
          <div className="col-lg-6">
            <div className="ai-work-content">
              {/* Step 1 */}
              <div className="ai-work-item">
                <div className="icon-box">
                  <ion-icon name="sparkles-outline"></ion-icon>
                </div>
                <div className="ai-work-item-content">
                  <h3>1. Discovery & Strategy</h3>
                  <p>We start by analyzing your business landscape to uncover opportunities where AI can deliver real, measurable impact.</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="ai-work-item">
                <div className="icon-box">
                  <ion-icon name="layers-outline"></ion-icon>
                </div>
                <div className="ai-work-item-content">
                  <h3>2. Data & Design</h3>
                  <p>We evaluate your data readiness and architect intuitive, AI-ready designs that align with your objectives and workflows.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="ai-work-item">
                <div className="icon-box">
                  <ion-icon name="desktop-outline"></ion-icon>
                </div>
                <div className="ai-work-item-content">
                  <h3>3. Development & Integration</h3>
                  <p>We build, test, and integrate intelligent systems — from chatbots to RAG models — seamlessly into your existing ecosystem.</p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="ai-work-item">
                <div className="icon-box">
                  <ion-icon name="finger-print-outline"></ion-icon>
                </div>
                <div className="ai-work-item-content">
                  <h3>4. Launch & Optimization</h3>
                  <p>Once live, we monitor performance, gather feedback, and continuously optimize your AI solutions for evolving needs and scale.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="ai-work-image">
              <figure className="image-anime reveal">
                <Lottie
                  path='/lottie/AI intelligence.json'  // always prepends /lottie/
                  loop
                  autoplay
                  style={{
                    width: width,
                    height: height,
                    margin: "0 auto",
                  }}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIJourneySection;