import React from 'react';

const RetailWebsiteFeatures = () => {
  const features = [
    [
      {
        id: 1,
        icon: "cube",
        title: "Product Management",
        description: "Easily add, edit, and organize unlimited products with intuitive categorization and high-quality images."
      },
      {
        id: 2,
        icon: "card",
        title: "Secure Payments",
        description: "Build customer trust with secure payment gateways like Razorpay and Stripe for smooth transactions."
      },
      {
        id: 3,
        icon: "list",
        title: "Order & Inventory",
        description: "Seamlessly manage online orders while automatically syncing with your real-time inventory levels."
      }
    ],
    [
      {
        id: 4,
        icon: "pricetag",
        title: "Offers & Coupons",
        description: "Boost sales and loyalty by creating dynamic discount codes and special promotional events."
      },
      {
        id: 5,
        icon: "phone-portrait",
        title: "Mobile Friendly",
        description: "Deliver a flawless shopping experience with 100% responsive designs for all devices."
      },
      {
        id: 6,
        icon: "search",
        title: "SEO Optimized",
        description: "Attract more customers with a website built on SEO best practices to achieve higher search rankings."
      }
    ]
  ];

  return (
    <section className="process-two">
      <div className="container">
        <div className="crumina-module crumina-heading align-center">
          <h2 className="heading-title">Retail Website Features</h2>
          <p>Extend your reach beyond the physical store. We build powerful e-commerce websites that drive online sales and create exceptional customer experiences.</p>
        </div>

        {features.map((row, rowIndex) => (
          <ul key={`row-${rowIndex}`} className="row list-unstyled">
            {row.map(feature => (
              <li key={feature.id} className="col-xl-4 col-lg-4">
                <div className="process-two__single">
                  <div className="process-two__count">
                    <ion-icon name={feature.icon} className="icon"></ion-icon>
                  </div>
                  <h3 className="process-two__title">{feature.title}</h3>
                  <p className="process-two__text">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default RetailWebsiteFeatures;