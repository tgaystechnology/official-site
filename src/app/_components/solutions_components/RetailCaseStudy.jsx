import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RetailCaseStudy = ({ 
  backgroundImage,
  heading,
  subHeading,
  image,
  challenge,
  solution,
  highlights,
  details,
  caseStudyLinkText,
  caseStudyLinkUrl
}) => {
  return (
    <section 
      className="story-section-seven bg-cover" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="crumina-module hm-easy_title text-center">
          <h2 className="heading-title">
            <span className="c-primary">{heading.primary}</span> {heading.secondary}
          </h2>
        </div>
        
        <div className="row">
          <div className="image-column col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <div className="inner-column">
              <figure className="image-1">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </figure>
            </div>
          </div>
          
          <div className="content-column col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title">
                <h2>{subHeading}</h2>
                <div className="text">
                  <p><strong>The Challenge:</strong> {challenge}</p>
                  <p><strong>Our Solution:</strong> {solution}</p>
                </div>
                
                <h4 className="highlight-title">Highlights:</h4>
                <ul className="list-unstyled" style={{ paddingLeft: '20px', listStyle: 'disc' }}>
                  {highlights.map((item, index) => (
                    <li key={index} style={{ marginBottom: '5px' }}>
                      <strong>{item.title}</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="content-box">
                <div className="row">
                  {details.map((block, index) => (
                    <div key={index} className="about-block-seven col-lg-6 col-md-6 col-sm-12">
                      <h5 className="title">{block.title}</h5>
                      <ul>
                        {block.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="btn-box d-flex justify-content-between">
                  <div className="founder-info">
                    <Link href={caseStudyLinkUrl} className="btn btn-main">
                      {caseStudyLinkText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailCaseStudy;
