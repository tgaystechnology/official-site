'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const OffshoreProcess = () => {
  // Process steps data
  const processSteps = [
    {
      id: 1,
      icon: "clipboard-outline",
      title: "Requirement Discussion",
      description: "We begin by understanding your business goals, technical requirements, and desired outcomes to recommend the best offshore strategy for your project."
    },
    {
      id: 2,
      icon: "people-outline",
      title: "Team Setup",
      description: "We handpick a dedicated offshore team that aligns with your project needs, tech stack, and organizational culture for seamless collaboration."
    },
    {
      id: 3,
      icon: "thumbs-up-outline",
      title: "Onboarding",
      description: "Our experts ensure a smooth onboarding experience with full integration into your existing workflow, tools, and reporting structure."
    },
    {
      id: 4,
      icon: "rocket-outline",
      title: "Delivery & Support",
      description: "Agile delivery, transparent communication, daily standups, and post-launch support ensure ongoing success and scalability."
    }
  ];

  return (
    <section className="ai-step it-staff-step offshope-process-page-sec">
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
          <h2 className="heading-title">Our Offshore Process</h2>
        </div>

        <div className="row">
          {/* Image Column */}
          <div className="col-lg-6">
            <div className="ai-work-image">
              <figure className="image-anime reveal">
                {/* <Image 
                  src="/img/Offshore-work-list-sec.png" 
                  alt="Offshore development process illustration"
                  width={600}
                  height={450}
                /> */}

                <Lottie
                  path="/lottie/Customer Service Support Agent Animation.json"
                  loop
                  autoplay
                  className=""
                />
              </figure>
            </div>
          </div>

          {/* Process Steps Column */}
          <div className="col-lg-6">
            <div className="ai-work-content">
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

export default OffshoreProcess;