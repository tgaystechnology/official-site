import React from 'react';
import Image from 'next/image';

const WeServeIndustries = () => {
  const industries = [
    {
      id: 1,
      icon: 'heart-outline',
      title: 'Healthcare',
      description: 'AI chatbots, smart scheduling, and secure systems to modernize patient care for clinics and telemedicine platforms.'
    },
    {
      id: 2,
      icon: 'book-outline',
      title: 'Education / Ed-Tech',
      description: 'From LMS platforms to virtual classrooms, we build tech that transforms learning for institutions and ed-tech startups.'
    },
    {
      id: 3,
      icon: 'cart-outline',
      title: 'Retail & E-commerce',
      description: 'Smart inventory, personalized shopping, and scalable platforms that boost customer satisfaction and online sales.'
    },
    {
      id: 4,
      icon: 'cash-outline',
      title: 'Finance & Banking',
      description: 'Secure, AI-driven financial solutions for banks, NBFCs, and fintechs to streamline compliance and operations.'
    },
    {
      id: 5,
      icon: 'cube-outline',
      title: 'Logistics & Supply Chain',
      description: 'Real-time tracking, route optimization, and predictive analytics that help businesses move smarter and faster.'
    },
    {
      id: 6,
      icon: 'car-sport-outline',
      title: 'Travel & Hospitality',
      description: 'AI-based booking, personalized itineraries, and instant support for hotels, travel agencies, and tourism platforms.'
    },
    {
      id: 7,
      icon: 'fitness-outline',
      title: 'Health & Fitness',
      description: 'Custom CRMs for gyms and fitness centers with attendance tracking, payments, SMS alerts, and client management tools.'
    },
    {
      id: 8,
      icon: 'home-outline',
      title: 'Real Estate',
      description: 'Virtual tours, CRM integrations, and AI-powered tools to attract clients and close property deals faster.'
    }
  ];

  return (
    <section className="industry-list relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Patterns */}
      <div className="shape-instry-1 absolute top-0 left-0 w-1/3 opacity-10">
        <Image 
          src="/img/pattern-8.png" 
          alt="Decorative pattern"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className="shape-instry-2 absolute bottom-0 right-0 w-1/3 opacity-10">
        <Image 
          src="/img/pattern-7.png" 
          alt="Decorative pattern"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="crumina-module crumina-heading hm-easy_title text-center mb-16">
          <h2 className="heading-title text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="subheading text-xl text-gray-600">
            Smart Solutions for Every Sector
          </p>
        </div>

        <div className="row align-items-end">
          <div className="col-12 col-md-12">
            <div className="row">
              {industries.map((industry) => (
                <div key={industry.id} className="col-sm-6 col-md-6">
                  <div className="rs-icon-info-3 bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <div className="info-icon text-blue-600 text-4xl mb-6">
                      <ion-icon name={industry.icon}></ion-icon>
                    </div>
                    <div className="info-text">
                      <h4 className="text-black mb-4 text-2xl font-semibold">
                        {industry.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeServeIndustries;