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
    'anvo-autos': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>0% Ledger Discrepancies:</strong> The double-entry ledger architecture completely eliminated race conditions, duplicate promo redemptions, and wallet balance errors.
        </p>,
        <p key="2">
          <strong>45% Map API Cost Reduction:</strong> Caching route geometry in Redis and applying throttling logic successfully decreased recurring Google Maps API costs.
        </p>,
        <p key="3">
          <strong>99.9% Booking Dispatch Rate:</strong> The combination of BullMQ workers and local database fallbacks ensured scheduled trips were processed without failure.
        </p>,
        <p key="4">
          <strong>Zero Passenger Data Leaks:</strong> Secure, high-entropy tokenized links enabled anonymous web tracking without exposing internal IDs, usernames, or phone numbers.
        </p>,
        <p key="5">
          <strong>Proactive Fraud Mitigation:</strong> Real-time route deviation alerts successfully flagged unauthorized route expansions, reducing fare disputes by 30%.
        </p>,
      ],
      image: {
        src: "/img/school-Impact-Business.png",
        alt: "Anvo Autos Business Impact",
        width: 600,
        height: 500,
      },
    },
    'shikshasetu-lms': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Reduced Administrative Effort:</strong> Automated workflows eliminated repetitive manual coordination, allowing operations teams to focus fully on learner support.
        </p>,
        <p key="2">
          <strong>Improved Student Engagement:</strong> On-demand AI mentoring, team hackathons, leaderboards, and immediate reviews produced higher participation levels.
        </p>,
        <p key="3">
          <strong>Better Learning Outcomes:</strong> Precise completion monitoring and custom AI feedback helped students focus on weaknesses and improve test scores.
        </p>,
        <p key="4">
          <strong>Increased Operational Scalability:</strong> The platform easily supports growing student bodies and courses without inflating admin overhead costs.
        </p>,
        <p key="5">
          <strong>Cost-Efficient AI Utilization:</strong> On-demand AI generation slashed API costs while maintaining highly personal, customized assistance features.
        </p>,
        <p key="6">
          <strong>Stronger Revenue Protection:</strong> Secure session validation and link-sharing blockades mitigated unpaid access, securing proprietary learning assets.
        </p>,
      ],
      image: {
        src: "/img/school-Impact-Business.png",
        alt: "Vidya AI LMS Business Impact",
        width: 600,
        height: 500,
      },
    },
    'ai-career-coach': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>Democratized Career Coaching:</strong> Automated, high-quality career advice drastically reduced the barrier to entry, allowing users to access premium mentorship 24/7.
        </p>,
        <p key="2">
          <strong>Improved Job Readiness:</strong> Actionable resume scoring and targeted improvement tips directly enhanced the quality of user applications, increasing their confidence and placement success rates.
        </p>,
        <p key="3">
          <strong>Highly Scalable Infrastructure:</strong> By offloading heavy AI processing and PDF parsing to Inngest background jobs, the platform can support high volumes of concurrent users without experiencing performance degradation or server timeouts.
        </p>,
        <p key="4">
          <strong>Data-Driven Iteration:</strong> Comprehensive history tracking allows the platform to analyze user trends and continually refine the AI prompts and features for optimized learning outcomes.
        </p>,
        <p key="5">
          <strong>Stronger Data Protection:</strong> Controlled session access through NextAuth and secure file management via ImageKit reduced the risk of unauthorized usage and protected personalized user reports.
        </p>,
      ],
      image: {
        src: "/img/school-Impact-Business.png",
        alt: "Ai Career Coach Agent Business Impact",
        width: 600,
        height: 500,
      },
    },
    'sip-calculator': {
      heading: (
        <>
          Impact On <span className="c-primary">Business</span>
        </>
      ),
      paragraphs: [
        <p key="1">
          <strong>High Engagement and Retention:</strong> Interactive sliders combined with instant, smooth SVG charts encourage active user interaction, leading to longer session durations and higher user satisfaction.
        </p>,
        <p key="2">
          <strong>Improved Financial Decision Making:</strong> By adjusting for inflation and estimating post-tax returns, users gain a realistic projection of their future purchasing power, reducing visual surprises upon withdrawal.
        </p>,
        <p key="3">
          <strong>Extreme Operational Scalability:</strong> Operating 100% on the client side translates to zero database hosting, API overhead, or server compute fees, allowing the platform to serve millions of visitors at zero hosting scale cost.
        </p>,
        <p key="4">
          <strong>Enhanced Trust & Transparency:</strong> Clear educational tooltips and detailed year-by-year CSV summaries help build trust and position the host organization as a transparent financial resource.
        </p>,
      ],
      image: {
        src: "/img/sip-calculator.png",
        alt: "SIP Calculator & Wealth Planner Business Impact",
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
