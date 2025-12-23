import Testimonials from '@/app/_components/home/Testimonials';
import AppSupportBanner from '@/app/_components/services_components/application_support_maintenance/AppSupportBanner';
import AppSupportBenefits from '@/app/_components/services_components/application_support_maintenance/AppSupportBenefits';
import AppSupportSection from '@/app/_components/services_components/application_support_maintenance/AppSupportSection';
import AppSupportServices from '@/app/_components/services_components/application_support_maintenance/AppSupportServices';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/application-support-maintenance' } // This should match exactly what's in your database
  });
}


const appSupportFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What does your application support & maintenance service include?',
      answer: 'Our services include bug fixing, performance tuning, security patching, version upgrades, real-time monitoring, backup management, user support, and continuous improvement of your applications.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. Do you support both web and mobile applications?',
      answer: 'Yes, we provide end-to-end support and maintenance for both web and mobile applications, including Android, iOS, hybrid apps, and progressive web apps.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. How quickly do you respond to issues?',
      answer: 'We offer various SLA-based support models, including 24/7 coverage. Our typical response time ranges from 15 minutes to 2 hours depending on the severity and service plan.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. Can you take over maintenance from a third-party or legacy application?',
      answer: 'Absolutely. We specialize in transitioning support from other vendors or internal teams. We begin with a thorough audit and onboarding to ensure a smooth handover.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. How do you ensure application security during maintenance?',
      answer: 'We follow best practices in secure coding, regularly patch vulnerabilities, monitor traffic, enforce access control policies, and comply with standards like GDPR, HIPAA, or ISO where needed.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you provide performance tuning and app optimization?',
      answer: 'Yes, we analyze and optimize application performance across frontend, backend, database, and hosting environments to reduce latency, improve load times, and ensure scalability.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. What industries do you support?',
      answer: 'We work with clients across healthcare, education, retail, fintech, logistics, manufacturing, and more. Our support models are flexible to fit industry-specific compliance and performance needs.'
    }
  ];

const applicationSupportMaintenance = () => {
  return (
    <div>
        <AppSupportBanner/>
        <AppSupportSection/>
        <AppSupportServices/>
        <AppSupportBenefits/>
        <CallToAction
            heading="Need Hassle-Free Application Maintenance? Let’s Talk."
            description="Don’t wait for issues to disrupt your operations. Partner with us for seamless, secure, and scalable application support tailored to your business goals."
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
        <FAQSection faqs={appSupportFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default applicationSupportMaintenance;