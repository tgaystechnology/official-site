import React from 'react';
import Image from 'next/image';

const MobileAppSolutions = () => {
  // Solutions data
  const solutions = [
    {
      id: 1,
      number: "1",
      title: "CUSTOM CRM",
      description: "We provide tailored customer relationship management (CRM) systems that offer personalized solutions, enhancing customer engagement, data management, and business success.",
      arrow: true,
      className: "first mb-md50"
    },
    {
      id: 2,
      number: "2",
      title: "PAYROLL MANAGEMENT",
      description: "Payroll software automates salary calculations, tax deductions, and payment processing, streamlining payroll management, ensuring compliance, and minimizing errors for efficient and accurate payroll operations.",
      arrow: true,
      className: "odd mb-md50 manage-botm"
    },
    {
      id: 3,
      number: "3",
      title: "BILLING & INVOICING SYSTEM",
      description: "Invoicing software simplifies billing and payment processes, creating professional invoices, managing payments, tracking expenses, and improving cash flow for businesses of all sizes.",
      arrow: true,
      className: "mb-sm50 system-top"
    },
    {
      id: 4,
      number: "4",
      title: "PATIENT PORTAL",
      description: "Patient appointment software streamlines scheduling, booking, and management of patient appointments for healthcare providers, improving patient experience, reducing no-shows, and optimizing clinic operations.",
      arrow: false,
      className: "odd manage-botm"
    },
    {
      id: 5,
      number: "5",
      title: "E-COMMERCE WEBSITES",
      description: "We offer an all-in-one e-commerce solution offering seamless website creation, customizable design, secure payments, robust inventory management, integrated shipping, and marketing tools for online stores. Streamline your online business with our comprehensive e-commerce solution.",
      arrow: true,
      className: "first mb-md50"
    },
    {
      id: 6,
      number: "6",
      title: "SAAS PRODUCTS",
      description: "We offer Cloud-based software-as-a-service (SaaS) products providing scalable, subscription-based solutions for diverse business needs, including CRM, project management, HR, marketing automation, e-commerce, accounting, and more. Access and manage your software securely from anywhere, without the need for costly installations or maintenance.",
      arrow: true,
      className: "odd mb-md50 manage-botm"
    },
    {
      id: 7,
      number: "7",
      title: "POS",
      description: "Our Expert web portal development services have dynamic, user-friendly online platforms for businesses, communities, or organizations. Customizable portals with intuitive UI/UX, robust back-end functionality, secure login, content management, search capabilities, and responsive design. Enhance user engagement and streamline communication with a tailored web portal solution.",
      arrow: true,
      className: "mb-sm50 system-top"
    },
    {
      id: 8,
      number: "8",
      title: "SCHOOL & COLLEGE ERP",
      description: "Creative website design and development leveraging the power of open-source technologies such as WordPress, Drupal, Joomla, or Magento. Customized themes, plugins, responsive design, SEO optimization, e-commerce integration, and seamless CMS for easy content management. Enhance your online presence with an open-source website solution tailored to your business needs.",
      arrow: false,
      className: "mb-sm50 manage-botm"
    },
    {
      id: 9,
      number: "9",
      title: "AGGREGATOR WEBSITES",
      description: "Our Expert web portal development services have dynamic, user-friendly online platforms for businesses, communities, or organizations. Customizable portals with intuitive UI/UX, robust back-end functionality, secure login, content management, search capabilities, and responsive design. Enhance user engagement and streamline communication with a tailored web portal solution.",
      arrow: true,
      className: "mb-sm50 system-top"
    },
    {
      id: 10,
      number: "10",
      title: "LEARNING MANAGEMENT SYSTEM",
      description: "Creative website design and development leveraging the power of open-source technologies such as WordPress, Drupal, Joomla, or Magento. Customized themes, plugins, responsive design, SEO optimization, e-commerce integration, and seamless CMS for easy content management. Enhance your online presence with an open-source website solution tailored to your business needs.",
      arrow: false,
      className: "mb-sm50 manage-botm"
    }
  ];

  return (
    <div className="process section-padding bg-img bg-fixed pos-re text-center was_section">
      <div className="container">
        <div className="row">
          <div className="crumina-module crumina-heading">
            <h2 className="heading-title">Our Web Application <span className="c-primary">Solutions</span></h2>
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

export default MobileAppSolutions;