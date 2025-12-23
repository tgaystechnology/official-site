import React from 'react';

const WhoWeAre = () => {
  const industries = [
    { name: 'E-Commerce', className: 'dark-black' },
    { name: 'Healthcare', className: 'lite-black' },
    { name: 'Tour & Travel', className: 'lite-black' },
    { name: 'Finance', className: 'dark-black' },
    { name: 'Real Estate', className: 'dark-black' },
    { name: 'Education', className: 'lite-black' },
    { name: 'Food Industry', className: 'lite-black' },
    { name: 'Gym', className: 'dark-black' }
  ];

  return (
    <section className="who-we-are-sec">
      <div className="container">
        <div className="who-we-are-area">
          <div className="row">
            {/* Left Column - Description */}
            <div className="col-12 col-md-12 col-lg-6">
              <div className="who-we-are-text-area">
                <h3 className="h5 info-box-title">Who We Are</h3>
                <p className="info-box-text">
                  TGAYS(Tech Geeks) has emerged out of technology requirement to provide solutions to professionals(Doctors, CA, Lawyers etc.), Small Businesses(Micro, Small, Medium), Start-ups and Large-scale Businesses across the Globe.
                </p>
              </div>
            </div>

            {/* Right Column - Industry List */}
            <div className="col-12 col-md-12 col-lg-6">
              <div className="who-we-are-list-area">
                <div className="who-we-are-title">
                  <h6>Industry we serve</h6>
                </div>
                <ul className="list-unstyled video-one__list">
                  {industries.map((industry, index) => (
                    <li key={index} className={industry.className}>
                      <ion-icon name="checkmark-outline"></ion-icon>
                      <span>{industry.name}</span>
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