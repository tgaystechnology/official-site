'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";

const HowBusinessWorksSection = () => {
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
    width = 300;
    height = 350;
  } else if (isLaptop) {
    width = 600;
    height = 650;
  } else if (isDesktop) {
    width = 500;
    height = 350;
  }
  return (
    <section className="ai-step">
      <div className="container">
        {/* Background Shape */}
        <div className="ai-shape">
          <Image 
            src="/img/intro-v2-shape3.png" 
            alt=""
            width={200}  // Set to your image's actual width
            height={200} // Set to your image's actual height
            className="w-full h-auto"
          />
        </div>

        {/* Heading */}
        <div className="crumina-module crumina-heading text-center">
          <h2 className="heading-title">How It Works</h2>
        </div>

        <div className="row">
          {/* Left Column - Steps */}
          <div className="col-lg-6">
            <div className="ai-work-content">
              {/* Step 1 */}
              <div className="ai-work-item">
                <div className="icon-box">
                  <ion-icon name="scan-outline"></ion-icon>
                </div>
                <div className="ai-work-item-content">
                  <h3>1. Capture Leads</h3>
                  <p>Automatically pull in leads from your website forms, emails, and social media campaigns directly into your CRM.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="ai-work-item">
                <div className="icon-box">
                  <ion-icon name="settings-outline"></ion-icon>
                </div>
                <div className="ai-work-item-content">
                  <h3>2. Automate Follow-ups</h3>
                  <p>Create email sequences and task reminders to nurture leads and ensure timely follow-ups without manual effort.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="ai-work-item">
                <div className="icon-box">
                  <ion-icon name="pin-outline"></ion-icon>
                </div>
                <div className="ai-work-item-content">
                  <h3>3. Track & Convert</h3>
                  <p>Use the visual sales pipeline to monitor every deal's progress, log interactions, and collaborate with your team to close sales faster.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="ai-work-item">
                <div className="icon-box">
                  <ion-icon name="analytics-outline"></ion-icon>
                </div>
                <div className="ai-work-item-content">
                  <h3>4. Analyze & Grow</h3>
                  <p>Use the visual sales pipeline to monitor every deal's progress, log interactions, and collaborate with your team to close sales faster.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6">
            <div className="ai-work-image">
              <figure className="image-anime reveal">
                {/* <Image
                  src="/img/business-how-work-crm.png"
                  alt="AI Integration Process Illustration"
                  width={600}  // Set to your image's actual width
                  height={500} // Set to your image's actual height
                  className="w-full h-auto"
                /> */}
                <div className="lottie-container business-team-brainstorming-svg">
                    <Lottie
                      path="/lottie/Seo isometric composition with human characters.json"
                      loop
                      autoplay
                      className="responsive-lottie"
                    />
                  </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowBusinessWorksSection;