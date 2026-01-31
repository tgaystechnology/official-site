import React from 'react';
import PricingBanner from '@/app/_components/products/PricingBanner';
import PricingCards from '@/app/_components/products/PricingCards';

export const metadata = {
  title: 'Pricing | T-GAYS Technology',
  description: 'Explore our flexible pricing plans for AI solutions, web development, and business automation services.',
};

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <PricingBanner />
      <PricingCards />
      <section className="container pt-50 pb-70">
        <div className="text-center">
             <p className="mt-2 text-gray-600">
                For custom enterprise solutions, please contact us.
            </p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
