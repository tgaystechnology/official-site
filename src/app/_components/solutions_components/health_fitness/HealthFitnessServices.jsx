'use client'
import React, { useState } from 'react';
import '../../products/PricingCards.css';

const HealthFitnessServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: "fitness-apps",
      tabTitle: "Fitness App Development",
      title: "Health & Fitness App Development Services",
      intro: "Our health and fitness app development solutions help businesses launch innovative digital fitness products that inspire healthier lifestyles and drive engagement.",
      listTitle: "Solutions We Build",
      listItems: [
        "Fitness Mobile Apps",
        "Workout Tracking Applications",
        "Wellness Platforms",
        "Nutrition Management Apps",
        "Fitness Coaching Platforms",
        "Fitness Communities"
      ],
      outcomeTitle: "Business Outcomes",
      outcomeItems: [
        "Increased user engagement",
        "Improved customer retention",
        "Recurring subscription revenue",
        "Enhanced brand loyalty"
      ]
    },
    {
      id: "gym-management",
      tabTitle: "Gym Management Software",
      title: "Gym Management Software Development",
      intro: "Our gym management software solutions automate administrative tasks, optimize workflows, and deliver exceptional member experiences.",
      listTitle: "Core Features",
      listItems: [
        "Membership Management",
        "Attendance Tracking",
        "Trainer Scheduling",
        "Payment Processing & Billing",
        "Performance Reporting",
        "Customer Communication"
      ],
      outcomeTitle: "Key Benefits",
      outcomeItems: [
        "Reduced administrative workload",
        "Improved operational efficiency",
        "Better member retention",
        "Streamlined facility management"
      ]
    },
    {
      id: "fitness-crm",
      tabTitle: "Fitness CRM Solutions",
      title: "Fitness CRM Software Development",
      intro: "Improve customer engagement, drive sales, and enhance retention through intelligent fitness CRM solutions tailored to your business.",
      listTitle: "CRM Features",
      listItems: [
        "Lead Management",
        "Membership Tracking",
        "Automated Follow-Ups",
        "Campaign Automation",
        "Client Segmentation",
        "Retention Analytics"
      ],
      outcomeTitle: "Business Outcomes",
      outcomeItems: [
        "Higher conversion rates",
        "Personalized member journeys",
        "Data-driven marketing",
        "Reduced churn rates"
      ]
    },
    {
      id: "online-platforms",
      tabTitle: "Online Fitness Platforms",
      title: "Online Fitness Platform Development",
      intro: "Build scalable digital fitness ecosystems that connect trainers, members, and wellness communities across the globe.",
      listTitle: "Platform Capabilities",
      listItems: [
        "Live Streaming Classes",
        "Video-on-Demand Libraries",
        "Community Forums",
        "Online Coaching Tools",
        "Subscription Plans",
        "Payment Gateway Integration"
      ],
      outcomeTitle: "Business Outcomes",
      outcomeItems: [
        "Global audience reach",
        "24/7 digital access",
        "Scalable revenue streams",
        "Stronger community building"
      ]
    },
    {
      id: "ai-fitness",
      tabTitle: "AI Fitness App Development",
      title: "AI-Powered Fitness Applications",
      intro: "Artificial Intelligence is transforming the fitness industry. We build smart solutions that provide highly personalized experiences for users.",
      listTitle: "AI-Powered Features",
      listItems: [
        "Personalized Training Programs",
        "Smart Goal Recommendations",
        "Virtual Fitness Coaches",
        "Workout Optimization",
        "Predictive Analytics",
        "Actionable Health Insights"
      ],
      outcomeTitle: "Business Outcomes",
      outcomeItems: [
        "Hyper-personalized user journeys",
        "Automated coaching delivery",
        "Higher motivation and results",
        "Advanced data analytics"
      ]
    },
    {
      id: "wearables",
      tabTitle: "Wearable Integration",
      title: "Wearable Fitness App Development",
      intro: "Integrate seamlessly with popular wearable devices to provide real-time health, activity, and fitness tracking directly in your application.",
      listTitle: "Device Integrations",
      listItems: [
        "Apple Watch",
        "Fitbit Integration",
        "Garmin Connect",
        "Samsung Galaxy Watch",
        "Google Wear OS",
        "Custom Bluetooth Devices"
      ],
      outcomeTitle: "Tracked Metrics",
      outcomeItems: [
        "Real-time Heart Rate",
        "Calories Burned",
        "Sleep Monitoring",
        "Activity Levels",
        "Distance & Route Tracking"
      ]
    }
  ];

  return (
    <section className="detailed-services-section pt100 pb100" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            OUR <span className="c-primary">HEALTH & FITNESS</span> SOLUTIONS
          </h2>
          <p className="slider-content-text">We develop custom fitness applications that combine technology, personalization, and performance tracking.</p>
        </div>

        {/* Mobile View Accordion (d-block d-lg-none) */}
        <div className="row mt-5 d-block d-lg-none">
          <div className="col-12" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {services.map((service, index) => {
              const isOpen = activeTab === index;
              return (
                <div 
                  key={service.id} 
                  style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    background: '#ffffff',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <button 
                    onClick={() => setActiveTab(isOpen ? -1 : index)}
                    className="w-100 p-3"
                    style={{
                      width: '100%',
                      height: '3.5em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 1.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      borderRadius: '0',
                      border: 'none',
                      boxShadow: 'none',
                      outline: 'none',
                      background: isOpen ? 'rgba(0, 131, 255, 0.05)' : 'transparent',
                      transition: 'background-color 0.3s'
                    }}
                  >
                    <span style={{ color: isOpen ? '#0083ff' : '#000000' }}>{service.tabTitle}</span>
                    <span style={{ 
                      color: isOpen ? '#0083ff' : '#64748b',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s'
                    }}>▼</span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '20px', background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                      <span className="badge mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px" }}>
                        Digital Fitness Solution
                      </span>

                      <h3 className="mb-3 text-dark" style={{ fontSize: "1.4rem", fontWeight: "700" }}>
                        {service.title}
                      </h3>

                      <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {service.intro}
                      </p>

                      <hr style={{ borderTop: "1px solid #eaeaea", margin: "20px 0" }} />

                      <div className="row">
                        <div className="col-12 mb-4">
                          <div className="d-flex align-items-center mb-2">
                            <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.1rem", display: "flex" }}>
                              <ion-icon name="options-outline"></ion-icon>
                            </div>
                            <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "0.95rem" }}>{service.listTitle}</h4>
                          </div>
                          <ul className="list-unstyled p-0 m-0">
                            {service.listItems.map((item, idx) => (
                              <li key={idx} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.9rem" }}>
                                <span style={{ color: "#0083ff", marginRight: "8px", fontWeight: "bold" }}>✓</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="col-12">
                          <div className="d-flex align-items-center mb-2">
                            <div className="icon-wrap me-2" style={{ color: "#ff5e3a", fontSize: "1.1rem", display: "flex" }}>
                              <ion-icon name="stats-chart-outline"></ion-icon>
                            </div>
                            <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "0.95rem" }}>{service.outcomeTitle}</h4>
                          </div>
                          <ul className="list-unstyled p-0 m-0">
                            {service.outcomeItems.map((item, idx) => (
                              <li key={idx} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.9rem" }}>
                                <span style={{ color: "#ff5e3a", marginRight: "8px", fontWeight: "bold" }}>✦</span> {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View (d-none d-lg-flex) */}
        <div className="row mt-5 d-none d-lg-flex" style={{ alignItems: 'stretch' }}>
          {/* Left Tab Pills (Desktop only) */}
          <div className="col-lg-4 mb-4 mb-lg-0" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="d-flex flex-column nav nav-pills" role="tablist" style={{ gap: "12px", height: '100%', justifyContent: 'space-between' }}>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`custom-uiverse-tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                  style={{
                    '--active-color': '#0083ff',
                    width: '100%',
                    height: 'auto',
                    flex: '1', /* Let buttons dynamically scale to distribute heights evenly */
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: "pointer",
                    outline: "none"
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between w-100 px-3" style={{ zIndex: 2 }}>
                    <span>{service.tabTitle}</span>
                    <span style={{ fontSize: "1.2rem", transition: "transform 0.3s", transform: activeTab === index ? "translateX(4px)" : "none" }}>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Detail Panel */}
          <div className="col-lg-8" style={{ display: 'flex' }}>
            <div className="card border-0 shadow-sm p-4 p-md-5 w-100"
              style={{
                borderRadius: "16px",
                background: "#ffffff",
                border: "1px solid #f0f0f0",
                boxShadow: "rgba(0, 0, 0, 0.02) 0px 10px 30px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
              <div className="card-body p-0">
                <span className="badge mb-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 12px", fontSize: "0.8rem", borderRadius: "6px" }}>
                  Digital Fitness Solution
                </span>

                <h3 className="mb-3 text-dark" style={{ fontSize: "1.6rem", fontWeight: "700" }}>
                  {services[activeTab >= 0 ? activeTab : 0].title}
                </h3>

                <p className="text-muted mb-4" style={{ fontSize: "1.02rem", lineHeight: "1.6" }}>
                  {services[activeTab >= 0 ? activeTab : 0].intro}
                </p>

                <hr style={{ borderTop: "1px solid #eaeaea", margin: "25px 0" }} />

                <div className="row">
                  {/* Left Column: Key Deliverables */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#0083ff", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="options-outline"></ion-icon>
                      </div>
                      <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab >= 0 ? activeTab : 0].listTitle}</h4>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                      {services[activeTab >= 0 ? activeTab : 0].listItems.map((item, index) => (
                        <li key={index} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.95rem" }}>
                          <span style={{ color: "#0083ff", marginRight: "8px", fontWeight: "bold" }}>✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Business Outcomes */}
                  <div className="col-md-6">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-wrap me-2" style={{ color: "#ff5e3a", fontSize: "1.2rem", display: "flex" }}>
                        <ion-icon name="stats-chart-outline"></ion-icon>
                      </div>
                      <h4 className="h6 fw-bold mb-0 text-dark" style={{ fontSize: "1rem" }}>{services[activeTab >= 0 ? activeTab : 0].outcomeTitle}</h4>
                    </div>
                    <ul className="list-unstyled p-0 m-0">
                      {services[activeTab >= 0 ? activeTab : 0].outcomeItems.map((item, index) => (
                        <li key={index} className="mb-2 text-muted d-flex align-items-center" style={{ fontSize: "0.95rem" }}>
                          <span style={{ color: "#ff5e3a", marginRight: "8px", fontWeight: "bold" }}>✦</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthFitnessServices;
