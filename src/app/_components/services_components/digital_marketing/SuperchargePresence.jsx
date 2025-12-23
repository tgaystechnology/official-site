import React from 'react';
import Image from 'next/image';

const SuperchargePresence = () => {
  // Solutions data
  const solutions = [
    {
      id: 1,
      number: "1",
      title: "Increased Online Visibility",
      description: "Show up at the top of search results and make it easier for people to find your business online.",
      arrow: true,
      className: "first mb-md50"
    },
    {
      id: 2,
      number: "2",
      title: "Enhanced Brand Awareness",
      description: "Let more people know about your brand through targeted online ads and strong SEO presence.",
      arrow: true,
      className: "odd mb-md50 manage-botm"
    },
    {
      id: 3,
      number: "3",
      title: "Improved Website Traffic and Lead Generation",
      description: "Attract the right people to your website who are more likely to become your customers.",
      arrow: true,
      className: "mb-sm50 system-top"
    },
    {
      id: 4,
      number: "4",
      title: "Better User Experience",
      description: "We improve your site’s speed, mobile experience, and usability to keep visitors engaged.",
      arrow: false,
      className: "odd manage-botm"
    },
    {
      id: 5,
      number: "5",
      title: "Cost-Effective Marketing",
      description: "Only pay for real results. Get high-quality leads without wasting your budget.",
      arrow: true,
      className: "first mb-md50"
    },
    {
      id: 6,
      number: "6",
      title: "Targeted Marketing",
      description: "Show your ads only to the right audience based on interests, location, and behavior.",
      arrow: true,
      className: "odd mb-md50 manage-botm"
    },
    {
      id: 7,
      number: "7",
      title: "Data-Driven Approach",
      description: "We analyze your campaign results regularly and make smart changes for better performance",
      arrow: true,
      className: "mb-sm50 system-top"
    },
    {
      id: 8,
      number: "8",
      title: "Customized Strategies",
      description: "We don’t use one-size-fits-all plans. We tailor every strategy to fit your business needs.",
      arrow: false,
      className: "mb-sm50 manage-botm"
    },
  ];

  return (
    <div className="process section-padding bg-img bg-fixed pos-re text-center was_section super-charge-digi-sec">
      <div className="container">
        <div className="row">
          <div className="crumina-module crumina-heading">
            <h2 className="heading-title">
              Supercharge Your Online Presence With Our Holistic SEO <span className="c-primary">Strategies</span>
            </h2>
            <p>We deliver both fast gains and long‑term growth. Here's how our end‑to‑end approach elevates your brand:</p>
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

export default SuperchargePresence;