import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import EcommerceBanner from '@/app/_components/solutions_components/e_commerce_solution/EcommerceBanner'
import WhyChooseUsEcommerce from '@/app/_components/solutions_components/e_commerce_solution/WhyChooseUsEcommerce';
import EducationKeyBenefitsSection from '@/app/_components/solutions_components/EducationKeyBenefitsSection';
import RetailCaseStudy from '@/app/_components/solutions_components/RetailCaseStudy';
import RetailManagementSystem from '@/app/_components/solutions_components/RetailManagementSystem';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/e-commerce-solution' } // This should match exactly what's in your database
  });
}



const eCommerceFeatures = [
  {
    id: 1,
    icon: "desktop-outline", // For mobile and responsive web presence
    title: "Website & Mobile Application",
    description:
      "Reach customers everywhere with a stunning, responsive website and dedicated mobile apps for iOS and Android.",
  },
  {
    id: 2,
    icon: "laptop-outline", // Represents POS, billing, and payment systems
    title: "POS System",
    description:
      "Unify your online and offline sales with a Point-of-Sale system that syncs inventory and customer data in real-time.",
  },
  {
    id: 3,
    icon: "receipt-outline", // For product catalog and stock layers
    title: "Product & Inventory Management",
    description:
      "Effortlessly manage your catalog, track stock levels, and automate inventory updates to prevent overselling.",
  },
  {
    id: 4,
    icon: "cash-outline", // Multi-language/currency/vendor marketplace
    title: "Multivendor / Multi-language / Multi-currency",
    description:
      "Go global by launching a full-featured marketplace with support for multiple vendors, languages, and currencies.",
  },
  {
    id: 5,
    icon: "desktop-outline", // For B2B/B2C/D2C business models
    title: "B2B / B2C / D2C Development",
    description:
      "We build custom platforms for your business model, whether you sell to businesses, consumers, or directly to your audience.",
  },
  {
    id: 6,
    icon: "git-network-outline", // For aggregator marketplaces
    title: "Aggregator Platform",
    description:
      "Bring together products or services from various sources into a single, seamless online marketplace for your customers.",
  },
];

const eCommerceTitle = {
  primary: 'E-Commerce',
  secondary: 'Solutions'
};

const eCommerceSubtitle = "We offer a complete suite of services to build and manage a successful online business, covering every channel and operational need.";

const keyBenefitsData = {
  title: 'Key Features & Benefits',
  description: 'Our e-commerce platforms are built with the essential features needed to thrive in a competitive online market.',
  features: [
    {
      icon: 'lock-closed-outline',
      title: 'Conversion-Focused Design',
      description: 'Beautiful UI/UX that guides users to checkout.',
    },
    {
      icon: 'settings-outline',
      title: 'Mobile-First Commerce',
      description: "A flawless shopping experience on any device.",
    },
    {
      icon: 'trending-up-outline',
      title: 'Scalable Architecture',
      description: 'Technology that grows with your business.',
    },
    {
      icon: 'balloon-outline',
      title: 'Secure Payment Gateways',
      description: 'Integrated and trusted payment solutions.',
    },
  ],
};

const caseStudyData = {
  backgroundImage: "/img/pattern-img1.png",
  heading: { primary: "E-Commerce Case", secondary: "Study" },
  subHeading: "Square One London: Crafting a Bespoke Fashion E-Commerce Experience",
  image: {
    src: "/img/square-one.png",
    alt: "education case study",
    width: 600,
    height: 400
  },
  challenge: "UK-based fashion brand Square One London needed to launch a sophisticated online store for their apparel. They required a custom-themed website with seamless navigation, product variations, and a secure, user-friendly checkout process.",
  solution: "We developed a complete e-commerce solution, including a visually stunning website and mobile apps. Our team focused on creating an intuitive user journey, from Browse collections to a simple, secure payment process via PayPal.",
  highlights: [
    {
      title: "Custom Theme Integration:",
      description: 'A unique storefront that captures the essence of their fashion line.'
    },
    {
      title: "Detailed Product Management:",
      description: "Easy-to-manage listings with support for different sizes and colors."
    },
    {
      title: "Complete Sales Funnel:",
      description: "A seamless 'Add to Cart,' customer sign-in, and secure checkout experience."
    },
    {
      title: "Back-End Operations:",
      description: "Integrated systems for inventory management, order tracking, and sales analytics."
    },
  ],
  details: [
    {
      title: "Categories",
      items: ["E-commerce"]
    },
    {
      title: "Client",
      items: ["LOCATION: UK"]
    },
    {
      title: "What We Did",
      items: ["Website Development", "Android & iPhone App Development"]
    },
    {
      title: "Year",
      items: ["2021"]
    }
  ],
  caseStudyLinkText: "View Full Case Study",
  caseStudyLinkUrl: "/case-study"
};

const whyChooseUsData = {
  heading: 'Why Choose Us for E-Commerce?',
  description:
    'Building a successful e-commerce business requires more than just a website; it requires a strategic partner. We combine cutting-edge technology with deep industry expertise to deliver solutions that are not just functional, but profitable.',
  image: {
    src: 'shopping Ecommerce.json',
    alt: 'Why Choose Us',
    // width: 500,
    // height: 500,
  },
  features: [
    {
      icon: 'fas fa-check-circle',
      title: 'Quality Solutions',
      text: 'We provide robust, scalable & reliable e-commerce platforms that perform flawlessly under pressure.',
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      text: 'Our dedicated support team is always available to ensure your online store runs smoothly around the clock.',
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Customizable',
      text: 'We tailor every feature and design element to perfectly match your brand and business model.',
    },
  ],
};

const ECommerceSolution = () => {
  return (
    <div>
        <EcommerceBanner/>
        <RetailManagementSystem
            title={eCommerceTitle}
            subtitle={eCommerceSubtitle}
            features={eCommerceFeatures}
        />
        <WhyChooseUsEcommerce
            heading={whyChooseUsData.heading}
            description={whyChooseUsData.description}
            image={whyChooseUsData.image}
            features={whyChooseUsData.features}
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

export default ECommerceSolution