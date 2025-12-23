import ContactBanner from "../_components/contact/ContactBanner";
import ContactExperts from "../_components/contact/ContactExperts";
import MapSection from "../_components/contact/MapSection";

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/contact-us' } // This should match exactly what's in your database
  });
}

const Contact = () => {
  return (
    <div>
        <ContactBanner/>
        <ContactExperts/>
        <MapSection/>
    </div>
  )
}

export default Contact;
