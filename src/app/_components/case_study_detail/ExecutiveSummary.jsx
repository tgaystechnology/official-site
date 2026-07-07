import React from 'react';

const ExecutiveSummary = ({ slug }) => {
  // Centralized case study summary data
  const caseStudySummaries = {
    ezshopit: {
      title: "Executive Summary",
      content: `
        <p>
          TGAYS Technology partnered with Ezshopit to design and develop a robust, scalable, and feature-rich <a href="/solutions/e_commerce_solution" style="color: #0083FF; text-decoration: underline;">e-commerce</a> platform that could seamlessly serve a global customer base. The goal was to create a <strong>multi-vendor, multi-currency, bilingual</strong> marketplace capable of managing diverse product categories, handling complex shipping rules, and providing a smooth buying experience.
        </p>
        <p>
          Within a short time frame, our team delivered a high-performance solution that enabled vendors, customers, warehouses, and administrators to work collaboratively in a centralized digital ecosystem.
        </p>
      `,
    },
    worthmetrix: {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology collaborated with Worthmetrix, a financial analytics firm, to develop a secure and intelligent <a href="/services/web-development" style="color: #0083FF; text-decoration: underline;">web application</a> capable of assessing the overall health of any business based on historical financial data.</p>

        <p>The objective was to create a <strong>streamlined, user-friendly, and data-driven platform</strong> that enables companies to input their past five years’ financial records, process payments securely, and instantly receive comprehensive business health reports.</p>

        <p>Our solution empowered Worthmetrix to offer clients accurate, on-demand insights for strategic decision-making, backed by automation and robust reporting.</p>
      `,
    },
    evolveai: {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology partnered with EvolveAI to create a <strong>cross-platform <a href="/services/mobile-app" style="color: #0083FF; text-decoration: underline;">mobile application</a></strong> that combines AI-driven readiness testing, personalized training programs, and flexible paid subscriptions to deliver a complete fitness experience.</p>

        <p>The app was designed to offer users access to recorded and live training sessions, track their fitness progress, and subscribe to plans ranging from 3 months to 1 year.</p>

        <p>By integrating modern mobile UI design from Figma with <strong><a href="/services/mobile-app" style="color: #0083FF; text-decoration: underline;">React Native</a></strong> and secure payment processing through Stripe, TGAYS Technology delivered a scalable, user-friendly solution that quickly gained traction with over <strong>1000+ downloads.</strong> </p>
      `,
    },
    'ezshopit-mobile': {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology developed the Ezshopit <a href="/services/mobile-app" style="color: #0083FF; text-decoration: underline;">mobile application</a> to provide a <strong>seamless multi-vendor marketplace experience</strong> directly from users’ smartphones. Designed for both Android and iOS, the app offers features like product listings, shopping cart, multi-currency support, bilingual interface, order tracking, and secure payments.</p>

        <p>The solution empowers vendors to manage catalogs, inventory, and shipping, while customers enjoy an intuitive, mobile-first shopping journey. With an advanced admin panel and real-time order tracking powered by Twilio, Ezshopit brings efficiency, transparency, and convenience to <a href="/solutions/e_commerce_solution" style="color: #0083FF; text-decoration: underline;">e-commerce</a> in the UAE and beyond.</p>
      `,
    },
    'bolton-travel': {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology partnered with Bolton Travel to design and develop a <strong>comprehensive travel management platform</strong> that streamlines the end-to-end workflow for a tour and travel business.</p>

        <p>The solution enables the creation of detailed quotations, PDF-based invoices, supplier data management, accommodation & flight bookings, KYC verification, and client payment tracking—all in a user-friendly <a href="/services/web-development" style="color: #0083FF; text-decoration: underline;">web application</a>.</p>

        <p> By integrating advanced reporting tools and voucher generation, TGAYS Technology empowered Bolton Travel to operate more efficiently, improve customer experience, and maintain better control over operations.</p>
      `,
    },
    taskity: {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology developed Taskity, a comprehensive <strong> business sales and marketing <a href="/services/customized-crm-development" style="color: #0083FF; text-decoration: underline;">automation platform</a></strong> designed to help organizations streamline operations, enhance collaboration, and improve productivity.</p>

        <p>The platform offers a multi-user interface with tools for attendance, leave management, lead tracking, client and project management, team collaboration, and income/expense tracking.
               </p>

        <p> With an integrated daily dashboard and Stripe-based payment system, Taskity delivers a one-stop solution for managing business workflows efficiently.</p>
      `,
    },
    martwat: {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology developed Martwat, a comprehensive <strong> inventory, warehouse, sales, and POS management system</strong> designed to centralize business operations for companies handling high transaction volumes and multiple stock locations.</p>

        <p>The platform integrates inventory tracking, point-of-sale management, <a href="/services/customized-crm-development" style="color: #0083FF; text-decoration: underline;">CRM</a>, HRM, accounting, and advanced reporting into one cohesive solution—empowering businesses to monitor stock, manage sales, streamline financial records, and oversee staff from a single dashboard.</p>

        <p>With Martwat, our client gained a scalable, data-driven system to optimize efficiency, reduce losses, and improve profitability.</p>
      `,
    },
    'sjrs-school-erp': {
      title: "Executive Summary",
      content: `
        <p>TGAYS Technology developed SJRS School ERP, a feature-rich <strong><a href="/services/customized-crm-development" style="color: #0083FF; text-decoration: underline;">Enterprise Resource Planning (ERP)</a> solution</strong> tailored to the operational needs of educational institutions.</p>

        <p> The system centralizes student, faculty, attendance, financial, and academic data into a single platform, providing school administrators with real-time insights, automation tools, and communication channels.</p>

        <p>By integrating <strong>Razorpay payment processing, SMS notifications</strong>  and advanced reporting, SJRS School ERP enables schools to operate more efficiently, improve transparency, and enhance the learning experience for students and parents alike.</p>
      `,
    },
    'anvo-autos': {
      title: "Executive Summary",
      content: `
        <p>In the high-demand ride-hailing sector, system latency, data integrity, and real-time reliability dictate user trust and platform success. This case study highlights the engineering behind Anvo Autos—a resilient, high-concurrency backend engine built using <a href="/services/web-development" style="color: #0083FF; text-decoration: underline;">Node.js</a>, Fastify, PostgreSQL (PostGIS), Redis, and Socket.IO.</p>
        <p>The platform guarantees 100% financial accuracy via double-entry ledger wallets, thwarts fare manipulation using automated PostGIS route deviation alerts, and secures passenger safety through zero-PII (Personally Identifiable Information) live trip tracking links.</p>
      `,
    },
    'shikshasetu-lms': {
      title: "Executive Summary",
      content: `
        <p>Vidya AI LMS is a next-generation learning management platform developed to bridge the gap between traditional online education systems and modern <a href="/services/ai-powered-services" style="color: #0083FF; text-decoration: underline;">AI-powered</a> learning experiences.</p>
        <p>The platform combines live instructor-led training, self-paced recorded courses, AI-assisted learning tools, automated operational workflows, and advanced performance analytics into a single ecosystem.</p>
        <p>Unlike conventional LMS platforms that focus only on content delivery, Vidya AI LMS creates an interactive learning environment where students receive personalized support, real-time progress tracking, and intelligent recommendations throughout their learning journey.</p>
      `,
    },
    'ai-career-coach': {
      title: "Executive Summary",
      content: `
        <p>The Ai Career Coach Agent is a next-generation professional development platform developed to bridge the gap between traditional career counseling and modern, on-demand <a href="/services/ai-powered-services" style="color: #0083FF; text-decoration: underline;">AI-powered</a> guidance.</p>
        <p>The platform combines conversational AI mentorship, automated resume analysis, and dynamic career roadmap generation into a single ecosystem.</p>
        <p>Unlike conventional platforms that offer static advice, the Ai Career Coach Agent creates an interactive environment where professionals receive personalized, real-time feedback, structured learning paths, and actionable insights to accelerate their career growth and improve job readiness.</p>
      `,
    },
    'sip-calculator': {
      title: "Executive Summary",
      content: `
        <p>The SIP Calculator & Wealth Planner is a next-generation interactive financial simulation platform developed to bridge the gap between static, flat-rate financial calculators and dynamic, real-world wealth forecasting.</p>
        <p>The platform combines standard Systematic Investment Plan (SIP) projections, annual step-up compounding, goal-based target calculations, capital gains tax estimators, inflation stress-testing, and dynamic portfolio recovery models into a single client-side ecosystem.</p>
        <p>Unlike conventional financial calculators that rely on simplified annual formulas, this platform creates an interactive planning dashboard where users receive instant visual feedback, tax liability simulations, and real-time purchasing power calculations to map out their financial independence journeys.</p>
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
