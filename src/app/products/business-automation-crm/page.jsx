import BusinessAutomationCrmBanner from '@/app/_components/products/business_automation_crm/BusinessAutomationCrmBanner';
import BusinessAutomationKeyFeatures from '@/app/_components/products/business_automation_crm/BusinessAutomationKeyFeatures';
import BusinessProjectProgress from '@/app/_components/products/business_automation_crm/BusinessProjectProgress';
import HowBusinessWorksSection from '@/app/_components/products/business_automation_crm/HowBusinessWorksSection';
import DashboardPreview from '@/app/_components/products/DashboardPreview';
import WhoCanUseProduct from '@/app/_components/products/WhoCanUseProduct';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/products/business-automation-crm' } // This should match exactly what's in your database
  });
}

const data = {
  title: "ERP Dashboard Preview",
  image: {
    src: "/img/crm-img-full.png",
    alt: "CRM Dashboard Preview",
    width: 550,
    height: 379,
    className: "",
    unoptimized: true,
  },
};

const whoCanUseData = {
  title: (
    <>
      A Perfect Fit for Any <span className="c-primary">Growing Business</span>
    </>
  ),
  description:
    "Our flexible Business Automation CRM can be configured to meet the unique needs of various industries.",
  items: [
    {
      icon: 'home-outline',
      title: 'Real Estate',
      text: 'Manage property listings, track client inquiries from multiple portals, and automate follow-ups to close deals faster.',
    },
    {
      icon: 'book-outline',
      title: 'Education',
      text: 'Streamline student admissions, manage course inquiries, and automate communication with prospective students and parents.',
    },
    {
      icon: 'heart-outline',
      title: 'Healthcare',
      text: 'Manage patient appointments, automate reminders, and maintain a secure database of client interactions and follow-ups.',
    },
    {
      icon: 'cart-outline',
      title: 'Ecommerce',
      text: 'Track customer orders, manage post-sale communication, and segment customers for targeted marketing campaigns.',
    },
    {
      icon: 'car-sport-outline',
      title: 'Travel & Tours',
      text: 'Handle booking inquiries, manage custom itineraries, automate payment reminders, and maintain detailed client histories.',
    },
    {
      icon: 'desktop-outline',
      title: 'Service Providers',
      text: 'Manage client projects, track billable hours, send invoices, and automate service reminders for agencies and consultants.',
    },
  ],
};

const BusinessAutomationCrm = () => {
  return (
    <div>
        <BusinessAutomationCrmBanner/>
        <BusinessProjectProgress/>
        <BusinessAutomationKeyFeatures/>
        <HowBusinessWorksSection/>
        <DashboardPreview {...data} />
        <WhoCanUseProduct {...whoCanUseData} />
    </div>
  )
}

export default BusinessAutomationCrm;