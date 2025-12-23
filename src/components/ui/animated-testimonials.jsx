"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./AnimatedTestimonials.module.css";

// Default testimonials data
const defaultTestimonials = [
  {
    quote:
      "It was fantastic 7 years working with the Team. I didn't even realize, we spent more than 7 years together. Timezone Difference or Remote work was never a barrier.",
    name: "Richard Bonitz",
    designation: "Creative Media Team Technology",
    src: "/img/rich.jpg",
  },
  {
    quote:
      "They turned to be one of our best choice as a Technology partner. They have quick turn-around time easily accessible, cost-effective and has a great value in their work.",
    name: "Francis Wills",
    designation: "Marketing Director",
    src: "/img/francis.png",
  },
  {
    quote:
      "From the half way round the world, we found an excellent IT Offshore Partner. We were looking for a Company which can take care of our 30+ existing websites and can also develop new websites.",
    name: "Chris Shrinkle",
    designation: "Project Manager",
    src: "/img/chris.png",
  },
];

export const AnimatedTestimonials = ({
  testimonials = defaultTestimonials, // fallback to default if not provided
  autoplay = false,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Image Section */}
        <div>
          <div className={styles.imageContainer}>
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className={styles.imageWrapper}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className={styles.image}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text Section */}
        <div className={styles.textContainer}>
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className={styles.name}>{testimonials[active].name}</h3>
            <p className={styles.designation}>
              {testimonials[active].designation}
            </p>
            <motion.p className={styles.quote}>
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className={styles.word}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Controls */}
          <div className={styles.controls}>
            <button onClick={handlePrev} className={styles.button}>
              <IconArrowLeft className={styles.buttonIcon} />
            </button>
            <button onClick={handleNext} className={styles.button}>
              <IconArrowRight
                className={`${styles.buttonIcon} ${styles.buttonIconRight}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
