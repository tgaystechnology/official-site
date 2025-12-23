import EducationKeyBenefitsSection from '@/app/_components/solutions_components/EducationKeyBenefitsSection';
import EducationChooseUs from '@/app/_components/solutions_components/EducationChooseUs';
import RetailManagementSystem from '@/app/_components/solutions_components/RetailManagementSystem';
import TourTravelBanner from '@/app/_components/solutions_components/tour-travel/TourTravelBanner'
import RetailCaseStudy from '@/app/_components/solutions_components/RetailCaseStudy';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/tour-travel' } // This should match exactly what's in your database
  });
}

const chooseUsData = {
  heading: 'Why',
  highlighted: 'Choose',
  subHeading: 'Us',
  description: `In the dynamic travel industry, efficiency and customer experience are paramount. We build custom software that automates your workflow, giving you more time to focus on crafting amazing travel packages. \n\n\

Our solutions are engineered to handle the unique complexities of the travel business, from multi-currency transactions to real-time supplier coordination.`,

  image: {
    src: 'Buy ticket.json',
    alt: 'Choose Us Image',
    // width: 500,
    // height: 500,
  },
  features: [
    {
      icon: 'fas fa-shield-alt',
      title: 'Reliability and Security',
      text: 'We build platforms with secure payment gateways and robust data protection to ensure peace of mind for you and your travellers.',
    },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Empower Your Expertise',
      text: 'Our systems provide you with the tools to manage every trip detail, making you a more effective and trusted travel guide.',
    },
  ],
};

const tourTravelFeatures = [
  {
    id: 1,
    icon: "document-text-outline", // For creating detailed quotations
    title: "Customer Quotation",
    description:
      "Create and send beautiful, detailed, and professional travel quotations in minutes, complete with customized itineraries.",
  },
  {
    id: 2,
    icon: "receipt-outline", // For invoices and billing
    title: "Customer Invoice",
    description:
      "Automate your billing process with professional invoicing, payment tracking, and multi-currency support.",
  },
  {
    id: 3,
    icon: "bar-chart-outline", // For sales, analytics, and reports
    title: "Sales & Reporting",
    description:
      "Gain valuable insights into your business with powerful dashboards that track sales, commissions, and performance.",
  },
  {
    id: 4,
    icon: "people-outline", // For managing suppliers and vendors
    title: "Supplier Management",
    description:
      "Manage relationships with hotels, airlines, and tour operators in one central place to streamline bookings and payments.",
  },
  {
    id: 5,
    icon: "globe-outline", // For web platforms and online presence
    title: "Web Application Platform",
    description:
      "Launch a stunning travel portal where customers can browse packages, book trips, and manage their itineraries online.",
  },
];



const tourTravelTitle = {
  primary: 'Tour & Travel Management',
  secondary: 'System'
};

const tourTravelSubtitle = "Our modular system allows you to build the perfect platform for your agency's needs, ensuring seamless management of your entire business process.";


const keyBenefitsData = {
  title: 'Key Features & Benefits',
  description: 'Our travel technology is built to provide tangible benefits that drive efficiency and growth for your agency.',
  features: [
    {
      icon: 'lock-closed-outline',
      title: 'Automated Itinerary Builder',
      description: 'Craft complex, multi-day itineraries with ease..',
    },
    {
      icon: 'settings-outline',
      title: 'Centralized Booking Engine',
      description: "Manage flights, hotels, and tours from one dashboard.",
    },
    {
      icon: 'trending-up-outline',
      title: 'Supplier & Agent Portals',
      description: 'Streamline communication with your network of partners.',
    },
    {
      icon: 'balloon-outline',
      title: 'Financial Management',
      description: 'Track payments, commissions, and profitability.',
    },
  ],
};


const caseStudyData = {
  backgroundImage: "/img/pattern-img1.png",
  heading: { primary: "Tour & Travel Case", secondary: "Study" },
  subHeading: "Bolton Travel: A Custom CRM for Global Operations",
  image: {
    src: "/img/bolton-tt-img.png",
    alt: "education case study",
    width: 600,
    height: 400
  },
  challenge: "A leading UK-based agency, Bolton Travel, needed a centralized CRM to manage their complex operations. They were struggling with disconnected systems for employee tasks, sales tracking, tour bookings, and client financials.",
  solution: "We designed a bespoke Business CRM that unified all aspects of their workflow into one powerful platform. The system was delivered across web, Android, and iOS to ensure their team had access from anywhere, anytime. Key highlights include:",
  highlights: [
    {
      title: "Integrated Operations:",
      description: 'Central modules for managing tours, transfers, hotels, and suppliers.'
    },
    {
      title: "Sales & Financial Tracking:",
      description: "A robust system to monitor the sales pipeline and manage client payments."
    },
    {
      title: "Team Productivity:",
      description: "Tools to assign tasks to employees and track performance, boosting efficiency."
    },
    {
      title: "Complete Client Management:",
      description: "A 360-degree view of each client's history, preferences, and communications."
    },
  ],
  details: [
    {
      title: "Categories",
      items: ["Tour & Travel CRM"]
    },
    {
      title: "Client",
      items: ["LOCATION: UK"]
    },
    {
      title: "What We Did",
      items: ["Custom CRM Development", "Web, Android & iOS Apps"]
    },
    {
      title: "Year",
      items: ["2021"]
    }
  ],
  caseStudyLinkText: "View Full Case Study",
  caseStudyLinkUrl: "/case-study"
};


const TourTravel = () => {
  return (
    <div>
        <TourTravelBanner/>
        <EducationChooseUs
            heading={chooseUsData.heading}
            highlighted={chooseUsData.highlighted}
            subHeading={chooseUsData.subHeading}
            description={chooseUsData.description.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            image={chooseUsData.image}
            features={chooseUsData.features}
        />
        <RetailManagementSystem
            title={tourTravelTitle}
            subtitle={tourTravelSubtitle}
            features={tourTravelFeatures}
        />
        <EducationKeyBenefitsSection
            title={keyBenefitsData.title}
            description={keyBenefitsData.description}
            features={keyBenefitsData.features}
        />
        <RetailCaseStudy {...caseStudyData} />;
        <QuickConsultation/>
    </div>
    )
}

export default TourTravel