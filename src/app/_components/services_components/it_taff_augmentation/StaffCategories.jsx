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
    <section className="staff-categories" role="region" aria-labelledby="it-staff-categories-heading">
      <div className="container">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="it-staff-categories-heading" className="heading-title">Staff Categories</h2>
          <p>Explore our pool of industry-ready professionals available for immediate deployment.</p>
        </div>

        <div className="row clearfix d-flex align-items-stretch">
          {categories.map((category) => (
            <div key={category.id} className="col-lg-3 col-md-6 col-sm-12 service-block d-flex mb-4 mb-lg-0">
              <div className="service-block-one w-100" style={{ height: "100%" }}>
                <div className="inner-box" style={{ border: "none", boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 30px", borderRadius: "16px", background: "#fff", overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", padding: "0" }}>
                  <figure className="image-box" aria-hidden="true" style={{ background: "#f8f9fa", padding: "30px 20px 20px 20px", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", margin: "0" }}>
                    <div style={{ width: "100%", maxWidth: "160px", height: "auto" }}>
                      <Lottie
                        path={`/lottie/${category.image}`}
                        loop
                        autoplay
                        className=""
                      />
                    </div>
                    <span className="category" style={{ position: "absolute", top: "15px", right: "15px", background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontSize: "0.75rem", fontWeight: "700", padding: "4px 12px", borderRadius: "30px", textTransform: "uppercase" }}>
                      {category.category}
                    </span>
                  </figure>
                  <div className="lower-content" style={{ padding: "25px 20px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    {category.link ? (
                      <Link href={category.link} legacyBehavior>
                        <a><h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "10px", color: "#111" }}>{category.title}</h3></a>
                      </Link>
                    ) : (
                      <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "10px", color: "#111" }}>{category.title}</h3>
                    )}
                    <p className="technology-text" style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.5", marginBottom: "15px", flexGrow: 1 }}>
                      {category.technologies}
                    </p>
                    <p className="experience-text" style={{ fontSize: "0.85rem", color: "#0083FF", fontWeight: "600", borderTop: "1px solid #f0f0f0", paddingTop: "12px", marginTop: "auto", display: "flex", alignItems: "center", gap: "6px", marginBottom: "0" }}>
                      <span style={{ fontSize: "1.1rem", lineHeight: "1" }}>⏱</span> {category.experience}
                    </p>
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