import PortfolioBanner from '../_components/portfolio/PortfolioBanner';
import CTASection from '../_components/home/CTASection';
import React from 'react'
import PortfolioShowcase from '../_components/portfolio/PortfolioShowcase';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/portfolio' } // This should match exactly what's in your database
  });
}

const WebsiteData = {
  sectionTitle: "Website",
  projects: [
    {
      title: "Ezshopit - Multi-Vendor E-commerce Platform",
      description: "A robust, multi-vendor e-commerce marketplace for the UAE, featuring multi-currency and bilingual (English/Arabic) support to connect vendors, warehouses, and customers in one ecosystem.",
      image: "img/ezshopit-img-port.png",
      imageAlt: "Website Project",
      imagePosition: "left",
      technologies: [
        { name: "CodeIgniter", colorClass: "bl" },
        { name: "PHP", colorClass: "gr" },
        { name: "MySQL", colorClass: "bn" },
        { name: "jQuery", colorClass: "or" }
      ],
      highlights: [
        "Multi-Vendor Dashboards for Product & Inventory Management",
        "Multi-Currency and Bilingual (English/Arabic) Support",
        "Real-Time Order Tracking from Warehouse to Customer",
        "Integrated Coupon and Customer Complaint System",
        "Comprehensive Admin Panel for Vendor & Product Approval",
        "Secure Multi-Currency Payment Gateway",
        "Automated Order Assignment to Delivery Personnel"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "Worthmetrix - Business Health Analysis Platform",
      description: "A secure financial analytics web app for a US client that assesses business health by processing 5 years of financial data and generating instant, automated reports.",
      image: "img/worthmetrix-port.png",
      imageAlt: "Website Project",
      imagePosition: "right",
      technologies: [
        { name: "CodeIgniter", colorClass: "bn" },
        { name: "PHP", colorClass: "or" },
        { name: "MySQL", colorClass: "bl" },
        { name: "PayPal", colorClass: "gr" }
      ],
      highlights: [
        "Secure User Authentication & Company Profile Management",
        "Intuitive Module for 5-Year Financial Data Entry",
        "Powerful Backend Engine for Business Health Analysis",
        "Integrated PayPal for Secure Report Purchases",
        "Instant Generation of Actionable, Easy-to-Read Reports",
        "SSL Encryption for Secure Financial Data Handling"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "Oktaxrolls - Online Tax Payment Portal",
      description: "A comprehensive online shopping platform with advanced features for seamless customer experience and robust inventory management.",
      image: "img/Oktaxrolls-port.png",
      imageAlt: "Website Project",
      imagePosition: "left",
      technologies: [
        { name: "React", colorClass: "bl" },
        { name: "Node.js", colorClass: "gr" },
        { name: "MongoDB", colorClass: "bn" },
        { name: "Stripe", colorClass: "or" }
      ],
      highlights: [
        "Secure Tax Paying Portal for Individuals & Businesses",
        "Search Taxpayer Records by Name or Property ID",
        "Pay Property Taxes Online by County (USA)",
        "Barcode Scanning for Quick Bill Pay",
        "View Complete Tax Payment History",
        "Instantly Generate Payment Reports",
        "Admin ACL System for Secure Management"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    }
  ]
};
const MobileData = {
  sectionTitle: "Mobile App",
  projects: [
    {
      title: "EvolveAI – AI-Powered Health & Fitness App",
      description: "A cross-platform app for the US market combining AI-driven readiness tests, live & recorded training sessions, and a secure subscription model for a personalized fitness experience.",
      image: "img/avolve-ai-port.png",
      imageAlt: "Website Project",
      imagePosition: "right",
      technologies: [
        { name: "React Native", colorClass: "bn" },
        { name: "Firebase", colorClass: "or" },
        { name: "Stripe", colorClass: "bl" },
        { name: "Figma", colorClass: "gr" }
      ],
      highlights: [
        "AI-Powered Readiness Test for Personalized Workouts",
        "Seamless Streaming of Live & Recorded Video Sessions",
        "Secure Recurring Subscriptions via Stripe",
        "Cross-Platform Performance on Android & iOS",
        "Pixel-Perfect UI Implementation from Figma Designs",
        "Scalable Cloud Storage for Video Content",
        "Achieved 1000+ Downloads Post-Launch"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "TWG Tea - Premium E-Commerce App",
      description: "A luxury mobile commerce app for a global tea brand, focusing on a premium user experience, seamless product discovery, and a secure, elegant checkout process.",
      image: "img/TWG-Tea-port.png",
      imageAlt: "Website Project",
      imagePosition: "left",
      technologies: [
        { name: "React Native", colorClass: "bl" },
        { name: "Node.js", colorClass: "gr" },
        { name: "MongoDB", colorClass: "bn" },
        { name: "Stripe", colorClass: "or" }
      ],
      highlights: [
        "Elegant & Premium User Interface Design",
        "Advanced Product Filtering & Search",
        "Secure & Fast Checkout with Stripe",
        "Customer Account & Order History",
        "Integrated Loyalty Program & Exclusive Offers",
        "Push Notifications for New Arrivals",
        "Wishlist & Product Gifting Features"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "Ezshopit – Multi-Vendor E-commerce App",
      description: "A comprehensive online shopping platform with advanced features for seamless customer experience and robust inventory management.",
      image: "img/Ezshopit-port-mobile.png",
      imageAlt: "Website Project",
      imagePosition: "right",
      technologies: [
        { name: "React Native", colorClass: "bn" },
        { name: "Twilio API", colorClass: "or" },
        { name: "NodeJs", colorClass: "gr" },
        { name: "PayPal", colorClass: "bl" },
        { name: "MongoDB", colorClass: "gr" }
      ],
      highlights: [
        "Multi-Vendor Marketplace with Individual Dashboards",
        "Real-Time Order Tracking with Twilio SMS Notifications",
        "Multi-Currency & Bilingual Support (English/Arabic)",
        "Secure Payment Processing with PayPal",
        "Warehouse & Delivery Personnel Management",
        "Central Admin Panel for Vendor & Product Approval",
        "Intuitive Mobile-First Shopping Experience"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    }
  ]
};
const CrmData = {
  sectionTitle: "CRM",
  projects: [
    {
      title: "Bolton Travel - Tour Management System",
      description: "A custom-built platform for a UK-based travel agency to automate quotes, manage bookings, track payments, and streamline supplier coordination, enhancing overall operational efficiency.",
      image: "img/Bolton-Travel-portfolio.png",
      imageAlt: "Website Project",
      imagePosition: "left",
      technologies: [
        { name: "Python", colorClass: "bl" },
        { name: "Django", colorClass: "or" },
        { name: "MySQL", colorClass: "gr" },
        { name: "Bootstrap", colorClass: "bn" },
        { name: "Figma", colorClass: "or" },
      ],
      highlights: [
        "Automated Quotation & PDF Invoice Generation",
        "Integrated Flight & Hotel Booking Management",
        "Centralized Supplier & Client KYC Database",
        "Real-Time Sales Reporting Dashboard",
        "Automatic Branded Hotel Voucher Creation",
        "Secure Client Payment Tracking & Management",
        "Direct Email Integration from the Platform",
        "Advanced Excel & PDF Data Export Capabilities"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "Taskity - Business Automation Platform",
      description: "An all-in-one sales and marketing automation platform designed for businesses in India to manage leads, projects, team collaboration, and finances in a single, unified dashboard.",
      image: "img/taskity-port-img.png",
      imageAlt: "Website Project",
      imagePosition: "right",
      technologies: [
        { name: "CodeIgniter", colorClass: "bn" },
        { name: "Stripe", colorClass: "or" },
        { name: "MySQL", colorClass: "bl" },
        { name: "Bootstrap", colorClass: "gr" }
      ],
      highlights: [
        "All-in-One Daily Business Dashboard",
        "Role-Based Access for Admins, Managers & Staff",
        "Comprehensive Lead & Client Management Pipeline",
        "Integrated Project & Task Tracking System",
        "Attendance and Leave Management Module",
        "Secure Subscription Payments via Stripe",
        "Automated Income & Expense Tracking",
        "Built-in Tools for Team Collaboration"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "RetailFlow - Inventory & Sales CRM",
      description: "A scalable CRM developed for a multi-location retail business to unify inventory tracking, manage sales data from POS systems, and automate customer relationship management.",
      image: "img/RetailFlow-Inventory-Sales.png",
      imageAlt: "Website Project",
      imagePosition: "left",
      technologies: [
        { name: "React", colorClass: "bl" },
        { name: "Node.js", colorClass: "gr" },
        { name: "PostgreSQL", colorClass: "bn" },
        { name: "AWS", colorClass: "or" }
      ],
      highlights: [
        "Real-Time, Multi-Store Inventory Sync",
        "Point of Sale (POS) Data Integration",
        "Automated Low-Stock & Reorder Reports",
        "Customer Purchase History & Loyalty Program",
        "Sales Analytics & Performance Dashboards",
        "Barcode Scanning & Product Management",
        "Automated Email Marketing for Promotions",
        "Supplier and Purchase Order Management"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    }
  ]
};
const AiData = {
  sectionTitle: "AI",
  projects: [
    {
      title: "AI Conversational Agent Suite",
      description: "An intelligent, dual-mode customer care solution featuring an AI Chatbot and AI Calling Agent. It handles inbound/outbound calls, resolves queries, and schedules meetings 24/7, seamlessly escalating to human agents when needed.",
      image: "img/AI-Conversational-Agent.png",
      imageAlt: "Website Project",
      imagePosition: "right",
      technologies: [
        { name: "n8n", colorClass: "bl" },
        { name: "ElevenLabs", colorClass: "gr" },
        { name: "OpenAI / Gemini", colorClass: "bn" },
        { name: "RetailAI", colorClass: "or" }
      ],
      highlights: [
        "24/7 Automated Customer Support via Chat & Voice",
        "Handles both Inbound & Outbound AI-Powered Calls",
        "Natural Language Understanding for Complex Queries",
        "Seamless Handoff to Human Agents",
        "Automated Meeting Scheduling & Information Retrieval",
        "Voice Interaction via Microphone for Hands-Free Use",
        "Reduces Wait Times & Improves Customer Satisfaction"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "AI Career Navigator Platform",
      description: "A comprehensive career development tool that provides personalized guidance based on user interests, generates detailed career roadmaps, and offers in-depth resume analysis with actionable feedback.",
      image: "img/AI-Career-Navigator.png",
      imageAlt: "Website Project",
      imagePosition: "left",
      technologies: [
        { name: "Next.js", colorClass: "bl" },
        { name: "JavaScript", colorClass: "gr" },
        { name: "OpenAI API", colorClass: "bn" },
        { name: "Gemini API", colorClass: "or" }
      ],
      highlights: [
        "Personalized Career Guidance Based on Interests",
        "Step-by-Step Career Roadmap Generation",
        "AI-Powered Resume Analysis with Percentage Score",
        "Actionable Feedback to Improve Resumes",
        "Explores Diverse Career Opportunities & Paths",
        "User-Friendly and Interactive Interface",
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "Predictive Sales Analytics AI",
      description: "A comprehensive online shopping platform with advanced features for seamless customer experience and robust inventory management.",
      image: "img/Predictive-Sales-Analytics.png",
      imageAlt: "Website Project",
      imagePosition: "right",
      technologies: [
        { name: "Python", colorClass: "bl" },
        { name: "TensorFlow", colorClass: "gr" },
        { name: "Scikit-learn", colorClass: "bn" },
        { name: "AWS", colorClass: "or" }
      ],
      highlights: [
        "Accurate Sales & Revenue Trend Forecasting",
        "Predictive Customer Churn Analysis",
        "AI-Powered Lead Scoring & Prioritization",
        "Marketing Spend & ROI Optimization",
        "Identifies Untapped Market Segments",
        "Customizable Data Visualization Dashboards",
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    }
  ]
};
const ErpData = {
  sectionTitle: "ERP",
  projects: [
    {
      title: "MartWat – All-in-One Business Management ERP",
      description: "An integrated ERP system to centralize inventory, warehouse, sales, POS, CRM, and HRM for businesses with multiple stock locations and high transaction volumes.",
      image: "img/erp-employee-port.png",
      imageAlt: "Website Project",
      imagePosition: "left",
      technologies: [
        { name: "CodeIgniter", colorClass: "bl" },
        { name: "JavaScript", colorClass: "gr" },
        { name: "MySQL", colorClass: "bn" },
        { name: "JSON/XML", colorClass: "or" }
      ],
      highlights: [
        "Real-Time Inventory & Multi-Warehouse Tracking",
        "Integrated Point of Sale (POS) for Quick Billing",
        "Comprehensive Accounting with Balance Sheets",
        "HRM Module for Payroll, Attendance & Staffing",
        "Built-in CRM with Client & Ticket Management",
        "Graphical Reports for Data-Driven Insights",
        "Automated Low-Stock Alerts & Supplier Records",
        "Data Export in XML, JSON, and Excel Formats"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "SJRS School ERP – Comprehensive School Management",
      description: "A feature-rich ERP solution for educational institutions to centralize student data, attendance, results, and financial records while improving parent-school communication.",
      image: "img/SJRS-case-port.png",
      imageAlt: "Website Project",
      imagePosition: "right",
      technologies: [
        { name: "Laravel", colorClass: "bn" },
        { name: "PayPal API", colorClass: "or" },
        { name: "SMS Gateway", colorClass: "bl" },
        { name: "Datatable.js", colorClass: "gr" }
      ],
      highlights: [
        "Centralized Dashboard for School Operations",
        "Automated Attendance with SMS Alerts to Parents",
        "Online Result Publishing with Performance Analytics",
        "Secure Online Fee Payment via PayPal",
        "Printable Receipts for All Transactions",
        "Role-Based Access for Admin & Accounts Dept.",
        "Data Export for Students, Transactions & Finances",
        "Student & Faculty Data Management"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    },
    {
      title: "LogiPro – Logistics & Fleet Management ERP",
      description: "An end-to-end ERP for the logistics sector to manage fleet operations, track shipments in real-time, automate invoicing, and optimize supply chain workflows.",
      image: "img/logipro-port-img.png",
      imageAlt: "Website Project",
      imagePosition: "left",
      technologies: [
        { name: "React.js", colorClass: "bl" },
        { name: "Node.js", colorClass: "gr" },
        { name: "PostgreSQL", colorClass: "bn" },
        { name: "Maps API", colorClass: "or" }
      ],
      highlights: [
        "Real-Time GPS Fleet & Shipment Tracking",
        "Automated Route Optimization & Scheduling",
        "Driver & Vehicle Performance Management",
        "Fuel & Maintenance Cost Tracking",
        "Automated Invoicing & Billing Module",
        "Proof of Delivery (POD) Management",
        "Warehouse & Inventory Integration",
        "Client Portal for Shipment Status Checks"
      ],
      demoLink: "/contact-us",
      buttonText: "Request a demo"
    }
  ]
};

const Portfolio = () => {
  return (
    <div>
        <PortfolioBanner/>
        <PortfolioShowcase
          sectionTitle={WebsiteData.sectionTitle}
          projects={WebsiteData.projects}
        />
        <PortfolioShowcase
          sectionTitle={MobileData.sectionTitle}
          projects={MobileData.projects}
        />
        <PortfolioShowcase
          sectionTitle={CrmData.sectionTitle}
          projects={CrmData.projects}
        />
        <PortfolioShowcase
          sectionTitle={AiData.sectionTitle}
          projects={AiData.projects}
        />
        <div className='mb-5'>
          <PortfolioShowcase
            sectionTitle={ErpData.sectionTitle}
            projects={ErpData.projects}
          />
        </div>
        <CTASection
            title="Need a Website, Web Application, Customized CRM Software or a Mobile App for your Business?"
            description=""
        />
    </div>
  )
}

export default Portfolio;