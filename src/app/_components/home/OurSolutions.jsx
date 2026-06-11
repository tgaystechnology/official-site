import React from 'react';
import Link from 'next/link';

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

  const renderSolutionItem = (item) => {
    const trimmed = item.trim();
    if (trimmed === "Website & Mobile Application") {
      return (
        <span>
          {" "}
          <Link href="/services/web-development" className="custom-inline-link">Website</Link> &{" "}
          <Link href="/services/mobile-app" className="custom-inline-link">Mobile Application</Link>
        </span>
      );
    }
    if (trimmed === "Web Application Platform") {
      return (
        <span>
          {" "}
          <Link href="/services/web-development" className="custom-inline-link">Web Application Platform</Link>
        </span>
      );
    }
    if (trimmed === "Medical Websites") {
      return (
        <span>
          {" "}Medical{" "}
          <Link href="/services/web-development" className="custom-inline-link">Websites</Link>
        </span>
      );
    }
    if (trimmed === "Gym & Yoga Websites") {
      return (
        <span>
          {" "}Gym & Yoga{" "}
          <Link href="/services/web-development" className="custom-inline-link">Websites</Link>
        </span>
      );
    }
    if (trimmed === "E-commerce websites & apps") {
      return (
        <span>
          {" "}E-commerce{" "}
          <Link href="/services/web-development" className="custom-inline-link">websites</Link> &{" "}
          <Link href="/services/mobile-app" className="custom-inline-link">apps</Link>
        </span>
      );
    }
    if (trimmed === "Workout apps") {
      return (
        <span>
          {" "}Workout{" "}
          <Link href="/services/mobile-app" className="custom-inline-link">apps</Link>
        </span>
      );
    }
    if (trimmed === "Chatbots") {
      return (
        <span>
          {" "}
          <Link href="/services/ai-powered-services" className="custom-inline-link">Chatbots</Link>
        </span>
      );
    }
    if (trimmed === "AI Based Customer Services Tools") {
      return (
        <span>
          {" "}
          <Link href="/services/ai-powered-services" className="custom-inline-link">AI Based Customer Services Tools</Link>
        </span>
      );
    }
    if (trimmed === "Custom CRM Software") {
      return (
        <span>
          {" "}
          <Link href="/services/customized-crm-development" className="custom-inline-link">Custom CRM Software</Link>
        </span>
      );
    }
    return item;
  };

  return (
    <section className="background-contain web-totle our_solution_section" aria-label="IT Solutions and Digital Services">
      <style dangerouslySetInnerHTML={{__html: `
        .counter-box ul li a.custom-inline-link {
          color: #0083FF !important;
          text-decoration: underline !important;
          background: transparent !important;
          display: inline !important;
          padding: 0 !important;
        }
        .counter-box ul li a.custom-inline-link:hover {
          color: #0056b3 !important;
          background: transparent !important;
          text-decoration: underline !important;
        }
      `}} />
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
                      <li key={i}><span aria-hidden="true">-</span>{renderSolutionItem(item)}</li>
                    ))}
                  </ul>
                </div>
                <div className={`icons-dv ${solution.colorClass} text-center`} aria-hidden="true">
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