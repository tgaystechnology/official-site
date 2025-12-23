import React from 'react';

const OurSolutions = () => {
  const solutions = [
    {
      title: "Retail",
      items: [
        " Billing, POS",
        " HRM",
        " Sales",
        " Inventory Management",
        " Report Generation",
        " Finance/Accounting"
      ],
      icon: "storefront-outline",
      colorClass: "blue"
    },
    {
      title: "Education",
      items: [
        " Learning Management System(LMS)",
        " Online Course Platform",
        " Assessment & Test Platform",
        " VR/AR based Learning Platform"
      ],
      icon: "book-outline",
      colorClass: "yellow"
    },
    {
      title: "Tour & Travel",
      items: [
        " Customer Quotation",
        " Customer Invoice",
        " Sales & Reporting",
        " Supplier Management",
        " Web Application Platform"
      ],
      icon: "train-outline",
      colorClass: "red"
    },
    {
      title: "E-Commerce",
      items: [
        " Website & Mobile Application",
        " POS System",
        " Product & Inventory Management",
        " Multivendor/ multi-language/ multi-currency",
        " B2B/B2C/D2C Development",
        " Aggregator Platform"
      ],
      icon: "cart-outline",
      colorClass: "green"
    },
    {
      title: "Healthcare",
      items: [
        " Patient Portals",
        " Secure Payments",
        " Medical Websites",
        " Security & Compliance"
      ],
      icon: "heart-outline",
      colorClass: "green"
    },
    {
      title: "Health & Fitness",
      items: [
        " Gym ERP",
        " Gym & Yoga Websites",
        " Payment Gateways Integration",
        " E-commerce websites & apps",
        " Workout apps"
      ],
      icon: "heart-outline",
      colorClass: "green"
    },
    {
      title: "AI Powered Solutions",
      items: [
        " Chatbots",
        " AI Based Customer Services Tools"
      ],
      icon: "logo-apple-appstore",
      colorClass: "green",
      endBox: true
    },
    {
      title: "Finance",
      items: [
        " Payment Gateways",
        " Digital Wallets",
        " Lending Platforms",
        " Auto calculators"
      ],
      icon: "cash-outline",
      colorClass: "green",
      endBox: true
    },
    {
      title: "Saas",
      items: [
        " Custom CRM Software",
        " Project Management Tool",
        " Invoicing Systems",
        " HR Management Systems",
        " Customer Support Systems"
      ],
      icon: "layers-outline",
      colorClass: "green",
      endBox: true
    }
  ];

  return (
    <section className="background-contain web-totle our_solution_section">
      <div className="container">
        <div className="counters">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="crumina-module crumina-heading hm-easy_title text-center">
                <h2 className="heading-title">Our <span className="c-primary">Solutions</span></h2>
              </div>
            </div>
            
            {solutions.map((solution, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className={`crumina-module crumina-counter-item c-blue counter-box ${solution.endBox ? 'end_box' : ''}`}>
                  <div className="counter-numbers counter">
                    <span>{solution.title}</span>
                  </div>
                  <ul>
                    {solution.items.map((item, i) => (
                      <li key={i}><span>-</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={`icons-dv ${solution.colorClass} text-center`}>
                  <ion-icon name={solution.icon}></ion-icon>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;