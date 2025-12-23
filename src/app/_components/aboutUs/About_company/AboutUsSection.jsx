import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutUsSection = () => {
  return (
    <section className="background-contain pt100 hm-about-sec company-about-us">
      <div className="container">
        <div className="row">
          {/* Left Column - Content */}
          <div className="col-xl-6 col-lg-6 about-us-sec">
            <div className="crumina-module crumina-heading">
              <div className="about-us-hedding">
                <h2 className="heading-title">Our <span className="c-primary">Story</span></h2>
              </div>
              <p className="heading-text">
                Welcome to TGAYS Technology, your premier partner in digital innovation and technology solutions. 
                With a dedicated team of industry experts, we specialize in crafting cutting-edge websites, 
                mobile applications, Software as a Service (SaaS) products, and Customer Relationship Management 
                (CRM) systems that drive business success.
              </p>
              <p className="heading-text">
                Our mission is to empower businesses by transforming their digital presence and streamlining 
                their operations through innovative technology solutions. We strive to deliver exceptional 
                products and services, leveraging the latest technologies and tools, foster long-term partnerships, 
                and ensure our clients stay ahead in an ever-evolving digital landscape.
              </p>
            </div>

            <Link href="/about-us/company" className="read-more-link">
              <span className="title">READ MORE</span>
            </Link>

            <div className="tech-about-content">
              <div className="row">
                {/* Team Member 1 */}
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="tech-about-content-bottom">
                    <div className="tech-about-content-admin">
                      <div className="tech-about-content-admin-img">
                        <Image 
                          src="/img/najish.png" 
                          alt="Jamal Ashraf"
                          width={80}
                          height={80}
                          className="team-member-img"
                        />
                      </div>
                      <div className="tech-about-content-admin-info">
                        <h4 className="tech-about-admin-title">Jamal Ashraf</h4>
                        <span>CEO & Director</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="tech-about-content-bottom vikash_sec">
                    <div className="tech-about-content-admin">
                      <div className="tech-about-content-admin-img">
                        <Image 
                          src="/img/vikash.png" 
                          alt="Vikash Kumar"
                          width={80}
                          height={80}
                          className="team-member-img"
                        />
                      </div>
                      <div className="tech-about-content-admin-info">
                        <h4 className="tech-about-admin-title">Vikash Kumar</h4>
                        <span>Technical Head & Director</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="col-xl-6 col-lg-6 about-left">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="about-img-1">
                  <Image
                    src="/img/about-5.png"
                    alt="TGAYS Technology"
                    width={300}
                    height={300}
                    className="about-image"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="about-img-1 girl_img">
                  <Image
                    src="/img/about_1.png"
                    alt="TGAYS Technology Team"
                    width={300}
                    height={300}
                    className="about-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;