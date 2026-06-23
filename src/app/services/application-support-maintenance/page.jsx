import React from 'react';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

// Components
import AppSupportBanner from '@/app/_components/services_components/application_support_maintenance/AppSupportBanner';
import AppSupportWhyChoose from '@/app/_components/services_components/application_support_maintenance/AppSupportWhyChoose';
import AppSupportServices from '@/app/_components/services_components/application_support_maintenance/AppSupportServices';
import AppSupportComparison from '@/app/_components/services_components/application_support_maintenance/AppSupportComparison';
import AppSupportChallenges from '@/app/_components/services_components/application_support_maintenance/AppSupportChallenges';
import AppSupportProcess from '@/app/_components/services_components/application_support_maintenance/AppSupportProcess';
import AppSupportBenefits from '@/app/_components/services_components/application_support_maintenance/AppSupportBenefits';
import AppSupportIndustries from '@/app/_components/services_components/application_support_maintenance/AppSupportIndustries';
import AppSupportTrust from '@/app/_components/services_components/application_support_maintenance/AppSupportTrust';
import AppSupportCTA from '@/app/_components/services_components/application_support_maintenance/AppSupportCTA';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';

export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/application-support-maintenance' }
  });
}

const appSupportFAQs = [
  {
    id: 'headingOne',
    target: 'collapseOne',
    question: '1. What are Application Support & Maintenance Services?',
    answer: 'Application support and maintenance services involve monitoring, updating, troubleshooting, securing, and optimizing software applications to ensure smooth business operations. This includes bug fixing, performance tuning, security patching, and version upgrades.'
  },
  {
    id: 'headingTwo',
    target: 'collapseTwo',
    question: '2. Why is application maintenance important?',
    answer: 'Maintenance prevents downtime, improves security, enhances performance, and extends application lifespan. It ensures that your applications evolve with changing business requirements.'
  },
  {
    id: 'headingThree',
    target: 'collapseThree',
    question: '3. Do you provide 24x7 support?',
    answer: 'Yes. We offer 24x7 application support services for mission-critical applications to ensure uninterrupted business continuity.'
  },
  {
    id: 'headingFour',
    target: 'collapseFour',
    question: '4. How quickly do you respond to issues?',
    answer: 'Response times depend on SLA agreements. We offer various SLA-based support models, with critical issues receiving immediate attention (typical response time ranges from 15 minutes to 2 hours).'
  },
  {
    id: 'headingFive',
    target: 'collapseFive',
    question: '5. Can you take over maintenance from a third-party or legacy application?',
    answer: 'Absolutely. We specialize in transitioning support from other vendors or internal teams. We begin with a thorough audit and onboarding to ensure a smooth handover.'
  },
  {
    id: 'headingSix',
    target: 'collapseSix',
    question: '6. How do you ensure application security during maintenance?',
    answer: 'We follow best practices through regular audits, patch management, continuous monitoring, vulnerability assessments, and compliance with standards like GDPR and HIPAA.'
  },
  {
    id: 'headingSeven',
    target: 'collapseSeven',
    question: '7. Can you improve application performance?',
    answer: 'Yes. Performance optimization is a core component of our maintenance services. We analyze frontend, backend, and database environments to reduce latency and ensure scalability.'
  },
  {
    id: 'headingEight',
    target: 'collapseEight',
    question: '8. Do you support custom-built and SaaS applications?',
    answer: 'Absolutely. We specialize in SaaS application support and provide custom maintenance services for web, mobile, cloud, and enterprise platforms.'
  },
  {
    id: 'headingNine',
    target: 'collapseNine',
    question: '9. What engagement models are available?',
    answer: 'We offer flexible engagement models including Dedicated Resources, Managed Services, Monthly Retainers, Project-Based Support, and Enterprise SLA Contracts.'
  },
  {
    id: 'headingTen',
    target: 'collapseTen',
    question: '10. What technologies do you support?',
    answer: 'We support modern ecosystems including .NET, Java, PHP, Python, Node.js, React, Angular, AWS, Azure, Google Cloud, Salesforce, and Microsoft Dynamics.'
  },
  {
    id: 'headingEleven',
    target: 'collapseEleven',
    question: '11. Do you offer offshore application maintenance services?',
    answer: 'Yes. Our offshore delivery model helps businesses reduce operational and support costs while maintaining high-quality service and rapid response times.'
  },
  {
    id: 'headingTwelve',
    target: 'collapseTwelve',
    question: '12. Do you provide monthly reporting?',
    answer: 'Yes. We provide detailed reports that include incident logs, resolutions, performance metrics, and strategic recommendations for continuous improvement.'
  },
  {
    id: 'headingThirteen',
    target: 'collapseThirteen',
    question: '13. What industries do you serve?',
    answer: 'We support clients across healthcare, real estate, retail, manufacturing, SaaS, education, fintech, logistics, and transportation.'
  },
  {
    id: 'headingFourteen',
    target: 'collapseFourteen',
    question: '14. Do you sign NDAs?',
    answer: 'Yes. We maintain strict confidentiality and data protection standards, and signing Non-Disclosure Agreements is a standard part of our onboarding process.'
  },
  {
    id: 'headingFifteen',
    target: 'collapseFifteen',
    question: '15. How can I get started?',
    answer: 'Contact our team to schedule a free application health assessment and consultation. We will evaluate your architecture and propose a custom support roadmap.'
  }
];

