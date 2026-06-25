'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";


const FAQSection = ({ faqs = [] }) => {
  // Static shared values
  const heading = 'Frequently Asked Questions';
  const image = {
    src: '/img/faq.png',
    alt: 'FAQ illustration',
    width: 600,
    height: 500,
  };
  const infoBox = {
    icon: 'earth-outline',
    title: 'Trusted IT Solution & Service Business Agency',
  };
  return (
    <section id="faq" className="faqs-section style-two bg-cover pt-5 pb-5" role="region" aria-labelledby="ai-faq-heading">
      <style dangerouslySetInnerHTML={{__html: `
        @media only screen and (min-width: 1200px) {
          .faqs-section.style-two .image-column .inner-column {
            margin-left: 0 !important;
            position: sticky !important;
            top: 120px !important;
            padding-right: 30px;
          }
        }
        @media only screen and (max-width: 1199px) {
          .faqs-section.style-two .image-column .inner-column {
            margin-left: 0 !important;
            margin-bottom: 40px;
          }
        }
        @media only screen and (max-width: 767px) {
          .faqs-section.style-two .info-box {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            right: auto !important;
            width: 100% !important;
            margin: 20px auto 0 !important;
            transform: none !important;
            text-align: center;
          }
          .faqs-section.style-two .info-box .inner {
            padding: 20px !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .faqs-section.style-two .tech-section-title {
            font-size: 1.8rem !important;
            text-align: center;
            margin-top: 20px;
          }
          .responsive-lottie {
            max-width: 100% !important;
            height: auto !important;
          }
          .accordion-button {
            padding: 15px 20px !important;
            font-size: 0.95rem !important;
          }
        }
      `}} />
      <div className="container">
        <div className="row">
          {/* Image Column */}
          <div className="image-column col-xl-6 col-lg-12 col-md-12">
            <div className="inner-column">
              <figure className="image mx-auto text-center">
                <div className="ns-custom-img">
                  <div className="lottie-container faq-svg">
                    <Lottie
                      path="/lottie/FAQ web page.json"
                      loop
                      autoplay
                      className="responsive-lottie"
                    />
                  </div>
                </div>
              </figure>
              <div className="info-box">
                <div className="inner">
                  <span className="icon flaticon-business-063-diamond">
                    <ion-icon name={infoBox.icon}></ion-icon>
                  </span>
                  <h3
                    className="title"
                    dangerouslySetInnerHTML={{ __html: infoBox.title }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Column */}
          <div className="faq-column col-xl-6 col-lg-12 col-md-12">
            <div className="inner-column">
              <div className="tech-section mb-25">
                <h2 id="ai-faq-heading" className="tech-section-title mb-15">{heading}</h2 >
              </div>
              <div className="accordion" id="accordionExample">
                {faqs.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h3 className="accordion-header" id={item.id}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${item.target}`}
                        aria-expanded="false"
                        aria-controls={item.target}
                      >
                        {item.question}
                      </button>
                    </h3>
                    <div
                      id={item.target}
                      className="accordion-collapse collapse"
                      aria-labelledby={item.id}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
