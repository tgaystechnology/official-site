import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseUs = () => {
  const benefits = [
    "Years of experience",
    "Strong Portfolio to check",
    "Client Testimonials",
    "Less Paperwork, Easy to Start",
    "Free Consulting"
  ];

  return (
    <section className="tech-management-area-6 p-relative pt-100 pb-35">
      {/* Background Image - Hidden on mobile */}
      <Image 
        src="/img/management-bg-6.png" 
        alt="Background pattern"
        className="tech-management-bg-6 d-none d-lg-block"
        width={1200} // Set appropriate dimensions
        height={800}
      />
      
      <div className="container">
        <div className="row">
          {/* Left Column - Benefits List */}
          <div className="col-xxl-6 col-xl-5 col-lg-6 d-flex order-2 order-lg-0">
            <div className="tech-management-wrap-6">
              <div className="tech-section mb-35">
                <span className="tech-section-subtitle">Why TGAYS Technology?</span>
                <h2 className="tech-section-title mb-15 tech-section-title-white">
                  Let Everyone Know Why We are the Best!
                </h2>
              </div>
              
              <div className="tech-management-content mb-50">
                <ul>
                  {benefits.map((benefit, index) => (
                    <li key={index}>
                      <span className="tech-management-content-icon">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <div className="tech-management-content-info">
                        <h5>{benefit}</h5>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Image with decorative elements */}
          <div className="col-xxl-6 col-xl-7 col-lg-6">
            <div className="tech-management-img-6 mb-50">
              {/* Main Image */}
              <Image
                src="/img/management-6.png"
                alt="TGAYS Technology team"
                className="tech-management-main-img img-w-100"
                width={600} // Set appropriate dimensions
                height={500}
              />
              
              {/* Decorative Icons */}
              <div className="tech-management-head-icon-6">
                <Link href="#">
                  <Image 
                    src="/img/headphones-icon-2.png" 
                    alt="Customer support"
                    width={50} // Set appropriate dimensions
                    height={50}
                  />
                </Link>
              </div>
              
              <div className="tech-management-img-icon-6">
                <Link href="#">
                  <Image 
                    src="/img/press-icon-6.png" 
                    alt="Media coverage"
                    width={50} // Set appropriate dimensions
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;