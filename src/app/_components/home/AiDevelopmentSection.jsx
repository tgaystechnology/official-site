'use client';

import React, { useState } from 'react';
import styles from './AiDevelopmentSection.module.css';

const AiDevelopmentSection = () => {
  // FAQ accordion state
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const services = [
    {
      title: "AI Development Services",
      subtitle: "Designed for Modern Businesses",
      description: "Businesses today need more than software—they need intelligent systems that learn, adapt, and improve continuously.",
      listItems: [
        "Generative AI Solutions",
        "AI Agent Development",
        "Custom AI Software Development",
        "AI Chatbot Development",
        "Large Language Model (LLM) Applications",
        "AI-Powered Automation",
        "Machine Learning Solutions",
        "Predictive Analytics",
        "Natural Language Processing (NLP)",
        "Computer Vision Applications",
        "Recommendation Engines",
        "AI-Powered CRM & ERP Systems"
      ]
    },
    {
      title: "Generative AI Development",
      subtitle: "Focused on Business Growth",
      description: "The future belongs to businesses that can leverage Generative AI effectively. We develop intelligent applications powered by advanced language models.",
      listItems: [
        "Reduce operational costs & enhance workflows",
        "Improve customer engagement and experiences",
        "Accelerate content creation & documentation",
        "Enhance employee productivity and knowledge access",
        "Streamline internal processes with OpenAI & LLMs",
        "Deliver highly personalized customer solutions"
      ]
    },
    {
      title: "AI Agent Development",
      subtitle: "Intelligent Automation",
      description: "Modern businesses need autonomous systems that can perform complex tasks, make decisions, and collaborate with users intelligently.",
      listItems: [
        "Customer Support Automation & Routing",
        "Sales & Lead Qualification Assistant agents",
        "HR & Recruitment Assistance bots",
        "Knowledge Management & Document Querying",
        "Dynamic Workflow Automation",
        "Data Analysis & Real-Time Reporting",
        "IT Support Automation & Helpdesk routing",
        "Appointment Scheduling & Calendar Management"
      ]
    },
    {
      title: "AI Consulting for Enterprises",
      subtitle: "Practical Implementation Strategy",
      description: "Successful AI adoption requires the right strategy, technology roadmap, and implementation framework.",
      listItems: [
        "AI Readiness Assessment & Gap Analysis",
        "AI Strategy Development & ROI Planning",
        "Technology Selection & Vendor Alignment",
        "Proof of Concept (PoC) Development",
        "AI Architecture & Infrastructure Design",
        "AI Governance & Safety Frameworks",
        "Enterprise AI Integration Roadmaps & Execution"
      ]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      items: ["Patient Management", "Medical Data Analysis", "Intelligent Healthcare Assistants"]
    },
    {
      name: "Finance",
      items: ["Fraud Detection", "Risk Assessment", "Predictive Financial Analytics"]
    },
    {
      name: "Retail & Ecommerce",
      items: ["Personalized Recommendations", "Customer Behavior Analysis", "Inventory Forecasting"]
    },
    {
      name: "Manufacturing",
      items: ["Predictive Maintenance", "Process Optimization", "Quality Control Automation"]
    },
    {
      name: "Logistics",
      items: ["Route Optimization", "Demand Forecasting", "Supply Chain Intelligence"]
    }
  ];

  const faqs = [
    {
      question: "Why should businesses invest in AI development services?",
      answer: "AI helps businesses automate processes, improve efficiency, reduce costs, enhance customer experiences, and make data-driven decisions that support long-term growth."
    },
    {
      question: "What industries can benefit from AI solutions?",
      answer: "Healthcare, finance, retail, ecommerce, logistics, manufacturing, education, real estate, and professional services can all benefit significantly from AI-powered solutions."
    },
    {
      question: "How long does it take to develop an AI application?",
      answer: "The timeline depends on project complexity, required integrations, data availability, and business requirements. Most projects range from a few weeks for MVPs to several months for enterprise implementations."
    },
    {
      question: "Do you provide AI solutions for startups?",
      answer: "Yes. As an experienced AI Development Company for Startups, we help founders validate ideas, build MVPs, and launch scalable AI products efficiently."
    },
    {
      question: "Can you integrate AI into our existing software?",
      answer: "Absolutely. Our team specializes in integrating AI capabilities into existing CRM, ERP, SaaS platforms, web applications, and enterprise systems."
    }
  ];

  return (
    <section className={styles.aiSection} id="ai-solutions-section">
      <div className={styles.container}>
        
        {/* Intro Box */}
        <div className={styles.introBox}>
          <h1 className={styles.mainHeading}>Best AI Development Company in India for Startups, Enterprises & Global Businesses</h1>
          <h2 className={styles.subHeading}>Transform Your Business with Advanced AI Solutions</h2>
          <p className={styles.text}>
            At TGAYS Technology, we help startups, enterprises, and growing businesses unlock the power of Artificial Intelligence to automate operations, improve decision-making, enhance customer experiences, and accelerate growth. As the Best AI Development Company in India, we build intelligent AI-powered solutions that solve real business challenges and create measurable outcomes.
          </p>
          <p className={styles.text}>
            Whether you are looking for AI-powered automation, Generative AI applications, AI agents, machine learning platforms, predictive analytics, or enterprise-grade AI software, our experienced team delivers scalable and future-ready solutions tailored to your business goals.
          </p>
          <p className={styles.text} style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
            We serve clients across the USA, UK, Canada, Australia, Europe, the Middle East, and Asia with innovative AI solutions designed to generate ROI and competitive advantage.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>
                <span className={styles.cardTitleHighlight}>{service.title}</span> <br />
                <small style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>{service.subtitle}</small>
              </h3>
              <p className={styles.text} style={{ fontSize: '0.95rem', marginBottom: '20px', textAlign: 'left' }}>
                {service.description}
              </p>
              <ul className={styles.list}>
                {service.listItems.map((item, itemIdx) => (
                  <li key={itemIdx} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industry Specific Section */}
        <div className={styles.introBox} style={{ marginTop: '60px', marginBottom: '30px' }}>
          <h2 className={styles.mainHeading} style={{ fontSize: '2rem' }}>Custom AI Application Development Tailored to Your Business</h2>
          <p className={styles.text}>
            Every business has unique challenges. Off-the-shelf solutions often fail to address specific operational requirements. Our Custom AI Application Development services are designed to create intelligent software solutions customized for your business processes, customer expectations, and industry standards.
          </p>
        </div>

        <div className={styles.industryGrid}>
          {industries.map((ind, index) => (
            <div key={index} className={styles.industryCard}>
              <span className={styles.industryName}>{ind.name}</span>
              <ul className={styles.industryList}>
                {ind.items.map((item, itemIdx) => (
                  <li key={itemIdx} className={styles.industryItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AI Software USA & Noida Details */}
        <div className={styles.grid} style={{ marginTop: '60px' }}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}><span className={styles.cardTitleHighlight}>AI Software Company</span> USA Trust</h3>
            <p className={styles.text} style={{ fontSize: '0.95rem', textAlign: 'left' }}>
              Although headquartered in India, TGAYS Technology serves clients globally and has established itself as an AI Software Development Company USA businesses rely on for quality, innovation, and cost-effective development services.
            </p>
            <h4 style={{ fontSize: '1.1rem', margin: '15px 0 10px 0', color: '#0f172a', fontWeight: '700' }}>Why International Clients Choose Us:</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>Experienced AI Engineers</li>
              <li className={styles.listItem}>Transparent Development Process</li>
              <li className={styles.listItem}>Agile Project Management</li>
              <li className={styles.listItem}>Time Zone Flexibility</li>
              <li className={styles.listItem}>Enterprise-Grade Security Standards</li>
              <li className={styles.listItem}>Scalable Architecture</li>
              <li className={styles.listItem}>Long-Term Technology Partnership</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}><span className={styles.cardTitleHighlight}>AI Automation & Noida</span> Capabilities</h3>
            <p className={styles.text} style={{ fontSize: '0.95rem', textAlign: 'left' }}>
              Our AI Automation Development Services help organizations automate complex workflows, eliminate operational bottlenecks, and drive measurable improvements across departments.
            </p>
            <h4 style={{ fontSize: '1.1rem', margin: '15px 0 10px 0', color: '#0f172a', fontWeight: '700' }}>Benefits of AI Automation:</h4>
            <ul className={styles.list}>
              <li className={styles.listItem}>Reduced Operational Costs</li>
              <li className={styles.listItem}>Faster Process Execution & Speed</li>
              <li className={styles.listItem}>Increased Productivity & Accuracy</li>
              <li className={styles.listItem}>Better Customer Experience</li>
              <li className={styles.listItem}>Real-Time Decision Making</li>
            </ul>
            <p className={styles.text} style={{ fontSize: '0.9rem', marginTop: '15px', color: '#64748b', textAlign: 'left' }}>
              <strong>AI Development Services Noida:</strong> We combine local expertise with international project delivery experience to provide businesses worldwide with innovative AI solutions.
            </p>
          </div>
        </div>

        {/* Why TGAYS Technology */}
        <div className={styles.faqSection} style={{ background: '#f8fafc', marginTop: '60px' }}>
          <h2 className={styles.faqTitle} style={{ marginBottom: '20px' }}>Why TGAYS Technology?</h2>
          <div className={styles.grid} style={{ gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', marginBottom: '0' }}>
            <div>
              <h4 style={{ color: '#0083ff', fontWeight: '700', marginBottom: '8px' }}>Business-First AI Approach</h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.5' }}>We focus on solving business problems, not just building technology.</p>
            </div>
            <div>
              <h4 style={{ color: '#0083ff', fontWeight: '700', marginBottom: '8px' }}>Experienced AI Specialists</h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.5' }}>Our team includes AI engineers, data scientists, software architects, and business analysts.</p>
            </div>
            <div>
              <h4 style={{ color: '#0083ff', fontWeight: '700', marginBottom: '8px' }}>End-to-End Development</h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.5' }}>From strategy and consulting to development, deployment, and support, we handle the entire AI lifecycle.</p>
            </div>
            <div>
              <h4 style={{ color: '#0083ff', fontWeight: '700', marginBottom: '8px' }}>Scalable Solutions</h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.5' }}>Our AI applications are built to grow with your business and support future expansion.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions (FAQs)</h2>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem} onClick={() => toggleFaq(index)}>
              <div className={styles.faqQuestion}>
                <span>{faq.question}</span>
                <span className={`${styles.faqIcon} ${activeFaq === index ? styles.faqIconActive : ''}`}>▼</span>
              </div>
              <div 
                className={`${styles.faqAnswer} ${activeFaq === index ? styles.faqAnswerActive : ''}`}
                style={activeFaq === index ? { maxHeight: '200px' } : {}}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>Ready to Build Your AI-Powered Future?</h2>
          <p className={styles.ctaText}>
            Whether you're a startup looking to launch an innovative AI product or an enterprise seeking large-scale AI transformation, TGAYS Technology is your trusted technology partner. Partner with the Best AI Development Company in India to build intelligent solutions that drive growth, improve efficiency, and create lasting competitive advantage.
          </p>
          <a href="/contact-us" className={styles.ctaButton}>
            Schedule a Free AI Consultation Today
          </a>
        </div>

      </div>
    </section>
  );
};

export default AiDevelopmentSection;
