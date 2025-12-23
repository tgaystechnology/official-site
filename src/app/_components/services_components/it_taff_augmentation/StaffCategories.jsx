'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';

const StaffCategories = () => {
  // Staff categories data
  const categories = [
    {
      id: 1,
      image: "web development.json",
      alt: "Full Stack Developer",
      category: "Development",
      title: "Full Stack Developer",
      // link: "/hr-consulting",
      technologies: "React, Node.js, Python, AWS, Next.js",
      experience: "5+ years of experience"
    },
    {
      id: 2,
      image: "Mobile App Showcase.json",
      alt: "Mobile Developer",
      category: "Mobile Solutions",
      title: "Mobile Developer",
      technologies: "React Native, Flutter, iOS, Android",
      experience: "4+ years of experience"
    },
    {
      id: 3,
      image: "IT Operations.json",
      alt: "DevOps Engineer",
      category: "Infrastructure",
      title: "DevOps Engineer",
      // link: "/staffing-solutions",
      technologies: "Docker, Kubernetes, AWS, CI/CD",
      experience: "6+ years of experience"
    },
    {
      id: 4,
      image: "Data Analytics and Research.json",
      alt: "Data Scientist",
      category: "Data & Analytics",
      title: "Data Scientist",
      // link: "/staffing-solutions",
      technologies: "Python, Machine Learning, SQL, Tableau",
      experience: "5+ years of experience"
    }
  ];

  return (
    <section className="staff-categories">
      <div className="container">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 className="heading-title">Staff Categories</h2>
          <p>Explore our pool of industry-ready professionals available for immediate deployment.</p>
        </div>

        <div className="row clearfix">
          {categories.map((category) => (
            <div key={category.id} className="col-lg-3 col-md-6 col-sm-12 service-block">
              <div className="service-block-one">
                <div className="inner-box">
                  <figure className="image-box">
                    {/* <Image 
                      src={category.image} 
                      alt={category.alt}
                      width={300}
                      height={200}
                      className="img-fluid"
                    /> */}
                    <Lottie
                      path={`/lottie/${category.image}`}
                      loop
                      autoplay
                      className=""
                    />
                    <span className="category">{category.category}</span>
                  </figure>
                  <div className="lower-content">
                    {category.link ? (
                      <Link href={category.link} legacyBehavior>
                        <a><h3>{category.title}</h3></a>
                      </Link>
                    ) : (
                      <h3>{category.title}</h3>
                    )}
                    <p className="technology-text">{category.technologies}</p>
                    <p className="experience-text">{category.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffCategories;