import React from 'react';

// Import all Tour & Travel components
import TourBanner from '@/app/_components/solutions_components/tour_travel/TourBanner';
import TourWhyChoose from '@/app/_components/solutions_components/tour_travel/TourWhyChoose';
import TourServices from '@/app/_components/solutions_components/tour_travel/TourServices';
import TourChallenges from '@/app/_components/solutions_components/tour_travel/TourChallenges';
import TourProcess from '@/app/_components/solutions_components/tour_travel/TourProcess';
import TourBenefits from '@/app/_components/solutions_components/tour_travel/TourBenefits';
import TourComparison from '@/app/_components/solutions_components/tour_travel/TourComparison';
import TourIndustries from '@/app/_components/solutions_components/tour_travel/TourIndustries';
import TourTrust from '@/app/_components/solutions_components/tour_travel/TourTrust';
import TourFAQ from '@/app/_components/solutions_components/tour_travel/TourFAQ';
import TourCTA from '@/app/_components/solutions_components/tour_travel/TourCTA';

// Add page metadata for SEO
export const metadata = {
  title: 'Tour & Travel Management System Development | TGAYS Technology',
  description: 'Transform your travel business with advanced Tour & Travel Systems. We build scalable booking engines, CRM, ERP, and travel portals for OTAs and DMCs.',
  keywords: 'travel portal development company India, Tour & Travel System, B2B travel software, travel CRM, travel ERP',
};

const TourTravelPage = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .nunito-page-content, 
        .nunito-page-content h1, 
        .nunito-page-content h2, 
        .nunito-page-content h3, 
        .nunito-page-content h4, 
        .nunito-page-content h5, 
        .nunito-page-content h6, 
        .nunito-page-content p, 
        .nunito-page-content span, 
        .nunito-page-content li, 
        .nunito-page-content a, 
        .nunito-page-content button {
          font-family: 'Nunito', sans-serif !important;
        }
        .nunito-page-content h2,
        .nunito-page-content .heading-title {
          font-family: 'Nunito', Arial, "Helvetica Neue", Helvetica, sans-serif !important;
          font-size: 34px !important;
          line-height: 44.2px !important;
          font-weight: 800 !important;
          letter-spacing: 0.68px !important;
        }
      `}} />

      <main className="tour-travel-page bg-light">
        <TourBanner />
        <div className="nunito-page-content">
          <TourWhyChoose />
          <TourServices />
          <TourChallenges />
          <TourProcess />
          <TourBenefits />
          <TourComparison />
          <TourIndustries />
          <TourTrust />
          <TourFAQ />
          <TourCTA />
        </div>
      </main>
    </>
  );
};

export default TourTravelPage;