import ExperienceSection from '@/app/_components/aboutUs/Industry_we_serve/ExperienceSection'
import HappyClients from '@/app/_components/aboutUs/Industry_we_serve/HappyClients'
import IndustryBanner from '@/app/_components/aboutUs/Industry_we_serve/IndustryBanner'
import IndustryMissionSection from '@/app/_components/aboutUs/Industry_we_serve/IndustryMissionSection'
import ServiceList from '@/app/_components/aboutUs/Industry_we_serve/ServiceList'
import WeServeIndustries from '@/app/_components/aboutUs/Industry_we_serve/WeServeIndustries'
import CTASection from '@/app/_components/home/CTASection'
import Testimonials from '@/app/_components/home/Testimonials'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import React from 'react'

// export const metadata = {
  //   title: 'Industry We Serve',
  //   description: 'Discover innovative tech solutions and services with Company. We provide cutting-edge technology services to help your business grow.',
  //   keywords: ['tech', 'solutions', 'services', 'company'],
  // }
  
import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/about-us/industry-we-serve' } // This should match exactly what's in your database
  });
}


const serviceData = [
  {
    id: 1,
    image: '/img/Experience-1.png',
    title: 'We Are Professional',
    description:
      'Our team combines creativity with technical expertise to deliver solutions that are polished, purposeful, and performance-driven. From planning to execution, professionalism is at the heart of what we do.'
  },
  {
    id: 2,
    image: '/img/Experience-2.png',
    title: 'We Are Trusted',
    description:
      'Our clients trust us because we deliver results—on time, every time. We build long-term partnerships by consistently exceeding expectations with quality, security, and integrity.'
  },
  {
    id: 3,
    image: '/img/Experience-3.png',
    title: 'We Are Expert',
    description:
      'With experience across industries and deep knowledge of the latest tech, our experts craft innovative solutions that solve complex challenges with ease and efficiency.'
  }
];

const IndustryWeServe = () => {
  return (
    <div>
      <IndustryBanner/>
      <div className=''>
        <IndustryMissionSection/>
      </div>
      <ExperienceSection
        heading="What Sets Us Apart"
        description="With years of hands-on experience, a trusted team, and a commitment to excellence, we bring industry-best practices and innovation to every project we take on."
      />
      <ServiceList services={serviceData} />
      <WeServeIndustries/>
      <HappyClients/>
      {/* <Testimonials/> */}
      <AnimatedTestimonials autoplay={true}/>
      <CTASection
        title="Scalable Digital Solutions for Every Business Domain"
        description="We build intelligent, future-ready systems tailored to your unique goals — whether you're leading in a well-known industry or pioneering a new one. Let's craft a solution that sets you apart."
      />
    </div>
  )
}

export default IndustryWeServe