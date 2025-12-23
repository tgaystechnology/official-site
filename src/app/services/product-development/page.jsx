import ExperienceSection from '@/app/_components/aboutUs/Industry_we_serve/ExperienceSection';
import ServiceList from '@/app/_components/aboutUs/Industry_we_serve/ServiceList';
import Testimonials from '@/app/_components/home/Testimonials';
import CallToAction from '@/app/_components/services_components/CallToAction';
import FAQSection from '@/app/_components/services_components/FAQSection';
import DevelopmentProcess from '@/app/_components/services_components/Production_development/DevelopmentProcess';
import ProductDevelopmentBanner from '@/app/_components/services_components/Production_development/ProductDevelopmentBanner';
import ProductDevelopmentSectionOne from '@/app/_components/services_components/Production_development/ProductDevelopmentSectionOne';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/product-development' } // This should match exactly what's in your database
  });
}


const serviceData = [
  {
    id: 1,
    image: '/img/product-exp-1.png',
    title: 'Agile Methodology',
    description:
      'We adapt quickly to changes and deliver products in iterative cycles for faster time-to-market.'
  },
  {
    id: 2,
    image: '/img/product-exp-2.png',
    title: 'Experienced Team',
    description:
      'Our skilled engineers, designers, and strategists bring years of cross-industry experience to every project.'
  },
  {
    id: 3,
    image: '/img/product-exp-3.png',
    title: 'End-to-End Support',
    description:
      'From concept and design to development and maintenance — we’re with you at every stage of your product journey.'
  }
];

const productFAQs = [
    {
      id: 'headingOne',
      target: 'collapseOne',
      question: '1. What is product development and how can TGAYS Technology help?',
      answer: 'Product development involves turning your idea into a full-fledged digital solution. At TGAYS Technology, we handle everything from ideation and strategy to UI/UX design, development, testing, and deployment.'
    },
    {
      id: 'headingTwo',
      target: 'collapseTwo',
      question: '2. Do you provide support after the product is launched?',
      answer: 'Yes, we offer complete post-launch support including maintenance, feature updates, bug fixes, and performance monitoring to ensure your product stays reliable and scalable.'
    },
    {
      id: 'headingThree',
      target: 'collapseThree',
      question: '3. What industries do you specialize in?',
      answer: 'We have experience across multiple industries including Finance, Healthcare, Education, Hospitality, and E-Commerce. Our team understands industry-specific needs and tailors solutions accordingly.'
    },
    {
      id: 'headingFour',
      target: 'collapseFour',
      question: '4. How do you ensure the quality of the product?',
      answer: 'We follow a rigorous QA process involving manual and automated testing. Every product goes through multiple rounds of testing to ensure it is bug-free, secure, and performs optimally.'
    },
    {
      id: 'headingFive',
      target: 'collapseFive',
      question: '5. Can you build AI-powered or scalable SaaS products?',
      answer: 'Absolutely! We specialize in building AI-powered applications, automation tools, and cloud-based SaaS platforms using cutting-edge technologies and modern architecture best practices.'
    },
    {
      id: 'headingSix',
      target: 'collapseSix',
      question: '6. Do you offer post-launch support?',
      answer: 'Yes, we offer one month support after project launch without any additional cost.'
    },
    {
      id: 'headingSeven',
      target: 'collapseSeven',
      question: '7. What is your communication process during the development process?',
      answer: 'We use Slack, Google Meet, Skype for communication and Trello, Asana or Jira for project management as per the Client comfort.'
    }
  ];

const ProductionDevelopment = () => {
  return (
    <div>
        <ProductDevelopmentBanner/>
        <ProductDevelopmentSectionOne/>
        <ExperienceSection
          heading="Why Choose Us?"
          description="We’re not just coders — we’re strategic partners who are committed to your product’s long-term success. Here’s why businesses trust us:"
        />
        <ServiceList services={serviceData} />
        <DevelopmentProcess/>
        <CallToAction
            heading="Build the Future, Today – With Our Custom Product Development Services!"
            description="From innovative web apps to intelligent mobile solutions, TGAYS Technology is your partner in building future-ready digital products. Let’s turn your ideas into exceptional software that scales."
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
        <FAQSection faqs={productFAQs}/>
        <QuickConsultation/>
    </div>
  )
}

export default ProductionDevelopment;