"use client";
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react"
import styles from "./Carousel.module.css";

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className = "",
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    };
  }, [api, onSelect])

  // Combine CSS modules class with any additional className
  const carouselClass = `${styles.carousel} ${className}`.trim();

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}>
      <div
        onKeyDownCapture={handleKeyDown}
        className={carouselClass}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({
  className = "",
  ...props
}) {
  const { carouselRef, orientation } = useCarousel()

  // Combine classes for the items container
  const itemsContainerClass = [
    styles.carouselItemsContainer,
    orientation === "horizontal" 
      ? styles.carouselItemsContainerHorizontal 
      : styles.carouselItemsContainerVertical,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={carouselRef}
      className={styles.carouselContent}
      data-slot="carousel-content">
      <div
        className={itemsContainerClass}
        {...props} />
    </div>
  );
}

function CarouselItem({
  className = "",
  responsive = false,
  ...props
}) {
  const { orientation } = useCarousel()

  // Combine classes for the carousel item
  const itemClass = [
    styles.carouselItem,
    responsive && styles.carouselItemResponsive,
    orientation === "horizontal" 
      ? styles.carouselItemHorizontal 
      : styles.carouselItemVertical,
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={itemClass}
      {...props} />
  );
}

function CarouselPrevious({
  className = "",
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  // Combine classes for the previous button
  const buttonClass = [
    styles.previousButton,
    orientation === "horizontal" 
      ? styles.previousButtonHorizontal 
      : styles.previousButtonVertical,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      data-slot="carousel-previous"
      className={buttonClass}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}>
      <ArrowLeft className={styles.buttonIcon} />
      <span className={styles.srOnly}>Previous slide</span>
    </button>
  );
}

function CarouselNext({
  className = "",
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  // Combine classes for the next button
  const buttonClass = [
    styles.nextButton,
    orientation === "horizontal" 
      ? styles.nextButtonHorizontal 
      : styles.nextButtonVertical,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      data-slot="carousel-next"
      className={buttonClass}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}>
      <ArrowRight className={styles.buttonIcon} />
      <span className={styles.srOnly}>Next slide</span>
    </button>
  );
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };