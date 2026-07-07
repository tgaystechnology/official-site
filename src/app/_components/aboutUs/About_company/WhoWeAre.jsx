import React from 'react';
import Link from 'next/link';

const WhoWeAre = () => {
  const industries = [
    { name: 'E-Commerce', className: 'dark-black', link: '/solutions/e-commerce-solution' },
    { name: 'Healthcare', className: 'lite-black', link: '/solutions/healthcare' },
    { name: 'Tour & Travel', className: 'lite-black', link: '/solutions/tour-travel' },
    { name: 'Finance', className: 'dark-black' },
    { name: 'Real Estate', className: 'dark-black' },
    { name: 'Education', className: 'lite-black', link: '/solutions/education' },
    { name: 'Food Industry', className: 'lite-black' },
    { name: 'Gym', className: 'dark-black', link: '/solutions/health-fitness' }
  ];

  return (
    <section className="who-we-are-sec" role="region" aria-labelledby="who-we-are-heading">
      <div className="container">
        <div className="who-we-are-area">
          <div className="row">
            {/* Left Column - Description */}
            <div className="col-12 col-md-12 col-lg-6">
              <div className="who-we-are-text-area">
                <h2 className="h5 info-box-title">Who We Are</h2>
                <p className="info-box-text">
                  TGAYS(Tech Geeks) has emerged out of technology requirement to provide 
                  solutions to professionals(Doctors, CA, Lawyers etc.), Small 
                  Businesses(Micro, Small, Medium), Start-ups and Large-scale Businesses 
                  across the Globe.
                </p>
              </div>
            </div>

            {/* Right Column - Industry List */}
            <div className="col-12 col-md-12 col-lg-6">
              <div className="who-we-are-list-area">
                <div className="who-we-are-title">
                  <h3>Industry we serve</h3>
                </div>
                <ul className="list-unstyled video-one__list" aria-label="Industries served by TGAYS Technology">
                  {industries.map((industry, index) => (
                    <li key={index} className={industry.className} itemScope
                  itemType="https://schema.org/Industry">
                      <ion-icon name="checkmark-outline"></ion-icon>
                      {industry.link ? (
                        <Link href={industry.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                          <span itemProp="name">{industry.name}</span>
                        </Link>
                      ) : (
                        <span itemProp="name">{industry.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;