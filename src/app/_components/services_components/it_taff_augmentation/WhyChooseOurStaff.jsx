'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const WhyChooseOurStaff = () => {
  // Benefits data
  const benefits = [
    {
      id: 1,
      icon: "person-outline",
      title: "Pre-vetted Professionals",
      description: "All our IT professionals go through rigorous screening and technical assessments to ensure quality and reliability."
    },
    {
      id: 2,
      icon: "layers-outline",
      title: "Flexible Engagement",
      description: "Choose from short-term, long-term, or hourly hiring models that align with your project scope and budget."
    },
    {
      id: 3,
      icon: "headset-outline",
      title: "24/7 Support",
      description: "Our dedicated managers and support staff ensure smooth onboarding, communication, and delivery at every step."
    }
  ];

  // Stats data
  const stats = [
    {
      value: "50+",
      label: "Projects Completed"
    },
    {
      value: "98%",
      label: "Client Satisfaction"
    }
  ];

  // Client logos data
  const clientLogos = [
    {
      src: "/img/mahindra-Logo.png",
      alt: "Mahindra Logo"
    },
    {
      src: "/img/QS-Logo.png",
      alt: "QS Logo"
    },
    {
      src: "/img/evolveAi.png",
      alt: "Evolve AI Logo"
    },
    {
      src: "/img/worthmetrix_logo-client.png",
      alt: "Worthmetrix Logo"
    }
  ];

  return (
    <section className="ai-step it-staff-step it-staff-why-choose">
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
          <h2 className="heading-title">Why Choose Us</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="ai-work-image">
              <figure className="image-anime reveal">
                {/* <Image 
                  src="/img/it-staff-why-choose.png" 
                  alt="Why Choose Us Illustration"
                  width={600}
                  height={500}
                /> */}
                <Lottie
                  path="/lottie/Contact Us.json"
                  loop
                  autoplay
                  className=""
                />
              </figure>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="ai-work-content">
              {/* Benefits list */}
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

              {/* Stats section */}
              <div className="row">
                {stats.map((stat, index) => (
                  <div key={index} className="col-md-6">
                    <div className="done-project-sec">
                      <h1>{stat.value}</h1>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Client logos */}
              <div className="client-logo-work">
                <div className="row">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="col-3 col-md-2 client-logo-wrap">
                      <Image 
                        src={logo.src}
                        alt={logo.alt}
                        width={100}
                        height={50}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurStaff;