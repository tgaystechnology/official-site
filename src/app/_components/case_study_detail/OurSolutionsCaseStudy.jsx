import React from "react";
import Image from "next/image";

// Centralized Data Object
const caseStudyData = {
  ezshopit: {
    images: {
      mobile: "/img/case-img18.png",
      desktop: "/img/case-img1823.png",
    },
    heading: {
      main: "Our",
      highlight: "Solutions",
    },
    solutions: [
      {
        title: "1. Advanced E-Commerce Architecture",
        points: [
          "Developed using CodeIgniter to ensure stability, performance, and flexibility for future upgrades.",
        ],
      },
      {
        title: "2. Vendor & Inventory Management",
        points: [
          "Created separate vendor dashboards for product listing, inventory updates, and shipping management.",
          "Implemented real-time stock status updates.",
        ],
      },
      {
        title: "3. Multi-Currency & Bilingual Capability",
        points: [
          "Integrated automatic currency conversion and dual-language support (English & Arabic) to cater to local and international customers.",
        ],
      },
      {
        title: "4. Order Tracking System",
        points: [
          "Designed a complete workflow: Customer → Vendor → Warehouse → Delivery Personnel → Customer Delivery Confirmation.",
          "Enabled customers to track orders and shipping statuses instantly.",
        ],
      },
      {
        title: "5. Customer Engagement Features",
        points: [
          "Added coupons, deals by category, complaint management system, and a secure payment gateway.",
        ],
      },
      {
        title: "6. Admin Control Panel",
        points: [
          "Centralized approval system for products, vendors, and users.",
          "Sales tracking, coupon management, and vendor performance monitoring tools.",
        ],
      },
    ],
  },
  worthmetrix: {
    images: {
      mobile: "/img/case-img18.png",
      desktop: "/img/case-img1823.png",
    },
    heading: {
      main: "Our",
      highlight: "Solutions",
    },
    solutions: [
      {
        title: "1. Secure User Authentication & Profile Management",
        points: [
          "Implemented signup, login, and password reset functions with encryption.",
          "Added company profile management to store relevant business information.",
        ],
      },
      {
        title: "2. Financial Data Entry Modul",
        points: [
          "Designed a step-by-step form for entering the last 5 years of financial data.",
          "Validated entries to minimize human error.",
        ],
      },
      {
        title: "3. Business Health Analysis Engine",
        points: [
          "Developed algorithms to process historical financial data and evaluate a company’s health across multiple performance metrics.",
        ],
      },
      {
        title: "4. Integrated Payment Gateway",
        points: [
          "Integrated PayPal for secure online transactions before report generation.",
        ],
      },
      {
        title: "5. Automated Report Generation",
        points: [
          "Enabled instant creation of visually rich business health analysis reports.",
          "Reports designed to be easy to read and actionable for decision-makers.",
        ],
      },
      // {
      //   title: "6. Admin Control Panel",
      //   points: [
      //     "Centralized approval system for products, vendors, and users.",
      //     "Sales tracking, coupon management, and vendor performance monitoring tools.",
      //   ],
      // },
    ],
  },
  evolveai: {
    images: {
      mobile: "/img/case-img18.png",
      desktop: "/img/case-img1823.png",
    },
    heading: {
      main: "Our",
      highlight: "Solutions",
    },
    solutions: [
      {
        title: "1. Cross-Platform Development with React Native",
        points: [
          "Delivered a single codebase app optimized for both Android and iOS.",
        ],
      },
      {
        title: "2. Seamless Video Streaming",
        points: [
          "Integrated Firebase Cloud Storage for hosting training content with optimized streaming performance.",
        ],
      },
      {
        title: "3. Subscription & Payment Integration",
        points: [
          "Used Stripe for secure, recurring subscription payments for 3-month, 6-month, and 1-year plans.",
        ],
      },
      {
        title: "4. Readiness Test Module",
        points: [
          "Developed an AI-driven readiness test to personalize training recommendations.",
        ],
      },
      {
        title: "5. Pixel-Perfect UI Implementation",
        points: [
          "Translated Figma designs into a fully interactive app interface, ensuring visual consistency and smooth navigation.",
        ],
      },
      {
        title: "6. Scalable Backend Architecture",
        points: [
          "Firebase integration allowed for easy scaling as user base and content library expanded.",
        ],
      },
    ],
  },
  'ezshopit-mobile': {
    images: {
      mobile: "/img/case-img18.png",
      desktop: "/img/case-img1823.png",
    },
    heading: {
      main: "Our",
      highlight: "Solutions",
    },
    solutions: [
      {
        title: "1. Cross-Platform App Development",
        points: [
          "Built with React Native to ensure unified codebase and consistent UI/UX across devices.",
        ],
      },
      {
        title: "2. Vendor Dashboard & Inventory Control",
        points: [
          "Allowed vendors to list products, manage inventory, and process orders in real time.",
        ],
      },
      {
        title: "3. Real-Time Order Trackingy",
        points: [
          "Integrated Twilio for instant SMS/notification updates on shipping and delivery status.",
        ],
      },
      {
        title: "4. Multi-Currency & Multi-Language Support",
        points: [
          "Integrated currency conversion and bilingual support (English & Arabic) to expand market reach.",
        ],
      },
      {
        title: "5. Secure Payment Processing",
        points: [
          "Integrated PayPal for safe, multi-currency transactions.",
        ],
      },
      {
        title: "6. Warehouse & Delivery Management",
        points: [
          "Enabled warehouses to assign orders to delivery personnel and update statuses instantly.",
        ],
      },
      {
        title: "7. Admin Panel",
        points: [
          "Provided central control for approving vendors, products, managing coupons, and tracking sales analytics.",
        ],
      },
    ],
  },
  'bolton-travel': {
    images: {
      mobile: "/img/case-img18.png",
      desktop: "/img/case-img1823.png",
    },
    heading: {
      main: "Our",
      highlight: "Solutions",
    },
    solutions: [
      {
        title: "1. Quotation & Invoice Management",
        points: [
          "Developed modules for quotation creation, preview, and PDF generation.",
          "Integrated email functionality to send invoices directly to customers.",
        ],
      },
      {
        title: "2. Supplier Data Handling",
        points: [
          "Created a centralized supplier database with Excel export capability.",
        ],
      },
      {
        title: "3. Booking Management",
        points: [
          "Implemented hotel accommodation and flight booking tracking features for smooth coordination.",
        ],
      },
      {
        title: "4. KYC & Payment Management",
        points: [
          "Added secure KYC document management and client payment tracking modules.",
        ],
      },
      {
        title: "5. Sales Reporting Dashboard",
        points: [
          "Designed an interactive sales reporting system for quick performance analysis.",
        ],
      },
      {
        title: "6. Voucher Generation",
        points: [
          "Enabled automatic hotel voucher generation with branded formatting for customer presentation.",
        ],
      },
    ],
  },
  'taskity': {
    images: {
      mobile: "/img/case-img18.png",
      desktop: "/img/case-img1823.png",
    },
    heading: {
      main: "Our",
      highlight: "Solutions",
    },
    solutions: [
      {
        title: "1. Integrated Daily Dashboard",
        points: [
          "Designed a real-time dashboard summarizing attendance, leads, projects, sales, and finances in one view.",
        ],
      },
      {
        title: "2. Role-Based Multi-User Interface",
        points: [
          "Implemented secure authentication with role-specific access controls for administrators, managers, and employees.",
        ],
      },
      {
        title: "3. Comprehensive Workflow Modules",
        points: [
          "Attendance & Leave Tracking: Simplified staff management.",
          "Lead & Client Management: Enabled easy follow-ups and conversion tracking",
          "Project & Task Management: Streamlined planning, assignment, and progress monitoring.",
          "Marketing & Sales Tracking: Provided visibility into campaign performance and revenue.",
          "Income & Expense Management: Offered a clear financial overview.",
        ],
      },
      {
        title: "4. Stripe Payment Integration",
        points: [
          "Integrated Stripe for secure payment handling for subscriptions or premium features.",
        ],
      },
      {
        title: "5. Interactive UI/UX",
        points: [
          "Used HTML5, CSS3, Bootstrap, and Ajax to ensure a responsive and dynamic user experience.",
        ],
      },
    ],
  },
  'martwat': {
    images: {
      mobile: "/img/case-img18.png",
      desktop: "/img/case-img1823.png",
    },
    heading: {
      main: "Our",
      highlight: "Solutions",
    },
    solutions: [
      {
        title: "1. Comprehensive Dashboard",
        points: [
          "Displays recent invoices, sales, buyers, income vs expense, and transaction summaries at a glance.",
        ],
      },
      {
        title: "2. POS & Sales Management",
        points: [
          "Developed a POS interface for quick billing, invoice generation, subscription handling, and quote preparation.",
        ],
      },
      {
        title: "3. Advanced Inventory & Stock Management",
        points: [
          "Enabled product categorization, stock transfers, returns, warehouse management, supplier records, and automated low-stock alerts.",
        ],
      },
      {
        title: "4. CRM Module",
        points: [
          "Integrated client management, ticketing system for customer queries, and history tracking.",
        ],
      },
      {
        title: "5. Project & Task Management",
        points: [
          "Added tools for project tracking and to-do list management to improve operational workflows.",
        ],
      },
      {
        title: "6. Accounting Module",
        points: [
          "Included balance sheet, transaction history, income/expense tracking, and client statements for suppliers and customers.",
        ],
      },
      {
        title: "7. Graphical Reporting",
        points: [
          "Provided visual insights on product categories, sales trends, profits, and customer behavior.",
        ],
      },
      {
        title: "8. HRM Integration",
        points: [
          "Developed employee management, payroll processing, attendance tracking, and holiday scheduling.",
        ],
      },
      {
        title: "9. Data Export Capability",
        points: [
          "Enabled export of transactions, products, customers, and account statements in formats like XML, JSON, and Excel.",
        ],
      },
    ],
  },

  'sjrs-school-erp': {
    images: {
      mobile: "/img/school-Our-Solutions-1.png",
      desktop: "/img/school-Our-Solutions.png",
    },
    heading: {
      main: "Our",
      highlight: "Solutions",
    },
    solutions: [
      {
        title: "1. Centralized Dashboard",
        points: [
          "Displays total students, new admissions, withdrawals, revenue breakdown (monthly/quarterly/annual), and expense graphs.",
        ],
      },
      {
        title: "2. Attendance Management",
        points: [
          "Facilitated attendance marking for both students and faculty.",
          "Integrated SMS gateway for instant absence/presence notifications to parents.",
        ],
      },
      {
        title: "3. Results & Performance Analytics",
        points: [
          "Allowed faculty to upload results, accessible via parent/student login.",
          "Highlighted improvement areas and subject-wise strengths/weaknesses.",
        ],
      },
      {
        title: "4. Order Tracking System",
        points: [
          "Integrated PayPal for secure online fee deposit.",
          "Provided printable receipts for every transaction.",
        ],
      },
      {
        title: "5. Data Export & Reports",
        points: [
          "Enabled export of student data, transaction records, and income vs expense reports in XML/JSON formats.",
        ],
      },
      {
        title: "6. Departmental Access Control",
        points: [
          "Role-specific modules for admin and accounts departments to maintain operational security.",
        ],
      },
    ],
  },
};

