import React from 'react';

const PortfolioShowcase = ({ sectionTitle = "Portfolio", projects = [] }) => {
  return (
    <section className="portfolio-sec first-portfolio website-sceen-port">
      <div className="container">
        <div className="portfolio-boxs-wrap">
          <div className="crumina-module crumina-heading text-center">
            <h2 className="heading-title">{sectionTitle}</h2>
          </div>
          
          {projects.map((project, index) => {
            const isImageLeft = project.imagePosition === 'left';
            const wrapperClass = index === 0 ? 'portfolio-wrap-first' : 
                               index === 1 ? 'portfolio-wrap-second' : 
                               'portfolio-wrap-third';
            
            return (
              <div key={index} className={wrapperClass}>
                <div className="row">
                  {/* Image Column */}
                  <div className={`col-12 col-md-6 col-lg-6 ${!isImageLeft ? 'order-md-2' : ''}`}>
                    <div className="port-img">
                      <img src={project.image} alt={project.imageAlt} />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`col-12 col-md-6 col-lg-6 ${!isImageLeft ? 'order-md-1' : ''}`}>
                    <div className="website-details">
                      <div className="title-text">
                        <h4>{project.title}</h4>
                        <p className="short-description">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="technology-used">
                        <ul>
                          {project.technologies.map((tech, techIndex) => (
                            <li key={techIndex} className={tech.colorClass}>
                              {tech.name}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="highlights-sec">
                        <h4>Highlights</h4>
                        <ul>
                          {project.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex}>{highlight}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="demo-btn">
                        <a href={project.demoLink} className="btn top_header_btn">
                          {project.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
