import CrmDevelopmentBanner from '@/app/_components/services_components/customized_crm_development/CrmDevelopmentBanner';
import WhyChooseCrm from '@/app/_components/services_components/customized_crm_development/WhyChooseCrm';
import CrmServicesTabs from '@/app/_components/services_components/customized_crm_development/CrmServicesTabs';
import CrmBenefits from '@/app/_components/services_components/customized_crm_development/CrmBenefits';
import CrmChallenges from '@/app/_components/services_components/customized_crm_development/CrmChallenges';
import CrmProcess from '@/app/_components/services_components/customized_crm_development/CrmProcess';
import CrmIndustries from '@/app/_components/services_components/customized_crm_development/CrmIndustries';
import CrmTrust from '@/app/_components/services_components/customized_crm_development/CrmTrust';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import FAQSection from '@/app/_components/services_components/FAQSection';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import Link from 'next/link';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/customized-crm-development' } // This should match exactly what's in your database
  });
}

const crmFAQs = [
  {
    id: 'crmFaqOne',
    target: 'collapseCrmOne',
    question: '1. What is custom CRM development?',
    answer: 'Custom CRM development is the process of building a CRM platform specifically tailored to a company\'s business processes, workflows, and customer management requirements.'
  },
  {
    id: 'crmFaqTwo',
    target: 'collapseCrmTwo',
    question: '2. Why choose a custom CRM instead of a ready-made CRM?',
    answer: 'Custom CRM systems provide greater flexibility, scalability, and functionality while aligning perfectly with business operations.'
  },
  {
    id: 'crmFaqThree',
    target: 'collapseCrmThree',
    question: '3. How much does CRM development cost?',
    answer: 'CRM development cost depends on project complexity, features, integrations, users, and technology stack.'
  },
  {
    id: 'crmFaqFour',
    target: 'collapseCrmFour',
    question: '4. How long does it take to build a CRM?',
    answer: 'Most CRM projects take between 8 and 24 weeks depending on scope and requirements.'
  },
  {
    id: 'crmFaqFive',
    target: 'collapseCrmFive',
    question: '5. Can you integrate CRM with existing software?',
    answer: 'Yes. We integrate CRM systems with ERP, accounting, payment gateways, marketing platforms, and third-party tools.'
  },
  {
    id: 'crmFaqSix',
    target: 'collapseCrmSix',
    question: '6. Do you offer cloud-based CRM development?',
    answer: 'Yes. We build secure cloud-native CRM applications using AWS, Azure, and Google Cloud.'
  },
  {
    id: 'crmFaqSeven',
    target: 'collapseCrmSeven',
    question: '7. Can startups benefit from custom CRM solutions?',
    answer: 'Absolutely. Startups can streamline operations and scale efficiently with custom CRM platforms.'
  },
  {
    id: 'crmFaqEight',
    target: 'collapseCrmEight',
    question: '8. Do you provide CRM mobile applications?',
    answer: 'Yes. We develop CRM mobile apps for Android and iOS.'
  },
  {
    id: 'crmFaqNine',
    target: 'collapseCrmNine',
    question: '9. Can I hire dedicated CRM developers in India?',
    answer: 'Yes. We provide dedicated CRM developers, project managers, QA engineers, and support specialists.'
  },
  {
    id: 'crmFaqTen',
    target: 'collapseCrmTen',
    question: '10. What industries do you serve?',
    answer: 'Healthcare, real estate, SaaS, fintech, eCommerce, education, manufacturing, and professional services.'
  },
  {
    id: 'crmFaqEleven',
    target: 'collapseCrmEleven',
    question: '11. Do you provide CRM support after deployment?',
    answer: 'Yes. We offer maintenance, upgrades, optimization, monitoring, and support services.'
  },
  {
    id: 'crmFaqTwelve',
    target: 'collapseCrmTwelve',
    question: '12. Is custom CRM secure?',
    answer: 'Yes. We implement enterprise-level security protocols, encryption, access controls, and compliance standards.'
  }
];

