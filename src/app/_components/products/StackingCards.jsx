'use client';
import { useRef } from 'react';
import { useTransform, motion, useScroll } from 'motion/react';
import Image from 'next/image';
import styles from './StackingCards.module.css';

// Card Component
const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  total,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Calculate dynamic top offset safely
  const topOffset = `calc(-5vh + ${i * 25}px)`;

  return (
    <div
      ref={container}
      className={styles.cardContainer}
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: topOffset,
        }}
        className={styles.card}
      >
        <h2 className={styles.cardHeader}>{title}</h2>
        <div className={styles.cardBody}>
          <div className={styles.cardTextContent}>
            <p className={styles.cardDescription}>{description}</p>
          </div>

          <div className={styles.cardImageWrapper}>
            <motion.div
              className={styles.cardImageInner}
              style={{ scale: imageScale }}
            >
             {src ? (
                <Image 
                    fill 
                    src={src} 
                    alt={title || 'Product Image'} 
                    className={styles.cardImage} 
                />
             ) : (
                 <div style={{width: '100%', height:'100%', backgroundColor: '#e2e8f0'}}>No Image</div>
             )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function StackingCards({ data }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Default data if none provided (or fallback)
  const projects = data || [];

  return (
      <div className={styles.main} ref={container}>
        {/* Intro section removed as requested */}

        <section className={styles.cardsListSection}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                total={projects.length}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </div>
  );
}
