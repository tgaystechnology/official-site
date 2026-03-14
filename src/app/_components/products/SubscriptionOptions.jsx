import React from 'react';
import styles from './SubscriptionOptions.module.css';

const SubscriptionOptions = ({ basePrice, features }) => {
    // Assuming basePrice is the yearly price.
    // Let's create sensible pricing options based on the base price.
    const monthlyPrice = Math.round(basePrice / 12);
    
    // Provide some default features if none passed
    const defaultFeatures = [
        "Dashboard Access",
        "Analytics Tools",
        "Dedicated Support",
        "Weekly Reports",
        "Cloud Storage"
    ];
    
    const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

    const plans = [
        {
            title: "1 Month",
            price: Math.round(monthlyPrice * 1.5), // Short term premium
            period: "per month",
            features: displayFeatures.slice(0, 3).map(f => ({ text: f, type: '✓' })),
            isHighlighted: false,
            buttonText: "SELECT"
        },
        {
            title: "6 Months",
            price: Math.round(monthlyPrice * 1.2),
            period: "per month",
            features: [
                ...displayFeatures.slice(0, 3).map(f => ({ text: f, type: '✓' })),
                { text: "6 Month Plan Benefits", type: '+' }
            ],
            isHighlighted: true,
            badgeText: "BEST OFFER!",
            buttonText: "SELECT"
        },
        {
            title: "12 Months",
            price: monthlyPrice,
            period: "per month",
            features: [
                ...displayFeatures.slice(0, 3).map(f => ({ text: f, type: '✓' })),
                { text: "Yearly Plan Benefits", type: '+' }
            ],
            isHighlighted: false,
            buttonText: "SELECT"
        }
    ];

    const handleSelectClick = () => {
        const nameInput = document.getElementById('payment-name-input');
        if (nameInput) {
            nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => nameInput.focus(), 500); // Small delay to allow scroll to complete
        }
    };

    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                {plans.map((plan, idx) => (
                    <div key={idx} className={`${styles.card} ${plan.isHighlighted ? styles.cardHighlighted : ''}`}>
                        {plan.isHighlighted && <div className={styles.badge}>{plan.badgeText}</div>}
                        
                        <div className={styles.titleWrapper}>
                            <h3 className={styles.title}>{plan.title}</h3>
                        </div>
                        
                        <ul className={styles.features}>
                            {plan.features.map((feat, fIdx) => (
                                <li key={fIdx} className={styles.feature}>
                                    <span className={styles.check}>{feat.type}</span> {feat.text}
                                </li>
                            ))}
                        </ul>
                        
                        <div className={styles.priceWrapper}>
                            <div className={styles.price}>₹{plan.price.toLocaleString('en-IN')}</div>
                            <div className={styles.period}>{plan.period}</div>
                        </div>
                        
                        <button 
                            className={`${styles.selectBtn} ${plan.isHighlighted ? styles.btnHighlighted : ''}`}
                            onClick={handleSelectClick}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SubscriptionOptions;
