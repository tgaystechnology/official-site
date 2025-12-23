import React from "react";
import Image from "next/image";

// 🔹 Data object for different case studies
const caseStudyTechnologies = {
  ezshopit: {
    description: (
      <p>
        We build powerful digital solutions by selecting the best tools for every
        challenge. Our technology stack is a curated collection of modern,
        reliable, and scalable platforms that allow us to deliver secure,
        high-performance applications tailored to your business needs.
      </p>
    ),
    image: "/img/e-Commerce-platform-tu.png",
    technologies: [
      {
        id: 1,
        title: "Framework",
        icon: "git-network-outline",
        items: ["CodeIgniter (PHP)", "----", "----", "----"],
      },
      {
        id: 2,
        title: "Frontend",
        icon: "desktop-outline",
        items: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      },
      {
        id: 3,
        title: "Database",
        icon: "layers-outline",
        items: ["MySQL", "----"],
      },
      {
        id: 4,
        title: "Languages",
        icon: "language-outline",
        items: ["English", "Arabic"],
      },
      {
        id: 5,
        title: "Payment Gateway",
        icon: "logo-paypal",
        items: ["Integrated secure multi-currency payment system"],
      },
      {
        id: 6,
        title: "Other Tools",
        icon: "cog-outline",
        items: ["API integrations for shipping and currency conversion"],
      },
    ],
  },
  worthmetrix: {
    description: (
      <p>
        We build powerful digital solutions by selecting the best tools for every challenge. Our technology stack is a curated collection of modern, reliable, and scalable platforms that allow us to deliver secure, high-performance applications tailored to your business needs.
      </p>
    ),
    image: "/img/Analysis-Platform-Technologies-Used.png",
    technologies: [
      {
        id: 1,
        title: "Framework",
        icon: "git-network-outline",
        items: ["CodeIgniter (PHP)", "----", "----", "----"],
      },
      {
        id: 2,
        title: "Frontend",
        icon: "desktop-outline",
        items: ["HTML5", "CSS3", "JavaScript", "jQuery"],
      },
      {
        id: 3,
        title: "Database",
        icon: "layers-outline",
        items: ["MySQL", "----"],
      },
      // {
      //   id: 4,
      //   title: "Languages",
      //   icon: "language-outline",
      //   items: ["English", "Arabic"],
      // },
      {
        id: 4,
        title: "Payment Gateway",
        icon: "logo-paypal",
        items: ["PayPal Integration"],
      },
      {
        id: 5,
        title: "Security",
        icon: "key-outline",
        items: ["SSL Encryption & Data Validation"],
      },
    ],
  },
  evolveai: {
    description: (
      <p>
        We build powerful digital solutions by selecting the best tools for every challenge. Our technology stack is a curated collection of modern, reliable, and scalable platforms that allow us to deliver secure, high-performance applications tailored to your business needs.
      </p>
    ),
    image: "/img/Fitness-Technologies-used.png",
    technologies: [
      {
        id: 1,
        title: "Framework",
        icon: "git-network-outline",
        items: ["React Native"],
      },
      {
        id: 2,
        title: "Backend & Storage",
        icon: "desktop-outline",
        items: ["Firebase Cloud Storage"],
      },
      {
        id: 3,
        title: "Payment Gateway",
        icon: "logo-paypal",
        items: ["Stripe Integration", "----"],
      },
      {
        id: 4,
        title: "Design Framework",
        icon: "color-palette-outline",
        items: ["Figma for UI/UX Prototyping"],
      },
      {
        id: 5,
        title: "Platforms",
        icon: "ellipsis-horizontal-outline",
        items: ["Android & iOS"],
      },
    ],
  },
  'ezshopit-mobile': {
    description: (
      <p>
        We build powerful digital solutions by selecting the best tools for every challenge. Our technology stack is a curated collection of modern, reliable, and scalable platforms that allow us to deliver secure, high-performance applications tailored to your business needs.
      </p>
    ),
    image: "/img/E-Commerce-Mobile-App-Technologies-Used.png",
    technologies: [
      {
        id: 1,
        title: "Framework",
        icon: "git-network-outline",
        items: ["React Native (Android & iOS)"],
      },
      {
        id: 2,
        title: "Backend",
        icon: "desktop-outline",
        items: ["MongoDB with Ajax-based dynamic updates"],
      },
      {
        id: 3,
        title: "Payment Gateway",
        icon: "logo-paypal",
        items: ["PayPal Integration"],
      },
      {
        id: 4,
        title: "Notifications & Tracking",
        icon: "notifications-outline",
        items: ["Twilio API"],
      },
      {
        id: 5,
        title: "Platforms",
        icon: "color-palette-outline",
        items: ["Figma for prototyping and pixel-perfect implementation"],
      },
    ],
  },
  'bolton-travel': {
    description: (
      <p>
        Our technology choices are always driven by our client's goals. For this web application, we used the powerful Laravel framework to build a secure and scalable backend, ensuring the system can grow with the business. A modern frontend stack guarantees a fast, responsive, and user-friendly experience for all users.
      </p>
    ),
    image: "/img/bolton-Technologies-Used.png",
    technologies: [
      {
        id: 1,
        title: "Backend",
        icon: "desktop-outline",
        items: ["Laravel (PHP Framework)", "----", "----", "----", "----"],
      },
      {
        id: 2,
        title: "Frontend",
        icon: "desktop-outline",
        items: ["HTML5", "CSS3", "Bootstrap", "Ajax for dynamic UI updates"],
      },
      {
        id: 3,
        title: "Design & Prototyping",
        icon: "color-palette-outline",
        items: ["Figma"],
      },
      {
        id: 4,
        title: "Database",
        icon: "layers-outline",
        items: ["MySQL"],
      },
      {
        id: 5,
        title: "Platforms",
        icon: "document-outline",
        items: ["PDF and Excel Export Integrations"],
      },
    ],
  },
  'taskity': {
    description: (
      <p>
        To build the Taskity platform, we chose a technology stack known for its reliability and performance. The CodeIgniter framework provided a secure and stable backend foundation, perfect for handling complex business logic. On the frontend, we used a combination of modern technologies to create a fast, responsive, and user-friendly dashboard experience.
      </p>
    ),
    image: "/img/single-img-02.webp",
    technologies: [
      {
        id: 1,
        title: "Backend",
        icon: "desktop-outline",
        items: ["CodeIgniter (PHP Framework)", "----", "----"],
      },
      {
        id: 2,
        title: "Frontend",
        icon: "desktop-outline",
        items: ["HTML5", "CSS3", "Bootstrap", "Ajax"],
      },
      {
        id: 3,
        title: "Payment Gateway",
        icon: "logo-paypal",
        items: ["Stripe Integration"],
      },
      {
        id: 4,
        title: "Database",
        icon: "layers-outline",
        items: ["MySQL"],
      },
    ],
  },
  'martwat': {
    description: (
      <p>
        For a data-intensive ERP system like Martwat, reliability is paramount. We built the platform on a proven technology stack, using CodeIgniter for its speed and security in handling backend operations. This choice allowed us to efficiently manage complex database interactions and data handling with XML and JSON, resulting in a system that businesses can trust for their daily operations.
      </p>
    ),
    image: "/img/martwat-Technologies-Use.png",
    technologies: [
      {
        id: 1,
        title: "Backend",
        icon: "desktop-outline",
        items: ["CodeIgniter (PHP Framework)", "----", "----", "----"],
      },
      {
        id: 2,
        title: "Frontend",
        icon: "desktop-outline",
        items: ["HTML5", "CSS3", "Bootstrap", "Ajax", "JavaScript"],
      },
      {
        id: 3,
        title: "Data Handling",
        icon: "layers-outline",
        items: ["XML", "JSON"],
      },
      {
        id: 4,
        title: "Database",
        icon: "layers-outline",
        items: ["MySQL", "----"],
      },
    ],
  },

  'sjrs-school-erp': {
    description: (
      <p>
        To modernize school operations, we built the SJRS ERP on a powerful and flexible technology stack. The Laravel backend provides the performance needed for real-time data processing, while integrations with payment and SMS gateways offer the convenience that parents and staff expect. This strategic combination creates an efficient, transparent, and modern educational ecosystem.
      </p>
    ),
    image: "/img/school-Technologies-Used.png",
    technologies: [
      {
        id: 1,
        title: "Backend",
        icon: "desktop-outline",
        items: ["Laravel (PHP Framework)", "----", "----", "----", "----"],
      },
      {
        id: 2,
        title: "Frontend",
        icon: "desktop-outline",
        items: ["HTML5", "CSS3", "Bootstrap", "Ajax", "Datatable", "JavaScript"],
      },
      {
        id: 3,
        title: "Payment Gateway",
        icon: "logo-paypal",
        items: ["PayPal Integration"],
      },
      {
        id: 4,
        title: "Communication",
        icon: "mail-unread-outline",
        items: ["SMS Gateway Integration"],
      },
      {
        id: 5,
        title: "Data Formats",
        icon: "document-text-outline",
        items: ["XML", "JSON"],
      },
      {
        id: 6,
        title: "Database",
        icon: "layers-outline",
        items: ["MySQ", "----"],
      },
    ],
  },
};

