import React from 'react';
import Link from 'next/link';

const ServiceTechStack = ({
  heading, // accepts JSX (not just plain text)
  description,
  cards = [],
  minItemsPerCard = 10, // minimum number of items per card (including hidden ones)
}) => {
  // Function to add hidden placeholder items to maintain consistent card heights
  const addHiddenItems = (items, minItems) => {
    const currentItems = [...items];
    const itemsNeeded = Math.max(0, minItems - currentItems.length);
    
    // Add hidden placeholder items
    for (let i = 0; i < itemsNeeded; i++) {
      currentItems.push({
        text: 'placeholder', // placeholder text (won't be visible due to hidden-sec class)
        hidden: true
      });
    }
    
    return currentItems;
  };

  return (
    <section className="background-contain bg-13 medium-padding100 pricing-tab-sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="crumina-module crumina-heading align-center">
              <h2 className="heading-title mt-5">{heading}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="row pricing-wrap">
          {cards.map((card, index) => {
            // Add hidden items to maintain consistent height
            const itemsWithHidden = addHiddenItems(card.items || [], card.minItems || minItemsPerCard);
            
            return (
              <div
                className={`col-lg-4 col-md-12 col-sm-12 col-xs-12 ${
                  card.highlight ? 'main-plan' : ''
                }`}
                key={index}
              >
                <div className="crumina-module crumina-pricing-tables-item pricing-tables-item-standard">
                  <div className="main-pricing-content">
                    <h2 className="h1 rate">{card.title}</h2>
                    <ul className="pricing-tables-position">
                      {itemsWithHidden.map((item, idx) => (
                        <li 
                          className={`position-item ${item.hidden ? 'hidden-sec' : 'd-flex align-items-center gap-3'}`} 
                          key={idx}
                        >
                          {!item.hidden && (
                            <>
                              <span>
                                <ion-icon name={item.icon || 'ellipsis-horizontal-outline'}></ion-icon>
                              </span>
                              {item.text}
                            </>
                          )}
                          {item.hidden && item.text}
                        </li>
                      ))}
                    </ul>
                    {card.ctaLink && (
                      <Link href={card.ctaLink} className="pincing-read-more">
                        {card.ctaText || 'Consult Now'}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceTechStack;