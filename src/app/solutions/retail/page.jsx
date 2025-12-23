import Testimonials from '@/app/_components/home/Testimonials';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import RetailCaseStudy from '@/app/_components/solutions_components/RetailCaseStudy';
import RetailManagementBanner from '@/app/_components/solutions_components/retail/RetailManagementBanner';
import RetailManagementSystem from '@/app/_components/solutions_components/RetailManagementSystem';
import RetailWebsiteFeatures from '@/app/_components/solutions_components/retail/RetailWebsiteFeatures';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/retail' } // This should match exactly what's in your database
  });
}

const retailFeatures = [
  {
    id: 1,
    icon: "calculator",
    title: "Billing",
    description: "Generate fast, accurate invoices and manage all payments with a seamless, professional billing system."
  },
  {
    id: 2,
    icon: "cart",
    title: "POS",
    description: "Empower your sales staff with a fast, reliable Point-of-Sale (POS) system for smooth checkouts."
  },
  {
    id: 3,
    icon: "people",
    title: "HRM",
    description: "Effortlessly manage staff attendance, payroll, scheduling, and performance from one central hub."
  },
  {
    id: 4,
    icon: "stats-chart",
    title: "Sales",
    description: "Analyze sales trends and get actionable insights to identify top-performing products and boost revenue."
  },
  {
    id: 5,
    icon: "cube",
    title: "Inventory",
    description: "Prevent stockouts by monitoring stock levels in real-time across all locations and automating reordering."
  },
  {
    id: 6,
    icon: "document-text",
    title: "Reports",
    description: "Make data-driven decisions with detailed, customizable reports on sales, inventory, and finances."
  },
  {
    id: 7,
    icon: "wallet",
    title: "Finance",
    description: "Take control of your cash flow by managing accounting, tracking expenses, and viewing financial health."
  }
];

const retailTitle = {
  primary: 'Retail Management',
  secondary: 'System'
};

const retailSubtitle = "Our comprehensive system is built with powerful modules designed to manage every aspect of your retail business from a single, intuitive dashboard.";


const caseStudyData = {
  backgroundImage: "/img/pattern-img1.png",
  heading: { primary: "Retail Case", secondary: "Study" },
  subHeading: "Ezshopit: Building a Global Multi-Vendor Marketplace",
  image: {
    src: "/img/Ezshopit-ss.png",
    alt: "Ezshopit E-commerce Platform",
    width: 600,
    height: 400
  },
  challenge: "Our Dubai-based client, Ezshopit, needed to launch a comprehensive multi-vendor e-commerce platform. The goal was to create a unified digital ecosystem that could handle multiple languages and currencies, manage a diverse range of vendors, and provide a seamless shopping experience for customers on both web and mobile.",
  solution: "We delivered a complete, end-to-end solution, architecting and developing a powerful e-commerce website, an Android app, and an iOS app from the ground up. The platform was equipped with robust features to manage the entire business lifecycle:",
  highlights: [
    {
      title: "Full E-commerce Functionality:",
      description: 'Seamless "Add to Cart," checkout, and customer login with integrated payment gateways.'
    },
    {
      title: "Multi-Vendor & Catalog Management:",
      description: "Empowering individual vendors to manage their products, inventory, and shipping."
    },
    {
      title: "Advanced Logistics Control:",
      description: "A dedicated system for warehouse management, order assignment to delivery personnel, and real-time delivery status updates."
    },
    {
      title: "Comprehensive Admin Dashboard:",
      description: "Providing Ezshopit with full control over user approvals, sales tracking, and promotional coupon campaigns."
    }
  ],
  details: [
    {
      title: "Categories",
      items: ["E-Commerce"]
    },
    {
      title: "Client",
      items: ["LOCATION: DUBAI"]
    },
    {
      title: "What We Did",
      items: ["Android App Development", "iPhone App Development", "Website Development"]
    },
    {
      title: "Year",
      items: ["2021"]
    }
  ],
  caseStudyLinkText: "View Full Case Study",
  caseStudyLinkUrl: "/case-study"
};


const RetailManagement = () => {
  return (
    <div>
        <RetailManagementBanner/>
        <RetailManagementSystem
            title={retailTitle}
            subtitle={retailSubtitle}
            features={retailFeatures}
        />
        <RetailWebsiteFeatures/>
        <RetailCaseStudy {...caseStudyData} />
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <QuickConsultation/>
    </div>
  )
}

export default RetailManagement;