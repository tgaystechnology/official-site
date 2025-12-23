import CTASection from '@/app/_components/home/CTASection'
import Testimonials from '@/app/_components/home/Testimonials'
import CallToAction from '@/app/_components/services_components/CallToAction'
import FAQSection from '@/app/_components/services_components/FAQSection'
import QuickConsultation from '@/app/_components/services_components/QuickConsultation'
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack'
import MobileAppSolutions from '@/app/_components/services_components/Web_development/MobileAppSolutions'
import WebDevelopmentBanner from '@/app/_components/services_components/Web_development/WebDevelopmentBanner'
import WebDevelopmentServices from '@/app/_components/services_components/Web_development/WebDevelopmentServices'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/web-development' } // This should match exactly what's in your database
  });
}


const webAppFAQs = [
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

const WebDevelopment = () => {
  return (
    <div>
        <WebDevelopmentBanner/>
        <WebDevelopmentServices/>
        <CallToAction
            heading="Check Industries We Serve"
            description=""
            buttonText="Vist"
        />
        <CTASection
          title="Why pay recurring monthly subscriptions to 3rd party companies forever?"
          description=""
        />
        <MobileAppSolutions/>
        <ServiceTechStack
          heading={
            <>
              <span className="c-primary">TECH STACK</span> We Use
            </>
          }
          description=""
          cards={[
            {
              title: 'Front-end Languages',
              items: [
                { icon: '', text: 'HTML' },
                { icon: '', text: 'CSS' },
                { icon: '', text: 'Bootstrap' },
                { icon: '', text: 'React.js' },
                { icon: '', text: 'Angular.js' },
                { icon: '', text: 'Next.js' }, // Best alternative, since Next.js has no official icon
                { icon: '', text: 'JQuery' },
                { icon: '', text: 'Javascript' },
                { icon: '', text: 'FIGMA' },
                { icon: '', text: 'Webflow' },
              ],
              minItems: 10,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Back-end Languages',
              highlight: true,
              items: [
                { icon: '', text: 'PHP and it’s Framework' },
                { icon: '', text: 'Node.js' },
                { icon: '', text: 'Python' },
                { icon: '', text: 'MySQL' }, // Not exact, but close
                { icon: '', text: 'MongoDB' },
                { icon: '', text: 'Redis' },
                { icon: '', text: 'Postgres' },
              ],
              minItems: 10,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'CRM, CMS & Frameworks',
              items: [
                { icon: '', text: 'Salesforce(CRM)' },
                { icon: '', text: 'Codeigniter(PHP Framework)' },
                { icon: '', text: 'Laravel(PHP Framework)' },
                { icon: '', text: 'Wordpress(PHP CMS)' },
                { icon: '', text: 'Magento(E-Commerce CMS)' },
                { icon: '', text: 'Drupal(PHP CMS)' },
                { icon: '', text: 'Django(Python Framework)' },
              ],
              minItems: 10, 
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            }
          ]}
        />
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <FAQSection faqs={webAppFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default WebDevelopment