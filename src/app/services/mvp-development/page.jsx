import Testimonials from '@/app/_components/home/Testimonials';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import MvpBenefits from '@/app/_components/services_components/mvp_development/MvpBenefits';
import MvpDevelopmentBanner from '@/app/_components/services_components/mvp_development/MvpDevelopmentBanner';
import MvpDevelopmentSection from '@/app/_components/services_components/mvp_development/MvpDevelopmentSection';
import MvpDevelopmentServices from '@/app/_components/services_components/mvp_development/MvpDevelopmentServices';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/mvp-development' } // This should match exactly what's in your database
  });
}


const mvpFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What is MVP development?',
      answer: 'MVP (Minimum Viable Product) development is the process of creating a basic version of a product with just enough features to satisfy early adopters and validate your idea in the market with minimum cost and time.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. How long does it take to build an MVP?',
      answer: 'The timeline for MVP development typically ranges from 4 to 12 weeks depending on complexity, number of features, and tech stack. We always deliver with a focus on speed, quality, and iterative improvement.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. What is your MVP pricing model?',
      answer: 'We offer flexible pricing models: Fixed cost for small MVPs, milestone-based billing for medium complexity, and hourly/dedicated resource models for startups and scaling teams.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. What industries do you serve with MVPs?',
      answer: 'We build MVPs for startups and enterprises across industries like Fintech, EdTech, HealthTech, Logistics, Real Estate, and SaaS-based platforms, helping them validate, pivot, and grow faster.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. Do you help after MVP launch?',
      answer: 'Absolutely. We assist with post-launch feedback analysis, feature scaling, UI/UX improvements, code refactoring, performance optimization, and long-term product planning.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. What technologies do you use for MVPs?',
      answer: 'We use modern and scalable technologies like React, Node.js, Laravel, Flutter, React Native, MongoDB, Firebase, and AWS — selecting the stack that best fits your business goals.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. Can you help define the MVP scope?',
      answer: 'Yes, we offer MVP consulting to help you identify the most critical features, define user flows, prioritize functionalities, and create a roadmap that aligns with business objectives and user needs.'
    }
  ];

const MvpDevelopment = () => {
  return (
    <div>
        <MvpDevelopmentBanner/>
        <MvpDevelopmentSection/>
        <MvpDevelopmentServices/>
        <MvpBenefits/>
        <CallToAction
            heading="Build, Validate, and Grow with Our Expert MVP Development Services"
            description="Let’s take your idea from concept to market-ready MVP. Reduce risk, attract investors, and scale with confidence — all with a product that puts users first."
            buttonText=""
        />
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <ServiceTechStack
          heading={
            <>
              CUTTING-EDGE <span className="c-primary">TECH STACK</span> We Use
            </>
          }
          description=""
          cards={[
            {
              title: 'Front-end Languages',
              items: [
                { icon: '', text: 'HTML' },     // React Native → React icon
                { icon: '', text: 'CSS' },                               // Flutter → Flutter icon (if supported)
                { icon: '', text: 'Bootstrap' },                        // Native Android → Android icon
                { icon: '', text: 'React.js' },    
                { icon: '', text: 'Angular.js' },    
                { icon: '', text: 'Next.js' },    
                { icon: '', text: 'JQuery' },    
                { icon: '', text: 'Javacript' },    
                { icon: '', text: 'FIGMA' },    
                { icon: '', text: 'Webflow' },    
              ],
              minItems: 10,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Back-end Languages',
              items: [
                { icon: '', text: 'PHP and it’s Framework' },     // React Native → React icon
                { icon: '', text: 'Node.js' },                               // Flutter → Flutter icon (if supported)
                { icon: '', text: 'Python' },                        // Native Android → Android icon
                { icon: '', text: 'MySQL' },    
                { icon: '', text: 'MongoDB' },    
                { icon: '', text: 'Redis' },    
                { icon: '', text: 'Postgres' },    
              ],
              minItems: 10,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'E-Commerce CMS and Framework',
              items: [
                { icon: '', text: 'Magento' },     // React Native → React icon
                { icon: '', text: 'Woo-commerce' },                               // Flutter → Flutter icon (if supported)
                { icon: '', text: 'Shopify' },                        // Native Android → Android icon
                { icon: '', text: 'Bigcommerce' },      // General mobile app conversion
                { icon: '', text: 'Magento(E-Commerce CMS)' },     
                { icon: '', text: 'Custom ECommerce Development' },     
              ],
              minItems: 10,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
          ]}
        />
        <FAQSection faqs={mvpFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default MvpDevelopment;