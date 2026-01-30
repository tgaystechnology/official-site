"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./../../../components/ui/carousel";
import styles from "./CaseStudy.module.css";

const CaseStudyCarousel = () => {
  const [api, setApi] = useState(null);

  const caseStudies = [
    {
      id: 1,
      image: "/img/ezshopit-cst-list-img.png",
      alt: "E-Commerce Case Study",
      title: "Ezshopit",
      description: "Multi-Currency, Multi-Vendor E-Commerce Platform",
      link: "/case-study/ezshopit",
    },
    {
      id: 2,
      image: "/img/worthmetrix-cst-list-img.png",
      alt: "Web App Case Study",
      title: "Worthmetrix",
      description: "Business Health Analysis Platform",
      link: "/case-study/worthmetrix",
    },
    {
      id: 3,
      image: "/img/al-cst-list-img.png",
      alt: "Mobile App Case Study",
      title: "EvolveAI",
      description: "AI-Powered Health & Fitness App",
      link: "/case-study/evolveai",
    },
    {
      id: 4,
      image: "/img/martwat-cst-list.png",
      alt: "Website Case Study",
      title: "MartWat",
      description: "Inventory, Warehouse, Sales & POS Management System",
      link: "/case-study/martwat",
    },
  ];

  // autoplay effect
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000); // slide every 3s

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className={styles.section}>
      <div className={styles.shape} aria-hidden="true">
        <Image
          src="/img/intro-v1-shape3.png"
          alt="Decorative shape"
          width={100}
          height={100}
          className={styles.shapeImage}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h2 className={styles.headingTitle}>
            Case <span className={styles.primaryText}>Study</span>
          </h2>
        </div>

        {/* Responsive Carousel Implementation */}
        <div className={styles.carouselContainer}>
          <Carousel
            setApi={setApi}
            className={styles.carouselWrapper}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1, // ✅ keep your original config
            }}
          >
            <CarouselContent>
              {caseStudies.map((caseStudy) => (
                <CarouselItem key={caseStudy.id} responsive={true}>
                  {/* ✅ restored responsive + your styling */}
                  <article className={styles.caseCard}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={caseStudy.image}
                        alt={`${caseStudy.title} case study by TGays Technology`}
                        width={400}
                        height={300}
                        className={styles.caseImage}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.contentArea}>
                      <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
                      <p className={styles.caseDescription}>
                        {caseStudy.description}
                      </p>
                      <Link
                        href={caseStudy.link}
                        className={styles.readMoreLink}
                        aria-label={`Read full case study on ${caseStudy.title}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;
