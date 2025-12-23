import React from 'react';
import Image from 'next/image';

const CustomCrmSolutionsSection = () => {
  // Solutions data
  const solutions = [
    {
      id: 1,
      number: "1",
      title: "Healthcare Industry",
      description: "Manage patient records, automate appointment scheduling, streamline billing, and enable secure access to medical history—all in one place.",
      arrow: true,
      className: "first mb-md50"
    },
    {
      id: 2,
      number: "2",
      title: "Retail & E-commerce",
      description: "Track orders, manage customer profiles, run targeted promotions, and analyze sales performance to scale your online store efficiently.",
      arrow: true,
      className: "odd mb-md50 manage-botm"
    },
    {
      id: 3,
      number: "3",
      title: "Education / Ed-Tech",
      description: "Automate admissions, manage student data, course schedules, and enhance student-teacher engagement with custom CRM workflows.",
      arrow: true,
      className: "mb-sm50 system-top"
    },
    {
      id: 4,
      number: "4",
      title: "Finance & Banking",
      description: "Securely handle client portfolios, track transactions, automate compliance, and deliver personalized financial services efficiently.",
      arrow: false,
      className: "odd manage-botm"
    },
    {
      id: 5,
      number: "5",
      title: "Travel & Hospitality",
      description: "Handle reservations, guest preferences, loyalty programs, and feedback efficiently to deliver exceptional customer experiences.",
      arrow: true,
      className: "first mb-md50"
    },
    {
      id: 6,
      number: "6",
      title: "Logistics & Supply Chain",
      description: "Track shipments, manage vendor and warehouse data, streamline communication, and monitor delivery timelines with precision.",
      arrow: true,
      className: "odd mb-md50 manage-botm"
    },
    {
      id: 7,
      number: "7",
      title: "Health & Fitness",
      description: "Manage memberships, class schedules, trainer assignments, and progress tracking with ease through a fitness-optimized CRM.",
      arrow: true,
      className: "mb-sm50 system-top"
    },
    {
      id: 8,
      number: "8",
      title: "Real Estate",
      description: "From lead generation to contract closure, manage every aspect of property sales with centralized dashboards and client pipelines.",
      arrow: false,
      className: "mb-sm50 manage-botm"
    },
  ];

  return (
    <div className="process section-padding bg-img bg-fixed pos-re text-center was_section">
      <div className="container">
        <div className="row">
          <div className="crumina-module crumina-heading">
            <h2 className="heading-title">OUR CUSTOM CRM SOLUTIONS TO DIFFERENT <span className="c-primary">INDUSTRIES</span></h2>
          </div>
          <div className="full-width clearfix"></div>
          
          {solutions.map((solution) => (
            <div key={solution.id} className="col-lg-3 col-md-6">
              <div className={`item ${solution.className}`}>
                {solution.arrow && (
                  <Image 
                    src="/img/arrow.png" 
                    alt="" 
                    width={50} 
                    height={20}
                    className="tobotm"
                  />
                )}
                <h3 className="icon icon-basic-lightbulb">{solution.number}</h3>
                <div className={solution.id <= 4 ? "cont f_for" : "cont"}>
                  <h6>{solution.title}</h6>
                  <p>{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="curve curve-gray-t curve-top"></div>
      <div className="curve curve-bottom"></div>
    </div>
  );
};

export default CustomCrmSolutionsSection;