const ApplicationSupportMaintenance = () => {
  return (
    <div>
        <style dangerouslySetInnerHTML={{__html: `
          .nunito-page-content, 
          .nunito-page-content h1, 
          .nunito-page-content h2, 
          .nunito-page-content h3, 
          .nunito-page-content h4, 
          .nunito-page-content h5, 
          .nunito-page-content h6, 
          .nunito-page-content p, 
          .nunito-page-content span, 
          .nunito-page-content li, 
          .nunito-page-content a, 
          .nunito-page-content button {
            font-family: 'Nunito', sans-serif !important;
          }
          .nunito-page-content h2,
          .nunito-page-content .heading-title {
            font-family: 'Nunito', Arial, "Helvetica Neue", Helvetica, sans-serif !important;
            font-size: 34px !important;
            line-height: 44.2px !important;
            font-weight: 800 !important;
            letter-spacing: 0.68px !important;
          }
        `}} />
        <AppSupportBanner />
        
        <div className="nunito-page-content">
          <AppSupportWhyChoose />
          <AppSupportServices />
          <AppSupportComparison />
          <AppSupportChallenges />
          <AppSupportProcess />
          <AppSupportBenefits />
          <AppSupportIndustries />
          <AppSupportTrust />

        <CallToAction
            heading="Need Hassle-Free Application Maintenance? Let’s Talk."
            description="Don’t wait for issues to disrupt your operations. Partner with us for seamless, secure, and scalable application support tailored to your business goals."
            buttonText="Get Started"
            buttonLink="/contact-us"
        />
        
        <AnimatedTestimonials autoplay={true}/>
        
        <ServiceTechStack
          heading={
            <>
              CUTTING-EDGE <span className="c-primary">TECH STACK</span> We Use
            </>
          }
          description="We leverage industry-leading technologies to ensure secure, fast, and scalable applications."
          cards={[
            {
              title: 'Front-end Languages',
              items: [
                { icon: '', text: 'HTML & CSS' },
                { icon: '', text: 'React.js' },    
                { icon: '', text: 'Angular' },    
                { icon: '', text: 'Next.js' },    
                { icon: '', text: 'JavaScript / TypeScript' },    
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Back-end Languages',
              items: [
                { icon: '', text: 'Node.js' },
                { icon: '', text: 'Python' },
                { icon: '', text: 'Java' },
                { icon: '', text: '.NET' },
                { icon: '', text: 'PHP & Laravel' },    
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Cloud & Infrastructure',
              items: [
                { icon: '', text: 'Amazon Web Services (AWS)' },
                { icon: '', text: 'Microsoft Azure' },
                { icon: '', text: 'Google Cloud Platform (GCP)' },
                { icon: '', text: 'Docker & Kubernetes' },
                { icon: '', text: 'Salesforce & Dynamics' },     
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
          ]}
        />

        <FAQSection faqs={appSupportFAQs}/>
        
        <AppSupportCTA />

        <QuickConsultation/>
        </div>
    </div>
  )
}

export default ApplicationSupportMaintenance;