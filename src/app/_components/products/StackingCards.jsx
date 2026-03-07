'use client';
import Image from 'next/image';
import styles from './StackingCards.module.css';

// Normal Card Component instead of Stacking
const NormalCard = ({
  title,
  description,
  src,
}) => {
  return (
    <div className={styles.normalCard}>
      <div className={styles.cardTextContent}>
        <h2 className={styles.cardHeader}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
      </div>

      <div className={styles.cardImageWrapper}>
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
      </div>
    </div>
  );
};

export default function StackingCards({ data }) {
  const projects = data || [];

  return (
      <div className={styles.main}>
        <section className={styles.cardsListSection}>
          {projects.map((project, i) => (
            <NormalCard
              key={`p_${i}`}
              {...project}
            />
          ))}
        </section>
      </div>
  );
}
