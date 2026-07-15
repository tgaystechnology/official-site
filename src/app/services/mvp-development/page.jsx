import React from 'react';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import PricingSection from '@/app/_components/services_components/PricingSection';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

// MVP Components
import MvpDevelopmentBanner from '@/app/_components/services_components/mvp_development/MvpDevelopmentBanner';
import MvpWhyChoose from '@/app/_components/services_components/mvp_development/MvpWhyChoose';
import MvpDevelopmentServices from '@/app/_components/services_components/mvp_development/MvpDevelopmentServices';
import MvpChallenges from '@/app/_components/services_components/mvp_development/MvpChallenges';
import MvpProcess from '@/app/_components/services_components/mvp_development/MvpProcess';
import MvpBenefits from '@/app/_components/services_components/mvp_development/MvpBenefits';
import MvpIndustries from '@/app/_components/services_components/mvp_development/MvpIndustries';
import MvpTrust from '@/app/_components/services_components/mvp_development/MvpTrust';
import MvpCTA from '@/app/_components/services_components/mvp_development/MvpCTA';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';

export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/mvp-development' }
  });
}

const mvpFAQs = [
  {
    id: 'headingOne',
    target: 'collapseOne',
    question: '1. What is MVP development?',
    answer: 'MVP development involves building a product with the minimum set of features needed to validate an idea and gather user feedback.'
  },
  {
    id: 'headingTwo',
    target: 'collapseTwo',
    question: '2. How much does MVP development cost?',
    answer: 'The MVP development cost depends on complexity, technology stack, integrations, and feature requirements.'
  },
  {
    id: 'headingThree',
    target: 'collapseThree',
    question: '3. How long does it take to build an MVP?',
    answer: 'Most MVPs can be developed within 6 to 16 weeks depending on scope and functionality.'
  },
  {
    id: 'headingFour',
    target: 'collapseFour',
    question: '4. Why should startups build an MVP first?',
    answer: 'An MVP reduces risk, validates ideas, saves costs, and improves investor confidence.'
  },
  {
    id: 'headingFive',
    target: 'collapseFive',
    question: '5. Can you build SaaS MVPs?',
    answer: 'Yes. We specialize in SaaS MVP development, multi-tenant architectures, and subscription-based platforms.'
  },
  {
    id: 'headingSix',
    target: 'collapseSix',
    question: '6. Do you provide mobile MVP development?',
    answer: 'Yes. We develop Android, iOS, and cross-platform MVP applications.'
  },
  {
    id: 'headingSeven',
    target: 'collapseSeven',
    question: '7. Can you help with product strategy?',
    answer: 'Absolutely. We provide consulting, product discovery, and roadmap planning.'
  },
  {
    id: 'headingEight',
    target: 'collapseEight',
    question: '8. Do you sign NDAs?',
    answer: 'Yes. We protect intellectual property through strict confidentiality agreements.'
  },
  {
    id: 'headingNine',
    target: 'collapseNine',
    question: '9. Can I hire dedicated MVP developers?',
    answer: 'Yes. We offer dedicated developers, designers, QA engineers, and project managers.'
  },
  {
    id: 'headingTen',
    target: 'collapseTen',
    question: '10. Do you provide post-launch support?',
    answer: 'Yes. We offer maintenance, feature enhancements, monitoring, and scaling support.'
  },
  {
    id: 'headingEleven',
    target: 'collapseEleven',
    question: '11. What industries do you serve?',
    answer: 'Healthcare, fintech, SaaS, eCommerce, real estate, education, logistics, and enterprise sectors.'
  },
  {
    id: 'headingTwelve',
    target: 'collapseTwelve',
    question: '12. Can you scale my MVP into a full product?',
    answer: 'Yes. We design MVPs with scalability in mind and support long-term product growth.'
  }
];

