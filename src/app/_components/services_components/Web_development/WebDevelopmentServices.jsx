'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';
import { useMediaQuery } from "react-responsive";


const WebDevelopmentServices = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });       // 📱 Mobile
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // 📲 Tablet
    const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1439 }); // 💻 Laptop
    const isDesktop = useMediaQuery({ minWidth: 1440 });     // 🖥️ Large Desktop
  
    let width = 320;
    let height = 300;
  
    if (isMobile) {
      width = 320;
      height = 230;
    } else if (isTablet) {
      width = 200;
      height = 230;
    } else if (isLaptop) {
      width = 200;
      height = 230;
    } else if (isDesktop) {
      width = 500;
      height = 350;
    }

  // Services data
  const services = [
    {
      id: 1,
      image: "web development.json",
      alt: "Website Design & Development",
      icon: "desktop-outline",
      title: "Website Design & Development",
      // link: "/service"
    },
    {
      id: 2,
      image: "Designer.json",
      alt: "Wireframe/Figma Design",
      icon: "pencil-outline",
      title: "Wireframe/Figma Design",
      // link: "/service"
    },
    {
      id: 3,
      image: "Web Development_2.json",
      alt: "Web application development",
      icon: "desktop-outline",
      title: "Web application development",
      // link: "/service"
    },
    {
      id: 4,
      image: "UIUX Designer.json",
      alt: "Front-end Development",
      icon: "desktop-outline",
      title: "Front-end Development",
      // link: "/service"
    },
    {
      id: 5,
      image: "Code typing concept.json",
      alt: "Back-end Development",
      icon: "desktop-outline",
      title: "Back-end Development",
      // link: "/service"
    },
    {
      id: 6,
      image: "API Testing.json",
      alt: "RestFul API Development & Integration",
      icon: "clipboard-outline",
      title: "RestFul API Development & Integration",
      // link: "/service"
    },
    {
      id: 7,
      image: "database.json",
      alt: "Database Design & Setup",
      icon: "reader-outline",
      title: "Database Design & Setup",
      // link: "/service"
    },
    {
      id: 8,
      image: "Password Authentication.json",
      alt: "Website Security & Maintenance",
      icon: "key-outline",
      title: "Website Security & Maintenance",
      // link: "/service"
    },
    {
      id: 9,
      image: "web deployment.json",
      alt: "Website Deployment",
      icon: "rocket-outline",
      title: "Website Deployment",
      // link: "/service"
    },
    {
      id: 10,
      image: "hosting.json",
      alt: "Domain/Hosting/Email Setup",
      icon: "hardware-chip-outline",
      title: "Domain/Hosting/Email Setup",
      // link: "/service"
    }
  ];

  return (
    <section className="wp-service-area-2 pb-25 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wp-section text-center">
              <h2 className="wp-section-title mb-0">
                Our <span className="c-primary">Web Development</span> Services
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-xl-3 col-lg-3 col-md-6">
              <div className="wp-service-item wp-service-item-2 mb-30">
                <div className="wp-service-img wp-service-img-2 w_img">
                  {/* <Link href={service.link}> */}
                      {/* <Image 
                        src={service.image}
                        alt={service.alt}
                        width={300}
                        height={200}
                        className="img-fluid"
                      /> */}
                      <Lottie
                        path={`/lottie/${service.image}`}  // always prepends /lottie/
                        loop
                        autoplay
                        style={{
                          width: "80%",
                          height: "200px",
                          margin: "0 auto",
                        }}
                      />
                  {/* </Link> */}
                  <div className="wp-service-content-icon wp-service-content-icon-2">
                    <ion-icon name={service.icon}></ion-icon>
                  </div>
                </div>
                <div className="wp-service-content wp-service-content-2">
                  <h4 className="wp-service-content-title wp-service-content-title-2">
                    {service.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;