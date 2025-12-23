'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import clsx from 'clsx';

const ThreeBackground = dynamic(() => import('./ThreeBackgrounds'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />
  ),
});

const slides = [
  {
    id: 0,
    title: 'Our powerful Tech Stack',
    description:
      'Modern frameworks, cloud-native tooling, and scalable architectures — crafted for speed and reliability.',
    cta: 'Explore Stack',
    scene: 'tech',
  },
  {
    id: 1,
    title: 'Our Clients',
    description:
      'Trusted by forward‑thinking teams. Clean integrations, measurable outcomes, lasting partnerships.',
    cta: 'See Clients',
    scene: 'clients',
  },
  {
    id: 2,
    title: 'AI',
    description:
      'From prototyping to production — intelligent systems, embeddings, RAG pipelines, and model ops.',
    cta: 'Discover AI',
    scene: 'ai',
  },
  {
    id: 3,
    title: 'SaaS Services',
    description:
      'Design, build, and scale. Multi-tenant, secure, and observability-first SaaS platforms.',
    cta: 'Our Services',
    scene: 'saas',
  },
];

export default function Slider3D({ className = '' }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 5000); // 5s auto-advance
    return () => clearInterval(t);
  }, [paused]);

  const go = (nextIdx) => {
    setDirection(nextIdx > index ? 1 : -1);
    setIndex((nextIdx + slides.length) % slides.length);
  };

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      x: dir > 0 ? 90 : -90,
      rotateY: dir > 0 ? -35 : 35,
    }),
    center: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 22,
        mass: 0.7,
      },
    },
    exit: (dir) => ({
      opacity: 0,
      x: dir > 0 ? -90 : 90,
      rotateY: dir > 0 ? 35 : -35,
      transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
    }),
  };

  const slide = slides[index];

  return (
    <div
      className={clsx(
        'relative mx-auto w-full max-w-6xl mt-20 sm:mt-24 md:mt-28',
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] h-[360px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
        <div className="absolute inset-0 [perspective:1200px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={slide.id}
              className="absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-sm ring-1 ring-black/5"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D background, right-aligned */}
              <div className="absolute inset-0 z-0">
                <div className="absolute right-0 top-0 h-full w-[72%] sm:w-[64%] md:w-[58%] lg:w-[54%]">
                  <ThreeBackground scene={slide.scene} />
                </div>
              </div>

              {/* Content overlay (overlapping 3D) */}
              <div className="absolute left-5 top-10 sm:left-8 sm:top-12 md:top-14 z-20 max-w-[92%] sm:max-w-md">
                <h3 className="text-slate-900 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  {slide.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm sm:text-base md:text-lg">
                  {slide.description}
                </p>
                <button
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-slate-700 shadow-sm ring-1 ring-black/5 backdrop-blur hover:bg-white hover:shadow-md transition"
                  onClick={() => {}}
                >
                  {slide.cta}
                  <svg
                    aria-hidden="true"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="opacity-70"
                  >
                    <path
                      d="M7 12h10M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots only (arrows removed) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2.5 w-2.5 rounded-full ring-1 ring-black/5 transition ${
                index === i ? 'bg-slate-700' : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}