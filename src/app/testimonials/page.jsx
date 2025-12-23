import ClientsFeedback from "../_components/testimonials/ClientsFeedback";
import TestimonialBanner from "../_components/testimonials/TestimonialBanner";

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/testimonials' } // This should match exactly what's in your database
  });
}

const TestimonialsPage = () => {
  return (
    <div>
        <TestimonialBanner/>
        <ClientsFeedback/>
    </div>
  )
}

export default TestimonialsPage;
