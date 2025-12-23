import Testimonials from '@/app/_components/home/Testimonials';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import PricingSection from '@/app/_components/services_components/PricingSection';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import SocialMediaBanner from '@/app/_components/services_components/Social_media_marketing/SocialMediaBanner';
import SocialMediaMarketingSectionOne from '@/app/_components/services_components/Social_media_marketing/SocialMediaMarketingSectionOne';
import SocialMediaServices from '@/app/_components/services_components/Social_media_marketing/SocialMediaServices';
import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/social-media-marketing' } // This should match exactly what's in your database
  });
}


const marketingFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What social media marketing services do you offer?',
      answer: 'We offer complete social media marketing services including content creation, ad campaign management, page optimization, influencer marketing, analytics & reporting, and community engagement across platforms like Facebook, Instagram, LinkedIn, YouTube, and Twitter.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. How long does it take to see results from social media marketing?',
      answer: 'It usually takes 30 to 90 days to see significant results depending on your goals, current presence, platform, and ad strategy. Organic growth may take longer, while paid campaigns often bring faster visibility and engagement.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. What is your pricing model for social media marketing?',
      answer: 'We offer flexible packages: monthly retainers, project-based pricing, and custom plans depending on platform count, content frequency, ad spend, and campaign goals. Contact us for a tailored quote based on your business needs.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. What tools do you use for managing and analyzing campaigns?',
      answer: 'We use Meta Business Suite, LinkedIn Campaign Manager, Hootsuite, Buffer, and Later for publishing. For analytics, we use Meta Insights, Google Analytics, Sprout Social, and custom reporting dashboards.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. Do you provide content or should we provide it?',
      answer: 'We handle complete content creation including graphics, captions, video editing, and hashtags. However, if you have brand assets or specific guidelines, we’re happy to work collaboratively.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you offer post-campaign support and performance reviews?',
      answer: 'Yes. We provide detailed monthly performance reports, recommendations, and regular review meetings to improve future campaigns and ensure continuous growth.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. How will we communicate and track progress?',
      answer: 'We stay in touch via Slack, WhatsApp, or email based on your preference. We also use Trello, ClickUp, or Google Sheets to track content calendars and campaign progress.'
    }
  ];

  const pricingPlans = [
  {
    name: 'Basic Plan',
    description:
      'Perfect for startups and small businesses looking to build a strong social media foundation and engage with their first followers.',
    features: [
      { icon: 'layers-outline', label: 'Management of 2 Social Platforms' },
      { icon: 'layers-outline', label: '3-4 High-Quality Posts Per Week' },
      { icon: 'layers-outline', label: 'Community Engagement & Response' },
      { icon: 'layers-outline', label: 'Monthly Performance Report' },
    ],
    price: '$49',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
  },
  {
    name: 'Standard Plan',
    description:
      'Ideal for established businesses ready to accelerate their growth, increase brand awareness, and run targeted ad campaigns.',
    features: [
      { icon: 'layers-outline', label: 'Everything in Starter Plan, plus:' },
      { icon: 'layers-outline', label: 'Management of up to 4 Platforms' },
      { icon: 'layers-outline', label: 'Short-Form Video Content (Reels/Shorts)' },
      { icon: 'layers-outline', label: 'Paid Ad Campaign Management' },
    ],
    price: '$79',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
  },
  {
    name: 'Premium Plan',
    description:
      'Our all-inclusive solution for large brands that demand a comprehensive, data-driven strategy to dominate their market.',
    features: [
      { icon: 'layers-outline', label: 'Everything in Standard Plan, plus:' },
      { icon: 'layers-outline', label: 'Feature TwoAdvanced Ad Strategy & Optimization' },
      { icon: 'layers-outline', label: 'Influencer Marketing Outreach' },
      { icon: 'layers-outline', label: 'Dedicated Account Manager' },
    ],
    price: '$99',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    highlight: true, // adds the special third-box class
  },
];

const SocialMediaMarketing = () => {
  return (
    <div>
        <SocialMediaBanner/>
        <SocialMediaMarketingSectionOne/>
        <SocialMediaServices/>
        <PricingSection plans={pricingPlans}/>
        <CallToAction
            heading="Ready to Turn Followers Into Loyal Customers?"
            description="Let our team craft a social media game plan that builds your brand, grows your audience, and drives measurable results. The right content, the right audience—at the right time."
        />
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <ServiceTechStack
          heading={
            <>
              CUTTING-EDGE <span className="c-primary">TECH STACK</span> FOR SOCIAL MEDIA MARKETING
            </>
          }
          description=""
          cards={[
            {
              title: 'Creative & Design Tools',
              items: [
                { icon: '', text: 'Canva' },
                { icon: '', text: 'Adobe Photoshop' },
                { icon: '', text: 'Adobe Illustrator' },
                { icon: '', text: 'Adobe Premiere Pro (Reels & Shorts)' },
                { icon: '', text: 'Figma (Social UI/UX)' },
                { icon: '', text: 'InShot & CapCut (Mobile Editing)' },
                { icon: '', text: 'Animoto / Lumen5' },
              ],
              minItems: 7,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Marketing & Publishing Tools',
              highlight: true,
              items: [
                { icon: '', text: 'Meta Business Suite' },
                { icon: '', text: 'LinkedIn Campaign Manager' },
                { icon: '', text: 'Hootsuite' },
                { icon: '', text: 'Buffer' },
                { icon: '', text: 'Later' },
                { icon: '', text: 'YouTube Studio' },
                { icon: '', text: 'Sprout Social ' },
              ],
              minItems: 7,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Analytics & Automation',
              items: [
                { icon: '', text: 'Google Analytics' },
                { icon: '', text: 'Meta Insights (Facebook & Instagram)' },
                { icon: '', text: 'LinkedIn Analytics' },
                { icon: '', text: 'Brandwatch / Mention' },
                { icon: '', text: 'HubSpot Marketing Hub' },
                { icon: '', text: 'Zapier (Workflow Automation)' },
                { icon: '', text: 'Chatbots (Meta, Drift)' },
              ],
              minItems: 7,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
          ]}
        />
        <FAQSection faqs={marketingFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default SocialMediaMarketing;