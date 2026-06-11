import React from 'react'
import WebDevelopmentBanner from '@/app/_components/services_components/Web_development/WebDevelopmentBanner'
import WebDevelopmentServices from '@/app/_components/services_components/Web_development/WebDevelopmentServices'
import WhyChooseWebDev from '@/app/_components/services_components/Web_development/WhyChooseWebDev'
import DetailedWebServices from '@/app/_components/services_components/Web_development/DetailedWebServices'
import WebChallengesAndSolutions from '@/app/_components/services_components/Web_development/WebChallengesAndSolutions'
import WebDevProcess from '@/app/_components/services_components/Web_development/WebDevProcess'
import WebDevBenefits from '@/app/_components/services_components/Web_development/WebDevBenefits'
import WebDevIndustries from '@/app/_components/services_components/Web_development/WebDevIndustries'
import WebDevTrust from '@/app/_components/services_components/Web_development/WebDevTrust'
import WebDevComparison from '@/app/_components/services_components/Web_development/WebDevComparison'
import WebDevCTA from '@/app/_components/services_components/Web_development/WebDevCTA'
import FAQSection from '@/app/_components/services_components/FAQSection'
import QuickConsultation from '@/app/_components/services_components/QuickConsultation'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/web-development' }
  });
}

const webAppFAQs = [
  {
    id: 'faqOne',
    target: 'collapseOne',
    question: 'Why should I hire a web development company India?',
    answer: 'India offers access to highly skilled developers, cost-effective solutions, and expertise across modern web technologies.'
  },
  {
    id: 'faqTwo',
    target: 'collapseTwo',
    question: 'How much does web development cost?',
    answer: 'Costs vary based on project scope, features, integrations, and complexity. We provide customized estimates after consultation.'
  },
  {
    id: 'faqThree',
    target: 'collapseThree',
    question: 'How long does a website development project take?',
    answer: 'Most projects take between 4–16 weeks depending on complexity and requirements.'
  },
  {
    id: 'faqFour',
    target: 'collapseFour',
    question: 'Do you build custom websites?',
    answer: 'Yes. We specialize in fully customized web development solutions tailored to business needs.'
  },
  {
    id: 'faqFive',
    target: 'collapseFive',
    question: 'Can you develop enterprise web applications?',
    answer: 'Absolutely. We build scalable enterprise applications for organizations of all sizes.'
  },
  {
    id: 'faqSix',
    target: 'collapseSix',
    question: 'Do you provide eCommerce development services?',
    answer: 'Yes. We develop Shopify, WooCommerce, Magento, and custom eCommerce solutions.'
  },
  {
    id: 'faqSeven',
    target: 'collapseSeven',
    question: 'Is SEO included in web development?',
    answer: 'Yes. Our websites are built using SEO best practices and technical optimization standards.'
  },
  {
    id: 'faqEight',
    target: 'collapseEight',
    question: 'Do you offer WordPress development?',
    answer: 'Yes. We provide complete WordPress website development and customization services.'
  },
  {
    id: 'faqNine',
    target: 'collapseNine',
    question: 'Can you redesign existing websites?',
    answer: 'Yes. We modernize outdated websites and improve performance, design, and functionality.'
  },
  {
    id: 'faqTen',
    target: 'collapseTen',
    question: 'Do you provide website maintenance?',
    answer: 'Yes. We offer ongoing support, maintenance, security updates, and performance monitoring.'
  },
  {
    id: 'faqEleven',
    target: 'collapseEleven',
    question: 'Are your websites mobile-friendly?',
    answer: 'Yes. Every website is fully responsive and optimized for all devices.'
  },
  {
    id: 'faqTwelve',
    target: 'collapseTwelve',
    question: 'Can you integrate third-party tools and APIs?',
    answer: 'Yes. We integrate CRMs, payment gateways, marketing tools, analytics platforms, and custom APIs.'
  },
  {
    id: 'faqThirteen',
    target: 'collapseThirteen',
    question: 'Do you build SaaS platforms?',
    answer: 'Yes. We develop custom SaaS applications and web-based software solutions.'
  },
  {
    id: 'faqFourteen',
    target: 'collapseFourteen',
    question: 'What technologies do you use?',
    answer: 'We use React, Angular, Node.js, Python, PHP, Java, .NET, WordPress, and cloud technologies.'
  },
  {
    id: 'faqFifteen',
    target: 'collapseFifteen',
    question: 'How do I get started?',
    answer: 'Simply contact our team for a free consultation and project assessment.'
  }
];

const WebDevelopment = () => {
  return (
    <div>
      <WebDevelopmentBanner/>
      <WhyChooseWebDev/>
      <WebDevelopmentServices/>
      <DetailedWebServices/>
      <WebChallengesAndSolutions/>
      <WebDevProcess/>
      <WebDevBenefits/>
      <WebDevIndustries/>
      <WebDevTrust/>
      <WebDevComparison/>
      <AnimatedTestimonials autoplay={true}/>
      <FAQSection faqs={webAppFAQs}/>
      <WebDevCTA/>
      <QuickConsultation/>
    </div>
  )
}

export default WebDevelopment