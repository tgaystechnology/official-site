'use client'
import React from 'react';

const HealthFitnessChallenges = () => {
  const challenges = [
    {
      challenge: "Low User Retention",
      impact: "Users abandon generic fitness apps quickly after downloading.",
      solution: "Gamification, AI personalization, community engagement, and progress tracking.",
      icon: "walk-outline"
    },
    {
      challenge: "Limited Revenue Streams",
      impact: "Difficulty monetizing digital fitness products effectively.",
      solution: "Subscription models, premium content, coaching services, and marketplace functionality.",
      icon: "cash-outline"
    },
    {
      challenge: "Manual Gym Operations",
      impact: "Administrative inefficiencies reduce staff productivity and member satisfaction.",
      solution: "Automated gym management software and intelligent CRM systems.",
      icon: "business-outline"
    },
    {
      challenge: "Lack of User Engagement",
      impact: "Low daily app usage and activity levels among members.",
      solution: "Interactive experiences, push notifications, AI recommendations, and wearable integrations.",
      icon: "fitness-outline"
    },
    {
      challenge: "Scalability Issues",
      impact: "Growing user bases strain legacy infrastructure, causing crashes.",
      solution: "Cloud-native, highly scalable, and secure platform architecture.",
      icon: "trending-up-outline"
    }
  ];

  return (
    <section className="challenges-section pt100 pb70 bg-light" role="region" aria-labelledby="challenges-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="challenges-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BUSINESS CHALLENGES <span className="c-primary">WE SOLVE</span>
          </h2>
          <p className="slider-content-text">Addressing the most critical pain points in the fitness industry to keep your business growing and your users active.</p>
        </div>

        <div className="row justify-content-center">
          {challenges.map((item, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="challenge-card p-4 rounded-4 shadow-sm h-100 bg-white" style={{ borderLeft: "4px solid #0083FF", transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="d-flex align-items-start">
                  <div className="icon-wrap me-3 text-primary" style={{ fontSize: "2rem", color: "#0083FF" }}>
                    <ion-icon name={item.icon}></ion-icon>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-2 text-dark">{item.challenge}</h3>
                    <p className="text-muted mb-2" style={{ fontSize: "0.95rem" }}><strong>The Challenge:</strong> {item.impact}</p>
                    <p className="text-primary fw-semibold mb-0" style={{ fontSize: "0.95rem", color: "#0083FF !important" }}>
                      <ion-icon name="checkmark-done-outline" style={{ verticalAlign: "middle", marginRight: "5px" }}></ion-icon>
                      Solution: {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthFitnessChallenges;
