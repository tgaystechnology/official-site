import React from 'react';

const ExecutiveSummary = ({ slug }) => {
  // Centralized case study summary data
  const caseStudySummaries = {
    ezshopit: {
      title: "Executive Summary",
      content: `
        <p>
          TGAYS Technology partnered with Ezshopit to design and develop a robust, scalable, and feature-rich e-commerce platform that could seamlessly serve a global customer base. The goal was to create a <strong>multi-vendor, multi-currency, bilingual</strong> marketplace capable of managing diverse product categories, handling complex shipping rules, and providing a smooth buying experience.
        </p>
        <p>
          Within a short time frame, our team delivered a high-performance solution that enabled vendors, customers, warehouses, and administrators to work collaboratively in a centralized digital ecosystem.
        </p>
      `,
    },
    worthmetrix: {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology collaborated with Worthmetrix, a financial analytics firm, to develop a secure and intelligent web application capable of assessing the overall health of any business based on historical financial data.</p>

        <p>The objective was to create a <strong>streamlined, user-friendly, and data-driven platform</strong> that enables companies to input their past five years’ financial records, process payments securely, and instantly receive comprehensive business health reports.</p>

        <p>Our solution empowered Worthmetrix to offer clients accurate, on-demand insights for strategic decision-making, backed by automation and robust reporting.</p>
      `,
    },
    evolveai: {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology partnered with EvolveAI to create a <strong>cross-platform mobile application</strong> that combines AI-driven readiness testing, personalized training programs, and flexible paid subscriptions to deliver a complete fitness experience.</p>

        <p>The app was designed to offer users access to recorded and live training sessions, track their fitness progress, and subscribe to plans ranging from 3 months to 1 year.</p>

        <p>By integrating modern mobile UI design from Figma with <strong>React Native</strong> and secure payment processing through Stripe, TGAYS Technology delivered a scalable, user-friendly solution that quickly gained traction with over <strong>1000+ downloads.</strong> </p>
      `,
    },
    'ezshopit-mobile': {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology developed the Ezshopit mobile application to provide a <strong>seamless multi-vendor marketplace experience</strong> directly from users’ smartphones. Designed for both Android and iOS, the app offers features like product listings, shopping cart, multi-currency support, bilingual interface, order tracking, and secure payments.</p>

        <p>The solution empowers vendors to manage catalogs, inventory, and shipping, while customers enjoy an intuitive, mobile-first shopping journey. With an advanced admin panel and real-time order tracking powered by Twilio, Ezshopit brings efficiency, transparency, and convenience to e-commerce in the UAE and beyond.</p>
      `,
    },
    'bolton-travel': {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology partnered with Bolton Travel to design and develop a <strong>comprehensive travel management platform</strong> that streamlines the end-to-end workflow for a tour and travel business.</p>

        <p>The solution enables the creation of detailed quotations, PDF-based invoices, supplier data management, accommodation & flight bookings, KYC verification, and client payment tracking—all in a user-friendly web application.</p>

        <p> By integrating advanced reporting tools and voucher generation, TGAYS Technology empowered Bolton Travel to operate more efficiently, improve customer experience, and maintain better control over operations.</p>
      `,
    },
    taskity: {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology developed Taskity, a comprehensive <strong> business sales and marketing automation platform</strong> designed to help organizations streamline operations, enhance collaboration, and improve productivity.</p>

        <p>The platform offers a multi-user interface with tools for attendance, leave management, lead tracking, client and project management, team collaboration, and income/expense tracking.
               </p>

        <p> With an integrated daily dashboard and Stripe-based payment system, Taskity delivers a one-stop solution for managing business workflows efficiently.</p>
      `,
    },
    martwat: {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology developed Martwat, a comprehensive <strong> inventory, warehouse, sales, and POS management system</strong> designed to centralize business operations for companies handling high transaction volumes and multiple stock locations.</p>

        <p>The platform integrates inventory tracking, point-of-sale management, CRM, HRM, accounting, and advanced reporting into one cohesive solution—empowering businesses to monitor stock, manage sales, streamline financial records, and oversee staff from a single dashboard.</p>

        <p>With Martwat, our client gained a scalable, data-driven system to optimize efficiency, reduce losses, and improve profitability.</p>
      `,
    },
    'sjrs-school-erp': {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology developed SJRS School ERP, a feature-rich <strong>Enterprise Resource Planning (ERP) solution</strong> tailored to the operational needs of educational institutions.</p>

        <p> The system centralizes student, faculty, attendance, financial, and academic data into a single platform, providing school administrators with real-time insights, automation tools, and communication channels.</p>

        <p>By integrating <strong>Razorpay payment processing, SMS notifications</strong>  and advanced reporting, SJRS School ERP enables schools to operate more efficiently, improve transparency, and enhance the learning experience for students and parents alike.</p>
      `,
    },
  };

  // Fallback if slug not found
  const currentSummary = caseStudySummaries[slug] || {
    title: "Executive Summary",
    content: `<p>No executive summary available for this case study.</p>`,
  };

  return (
    <div className="summary-area">
      <div className="container">
        <div className="crumina-module crumina-heading">
          <h2 className="heading-title text-center">
            {currentSummary.title.split(" ")[0]} <span className="c-primary">{currentSummary.title.split(" ")[1]}</span>
          </h2>
          <div
            className="summary-text"
            dangerouslySetInnerHTML={{ __html: currentSummary.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
