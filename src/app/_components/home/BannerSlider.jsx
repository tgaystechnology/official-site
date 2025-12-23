'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const BannerSlider = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.bootstrap) {
      const carouselElement = document.getElementById('carouselExampleCaptions');
      if (carouselElement) {
        new window.bootstrap.Carousel(carouselElement);
      }
    }
  }, []);

  return (
    <div className="content-wrapper">
      <div
        id="carouselExampleCaptions"
        className="carousel slide home_banner_slider_sec"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <Image
              src="/img/hero-ai-banner.png"
              className="d-block w-100 home-img"
              alt="banner"
              width={1920}
              height={800}
              priority
            />
            <div className="overlay" />
            <div className="carousel-caption  d-md-block home-page-slider-sec home-first-slider">
              <h5>
                Empowering the Future With AI
                <br />
              </h5>
              <p>
                We integrate advanced Artificial Intelligence to create intelligent, predictive, and adaptive digital solutions. Let us help you unlock data-driven insights, automate complex processes, and build a competitive advantage that lasts.
              </p>
              <Link href="/contact-us">
                <span className="title">Schedule a Free Consultation</span>
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <Image
              src="/img/banner.png"
              className="d-block w-100 home-img"
              alt="banner"
              width={1920}
              height={800}
              priority
            />
            <div className="overlay" />
            <div className="carousel-caption  d-md-block home-page-slider-sec home-first-slider">
              <h5>
                Trusted for SaaS, Websites, Mobile and Web Apps
                <br />
              </h5>
              <p>
                Many businesses get bogged down in daily operations. We build solutions that automate core functions, freeing you to focus on strategic growth and profitability.
              </p>
              <Link href="/contact-us">
                <span className="title">Schedule a Free Consultation</span>
              </Link>
            </div>
          </div>

          <div className="carousel-item active">
            <Image
              src="/img/mobile-banner.png"
              className="d-block w-100 home-img"
              alt="mobile banner"
              width={1920}
              height={800}
            />
            <div className="overlay" />
            <div className="carousel-caption d-md-block home-page-slider-sec">
              <h5>Building the Future: Our Powerful Tech Stack</h5>
              <p>
                We leverage cutting-edge technologies (PYTHON, AI, DJANGO, JAVA, NODE, REACT, NEXT, REACT
                NATIVE, PHP) to craft exceptional digital experiences.
              </p>
              <Link href="/contact-us">
                <span className="title">Schedule a Free Consultation</span>
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <Image
              src="/img/banner-1.png"
              className="d-block w-100 home-img"
              alt="banner 1"
              width={1920}
              height={800}
            />
            <div className="overlay" />
            <div className="carousel-caption d-md-block home-page-slider-sec empowering_industries">
              <h5>100+ Client Success Stories Across 23 Countries</h5>
              <p>
                We craft innovative solutions that drive success in{' '}
                <b>Finance, Travel &amp; Tourism, Healthcare, E-commerce, and Education.</b> We have got a
                Proven Track Record of Serving 100+ Clients Across 23 Countries
              </p>
              <Link href="/contact-us">
                <span className="title">Schedule a Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default BannerSlider;
