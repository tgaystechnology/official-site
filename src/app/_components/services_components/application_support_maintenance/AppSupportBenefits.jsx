'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";

const AppSupportBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: "diamond-outline",
      title: "Business Continuity",
      description: "Minimize downtime with continuous monitoring, issue resolution, and fail-safe mechanisms."
    },
    {
      id: 2,
      icon: "copy-outline",
      title: "Cost Efficiency",
      description: "Prevent expensive disruptions with proactive maintenance and avoid surprise repair costs."
    },
    {
      id: 3,
      icon: "key-outline",
      title: "Security & Compliance",
      description: "Ensure your applications stay compliant and secure against evolving cyber threats."
    }
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 });       // 📱 Mobile
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 📲 Tablet
  const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 }); // 💻 Laptop
  const isDesktop = useMediaQuery({ minWidth: 1440 });     // 🖥️ Large Desktop

  let width = 320;
  let height = 300;

  if (isMobile) {
    width = 420;
    height = 400;
  } else if (isTablet) {
    width = 450;
    height = 350;
  } else if (isLaptop) {
    width = 400;
    height = 350;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }

  return (
    <section className="ai-step it-staff-step why-app-main-supprt-sec">
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
          <h2 className="heading-title">Why Application Support is Critical for Modern Businesses</h2>
        </div>

        <div className="row">
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

          <div className="col-lg-6">
            <div className="ai-work-image">
              <figure className="image-anime reveal">
                {/* <Image 
                  src="/img/application-support-img.png" 
                  alt="Application Support Benefits"
                  width={600}
                  height={450}
                /> */}
                <Lottie
                  path="/lottie/For Business.json"
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
        </div>
      </div>
    </section>
  );
};

export default AppSupportBenefits;