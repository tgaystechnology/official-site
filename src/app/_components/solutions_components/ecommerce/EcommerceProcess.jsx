'use client'
import React from 'react';

const EcommerceProcess = () => {
  const steps = [
    { num: "01", title: "Discovery & Strategy", desc: "We assess your business model, customers, competitors, and goals to build a winning strategy.", icon: "search-outline", color: "#00c6ff" },
    { num: "02", title: "Solution Architecture", desc: "Define the ideal platform structure, integrations, and technology stack for scalability.", icon: "layers-outline", color: "#0072ff" },
    { num: "03", title: "UX/UI Design", desc: "Design intuitive shopping experiences that maximize conversions and brand loyalty.", icon: "color-palette-outline", color: "#8e2de2" },
    { num: "04", title: "Development", desc: "Build custom ecommerce functionality, payment gateways, and backend integrations.", icon: "code-slash-outline", color: "#f107a3" },
    { num: "05", title: "Testing & QA", desc: "Validate performance, security, and usability across all devices and browsers.", icon: "shield-checkmark-outline", color: "#ff512f" },
    { num: "06", title: "Deployment", desc: "Launch your platform with minimal disruption to your existing operations.", icon: "rocket-outline", color: "#f09819" },
    { num: "07", title: "Optimization & Support", desc: "Continuously improve performance, security updates, and customer experience post-launch.", icon: "headset-outline", color: "#56ab2f" }
  ];

  // Split steps into chunks of 4 for desktop rows
  const chunkedSteps = [];
  for (let i = 0; i < steps.length; i += 4) {
    chunkedSteps.push(steps.slice(i, i + 4));
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 992px) {
          .step-low {
            margin-top: 80px !important;
          }
        }
        .iso-diamond {
          width: 80px;
          height: 80px;
          background: #ffffff;
          border-radius: 18px;
          transform: rotateX(55deg) rotateZ(-45deg);
          box-shadow: -2px 2px 0px rgba(0,0,0,0.05), -4px 4px 10px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.03);
        }
        .process-step-container:hover .iso-diamond {
          transform: rotateX(55deg) rotateZ(-45deg) translate(-5px, -5px);
          box-shadow: -2px 2px 0px rgba(0,0,0,0.02), -10px 10px 25px rgba(0,0,0,0.1);
        }
        .process-step-container {
          cursor: default;
        }
      `}} />

      <section className="process-section pt100 pb100 bg-light">
        <div className="container">
          <div className="crumina-module crumina-heading text-center mb-5 pb-4">
            <h2 className="heading-title">
              Our Ecommerce Software <span className="c-primary">Development Process</span>
            </h2>
            <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
              A proven, agile methodology designed to turn your ecommerce vision into a fully functional, high-converting digital reality.
            </p>
          </div>

          {chunkedSteps.map((chunk, rowIdx) => (
            <div className="row position-relative mb-5 pb-lg-5" key={rowIdx}>
              {/* Desktop SVG Zigzag Connector Line */}
              <div className="d-none d-lg-block position-absolute" style={{ top: '35px', left: 0, width: '100%', height: '80px', zIndex: 0 }}>
                <svg width="100%" height="100%" preserveAspectRatio="none">
                  <line x1="12.5%" y1="0" x2="37.5%" y2="100%" stroke="#cbd5e1" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                  <line x1="37.5%" y1="100%" x2="62.5%" y2="0" stroke="#cbd5e1" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                  {chunk.length > 3 && (
                    <line x1="62.5%" y1="0" x2="87.5%" y2="100%" stroke="#cbd5e1" strokeWidth="4" vectorEffect="non-scaling-stroke" />
                  )}
                </svg>
              </div>

              {chunk.map((step, idx) => {
                const isLow = idx % 2 === 1;
                return (
                  <div key={idx} className={`col-lg-3 col-md-6 mb-5 mb-lg-0 ${isLow ? 'step-low' : ''}`}>
                    <div className="process-step-container d-flex flex-column align-items-center position-relative h-100">
                      
                      {/* Floating Tilted Number */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '-25px', 
                        left: 'calc(50% - 65px)', 
                        color: step.color, 
                        fontWeight: '800', 
                        fontSize: '1.8rem', 
                        transform: 'skewY(-25deg)',
                        zIndex: 3 
                      }}>
                        {step.num}
                      </div>

                      {/* Diamond and Glow Wrapper */}
                      <div className="position-relative d-flex justify-content-center" style={{ width: '100%', height: '110px' }}>
                        {/* High-Contrast Colored Glow Shadow */}
                        <div style={{
                          position: 'absolute',
                          top: '15px',
                          width: '75px',
                          height: '75px',
                          background: step.color,
                          filter: 'blur(12px)',
                          opacity: 0.85,
                          zIndex: 1,
                          borderRadius: '20px',
                          transform: 'rotateX(55deg) rotateZ(-45deg)'
                        }}></div>

                        {/* Isometric Diamond */}
                        <div className="iso-diamond">
                          <div style={{ transform: 'rotateZ(45deg)', color: '#334155', fontSize: '2rem', display: 'flex' }}>
                            <ion-icon name={step.icon}></ion-icon>
                          </div>
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="text-center px-2 mt-4">
                        <h3 className="mb-3 text-uppercase" style={{ color: step.color, fontSize: '0.9rem', fontWeight: '800', letterSpacing: '1px' }}>{step.title}</h3>
                        <p className="text-muted" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>{step.desc}</p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EcommerceProcess;
