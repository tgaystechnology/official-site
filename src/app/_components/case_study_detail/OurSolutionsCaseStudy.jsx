import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <>Developed using CodeIgniter to ensure stability, performance, and flexibility for future upgrades.</>,
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
          <>Delivered a single codebase app optimized for both Android and iOS using <Link href="/services/mobile-app" style={{color: '#0083FF', textDecoration: 'underline'}}>React Native</Link>.</>,
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
          <>Built with <Link href="/services/mobile-app" style={{color: '#0083FF', textDecoration: 'underline'}}>React Native</Link> to ensure unified codebase and consistent UI/UX across devices.</>,
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
          <>Added secure KYC document management and client payment tracking modules.</>,
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
          <>Implemented secure authentication with role-specific access controls for administrators, managers, and employees.</>,
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
          <>Used HTML5, CSS3, Bootstrap, and Ajax to ensure a responsive and dynamic user experience.</>,
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
          <>Integrated client management, ticketing system for customer queries, and history tracking.</>,
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
  'anvo-autos': {
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
        title: "1. Robust Driver Lifecycle State Machine",
        points: [
          "Enforced strict, backend-controlled transitions (OFFLINE ↔ AVAILABLE ↔ ON_TRIP).",
          "A background cron job (DriverHealthJob) offlines inactive drivers after 30 seconds of heartbeat loss."
        ],
      },
      {
        title: "2. Redis GEO & GPS Smoothing",
        points: [
          <>Cached driver locations in memory using Redis GEO for sub-second updates.</>,
          <>Implemented a GPS filter that ignores insignificant movement (&lt;10m) to minimize database write-overhead.</>
        ],
      },
      {
        title: "3. Immutable Double-Entry Ledger Wallet",
        points: [
          "Configured a transaction ledger (wallet_ledger) utilizing Row-Level Locking (SELECT FOR UPDATE) within atomic database transactions.",
          "Guarantees negative balance protection and prevents race conditions."
        ],
      },
      {
        title: "4. PostGIS LineString Deviation Tracking",
        points: [
          <>Decoded planned Google Routes polylines into PostGIS LineString geometry in PostgreSQL.</>,
          <>Used ST_Distance to compare live driver GPS points against the route, triggering Socket.IO deviation warnings if they stray &gt;500m.</>
        ],
      },
      {
        title: "5. Argon2 OTP-Secured Trip Validation",
        points: [
          "Secured the trip pickup phase by requiring drivers to input a 4-digit OTP.",
          "Verified against an Argon2 hash in the database, locking verification after 3 failed attempts to block brute-force attacks."
        ],
      },
      {
        title: "6. High-Entropy, Zero-PII Trip Sharing",
        points: [
          "Developed a tokenized sharing link (64-character hex token).",
          "The public endpoint filters out sensitive details, streaming progress to read-only Socket.IO rooms."
        ],
      },
      {
        title: "7. Resilient Scheduled Ride Queuing",
        points: [
          "Automated booking dispatches with BullMQ workers on Redis.",
          "Built a secondary local fallback database scheduler to guarantee execution during temporary Redis outages."
        ],
      },
    ],
  },
  'shikshasetu-lms': {
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
        title: "1. Hybrid Learning Ecosystem",
        points: [
          "Developed separate learning pathways for Live Cohort-Based Training and Recorded Self-Paced Courses.",
          "Created a structured learning experience without dashboard clutter."
        ],
      },
      {
        title: "2. Secure Live Session Management",
        points: [
          "Implemented controlled session access where students can join classes only during scheduled time windows.",
          "Features include scheduled batch management, session calendar, automated attendance recording, and secure classroom access."
        ],
      },
      {
        title: "3. Smart Learning Dashboard",
        points: [
          "Created a dedicated student learning center featuring course progress tracking, completion monitoring, and learning history."
        ],
      },
      {
        title: "4. AI-Powered Learning Assistance",
        points: [
          <>Integrated <Link href="/services/ai-powered-services" style={{color: '#0083FF', textDecoration: 'underline'}}>Google Gemini AI</Link> to provide study notes, AI-generated quizzes, and lesson summaries on-demand to optimize resource consumption.</>
        ],
      },
      {
        title: "5. Assessment & Competitive Learning Engine",
        points: [
          "Designed a flexible assessment framework supporting practice quizzes, competitive hackathons, and real-time leaderboards."
        ],
      },
      {
        title: "6. AI Mentor & Analytics System",
        points: [
          "Built an intelligent analytics engine that evaluates learning progress, quiz performance, completion trends, and accuracy patterns to provide personalized recommendations."
        ],
      },
      {
        title: "7. Operational Automation",
        points: [
          "Automated critical administrative processes including session reminders, tutor notifications, attendance tracking, and learning progress updates."
        ],
      },
    ],
  },
  'ai-career-coach': {
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
        title: "1. Conversational AI Career Mentor",
        points: [
          <>Integrated <Link href="/services/ai-powered-services" style={{color: '#0083FF', textDecoration: 'underline'}}>Google Gemini</Link> 2.0 Flash to provide on-demand interview preparation, job search strategies, and transition advice.</>,
          <>Strictly prompt-engineered the agent to remain professional and focus exclusively on career-related queries.</>
        ],
      },
      {
        title: "2. Automated Resume Analyzer",
        points: [
          "Developed an advanced evaluation engine that processes uploaded PDFs to deliver an overall ATS-style score.",
          "Provides detailed section-by-section scoring (Experience, Education, Skills) and actionable improvement tips."
        ],
      },
      {
        title: "3. Dynamic Career Roadmap Generator",
        points: [
          "Built an intelligent visualization system using React Flow.",
          "Generates step-by-step career progression trees for any profession, complete with mid-career milestones and resource links."
        ],
      },
      {
        title: "4. Asynchronous Background Processing",
        points: [
          "Implemented Inngest to manage intensive AI tasks and file parsing in the background.",
          "Ensures the frontend remains highly responsive while complex tasks are processed reliably without server timeouts."
        ],
      },
      {
        title: "5. Secure File Management and Authentication",
        points: [
          "Integrated ImageKit for secure handling of user resume uploads.",
          "Integrated NextAuth to enforce route protection, ensuring user data and history are securely tied to authenticated sessions."
        ],
      },
    ],
  },
  'sip-calculator': {
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
        title: "1. Compounding Engine",
        points: [
          "Supports both standard flat SIP formulas and dynamic annual step-up options to model real-world growth."
        ],
      },
      {
        title: "2. Inflation Stress-Testing",
        points: [
          "Uses the Fisher Equation to show the real post-inflation purchasing power of the matured portfolio."
        ],
      },
      {
        title: "3. Tax Estimator",
        points: [
          "Automatically calculates short and long-term capital gains tax liability for Equity and Debt funds instantly."
        ],
      },
      {
        title: "4. Pause & Recovery Modeler",
        points: [
          "Calculates compounding loss from missed payments and displays custom recovery contributions or tenure extensions."
        ],
      },
      {
        title: "5. What-If Comparison",
        points: [
          "Allows users to compare baseline plans against custom variables like top-ups or extended tenures."
        ],
      },
      {
        title: "6. Interactive SVG Charts",
        points: [
          "Uses Recharts for instant updates on slider changes and provides clean, year-by-year projections as CSV exports."
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
