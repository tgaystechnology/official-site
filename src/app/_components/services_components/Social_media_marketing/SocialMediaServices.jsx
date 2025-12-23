import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialMediaServices = () => {
  // Services data
  const services = [
    {
      id: 1,
      title: "Custom Social Media Strategy",
      description: "Every business is different—your strategy should be too. We analyze your brand, audience, and goals to build a tailored plan that actually delivers results.",
      linkText: "Let’s Build Yours",
      icon: "medal-outline",
      image: "/img/img_17-1.jpg",
      alt: "Custom Strategy",
      layout: "right"
    },
    {
      id: 2,
      title: "Campaign Planning & Management",
      description: "We handle everything from start to finish—content creation, ad placement, audience targeting, and ongoing optimization to ensure maximum impact.",
      linkText: "Launch With Us",
      icon: "rocket-outline",
      image: "/img/img_19.jpg",
      alt: "Campaign Management",
      layout: "left"
    },
    {
      id: 3,
      title: "SEO & Paid Ad Integration",
      description: "Want to be seen more often by the right people? We combine organic growth with data-driven ad strategies to boost reach and get real conversions.",
      linkText: "Maximize Your Reach",
      icon: "cloudy-outline",
      image: "/img/img_18-1.jpg",
      alt: "SEO and Ads",
      layout: "right"
    },
    {
      id: 4,
      title: "Brand Collaborations & Influencer Marketing",
      description: "We connect your brand with the right voices. Collaborate with trusted influencers and partners to expand reach, build credibility, and drive engagement.",
      linkText: "Grow With Influence",
      icon: "cellular-outline",
      image: "/img/img_20.jpg",
      alt: "Collaboration",
      layout: "left"
    }
  ];

  return (
    <section className="social-service">
      <div className="container">
        <div className="crumina-module crumina-heading align-center">
          <h2 className="heading-title">Our <span className="c-primary">Top Social Media Services</span></h2>
        </div>
        
        <div className="social-wap">
          <div className="row">
            {services.map((service) => (
              <div key={service.id} className="col-md-12 col-lg-6">
                <div className={`${service.layout}-social`}>
                  {service.layout === "right" ? (
                    <>
                      <div className="sociol-text">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Link href="/contact-us">{service.linkText}</Link>
                      </div>
                      <div className="social-icon">
                        <span><ion-icon name={service.icon}></ion-icon></span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="social-img">
                        <Image 
                          src={service.image} 
                          alt={service.alt}
                          width={500}
                          height={350}
                          className="img-fluid"
                        />
                      </div>
                      <div className="social-icon">
                        <span><ion-icon name={service.icon}></ion-icon></span>
                      </div>
                    </>
                  )}
                  
                  {service.layout === "right" ? (
                    <div className="social-img">
                      <Image 
                        src={service.image} 
                        alt={service.alt}
                        width={500}
                        height={350}
                        className="img-fluid"
                      />
                    </div>
                  ) : (
                    <div className="sociol-text">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <Link href="/contact-us">{service.linkText}</Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaServices;