import Testimonials from '@/app/_components/home/Testimonials'
import CallToAction from '@/app/_components/services_components/CallToAction'
import FAQSection from '@/app/_components/services_components/FAQSection'
import AppSolutions from '@/app/_components/services_components/mobile_app/AppSolutions'
import MobileAppBanner from '@/app/_components/services_components/mobile_app/MobileAppBanner'
import SolutionMobileApp from '@/app/_components/services_components/mobile_app/SolutionsMobileApp'
import PricingSection from '@/app/_components/services_components/PricingSection'
import QuickConsultation from '@/app/_components/services_components/QuickConsultation'
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/mobile-app' } // This should match exactly what's in your database
  });
}

const mobileAppFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What services do you offer?',
      answer: 'We offer services like website design, website development, mobile app development(Android and iPhone), custom business solutions, CMS development ERP/CRM development, Digital/Internet marketing and hosting, maintenance and security.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. How long does it take to develop a website or mobile app?',
      answer: 'Generally it takes 15 days to 6 months to develop a website depending upon the complexity of the website. Similarly, it takes 3 months to 9 months to develop a mobile app.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. What is your pricing model?',
      answer: 'We have Hourly Price, Monthly Price and Fixed Price Model. The pricing varies as per the resource experience and skills.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. What skills you are expert at?',
      answer: 'We specialize in HTML, CSS, Javascript, PHP, Codeigniter, Laravel, Wordpress, React.js, Node.js, React Native and Kotlin.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. Can you provide references or case studies of past projects?',
      answer: 'Yes, we are open to it.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you offer post-launch support?',
      answer: 'Yes, we offer one month support after project launch without any additional cost.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. What is your communication process during the development process?',
      answer: 'We use Slack, Google Meet, Skype for communication and Trello, Asana or Jira for project management as per the Client comfort.'
    }
  ];

  const pricingPlans = [
  {
    name: 'Basic Plan',
    description:
      'Perfect for startups and new businesses looking to launch their first e-commerce app quickly and affordably.',
    features: [
      { icon: 'layers-outline', label: 'Customer & Admin Panel' },
      { icon: 'layers-outline', label: 'Standard UI/UX Design' },
      { icon: 'layers-outline', label: 'Product Listing & Categories' },
      { icon: 'layers-outline', label: 'Lo 1 Secure Payment Gateway' },
    ],
    price: '$49',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
  },
  {
    name: 'Standard Plan',
    description:
      'Ideal for growing businesses aiming to enhance customer experience and scale their operations.',
    features: [
      { icon: 'layers-outline', label: 'Everything in Basic Plan' },
      { icon: 'layers-outline', label: 'Advanced UI/UX Design' },
      { icon: 'layers-outline', label: 'Push Notifications & Social Login' },
      { icon: 'layers-outline', label: 'Wishlist & Product Reviews' },
    ],
    price: '$79',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
  },
  {
    name: 'Premium Plan',
    description:
      'A comprehensive solution for established enterprises requiring advanced features and complete customization.',
    features: [
      { icon: 'layers-outline', label: 'Everything in Standard Plan' },
      { icon: 'layers-outline', label: 'Multi-language & Currency Support' },
      { icon: 'layers-outline', label: 'AI-based Product Recommendations' },
      { icon: 'layers-outline', label: 'Advanced Analytics & Reporting' },
    ],
    price: '$99',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    highlight: true, // adds the special third-box class
  },
];

const MobileAppDevelpoment = () => {
  return (
    <div>
        <MobileAppBanner/>
        <AppSolutions/>
        <CallToAction
            heading="Check Industries We Serve"
            description=""
            buttonText="Visit"
        />
        <SolutionMobileApp/>
        <ServiceTechStack
          heading={
            <>
              <span className="c-primary">TECH STACK</span> We Use
            </>
          }
          description=""
          cards={[
            {
              title: 'MOBILE APP DEVELOPMENT',
              items: [
                { icon: '', text: 'Android and iOS using React Native' },     // React Native → React icon
                { icon: '', text: 'Flutter' },                               // Flutter → Flutter icon (if supported)
                { icon: '', text: 'Native Android' },                        // Native Android → Android icon
                { icon: '', text: 'Website to Mobile App' },      // General mobile app conversion
              ],
              minItems: 4,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            }
          ]}
        />
        <PricingSection plans={pricingPlans}/>
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <FAQSection faqs={mobileAppFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default MobileAppDevelpoment