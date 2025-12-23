import React from 'react';
import Link from 'next/link';

const CaseStudyDetailBanner = ({ slug }) => {
  // Centralized case study data
  const caseStudyData = {
    ezshopit: {
      image: '/img/ezshopit-banner-port.png',
      heading: 'Ezshopit – Multi-Currency, Multi-Vendor E-Commerce Platform',
      details: [
        { label: 'Client Location', value: 'Dubai, UAE' },
        { label: 'Framework', value: 'CodeIgniter' },
        { label: 'Website', value: 'Demo Available on Request' },
      ],
    },
    worthmetrix: {
      image: '/img/worthmetrix-port-banner.png',
      heading: 'Worthmetrix – Business Health Analysis Platform',
      details: [
        { label: 'Client Location', value: 'USA' },
        { label: 'Framework', value: 'CodeIgniter' },
        { label: 'Website', value: 'worthmetrix.com' },
      ],
    },
    evolveai: {
      image: '/img/EvolveAI-prt-banner.png',
      heading: 'EvolveAI – AI-Powered Health & Fitness App',
      details: [
        { label: 'Client Location', value: 'USA' },
        { label: 'Technology Stack', value: 'React Native, Firebase Cloud Storage, Stripe' },
        { label: 'Platforms', value: 'Android & iOS' },
        { label: 'App Downloads', value: '1000+' },
      ],
    },
    'ezshopit-mobile': {
      image: '/img/Ezshopit-mobile-port-banner.png',
      heading: 'Ezshopit – Multi-Vendor, Multi-Currency E-Commerce Mobile App',
      details: [
        { label: 'Client Location', value: 'Dubai, UAE' },
        { label: 'Technology Stack', value: 'React Native, Twilio, PayPal, MongoDB, Ajax, Figma' },
        { label: 'Platforms', value: 'Android & iOS' },
      ],
    },
    'bolton-travel': {
      image: '/img/Bolton-Travel-port-banner.png',
      heading: 'Bolton Travel – Tour & Travel Management System',
      details: [
        { label: 'Client Location', value: 'UK' },
        { label: 'Technology Stack', value: 'Laravel, HTML5, CSS3, Bootstrap, Figma Design, Ajax' },
      ],
    },
    'taskity': {
      image: '/img/taskity-banner.png',
      heading: 'Taskity – Business Sales & Marketing Automation Platform',
      details: [
        { label: 'Client Location', value: 'India' },
        { label: 'Technology Stack', value: 'CodeIgniter, HTML5, CSS3, Bootstrap, Ajax, Stripe Payment' },
      ],
    },
    'martwat': {
      image: '/img/mart-banner.png',
      heading: 'MartWat – Inventory, Warehouse, Sales & POS Management System',
      details: [
        { label: 'Client Location', value: 'India' },
        { label: 'Technology Stack', value: 'CodeIgniter, HTML5, CSS3, Bootstrap, Ajax, JavaScript, XML, JSON' },
      ],
    },
    'sjrs-school-erp': {
      image: '/img/SJRS-banner.png',
      heading: 'SJRS School ERP – Comprehensive School Management System',
      details: [
        { label: 'Client Location', value: 'India' },
        { label: 'Technology Stack', value: 'Laravel, HTML5, CSS3, Bootstrap, Ajax, Datatable, JavaScript, PayPal Payment Integration, XML, JSON, SMS Gateway' },
      ],
    },
    // ✅ Add more slugs here as needed
  };

  // Get data for current slug, fallback if not found
  const currentData = caseStudyData[slug] || {
    image: '/img/case-study-banner.png',
    heading: 'Case Study',
    details: [
      { label: 'Info', value: 'Not Available' },
    ],
  };

  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: `url(${currentData.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>{currentData.heading}</h3>
          <p>
            {currentData.details.map((item, index) => (
              <span key={index}>
                <strong>{item.label}: </strong> {item.value} <br/>
              </span>
            ))}
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDetailBanner;
