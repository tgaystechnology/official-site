import HealthcareBanner from '@/app/_components/solutions_components/healthcare/HealthcareBanner'
import RetailManagementSystem from '@/app/_components/solutions_components/RetailManagementSystem';
import WhyChooseUsEcommerce from '@/app/_components/solutions_components/e_commerce_solution/WhyChooseUsEcommerce';
import EducationKeyBenefitsSection from '@/app/_components/solutions_components/EducationKeyBenefitsSection';
import RetailCaseStudy from '@/app/_components/solutions_components/RetailCaseStudy';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/healthcare' } // This should match exactly what's in your database
  });
}


const healthcareFeatures = [
  {
    id: 1,
    icon: "desktop-outline", // Represents individual user/patient profile access
    title: "Patient Portals",
    description:
      "Empower patients with secure online access to their medical records, appointment scheduling, and direct communication with their care team.",
  },
  {
    id: 2,
    icon: "card-outline", // Best suited for payments (credit/debit cards)
    title: "Secure Payments",
    description:
      "Simplify billing with an integrated and encrypted payment system, allowing patients to easily pay for services online.",
  },
  {
    id: 3,
    icon: "medkit-outline", // Symbolizes medical services and healthcare
    title: "Medical Websites",
    description:
      "Establish a professional and trustworthy online presence for your hospital, clinic, or private practice with a custom-designed website.",
  },
  {
    id: 4,
    icon: "shield-checkmark-outline", // Represents protection, security, and compliance
    title: "Security & Compliance",
    description:
      "Build with confidence. We ensure all our solutions adhere to strict healthcare standards like HIPAA for ultimate data security.",
  },
];


const healthcareTitle = {
  primary: 'Healthcare',
  secondary: 'Solutions'
};

const healthcareSubtitle = "From patient engagement portals to clinic management systems, we develop technology that addresses the critical needs of today's healthcare providers.";

const whyChooseUsData = {
  heading: 'Why Choose Us?',
  description:
    'Developing healthcare software requires a partner who understands the importance of security, reliability, and usability. We are committed to building technology that providers can trust and patients can use with ease, ensuring a better healthcare journey for everyone.',
  image: {
    src: 'Online doctor.json',
    alt: 'Why Choose Us',
    // width: 500,
    // height: 500,
  },
  features: [
    {
      icon: 'fas fa-check-circle',
      title: 'Quality Solutions',
      text: 'We provide robust, scalable, and reliable services designed for the critical demands of the healthcare sector.',
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      text: 'Our dedicated support team is always available to assist with your technical needs, ensuring system uptime.',
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Customizable',
      text: 'We tailor our solutions to fit the unique workflow and requirements of your specific medical practice or institution.',
    },
  ],
};

const keyBenefitsData = {
  title: 'Key Features & Benefits',
  description: 'Our healthcare solutions are built on a foundation of principles essential for the modern medical industry.',
  features: [
    {
      icon: 'lock-closed-outline',
      title: 'HIPAA-Compliant',
      description: 'Ensuring the highest standards of data security.',
    },
    {
      icon: 'settings-outline',
      title: 'Interoperability',
      description: "Systems that connect with EMRs & other software.",
    },
    {
      icon: 'trending-up-outline',
      title: 'Patient-Centric Design',
      description: 'Intuitive interfaces for patients of all ages.',
    },
    {
      icon: 'balloon-outline',
      title: 'Workflow Automation',
      description: 'Streamlining administrative and clinical tasks.',
    },
  ],
};

const caseStudyData = {
  backgroundImage: "/img/pattern-img1.png",
  heading: { primary: "Healthcare Case", secondary: "Study" },
  subHeading: "Smart Relief Massage: A Digital Platform for Wellness",
  image: {
    src: "/img/Smart-Relief.png",
    alt: "education case study",
    width: 600,
    height: 400
  },
  challenge: "Smart Relief Massage, a US-based provider of therapeutic wellness products, needed to create a trusted online destination for customers seeking pain relief. Their challenge was to build a professional digital platform that was not only secure and easy to navigate but also conveyed the credibility essential for a healthcare brand.",
  solution: "We developed a bespoke e-commerce solution on the Magento platform, creating a seamless and secure purchasing journey. The platform was designed to build patient trust, featuring a custom, professional theme and integrating leading payment gateways like PayPal and Amazon Pay to ensure data privacy and security.",
  highlights: [
    {
      title: "A Trusted Digital Storefront:",
      description: 'A unique, client-approved e-commerce design that builds patient confidence.'
    },
    {
      title: "Secure Patient Transactions:",
      description: "Integrated secure payment gateways to protect sensitive customer data."
    },
    {
      title: "Accessibility on Any Device:",
      description: "A fully responsive design ensuring patients can find and purchase relief products from desktop or mobile."
    },
    {
      title: "Streamlined Wellness Operations:",
      description: "A comprehensive back-end for managing therapeutic product inventory and patient orders."
    },
  ],
  details: [
    {
      title: "Categories",
      items: ["Health & Wellness E-commerce"]
    },
    {
      title: "Client",
      items: ["LOCATION: USA"]
    },
    {
      title: "What We Did",
      items: ["Platform Design & Development", "Secure Payment Integration"]
    },
    {
      title: "Year",
      items: ["2021"]
    }
  ],
  caseStudyLinkText: "View Full Case Study",
  caseStudyLinkUrl: "/case-study"
};

const HealthCare = () => {
  return (
    <div>
        <HealthcareBanner/>
        <RetailManagementSystem
            title={healthcareTitle}
            subtitle={healthcareSubtitle}
            features={healthcareFeatures}
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

export default HealthCare
