'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const DevelopmentProcess = () => {
  // Process steps data
  const processSteps = [
    {
      id: 1,
      icon: "sunny-outline",
      title: "1. Idea & Strategy",
      description: "We align your vision with market opportunities to create a clear and actionable roadmap."
    },
    {
      id: 2,
      icon: "color-palette-outline",
      title: "UI/UX Design",
      description: "We design intuitive, user-first interfaces that enhance user satisfaction and engagement."
    },
    {
      id: 3,
      icon: "desktop-outline",
      title: "Development",
      description: "Our engineers use the latest technologies and frameworks to build secure, high-performing products."
    },
    {
      id: 4,
      icon: "eyedrop-outline",
      title: "Testing & QA",
      description: "Rigorous testing ensures that your product is stable, scalable, and ready for the real world."
    },
    {
      id: 5,
      icon: "desktop-outline",
      title: "Deployment",
      description: "We deploy your product seamlessly while offering continuous monitoring, updates, and support."
    }
  ];

  return (
    <section className="ai-step it-staff-step derv-process-section">
      <div className="container">
        <div className="ai-shape">
          <Image 
            src="/img/intro-v2-shape3.png" 
            alt="Decorative shape"
            width={100}
            height={100}
          />
        </div>

        <div className="crumina-module crumina-heading text-center">
          <h2 className="heading-title">Our <span className="c-primary">Development</span> Process</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="ai-work-image">
              <figure className="image-anime reveal">
                <Lottie
                  path="/lottie/Web Development_2.json"
                  loop
                  autoplay
                  className=""
                />
              </figure>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ai-work-content dev-process-ai">
              {processSteps.map(step => (
                <div key={step.id} className="ai-work-item">
                  <div className="icon-box">
                    <ion-icon name={step.icon}></ion-icon>
                  </div>
                  <div className="ai-work-item-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;