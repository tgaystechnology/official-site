import Testimonials from '@/app/_components/home/Testimonials';
import AIJourneySection from '@/app/_components/services_components/AI_powered_services/AIJourneySection';
import AIPoweredBanner from '@/app/_components/services_components/AI_powered_services/AIPoweredBanner';
import AISolutionsSection from '@/app/_components/services_components/AI_powered_services/AISolutionsSection';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import OurValuesSection from '@/app/_components/services_components/AI_powered_services/OurValuesSection';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/ai-powered-services' } // This should match exactly what's in your database
  });
}

const AIfaqs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What AI-powered services do you offer?',
      answer: 'We offer custom AI solutions including chatbots, AI agents, RAG systems (Retrieval-Augmented Generation), predictive analytics, and intelligent workflow automation. Our services are tailored to solve specific business challenges and improve operational efficiency.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. How can AI benefit my business?',
      answer: 'AI can automate repetitive tasks, enhance customer experiences, reduce operational costs, and provide actionable insights through data analysis. It helps businesses scale faster and make smarter, data-driven decisions.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. What industries do you serve with AI solutions?',
      answer: 'We provide AI-powered solutions to industries including healthcare, education, fitness, retail, and more. Our AI tools are designed to fit the unique requirements and workflows of each industry.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. How do you start an AI project with a client?',
      answer: 'We begin with a discovery and strategy session to understand your goals and identify where AI can add value. Then we analyze your data, design the solution, develop and integrate it, and finally optimize it after launch.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. Can you integrate AI with our existing systems?',
      answer: 'Yes, we specialize in seamless integration of AI systems into your existing web platforms, mobile apps, CRMs, and ERPs, ensuring minimal disruption and maximum efficiency.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you provide ongoing support and optimization?',
      answer: 'Absolutely. We offer post-launch support including performance monitoring, feedback analysis, and continuous optimization to ensure your AI solution evolves with your business.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. What technologies do you use for AI development?',
      answer: 'We use a wide range of AI and ML technologies including Python, TensorFlow, OpenAI APIs (like GPT), NLP, data modeling tools, and cloud platforms like AWS and Azure. We choose tech stacks based on your project\'s goals.'
    }
  ];

const AiPoweredServices = () => {
  return (
    <div>
        <AIPoweredBanner/>
        <AISolutionsSection/>
        <OurValuesSection/>
        <AIJourneySection/>
        <CallToAction
            heading="Stay Ahead with Smart, Scalable AI Solutions"
            description="The future belongs to businesses that think ahead. Our AI-powered services empower you to streamline operations, enhance customer engagement, and make data-driven decisions with confidence. Let us help you build the intelligent foundation your business needs to lead in a digital-first world."
        />
        {/* <Testimonials/>  */}
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
        <QuickConsultation/>
    </div>
  )
}
export default AiPoweredServices;