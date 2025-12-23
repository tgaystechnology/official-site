'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const OurValuesSection = () => {
  return (
    <section className="our-values drive-by-innova-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="our-value-content">
              <div className="section-title">
                <h2>Driven by Innovation, Backed by Experience</h2>
              </div>
              <div className="value-box-list">
                {/* Box 1 */}
                <div className="value-box-item">
                  <div className="value-box-header">
                    <h2><span className="counter">50</span>+</h2>
                    <p>AI Projects Delivered</p>
                  </div>
                  <div className="value-box-body">
                    <p>From chatbots to intelligent automation, we've built scalable AI solutions that enhance performance and reduce manual tasks.</p>
                    <ul>
                      <li>
                        <span>
                          <ion-icon name="checkmark-outline"></ion-icon>
                        </span>
                        Custom AI Agents & Automation Tools
                      </li>
                      <li>
                        <span>
                          <ion-icon name="checkmark-outline"></ion-icon>
                        </span>
                        Chatbots, RAG Systems & Predictive Workflows
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Box 2 */}
                <div className="value-box-item">
                  <div className="value-box-header">
                    <h2><span className="counter">20</span>+</h2>
                    <p>Industries Served</p>
                  </div>
                  <div className="value-box-body">
                    <p>We empower sectors like healthcare, finance, education, fitness, and E-Commerce with future-ready tech tailored to their exact needs.</p>
                    <ul>
                      <li>
                        <span>
                          <ion-icon name="checkmark-outline"></ion-icon>
                        </span>
                        Industry-Specific CRMs & ERP Systems
                      </li>
                      <li>
                        <span>
                          <ion-icon name="checkmark-outline"></ion-icon>
                        </span>
                        Web, Mobile & E-commerce Platforms
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="value-image">
              <figure className="image-anime reveal">
                {/* <Image 
                  src="/img/value-image.jpg" 
                  alt="Our values" 
                  width={600} 
                  height={400}
                  className="img-fluid"
                /> */}
                <Lottie
                  path="/lottie/Artificial intelligence digital technology.json"
                  loop
                  autoplay
                  className=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;