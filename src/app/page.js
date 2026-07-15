import Script from 'next/script';
import BannerSlider from "./_components/home/BannerSlider";
import CoreServices from "./_components/home/CoreServices";
import ClientsWorldwide from "./_components/home/ClientsWorldwide";
import OurSolutions from "./_components/home/OurSolutions";
import AboutUs from "./_components/home/AboutUs";
import WhyChooseUs from "./_components/home/WhyChooseUs";
import ServicePartners from "./_components/home/ServicePartners";
import CTASection from "./_components/home/CTASection";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import CaseStudyCarousel from "./_components/home/CaseStudyCarousel";
import Slider3D from "./_components/home/Slider3D";
import AiDevelopmentSection from "./_components/home/AiDevelopmentSection";

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/' } // Home route slug
  });
}

export default function RootPage() {
    const testimonials = [
      {
        quote:
          "It was fantastic. 7 years working with the Team. I didn't even realize, we spent more than 7 years together. Excellent Difference in Results, work and never a failure.",
        name: "Richard Bonitz",
        designation: "Creative Media Team Technology",
        src: "/img/rich.jpg",
      },
      {
        quote:
          "They turned to be one of our best choice as a Technology partner. They have quick turn around time, easily accessible, cost-effective and has a great value in their work.",
        name: "Francis Wills",
        designation: "Marketing Director",
        src: "/img/francis.png",
      },
      {
        quote:
          "Their expertise and dedication were evident from the start. They took the time to understand our needs and delivered a solution that exceeded our expectations. I highly recommend them.",
        name: "Chris Shrinkle",
        designation: "Project Manager",
        src: "/img/chris.png",
      },
    ];
  return (
    <div>
      <Script 
        id="mps-pref-script" 
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d) {
              w.MPSPref = w.MPSPref || function () { (w.MPSPref.q = w.MPSPref.q || []).push(arguments); };
              var s = d.createElement("script");
              s.async = true; s.src = "https://mypreferredsources.com/float.js";
              d.head.appendChild(s);
            })(window, document);

            MPSPref("init", {
              site: "tgaystechnology.com",
              theme: "dark",
              size: "sm",
              lang: "en",
              label: "Add {site} as a preferred source",
              mark: "star",
              position: "right",
              collapsed: true,
              trigger: "delay",
              delay: 3000,
              dismissDays: 30
            });
          `
        }} 
      />
      <BannerSlider/>
      {/* <div className="mt-10">
        <Slider3D />
      </div> */}
      <CoreServices/>
      <OurSolutions/>
      <ClientsWorldwide/>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true}/>
      <AboutUs/>
      <CaseStudyCarousel/>
      <WhyChooseUs/>
      <AiDevelopmentSection />
      <ServicePartners/>
      <CTASection title="Need a Website, Web Application, Customized CRM Software or a Mobile App for your Business?" />
    </div>
  );
}
