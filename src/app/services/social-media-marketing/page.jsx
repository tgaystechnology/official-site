import React from 'react';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import PricingSection from '@/app/_components/services_components/PricingSection';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

// New Components
import SocialMediaBanner from '@/app/_components/services_components/Social_media_marketing/SocialMediaBanner';
import SocialMediaWhyChoose from '@/app/_components/services_components/Social_media_marketing/SocialMediaWhyChoose';
import SocialMediaServices from '@/app/_components/services_components/Social_media_marketing/SocialMediaServices';
import SocialMediaChallenges from '@/app/_components/services_components/Social_media_marketing/SocialMediaChallenges';
import SocialMediaProcess from '@/app/_components/services_components/Social_media_marketing/SocialMediaProcess';
import SocialMediaBenefits from '@/app/_components/services_components/Social_media_marketing/SocialMediaBenefits';
import SocialMediaIndustries from '@/app/_components/services_components/Social_media_marketing/SocialMediaIndustries';
import SocialMediaTrust from '@/app/_components/services_components/Social_media_marketing/SocialMediaTrust';
import SocialMediaCTA from '@/app/_components/services_components/Social_media_marketing/SocialMediaCTA';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';

export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/social-media-marketing' }
  });
}

const marketingFAQs = [
  {
    id: 'headingOne',
    target: 'collapseOne',
    question: '1. What is social media marketing?',
    answer: 'Social media marketing involves promoting brands, products, and services through social platforms to increase visibility, engagement, leads, and sales.'
  },
  {
    id: 'headingTwo',
    target: 'collapseTwo',
    question: '2. What social media marketing services do you offer?',
    answer: 'We offer complete social media marketing services including content creation, ad campaign management, page optimization, influencer marketing, analytics & reporting, and community engagement across platforms like Facebook, Instagram, LinkedIn, YouTube, and Twitter.'
  },
  {
    id: 'headingThree',
    target: 'collapseThree',
    question: '3. Which social media platforms are best for business?',
    answer: 'The best platform depends on your audience. Popular choices include Facebook, Instagram, LinkedIn, YouTube, and X (Twitter).'
  },
  {
    id: 'headingFour',
    target: 'collapseFour',
    question: '4. How long does it take to see results from social media marketing?',
    answer: 'It usually takes 30 to 90 days to see significant results depending on your goals. Paid campaigns can generate results within days, while organic growth strategies typically show significant improvements within 3 to 6 months.'
  },
  {
    id: 'headingFive',
    target: 'collapseFive',
    question: '5. What is your pricing model for social media marketing?',
    answer: 'We offer flexible packages: monthly retainers, project-based pricing, and custom plans depending on platform count, content frequency, ad spend, and campaign goals. Contact us for a tailored quote based on your business needs.'
  },
  {
    id: 'headingSix',
    target: 'collapseSix',
    question: '6. What tools do you use for managing and analyzing campaigns?',
    answer: 'We use Meta Business Suite, LinkedIn Campaign Manager, Hootsuite, Buffer, and Later for publishing. For analytics, we use Meta Insights, Google Analytics, Sprout Social, and custom reporting dashboards.'
  },
  {
    id: 'headingSeven',
    target: 'collapseSeven',
    question: '7. Do you provide content or should we provide it?',
    answer: 'We handle complete content creation including graphics, captions, videos, reels, stories, and carousels. However, if you have brand assets or specific guidelines, we’re happy to work collaboratively.'
  },
  {
    id: 'headingEight',
    target: 'collapseEight',
    question: '8. Do you provide social media advertising services?',
    answer: 'Yes. We manage highly targeted Facebook, Instagram, LinkedIn, and YouTube advertising campaigns to generate leads and sales.'
  },
  {
    id: 'headingNine',
    target: 'collapseNine',
    question: '9. Can social media generate leads?',
    answer: 'Absolutely. Strategic campaigns and optimized funnels can generate highly qualified leads and sales opportunities.'
  },
  {
    id: 'headingTen',
    target: 'collapseTen',
    question: '10. How do you measure success?',
    answer: 'We track engagement, reach, traffic, leads, conversions, customer acquisition costs, and overall ROI.'
  },
  {
    id: 'headingEleven',
    target: 'collapseEleven',
    question: '11. Do you offer post-campaign support and performance reviews?',
    answer: 'Yes. We provide detailed monthly performance reports, recommendations, and regular review meetings to improve future campaigns and ensure continuous growth.'
  },
  {
    id: 'headingTwelve',
    target: 'collapseTwelve',
    question: '12. Do you offer LinkedIn marketing services?',
    answer: 'Yes. We provide comprehensive LinkedIn content marketing, B2B advertising, and account-based lead generation services.'
  },
  {
    id: 'headingThirteen',
    target: 'collapseThirteen',
    question: '13. How will we communicate and track progress?',
    answer: 'We stay in touch via Slack, WhatsApp, or email based on your preference. We also use Trello, ClickUp, or Google Sheets to track content calendars and campaign progress.'
  },
  {
    id: 'headingFourteen',
    target: 'collapseFourteen',
    question: '14. Can social media help local businesses?',
    answer: 'Yes. Social media is highly effective for increasing local visibility, foot traffic, and customer engagement through geo-targeted advertising.'
  },
  {
    id: 'headingFifteen',
    target: 'collapseFifteen',
    question: '15. What industries do you serve?',
    answer: 'We serve a wide variety of industries including Healthcare, Real Estate, SaaS, eCommerce, Finance, Education, and Local Businesses.'
  },
  {
    id: 'headingSixteen',
    target: 'collapseSixteen',
    question: '16. Why choose a social media marketing company in India?',
    answer: 'Businesses benefit from highly experienced digital specialists, cost-effective services, scalable solutions, and global marketing expertise.'
  }
];

