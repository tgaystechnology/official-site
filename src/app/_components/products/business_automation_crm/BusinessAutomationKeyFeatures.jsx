import React from 'react';

const BusinessAutomationKeyFeatures = () => {
  return (
    <section className="background-contain web-totle business-automation-key">
      <div className="container">
        <div className="counters">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="crumina-module crumina-heading hm-easy_title text-center">
                <h2 className="heading-title">Key <span className="c-primary">Features</span></h2>
              </div>
            </div>

            {/* Feature 1 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="crumina-module crumina-counter-item c-blue counter-box solutions-box-list">
                <div className="counter-numbers counter"><span>Lead Management</span></div>
                <p>Capture leads from any source, assign them automatically, and track their entire journey in one place.</p>
              </div>
              <div className="icons-dv blue text-center">
                <ion-icon name="git-network-outline"></ion-icon>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="crumina-module crumina-counter-item c-blue counter-box solutions-box-list">
                <div className="counter-numbers counter"><span>Sales Pipeline</span></div>
                <p>Visualize your sales process, drag-and-drop deals, and trigger automated actions to keep momentum.</p>
              </div>
              <div className="icons-dv yellow text-center">
                <ion-icon name="analytics-outline"></ion-icon>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="crumina-module crumina-counter-item c-blue counter-box solutions-box-list">
                <div className="counter-numbers counter"><span>Customer Management</span></div>
                <p>Get a complete 360° view of every customer, including communication history, purchases, and notes.</p>
              </div>
              <div className="icons-dv red text-center">
                <ion-icon name="person-outline"></ion-icon>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="crumina-module crumina-counter-item c-blue counter-box">
                <div className="counter-numbers counter"><span>Task Automation</span></div>
                <p>Create workflows that auto-assign tasks, send reminders, and update records so nothing gets missed.</p>
              </div>
              <div className="icons-dv green text-center">
                <ion-icon name="document-text-outline"></ion-icon>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="crumina-module crumina-counter-item c-blue counter-box">
                <div className="counter-numbers counter"><span>Invoicing & Quotation</span></div>
                <p>Generate and send professional quotes and invoices in seconds, and track payment statuses automatically.</p>
              </div>
              <div className="icons-dv green text-center">
                <ion-icon name="newspaper-outline"></ion-icon>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="crumina-module crumina-counter-item c-blue counter-box">
                <div className="counter-numbers counter"><span>Reports & Analytics</span></div>
                <p>Make data-driven decisions with real-time dashboards on sales performance and revenue forecasts.</p>
              </div>
              <div className="icons-dv green text-center">
                <ion-icon name="stats-chart-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAutomationKeyFeatures;