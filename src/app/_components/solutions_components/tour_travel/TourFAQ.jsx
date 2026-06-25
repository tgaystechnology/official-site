'use client'
import React from 'react';
import FAQSection from '@/app/_components/services_components/FAQSection';

const TourFAQ = () => {
  const faqs = [
    {
      id: 'faqOne',
      target: 'collapseFaqOne',
      question: "What is a travel portal development company?",
      answer: "A travel portal development company specializes in creating online travel booking platforms, management systems, and travel technology solutions tailored to agencies and tour operators."
    },
    {
      id: 'faqTwo',
      target: 'collapseFaqTwo',
      question: "What is included in a Tour & Travel Management System?",
      answer: "It includes booking management, CRM, ERP capabilities, supplier management, reporting dashboards, payment gateways, and dedicated customer portals."
    },
    {
      id: 'faqThree',
      target: 'collapseFaqThree',
      question: "Can you build a custom travel portal?",
      answer: "Yes, we develop fully customized travel software based entirely on your specific business requirements and workflows."
    },
    {
      id: 'faqFour',
      target: 'collapseFaqFour',
      question: "Do you provide B2B travel software?",
      answer: "Yes, we build robust B2B travel management software complete with agent portals, credit management, and commission tracking."
    },
    {
      id: 'faqFive',
      target: 'collapseFaqFive',
      question: "Can the system integrate with third-party APIs?",
      answer: "Yes, we can seamlessly integrate with flight, hotel, transfer, payment, and CRM APIs from various global providers."
    },
    {
      id: 'faqSix',
      target: 'collapseFaqSix',
      question: "Is the software cloud-based?",
      answer: "Yes, we provide highly secure, scalable, cloud-based travel management software solutions."
    },
    {
      id: 'faqSeven',
      target: 'collapseFaqSeven',
      question: "Do you develop mobile apps?",
      answer: "Yes, we develop native and cross-platform travel applications for both Android and iOS devices."
    },
    {
      id: 'faqEight',
      target: 'collapseFaqEight',
      question: "Can multiple users access the platform?",
      answer: "Yes, our systems include role-based multi-user access to ensure proper security and team collaboration."
    },
    {
      id: 'faqNine',
      target: 'collapseFaqNine',
      question: "How secure is the system?",
      answer: "We implement advanced security measures, end-to-end encryption, and adhere to secure hosting practices to protect sensitive data."
    },
    {
      id: 'faqTen',
      target: 'collapseFaqTen',
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive post-launch maintenance, updates, and dedicated technical support plans."
    },
    {
      id: 'faqEleven',
      target: 'collapseFaqEleven',
      question: "Can I manage holiday packages?",
      answer: "Yes, dynamic package creation, customization, and pricing management are core features of our platforms."
    },
    {
      id: 'faqTwelve',
      target: 'collapseFaqTwelve',
      question: "Can the software scale with business growth?",
      answer: "Absolutely. Our cloud-native systems are specifically designed to scale effortlessly as your booking volume and business grows."
    },
    {
      id: 'faqThirteen',
      target: 'collapseFaqThirteen',
      question: "What industries benefit from travel software?",
      answer: "Travel agencies, OTAs, DMCs, corporate travel companies, hospitality providers, and transportation companies."
    },
    {
      id: 'faqFourteen',
      target: 'collapseFaqFourteen',
      question: "How much does development cost?",
      answer: "Costs vary based on the required functionality, complexity, API integrations, and overall project scope. Contact us for a custom quote."
    },
    {
      id: 'faqFifteen',
      target: 'collapseFaqFifteen',
      question: "How do I get started?",
      answer: "Contact our team for a free consultation and project assessment. We will help you define the perfect travel technology strategy."
    }
  ];

  return <FAQSection faqs={faqs} />;
};

export default TourFAQ;
