import AboutUsSection from '@/app/_components/aboutUs/About_company/AboutUsSection'
import CompanyBanner from '@/app/_components/aboutUs/About_company/CompanyBanner'
import HowWeDoIt from '@/app/_components/aboutUs/About_company/HowWeDoIt'
import LeaderTeam from '@/app/_components/aboutUs/About_company/LeaderTeam'
import MeetProfessionals from '@/app/_components/aboutUs/About_company/MeetProfessionals'
import OurApproachProcess from '@/app/_components/aboutUs/About_company/OurApproachProcess'
import OurMission from '@/app/_components/aboutUs/About_company/OurMission'
import OurSuccessNumbers from '@/app/_components/aboutUs/About_company/OurSuccessNumbers'
import WhatWeDo from '@/app/_components/aboutUs/About_company/WhatWeDo'
import WhoWeAre from '@/app/_components/aboutUs/About_company/WhoWeAre'
import CTASection from '@/app/_components/home/CTASection'
// import Testimonials from '@/app/_components/home/Testimonials'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { FocusCards } from "@/components/ui/focus-cards";
import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
import React from 'react'

// export const metadata = {
//   title: 'Company - Your Tech Solutions Partner',
//   description: 'Discover innovative tech solutions and services with Company. We provide cutting-edge technology services to help your business grow.',
//   keywords: ['tech', 'solutions', 'services', 'company'],
// }
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/about-us/company' } // This should match exactly what's in your database
  });
}

const cards = [
    {
      title: "Prince Singh - Project Lead (Web & Mobile App)",
      src: "/img/prince-dev.png",
    },
    {
      title: "Gaurav Kumar - Senior Web Designer",
      src: "/img/gaurav.png",
    },
    {
      title: "Md. Najish - Web Developer",
      src: "/img/najish-khan.png",
    },
    {
      title: "S K Sarfaraz - Web Developer",
      src: "/img/sarfaraz-dev.png",
    },
    {
      title: "Vijay Pandey - Sr. Web Developer",
      src: "/img/vijay-sr-web-developer.png",
    },
    {
      title: "Tanuj - Business Development Executive",
      src: "/img/tanuj-bds.png",
    },
    {
      title: "Vansh Lalawat - Business Development Associate",
      src: "/img/vansh.png",
    },
    {
      title: "Sana Ashraf - HR & Marketing Associate",
      src: "/img/sana.png",
    },
  ];

const Company = () => {
  return (
    <div>
        <CompanyBanner/>
        <AboutUsSection/>
        <OurMission/>
        <LeaderTeam/>
        <WhoWeAre/>
        <WhatWeDo/>
        <HowWeDoIt/>
        <MeetProfessionals/>
        {/* <div className='m-5'>
          <FocusCards cards={cards} />
        </div> */}
        <OurSuccessNumbers/>
        <OurApproachProcess/>
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <CTASection title="Need a Website, Web Application, Customized CRM Software or a Mobile App for your Business?" />
    </div>
  )
}

export default Company