import React from 'react';
import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';

import HealthFitnessBanner from '@/app/_components/solutions_components/health_fitness/HealthFitnessBanner';
import HealthFitnessWhyChoose from '@/app/_components/solutions_components/health_fitness/HealthFitnessWhyChoose';
import HealthFitnessServices from '@/app/_components/solutions_components/health_fitness/HealthFitnessServices';
import HealthFitnessChallenges from '@/app/_components/solutions_components/health_fitness/HealthFitnessChallenges';
import HealthFitnessProcess from '@/app/_components/solutions_components/health_fitness/HealthFitnessProcess';
import HealthFitnessBenefits from '@/app/_components/solutions_components/health_fitness/HealthFitnessBenefits';
import HealthFitnessComparison from '@/app/_components/solutions_components/health_fitness/HealthFitnessComparison';
import HealthFitnessIndustries from '@/app/_components/solutions_components/health_fitness/HealthFitnessIndustries';
import HealthFitnessTrust from '@/app/_components/solutions_components/health_fitness/HealthFitnessTrust';
import HealthFitnessCTA from '@/app/_components/solutions_components/health_fitness/HealthFitnessCTA';
import FAQSection from '@/app/_components/services_components/FAQSection';

export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/health-fitness' } 
  });
}

const faqsData = [
  {
    id: "headingOne",
    target: "collapseOne",
    question: "What does a fitness app development company do?",
    answer: "A fitness app development company creates digital fitness, wellness, workout, and health management applications tailored for startups, gyms, trainers, and enterprises."
  },
  {
    id: "headingTwo",
    target: "collapseTwo",
    question: "Do you develop custom fitness apps?",
    answer: "Yes, we specialize in fully customized fitness app development solutions designed to meet your specific business goals and target audience."
  },
  {
    id: "headingThree",
    target: "collapseThree",
    question: "Can you build gym management software?",
    answer: "Yes, we develop comprehensive gym management software and ERP systems for fitness centers, gyms, and global franchises."
  },
  {
    id: "headingFour",
    target: "collapseFour",
    question: "Do you integrate wearable devices?",
    answer: "Yes, we support integration with Apple Watch, Fitbit, Garmin, Samsung Galaxy Watch, Wear OS, and other Bluetooth-enabled wearable devices."
  },
  {
    id: "headingFive",
    target: "collapseFive",
    question: "Can fitness apps include AI features?",
    answer: "Absolutely. We develop AI-powered features such as personalized recommendations, virtual coaching, predictive analytics, and smart goal setting."
  },
  {
    id: "headingSix",
    target: "collapseSix",
    question: "Is the software scalable?",
    answer: "Yes, all our digital fitness solutions are built on cloud-native architectures designed for massive scalability, high availability, and future growth."
  }
];

const HealthAndFitness = () => {
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
      <HealthFitnessBanner />

      <div className="nunito-page-content">
        <HealthFitnessWhyChoose />
        <HealthFitnessServices />
        <HealthFitnessChallenges />
        <HealthFitnessProcess />
        <HealthFitnessBenefits />
        <HealthFitnessComparison />
        <HealthFitnessIndustries />
        <HealthFitnessTrust />
        <FAQSection faqs={faqsData} />
        <HealthFitnessCTA />
      </div>
    </div>
  );
};

export default HealthAndFitness;