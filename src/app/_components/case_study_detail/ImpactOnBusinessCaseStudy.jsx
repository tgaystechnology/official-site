import React from "react";
import Image from "next/image";

const ImpactOnBusinessCaseStudy = ({ slug }) => {
  // Dynamic data object
  const caseStudyData = {
    ezshopit: {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Expanded Vendor Base:</strong> Allowed multiple sellers to list and sell
          products independently, increasing product diversity and revenue potential.
        </p>,
        <p key="2">
          <strong>Enhanced Customer Experience:</strong> Faster checkout, easy tracking, and
          multiple payment options improved customer satisfaction and repeat purchases.
        </p>,
        <p key="3">
          <strong>Operational Efficiency:</strong> Automated inventory updates, order
          assignments, and shipping coordination reduced manual errors and delays.
        </p>,
        <p key="4">
          <strong>Market Reach:</strong> Bilingual and multi-currency features opened doors to
          both local UAE markets and international buyers.
        </p>,
      ],
      image: {
        src: "/img/Impact-Business-ecommarce.png",
        alt: "Ezshopit Business Impact",
        width: 600,
        height: 500,
      },
    },
    worthmetrix: {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Time Savings:</strong> Automated analysis and instant reporting reduced manual report preparation time from days to minutes. 
        </p>,
        <p key="2">
          <strong>Data-Driven Decisions:</strong> Clients gained quick access to actionable insights, improving financial planning and strategic decision-making.
        </p>,
        <p key="3">
          <strong>Revenue Growth:</strong> Integrated payment gateway created a direct revenue stream from report purchases.
        </p>,
        <p key="4">
          <strong>Client Trust:</strong> Secure handling of sensitive data improved client confidence and repeat engagement.
        </p>,
      ],
      image: {
        src: "/img/Analysis-Platform-impact-business.png",
        alt: "Ezshopit Business Impact",
        width: 600,
        height: 500,
      },
    },
    evolveai: {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Rapid Market Penetration:</strong> Achieved 1000+ downloads within a short period post-launch. 
        </p>,
        <p key="2">
          <strong>New Revenue Streams:</strong> Subscription model generated steady recurring income.
        </p>,
        <p key="3">
          <strong>Enhanced User Engagement:</strong> Live and recorded video content improved user retention.
        </p>,
        <p key="4">
          <strong>Scalable Growth: </strong> Cloud-based infrastructure supports expansion without performance issues.
        </p>,
        <p key="5">
          <strong>Brand Credibility: </strong>  Professional UI and seamless performance increased user trust and app store ratings.
        </p>,
      ],
      image: {
        src: "/img/Impact-Business.png",
        alt: "Ezshopit Business Impact",
        width: 600,
        height: 500,
      },
    },
    'ezshopit-mobile': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Expanded Market Reache:</strong> Multi-currency and bilingual features attracted both local and international shoppers. 
        </p>,
        <p key="2">
          <strong>Improved Customer Experience:</strong> Real-time tracking and mobile-first design increased customer trust and retention.
        </p>,
        <p key="3">
          <strong>Vendor Empowerment:</strong> Streamlined vendor onboarding and inventory management encouraged more sellers to join. 
        </p>,
        <p key="4">
          <strong>Operational Efficiency:</strong> Automated order routing from vendors to warehouses to delivery personnel reduced delays and errors. 
        </p>,
        <p key="5">
          <strong>Revenue Growth:</strong> Mobile access and secure payments increased transaction volumes.
        </p>,
      ],
      image: {
        src: "/img/E-Commerce-Mobile-App-Impact-Business.png",
        alt: "Ezshopit Business Impact",
        width: 600,
        height: 500,
      },
    },
    'bolton-travel': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Operational Efficiency:</strong> Reduced time spent on preparing quotations, invoices, and vouchers by automating processes.
        </p>,
        <p key="2">
          <strong>Better Supplier Management:</strong> Centralized supplier data improved coordination and speed of operations.
        </p>,
        <p key="3">
          <strong>Improved Customer Experience:</strong>  Faster response time and professional-looking documents boosted client trust.
        </p>,
        <p key="4">
          <strong>Revenue Tracking:</strong> Real-time sales reporting allowed better decision-making and forecasting.
        </p>,
        <p key="5">
          <strong>Secure Data Handling:</strong> Enhanced customer and supplier data protection increased compliance and reliability.
        </p>,
      ],
      image: {
        src: "/img/travel-Impact-Business.png",
        alt: "Ezshopit Business Impact",
        width: 600,
        height: 500,
      },
    },
    'taskity': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Increased Efficiency:</strong> Centralized business operations reduced the need for multiple software tools. 
        </p>,
        <p key="2">
          <strong>Improved Collaboration:</strong> Multi-user access allowed teams to work together seamlessly from anywhere.
        </p>,
        <p key="3">
          <strong>Enhanced Decision-Making:</strong> The daily dashboard and detailed reports enabled data-driven strategies. 
        </p>,
        <p key="4">
          <strong>Revenue Growth:</strong> Better lead management improved sales conversion rates.
        </p>,
        <p key="5">
          <strong>Cost Savings:</strong> Reduced operational inefficiencies by consolidating functions into one platform.
        </p>,
      ],
      image: {
        src: "/img/Cost-Savings-taski.png",
        alt: "Ezshopit Business Impact",
        width: 600,
        height: 500,
      },
    },
    'martwat': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Operational Efficiency:</strong> Unified system reduced the need for multiple tools, saving time and resources.
        </p>,
        <p key="2">
          <strong>Accurate Inventory Control:</strong> Minimized stock shortages and overstocking through real-time monitoring.
        </p>,
        <p key="3">
          <strong>Better Financial Oversight:</strong>  Automated statements and expense tracking improved financial transparency. 
        </p>,
        <p key="4">
          <strong>Enhanced Decision-Making:</strong> Graphical reports provided actionable insights for growth strategies.
        </p>,
        <p key="5">
          <strong>Improved Staff Management:</strong> Integrated HRM streamlined employee data, payroll, and attendance records.
        </p>,
        <p key="6">
          <strong>Data Accessibility:</strong> Export features allowed seamless sharing of business data for audits and analysis.
        </p>,
      ],
      image: {
        src: "/img/mart-Impact-Business.png",
        alt: "Ezshopit Business Impact",
        width: 600,
        height: 500,
      },
    },

    'sjrs-school-erp': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Operational Efficiency:</strong> Reduced manual work by automating attendance, results, and fee processing.
        </p>,
        <p key="2">
          <strong>Parent Engagement:</strong> Real-time notifications and online result access strengthened parent-school communication.
        </p>,
        <p key="3">
          <strong>Financial Transparency:</strong> Digital fee management and exportable reports improved accounting accuracy. 
        </p>,
        <p key="4">
          <strong>Student Improvement Tracking:</strong> Subject-wise performance analytics enabled targeted academic interventions.
        </p>,
        <p key="5">
          <strong>Scalable Growth:</strong> The modular design supports expansion as the institution grows.
        </p>,
      ],
      image: {
        src: "/img/school-Impact-Business.png",
        alt: "Ezshopit Business Impact",
        width: 600,
        height: 500,
      },
    },
  };

  // Select data based on slug
  const currentData = caseStudyData[slug] || caseStudyData["ezshopit"];

  return (
    <div className="case-single-section-area impact-business-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="case-auhtor-area sp1">
              <div className="row align-items-center">
                {/* Content Column */}
                <div className="col-lg-6">
                  <div className="case-single-hedaer heading">
                    <h2 className="heading-title">{currentData.heading}</h2>
                    {currentData.paragraphs.map((para) => para)}
                  </div>
                </div>

                {/* Image Column */}
                <div className="col-lg-6">
                  <div className="case-images image-anime">
                    <Image
                      src={currentData.image.src}
                      alt={currentData.image.alt}
                      width={currentData.image.width}
                      height={currentData.image.height}
                      className="w-full h-auto"
                    />
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

export default ImpactOnBusinessCaseStudy;
