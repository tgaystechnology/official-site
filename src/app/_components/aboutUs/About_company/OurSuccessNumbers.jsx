'use client'
import React, { useEffect } from 'react';

const   OurSuccessNumbers = () => {
  const stats = [
    { id: 'projectDelivered', value: 500, title: 'Projects Delivered' },
    { id: 'teamSize', value: 50, title: 'Team Size' },
    { id: 'overseasClients', value: 100, title: 'Overseas Clients' }
  ];

  useEffect(() => {
    // Animation function for counting up
    const animateCounters = () => {
      stats.forEach(stat => {
        const counter = document.getElementById(stat.id);
        if (counter) {
          const target = stat.value;
          const duration = 2000; // 2 seconds
          const increment = target / (duration / 16); // 60fps

          let current = 0;
          const updateCounter = () => {
            current += increment;
            if (current < target) {
              counter.innerText = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target;
            }
          };
          updateCounter();
        }
      });
    };

    // Intersection Observer to trigger animation when section is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const section = document.querySelector('.our-success-numbers-sec');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="our-success-numbers-sec" role="region" aria-labelledby="our-success-heading">
      <div className="container">
        <div className="number-box">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
              <div className="crumina-module crumina-heading align-center">
                <p>Our Success</p>
                <h2 id="our-success-heading" className="heading-title">Transforming Ideas Into Digital Reality </h2>
              </div>
            </div>

            {stats.map((stat, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-12 col-xxl-4">
                <div className="fact-one__item">
                  <div className="fact-one__count" aria-label={`${stat.title} count`}>
                    <span className="count-box counted">
                      <span id={stat.id} className="count-text" aria-live="polite">0</span>
                    </span>
                    <span className="count-box-postfix" aria-hidden="true">+</span>
                  </div>
                  <h3 className="fact-one__title">{stat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccessNumbers;