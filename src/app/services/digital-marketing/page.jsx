import DigitalMarketingBanner from '@/app/_components/services_components/digital_marketing/DigitalMarketingBanner';
import DigitalMarketingServices from '@/app/_components/services_components/digital_marketing/DigitalMarketingServices';
import DigitalMarketingBenefits from '@/app/_components/services_components/digital_marketing/DigitalMarketingBenefits';
import DigitalMarketingServicesSecondSection from '@/app/_components/services_components/digital_marketing/DigitalMarketingServicesSecondSection';
import React from 'react'
import CallToAction from '@/app/_components/services_components/CallToAction';
import Testimonials from '@/app/_components/home/Testimonials';
import SuperchargePresence from '@/app/_components/services_components/digital_marketing/SuperchargePresence';
import FAQSection from '@/app/_components/services_components/FAQSection';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/digital-marketing' } // This should match exactly what's in your database
  });
}


const digitalMarketingFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What is digital marketing and why does my business need it?',
      answer: 'Digital marketing includes strategies like SEO, SEM, and PPC that help your business appear online where your customers are searching. It helps increase website traffic, build brand awareness, and drive leads and sales.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. What’s the difference between SEO, SEM, and PPC?',
      answer: 'SEO focuses on optimizing your website to get organic (free) traffic from search engines. SEM includes both SEO and paid advertising (like PPC). PPC means you pay for each click your ad receives — for faster, targeted traffic.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. How long does it take to see results from SEO?',
      answer: 'SEO is a long-term strategy. You may start seeing improvements within 3 to 6 months, depending on competition, keywords, and your current website status. But the results are lasting and cost-effective in the long run.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. What’s included in your digital marketing services?',
      answer: 'Our digital marketing services include SEO audits, keyword research, on-page and off-page SEO, Google Ads (PPC), campaign setup and management, landing page optimization, and detailed performance reporting.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. How much should I spend on PPC advertising?',
      answer: 'PPC budgets can vary depending on your goals, competition, and industry. We work with your budget—big or small—to create campaigns that maximize ROI. You can start small and scale based on performance.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you provide reports and performance tracking?',
      answer: 'Yes! We provide detailed monthly reports showing keyword rankings, traffic growth, ad performance, conversions, and more. Transparency is a key part of our service.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. Can I run SEO and PPC campaigns together?',
      answer: 'Absolutely. Running both together is a powerful strategy. SEO builds long-term traffic, while PPC delivers quick, targeted results. We help you combine them for better reach, faster ROI, and smarter decision-making.'
    }
  ];

const DigitalMarketing = () => {
  return (
    <div>
        <DigitalMarketingBanner/>
        
          <DigitalMarketingServices/>
        
        
          <DigitalMarketingServicesSecondSection/>
        
        <DigitalMarketingBenefits/>
        <CallToAction
            heading="Dominate the digital landscape with our comprehensive digital marketing services, including SEO, SEM, and PPC, tailored to your business goals and objectives."
            description="Get found online with our cutting‑edge SEO strategies that drive organic traffic to your website and boost your online visibility."
            buttonText=""
        />
        <SuperchargePresence/>
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <FAQSection faqs={digitalMarketingFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default DigitalMarketing