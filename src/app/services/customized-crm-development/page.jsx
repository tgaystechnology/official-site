import Testimonials from '@/app/_components/home/Testimonials';
import CallToAction from '@/app/_components/services_components/CallToAction';
import CrmDevelopmentBanner from '@/app/_components/services_components/customized_crm_development/CrmDevelopmentBanner';
import CustomCrmSection from '@/app/_components/services_components/customized_crm_development/CustomCrmSection';
import CustomCrmSolutionsSection from '@/app/_components/services_components/customized_crm_development/CustomCrmSolutionsSection';
import FAQSection from '@/app/_components/services_components/FAQSection';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/customized-crm-development' } // This should match exactly what's in your database
  });
}


const CrmFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. Why choose a customized CRM over off‑the‑shelf?',
      answer: 'A custom CRM adapts to your exact workflows, integrates with your systems, and scales as you grow — unlike generic solutions that force you to compromise.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. How long does CRM customization take?',
      answer: 'Timelines vary by scope. Small customizations take 2–4 weeks; full CRM platforms typically take 2–4 months, including discovery, development, testing, and deployment.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. What’s the cost of building a custom CRM?',
      answer: 'Costs depend on features, integrations, and complexity. We offer fixed-price, hourly, or milestone-based models tailored to your budget and project needs.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. Which industries do you specialize in?',
      answer: 'We specialize across Healthcare, Retail, Education, Finance, Travel, Logistics, Fitness, Real Estate, Manufacturing, and more — all with industry-specific workflows.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. How do you ensure data security and compliance?',
      answer: 'We implement robust security: SSL, role-based access, encryption, backups, and compliance with GDPR, HIPAA, or industry standards as needed.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Will you offer training and ongoing support?',
      answer: 'Yes, we provide user training, documentation, and optional maintenance/support packages to ensure your CRM runs smoothly post-launch.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. How do we get started?',
      answer: 'Simply contact us to schedule a discovery call. We’ll analyze your needs, recommend a solution, and provide a project estimate to get your CRM journey started.'
    }
  ];

const CustomizedCRMDevelopment = () => {
  return (
    <div>
        <CrmDevelopmentBanner/>
        <CustomCrmSection/>
        <CallToAction
            heading="Let’s Build a CRM That Thinks Like You Do"
            description="Tell us your goals, and we'll deliver a feature-rich, secure, and user-friendly CRM system that drives measurable results across departments."
            buttonText=""
        />
        <CustomCrmSolutionsSection/>
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
              title: 'CRM, CMS and Framework',
              items: [
                { icon: '', text: 'Salesforce(CRM)' },     // React Native → React icon
                { icon: '', text: 'Codeigniter(PHP Framework)' },                               // Flutter → Flutter icon (if supported)
                { icon: '', text: 'Laravel(PHP Framework)' },                        // Native Android → Android icon
                { icon: '', text: 'Wordpress(PHP CMS)' },      // General mobile app conversion
                { icon: '', text: 'Magento(E-Commerce CMS)' },     
                { icon: '', text: 'Drupal(PHP CMS)' },     
                { icon: '', text: 'Django(Python Framework)' },     
              ],
              minItems: 10,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
          ]}
        />
        <FAQSection faqs={CrmFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default CustomizedCRMDevelopment;