'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const M365SolutionsSection = () => {
  return (
    <section className="background-contain pt100 web-solution-section tail-365-soluution-sec">
      <div className="container">
        <div className="row">
          {/* Content Column */}
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">
                  Tailored<span className="c-primary"> Microsoft 365 Solutions </span>for Modern Teams
                </h2>
              </div>
              <h6 className="slider-content-text">
                Unlock the full potential of Microsoft 365 with tailored development services that empower your digital workplace. Whether it's automating workflows, enhancing collaboration, or creating secure cloud-based solutions — we help you make the most out of your M365 environment.
              </h6>
              <h6 className="slider-content-text">
                Our M365 experts leverage tools like SharePoint, Power Platform, and Microsoft Graph API to deliver scalable, user-centric, and secure business applications. We align every solution with your unique business processes and compliance needs.
              </h6>
              <ul className="m365-features-list">
                <li>✔ Microsoft Graph API Integration</li>
                <li>✔ SharePoint Framework (SPFx)</li>
                <li>✔ Power Platform: PowerApps & Power Automate</li>
                <li>✔ Azure AD & Secure Identity Solutions</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="crumina-module">
              <div className="img-thumb">
                {/* <Image 
                  src="/img/M365-Dev-first-img.png" 
                  alt="Microsoft 365 Development"
                  width={500}
                  height={400}
                  className="img-responsive"
                /> */}
                
                  <div className="lottie-container integration-with-external-system-svg">
                    <Lottie
                      path="/lottie/Integration with external systems.json"
                      loop
                      autoplay
                      className="responsive-lottie"
                    />
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .m365-features-list {
          margin-top: 20px;
          padding-left: 20px;
        }
        .m365-features-list li {
          margin-bottom: 10px;
          font-size: 16px;
          color: #333;
        }
      `}</style>
    </section>
  );
};

export default M365SolutionsSection;