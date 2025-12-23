import CareerBanner from '@/app/_components/aboutUs/Career_components/CareerBanner';
import DigitalMarketingCareer from '@/app/_components/aboutUs/Career_components/DigitalMarketingCareer';
import CTASection from '@/app/_components/home/CTASection';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/about-us/career' } // This should match exactly what's in your database
  });
}

const Career = () => {
  return (
    <div>
        <CareerBanner/>
        <DigitalMarketingCareer/>
        <CTASection
            title="Need a Website, Web Application, Customized CRM Software or a Mobile App for your Business?"
        />
    </div>
  )
}

export default Career;