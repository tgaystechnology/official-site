import AchievementBanner from '@/app/_components/aboutUs/Achievments/AchievementBanner';
import AchievementFourthSection from '@/app/_components/aboutUs/Achievments/AchievementFourthSection';
import AchievementSecondSection from '@/app/_components/aboutUs/Achievments/AchievementSecondSection';
import AchievementSectionFirst from '@/app/_components/aboutUs/Achievments/AchievementSectionFirst';
import AchievementThirdSection from '@/app/_components/aboutUs/Achievments/AchievementThirdSection';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/about-us/achievements' } // This should match exactly what's in your database
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
    </div>
  )}

export default Achievments;