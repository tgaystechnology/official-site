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
    <section id="faq" className="faqs-section style-two bg-cover">
      <div className="container">
        <div className="row">
          {/* Image Column */}
          <div className="image-column col-xl-6 col-lg-12 col-md-12">
            <div className="inner-column">
              <figure className="image ml-5">
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="img-fluid"
                /> */}
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
                <h1 className="tech-section-title mb-15">{heading}</h1>
              </div>
              <div className="accordion" id="accordionExample">
                {faqs.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={item.id}>
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
                    </h2>
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
