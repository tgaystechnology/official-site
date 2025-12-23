'use client';

import React from 'react';
import Image from 'next/image';

const benefits = [
  {
    icon: 'id-card-outline',
    title: 'Membership Management',
    desc: 'Easily register new members, manage subscription packages, and process renewals from a single, intuitive dashboard.',
  },
  {
    icon: 'finger-print-outline',
    title: 'Attendance Tracking',
    desc: 'Track member check-ins accurately and securely with our integrated biometric system, eliminating manual entries and fraud.',
  },
  {
    icon: 'document-text-outline',
    title: 'Automated Billing & Payments',
    desc: 'Automate payment collections, send timely reminders for renewals, and accept online payments through Razorpay for a seamless financial workflow.',
  },
  {
    icon: 'body-outline',
    title: 'Trainer Management',
    desc: 'Maintain a detailed database of your trainers, manage their schedules, and link them to members for personalized training.',
  },
  {
    icon: 'fast-food-outline',
    title: 'Lead & Inquiry Management',
    desc: 'Capture new leads, track inquiries, and monitor conversion status to turn potential customers into loyal members.',
  },
  {
    icon: 'git-merge-outline',
    title: 'Financial Reporting',
    desc: 'Get a clear view of your financial health with graphical reports comparing revenue vs. expenses, helping you make data-driven decisions.',
    last: true,
  },
];

const GymErpBenefits = () => {
  return (
    <section className="about-seven" id="about">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div data-aos="fade-right" data-aos-delay="100" className="wow fadeInLeft col-xl-6 aos-init aos-animate">
            <div className="about-seven__content">
              <div className="sec-title-three text-left">
                <h3 className="sec-title-three__title">Why Choose Our Gym ERP?</h3>
              </div>

              <div className="about-seven__content__list">
                <div className="row">
                  {benefits.slice(0, 5).map((item, index) => (
                    <div className="col-md-12" key={index}>
                      <div className={`why-gym-erp${item.last ? ' last-why-gym-epr' : ''}`}>
                        <div className="why-gym-epr-icon">
                          <ion-icon name={item.icon}></ion-icon>
                        </div>
                        <div className="gym-erp-chosse">
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-xl-6">
            <div className="about-seven__image count-box">
              <div className="row">
                <div className="col-md-6">
                  <div className="about-seven__image__one">
                    <Image
                      src="/img/about-7-1.png"
                      alt="About 1"
                      width={307}
                      height={555}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-seven__image__two">
                    <Image
                      src="/img/about-7-2.png"
                      alt="About 2"
                      width={307}
                      height={555}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div className="about-seven__image__bg-shape"></div>
              <div className="about-seven__image__experiance">
                <h3 className="about-seven__image__experiance__count">
                  <span className="count-text">2</span>+
                </h3>
                years experience
              </div>
            </div>

            {/* Last benefit */}
            <div className="about-seven__content__list">
              <div className="row">
                <div className="col-md-12">
                  <div className="why-gym-erp last-why-gym-epr">
                    <div className="why-gym-epr-icon">
                      <ion-icon name={benefits[5].icon}></ion-icon>
                    </div>
                    <div className="gym-erp-chosse">
                      <h3>{benefits[5].title}</h3>
                      <p>{benefits[5].desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* col-xl-6 */}
        </div>
      </div>
    </section>
  );
};

export default GymErpBenefits;
