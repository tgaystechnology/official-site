'use client';
import React from 'react';
import Image from 'next/image';

const GymErpBenefitsSecondSection = () => {
  return (
    <section className="tech-management-area gym-erp-tech relative">
      {/* Background Image - Original implementation with img tag */}
      <img 
        src="/img/bg-img.png" 
        alt="" 
        className="management-bg"
      />

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12">
            <div className="tech-section mb-35">
              <h2 className="tech-section-title mb-15 tech-section-title-white">Benefits</h2>
            </div>

            <div className="tech-management-content mb-50">
              <ul>
                <li>
                  <span className="tech-management-content-icon">
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                  </span>
                  <div className="tech-management-content-info">
                    <h5>Time Saving</h5>
                    <p>Automate repetitive administrative tasks like billing and attendance, freeing up your staff to focus on member experience.</p>
                  </div>
                </li>
    
                <li>
                  <span className="tech-management-content-icon">
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                  </span>
                  <div className="tech-management-content-info">
                    <h5>Better Member Engagement</h5>
                    <p>Improve member retention with streamlined communication, automated reminders, and easy access to their information.</p>
                  </div>
                </li>
    
                <li>
                  <span className="tech-management-content-icon">
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                  </span>
                  <div className="tech-management-content-info">
                    <h5>Revenue Growth</h5>
                    <p>Prevent revenue leakage with precise payment tracking, automated invoicing, and tools to manage and convert new leads.</p>
                  </div>
                </li>
    
                <li>
                  <span className="tech-management-content-icon">
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                  </span>
                  <div className="tech-management-content-info">
                    <h5>Business Insights</h5>
                    <p>Leverage graphical reports and analytics to monitor your revenue, expenses, and profit, helping you make smart decisions for strategic growth.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="tech-management-list">
              <div className="tech-management-list-item">
                <span><ion-icon name="globe-outline" role="img" className="md hydrated"></ion-icon></span>
                <h5><a href="#">Setup & Onboarding</a></h5>
              </div>
              <div className="tech-management-list-item">
                <span><ion-icon name="cog-outline" role="img" className="md hydrated"></ion-icon></span>
                <h5><a href="#">Data & Analytics</a></h5>
              </div>
              <div className="tech-management-list-item">
                <span><ion-icon name="cloudy-outline" role="img" className="md hydrated"></ion-icon></span>
                <h5><a href="#">Growth & Scaling</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-management-img">
        {/* Using Next.js Image for content images */}
        <Image
          src="/img/gym-project-Benefits.png"
          alt=""
          width={600}
          height={600}
          quality={100}
          className="tech-inner-img"
        />
        <div className="tech-management-img-icon">
          <a href="#">
            <Image
              src="/img/press-icon-2.png"
              alt=""
              width={80}
              height={80}
              quality={100}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GymErpBenefitsSecondSection;