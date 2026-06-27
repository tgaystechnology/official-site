import React from 'react';
import Header from '@/app/_components/root/HeaderServer';
import Footer from '@/app/_components/root/Footer';

import HealthcareBanner from '@/app/_components/solutions_components/healthcare/HealthcareBanner';
import HealthcareWhyChoose from '@/app/_components/solutions_components/healthcare/HealthcareWhyChoose';
import HealthcareServices from '@/app/_components/solutions_components/healthcare/HealthcareServices';
import HealthcareChallenges from '@/app/_components/solutions_components/healthcare/HealthcareChallenges';
import HealthcareProcess from '@/app/_components/solutions_components/healthcare/HealthcareProcess';
import HealthcareBenefits from '@/app/_components/solutions_components/healthcare/HealthcareBenefits';
import HealthcareComparison from '@/app/_components/solutions_components/healthcare/HealthcareComparison';
import HealthcareIndustries from '@/app/_components/solutions_components/healthcare/HealthcareIndustries';
import HealthcareTrust from '@/app/_components/solutions_components/healthcare/HealthcareTrust';
import HealthcareFAQ from '@/app/_components/solutions_components/healthcare/HealthcareFAQ';
import HealthcareCTA from '@/app/_components/solutions_components/healthcare/HealthcareCTA';

export const viewport = {
  themeColor: '#0083FF',
};

export const metadata = {
  title: 'Healthcare Software Development Solutions | TGAYS Technology',
  description: 'Custom healthcare software development, hospital management systems, telemedicine, EHR/EMR, and patient engagement platforms by TGAYS Technology.',
};

const HealthcareSolutionsPage = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .nunito-page-content,
        .nunito-page-content p,
        .nunito-page-content a,
        .nunito-page-content li,
        .nunito-page-content span {
          font-family: 'Nunito', sans-serif;
        }
        
        .nunito-page-content h1,
        .nunito-page-content h2,
        .nunito-page-content h3,
        .nunito-page-content h4,
        .nunito-page-content h5,
        .nunito-page-content h6,
        .nunito-page-content .heading-title {
          font-family: 'Rajdhani', sans-serif !important;
        }
      `}} />
      
      <div className="main-content-wrapper nunito-page-content">
        <Header />
        
        <main>
          <HealthcareBanner />
          <HealthcareWhyChoose />
          <HealthcareServices />
          <HealthcareChallenges />
          <HealthcareProcess />
          <HealthcareBenefits />
          <HealthcareComparison />
          <HealthcareIndustries />
          <HealthcareTrust />
          <HealthcareFAQ />
          <HealthcareCTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HealthcareSolutionsPage;
