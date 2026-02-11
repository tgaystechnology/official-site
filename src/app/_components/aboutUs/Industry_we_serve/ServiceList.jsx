import React from 'react';
import Image from 'next/image';

const ServiceList = ({ services }) => {
  return (
    <section className="service-list py-12" role="region" aria-labelledby="services-list-heading">
      <div className="container mx-auto px-4">
        <div className="row overlap flex flex-wrap -mx-4">
          {services.map((service) => (
            <div key={service.id} className="col-sm-12 col-md-12 col-lg-4 px-4 mb-8 lg:mb-0" itemScope
          itemType="https://schema.org/Service">
              <div className="box-image-4 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="media-img relative h-48">
                  <Image
                    src={service.image}
                    alt={`${service.title} service by TGAYS Technology`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="img-fluid"
                    itemProp="image"
                  />
                </div>
                <div className="body-content p-6">
                  <h3 className="text-black mb-3 text-xl font-semibold">
                    <a href="#" className="hover:text-blue-600 transition-colors duration-200" aria-label={`Read more about ${service.title} service`}>
                      {service.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 leading-relaxed" itemProp="description">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
