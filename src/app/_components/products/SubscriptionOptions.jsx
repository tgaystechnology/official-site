import React, { useState, useEffect } from 'react';
import styles from './SubscriptionOptions.module.css';

const SubscriptionOptions = ({ basePrice, features, setSelectedSubscription, selectedSubscription }) => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Provide some default features if none passed
    const defaultFeatures = [
        "Dashboard Access",
        "Analytics Tools",
        "Dedicated Support",
        "Weekly Reports",
        "Cloud Storage"
    ];
    
    const displayFeatures = features && features.length > 0 ? features : defaultFeatures;

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://lmsadmin.tgaystechnology.com/api/packages/');
                if (!response.ok) {
                    throw new Error('Failed to fetch subscription packages');
                }
                const data = await response.json();
                
                // Map API data to component structure
                const mappedPlans = data.map(item => {
                    let period = `${item.duration_days} days`;
                    if (item.duration_days === 30) period = "per month";
                    else if (item.duration_days === 365) period = "per year";
                    else if (item.duration_days === 180) period = "6 months";

                    return {
                        id: item.id,
                        title: item.name,
                        price: parseFloat(item.price),
                        period: period,
                        // Use features from API if available, otherwise use props/defaults
                        features: (item.features && Array.isArray(item.features)) 
                            ? item.features.map(f => ({ text: f, type: '✓' }))
                            : displayFeatures.slice(0, 3).map(f => ({ text: f, type: '✓' })),
                        isHighlighted: item.is_popular || false,
                        badgeText: item.is_popular ? "BEST OFFER!" : null,
                        buttonText: "BOOK YOUR DEMO"
                    };
                });

                setPlans(mappedPlans);
            } catch (err) {
                console.error("Error fetching packages:", err);
                setError(err.message);
                
                // Fallback to previous hardcoded logic if API fails (optional but safe)
                const monthlyPrice = Math.round(basePrice / 12);
                setPlans([
                    {
                        title: "1 Month",
                        price: Math.round(monthlyPrice * 1.5),
                        period: "per month",
                        features: displayFeatures.slice(0, 3).map(f => ({ text: f, type: '✓' })),
                        isHighlighted: false,
                        buttonText: "BOOK YOUR DEMO"
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
                        buttonText: "BOOK YOUR DEMO"
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
                        buttonText: "BOOK YOUR DEMO"
                    }
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, [basePrice, displayFeatures]);

    const handleSelectClick = (planTitle) => {
        if (setSelectedSubscription) {
            setSelectedSubscription(planTitle);
        }
        const nameInput = document.getElementById('payment-name-input');
        if (nameInput) {
            nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => nameInput.focus(), 500); // Small delay to allow scroll to complete
        }
    };

    if (loading) {
        return (
            <div className={styles.containerWrapper}>
                <div className={styles.container} style={{ justifyContent: 'center', padding: '40px' }}>
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container}>
                {plans.map((plan, idx) => (
                    <div key={idx} className={`${styles.card} ${plan.isHighlighted || selectedSubscription === plan.title ? styles.cardHighlighted : ''}`}>
                        {plan.badgeText && <div className={styles.badge}>{plan.badgeText}</div>}
                        
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
                            className={`${styles.selectBtn} ${plan.isHighlighted || selectedSubscription === plan.title ? styles.btnHighlighted : ''}`}
                            onClick={() => handleSelectClick(plan.title)}
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