const CustomizedCRMDevelopment = () => {
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
          .talk-expert-btn {
            border: 2px solid rgba(255, 255, 255, 0.2) !important;
            transition: all 0.3s ease !important;
          }
          .talk-expert-btn:hover {
            border-color: #fff !important;
          }
        `}} />
        <CrmDevelopmentBanner/>
        
        <div className="nunito-page-content">
          <WhyChooseCrm/>
          <CrmServicesTabs/>
          <CrmBenefits/>
          <CrmChallenges/>
          <CrmProcess/>
          <CrmIndustries/>
          <CrmTrust/>
          <AnimatedTestimonials autoplay={true}/>
          
          <ServiceTechStack
            heading={
              <>
                CUTTING-EDGE <span className="c-primary">TECH STACK</span> We Use
              </>
            }
            description="We build customer tools using secure backend languages, reactive client components, and elastic cloud database structures."
            cards={[
              {
                title: 'Frontend Frameworks',
                items: [
                  { icon: '', text: 'React.js' },
                  { icon: '', text: 'Angular' },
                  { icon: '', text: 'Vue.js' },
                  { icon: '', text: 'HTML5 & CSS3' },
                  { icon: '', text: 'Bootstrap & Tailwind' },
                  { icon: '', text: 'Figma Design Files' }
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
                  { icon: '', text: '.NET Core' },
                  { icon: '', text: 'PHP & Laravel' },
                  { icon: '', text: 'Python & Django' },
                  { icon: '', text: 'MySQL & PostgreSQL' },
                  { icon: '', text: 'MongoDB & SQL Server' }
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
                  { icon: '', text: 'REST API Webhooks' },
                  { icon: '', text: 'Enterprise ERP Connects' },
                  { icon: '', text: 'Docker Containers' }
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
            ]}
          />
          
          <FAQSection faqs={crmFAQs}/>
          
          {/* Strong Call to Action Section */}
          <section className="bg-cover free-call-section" style={{ background: "#060913", padding: "100px 0" }} role="region" aria-labelledby="crm-cta-heading">
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
                        Transform Customer Relationships
                      </span>
                      <h2 id="crm-cta-heading" className="text-white mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
                        Ready to Transform Customer Relationships and Accelerate Growth?
                      </h2>
                      <p className="text-white-50 mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto" }}>
                        Your CRM should be more than a database—it should be a growth engine that drives sales, improves customer experiences, and increases operational efficiency. Partner with TGAYS Technology to build a CRM platform tailored to your business goals and future growth plans.
                      </p>

                      <div className="get-started-checklist mb-5 d-flex flex-wrap justify-content-center gap-4" style={{ gap: "20px" }}>
                        <span className="text-white d-flex align-items-center" style={{ fontSize: "0.95rem" }}><strong className="text-primary me-2" style={{ color: "#0083ff" }}>✓</strong> Free CRM Consultation</span>
                        <span className="text-white d-flex align-items-center" style={{ fontSize: "0.95rem" }}><strong className="text-primary me-2" style={{ color: "#0083ff" }}>✓</strong> Project Assessment</span>
                        <span className="text-white d-flex align-items-center" style={{ fontSize: "0.95rem" }}><strong className="text-primary me-2" style={{ color: "#0083ff" }}>✓</strong> Feature Recommendations</span>
                        <span className="text-white d-flex align-items-center" style={{ fontSize: "0.95rem" }}><strong className="text-primary me-2" style={{ color: "#0083ff" }}>✓</strong> Development Roadmap</span>
                        <span className="text-white d-flex align-items-center" style={{ fontSize: "0.95rem" }}><strong className="text-primary me-2" style={{ color: "#0083ff" }}>✓</strong> Cost Estimation</span>
                        <span className="text-white d-flex align-items-center" style={{ fontSize: "0.95rem" }}><strong className="text-primary me-2" style={{ color: "#0083ff" }}>✓</strong> Dedicated CRM Experts</span>
                      </div>

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
                          Request a Free Consultation
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
                          Build My Custom CRM
                        </Link>
                        <Link href="/contact-us" className="btn talk-expert-btn" 
                          style={{ 
                            minWidth: "220px", 
                            background: "transparent", 
                            color: "#fff", 
                            fontWeight: "600",
                            padding: "14px 28px",
                            borderRadius: "30px",
                          }}>
                          Talk to a CRM Expert
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

export default CustomizedCRMDevelopment;