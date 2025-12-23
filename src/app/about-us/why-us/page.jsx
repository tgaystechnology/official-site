import WhyChooseUs from '@/app/_components/aboutUs/Why_us/WhyChooseUs'
import WhyUsBanner from '@/app/_components/aboutUs/Why_us/WhyUsBanner'
import CTASection from '@/app/_components/home/CTASection'
import Testimonials from '@/app/_components/home/Testimonials'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/about-us/why-us' } // This should match exactly what's in your database
  });
}

const WhyUs = () => {
  return (
    <div>
        <WhyUsBanner/>
        <WhyChooseUs/>
        {/* <Testimonials/> */}
        <AnimatedTestimonials autoplay={true}/>
        <CTASection
        title="Let our experienced developers bring your ideas to life with our comprehensive web and mobile development services."
        />
    </div>
  )
}

export default WhyUs;