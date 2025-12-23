import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import EducationChooseUs from '@/app/_components/solutions_components/EducationChooseUs';
import EducationKeyBenefitsSection from '@/app/_components/solutions_components/EducationKeyBenefitsSection';
import HealthFitnessBanner from '@/app/_components/solutions_components/health_fitness/HealthFitnessBanner'
import RetailCaseStudy from '@/app/_components/solutions_components/RetailCaseStudy';
import RetailManagementSystem from '@/app/_components/solutions_components/RetailManagementSystem';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/health-fitness' } // This should match exactly what's in your database
  });
}

const healthFitnessFeatures = [
  {
    id: 1,
    icon: "fitness-outline", // Represents gym, health, and training
    title: "Gym ERP",
    description:
      "Run your entire facility from one dashboard. Our ERP handles member management, billing, class scheduling, and staff administration.",
  },
  {
    id: 2,
    icon: "desktop-outline", // For public-facing websites and online presence
    title: "Gym & Yoga Websites",
    description:
      "Create a stunning online presence for your gym or studio that attracts new members and showcases your unique brand.",
  },
  {
    id: 3,
    icon: "wallet-outline", // Payment-related (suitable for gateway integrations)
    title: "Payment Gateway Integration",
    description:
      "Automate recurring membership fees and service payments with secure, integrated online payment options for your members.",
  },
  {
    id: 4,
    icon: "cart-outline", // Represents e-commerce functionality
    title: "E-commerce Websites & Apps",
    description:
      "Boost your revenue by selling merchandise, supplements, and fitness accessories through an integrated online store.",
  },
  {
    id: 5,
    icon: "barbell-outline", // Perfect for fitness/workout-related apps
    title: "Workout Apps",
    description:
      "Engage members beyond the gym with custom-branded mobile apps for workout tracking, class booking, and community features.",
  },
];


const healthFitnessTitle = {
  primary: 'Health & Fitness',
  secondary: 'Management System'
};

const healthFitnessSubtitle = "We build comprehensive digital ecosystems for gyms, yoga studios, and wellness centers, designed to streamline operations and enhance the member experience.";

const chooseUsData = {
  heading: 'Why',
  highlighted: 'Choose',
  subHeading: 'Us',
  description: 'We create digital tools that help you manage your business efficiently and build a thriving community. Our technology is designed to help you succeed in the competitive fitness market.',
  image: {
    src: 'Physical fitness Animation.json',
    alt: 'Choose Us Image',
    // width: 500,
    // height: 500,
  },
  features: [
    {
      icon: 'fas fa-wallet',
      title: 'Quality Fitness Solutions',
      text: 'We provide robust and reliable software for gym management, member engagement, and personal training services.',
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: '24/7 Member Support',
      text: 'Our platforms empower you to offer continuous support to your members, while our technical team is always here for you.',
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Customizable Plans',
      text: 'We develop flexible software that can be tailored to your unique business model, from workout plans to tiered memberships.',
    },
  ],
};

const keyBenefitsData = {
  title: 'Key Features & Benefits',
  description: 'Our fitness technology is built with features that simplify management and supercharge member engagement.',
  features: [
    {
      icon: 'lock-closed-outline',
      title: 'Member Management',
      description: 'Automate sign-ups, billing, and access control.',
    },
    {
      icon: 'settings-outline',
      title: 'Class & Trainer Scheduling',
      description: "Easy booking for members and management for staff.",
    },
    {
      icon: 'trending-up-outline',
      title: 'Mobile App Integration',
      description: 'Engage members with a branded fitness app.',
    },
    {
      icon: 'balloon-outline',
      title: 'Performance Analytics',
      description: 'Track business growth and member engagement.',
    },
  ],
};

const caseStudyData = {
  backgroundImage: "/img/pattern-img1.png",
  heading: { primary: "Health & Fitness Case", secondary: "Study" },
  subHeading: "Gym Forest: An All-in-One Gym Management Platform",
  image: {
    src: "/img/gym-forest-img.png",
    alt: "education case study",
    width: 600,
    height: 400
  },
  challenge: "Gym Forest, a growing fitness center in India, needed a unified digital platform to manage its expanding operations and enhance member experience. They were using separate, inefficient systems for memberships, class scheduling, and communication.",
  solution: "We developed a comprehensive Gym ERP system, complete with a member-facing website and mobile apps for iOS and Android. The platform centralized all operations, providing a single source of truth for staff and a seamless digital experience for members.",
  highlights: [
    {
      title: "Automated Membership Management:",
      description: 'Simplified online registration, recurring billing, and digital check-ins.'
    },
    {
      title: "Interactive Class Scheduling:",
      description: "An easy-to-use calendar for members to book classes and personal training sessions."
    },
    {
      title: "Member Engagement App:",
      description: "A branded mobile app with workout tracking, progress photos, and community features."
    },
    {
      title: "Admin Dashboard:",
      description: "Powerful analytics on revenue, member attendance, and class popularity."
    },
  ],
  details: [
    {
      title: "Categories",
      items: ["Health & Fitness"]
    },
    {
      title: "Client",
      items: ["LOCATION: India"]
    },
    {
      title: "What We Did",
      items: ["Gym ERP Development", "Website & Mobile Apps"]
    },
    {
      title: "Year",
      items: ["2025"]
    }
  ],
  caseStudyLinkText: "View Full Case Study",
  caseStudyLinkUrl: "/case-study"
};

const HealthAndFitness = () => {
  return (
    <div>
        <HealthFitnessBanner/>
        <RetailManagementSystem
            title={healthFitnessTitle}
            subtitle={healthFitnessSubtitle}
            features={healthFitnessFeatures}
        />
        <EducationChooseUs
            heading={chooseUsData.heading}
            highlighted={chooseUsData.highlighted}
            subHeading={chooseUsData.subHeading}
            description={chooseUsData.description}
            image={chooseUsData.image}
            features={chooseUsData.features}
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

export default HealthAndFitness