import ItStaffAugmentationBanner from '@/app/_components/services_components/it_taff_augmentation/ItStaffAugmentationBanner';
import KeyBenefits from '@/app/_components/services_components/it_taff_augmentation/KeyBenefits';
import WorldOfItSolutions from '@/app/_components/services_components/it_taff_augmentation/WorldOfItSolutions';
import StaffCategories from '@/app/_components/services_components/it_taff_augmentation/StaffCategories';
import React from 'react'
import WhyChooseOurStaff from '@/app/_components/services_components/it_taff_augmentation/WhyChooseOurStaff';
import CallToAction from '@/app/_components/services_components/CallToAction';
import Testimonials from '@/app/_components/home/Testimonials';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import PricingSection from '@/app/_components/services_components/PricingSection';
import FAQSection from '@/app/_components/services_components/FAQSection';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/it-staff-augmentation' } // This should match exactly what's in your database
  });
}


const itStaffFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What is IT Staff Augmentation?',
      answer: 'IT Staff Augmentation is a service model where you can hire skilled IT professionals on-demand to fill talent gaps in your in-house team, either for short-term projects or long-term collaboration.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. How quickly can we onboard a developer or team?',
      answer: 'Most of our resources are pre-vetted and ready for immediate onboarding. Based on your requirements, we can initiate deployment in as little as 48–72 hours.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. What engagement models do you offer?',
      answer: 'We offer flexible engagement models: hourly billing, monthly retainers, and fixed-price contracts depending on your needs and project scope.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. What skillsets do your IT professionals cover?',
      answer: 'Our talent pool includes developers (Frontend, Backend, Full Stack), DevOps engineers, QA testers, Data Scientists, Mobile Developers, UI/UX designers, and Project Managers skilled in modern stacks like React, Node.js, Python, AWS, and more.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. Can we scale the team up or down based on project needs?',
      answer: 'Yes. One of the key benefits of staff augmentation is flexibility. You can scale your team up or down as your project requirements evolve.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you offer NDA and confidentiality agreements?',
      answer: 'Absolutely. We ensure complete confidentiality by signing NDAs and secure agreements to protect your intellectual property and business data.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. What tools do you use for communication and reporting?',
      answer: 'We adapt to your preferred tools — Slack, Microsoft Teams, Google Meet for communication; and Jira, Trello, Asana for project tracking. Transparent reporting is part of our process.'
    }
  ];

  const pricingPlans = [
  {
    name: 'Basic Plan',
    description:
      'Ideal for startups and small-scale projects. Get access to emerging talent to complete specific tasks and accelerate your timeline without breaking the bank.',
    features: [
      { icon: 'layers-outline', label: 'Access to Junior to Mid-Level Talent' },
      { icon: 'layers-outline', label: 'Perfect for Part-Time Engagement' },
      { icon: 'layers-outline', label: 'Standard Email & Chat Support' },
      { icon: 'layers-outline', label: 'Weekly Progress Updates' },
    ],
    price: 'Starting at $1800',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
  },
  {
    name: 'Standard Plan',
    description:
      'Our most popular option for growing businesses. Hire experienced, dedicated professionals who can manage core project tasks and integrate seamlessly with your team.',
    features: [
      { icon: 'layers-outline', label: 'Access to Mid to Senior-Level Talent' },
      { icon: 'layers-outline', label: 'Full-Time Dedicated Professional' },
      { icon: 'layers-outline', label: 'Dedicated Account Manager' },
      { icon: 'layers-outline', label: 'Priority Communication Channels' },
    ],
    price: 'Starting at $3500',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
  },
  {
    name: 'Premium Plan',
    description:
      'The complete solution for large-scale projects. Build a fully-managed team of top-tier experts and architects to handle complex challenges and drive innovation.',
    features: [
      { icon: 'layers-outline', label: 'Access to Top 5% Senior & Niche Experts' },
      { icon: 'layers-outline', label: 'Fully Managed Dedicated Team' },
      { icon: 'layers-outline', label: '24/7 Priority Technical Support' },
      { icon: 'layers-outline', label: 'Strategic Technical Consultation' },
    ],
    price: 'Starting at $5500',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    highlight: true, // adds the special third-box class
  },
];

const ItStaffAugmentation = () => {
  return (
    <div>
        <ItStaffAugmentationBanner/>
        <WorldOfItSolutions/>
        <KeyBenefits/>
        <StaffCategories/>
        <WhyChooseOurStaff/>
        <CallToAction
            heading="Stay Ahead of the Competition with Our Proven IT Staff Augmentation Solutions"
            description="Whether you're launching a new product, migrating systems, or filling a skills gap—we bring the right talent to your team, exactly when you need it."
        />
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <ServiceTechStack
            heading={
            <>
              CUTTING-EDGE <span className="c-primary">TECH STACK</span> OUR TALENT WORKS WITH
            </>
          }
          description="Access top-tier professionals with proven expertise across modern development frameworks and platforms."
          cards={[
            {
              title: 'Frontend Technologies',
              items: [
                { icon: '', text: 'HTML5' },
                { icon: '', text: 'Adobe Photoshop' },
                { icon: '', text: 'CSS3' },
                { icon: '', text: 'Bootstrap' }, // Closer resemblance to layout grid
                { icon: '', text: 'JavaScript' },
                { icon: '', text: 'React.js' },
                { icon: '', text: 'Angular' },
                { icon: '', text: 'Next.js' }, // No exact match in ionicons
                { icon: '', text: 'jQuery' },
                { icon: '', text: 'Figma (UI/UX)' },
                { icon: '', text: 'Webflow' },
              ],
              minItems: 11,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Backend & Databases',
              highlight: true,
              items: [
                { icon: '', text: 'PHP & Laravel' },
                { icon: '', text: 'Node.js' }, // Use this if available in your icon set
                { icon: '', text: 'Python & Django' },
                { icon: '', text: 'MySQL' },
                { icon: '', text: 'MongoDB' },
                { icon: '', text: 'PostgreSQL' },
                { icon: '', text: 'Redis' },
                { icon: '', text: 'REST & GraphQL APIs' },
              ],
              minItems: 11,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'E-Commerce & CMS',
              items: [
                { icon: '', text: 'Shopify' },
                { icon: '', text: 'WooCommerce' },
                { icon: '', text: 'Magento' },
                { icon: '', text: 'BigCommerce' },
                { icon: '', text: 'Custom eCommerce Platforms' },
                { icon: '', text: 'WordPress CMS' },
                { icon: '', text: 'Headless Commerce' },
              ],
              minItems: 11,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
          ]}
        />
        <PricingSection title="Transparent Pricing for On-Demand Talent" plans={pricingPlans}/>
        <FAQSection faqs={itStaffFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default ItStaffAugmentation;