import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LeaderTeam = () => {
  const socialLinks = [
    { icon: 'fa-facebook', url: '#' },
    { icon: 'fa-twitter', url: '#' },
    { icon: 'fa-google', url: '#' },
    { icon: 'fa-instagram', url: '#' }
  ];

  return (
    <section 
      className="team-details bg-cover" 
      style={{ 
        backgroundImage: 'url(/img/faq782-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="team-details__top">
          <div className="row">
            {/* Left Column - Content */}
            <div className="col-xl-8 col-lg-8">
              <div className="team-details__top-right">
                <div className="team-details__top-content">
                  <h3 className="team-details__top-name">Jamal Ashraf</h3>
                  <p className="team-details__top-title">Chairman & Director</p>
                  
                  <div className="team-details__social">
                    {socialLinks.map((social, index) => (
                      <Link 
                        key={index} 
                        href={social.url}
                        className="social-link"
                      >
                        <i className={`fa ${social.icon}`} aria-hidden="true"></i>
                      </Link>
                    ))}
                  </div>

                  <p className="team-details__top-text-1">Chairman Message</p>
                  <p className="team-details__top-text-3">
                    I think that the 3 most important pillars of success for any Business are Happy Customers, 
                    Good Leadership and Engaged and Motivated Team.
                  </p>
                  <p className="team-details__top-text-2">
                    We have a number of happy and repeated customers because our mission is to focus on 
                    understanding customers and designing products and services that solve their problems. 
                    Also, our people work in an environment of belonging and purpose. Their engagement is 
                    the emotional commitment that they have to us and our mission.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-xl-4 col-lg-4">
              <div className="team-details__top-left">
                <div className="team-details__top-img">
                  <Image
                    src="/img/jamal.jpg"
                    alt="Jamal Ashraf - Chairman & Director"
                    width={400}
                    height={500}
                    className="team-member-image"
                  />
                  <div className="team-details__big-text"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderTeam;