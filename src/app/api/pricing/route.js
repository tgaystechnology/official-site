import { NextResponse } from 'next/server';

export async function GET() {
  const plans = [
    {
      type: 'vidya-ai-lms',
      img: '/img/vidya-ai-lms-banner.png',
      price: '49,999',
      amount: 49999,
      title: 'Vidya AI LMS',
      btnClass: 'btn-basic',
      bubbleClass: 'basic-bubble',
      gradVar: 'var(--basic-grad)',
      letter: 'V',
      features: [
        { text: 'Super Admin Dashboard & Revenue Tracking', active: true },
        { text: 'Schedule Online Classes in Batches', active: true },
        { text: 'AI-Powered Interactive Quiz Creator', active: true },
        { text: 'Competitive Hackathons with AI Assistance', active: true },
        { text: 'Student Progress & Learning Analytics', active: true },
        { text: 'Personalized AI-Based Learning Mentor', active: true },
        { text: 'Automated Attendance & Live Notes', active: true },
        // { text: 'Email', active: false },
        // { text: 'Unlimited Traffic', active: false }
      ],
      sliderImages: [
        { src: '/img/student-home-page.png', alt: 'Startup Management' },
        { src: "/img/admin-dashboard.png", alt: "Admin Dashboard" },
        { src: "/img/admin-dashboard-2.png", alt: "Admin Dashboard 2" },
        { src: "/img/class-schedule.png", alt: "Class Schedule" },
        { src: "/img/instructor.png", alt: "Instructor" },
        { src: "/img/language-selection.png", alt: "Language Selection" },
        // { src: "/img/quiz-selection.png", alt: "Quiz Selection" },
        { src: "/img/student-home-page.png", alt: "Student Home Page" },
        { src: "/img/quiz-protector.png", alt: "Quiz Protector" },
        { src: "/img/ai-hints.png", alt: "AI Hints" },
        { src: "/img/quiz-servilance.png", alt: "Quiz Surveillance" },
      ]
    },
    {
      type: 'taskity',
      img: '/img/taskity-banner.png',
      price: '79,999',
      amount: 79999,
      title: 'Taskity — HRMS & Operations Portal',
      btnClass: 'btn-standard',
      bubbleClass: 'standard-bubble',
      gradVar: 'var(--standard-grad)',
      letter: 'T',
      features: [
        { text: 'Super Admin Operations Dashboard', active: true },
        { text: 'HR & Leaves Approval Matrix & Auditing', active: true },
        { text: 'Financial Ledger & Payroll calculations (CTC, HRA)', active: true },
        { text: 'Performance Rating Visual Sliders & Average Output', active: true },
        { text: 'Project Pipelines & Granular Task Allocation Board', active: true },
        { text: 'Smart Digital Punch-In Clock with break tracking', active: true },
        { text: 'White-Label Branding & RBAC Permissions Control', active: true }
      ],
      sliderImages: [
        { src: '/img/taskity/01.png', alt: 'Taskity Overview' },
        { src: '/img/taskity/02.png', alt: 'Executive Dashboard' },
        { src: '/img/taskity/03.png', alt: 'Financial Ledgers' },
        { src: '/img/taskity/04.png', alt: 'Attendance Punching' },
        { src: '/img/taskity/05.png', alt: 'Performance Evaluations' },
        { src: '/img/taskity/06.png', alt: 'Project Pipelines' },
        { src: '/img/taskity/07.png', alt: 'Task Orchestration' },
        { src: '/img/taskity/08.png', alt: 'Invoice Vault' },
        { src: '/img/taskity/09.png', alt: 'Payroll Processing' },
        { src: '/img/taskity/10.png', alt: 'Digital Time Clock' }
      ]
    },
    /*
    {
      type: 'standard',
      img: '/img/gymforest.png',
      price: '15,000',
      amount: 15000,
      title: 'Startup Management',
      btnClass: 'btn-standard',
      bubbleClass: 'standard-bubble',
      gradVar: 'var(--standard-grad)',
      letter: 'S',
      features: [
        { text: 'Manage Lead', active: true },
        { text: 'Databases', active: true },
        { text: 'Email', active: true },
        { text: 'Unlimited Traffic', active: false }
      ]
    },
    {
      type: 'premium',
      img: '/img/sip-calculator.png',
      price: '30,000',
      amount: 30000,
      title: '10 minutes delivery app',
      btnClass: 'btn-premium',
      bubbleClass: 'premium-bubble',
      gradVar: 'var(--premium-grad)',
      letter: 'D',
      features: [
        { text: 'Free Support 24/7', active: true },
        { text: 'Databases', active: true },
        { text: 'Email', active: true },
        { text: 'Unlimited Traffic', active: true }
      ]
    }
    */
  ];

  return NextResponse.json(plans, { status: 200 });
}
