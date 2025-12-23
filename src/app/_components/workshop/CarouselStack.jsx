'use client';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './CarouselStack.module.css';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';

const MAX_VISIBILITY = 3;

// ======================
// Card Inner (YouTube)
// ======================
const CardInner = ({ title, subtitle, text, videoId, iframeRef }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>

        <div className={styles.left}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
          <p className={styles.text}><strong>Feedback:</strong> {text}</p>
        </div>

        <div className={styles.right}>
          <iframe
            ref={iframeRef}
            className={styles.video}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default function CarouselStack() {
  // ========== Replace static videos with YT video IDs ==========
  const cards = [
    {
      title: 'Arjun Singh Negi',
      subtitle: 'BCA 2nd Year',
      text: 'A very friendly and interactive way to communicate with students',
      videoId: 'jG2DgbrBbYI', // <-- replace
    },
    {
      title: 'Sachin',
      subtitle: 'BCA 2nd Year',
      text: 'Najish sir way to teach students ',
      videoId: 'gDPmynjpFcY',
    },
    {
      title: 'Jayasri Tripathi',
      subtitle: 'BCA 2nd Year',
      text: 'The way of teaching practically and with hands-on',
      videoId: '0Oit1xuRJFo',
    },
    {
      title: 'Vibhu Raj Dubey',
      subtitle: 'BCA 3rd Year',
      text: 'The friendly nature of the trainer inspired us. Because somewhere we gets lack to gain experience due to a poor presentor.',
      videoId: 'FSfoLtSheZo',
    },
  ];

  const [active, setActive] = useState(1);
  const playerRefs = useRef([]);
  const iframeRefs = useRef([]);

  // ============================
  // Load YouTube IFRAME API
  // ============================
  useEffect(() => {
    if (window.YT) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      iframeRefs.current.forEach((iframe, index) => {
        if (iframe) {
          playerRefs.current[index] = new window.YT.Player(iframe);
        }
      });
    };
  }, []);

  // ============================
  // Auto-pause previous video
  // ============================
  useEffect(() => {
    playerRefs.current.forEach((player, index) => {
      if (player && index !== active) {
        player.pauseVideo();
      }
    });
  }, [active]);

  const prev = useCallback(() => setActive(a => Math.max(0, a - 1)), []);
  const next = useCallback(() => setActive(a => Math.min(cards.length - 1, a + 1)), [cards.length]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className={styles.student_testimonial_sec}>
       <h2 className={styles.carouselTitle}>Student Testimonials</h2>
      <div className={styles.wrapper}>
        <div className={styles.carousel}>
          {active > 0 && (
            <button className={`${styles.nav} ${styles.leftNav}`} onClick={prev}>
              <TiChevronLeftOutline />
            </button>
          )}

          {cards.map((card, i) => {
            const offset = (active - i) / 1;
            const absOffset = Math.abs(active - i);

            const style = {
              ['--offset']: offset,
              ['--abs-offset']: absOffset,
              ['--direction']: Math.sign(active - i) || 0,
              ['--active']: i === active ? 1 : 0,
              pointerEvents: i === active ? "auto" : "none",
              opacity: absOffset >= MAX_VISIBILITY ? 0 : 1,
              display: absOffset > MAX_VISIBILITY ? "none" : "block",
            };

            return (
              <div key={i} className={styles.cardContainer} style={style}>
                <CardInner
                  {...card}
                  iframeRef={(el) => (iframeRefs.current[i] = el)}
                />
              </div>
            );
          })}

          {active < cards.length - 1 && (
            <button className={`${styles.nav} ${styles.rightNav}`} onClick={next}>
              <TiChevronRightOutline />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
