import ItStaffAugmentationBanner from '@/app/_components/services_components/it_taff_augmentation/ItStaffAugmentationBanner';
import KeyBenefits from '@/app/_components/services_components/it_taff_augmentation/KeyBenefits';
import WorldOfItSolutions from '@/app/_components/services_components/it_taff_augmentation/WorldOfItSolutions';
import StaffCategories from '@/app/_components/services_components/it_taff_augmentation/StaffCategories';
import React from 'react'
import WhyChooseOurStaff from '@/app/_components/services_components/it_taff_augmentation/WhyChooseOurStaff';
import DetailedServices from '@/app/_components/services_components/it_taff_augmentation/DetailedServices';
import ChallengesAndSolutions from '@/app/_components/services_components/it_taff_augmentation/ChallengesAndSolutions';
import ProcessWorkflow from '@/app/_components/services_components/it_taff_augmentation/ProcessWorkflow';
import IndustriesWeServe from '@/app/_components/services_components/it_taff_augmentation/IndustriesWeServe';
import StaffingComparison from '@/app/_components/services_components/it_taff_augmentation/StaffingComparison';
import ServiceTechStack from '@/app/_components/services_components/ServiceTechStack';
import PricingSection from '@/app/_components/services_components/PricingSection';
import FAQSection from '@/app/_components/services_components/FAQSection';
import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import Link from 'next/link';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/services/it-staff-augmentation' }
  });
}

const itStaffFAQs = [
  {
    id: 'faqOne',
    target: 'collapseFaqOne',
    question: 'What is IT staff augmentation?',
    answer: 'IT staff augmentation is a hiring model that allows businesses to add skilled technology professionals to existing teams on a temporary or long-term basis.'
  },
  {
    id: 'faqTwo',
    target: 'collapseFaqTwo',
    question: 'Why choose an IT staff augmentation company India?',
    answer: 'India offers access to highly skilled technology professionals, competitive pricing, and strong technical expertise across modern technologies.'
  },
  {
    id: 'faqThree',
    target: 'collapseFaqThree',
    question: 'How quickly can resources be deployed?',
    answer: 'Depending on requirements, resources can often be deployed within a few days.'
  },
  {
    id: 'faqFour',
    target: 'collapseFaqFour',
    question: 'Can augmented staff work with our internal team?',
    answer: 'Yes. They integrate seamlessly into your existing workflows and reporting structures.'
  },
  {
    id: 'faqFive',
    target: 'collapseFaqFive',
    question: 'What technologies do your developers specialize in?',
    answer: 'Our developers work with React, Angular, Node.js, Python, Java, .NET, PHP, cloud technologies, AI, and more.'
  },
  {
    id: 'faqSix',
    target: 'collapseFaqSix',
    question: 'Do you provide dedicated development teams?',
    answer: 'Yes. We offer fully managed dedicated teams tailored to your project requirements.'
  },
  {
    id: 'faqSeven',
    target: 'collapseFaqSeven',
    question: 'Is staff augmentation suitable for startups?',
    answer: 'Absolutely. Startups benefit from lower hiring costs, faster scaling, and access to experienced professionals.'
  },
  {
    id: 'faqEight',
    target: 'collapseFaqEight',
    question: 'Can we scale the team up or down?',
    answer: 'Yes. Our engagement models are flexible and designed to support changing business needs.'
  },
  {
    id: 'faqNine',
    target: 'collapseFaqNine',
    question: 'Do you sign NDAs and security agreements?',
    answer: 'Yes. We follow strict confidentiality and security protocols.'
  },
  {
    id: 'faqTen',
    target: 'collapseFaqTen',
    question: 'What industries do you serve?',
    answer: 'Healthcare, finance, real estate, eCommerce, logistics, education, manufacturing, and technology.'
  },
  {
    id: 'faqEleven',
    target: 'collapseFaqEleven',
    question: 'What is the difference between outsourcing and staff augmentation?',
    answer: 'Staff augmentation adds resources directly to your team, while outsourcing transfers project responsibility to an external vendor.'
  },
  {
    id: 'faqTwelve',
    target: 'collapseFaqTwelve',
    question: 'How are developers selected?',
    answer: 'Candidates undergo technical screening, assessments, and interviews before being presented to clients.'
  },
  {
    id: 'faqThirteen',
    target: 'collapseFaqThirteen',
    question: 'Do you provide project managers?',
    answer: 'Yes. We can provide project managers, scrum masters, and technical leads when required.'
  },
  {
    id: 'faqFourteen',
    target: 'collapseFaqFourteen',
    question: 'What engagement models do you offer?',
    answer: 'Full-time, part-time, dedicated teams, and project-based engagements.'
  },
  {
    id: 'faqFifteen',
    target: 'collapseFaqFifteen',
    question: 'Do you provide ongoing support?',
    answer: 'Yes. We offer continuous support throughout the engagement period.'
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
    highlight: true,
  },
];