const pricingPlans = [
  {
    name: 'Basic Plan',
    description: 'Perfect for startups and small businesses looking to build a strong social media foundation and engage with their first followers.',
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
    description: 'Ideal for established businesses ready to accelerate their growth, increase brand awareness, and run targeted ad campaigns.',
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
    description: 'Our all-inclusive solution for large brands that demand a comprehensive, data-driven strategy to dominate their market.',
    features: [
      { icon: 'layers-outline', label: 'Everything in Standard Plan, plus:' },
      { icon: 'layers-outline', label: 'Advanced Ad Strategy & Optimization' },
      { icon: 'layers-outline', label: 'Influencer Marketing Outreach' },
      { icon: 'layers-outline', label: 'Dedicated Account Manager' },
    ],
    price: '$99',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
    highlight: true,
  },
];

const SocialMediaMarketing = () => {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>
        <SocialMediaBanner />
        <SocialMediaWhyChoose />
        <SocialMediaServices />
        <SocialMediaBenefits />
        <SocialMediaChallenges />
        <SocialMediaProcess />
        <SocialMediaIndustries />
        <SocialMediaTrust />

        <PricingSection plans={pricingPlans}/>

        <CallToAction
            heading="Ready to Turn Followers Into Loyal Customers?"
            description="Let our team craft a social media game plan that builds your brand, grows your audience, and drives measurable results. The right content, the right audience—at the right time."
            buttonText="Get a Custom Strategy"
            buttonLink="/contact-us"
            secondaryButtonText="Request a Free Audit"
            secondaryButtonLink="/contact-us"
        />

        <AnimatedTestimonials autoplay={true}/>

        <ServiceTechStack
          heading={
            <>
              ADVANCED MARKETING <span className="c-primary">TECHNOLOGY STACK</span>
            </>
          }
          description="We leverage industry-leading tools to manage, analyze, and optimize your social media presence."
          cards={[
            {
              title: 'Creative & Design Tools',
              items: [
                { icon: '', text: 'Adobe Creative Suite' },
                { icon: '', text: 'Canva' },
                { icon: '', text: 'Figma (Social UI/UX)' },
                { icon: '', text: 'Adobe Premiere Pro' },
                { icon: '', text: 'InShot & CapCut' }
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Marketing & Publishing Tools',
              highlight: true,
              items: [
                { icon: '', text: 'Hootsuite' },
                { icon: '', text: 'Buffer' },
                { icon: '', text: 'Sprout Social' },
                { icon: '', text: 'Later' },
                { icon: '', text: 'Meta Business Suite' }
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
            {
              title: 'Analytics & Automation',
              items: [
                { icon: '', text: 'Google Analytics' },
                { icon: '', text: 'Meta Insights' },
                { icon: '', text: 'LinkedIn Analytics' },
                { icon: '', text: 'HubSpot Marketing Hub' },
                { icon: '', text: 'Brandwatch / Mention' }
              ],
              minItems: 5,
              ctaText: 'Consult Now',
              ctaLink: '/contact-us',
            },
          ]}
        />
        
        <FAQSection faqs={marketingFAQs}/>
        
        <SocialMediaCTA />

        <QuickConsultation/>
    </div>
  )
}

export default SocialMediaMarketing;