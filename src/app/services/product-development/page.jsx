import ProductDevelopmentBanner from '@/app/_components/services_components/Production_development/ProductDevelopmentBanner';
import WhyChooseProductDev from '@/app/_components/services_components/Production_development/WhyChooseProductDev';
import ProductServicesTabs from '@/app/_components/services_components/Production_development/ProductServicesTabs';
import ProductBenefits from '@/app/_components/services_components/Production_development/ProductBenefits';
import ProductChallenges from '@/app/_components/services_components/Production_development/ProductChallenges';
import DevelopmentProcess from '@/app/_components/services_components/Production_development/DevelopmentProcess';
import ProductIndustries from '@/app/_components/services_components/Production_development/ProductIndustries';
import ProductTrust from '@/app/_components/services_components/Production_development/ProductTrust';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import FAQSection from '@/app/_components/services_components/FAQSection';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import Link from 'next/link';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/product-development' } // This should match exactly what's in your database
  });
}

const productFAQs = [
  {
    id: 'pdFaqOne',
    target: 'collapsePdOne',
    question: '1. What industries do you serve?',
    answer: 'We serve healthcare, fintech, e-commerce, education, logistics, real estate, SaaS, and enterprise sectors.'
  },
  {
    id: 'pdFaqTwo',
    target: 'collapsePdTwo',
    question: '2. Do you provide MVP development?',
    answer: 'Yes, we specialize in MVP product development services for startups and innovators.'
  },
  {
    id: 'pdFaqThree',
    target: 'collapsePdThree',
    question: '3. Can you build AI-powered products?',
    answer: 'Absolutely. We provide AI product development services including generative AI and machine learning solutions.'
  },
  {
    id: 'pdFaqFour',
    target: 'collapsePdFour',
    question: '4. How long does product development take?',
    answer: 'Most MVPs take 8–16 weeks, while enterprise products may require several months depending on complexity.'
  },
  {
    id: 'pdFaqFive',
    target: 'collapsePdFive',
    question: '5. Do you sign NDAs?',
    answer: 'Yes. We ensure complete confidentiality and IP protection.'
  },
  {
    id: 'pdFaqSix',
    target: 'collapsePdSix',
    question: '6. What technologies do you use?',
    answer: 'React, Angular, Node.js, Python, Java, Flutter, AWS, Azure, AI frameworks, and more.'
  },
  {
    id: 'pdFaqSeven',
    target: 'collapsePdSeven',
    question: '7. Do you provide post-launch support?',
    answer: 'Yes, we offer maintenance, monitoring, upgrades, and optimization services.'
  },
  {
    id: 'pdFaqEight',
    target: 'collapsePdEight',
    question: '8. Can startups hire dedicated teams?',
    answer: 'Yes. We offer flexible dedicated product teams for startups.'
  },
  {
    id: 'pdFaqNine',
    target: 'collapsePdNine',
    question: '9. Do you work with international clients?',
    answer: 'Yes, we serve businesses across the USA, UK, Australia, and India.'
  },
  {
    id: 'pdFaqTen',
    target: 'collapsePdTen',
    question: '10. How do you ensure product quality?',
    answer: 'Through rigorous QA testing, code reviews, automation testing, and security assessments.'
  },
  {
    id: 'pdFaqEleven',
    target: 'collapsePdEleven',
    question: '11. Do you provide product consulting?',
    answer: 'Yes, including discovery workshops and product strategy consulting.'
  },
  {
    id: 'pdFaqTwelve',
    target: 'collapsePdTwelve',
    question: '12. Can you modernize legacy applications?',
    answer: 'Yes, we specialize in digital transformation and product modernization.'
  },
  {
    id: 'pdFaqThirteen',
    target: 'collapsePdThirteen',
    question: '13. What engagement models do you offer?',
    answer: 'Fixed cost, dedicated team, and time & material models.'
  },
  {
    id: 'pdFaqFourteen',
    target: 'collapsePdFourteen',
    question: '14. What makes TGAYS Technology different?',
    answer: 'Our product-first mindset, AI expertise, agile methodology, and business-focused approach.'
  },
  {
    id: 'pdFaqFifteen',
    target: 'collapsePdFifteen',
    question: '15. How do I get started?',
    answer: 'Simply contact us for a free consultation and product discovery session.'
  }
];

