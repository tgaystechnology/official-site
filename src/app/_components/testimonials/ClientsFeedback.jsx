import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    company: 'PlaNext Consultancy Private Limited',
    rating: 5,
    feedback:
      'TGAYS Technology is great to work with. They followed the given time deadline and delivered as promised. Highly recommended.',
    person: 'PlaNext Consultancy Private Limited',
    location: 'India',
    logo: '/img/Techlab.png',
  },
  {
    company: 'DreamBase (Pty) Ltd',
    rating: 5,
    feedback:
      'It’s a pleasure working with TGAYS Technology. Their team is very skilled and professional.',
    person: 'DreamBase (Pty) Ltd',
    location: 'South Africa',
    logo: '/img/default-company.png',
  },
  {
    company: 'DreamBase (Pty) Ltd',
    rating: 5,
    feedback:
      'TGAYS Technology took over the project with many challenges and solved them successfully and on time.',
    person: 'Eurolan',
    location: 'Bulgaria',
    logo: '/img/default-company.png',
  },
  {
    company: 'MyEzDeal',
    rating: 5,
    feedback:
      'Loved every minute of what we built together with TGAYS Technology! Stay strong, stay well, and most of all, stay hungry for the success your company is destined for.',
    person: 'MyEzDeal',
    location: 'Ohio',
    logo: '/img/default-company.png',
  },
  {
    company: 'DreamBase (Pty) Ltd',
    rating: 5,
    feedback:
      "Working with TGAYS Technology was a great experience. Their team’s skills enabled the project to be completed successfully and very efficiently. Thoroughly recommended for any technical services.",
    person: 'Conner Nudd',
    location: 'Ipswich, United Kingdom',
    logo: '/img/default-company.png',
  },
  {
    company: 'Worthmetrix Inc., Atlanta',
    rating: 5,
    feedback:
      'I have had the pleasure of working with TGAYS Technology over the years, and I can confidently say they are among the best. Their professionalism, expertise, and commitment to delivering outstanding results make them an ideal partner for any software development and technology needs.',
    person: 'Worthmetrix Inc.',
    location: 'Atlanta, United States',
    logo: '/img/worthmetrix_logo-client.png',
  },
  {
    company: 'Tommy Gun Art Club',
    rating: 5,
    feedback:
      'TGAYS Technology has a great team with extensive knowledge in coding custom websites. The functionality of my site would cost much, much more. I have ecommerce and a shopping cart, a voting function and uploading capability for my subscribers. They were willing to work at my pace, explaining all the ins and outs. Somehow they were able to make this, sometimes sterile digital world, warmer. And from half-way around the world. Kudos to the TGAYS Technology team!',
    person: 'Tommy Gun Art Club',
    location: 'United States',
    logo: '/img/default-company.png',
  },
  {
    company: 'DreamBase (Pty) Ltd',
    rating: 5,
    feedback:
      'Communication is very important in working across borders through languages. TGAYS Technology raised the bar to a new high when it comes to understanding the job. Conveying and describing one’s thoughts is not always simple, and their team handled this very well. They are fair in working within the budget. Highly recommended for work, communication, devotion, and ethics.',
    person: 'Bruce Prokop',
    location: 'Canada',
    logo: '/img/default-company.png',
  },
  {
    company: 'Creative Intelligence Agency',
    rating: 5,
    feedback:
      "As Managing Partner of Creative Intelligence Agency, I have come to know TGAYS Technology quite well over the past 6 years. They have excelled in identifying problems and crafting solutions. They have shown that they not only have these skills but also take the time to ensure our local team understands what has been built and how to use the products and features they have developed. They have continually demonstrated an effort to go beyond what's acceptable and work hard to exceed expectations.",
    person: 'Creative Intelligence Agency',
    location: 'United States',
    logo: '/img/default-company.png',
  },
  
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star" />);
  }
  if (halfStar) {
    stars.push(<i key="half" className="fas fa-star-half-alt" />);
  }

  return stars;
};

const ClientsFeedback = () => {
  return (
    <section className="testomonial-page-title">
      <div className="crumina-module crumina-heading hm-easy_title text-center">
        <h6>Testimonials</h6>
        <h2 className="heading-title">Clients Feedback</h2>
      </div>

      <div className="testomonial-listing">
        <div className="container">
          <div className="row overlap">
            {testimonials.map((testimonial, index) => (
              <div className="col-sm-12 col-md-12 col-lg-4" key={index}>
                <div className="testimonial-style-two">
                  <Image src="/img/quote-testo.png" alt="Quote" width={40} height={40} />
                  {/* <div className="top-info">
                    <h3>{testimonial.company}</h3>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div> */}
                  <div className="info">
                    <p>{testimonial.feedback}</p>
                  </div>
                  
                  <div className="provider">
                    <div className="top-info">
                      {/* <h3>{testimonial.company}</h3> */}
                      <div className="testimonial-rating">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>

                    <div className="content">
                      <h4>{testimonial.person}</h4>
                      <span>{testimonial.location}</span>
                    </div>
                    {/* <div className="thumb">
                      <Image
                        src={testimonial.logo}
                        alt={`${testimonial.company} logo`}
                        width={60}
                        height={60}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsFeedback;