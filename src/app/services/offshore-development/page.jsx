import OffshoreDevelopmentBanner from '@/app/_components/services_components/offshore/OffshoreDevelopmentBanner';
import WhyChooseOffshore from '@/app/_components/services_components/offshore/WhyChooseOffshore';
import OffshoreServicesTabs from '@/app/_components/services_components/offshore/OffshoreServicesTabs';
import OffshoreChallenges from '@/app/_components/services_components/offshore/OffshoreChallenges';
import OffshoreProcess from '@/app/_components/services_components/offshore/OffshoreProcess';
import OffshoreBenefits from '@/app/_components/services_components/offshore/OffshoreBenefits';
import OffshoreIndustries from '@/app/_components/services_components/offshore/OffshoreIndustries';
import OffshoreTrust from '@/app/_components/services_components/offshore/OffshoreTrust';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import FAQSection from '@/app/_components/services_components/FAQSection';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import Link from 'next/link';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/offshore-development' } // This should match exactly what's in your database
  });
}

const offshoreFAQs = [
  {
    id: 'offshoreFaqOne',
    target: 'collapseOffshoreOne',
    question: '1. What is an offshore development company?',
    answer: 'An offshore development company provides software development services from a different country, allowing businesses to access skilled talent and reduce costs.'
  },
  {
    id: 'offshoreFaqTwo',
    target: 'collapseOffshoreTwo',
    question: '2. Why hire offshore developers in India?',
    answer: 'India offers a large talent pool, competitive pricing, strong technical expertise, and global delivery capabilities.'
  },
  {
    id: 'offshoreFaqThree',
    target: 'collapseOffshoreThree',
    question: '3. How much can offshore development reduce costs?',
    answer: 'Most businesses save between 40% and 60% compared to building equivalent in-house teams.'
  },
  {
    id: 'offshoreFaqFour',
    target: 'collapseOffshoreFour',
    question: '4. Is offshore development suitable for startups?',
    answer: 'Yes. Startups can quickly access specialized skills without investing heavily in recruitment and infrastructure.'
  },
  {
    id: 'offshoreFaqFive',
    target: 'collapseOffshoreFive',
    question: '5. Can I hire a dedicated offshore development team?',
    answer: 'Absolutely. We provide fully dedicated teams tailored to your project requirements.'
  },
  {
    id: 'offshoreFaqSix',
    target: 'collapseOffshoreSix',
    question: '6. How do you ensure communication and transparency?',
    answer: 'We use agile methodologies, regular meetings, sprint reviews, and project management tools.'
  },
  {
    id: 'offshoreFaqSeven',
    target: 'collapseOffshoreSeven',
    question: '7. What industries do you specialize in?',
    answer: 'Healthcare, fintech, SaaS, eCommerce, real estate, education, and enterprise software.'
  },
  {
    id: 'offshoreFaqEight',
    target: 'collapseOffshoreEight',
    question: '8. Do you provide NDA protection?',
    answer: 'Yes. All projects are protected through confidentiality agreements and secure processes.'
  },
  {
    id: 'offshoreFaqNine',
    target: 'collapseOffshoreNine',
    question: '9. What engagement models do you offer?',
    answer: 'Dedicated teams, staff augmentation, fixed-price projects, and time & material contracts.'
  },
  {
    id: 'offshoreFaqTen',
    target: 'collapseOffshoreTen',
    question: '10. Can you scale my team quickly?',
    answer: 'Yes. Additional developers and specialists can be added based on project needs.'
  },
  {
    id: 'offshoreFaqEleven',
    target: 'collapseOffshoreEleven',
    question: '11. Do you provide post-launch support?',
    answer: 'Yes. We offer maintenance, upgrades, monitoring, and ongoing support.'
  },
  {
    id: 'offshoreFaqTwelve',
    target: 'collapseOffshoreTwelve',
    question: '12. Which countries do you serve?',
    answer: 'We serve businesses across the USA, UK, Australia, Dubai, Europe, and globally.'
  }
];

const OffshoreDevelopment = () => {
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
        <OffshoreDevelopmentBanner/>
        
        <div className="nunito-page-content">
          <WhyChooseOffshore/>
          <OffshoreServicesTabs/>
          <OffshoreBenefits/>
          <OffshoreChallenges/>
          <OffshoreProcess/>
          <OffshoreIndustries/>
          <OffshoreTrust/>
          <AnimatedTestimonials autoplay={true}/>
          
          <ServiceTechStack
            heading={
              <>
                CUTTING-EDGE <span className="c-primary">TECH STACK</span> We Use
              </>
            }
            description="Our engineers deploy top-tier languages, systems, and cloud providers to power modern offshore engineering."
            cards={[
              {
                title: 'Frontend Frameworks',
                items: [
                  { icon: '', text: 'React.js' },
                  { icon: '', text: 'Angular' },
                  { icon: '', text: 'Vue.js' },
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
                  { icon: '', text: 'Docker & Kubernetes' },
                  { icon: '', text: 'CI/CD Pipelines' },
                  { icon: '', text: 'OpenAI API & Generative AI' }
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
            ]}
          />
          
          <FAQSection faqs={offshoreFAQs}/>
          
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
                        Scale Your Capacity
                      </span>
                      <h2 className="text-white mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
                        Ready to Build Your Offshore Development Team?
                      </h2>
                      <p className="text-white-50 mb-5" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto" }}>
                        Partner with TGAYS Technology and gain access to world-class developers, flexible engagement models, and scalable technology solutions designed for growth. Whether you're a startup launching an MVP, an enterprise modernizing operations, or a SaaS company accelerating innovation, we can help you achieve your goals faster and more cost-effectively.
                      </p>

                      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
                        <Link href="/contact-us" className="btn" 
                          style={{ 
                            minWidth: "220px", 
                            background: "#0083FF", 
                            color: "#fff", 
                            fontWeight: "600",
                            padding: "14px 28px",
                            borderRadius: "30px",
                            border: "none",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 15px rgba(0, 131, 255, 0.3)"
                          }}>
                          Get a Free Quote
                        </Link>
                        <Link href="/contact-us" className="btn" 
                          style={{ 
                            minWidth: "220px", 
                            background: "#ff5e3a", 
                            color: "#fff", 
                            fontWeight: "600",
                            padding: "14px 28px",
                            borderRadius: "30px",
                            border: "none",
                            transition: "all 0.3s ease",
                            boxShadow: "0 4px 15px rgba(255, 94, 58, 0.3)"
                          }}>
                          Hire Offshore Developers Now
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

export default OffshoreDevelopment;