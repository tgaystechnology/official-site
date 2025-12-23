"use client";
import React, { useState } from "react";
import styles from "./FocusCards.module.css";

export const Card = React.memo(({
  card,
  index,
  hovered,
  setHovered
}) => {
  // Determine card state classes
  const getCardClasses = () => {
    let classes = [styles.card];
    
    if (hovered !== null && hovered !== index) {
      classes.push(styles.cardBlurred);
    } else if (hovered === index) {
      classes.push(styles.cardFocused);
    }
    
    return classes.join(' ');
  };

  // Determine overlay classes
  const getOverlayClasses = () => {
    let classes = [styles.overlay];
    
    if (hovered === index) {
      classes.push(styles.overlayVisible);
    }
    
    return classes.join(' ');
  };

  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      onFocus={() => setHovered(index)}
      onBlur={() => setHovered(null)}
      className={getCardClasses()}
      role="button"
      tabIndex={0}
      aria-label={`View ${card.title}`}
    >
      <img 
        src={card.src} 
        alt={card.title} 
        className={styles.cardImage}
        loading="lazy"
      />
      <div className={getOverlayClasses()}>
        <div className={styles.cardTitle}>
          {card.title}
        </div>
      </div>
    </div>
  );
});

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={styles.focusCardsContainer}>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}