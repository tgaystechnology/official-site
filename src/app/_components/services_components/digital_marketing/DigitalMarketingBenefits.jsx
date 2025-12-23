'use client'
import React from 'react';
import Image from 'next/image';
import { useMediaQuery } from "react-responsive";
import Lottie from 'lottie-react';

const DigitalMarketingBenefits = () => {
  // Benefits data

  const benefits = [
    {
      id: 1,
      icon: "diamond-outline",
      title: "Better Collaboration",
      description: "We use unified reporting and workflows so your marketing, sales, and design teams are aligned and efficient."
    },
    {
      id: 2,
      icon: "copy-outline",
      title: "Improved Productivity",
      description: "Automated reporting, smart bidding, and efficient content workflows let you do more with less."
    },
    {
      id: 3,
      icon: "key-outline",
      title: "Secure Integration",
      description: "We link all your marketing tools securely—CMS, CRM, analytics—while keeping data privacy and security front‑and‑center."
    }
  ];

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
    width = 350;
    height = 400;
  } else if (isLaptop) {
    width = 450;
    height = 400;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }

  return (
    <section className="ai-step it-staff-step benefit-digi-mkt-solution-sec">
      <div className="container">
        {/* Decorative Shape */}
        <div className="ai-shape">
          <Image 
            src="/img/intro-v2-shape3.png" 
            alt="Decorative shape"
            width={100}
            height={100}
          />
        </div>

        {/* Section Heading */}
        <div className="crumina-module crumina-heading text-center">
          <h2 className="heading-title">Benefits of Digital Marketing Solutions</h2>
        </div>

        <div className="row">
          {/* Image Column */}
          <div className="col-lg-6">
            <div className="ai-work-image">
              <figure className="image-anime reveal">
                {/* <Image 
                  src="/img/Digital-Marketing-left-img.png" 
                  alt="Digital Marketing Benefits"
                  width={600}
                  height={450}
                /> */}
                <Lottie
                  path="/lottie/Social Media Customers.json"
                  loop
                  autoplay
                  style={{
                    width,
                    height,
                    margin: "0 auto", // centers the animation
                  }}
                />
              </figure>
            </div>
          </div>

          {/* Benefits Content Column */}
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
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingBenefits;