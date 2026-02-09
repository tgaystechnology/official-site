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
    <section className="who-we-are-sec what-we-do-sec" aria-labelledby="what-we-do-heading">
      <div className="container">
        <div className="who-we-are-area">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="who-we-are-list-area">
                <div className="who-we-are-text-area align-center">
                  <h2 id="what-we-do-heading" className="h5 info-box-title">What We Do</h2>
                  <ul className="list-unstyled video-one__list what-we-do-list" aria-label="IT services offered by TGAYS Technology">
                    {services.map((service, index) => (
                      <li key={index} className={service.className} itemScop itemType="https://schema.org/Service">
                        <ion-icon name={service.icon}></ion-icon>
                        <span itemProp="name">{service.name}</span>
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