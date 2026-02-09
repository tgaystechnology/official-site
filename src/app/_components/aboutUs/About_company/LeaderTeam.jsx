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
      role="region"
      aria-labelledby="chairman-heading"
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
              <article className="team-details__top-right">
                <div className="team-details__top-content">
                  <h2 id="chairman-heading" className="team-details__top-name">Jamal Ashraf</h2>
                  <p className="team-details__top-title">Chairman & Director</p>
                  
                  <div className="team-details__social" aria-label="Chairman social media profiles">
                    {socialLinks.map((social, index) => (
                      <Link 
                        key={index} 
                        href={social.url}
                        className="social-link"
                        aria-label={`Visit Jamal Ashraf on ${social.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
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
              </article>
            </div>

            {/* Right Column - Image */}
            <div className="col-xl-4 col-lg-4">
              <figure className="team-details__top-left">
                <div className="team-details__top-img">
                  <Image
                    src="/img/jamal.jpg"
                    alt="Jamal Ashraf, Chairman and Director of TGAYS Technology IT Company"
                    width={400}
                    height={500}
                    className="team-member-image"
                    priority
                  />
                  <div className="team-details__big-text"></div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderTeam;