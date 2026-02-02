import { NextResponse } from 'next/server';

export async function GET() {
  const plans = [
    {
      type: 'basic',
      img: '/img/education-banner.png',
      price: '20,000',
      amount: 20000,
      title: 'Startup Management',
      btnClass: 'btn-basic',
      bubbleClass: 'basic-bubble',
      gradVar: 'var(--basic-grad)',
      letter: 'S',
      features: [
        { text: 'Manage Lead', active: true },
        { text: 'Databases', active: true },
        { text: 'Email', active: false },
        { text: 'Unlimited Traffic', active: false }
      ]
    },
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
  ];

  return NextResponse.json(plans, { status: 200 });
}
