import React from 'react';

import { generateMetadata as generateDynamicMetadata } from '@/lib/generateMetadata';
export async function generateMetadata() {
  return await generateDynamicMetadata({ 
    params: { slug: '/privacy-policy' } // This should match exactly what's in your database
  });
}

const PrivacyPolicy = () => {
  return (
    <div className="pravicy_policy_section">
      <div className="container">
        <h2 className="pravicy_heading_title">Privacy Policy for TGAYS Technology Pvt. Ltd</h2>
        <p className="pravicy_para_title">
          At TGAYS Technology, accessible from www.techsgeeks.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by
          TGAYS Technology and how we use it.
        </p>
        <p className="pravicy_para_title">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
        <p className="pravicy_para_title">
          This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected in TGAYS Technology. This policy is not
          applicable to any information collected offline or via channels other than this website.
        </p>
        
        <h4 className="pravicy_heading_title">Consent</h4>
        <p className="pravicy_para_title">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
        
        <h4 className="pravicy_heading_title">Information we collect</h4>
        <p className="pravicy_para_title">
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <p className="pravicy_para_title">
          If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </p>
        <p className="pravicy_para_title">When you contact us, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
        
        <h4 className="pravicy_heading_title">How we use your information</h4>
        <p className="pravicy_para_title">We use the information we collect in various ways, including to:</p>
        <ul className="list_privacy_policy">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and
            promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
        
        <h4 className="pravicy_heading_title">Log Files</h4>
        <p className="pravicy_para_title">
          TGAYS Technology follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services&apos; analytics. The information collected
          by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any
          information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
        </p>
        
        <h4 className="pravicy_heading_title">Cookies and Web Beacons</h4>
        <p className="pravicy_para_title">
          Like any other website, TGAYS Technology uses cookies. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The
          information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
        </p>
        
        <h4 className="pravicy_heading_title">Advertising Partners Privacy Policies</h4>
        <p className="pravicy_para_title">You may consult this list to find the Privacy Policy for each of the advertising partners of TGAYS Technology.</p>
        <p className="pravicy_para_title">
          Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TGAYS Technology, which are sent directly
          to users&apos; browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising
          content that you see on websites that you visit.
        </p>
        <p className="pravicy_para_title">Note that TGAYS Technology has no access to or control over these cookies that are used by third-party advertisers.</p>
        
        <h4 className="pravicy_heading_title">Third Party Privacy Policies</h4>
        <p className="pravicy_para_title">
          TGAYS Technology&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how to opt-out of certain options.
        </p>
        <p className="pravicy_para_title">
          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective
          websites.
        </p>
        
        <h4 className="pravicy_heading_title">CCPA Privacy Rights (Do Not Sell My Personal Information)</h4>
        <p className="pravicy_para_title">Under the CCPA, among other rights, California consumers have the right to:</p>
        <p className="pravicy_para_title">Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
        <p className="pravicy_para_title">Request that a business delete any personal data about the consumer that a business has collected.</p>
        <p className="pravicy_para_title">Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</p>
        <p className="pravicy_para_title">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        
        <h4 className="pravicy_heading_title">GDPR Data Protection Rights</h4>
        <p className="pravicy_para_title">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <p className="pravicy_para_title">The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
        <p className="pravicy_para_title">
          The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
        </p>
        <p className="pravicy_para_title">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
        <p className="pravicy_para_title">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
        <p className="pravicy_para_title">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
        <p className="pravicy_para_title">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
        <p className="pravicy_para_title">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
        
        <h4 className="pravicy_heading_title">Children&apos;s Information</h4>
        <p className="pravicy_para_title">
          Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
        </p>
        <p className="pravicy_para_title">
          TGAYS Technology does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
        </p>
        
        <h4 className="pravicy_heading_title">Changes to This Privacy Policy</h4>
        <p className="pravicy_para_title">
          We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These
          changes are effective immediately, after they are posted on this page.
        </p>
        
        <h4 className="pravicy_heading_title">Contact Us</h4>
        <p className="pravicy_para_title">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;