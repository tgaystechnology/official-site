import React from 'react'
import CaseStudyBanner from '../_components/case_study/CaseStudyBanner';
import CaseStudySection from '../_components/case_study/CaseStudySection';
import QuickConsultation from '../_components/services_components/QuickConsultation';
import FAQSection from '../_components/services_components/FAQSection';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/case-study' } // This should match exactly what's in your database
  });
}

const caseStudyFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What is your typical project development process?',
      answer: 'We follow an agile methodology. Our process begins with a deep discovery session to understand your goals, followed by design & prototyping, development, rigorous quality assurance, and deployment. We ensure you are involved and informed at every stage.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. What industries do you have the most experience in?',
      answer: 'As you can see from our case studies, we have delivered successful solutions across a diverse range of industries, including healthcare, education, retail, e-commerce, and health & fitness. We adapt our technology solutions to fit the unique needs of each sector.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. How long does a typical project take?',
      answer: "The timeline depends entirely on the project's complexity. A simple MVP (Minimum Viable Product) might take 2-3 months, while a full-scale enterprise application can take 6 months or more. After our initial discovery call, we provide a detailed project roadmap and timeline."
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. How do we get started on a project?',
      answer: "It's simple! Use the 'Request a Quote' form on this page or email us at info@tgaystechnology.com. We'll schedule a free, no-obligation consultation to discuss your ideas, understand your requirements, and see how we can help you achieve your goals."
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. Can you integrate new applications with our existing systems?',
      answer: 'Yes, this is one of our core strengths. We specialize in seamless API integration to ensure your new web platform, mobile app, or CRM communicates perfectly with your existing software, databases, and third-party tools.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you provide support and maintenance after the project is launched?',
      answer: 'Absolutely. We believe in building long-term partnerships. We offer flexible application support and maintenance plans to ensure your solution remains secure, up-to-date, and optimized for performance long after the initial launch.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. What technologies do you specialize in?',
      answer: "Our team is skilled in a modern tech stack, including Python, React, Node.js, and native mobile development (iOS & Android). We also have deep expertise in cloud platforms (AWS, Azure), M365 development, and AI integration. We choose the best technology to fit your project's specific needs."
    }
  ];

const CaseStudy = () => {
  return (
    <div>
        <CaseStudyBanner/>
        <div className='mt-4'>
          <CaseStudySection/>
        </div>
        <FAQSection faqs={caseStudyFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default CaseStudy;