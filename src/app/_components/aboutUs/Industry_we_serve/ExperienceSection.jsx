import React from 'react';

const ExperienceSection = ({ heading, description }) => {
  return (
    <section className="service-title">
      <div className="crumina-module crumina-heading hm-easy_title text-center">
        <h2 className="heading-title">{heading}</h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
