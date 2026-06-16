import M365DevelopmentBanner from '@/app/_components/services_components/m365_development/M365DevelopmentBanner';
import M365SolutionsSection from '@/app/_components/services_components/m365_development/M365SolutionsSection';
import M365DevelopmentServices from '@/app/_components/services_components/m365_development/M365DevelopmentServices';
import WhyChooseM365 from '@/app/_components/services_components/m365_development/WhyChooseM365';
import M365Challenges from '@/app/_components/services_components/m365_development/M365Challenges';
import M365Process from '@/app/_components/services_components/m365_development/M365Process';
import M365Industries from '@/app/_components/services_components/m365_development/M365Industries';
import M365Trust from '@/app/_components/services_components/m365_development/M365Trust';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import FAQSection from '@/app/_components/services_components/FAQSection';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import Link from 'next/link';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/m365-development' }
  });
}

const m365FAQs = [
  {
    id: 'm365FaqOne',
    target: 'collapseM365One',
    question: 'What services do you provide under Microsoft 365 development?',
    answer: 'We offer implementation, migration, Power Platform development, SharePoint solutions, Teams integrations, workflow automation, and BI solutions.'
  },
  {
    id: 'm365FaqTwo',
    target: 'collapseM365Two',
    question: 'Do you provide Microsoft 365 migration services?',
    answer: 'Yes. We handle complete migration from legacy platforms and on-premises environments.'
  },
  {
    id: 'm365FaqThree',
    target: 'collapseM365Three',
    question: 'Can you build custom Power Apps?',
    answer: 'Absolutely. We develop custom business applications tailored to your processes.'
  },
  {
    id: 'm365FaqFour',
    target: 'collapseM365Four',
    question: 'What industries do you serve?',
    answer: 'Healthcare, finance, real estate, manufacturing, education, retail, and professional services.'
  },
  {
    id: 'm365FaqFive',
    target: 'collapseM365Five',
    question: 'Do you provide Power BI development services?',
    answer: 'Yes. We create dashboards, reports, and advanced analytics solutions.'
  },
  {
    id: 'm365FaqSix',
    target: 'collapseM365Six',
    question: 'How long does implementation take?',
    answer: 'Project timelines vary depending on complexity and scope.'
  },
  {
    id: 'm365FaqSeven',
    target: 'collapseM365Seven',
    question: 'Can Microsoft 365 automate business processes?',
    answer: 'Yes. Power Automate can streamline approvals, notifications, document management, and more.'
  },
  {
    id: 'm365FaqEight',
    target: 'collapseM365Eight',
    question: 'Do you provide post-launch support?',
    answer: 'Yes. We offer ongoing maintenance and optimization.'
  },
  {
    id: 'm365FaqNine',
    target: 'collapseM365Nine',
    question: 'Can you integrate Microsoft 365 with existing systems?',
    answer: 'Yes. We integrate CRM, ERP, HRMS, and third-party platforms.'
  },
  {
    id: 'm365FaqTen',
    target: 'collapseM365Ten',
    question: 'Do you work with international clients?',
    answer: 'Yes. We serve businesses globally across multiple industries.'
  },
  {
    id: 'm365FaqEleven',
    target: 'collapseM365Eleven',
    question: 'Is Microsoft 365 secure?',
    answer: 'Microsoft 365 provides enterprise-grade security, compliance, and governance capabilities.'
  },
  {
    id: 'm365FaqTwelve',
    target: 'collapseM365Twelve',
    question: 'What is Power Platform?',
    answer: 'A suite of low-code tools that enables automation, analytics, and application development.'
  },
  {
    id: 'm365FaqThirteen',
    target: 'collapseM365Thirteen',
    question: 'Do you offer managed services?',
    answer: 'Yes. We are a trusted Microsoft 365 Managed Services Provider.'
  },
  {
    id: 'm365FaqFourteen',
    target: 'collapseM365Fourteen',
    question: 'Can you modernize legacy systems?',
    answer: 'Yes. We help organizations digitally transform legacy infrastructure.'
  },
  {
    id: 'm365FaqFifteen',
    target: 'collapseM365Fifteen',
    question: 'How do we get started?',
    answer: 'Schedule a free consultation with our Microsoft experts.'
  }
];

const m365Development = () => {
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
        <M365DevelopmentBanner/>
        
        <div className="nunito-page-content">
          <WhyChooseM365/>
          <M365DevelopmentServices/>
          <M365SolutionsSection/>
          <M365Challenges/>
          <M365Process/>
          <M365Industries/>
          <M365Trust/>
          <AnimatedTestimonials autoplay={true}/>
          
          <ServiceTechStack
            heading={
              <>
                CUTTING-EDGE <span className="c-primary">TECH STACK</span> We Use
              </>
            }
            description="Our specialists build scalable Microsoft ecosystem solutions using modern tools and framework APIs."
            cards={[
              {
                title: 'Core Microsoft Tools',
                items: [
                  { icon: '', text: 'SharePoint Online' },
                  { icon: '', text: 'Microsoft Teams Toolkit' },
                  { icon: '', text: 'Power Apps' },
                  { icon: '', text: 'Power Automate' },
                  { icon: '', text: 'Power BI' },
                  { icon: '', text: 'Microsoft Graph API' }
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
              {
                title: 'Frontend & UI',
                highlight: true,
                items: [
                  { icon: '', text: 'React.js (SPFx)' },
                  { icon: '', text: 'TypeScript' },
                  { icon: '', text: 'Fluent UI / UI Fabric' },
                  { icon: '', text: 'HTML5 & SCSS' },
                  { icon: '', text: 'Office UI Add-ins' }
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
              {
                title: 'Cloud & Identity',
                items: [
                  { icon: '', text: 'Azure Active Directory' },
                  { icon: '', text: 'Azure Functions' },
                  { icon: '', text: 'Microsoft Entra ID' },
                  { icon: '', text: 'Azure Logic Apps' },
                  { icon: '', text: 'Microsoft 365 Compliance Tools' }
                ],
                minItems: 6,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
            ]}
          />
          
          <FAQSection faqs={m365FAQs}/>
          
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
                        Modernize Your Digital Workplace
                      </span>
                      <h2 className="text-white mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
                        Ready to Modernize Your Business with Microsoft 365?
                      </h2>
                      <p className="text-white-50 mb-5" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "700px", margin: "0 auto" }}>
                        Partner with TGAYS Technology and unlock the full power of Microsoft 365, Power Platform, SharePoint, Teams, and business automation.
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
                          Get Free Consultation
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
                          Talk to Microsoft Experts
                        </Link>
                        <Link href="/contact-us" className="btn" 
                          style={{ 
                            minWidth: "220px", 
                            background: "rgba(255, 255, 255, 0.05)", 
                            color: "#fff", 
                            fontWeight: "600",
                            padding: "14px 28px",
                            borderRadius: "30px",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            transition: "all 0.3s ease"
                          }}>
                          Request a Project Estimate
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

export default m365Development;