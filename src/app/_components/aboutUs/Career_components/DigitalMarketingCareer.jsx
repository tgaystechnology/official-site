import React from 'react';
import Image from 'next/image';
import DigitalMarketingJobOne from './DigitalMarketingJobOne';
import JobPosting from './JobPosting';

const DigitalMarketingCareer = () => {
  return (
    <div 
      className="process content-wrapper career-page bg-cover" 
      style={{ 
        // backgroundImage: 'url(/img/pattern-8.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="career-content">
            <DigitalMarketingJobOne/>
            <JobPosting/>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingCareer;