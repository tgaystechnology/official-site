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
    answer: "A fitness app development company creates digital fitness, wellness, workout, and health management applications."
  },
  {
    id: "headingTwo",
    target: "collapseTwo",
    question: "Do you develop custom fitness apps?",
    answer: "Yes, we specialize in fully customized fitness app development solutions."
  },
  {
    id: "headingThree",
    target: "collapseThree",
    question: "Can you build gym management software?",
    answer: "Yes, we develop gym management software for fitness centers, gyms, and franchises."
  },
  {
    id: "headingFour",
    target: "collapseFour",
    question: "Do you integrate wearable devices?",
    answer: "Yes, we support Apple Watch, Fitbit, Garmin, Wear OS, and other wearable devices."
  },
  {
    id: "headingFive",
    target: "collapseFive",
    question: "Can fitness apps include AI features?",
    answer: "Absolutely. We develop AI-powered recommendations, coaching, and analytics features."
  },
  {
    id: "headingSix",
    target: "collapseSix",
    question: "Do you create nutrition apps?",
    answer: "Yes, we develop nutrition tracking and meal-planning applications."
  },
  {
    id: "headingSeven",
    target: "collapseSeven",
    question: "Can trainers manage clients through the app?",
    answer: "Yes, trainer portals and client management systems can be integrated."
  },
  {
    id: "headingEight",
    target: "collapseEight",
    question: "Do you develop SaaS fitness platforms?",
    answer: "Yes, we build subscription-based fitness SaaS solutions."
  },
  {
    id: "headingNine",
    target: "collapseNine",
    question: "Is the software scalable?",
    answer: "Yes, all solutions are designed for scalability and growth."
  },
  {
    id: "headingTen",
    target: "collapseTen",
    question: "Can apps support live fitness classes?",
    answer: "Yes, live streaming and virtual training features can be included."
  },
  {
    id: "headingEleven",
    target: "collapseEleven",
    question: "How long does development take?",
    answer: "Project timelines depend on features and complexity."
  },
  {
    id: "headingTwelve",
    target: "collapseTwelve",
    question: "Do you provide post-launch support?",
    answer: "Yes, ongoing maintenance and support are available."
  },
  {
    id: "headingThirteen",
    target: "collapseThirteen",
    question: "Can you build wellness applications?",
    answer: "Yes, including mental wellness, meditation, sleep tracking, and habit-building apps."
  },
  {
    id: "headingFourteen",
    target: "collapseFourteen",
    question: "What technologies do you use?",
    answer: "We use modern frameworks, cloud infrastructure, and enterprise-grade technologies."
  },
  {
    id: "headingFifteen",
    target: "collapseFifteen",
    question: "How do I start my fitness app project?",
    answer: "Contact our team for a free consultation and project assessment."
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