import QuickConsultation from '@/app/_components/services_components/QuickConsultation';
import EducationBanner from '@/app/_components/solutions_components/education/EducationBanner';
import EducationChooseUs from '@/app/_components/solutions_components/EducationChooseUs';
import EducationKeyBenefitsSection from '@/app/_components/solutions_components/EducationKeyBenefitsSection';
import RetailCaseStudy from '@/app/_components/solutions_components/RetailCaseStudy';
import RetailManagementSystem from '@/app/_components/solutions_components/RetailManagementSystem';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/solutions/education' } // This should match exactly what's in your database
  });
}


const educationFeatures = [
  {
    id: 1,
    icon: "school", // valid Ionicon for education
    title: "Learning Management System (LMS)",
    description: "Deploy a full-featured LMS to manage courses, track student progress, and facilitate seamless communication."
  },
  {
    id: 2,
    icon: "laptop-outline", // valid Ionicon for laptop
    title: "Online Course Platform",
    description: "Launch your own branded online academy to sell courses, manage enrollments, and deliver high-quality content globally."
  },
  {
    id: 3,
    icon: "clipboard", // correct icon for clipboard/assessment
    title: "Assessment",
    description: "Create, deliver, and grade quizzes, exams, and assignments with our secure and robust online assessment tools."
  },
  {
    id: 4,
    icon: "document-text", // good alternative to file-alt
    title: "Test Platform",
    description: "Build a dedicated platform for standardized tests and practice exams with timed assessments and performance analytics."
  },
  {
    id: 5,
    icon: "cube", // suitable alternative for AR/VR/3D concept
    title: "VR/AR Based Learning Platform",
    description: "Step into the future with immersive VR/AR applications that make complex subjects engaging and interactive."
  }
];


const educationTitle = {
  primary: 'Education Management',
  secondary: 'System'
};

const educationSubtitle = "From comprehensive administrative systems to immersive learning apps, we provide a full spectrum of solutions to meet the evolving needs of modern education.";


const caseStudyData = {
  backgroundImage: "/img/pattern-img1.png",
  heading: { primary: "Education Case", secondary: "Study" },
  subHeading: "TGAYS Education: A Next-Generation Learning Platform",
  image: {
    src: "/img/education-case-img.png",
    alt: "education case study",
    width: 600,
    height: 400
  },
  challenge: "OA educational partner needed a modern, scalable platform to deliver diverse online courses and certification programs. Their goal was to enhance student engagement and automate administrative tasks like admissions and grading.",
  solution: "We developed a unified ecosystem, including a central web platform and dedicated mobile apps for iOS and Android. The solution was designed to provide a rich, interactive learning experience with key features:",
  highlights: [
    {
      title: "",
      description: 'Interactive course modules with video, quizzes, and assignments.'
    },
    {
      title: "",
      description: "Automated student admission and enrollment system."
    },
    {
      title: "",
      description: "Secure online examination portal with real-time progress tracking."
    },
    {
      title: "",
      description: "A collaborative forum for students and instructors."
    },
    {
      title: "",
      description: "Personalized student dashboards and performance analytics."
    },
  ],
  details: [
    {
      title: "Categories",
      items: ["Education"]
    },
    {
      title: "Client",
      items: ["LOCATION: India"]
    },
    {
      title: "What We Did",
      items: ["Android App Development", "iPhone App Development", "Website Development"]
    },
    {
      title: "Year",
      items: ["2021"]
    }
  ],
  caseStudyLinkText: "View Full Case Study",
  caseStudyLinkUrl: "/case-study"
};

const chooseUsData = {
  heading: 'Why',
  highlighted: 'Choose',
  subHeading: 'Us',
  description: 'We combine educational insight with technological expertise to create platforms that are powerful, intuitive, and perfectly aligned with the goals of modern learning.',
  image: {
    src: 'Back to school!.json',
    alt: 'Choose Us Image',
    // width: 500,
    // height: 500,
  },
  features: [
    {
      icon: 'fas fa-wallet',
      title: 'Lower Learning Cost',
      text: 'Our efficient digital platforms reduce administrative overhead and resource costs, making quality education more accessible.',
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'Learn With Experts',
      text: 'We build systems that connect students with educators through interactive tools, live sessions, and virtual classrooms.',
    },
    {
      icon: 'fas fa-layer-group',
      title: 'Different Course Variation',
      text: 'Our flexible platforms allow you to create and manage a diverse range of courses, from academic subjects to vocational training.',
    },
  ],
};

const keyBenefitsData = {
  title: 'Key Features & Benefits',
  description: 'Here’s why businesses choose us to strengthen their teams with highly capable tech talent.',
  features: [
    {
      icon: 'lock-closed-outline',
      title: 'Secure & Reliable',
      description: 'Data protection and privacy.',
    },
    {
      icon: 'settings-outline',
      title: 'Customizable',
      description: "Solutions as per your institute's need.",
    },
    {
      icon: 'trending-up-outline',
      title: 'Scalable',
      description: 'Designed to grow with your institution.',
    },
    {
      icon: 'balloon-outline',
      title: 'User Friendly',
      description: 'Easy to use interfaces for everyone.',
    },
  ],
};

const Education = () => {
  return (
    <div>
        <EducationBanner/>
        <EducationChooseUs
            heading={chooseUsData.heading}
            highlighted={chooseUsData.highlighted}
            subHeading={chooseUsData.subHeading}
            description={chooseUsData.description}
            image={chooseUsData.image}
            features={chooseUsData.features}
        />
        <RetailManagementSystem
            title={educationTitle}
            subtitle={educationSubtitle}
            features={educationFeatures}
        />
        <EducationKeyBenefitsSection
            title={keyBenefitsData.title}
            description={keyBenefitsData.description}
            features={keyBenefitsData.features}
        />
        <RetailCaseStudy {...caseStudyData} />;
        <QuickConsultation/>
    </div>
  )
}

export default Education;