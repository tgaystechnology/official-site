'use client';
import React from 'react';
import Image from 'next/image';

const DashboardPreview = ({ title, image }) => {
  return (
    <section className="business-dashboard-img-sec">
      <div className="container">
        <div className="business-dashboard-wrap">
          <h2 className="heading-title">{title}</h2>
          <div className="dashboard">
            <Image 
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={image.className || ''}
              unoptimized={image.unoptimized || false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
