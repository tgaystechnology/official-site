import React from 'react'
import WorkshopBanner from '../_components/workshop/WorkshopBanner'
import WorkshopAboutUs from '../_components/workshop/WorkshopAboutUs'
import WorkshopSpeaker from '../_components/workshop/WorkshopSpeaker'
import WorkshopGallery from '../_components/workshop/WorkshopGallery'
// import WorkshopStudentTestimonial from '../_components/workshop/WorkshopStudentTestimonial'
import WorkshopCourses from '../_components/workshop/WorkshopCourses'
import WorkshopCertificate from '../_components/workshop/WorkshopCertificate'
import CarouselStack from './../_components/workshop/CarouselStack'

const WorkShop = () => {
  return (
    <div>
      <WorkshopBanner/>
      <WorkshopAboutUs/>
      <WorkshopSpeaker/>
      <WorkshopGallery/>
      <CarouselStack/>
      {/* <WorkshopStudentTestimonial/> */}
      <WorkshopCourses/>
      <WorkshopCertificate/>
    </div>
  )
}

export default WorkShop