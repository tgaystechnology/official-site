'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const WhyChooseM365 = () => {
  // Benefits data
  const benefits = [
    {
      id: 1,
      icon: "diamond-outline",
      title: "Enhanced Collaboration",
      description: "Empower your workforce with unified access to documents, chats, and meetings in real-time."
    },
    {
      id: 2,
      icon: "copy-outline",
      title: "Process Efficiency",
      description: "Replace manual, paper-heavy workflows with digital automation and reduce turnaround times."
    },
    {
      id: 3,
      icon: "key-outline",
      title: "Enterprise-Grade Security",
      description: "All solutions are built with Azure Active Directory, MFA, and Microsoft's compliance framework."
    }
  ];

  return (
    <section className="ai-step it-staff-step m365-page-sec">
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
          <h2 className="heading-title">Why Choose Microsoft 365 Development?</h2>
        </div>

        <div className="row">
          {/* Benefits Column */}
          <div className="col-lg-6">
            <div className="ai-work-content">
              {benefits.map(benefit => (
                <div key={benefit.id} className="ai-work-item">
                  <div className="icon-box">
                    <ion-icon name={benefit.icon}></ion-icon>
                  </div>
                  <div className="ai-work-item-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6">
            <div className="ai-work-image">
              <figure className="image-anime reveal">
                <Lottie
                  path="/lottie/Partnership.json"
                  loop
                  autoplay
                  className="w-[320px] h-[200px] md:w-[400px] md:h-[250px] lg:w-[600px] lg:h-[220px]"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseM365;