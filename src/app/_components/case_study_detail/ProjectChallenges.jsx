import React from 'react';
import Image from 'next/image';

const ProjectChallenges = ({ slug }) => {
  // Centralized challenges data by slug
  const challengesData = {
    ezshopit: [
      {
        id: 1,
        title: "1",
        description: `
          <p><strong>Multi-Currency & Bilingual Support:</strong> Ensuring accurate price conversions and language switching without compromising site performance.</p>
        `,
        image: "/img/multi-currency-support.png",
        imageWidth: 965,
        imageHeight: 240,
        layout: "left"
      },
      {
        id: 2,
        title: "2",
        description: `
          <p><strong>Vendor Management Complexity:</strong> Allowing multiple vendors to independently manage their product catalogs, inventory, and shipping while maintaining data consistency.</p>
        `,
        image: "/img/vendor-management-complexity.png",
        layout: "right"
      },
      {
        id: 3,
        title: "3",
        description: `
          <p><strong>Order Tracking & Delivery Coordination:</strong> Designing a workflow for warehouses and delivery personnel to track and update order statuses in real time.</p>
        `,
        image: "/img/order-tracking-delivery-coordination.png",
        layout: "left"
      },
      {
        id: 4,
        title: "4",
        description: `
          <p><strong>Customer Engagement:</strong> Integrating features like coupons, complaint management, and deal listings to enhance user satisfaction.</p>
        `,
        image: "/img/customer-engagement.png",
        layout: "right"
      },
      {
        id: 5,
        title: "5",
        description: `
          <p><strong>Scalability & Security:</strong>  Ensuring the system could handle high traffic, numerous concurrent transactions, and secure online payments.</p>
        `,
        image: "/img/scalability-security.png",
        layout: "left"
      },
    ],
    worthmetrix: [
      {
        id: 1,
        title: "1",
        description: `
          <p><strong>Data Accuracy & Security:</strong> Ensuring sensitive financial data is stored, processed, and retrieved securely.</p>
        `,
        image: "/img/Data-Accuracy-Security-worth.png",
        layout: "left"
      },
      {
        id: 2,
        title: "2",
        description: `
          <p><strong>Complex Financial Calculations:</strong> Building a backend engine capable of analyzing multi-year data and generating accurate health assessments.</p>
        `,
        image: "/img/Complex-Financial-Calculations.png",
        layout: "right"
      },
      {
        id: 3,
        title: "3",
        description: `
          <p><strong>Seamless Payment Processing:</strong> Integrating a secure payment gateway for report purchases.</p>
        `,
        image: "/img/Seamless-Payment-Processing.png",
        layout: "left"
      },
      {
        id: 4,
        title: "4",
        description: `
          <p><strong>User Experience for Non-Technical Users:</strong> Designing an intuitive interface so even first-time users can enter complex financial data without confusion.</p>
        `,
        image: "/img/User-Experience-for-Non-Technical.png",
        layout: "right"
      },
      {
        id: 5,
        title: "5",
        description: `
          <p><strong>Automated Report Generation:</strong> Ensuring reports are generated instantly and formatted for easy interpretation.</p>
        `,
        image: "/img/Automated-Report-Generation.png",
        layout: "left"
      },
    ],
    evolveai: [
      {
        id: 1,
        title: "1",
        description: `
          <p><strong>Cross-Platform Consistency:</strong> Ensuring identical performance and UI/UX across Android and iOS devices.</p>
        `,
        image: "/img/Cross-Platform-Consistency.png",
        layout: "left"
      },
      {
        id: 2,
        title: "2",
        description: `
          <p><strong>Video Content Management:</strong> Seamless streaming of both recorded and live training sessions without buffering.</p>
        `,
        image: "/img/Video-Content-Management.png",
        layout: "right"
      },
      {
        id: 3,
        title: "3",
        description: `
          <p><strong>Subscription Management:</strong> Integrating secure, recurring payment processing for multiple subscription durations.</p>
        `,
        image: "/img/Subscription-Management.png",
        layout: "left"
      },
      {
        id: 4,
        title: "4",
        description: `
          <p><strong>Readiness Test Implementation:</strong> Designing an interactive, AI-powered assessment to determine user fitness levels.</p>
        `,
        image: "/img/Readiness-Test-Implementation.png",
        layout: "right"
      },
      {
        id: 5,
        title: "5",
        description: `
          <p><strong>UI Integration from Figma:</strong> Accurately translating detailed Figma designs into a responsive, interactive mobile app.</p>
        `,
        image: "/img/UI-Integration-from-Figma.png",
        layout: "left"
      },
      {
        id: 6,
        title: "6",
        description: `
          <p><strong>Scalable Cloud Storage:</strong> Handling large volumes of video content while ensuring fast delivery to users.</p>
        `,
        image: "/img/scalability-security.png",
        layout: "right"
      },
    ],
    'ezshopit-mobile': [
      {
        id: 1,
        title: "1",
        description: `
          <p><strong>Cross-Platform Performance:</strong> Delivering consistent performance and UI across Android and iOS devices.</p>
        `,
        image: "/img/Cross-Platform-Performance.png",
        layout: "left"
      },
      {
        id: 2,
        title: "2",
        description: `
          <p><strong>Multi-Vendor Inventory Management:</strong> Allowing multiple vendors to independently manage product catalogs and stock levels.</p>
        `,
        image: "/img/customer-engagement.png",
        layout: "right"
      },
      {
        id: 3,
        title: "3",
        description: `
          <p><strong>Real-Time Communication:</strong> Enabling instant order status updates and customer notifications.</p>
        `,
        image: "/img/single-img-13.png",
        layout: "left"
      },
      {
        id: 4,
        title: "4",
        description: `
          <p><strong>Multi-Currency & Bilingual Capability:</strong> Supporting local and international customers with accurate price conversions and dual-language UI.</p>
        `,
        image: "/img/multi-currency-support.png",
        layout: "right"
      },
      {
        id: 5,
        title: "5",
        description: `
          <p><strong>Complex Order Fulfillment:</strong> Integrating warehouses, delivery assignments, and shipping status updates within a single workflow.</p>
        `,
        image: "/img/Complex-Order-Fulfillment.png",
        layout: "left"
      },
      {
        id: 6,
        title: "6",
        description: `
          <p><strong>Scalable Architecture:</strong> Handling growing traffic, multiple vendors, and high transaction volumes.</p>
        `,
        image: "/img/Scalable-Architecture.png",
        layout: "right"
      },
    ],
    'bolton-travel': [
      {
        id: 1,
        title: "1",
        description: `
          <p><strong>Quotation & Invoice Automation:</strong> Creating a system that allows travel agents to prepare, preview, and send detailed quotations and invoices in a professional format.</p>
        `,
        image: "/img/Quotation-Invoice-Automation.png",
        layout: "left"
      },
      {
        id: 2,
        title: "2",
        description: `
          <p><strong>Supplier Data Management:</strong> Handling a large number of suppliers and enabling easy download of supplier data for offline use.</p>
        `,
        image: "/img/Supplier-Data-Management.png",
        layout: "right"
      },
      {
        id: 3,
        title: "3",
        description: `
          <p><strong>Booking Management Complexity:</strong>  Integrating hotel accommodation and flight booking workflows within a unified system.</p>
        `,
        image: "/img/Booking-Management-Complexity.png",
        layout: "left"
      },
      {
        id: 4,
        title: "4",
        description: `
          <p><strong>KYC & Payment Tracking:</strong> Ensuring secure storage of client identity documents and accurate monitoring of payment statuses.</p>
        `,
        image: "/img/KYC-Payment-Tracking.png",
        layout: "right"
      },
      {
        id: 5,
        title: "5",
        description: `
          <p><strong>Real-Time Reporting:</strong>  Providing instant insights into sales performance and operational efficiency.</p>
        `,
        image: "/img/Real-Time-Reporting-boltl.png",
        layout: "left"
      },
      {
        id: 6,
        title: "6",
        description: `
          <p><strong>Document Generation:</strong>  Automating hotel voucher creation without manual formatting.</p>
        `,
        image: "/img/Document-Generation-bolton.png",
        layout: "right"
      },
    ],
    'taskity': [
      {
        id: 1,
        title: "1",
        description: `
          <p><strong>Multi-Functional Integration:</strong> Bringing together diverse modules—attendance, project management, sales, and finance—into one cohesive system.</p>
        `,
        image: "/img/Multi-Functional-Integration-taskcity.png",
        layout: "left"
      },
      {
        id: 2,
        title: "2",
        description: `
          <p><strong>Multi-User Role Management:</strong> Designing a secure interface where different user roles (admin, manager, team member) have controlled access to data and features.</p>
        `,
        image: "/img/Multi-User-Role-Management-task.png",
        layout: "right"
      },
      {
        id: 3,
        title: "3",
        description: `
          <p><strong>Lead & Client Management Automation:</strong> Building tools to track leads from acquisition to conversion while maintaining client relationships.</p>
        `,
        image: "/img/Lead-Client-Management-Automation.png",
        layout: "left"
      },
      {
        id: 4,
        title: "4",
        description: `
          <p><strong>Real-Time Task Coordination:</strong>  Ensuring seamless collaboration between teams and departments.</p>
        `,
        image: "/img/Real-Time-Task-Coordination-task.png",
        layout: "right"
      },
      {
        id: 5,
        title: "5",
        description: `
          <p><strong>Data Visualization:</strong> Creating a daily dashboard that delivers actionable insights at a glance.</p>
        `,
        image: "/img/Real-Time-Reporting-boltl.png",
        layout: "left"
      },
      {
        id: 6,
        title: "6",
        description: `
          <p><strong>Secure Payment Integration:</strong> Enabling businesses to manage paid features/subscriptions securely.</p>
        `,
        image: "/img/Secure-Payment-Integration-taski.png",
        layout: "right"
      },
    ],
    'martwat': [
      {
        id: 1,
        title: "1",
        description: `
          <p><strong>Multiple Functional Modules in One Platform:</strong> Integrating POS, warehouse, accounting, HRM, and CRM without compromising speed or usability.</p>
        `,
        image: "/img/Multiple-Functional-Modules.png",
        layout: "left"
      },
      {
        id: 2,
        title: "2",
        description: `
          <p><strong>Real-Time Inventory & Stock Control:</strong> Ensuring accurate tracking of product levels across multiple warehouses.</p>
        `,
        image: "/img/Real-Time-Inventory-Stock.png",
        layout: "right"
      },
      {
        id: 3,
        title: "3",
        description: `
          <p><strong>Financial Transparency:</strong> Providing a clear picture of income, expenses, and transactions with automated statements.</p>
        `,
        image: "/img/Financial-Transparency-detail.png",
        layout: "left"
      },
      {
        id: 4,
        title: "4",
        description: `
          <p><strong>Data-Driven Insights:</strong>  Delivering graphical reports for quick decision-making.</p>
        `,
        image: "/img/Data-Driven-Insights-detail.png",
        layout: "right"
      },
      {
        id: 5,
        title: "5",
        description: `
          <p><strong>Staff & Payroll Management:</strong> Integrating HRM tools to manage employee data, attendance, salaries, and departmental structures.</p>
        `,
        image: "/img/Staff-Payroll-Management.png",
        layout: "left"
      },
      {
        id: 6,
        title: "6",
        description: `
          <p><strong>Data Portability:</strong> Enabling easy export of transactions, inventory, and customer details in multiple formats.</p>
        `,
        image: "/img/Data-Portability.png",
        layout: "right"
      },
    ],
    'sjrs-school-erp': [
      {
        id: 1,
        title: "1",
        description: `
          <p><strong>Multi-Module Integration:</strong> Combining academic, administrative, and financial operations in one cohesive platform.</p>
        `,
        image: "/img/Multi-Module-integration-sjsr.png",
        layout: "left"
      },
      {
        id: 2,
        title: "2",
        description: `
          <p><strong>Real-Time Attendance & Notifications:</strong> Automating attendance tracking while instantly notifying parents or faculty via SMS.</p>
        `,
        image: "/img/Attendance-Notifications.png",
        layout: "right"
      },
      {
        id: 3,
        title: "3",
        description: `
          <p><strong>Result Publishing with Insights:</strong> Providing not just marks but also analytics on strong and weak subjects for student improvement.</p>
        `,
        image: "/img/Result-Publishing-with-Insights.png",
        layout: "left"
      },
      {
        id: 4,
        title: "4",
        description: `
          <p><strong>Secure Online Fee Processing:</strong>  Enabling safe, transparent, and convenient fee payment options for parents.</p>
        `,
        image: "/img/Secure-Online-Fee-Processing.png",
        layout: "right"
      },
      {
        id: 5,
        title: "5",
        description: `
          <p><strong>Data Management & Export:</strong> Allowing administrators to store, analyze, and export large volumes of student and transaction data.</p>
        `,
        image: "/img/Data-Management-Export.png",
        layout: "left"
      },
      {
        id: 6,
        title: "6",
        description: `
          <p><strong>Role-Based Access:</strong> Ensuring secure departmental access for admin, accounts, and other school authorities.</p>
        `,
        image: "/img/Role-Based-Access.png",
        layout: "right"
      },
    ],
    // ✅ Add more slug data here
  };

  // Fallback if slug not found
  const challenges = challengesData[slug] || [
    {
      id: 1,
      title: "General Challenge",
      description: `<p>No specific challenges available for this case study.</p>`,
      image: "/img/step01.png",
      layout: "left"
    }
  ];

  return (
    <div className="project-challenges-area">
      {/* Background Shape */}
      <div className="pro-challeng-shape">
        <Image 
          src="/img/banner-shape-2.png" 
          alt="Decorative shape"
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <div className="container">
        <div className="crumina-module crumina-heading">
          <h2 className="heading-title text-center">
            Project <span className="c-primary">Challenges</span>
          </h2>
        </div>

        <div className="row">
          {challenges.map((challenge) => (
            <div key={challenge.id} className="col-lg-12">
              <div className="pc-processbox-wrapper">
                <div className="row">
                  {/* Content Column - position changes based on layout */}
                  <div className={`col-lg-4 ${challenge.layout === 'right' ? 'order-lg-2' : ''}`}>
                    <div className={`pc-box-content ${challenge.layout === 'right' ? 'res-991-mt-15' : ''}`}>
                      <div className="pc-hovertext2">
                        <div className="process-num">
                          <div className="numbers">Challenge</div>
                        </div>
                      </div>
                      <div className="pc-box-content-title res-991-pt-0">
                        <h3 className="pc-box-title-h3">{challenge.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: challenge.description }} />
                      </div>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className={`col-lg-8 ${challenge.layout === 'right' ? 'order-lg-1' : ''}`}>
                    <div className={`pc-box-image ${challenge.layout === 'left' ? 'res-991-mt-15' : 'res-991-pb-30'}`}>
                      <Image
                        src={challenge.image}
                        className="proces-img img-fluid"
                        alt={`Challenge ${challenge.id}`}
                        width={challenge.imageWidth || 800}
                        height={challenge.imageHeight || 400}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectChallenges;