const engagementModels = [
  {
    name: 'Fixed-Cost MVP Projects',
    description: 'Perfect for defined scopes. Get a precise budget and timeline for your core features before development starts.',
    features: [
      { icon: 'layers-outline', label: 'Predictable Budgeting' },
      { icon: 'layers-outline', label: 'Strict Delivery Timelines' },
      { icon: 'layers-outline', label: 'Well-Defined Deliverables' },
      { icon: 'layers-outline', label: 'Ideal for Initial Prototypes' },
    ],
    price: 'Fixed Scope',
    ctaText: 'Get a Quote',
    ctaLink: '/contact-us',
  },
  {
    name: 'Dedicated Development Team',
    description: 'Ideal for long-term product growth. Extend your startup team with our dedicated MVP specialists.',
    features: [
      { icon: 'layers-outline', label: 'Full Team Access (UI/UX, Dev, QA)' },
      { icon: 'layers-outline', label: 'Scale Up or Down Seamlessly' },
      { icon: 'layers-outline', label: 'Direct Control Over Priorities' },
      { icon: 'layers-outline', label: 'Month-to-Month Engagement' },
    ],
    price: 'Retainer',
    ctaText: 'Hire a Team',
    ctaLink: '/contact-us',
    highlight: true,
  },
  {
    name: 'Agile Product Teams',
    description: 'Best for startups and evolving products needing rapid iteration based on continuous user feedback.',
    features: [
      { icon: 'layers-outline', label: 'Sprint-Based Deliverables' },
      { icon: 'layers-outline', label: 'Continuous Feedback Loops' },
      { icon: 'layers-outline', label: 'Highly Adaptable to Changes' },
      { icon: 'layers-outline', label: 'Faster Time-to-Market' },
    ],
    price: 'Agile',
    ctaText: 'Consult Us',
    ctaLink: '/contact-us',
  },
];

const MvpDevelopment = () => {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
        <MvpDevelopmentBanner />
        <MvpWhyChoose />
        <MvpDevelopmentServices />
        <MvpBenefits />
        <MvpChallenges />
        <MvpProcess />
        <MvpIndustries />
        <MvpTrust />

        <div className="crumina-module crumina-heading text-center mt-5 mb-0 pb-0">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700", paddingTop: '80px' }}>
            FLEXIBLE <span className="c-primary">ENGAGEMENT MODELS</span>
          </h2>
          <p className="slider-content-text">Choose the perfect partnership model for your MVP journey.</p>
        </div>
        <PricingSection plans={engagementModels}/>

        <CallToAction
            heading="Turn Your Vision into a Scalable Reality"
            description="Stop guessing and start validating. Let TGAYS Technology build your MVP so you can launch faster, minimize risk, and secure investor funding with absolute confidence."
            buttonText="Get a Custom MVP Roadmap"
            buttonLink="/contact-us"
            secondaryButtonText="Talk to a Product Expert"
            secondaryButtonLink="/contact-us"
        />

        <AnimatedTestimonials autoplay={true}/>

        <ServiceTechStack
          heading={
            <>
              MODERN <span className="c-primary">TECHNOLOGY STACK</span>
            </>
          }
          description="We use cutting-edge, scalable technologies to ensure your MVP can grow into a robust enterprise solution."
          cards={[
            {
              title: 'Frontend',
              items: [
                { icon: '', text: 'React.js' },
                { icon: '', text: 'Angular' },
                { icon: '', text: 'Vue.js' },
                { icon: '', text: 'Next.js' },
                { icon: '', text: 'HTML5/CSS3' }
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Backend & Cloud',
              highlight: true,
              items: [
                { icon: '', text: 'Node.js' },
                { icon: '', text: '.NET' },
                { icon: '', text: 'Java & Python' },
                { icon: '', text: 'AWS' },
                { icon: '', text: 'Microsoft Azure & Google Cloud' }
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Mobile',
              items: [
                { icon: '', text: 'Flutter' },
                { icon: '', text: 'React Native' },
                { icon: '', text: 'Native Android' },
                { icon: '', text: 'Native iOS' },
                { icon: '', text: 'PWA' }
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
          ]}
        />
        
        <FAQSection faqs={mvpFAQs}/>
        
        <MvpCTA />

        <QuickConsultation/>
    </div>
  )
}

export default MvpDevelopment;