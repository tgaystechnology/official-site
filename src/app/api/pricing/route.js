import { NextResponse } from 'next/server';

export async function GET() {
  const plans = [
    {
      type: 'quiz-master-lms-plan',
      img: '/img/student-home-page.png',
      price: '49,999',
      amount: 49999,
      title: 'Quiz Master LMS',
      btnClass: 'btn-basic',
      bubbleClass: 'basic-bubble',
      gradVar: 'var(--basic-grad)',
      letter: 'Q',
      features: [
        { text: 'Super Admin Dashboard', active: true },
        { text: 'Class Schedule', active: true },
        { text: 'Instructor Dashboard', active: true },
        { text: 'Quiz Selection', active: true },
        { text: 'Student Dashboard', active: true },
        { text: 'AI Hints In Quiz', active: true },
        { text: 'Secure Payment', active: true },
        { text: 'Payment Reminder', active: true },
        { text: 'Track Revenue', active: true },
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
