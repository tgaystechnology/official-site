"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./Testimonials.module.css";

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Richard Stones",
      position: "Creative Media Team Technology",
      text: "It was fantastic. 7 years working with the Team. I didn't even realize, we spent more than 7 years together. Excellent Difference in Results, work and never a failure.",
      image: "/img/rich.jpg",
    },
    {
      id: 2,
      name: "Francis Wills",
      position: "Marketing Director",
      text: "They turned to be one of our best choice as a Technology partner. They have quick turn around time, easily accessible, cost-effective and has a great value in their work.",
      image: "/img/francis.png",
    },
    {
      id: 3,
      name: "Jane Smith",
      position: "Project Manager",
      text: "Their expertise and dedication were evident from the start. They took the time to understand our needs and delivered a solution that exceeded our expectations. I highly recommend them.",
      image: "/img/chris.png",
    },
  ];

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={Style.custom_prev_arrow}
        style={{ ...style }}
        onClick={onClick}
      >
        &lt;
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={Style.custom_next_arrow}
        style={{ ...style }}
        onClick={onClick}
      >
        &gt;
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: true
  };

  return (
    
    <div 
      className={Style.testimonials}
      style={{
        backgroundImage: "url('/img/testi-bg3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Style.testimonial_header}>
              <h3>
                <span className={Style.white_text}>Our</span> <span className={Style.blue_text}>Testimonial</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className={Style.testimonial_slider_container}>
              {isMounted && (
                <Slider {...settings}>
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className={Style.slide_item}>
                      <div className={Style.testimonial_card}>
                        <div className={Style.testimonial_content}>
                          <div className={Style.testimonial_avatar}>
                            <div className={Style.image_wrapper}>
                              <Image 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                width={80}
                                height={80}
                                className={Style.avatar_image}
                              />
                            </div>
                          </div>
                          <p className={Style.testimonial_text}>
                            {testimonial.text}
                          </p>
                          <h5 className={Style.testimonial_name}>
                            {testimonial.name}
                          </h5>
                          <p className={Style.testimonial_position}>
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;