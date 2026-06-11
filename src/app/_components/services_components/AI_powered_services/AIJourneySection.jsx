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

  const steps = [
    {
      step: "1",
      title: "Discovery & Business Analysis",
      desc: "We identify opportunities where AI can create measurable value.",
      icon: "search-outline"
    },
    {
      step: "2",
      title: "AI Strategy & Planning",
      desc: "Our consultants develop a roadmap aligned with business objectives.",
      icon: "map-outline"
    },
    {
      step: "3",
      title: "Data Preparation",
      desc: "Data collection, cleansing, validation, and optimization.",
      icon: "server-outline"
    },
    {
      step: "4",
      title: "Model Development",
      desc: "Building custom AI models and intelligent systems.",
      icon: "code-working-outline"
    },
    {
      step: "5",
      title: "Integration & Deployment",
      desc: "Seamless deployment into existing business environments.",
      icon: "cloud-upload-outline"
    },
    {
      step: "6",
      title: "Monitoring & Optimization",
      desc: "Continuous performance improvements and AI model refinement.",
      icon: "pulse-outline"
    }
  ];

  return (
    <section className="ai-step pt100 pb100" role="region" aria-labelledby="ai-development-process-heading">
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
        
        <div className="crumina-module crumina-heading text-center mb-5" id="ai-development-process-heading">
          <h2 className="heading-title">Our Proven AI Development Process</h2>
          <p className="subheading text-muted" style={{ maxWidth: "700px", margin: "15px auto 0 auto" }}>
            From discovery to continuous optimization, we guide your business through a structured and reliable journey of AI adoption.
          </p>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="ai-work-content">
              {steps.map((item, idx) => (
                <div className="ai-work-item mb-4" key={idx}>
                  <div className="icon-box" style={{ width: "50px", height: "50px", minWidth: "50px" }}>
                    <ion-icon name={item.icon}></ion-icon>
                  </div>
                  <div className="ai-work-item-content ms-3">
                    <h3 style={{ fontSize: "1.15rem", fontWeight: "700" }}>{item.step}. {item.title}</h3>
                    <p style={{ fontSize: "0.9rem", color: "#666" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="ai-work-image text-center">
              <figure className="image-anime reveal d-inline-block" aria-hidden="true">
                <Lottie
                  path='/lottie/AI intelligence.json'
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