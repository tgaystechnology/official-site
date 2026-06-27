import React from 'react';
import Header from '@/app/_components/root/HeaderServer';
import Footer from '@/app/_components/root/Footer';

import EcommerceBanner from '@/app/_components/solutions_components/ecommerce/EcommerceBanner';
import EcommerceWhyChoose from '@/app/_components/solutions_components/ecommerce/EcommerceWhyChoose';
import EcommerceServices from '@/app/_components/solutions_components/ecommerce/EcommerceServices';
import EcommerceChallenges from '@/app/_components/solutions_components/ecommerce/EcommerceChallenges';
import EcommerceProcess from '@/app/_components/solutions_components/ecommerce/EcommerceProcess';
import EcommerceBenefits from '@/app/_components/solutions_components/ecommerce/EcommerceBenefits';
import EcommerceComparison from '@/app/_components/solutions_components/ecommerce/EcommerceComparison';
import EcommerceIndustries from '@/app/_components/solutions_components/ecommerce/EcommerceIndustries';
import EcommerceTrust from '@/app/_components/solutions_components/ecommerce/EcommerceTrust';
import EcommerceFAQ from '@/app/_components/solutions_components/ecommerce/EcommerceFAQ';
import EcommerceCTA from '@/app/_components/solutions_components/ecommerce/EcommerceCTA';

export const viewport = {
  themeColor: '#0083FF',
};

export const metadata = {
  title: 'E-Commerce System Development | TGAYS Technology',
  description: 'Launch, manage, and scale powerful online stores, B2B portals, and multi-vendor marketplaces with TGAYS Technology.',
};

const EcommerceSolutionsPage = () => {
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
          <EcommerceBanner />
          <EcommerceWhyChoose />
          <EcommerceServices />
          <EcommerceChallenges />
          <EcommerceProcess />
          <EcommerceBenefits />
          <EcommerceComparison />
          <EcommerceIndustries />
          <EcommerceTrust />
          <EcommerceFAQ />
          <EcommerceCTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default EcommerceSolutionsPage;