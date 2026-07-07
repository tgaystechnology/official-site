import Testimonials from '@/app/_components/home/Testimonials';
import AIJourneySection from '@/app/_components/services_components/AI_powered_services/AIJourneySection';
import AIPoweredBanner from '@/app/_components/services_components/AI_powered_services/AIPoweredBanner';
import AISolutionsSection from '@/app/_components/services_components/AI_powered_services/AISolutionsSection';
import WhyChooseOurAI from '@/app/_components/services_components/AI_powered_services/WhyChooseOurAI';
import DetailedAIServices from '@/app/_components/services_components/AI_powered_services/DetailedAIServices';
import AIChallengesAndSolutions from '@/app/_components/services_components/AI_powered_services/AIChallengesAndSolutions';
import AIBenefitsSection from '@/app/_components/services_components/AI_powered_services/AIBenefitsSection';
import AIIndustriesWeServe from '@/app/_components/services_components/AI_powered_services/AIIndustriesWeServe';
import AITrustSection from '@/app/_components/services_components/AI_powered_services/AITrustSection';
import StrongCallToAction from '@/app/_components/services_components/AI_powered_services/StrongCallToAction';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import FAQSection from '@/app/_components/services_components/FAQSection';
import OurValuesSection from '@/app/_components/services_components/AI_powered_services/OurValuesSection';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import React from 'react';
import Link from 'next/link';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import '@/app/_components/products/PricingCards.css'; // Load Uiverse tab styling classes

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/ai-powered-services' } // This should match exactly what's in your database
  });
}

const AIfaqs = [
  {
    id: 'collapseFaqOne',
    target: 'collapseFaqOne',
    question: 'What makes TGAYS Technology the Best AI Development Company in India?',
    answer: 'We combine AI expertise, industry knowledge, enterprise-grade security, and business-focused development methodologies to deliver measurable outcomes.'
  },
  {
    id: 'collapseFaqTwo',
    target: 'collapseFaqTwo',
    question: 'How much does AI development cost?',
    answer: 'Costs vary based on project complexity, integrations, data requirements, and customization needs. Contact us for a tailored estimate.'
  },
  {
    id: 'collapseFaqThree',
    target: 'collapseFaqThree',
    question: 'How long does an AI development project take?',
    answer: 'Most projects range from 4 weeks to 6 months depending on scope and complexity.'
  },
  {
    id: 'collapseFaqFour',
    target: 'collapseFaqFour',
    question: 'Do you develop AI solutions for startups?',
    answer: 'Yes. We provide AI MVP development, AI product engineering, and scalable startup-focused AI solutions.'
  },
  {
    id: 'collapseFaqFive',
    target: 'collapseFaqFive',
    question: 'Can you integrate AI into existing software?',
    answer: 'Absolutely. We specialize in AI integration for ERP, CRM, SaaS, and enterprise platforms.'
  },
  {
    id: 'collapseFaqSix',
    target: 'collapseFaqSix',
    question: 'What industries do you serve?',
    answer: 'Healthcare, finance, manufacturing, retail, logistics, education, real estate, and more.'
  },
  {
    id: 'collapseFaqSeven',
    target: 'collapseFaqSeven',
    question: 'What is Generative AI?',
    answer: 'Generative AI creates content, insights, conversations, and outputs using advanced language models and machine learning technologies.'
  },
  {
    id: 'collapseFaqEight',
    target: 'collapseFaqEight',
    question: 'What are AI agents?',
    answer: 'AI agents are autonomous systems capable of performing tasks, making decisions, and interacting with users or software systems.'
  },
  {
    id: 'collapseFaqNine',
    target: 'collapseFaqNine',
    question: 'Do you provide AI consulting services?',
    answer: 'Yes. Our AI consulting experts help organizations plan, implement, and scale AI initiatives successfully.'
  },
  {
    id: 'collapseFaqTen',
    target: 'collapseFaqTen',
    question: 'Is AI secure for enterprise use?',
    answer: 'When implemented correctly with governance and security frameworks, AI can be highly secure and compliant.'
  },
  {
    id: 'collapseFaqEleven',
    target: 'collapseFaqEleven',
    question: 'Can AI help reduce operational costs?',
    answer: 'Yes. AI automation significantly reduces manual effort, errors, and inefficiencies.'
  },
  {
    id: 'collapseFaqTwelve',
    target: 'collapseFaqTwelve',
    question: 'Do you offer post-deployment support?',
    answer: 'Yes. We provide ongoing maintenance, optimization, monitoring, and support services.'
  }
];

const AiPoweredServices = () => {
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
          .nunito-page-content li, 
          .nunito-page-content a, 
          .nunito-page-content button {
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
        <AIPoweredBanner/>
        <div className="nunito-page-content">
          <AISolutionsSection/>
          <WhyChooseOurAI/>
          <DetailedAIServices/>
          <AIChallengesAndSolutions/>
          <AIJourneySection/>
          <AIBenefitsSection/>
          <AIIndustriesWeServe/>
          <AITrustSection/>
          
          <AnimatedTestimonials autoplay={true}/>
          
          <ServiceTechStack
            heading={
              <>
                CUTTING-EDGE <span className="c-primary">TECH STACK</span>
              </>
            }
            description="We leverage a focused set of powerful AI and data technologies to build intelligent, scalable, and business-ready solutions — from chatbots and custom AI agents to RAG systems and predictive workflows."
            cards={[
              {
                title: 'AI Development',
                items: [
                  { icon: 'ellipsis-horizontal-outline', text: 'Python' },
                  { icon: 'ellipsis-horizontal-outline', text: 'OpenAI APIs (GPT, Whisper)' },
                  { icon: 'ellipsis-horizontal-outline', text: 'LangChain' },
                  { icon: 'ellipsis-horizontal-outline', text: 'RAG (Retrieval-Augmented Generation)' },
                  { icon: 'ellipsis-horizontal-outline', text: 'Hugging Face Transformers' },
                  { icon: 'ellipsis-horizontal-outline', text: 'TensorFlow / PyTorch' },
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
              {
                title: 'Data & Storage',
                highlight: true,
                items: [
                  { icon: 'ellipsis-horizontal-outline', text: 'PostgreSQL' },
                  { icon: 'ellipsis-horizontal-outline', text: 'MongoDB' },
                  { icon: 'ellipsis-horizontal-outline', text: 'Pinecone (Vector DB)' },
                  { icon: 'ellipsis-horizontal-outline', text: 'Redis' },
                  { icon: 'ellipsis-horizontal-outline', text: 'Weaviate / Qdrant' },
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
              {
                title: 'Deployment & Integration',
                items: [
                  { icon: 'ellipsis-horizontal-outline', text: 'FastAPI / Flask' },
                  { icon: 'ellipsis-horizontal-outline', text: 'Docker' },
                  { icon: 'ellipsis-horizontal-outline', text: 'AWS / Azure' },
                  { icon: 'ellipsis-horizontal-outline', text: 'REST APIs / Webhooks' },
                  { icon: 'ellipsis-horizontal-outline', text: 'CI/CD Pipelines (GitHub Actions, Jenkins)' },
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
            ]}
          />
          <FAQSection faqs={AIfaqs}/>
          <StrongCallToAction/>
          <QuickConsultation/>
        </div>
    </div>
  )
}
export default AiPoweredServices;