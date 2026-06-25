import React from 'react';
import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';

import CRMBanner from '@/app/_components/solutions_components/retail/CRMBanner';
import CRMWhyChoose from '@/app/_components/solutions_components/retail/CRMWhyChoose';
import CRMServices from '@/app/_components/solutions_components/retail/CRMServices';
import CRMChallenges from '@/app/_components/solutions_components/retail/CRMChallenges';
import CRMProcess from '@/app/_components/solutions_components/retail/CRMProcess';
import CRMBenefits from '@/app/_components/solutions_components/retail/CRMBenefits';
import CRMFeatures from '@/app/_components/solutions_components/retail/CRMFeatures';
import CRMIndustries from '@/app/_components/solutions_components/retail/CRMIndustries';
import CRMTrust from '@/app/_components/solutions_components/retail/CRMTrust';
import CRMCTA from '@/app/_components/solutions_components/retail/CRMCTA';
import FAQSection from '@/app/_components/services_components/FAQSection';

export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/retail' } 
  });
}

const faqsData = [
  {
    id: "headingOne",
    target: "collapseOne",
    question: "What Is a Custom CRM?",
    answer: "A custom CRM is a customer relationship management system specifically designed around a company's business processes, customer journey, sales workflow, and operational requirements. Unlike off-the-shelf CRM platforms, custom CRM software provides greater flexibility, scalability, automation, and integration capabilities."
  },
  {
    id: "headingTwo",
    target: "collapseTwo",
    question: "Why Choose a CRM Development Company in India?",
    answer: "India offers access to highly skilled CRM developers, cost-effective development services, global delivery capabilities, and extensive expertise in CRM customization, integration, and enterprise software development."
  },
  {
    id: "headingThree",
    target: "collapseThree",
    question: "What is CRM software development?",
    answer: "CRM software development involves creating customer relationship management systems that help businesses manage customer interactions, sales processes, marketing activities, and customer support operations."
  },
  {
    id: "headingFour",
    target: "collapseFour",
    question: "How much does custom CRM development cost?",
    answer: "Costs vary depending on features, integrations, complexity, user count, and customization requirements."
  },
  {
    id: "headingFive",
    target: "collapseFive",
    question: "How long does CRM development take?",
    answer: "A basic CRM can take 8–12 weeks, while enterprise-grade solutions may require several months."
  },
  {
    id: "headingSix",
    target: "collapseSix",
    question: "Do you provide CRM consulting services?",
    answer: "Yes. We provide CRM consulting, planning, architecture design, implementation, and optimization services."
  },
  {
    id: "headingSeven",
    target: "collapseSeven",
    question: "Can you integrate CRM with existing software?",
    answer: "Yes. We integrate CRM systems with ERP, accounting, marketing, e-commerce, and third-party applications."
  },
  {
    id: "headingEight",
    target: "collapseEight",
    question: "Do you offer cloud-based CRM solutions?",
    answer: "Yes. We develop scalable cloud-based CRM platforms hosted on secure cloud infrastructure."
  },
  {
    id: "headingNine",
    target: "collapseNine",
    question: "Can startups benefit from custom CRM development?",
    answer: "Absolutely. Startups can automate sales processes, improve customer management, and scale operations efficiently."
  },
  {
    id: "headingTen",
    target: "collapseTen",
    question: "Do you provide CRM migration services?",
    answer: "Yes. We help businesses migrate data from legacy systems and existing CRM platforms."
  },
  {
    id: "headingEleven",
    target: "collapseEleven",
    question: "Can I hire dedicated CRM developers?",
    answer: "Yes. You can hire CRM developers on full-time, part-time, or project-based engagement models."
  },
  {
    id: "headingTwelve",
    target: "collapseTwelve",
    question: "Which industries do you serve?",
    answer: "We serve healthcare, real estate, education, e-commerce, logistics, manufacturing, finance, and professional services."
  },
  {
    id: "headingThirteen",
    target: "collapseThirteen",
    question: "Is custom CRM better than off-the-shelf CRM?",
    answer: "A custom CRM offers greater flexibility, tailored workflows, and deeper integrations aligned with business needs."
  },
  {
    id: "headingFourteen",
    target: "collapseFourteen",
    question: "Do you provide CRM maintenance and support?",
    answer: "Yes. We offer ongoing support, upgrades, monitoring, and optimization services."
  }
];

const RetailManagement = () => {
  return (
    <div>
      <style dangerouslySetInnerHTML={{__html: `
        .nunito-page-content, 
        .nunito-page-content h1, 
        .nunito-page-content h2, 
        .nunito-page-content h3, 
        .nunito-page-content h4, 
        .nunito-page-content h5, 
        .nunito-page-content h6,
        .nunito-page-content p,
        .nunito-page-content span,
        .nunito-page-content a,
        .nunito-page-content li {
          font-family: 'Nunito', sans-serif !important;
        }
        .nunito-page-content h2,
        .nunito-page-content .heading-title {
          font-family: 'Nunito', Arial, "Helvetica Neue", Helvetica, sans-serif !important;
          font-size: 34px !important;
          line-height: 44.2px !important;
          font-weight: 800 !important;
          letter-spacing: 0.68px !important;
        }
      `}} />
      
      {/* Banner handles its own fonts (Rajdhani) */}
      <CRMBanner />

      <div className="nunito-page-content">
        <CRMWhyChoose />
        <CRMServices />
        <CRMChallenges />
        <CRMProcess />
        <CRMBenefits />
        <CRMFeatures />
        <CRMIndustries />
        <CRMTrust />
        <FAQSection faqs={faqsData} />
        <CRMCTA />
      </div>
    </div>
  );
};

export default RetailManagement;