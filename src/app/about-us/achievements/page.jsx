import AchievementBanner from '@/app/_components/aboutUs/Achievments/AchievementBanner';
import AchievementSectionFirst from '@/app/_components/aboutUs/Achievments/AchievementSectionFirst';
import AchievementSecondSection from '@/app/_components/aboutUs/Achievments/AchievementSecondSection';
import AchievementThirdSection from '@/app/_components/aboutUs/Achievments/AchievementThirdSection';
import AchievementFourthSection from '@/app/_components/aboutUs/Achievments/AchievementFourthSection';
import AchievementFifthSection from '@/app/_components/aboutUs/Achievments/AchievementFifthSection';
import AchievementSixthSection from '@/app/_components/aboutUs/Achievments/AchievementSixthSection';
import AchievementSeventhSection from '@/app/_components/aboutUs/Achievments/AchievementSeventhSection';
import AchievementEighthSection from '@/app/_components/aboutUs/Achievments/AchievementEighthSection';
import AchievementNinthSection from '@/app/_components/aboutUs/Achievments/AchievementNinthSection';
import AchievementTenthSection from '@/app/_components/aboutUs/Achievments/AchievementTenthSection';
import AchievementEleventhSection from '@/app/_components/aboutUs/Achievments/AchievementEleventhSection';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
import WorkshopSpeaker from '@/app/_components/workshop/WorkshopSpeaker';
import WorkshopGallery from '@/app/_components/workshop/WorkshopGallery';
import CarouselStack from '@/app/_components/workshop/CarouselStack';
import WorkshopCourses from '@/app/_components/workshop/WorkshopCourses';
import HackathonSection from '@/app/_components/workshop/HackathonSection';
import WorkshopCertificate from '@/app/_components/workshop/WorkshopCertificate';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/about-us/achievements' }
  });
}

const Achievments = () => {
  return (
    <div>
        <AchievementBanner/>
        <AchievementSectionFirst/>
        <AchievementSecondSection/>
        <AchievementThirdSection/>
        <AchievementFourthSection/>
        <AchievementFifthSection/>
        {/* <AchievementSixthSection/>
        <AchievementSeventhSection/>
        <AchievementEighthSection/>
        <AchievementNinthSection/>
        <AchievementTenthSection/>
        <AchievementEleventhSection/> */}
        <WorkshopSpeaker/>
      <WorkshopGallery/>
      <CarouselStack/>
      {/* <WorkshopStudentTestimonial/> */}
      <WorkshopCourses/>
      <HackathonSection/>
      <WorkshopCertificate/>
      <AchievementNinthSection/>
        <AchievementTenthSection/>
        <AchievementEleventhSection/>
    </div>
  )}

export default Achievments;