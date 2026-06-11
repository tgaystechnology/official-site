import React from 'react';
import MobileAppBanner from '@/app/_components/services_components/mobile_app/MobileAppBanner';
import WhyChooseMobileApp from '@/app/_components/services_components/mobile_app/WhyChooseMobileApp';
import DetailedMobileServices from '@/app/_components/services_components/mobile_app/DetailedMobileServices';
import MobileChallengesAndSolutions from '@/app/_components/services_components/mobile_app/MobileChallengesAndSolutions';
import MobileAppProcess from '@/app/_components/services_components/mobile_app/MobileAppProcess';
import MobileComparison from '@/app/_components/services_components/mobile_app/MobileComparison';
import MobileBenefits from '@/app/_components/services_components/mobile_app/MobileBenefits';
import MobileIndustries from '@/app/_components/services_components/mobile_app/MobileIndustries';
import MobileTrust from '@/app/_components/services_components/mobile_app/MobileTrust';
import MobileCTA from '@/app/_components/services_components/mobile_app/MobileCTA';

import FAQSection from '@/app/_components/services_components/FAQSection';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';

export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/mobile-app' }
  });
}

const mobileAppFAQs = [
  {
    id: 'collapseFaqOne',
    target: 'collapseFaqOne',
    question: '1. What does a mobile app development company do?',
    answer: 'A mobile app development company designs, develops, tests, deploys, and maintains mobile applications for Android, iOS, and cross-platform environments.'
  },
  {
    id: 'collapseFaqTwo',
    target: 'collapseFaqTwo',
    question: '2. How much does mobile app development cost?',
    answer: 'Mobile app development costs vary depending on complexity, features, integrations, and platform requirements. Projects can range from $5,000 to $100,000+.'
  },
  {
    id: 'collapseFaqThree',
    target: 'collapseFaqThree',
    question: '3. Which is better: Native or Cross-Platform Development?',
    answer: 'Native apps provide maximum performance, while cross-platform frameworks like Flutter and React Native reduce development time and cost.'
  },
  {
    id: 'collapseFaqFour',
    target: 'collapseFaqFour',
    question: '4. What industries do you serve?',
    answer: 'We serve startups, healthcare, fintech, real estate, ecommerce, education, logistics, manufacturing, and enterprise businesses.'
  },
  {
    id: 'collapseFaqFive',
    target: 'collapseFaqFive',
    question: '5. How long does mobile app development take?',
    answer: 'Most projects take between 8 and 24 weeks depending on complexity.'
  },
  {
    id: 'collapseFaqSix',
    target: 'collapseFaqSix',
    question: '6. Do you develop Android and iOS apps?',
    answer: 'Yes, we develop both native and cross-platform applications.'
  },
  {
    id: 'collapseFaqSeven',
    target: 'collapseFaqSeven',
    question: '7. Can you build MVPs for startups?',
    answer: 'Yes, startup MVP development is one of our core services.'
  },
  {
    id: 'collapseFaqEight',
    target: 'collapseFaqEight',
    question: '8. Do you provide post-launch support?',
    answer: 'Yes, ongoing maintenance and support are included.'
  },
  {
    id: 'collapseFaqNine',
    target: 'collapseFaqNine',
    question: '9. What technologies do you use?',
    answer: 'React Native, Flutter, Swift, Kotlin, Node.js, Python, AWS, and more.'
  },
  {
    id: 'collapseFaqTen',
    target: 'collapseFaqTen',
    question: '10. Can you modernize existing applications?',
    answer: 'Yes, we provide app modernization and migration services.'
  },
  {
    id: 'collapseFaqEleven',
    target: 'collapseFaqEleven',
    question: '11. Do you sign NDAs?',
    answer: 'Yes, we ensure complete confidentiality.'
  },
  {
    id: 'collapseFaqTwelve',
    target: 'collapseFaqTwelve',
    question: '12. Can you integrate AI into mobile apps?',
    answer: 'Yes, we build AI-powered mobile applications.'
  },
  {
    id: 'collapseFaqThirteen',
    target: 'collapseFaqThirteen',
    question: '13. Do you offer dedicated developers?',
    answer: 'Yes, businesses can hire mobile app developers from our team.'
  },
  {
    id: 'collapseFaqFourteen',
    target: 'collapseFaqFourteen',
    question: '14. Can you build fintech apps?',
    answer: 'Yes, we specialize in fintech mobile app development.'
  },
  {
    id: 'collapseFaqFifteen',
    target: 'collapseFaqFifteen',
    question: '15. Do you provide UI/UX design services?',
    answer: 'Yes, user-centric design is part of our development process.'
  },
  {
    id: 'collapseFaqSixteen',
    target: 'collapseFaqSixteen',
    question: '16. Can you integrate third-party APIs?',
    answer: 'Absolutely.'
  },
  {
    id: 'collapseFaqSeventeen',
    target: 'collapseFaqSeventeen',
    question: '17. Do you support app store submissions?',
    answer: 'Yes, we manage deployment to Google Play and Apple App Store.'
  },
  {
    id: 'collapseFaqEighteen',
    target: 'collapseFaqEighteen',
    question: '18. Why choose TGAYS Technology?',
    answer: 'We combine technical expertise, industry knowledge, and business-focused strategies to deliver measurable results.'
  }
];

const MobileAppDevelpoment = () => {
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
      
      <MobileAppBanner />
      
      <div className="nunito-page-content">
        <WhyChooseMobileApp />
        <DetailedMobileServices />
        <MobileChallengesAndSolutions />
        <MobileAppProcess />
        <MobileComparison />
        
        <ServiceTechStack
          heading={
            <>
              MOBILE APP <span className="c-primary">TECH STACK</span>
            </>
          }
          description="We use standard native and cross-platform technologies to deliver scalable, secure, and lightning-fast applications for both iOS and Android platforms."
          cards={[
            {
              title: 'Mobile Frameworks',
              items: [
                { icon: 'ellipsis-horizontal-outline', text: 'React Native' },
                { icon: 'ellipsis-horizontal-outline', text: 'Flutter' },
                { icon: 'ellipsis-horizontal-outline', text: 'Swift (Native iOS)' },
                { icon: 'ellipsis-horizontal-outline', text: 'Kotlin (Native Android)' }
              ],
              minItems: 4,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Back-end & Cloud',
              highlight: true,
              items: [
                { icon: 'ellipsis-horizontal-outline', text: 'Node.js' },
                { icon: 'ellipsis-horizontal-outline', text: 'Python' },
                { icon: 'ellipsis-horizontal-outline', text: 'Laravel' },
                { icon: 'ellipsis-horizontal-outline', text: 'AWS / Azure / Google Cloud' }
              ],
              minItems: 4,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            }
          ]}
        />
        
        <MobileBenefits />
        <MobileIndustries />
        <MobileTrust />
        
        <AnimatedTestimonials autoplay={true}/>
        <FAQSection faqs={mobileAppFAQs}/>
        <MobileCTA />
        <QuickConsultation/>
      </div>
    </div>
  );
};

export default MobileAppDevelpoment;