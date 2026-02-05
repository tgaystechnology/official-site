"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
  currentIndex = 0,
  onChange,
}) => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImages = () => {
      const loadPromises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image;
          img.onload = () => resolve(image);
          img.onerror = () => resolve(image); // Continue even if image fails to load
        });
      });

      Promise.all(loadPromises).then((loaded) => {
        setLoadedImages(loaded);
      });
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        const newIndex = (currentIndex + 1) % images.length;
        onChange?.(newIndex);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, currentIndex, images.length, onChange]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {loadedImages.length > 0 && (
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      )}
      {children}
    </div>
  );
};

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}