import React from 'react';

const WhatWeDo = () => {
  const services = [
    { 
      name: 'AI Powered Services', 
      icon: 'logo-apple-appstore',
      className: 'dark-black'
    },
    { 
      name: 'Social Media Marketing', 
      icon: 'analytics-outline',
      className: 'lite-black'
    },
    { 
      name: 'IT Staff Augmentation', 
      icon: 'desktop-outline',
      className: 'lite-black'
    },
    { 
      name: 'Web Development', 
      icon: 'desktop-outline',
      className: 'dark-black'
    },
    { 
      name: 'Mobile App Development', 
      icon: 'phone-portrait-outline',
      className: 'dark-black'
    },
    { 
      name: 'Product Development', 
      icon: 'grid-outline',
      className: 'lite-black'
    },
    { 
      name: 'M365 Development', 
      icon: 'logo-medium',
      className: 'lite-black'
    },
    { 
      name: 'Offshore Development', 
      icon: 'cog-outline',
      className: 'dark-black'
    },
    { 
      name: 'Custom Software Development', 
      icon: 'desktop-outline',
      className: 'dark-black'
    },
    { 
      name: 'MVP Development', 
      icon: 'logo-medium',
      className: 'lite-black'
    },
    { 
      name: 'Digital Marketing', 
      icon: 'megaphone-outline',
      className: 'lite-black'
    },
    { 
      name: 'Application Support', 
      icon: 'construct-outline',
      className: 'dark-black'
    }
  ];

  return (
    <section className="who-we-are-sec what-we-do-sec">
      <div className="container">
        <div className="who-we-are-area">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="who-we-are-list-area">
                <div className="who-we-are-text-area align-center">
                  <h3 className="h5 info-box-title">What We Do</h3>
                  <ul className="list-unstyled video-one__list what-we-do-list">
                    {services.map((service, index) => (
                      <li key={index} className={service.className}>
                        <ion-icon name={service.icon}></ion-icon>
                        <span>{service.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;