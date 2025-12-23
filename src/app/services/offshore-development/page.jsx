import CTASection from '@/app/_components/home/CTASection';
import Testimonials from '@/app/_components/home/Testimonials';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import OffshoreDevelopmentBanner from '@/app/_components/services_components/offshore/OffshoreDevelopmentBanner';
import OffshoreDevelopmentSection from '@/app/_components/services_components/offshore/OffshoreDevelopmentSection';
import OffshoreProcess from '@/app/_components/services_components/offshore/OffshoreProcess';
import WhyChooseOffshore from '@/app/_components/services_components/offshore/WhyChooseOffshore';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/offshore-development' } // This should match exactly what's in your database
  });
}


const offshoreFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What is offshore development?',
      answer: 'Offshore development is the process of hiring a remote team located in another country to handle your software or IT development tasks. It helps businesses reduce costs, access a broader talent pool, and increase productivity.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. Why should I choose offshore development with TGaysTechnology?',
      answer: 'We offer cost-effective solutions with access to highly skilled developers. Our dedicated teams ensure transparency, quality, real-time collaboration, and secure project execution while aligning with your business goals.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. How do you ensure quality in offshore development?',
      answer: 'We have experience across multiple industries including Finance, Healthcare, Education, Hospitality, and E-Commerce. Our team understands industry-specific needs and tailors solutions accordingly.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. How do you manage communication and time zone differences?',
      answer: 'Our teams are flexible with time zones and provide overlapping working hours to ensure real-time communication. We use tools like Slack, Zoom, Google Meet, and Jira to keep everything aligned.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. Will I have control over the offshore team?',
      answer: 'Yes. You’ll have complete control over the offshore team, including communication, task assignment, timelines, and reporting. We simply provide the infrastructure and technical expertise to support your goals.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Is data security and IP protection guaranteed?',
      answer: 'Absolutely. We sign NDAs and implement strict security protocols, access controls, and encrypted communications to safeguard your data and intellectual property at every stage of the project.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. What if I need to scale my team or change requirements mid-project?',
      answer: 'Our offshore model is flexible. You can scale your team up or down and adjust your project scope based on evolving needs, all while maintaining agility and performance.'
    }
  ];


const OffshoreDevelopment = () => {
  return (
    <div>
        <OffshoreDevelopmentBanner/>
        <OffshoreDevelopmentSection/>
        <WhyChooseOffshore/>
        <OffshoreProcess/>
        <CallToAction
            heading="Stay Ahead with Trusted Offshore Development Services"
            description="Ready to scale your business with top-tier offshore talent? TGaysTechnology delivers reliable, cost-effective development solutions tailored to your goals. Let our experts help you turn your vision into reality—on time and on budget."
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
        <FAQSection faqs={offshoreFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default OffshoreDevelopment;