import React from 'react';
import FAQSection from '@/app/_components/services_components/FAQSection';

const EcommerceFAQ = () => {
  const faqs = [
    {
      question: "What is an ecommerce development company?",
      answer: "An ecommerce development company designs, develops, and maintains online commerce platforms for businesses."
    },
    {
      question: "How much does ecommerce website development cost?",
      answer: "Costs depend on project scope, features, integrations, and customization requirements."
    },
    {
      question: "Do you develop custom ecommerce platforms?",
      answer: "Yes, we provide fully customized ecommerce software development solutions."
    },
    {
      question: "Can you build a multi-vendor marketplace?",
      answer: "Yes, we specialize in multi vendor ecommerce platform development."
    },
    {
      question: "Do you provide B2B ecommerce solutions?",
      answer: "Yes, we build B2B commerce platforms with advanced business functionality."
    },
    {
      question: "Can the platform integrate with ERP systems?",
      answer: "Absolutely. We support ERP, CRM, accounting, and third-party integrations."
    },
    {
      question: "Is the platform mobile-friendly?",
      answer: "Yes, all solutions are optimized for mobile devices."
    },
    {
      question: "Which payment gateways do you support?",
      answer: "We integrate Stripe, PayPal, Razorpay, Authorize.Net, and many others."
    },
    {
      question: "How secure are your ecommerce solutions?",
      answer: "We implement SSL, encryption, secure authentication, and compliance best practices."
    },
    {
      question: "Can I manage inventory from multiple locations?",
      answer: "Yes, our inventory management system supports multi-location inventory control."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer ongoing maintenance and support packages."
    },
    {
      question: "How long does development take?",
      answer: "Most projects range from 6–20 weeks depending on complexity."
    },
    {
      question: "Can you migrate my existing ecommerce store?",
      answer: "Yes, we provide migration services with minimal downtime."
    },
    {
      question: "Do you develop ecommerce mobile apps?",
      answer: "Yes, native and cross-platform mobile commerce applications."
    },
    {
      question: "How do I get started?",
      answer: "Contact our ecommerce experts for a free consultation and project assessment."
    }
  ];

  return <FAQSection faqs={faqs} />;
};

export default EcommerceFAQ;