const TechnologiesUsedCaseStudy = ({ slug }) => {
  const data = caseStudyTechnologies[slug];

  if (!data) {
    return null; // Or fallback UI if slug not found
  }

  return (
    <section className="prt-row padding-zero-section clearfix technologies-used">
      {/* Background Shape */}
      <div className="tech-shape">
        <Image
          src="/img/pattern-7.png"
          alt="Decorative pattern"
          width={200}
          height={200}
          className="w-full h-auto"
        />
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="section-title res-991-mt-30 text-center">
          <div className="title-heading">
            <h2 className="heading-title">
              Technologies <span className="c-primary">Used</span>
            </h2>
          </div>
        </div>

        {/* Dynamic Description */}
        <div className="prt-featured-desc mb-40 text-center">
          {data.description}
        </div>

        <div className="row">
          {/* Left Column - Image */}
          <div className="col-lg-6">
            <div className="prt-single-image-wrapper">
              <Image
                src={data.image}
                alt="Technologies illustration"
                className="img-fluid lazyloaded"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Right Column - Technologies List */}
          <div className="col-lg-6 single-tech">
            <div className="row">
              {data.technologies.map((tech) => (
                <div
                  key={tech.id}
                  className="col-lg-6"
                >
                  <div className="single-service">
                    <div className="d-flex align-items-center mb-30">
                      <div className="main-icon">
                        <ion-icon name={tech.icon}></ion-icon>
                      </div>
                      <h5 className="title">{tech.title}</h5>
                      <span className="number">
                        {tech.id < 10 ? `0${tech.id}` : tech.id}
                      </span>
                    </div>
                    <ul>
                      {tech.items.map((item, index) => (
                        <li
                          key={index}
                          style={item === "----" ? { opacity: 0 } : {}}
                        >
                          <span>
                            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesUsedCaseStudy;
