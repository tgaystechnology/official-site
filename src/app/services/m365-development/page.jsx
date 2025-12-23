import CTASection from '@/app/_components/home/CTASection';
import Testimonials from '@/app/_components/home/Testimonials';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import M365DevelopmentBanner from '@/app/_components/services_components/m365_development/M365DevelopmentBanner';
import M365DevelopmentServices from '@/app/_components/services_components/m365_development/M365DevelopmentServices';
import M365SolutionsSection from '@/app/_components/services_components/m365_development/M365SolutionsSection';
import WhyChooseM365 from '@/app/_components/services_components/m365_development/WhyChooseM365';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/m365-development' } // This should match exactly what's in your database
  });
}


const m365FAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What is M365 Development?',
      answer: 'M365 Development refers to creating custom solutions within Microsoft 365 (formerly Office 365), including SharePoint customization, PowerApps, Teams integrations, and automation using Power Automate.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. What are the benefits of using M365 for my business?',
      answer: 'M365 helps businesses improve productivity, streamline collaboration, secure data, and automate repetitive tasks — all on a scalable and reliable Microsoft ecosystem.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. Do you offer custom SharePoint and Power Platform solutions?',
      answer: 'Yes, we specialize in custom SharePoint intranet portals, PowerApps for business apps, and automated workflows using Power Automate — tailored to your business needs.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. How do you ensure security and compliance?',
      answer: "We leverage Azure AD, conditional access policies, and Microsoft's compliance frameworks to build secure and enterprise-grade M365 solutions."
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. What industries do you serve with M365 solutions?',
      answer: 'We serve clients in education, healthcare, finance, manufacturing, real estate, and more — customizing M365 solutions based on industry-specific needs.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you provide ongoing support after project delivery?',
      answer: 'Yes, we provide post-launch support, training, and M365 maintenance plans to ensure your solution continues delivering value long after deployment.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. What is your communication process during the development process?',
      answer: 'We use Slack, Google Meet, Skype for communication and Trello, Asana or Jira for project management as per the Client comfort.'
    }
  ];

const m365Development = () => {
  return (
    <div>
        <M365DevelopmentBanner/>
        <M365SolutionsSection/>
        <M365DevelopmentServices/>
        <WhyChooseM365/>
        <CallToAction
            heading="Ready to Supercharge Your Business with M365?"
            description="Our expert Microsoft 365 developers are ready to help you automate operations, modernize collaboration, and reduce inefficiencies. Let’s build a smarter digital workspace together."
            buttonText="Schedule Your Free Consultation"
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
              title: 'Core Microsoft Tools',
              items: [
                { icon: '', text: 'SharePoint Online' },    
                { icon: '', text: 'Core Microsoft Tools' },                              
                { icon: '', text: 'Microsoft Teams Toolkit' },                        
                { icon: '', text: 'Power Apps' },    
                { icon: '', text: 'Power Automate' },    
                { icon: '', text: 'Microsoft Graph API' },    
              ],
              minItems: 6,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Frontend & UI',
              items: [
                { icon: '', text: 'React.js (SPFx)' },    
                { icon: '', text: 'TypeScript' },                
                { icon: '', text: 'Fluent UI / UI Fabric' },                   
                { icon: '', text: 'HTML5 & SCSS' },    
                { icon: '', text: 'Office UI Add-ins' },     
              ],
              minItems: 6,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Cloud & Identity',
              items: [
                { icon: '', text: 'Azure Active Directory' },    
                { icon: '', text: 'Azure Functions' },                     
                { icon: '', text: 'Microsoft Entra ID' },                      
                { icon: '', text: 'Azure Logic Apps' },    
                { icon: '', text: 'Microsoft 365 Compliance Tools' },     
              ],
              minItems: 6,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
          ]}
        />
        <FAQSection faqs={m365FAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default m365Development;