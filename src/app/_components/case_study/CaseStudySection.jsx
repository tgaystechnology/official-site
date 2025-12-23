import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CaseStudySection = () => {
  const caseStudies = [
    { img: 'img/ezshopit-cst-list-img.png', title: "Ezshopit", category: "Multi-Currency, Multi-Vendor E-Commerce Platform.", url: 'ezshopit' },
    { img: 'img/worthmetrix-cst-list-img.png', title: "Worthmetrix", category: "Business Health Analysis Platform.", url: 'worthmetrix' },
    { img: 'img/al-cst-list-img.png', title: "EvolveAI", category: "AI-Powered Health & Fitness App.", url: 'evolveai' },
    { img: 'img/ezshopit-cst-list-mobile.png', title: "Ezshopit Mobile App", category: "Multi-Vendor, Multi-Currency E-Commerce Mobile App.", url: 'ezshopit-mobile' },
    { img: 'img/bolton-cst-list-img.png', title: "Bolton Travel", category: "Tour & Travel Management System.", url: 'bolton-travel' },
    { img: 'img/taskity-cst-list.png', title: "Taskity", category: "Business Sales & Marketing Automation Platform.", url: 'taskity' },
    { img: 'img/martwat-cst-list.png', title: "MartWat", category: "Inventory, Warehouse, Sales & POS Management System.", url: 'martwat' },
    { img: 'img/SJRS-cst-list.png', title: "SJRS School ERP", category: "Comprehensive School Management System.", url: 'sjrs-school-erp' },
  ];

  return (
    <section className="crumina-module crumina-module-slider pt100 hm-easy-section case-study-section">
      {/* Background Shape */}
      <div className="shape3">
        <Image 
          src="/img/intro-v1-shape3.png" 
          alt=""
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <div className="container">
        {/* Section Heading */}
        <div className="crumina-module hm-easy_title text-center">
          <h2 className="heading-title">Case <span className="c-primary"> Study</span></h2>
        </div>

        {/* Case Studies Grid */}
        <div className="row case-section">
          {caseStudies.map((study, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="case-item">
                <div className="case-img">
                  <Image
                    src={`/${study.img}`}
                    alt={study.title}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="case-content"> 
                  <h3 className="title">{study.title}</h3>
                  <h6 className="category">{study.category}</h6>
                  <Link href={`/case-study/${study.url}`} className="text-link">
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
