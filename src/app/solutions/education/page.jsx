import React from 'react';
import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';

import EducationBanner from '@/app/_components/solutions_components/education/EducationBanner';
import EducationWhyChoose from '@/app/_components/solutions_components/education/EducationWhyChoose';
import EducationServices from '@/app/_components/solutions_components/education/EducationServices';
import EducationModules from '@/app/_components/solutions_components/education/EducationModules';
import EducationChallenges from '@/app/_components/solutions_components/education/EducationChallenges';
import EducationProcess from '@/app/_components/solutions_components/education/EducationProcess';
import EducationBenefits from '@/app/_components/solutions_components/education/EducationBenefits';
import EducationComparison from '@/app/_components/solutions_components/education/EducationComparison';
import EducationIndustries from '@/app/_components/solutions_components/education/EducationIndustries';
import EducationTrust from '@/app/_components/solutions_components/education/EducationTrust';
import EducationCTA from '@/app/_components/solutions_components/education/EducationCTA';
import FAQSection from '@/app/_components/services_components/FAQSection';

export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/education' } 
  });
}

const faqsData = [
  {
    id: "headingOne",
    target: "collapseOne",
    question: "What is an Education Management System?",
    answer: "An Education Management System is software that manages academic, administrative, and operational activities within educational institutions."
  },
  {
    id: "headingTwo",
    target: "collapseTwo",
    question: "How much does Education Management System development cost?",
    answer: "Costs vary based on institution size, required modules, integrations, and customization needs."
  },
  {
    id: "headingThree",
    target: "collapseThree",
    question: "Can the system support multiple campuses?",
    answer: "Yes. We develop multi-campus and multi-location management solutions."
  },
  {
    id: "headingFour",
    target: "collapseFour",
    question: "Is the platform cloud-based?",
    answer: "Yes. We offer secure cloud-based deployments with remote accessibility."
  },
  {
    id: "headingFive",
    target: "collapseFive",
    question: "Can parents access student information?",
    answer: "Yes. Dedicated parent portals provide attendance, grades, and communication updates."
  },
  {
    id: "headingSix",
    target: "collapseSix",
    question: "Does the system support online learning?",
    answer: "Yes. Learning Management System integration is available."
  },
  {
    id: "headingSeven",
    target: "collapseSeven",
    question: "Can the platform manage examinations?",
    answer: "Yes. It supports scheduling, assessments, grading, and result generation."
  },
  {
    id: "headingEight",
    target: "collapseEight",
    question: "Is the software mobile-friendly?",
    answer: "Absolutely. Mobile-responsive interfaces and app integrations are available."
  },
  {
    id: "headingNine",
    target: "collapseNine",
    question: "Can we customize modules?",
    answer: "Yes. Every module can be customized according to institutional requirements."
  },
  {
    id: "headingTen",
    target: "collapseTen",
    question: "Do you provide technical support?",
    answer: "Yes. We offer maintenance, upgrades, and ongoing support."
  },
  {
    id: "headingEleven",
    target: "collapseEleven",
    question: "Can the system integrate with third-party applications?",
    answer: "Yes. We support API-based integrations and external software connectivity."
  },
  {
    id: "headingTwelve",
    target: "collapseTwelve",
    question: "Is student data secure?",
    answer: "Yes. We implement enterprise-grade security protocols and role-based access controls."
  },
  {
    id: "headingThirteen",
    target: "collapseThirteen",
    question: "How long does implementation take?",
    answer: "Typical implementation timelines range from 8 to 24 weeks depending on complexity."
  },
  {
    id: "headingFourteen",
    target: "collapseFourteen",
    question: "Do you provide training?",
    answer: "Yes. We provide complete administrator and user training."
  },
  {
    id: "headingFifteen",
    target: "collapseFifteen",
    question: "Can the system scale as the institution grows?",
    answer: "Yes. Our architecture is designed for long-term scalability."
  }
];

const Education = () => {
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
      <EducationBanner />

      <div className="nunito-page-content">
        <EducationWhyChoose />
        <EducationServices />
        <EducationModules />
        <EducationChallenges />
        <EducationProcess />
        <EducationBenefits />
        <EducationComparison />
        <EducationIndustries />
        <EducationTrust />
        <FAQSection faqs={faqsData} />
        <EducationCTA />
      </div>
    </div>
  );
};

export default Education;