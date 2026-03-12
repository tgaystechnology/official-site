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
        <AchievementSixthSection/>
        <AchievementSeventhSection/>
        <AchievementEighthSection/>
        <AchievementNinthSection/>
        <AchievementTenthSection/>
        <AchievementEleventhSection/>
    </div>
  )}

export default Achievments;