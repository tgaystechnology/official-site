import CTASection from '@/app/_components/home/CTASection';
import DashboardPreview from '@/app/_components/products/DashboardPreview';
import GymErpBanner from '@/app/_components/products/gym_erp/GymErpBanner';
import GymErpBenefits from '@/app/_components/products/gym_erp/GymErpBenefits';
import GymErpBenefitsSecondSection from '@/app/_components/products/gym_erp/GymErpBenefitsSecondSection';
import GymErpHowItWorks from '@/app/_components/products/gym_erp/GymErpHowItWorks';
import WhoCanUseProduct from '@/app/_components/products/WhoCanUseProduct';
import React from 'react'

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/products/gym-erp' } // This should match exactly what's in your database
  });
}

const data = {
  title: "ERP Dashboard Preview",
  image: {
    src: "/img/erp-img-full.png",
    alt: "CRM Dashboard Preview",
    width: 550,
    height: 379,
    className: "",
    unoptimized: true,
  },
};

const whoCanUseData = {
  title: (
    <>
      Who <span className="c-primary">Can Use?</span>
    </>
  ),
  description:
    "Our versatile Gym ERP is the perfect fit for a wide range of fitness businesses, whether you're just starting out or managing multiple locations.",
  items: [
    {
      icon: 'storefront-outline',
      title: 'Gyms',
      text: 'Manage memberships, track biometric attendance, and handle billing for large-scale commercial gym operations with ease.',
    },
    {
      icon: 'heart-outline',
      title: 'Fitness Studios',
      text: 'Perfect for yoga, pilates, or HIIT studios to manage class schedules, process member payments, and track client data.',
    },
    {
      icon: 'body-outline',
      title: 'Health Clubs',
      text: 'Streamline operations for health clubs offering diverse services. Manage members, trainers, and finances all in one place.',
    },
    {
      icon: 'man-outline',
      title: 'Personal Trainers',
      text: 'Organize client schedules, track individual payments, and manage your client roster efficiently to grow your personal training business.',
    },
  ],
};


const ProductsGymErp = () => {
  return (
    <div>
        <GymErpBanner/>
        <GymErpBenefits/>
        <GymErpHowItWorks/>
        <GymErpBenefitsSecondSection/>
        <DashboardPreview {...data} />
        <WhoCanUseProduct
          title={whoCanUseData.title}
          description={whoCanUseData.description}
          items={whoCanUseData.items}
        />
        <CTASection
            title="Ready to Transform Your Fitness Business?"
            description="Stop juggling spreadsheets and manual processes. Our Gym ERP provides a complete, easy-to-use solution to automate your tasks, increase revenue, and deliver an exceptional member experience. Let's build a stronger business, together."
        />
    </div>
  )
}

export default ProductsGymErp;