const OurSolutionsCaseStudy = ({ slug }) => {
  const currentData = caseStudyData[slug];

  if (!currentData) {
    return (
      <div className="case-single-section-area our-solution-sec">
        <div className="container">
          <p>No data available for this case study.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="case-single-section-area our-solution-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="case-auhtor-area sp1">
              <div className="row align-items-center">
                {/* Image Column */}
                <div className="col-lg-7">
                  <div className="case-images image-anime">
                    {/* Mobile Image */}
                    <Image
                      src={currentData.images.mobile}
                      alt="Our Solutions Illustration Mobile"
                      width={800}
                      height={600}
                      className="mobile-view w-full h-auto"
                    />
                    {/* Desktop Image */}
                    <Image
                      src={currentData.images.desktop}
                      alt="Our Solutions Illustration Desktop"
                      width={800}
                      height={600}
                      className="desktop-view w-full h-auto"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className="col-lg-5">
                  <div className="case-single-hedaer heading2">
                    <h2 className="heading-title">
                      {currentData.heading.main}{" "}
                      <span className="c-primary">
                        {currentData.heading.highlight}
                      </span>
                    </h2>

                    {/* Solutions List */}
                    {currentData.solutions.map((solution, index) => (
                      <div key={index} className="case-solution-list">
                        <h5>{solution.title}</h5>
                        <ul className="case-others-area">
                          {solution.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolutionsCaseStudy;