const ProductionDevelopment = () => {
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
        <ProductDevelopmentBanner/>
        
        <div className="nunito-page-content">
          <WhyChooseProductDev/>
          <ProductServicesTabs/>
          <ProductBenefits/>
          <ProductChallenges/>
          <DevelopmentProcess/>
          <ProductIndustries/>
          <ProductTrust/>
          <AnimatedTestimonials autoplay={true}/>
          
          <ServiceTechStack
            heading={
              <>
                CUTTING-EDGE <span className="c-primary">TECH STACK</span> We Use
              </>
            }
            description="Our engineers deploy top-tier languages, systems, and cloud providers to power modern product builds."
            cards={[
              {
                title: 'Frontend Frameworks',
                items: [
                  { icon: '', text: 'React.js' },
                  { icon: '', text: 'Angular' },
                  { icon: '', text: 'Next.js' },
                  { icon: '', text: 'Bootstrap & HTML5' },
                  { icon: '', text: 'Javascript & SCSS' },
                  { icon: '', text: 'Figma Prototyping' }
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
              {
                title: 'Backend & Databases',
                highlight: true,
                items: [
                  { icon: '', text: 'Node.js' },
                  { icon: '', text: 'Python & Django' },
                  { icon: '', text: 'Java & Spring' },
                  { icon: '', text: '.NET Core' },
                  { icon: '', text: 'MySQL & PostgreSQL' },
                  { icon: '', text: 'MongoDB & Redis' }
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
              {
                title: 'Cloud & Integrations',
                items: [
                  { icon: '', text: 'Amazon Web Services (AWS)' },
                  { icon: '', text: 'Microsoft Azure' },
                  { icon: '', text: 'Google Cloud Platform (GCP)' },
                  { icon: '', text: 'OpenAI API & Generative AI' },
                  { icon: '', text: 'Docker & Kubernetes' },
                  { icon: '', text: 'CI/CD Pipelines' }
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
            ]}
          />
          
          <FAQSection faqs={productFAQs}/>
          
          {/* Strong Call to Action Section */}
          <section className="bg-cover free-call-section" style={{ background: "#060913", padding: "100px 0" }}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="p-5 text-center shadow-lg position-relative overflow-hidden" 
                    style={{ 
                      borderRadius: "24px", 
                      background: "linear-gradient(135deg, #091020 0%, #0c1527 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 60px -15px"
                    }}>
                    {/* Glowing background light */}
                    <div style={{
                      position: "absolute",
                      top: "-150px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "300px",
                      height: "300px",
                      background: "radial-gradient(circle, rgba(0, 131, 255, 0.2) 0%, transparent 70%)",
                      pointerEvents: "none"
                    }} />

                    <div style={{ position: "relative", zIndex: 2 }}>
                      <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.15)", color: "#0083FF", fontWeight: "700", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
                        Transform Your Vision
                      </span>
                      <h2 className="text-white mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
                        Ready to Build Your Next Digital Product?
                      </h2>
                      <p className="text-white-50 mb-5" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto" }}>
                        Whether you're a startup validating a new idea or an enterprise scaling digital innovation, TGAYS Technology is your trusted partner for end-to-end product development.
                      </p>

                      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <Link href="/contact-us" className="btn" 
                          style={{ 
                            minWidth: "280px", 
                            background: "#0083FF", 
                            color: "#fff", 
                            fontWeight: "600",
                            padding: "14px 28px",
                            borderRadius: "30px",
                            border: "none",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 15px rgba(0, 131, 255, 0.3)"
                          }}>
                          Book Your Free Product Strategy Consultation Today
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <QuickConsultation/>
        </div>
    </div>
  )
}

export default ProductionDevelopment;