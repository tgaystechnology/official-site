'use client'
import React from 'react';
import FAQSection from '@/app/_components/services_components/FAQSection';

const HealthcareFAQ = () => {
  const faqs = [
    {
      id: 'faqOne',
      target: 'collapseFaqOne',
      question: "What is a healthcare software development company?",
      answer: "A healthcare software development company specializes in creating secure, compliant, and scalable digital solutions like Hospital Management Systems, EHRs, and telemedicine platforms."
    },
    {
      id: 'faqTwo',
      target: 'collapseFaqTwo',
      question: "Do you develop HIPAA-compliant software?",
      answer: "Yes, we ensure all healthcare applications are built strictly adhering to HIPAA, GDPR, and other regional data protection regulations."
    },
    {
      id: 'faqThree',
      target: 'collapseFaqThree',
      question: "Can you build a custom telemedicine app?",
      answer: "Yes, we develop fully customized telemedicine platforms featuring video consultations, e-prescriptions, and appointment scheduling."
    },
    {
      id: 'faqFour',
      target: 'collapseFaqFour',
      question: "What is included in a Hospital Management System?",
      answer: "It includes patient management, appointment scheduling, billing, pharmacy, laboratory, and resource allocation modules."
    },
    {
      id: 'faqFive',
      target: 'collapseFaqFive',
      question: "Can the system integrate with third-party APIs?",
      answer: "Yes, we can seamlessly integrate with payment gateways, insurance providers, medical devices, and external EHR systems."
    },
    {
      id: 'faqSix',
      target: 'collapseFaqSix',
      question: "Is the software cloud-based?",
      answer: "Yes, we provide highly secure, scalable, cloud-based healthcare software hosted on platforms like AWS or Azure."
    },
    {
      id: 'faqSeven',
      target: 'collapseFaqSeven',
      question: "Do you develop mobile apps for patients?",
      answer: "Yes, we develop native and cross-platform healthcare applications for both Android and iOS devices."
    },
    {
      id: 'faqEight',
      target: 'collapseFaqEight',
      question: "Can multiple users access the platform?",
      answer: "Yes, our systems include role-based multi-user access (Doctors, Nurses, Admins, Patients) to ensure strict data security."
    },
    {
      id: 'faqNine',
      target: 'collapseFaqNine',
      question: "How secure is the patient data?",
      answer: "We implement advanced security measures, end-to-end encryption, and adhere to secure hosting practices to protect sensitive PHI (Protected Health Information)."
    },
    {
      id: 'faqTen',
      target: 'collapseFaqTen',
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive post-launch maintenance, compliance updates, and dedicated technical support plans."
    },
    {
      id: 'faqEleven',
      target: 'collapseFaqEleven',
      question: "Do you develop EHR/EMR systems?",
      answer: "Yes, we build secure Electronic Health Record (EHR) and Electronic Medical Record (EMR) solutions for centralized patient data."
    },
    {
      id: 'faqTwelve',
      target: 'collapseFaqTwelve',
      question: "Can the software scale with clinic growth?",
      answer: "Absolutely. Our cloud-native systems are specifically designed to scale effortlessly as your patient volume and facility grows."
    },
    {
      id: 'faqThirteen',
      target: 'collapseFaqThirteen',
      question: "What healthcare sectors do you serve?",
      answer: "We serve hospitals, clinics, telemedicine providers, health startups, diagnostic labs, pharmacies, and insurance companies."
    },
    {
      id: 'faqFourteen',
      target: 'collapseFaqFourteen',
      question: "How much does development cost?",
      answer: "Costs vary based on the required functionality, compliance needs, API integrations, and overall project scope. Contact us for a custom quote."
    },
    {
      id: 'faqFifteen',
      target: 'collapseFaqFifteen',
      question: "How do I get started?",
      answer: "Contact our team for a free consultation. We will assess your clinical requirements and propose a tailored healthcare technology strategy."
    }
  ];

  return <FAQSection faqs={faqs} />;
};

export default HealthcareFAQ;
