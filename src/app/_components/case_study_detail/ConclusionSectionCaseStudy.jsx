import React from "react";

const ConclusionSectionCaseStudy = ({ slug }) => {
  // Centralized dynamic data object
  const conclusionData = {
    ezshopit: {
      heading: "Conclusion",
      paragraphs: [
        `The Ezshopit project demonstrates TGAYS Technology’s ability to deliver <strong>end-to-end e-commerce solutions</strong> that are adaptable, scalable, and user-focused. By integrating multi-vendor management, multi-currency capabilities, bilingual support, and robust backend controls, we helped our client establish a competitive edge in the UAE’s fast-growing online marketplace.`,
        `Today, Ezshopit stands as a testament to how the right technology stack, paired with strategic development, can transform a business’s reach and efficiency.`,
      ],
    },
    worthmetrix: {
      heading: "Conclusion",
      paragraphs: [
        `The Worthmetrix project showcases TGAYS Technology’s expertise in building <strong>secure, data-intensive web applications</strong> that simplify complex processes for end-users.`,
        `By combining user-friendly design with powerful analytics, we enabled Worthmetrix to deliver accurate, fast, and secure business health assessments—positioning them as a trusted partner for companies seeking financial clarity.`,
      ],
    },
    evolveai: {
      heading: "Conclusion",
      paragraphs: [
        `The EvolveAI app highlights TGAYS Technology’s expertise in building <strong>cross-platform, subscription-based mobile applications</strong> that integrate video content, AI-driven assessments, and secure payments.`,
        `By combining advanced technology with an engaging user experience, EvolveAI has positioned itself as a competitive player in the health & fitness market—empowering users to achieve their fitness goals anytime, anywhere.`,
      ],
    },
    'ezshopit-mobile': {
      heading: "Conclusion",
      paragraphs: [
        `The Ezshopit mobile app is a prime example of TGAYS Technology’s capability to deliver <strong>full-scale, feature-rich e-commerce solutions</strong>  tailored for mobile audiences.`,
        `With a powerful tech stack, intuitive interface, and scalable infrastructure, the app not only enhances the shopping experience for customers but also streamlines operations for vendors and administrators—positioning Ezshopit as a competitive force in the fast-paced e-commerce sector.`,
      ],
    },
    'bolton-travel': {
      heading: "Conclusion",
      paragraphs: [
        `The Bolton Travel management system demonstrates TGAYS Technology’s expertise in building <strong>tailored industry-specific solutions</strong> that streamline complex workflows.`,
        `By combining booking management, financial tracking, supplier coordination, and document automation in one platform, we helped Bolton Travel improve efficiency, deliver better service, and scale operations effectively in the competitive travel market.`,
      ],
    },
    taskity: {
      heading: "Conclusion",
      paragraphs: [
        `The Taskity platform showcases TGAYS Technology’s ability to create <strong>all-in-one business automation solutions</strong> that integrate sales, marketing, operations, and financial management.`,
        `By delivering a feature-rich, scalable, and user-friendly system, TGAYS Technology helped businesses improve productivity, optimize workflows, and achieve sustainable growth in competitive markets.`,
      ],
    },
    martwat: {
      heading: "Conclusion",
      paragraphs: [
        `The Martwat system demonstrates TGAYS Technology’s ability to deliver <strong>enterprise-level, all-in-one business management ERP</strong>  that combine sales, inventory, accounting, HR, and CRM into a single solution.`,
        `With its real-time insights, automated processes, and scalability, Martwat has empowered businesses to operate with precision, efficiency, and confidence—driving measurable growth in competitive markets.`,
      ],
    },
    'sjrs-school-erp': {
      heading: "Conclusion",
      paragraphs: [
        `The SJRS School ERP system reflects TGAYS Technology’s expertise in delivering education-focused ERP solutions that combine academic management, financial tracking, and communication tools in a single, scalable platform.`,
        `By automating daily operations and providing actionable insights, the ERP has empowered schools to operate more efficiently, engage parents effectively, and foster better learning outcomes.`,
      ],
    },
  };

  const currentData = conclusionData[slug] || {
    heading: "Conclusion",
    paragraphs: ["No data available for this case study."],
  };

  return (
    <section className="who-we-are-sec how-we-do-it-sec conclusion-section">
      <div className="container">
        <div className="who-we-are-area">
          <div className="row">
            <div className="col-12 col-md-12">
              <div className="who-we-are-text-area align-center">
                <h3 className="h5 info-box-title">{currentData.heading}</h3>
                {currentData.paragraphs.map((para, index) => (
                  <p
                    key={index}
                    className="info-box-text"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSectionCaseStudy;