const ItStaffAugmentation = () => {
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
        <ItStaffAugmentationBanner/>
        <div className="nunito-page-content">
          <WorldOfItSolutions/>
          <DetailedServices/>
          <ChallengesAndSolutions/>
          <ProcessWorkflow/>
          <KeyBenefits/>
          <StaffCategories/>
          <IndustriesWeServe/>
          <StaffingComparison/>
          <WhyChooseOurStaff/>
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
                  { icon: '', text: 'React.js' },
                  { icon: '', text: 'Angular' },
                  { icon: '', text: 'Vue.js' },
                  { icon: '', text: 'Next.js' },
                  { icon: '', text: 'JavaScript' },
                  { icon: '', text: 'HTML5' },
                  { icon: '', text: 'CSS3' }
                ],
                minItems: 7,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
              {
                title: 'Backend & Databases',
                highlight: true,
                items: [
                  { icon: '', text: 'Node.js' },
                  { icon: '', text: 'Python' },
                  { icon: '', text: 'Java' },
                  { icon: '', text: '.NET' },
                  { icon: '', text: 'PHP' }
                ],
                minItems: 7,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
              {
                title: 'Cloud & Emerging Tech',
                items: [
                  { icon: '', text: 'AWS' },
                  { icon: '', text: 'Microsoft Azure' },
                  { icon: '', text: 'Google Cloud' },
                  { icon: '', text: 'Artificial Intelligence' },
                  { icon: '', text: 'Machine Learning' },
                  { icon: '', text: 'Generative AI' },
                  { icon: '', text: 'DevOps Automation' }
                ],
                minItems: 7,
                ctaText: 'Consult Now',
                ctaLink: '/contact-us',
              },
            ]}
          />
          <PricingSection title="Transparent Pricing for On-Demand Talent" plans={pricingPlans}/>
          <FAQSection faqs={itStaffFAQs}/>
          
          {/* Strong Call to Action Section */}
          <section className="bg-cover free-call-section" style={{ background: "#060913", padding: "120px 0" }}>
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
                      background: "radial-gradient(circle, rgba(0, 131, 255, 0.25) 0%, transparent 70%)",
                      pointerEvents: "none"
                    }} />

                    <div style={{ position: "relative", zIndex: 2 }}>
                      <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.15)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
                        Ready to Scale Your Team?
                      </span>
                      <h2 className="text-white mb-4" style={{ fontSize: "2.3rem", fontWeight: "800", letterSpacing: "-0.5px" }}>
                        Build Your Dream Development Team Faster
                      </h2>
                      <p className="text-white-50 mb-3" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto 15px auto" }}>
                        Stop losing valuable time searching for talent. Partner with TGAYS Technology and gain immediate access to experienced developers, engineers, and technology specialists who can help accelerate growth and innovation.
                      </p>
                      <p className="text-white-50 mb-5" style={{ fontSize: "1.05rem", lineHeight: "1.7", maxWidth: "800px", margin: "0 auto" }}>
                        Whether you're a startup building an MVP, an enterprise scaling operations, or a company seeking specialized technical expertise, our staff augmentation solutions are designed to help you succeed.
                      </p>

                      <div className="d-flex flex-wrap justify-content-center align-items-center gap-3" style={{ gap: "15px" }}>
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
                          Hire Dedicated Developers Today
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
                          Book a Free Consultation
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
                          Request a Custom Staffing Proposal
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

export default ItStaffAugmentation;