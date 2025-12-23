import React from 'react';
import Image from 'next/image';

const DigitalMarketingJobOne = () => {
  const jobDetails = {
    title: "Digital Marketing Executive",
    date: "20-02-2023",
    status: "Close",
    positions: 1,
    salary: " Rs. 10,000 per month + Internet Cost + Incentives / Perks on Meeting targets",
    location: " Work from Home (Should have a Laptop or a Computer)",
    hours: " 5.5 days a week, (44 hours per week)",
    qualification: " Graduation in any stream like BCom, BBA, BSc, BCA, BA or MA, MCom, MBA",
    experience: " Fresher, a 2 weeks training will be provided"
  };

  const sections = [
    {
      title: "Skills",
      icon: "/img/skill-icon.png",
      items: [
        "Good Communication Skills",
        "Good English Written Skills",
        "Basic knowledge of Excel",
        "Should be able to create nice Powerpoint Presentation",
        "Professional Email Writing",
        "Should have used major Social media platforms like LinkedIn, Facebook, Instagram, Twitter",
        "Habitual using websites like Google and Youtube to search about any problem or a topic and find solutions."
      ]
    },
    {
      title: "Attitude",
      icon: "/img/attitude-icon-real.png",
      items: [
        "Hard-working and always ready to take challenges",
        "Never giving up attitude",
        "Always ready and excited to learn new things",
        "Kind and Friendly",
        "Should take challenges, meet deadlines, be punctual and energetic."
      ]
    },
    {
      title: "Job Responsibility",
      icon: "/img/Job-Responsibility.png",
      items: [
        "LinkedIn Marketing",
        "Email Marketing",
        "Marketing Research about target customers, platform they prefer, researching competitors pricing to develop an effective pricing strategy",
        "Lead Generation",
        "Follow up Potential Leads with a Quick Reply",
        "Taking Online Surveys",
        "Email Campaign for sending Newsletters to target customers",
        "Share Profile & Portfolio with Potential Leads and Clients",
        "Arrange Potential Lead appointment with BD/Sales and Technical team"
      ]
    },
    {
      title: "Top 3 Goals",
      icon: "/img/Goals.png",
      items: [
        "Identify our target audience and contact them to convert into a potential client.",
        "Arrange calls with the technical and sales team.",
        "Able to generate continuous Leads on a monthly basis."
      ]
    }
  ];

  return (
    <div className="post-content">
      <div className="career-top-section">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
            <div className="left-box-sec align-center">
              <div className="crumina-module crumina-heading">
                <h2 className="heading-title">
                  1. Job Title: <br />
                  <span className="c-primary">{jobDetails.title}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
            <div className="right-box-sec">
              <p><strong>Date of Opening: </strong>{jobDetails.date}</p>
              <p><strong>Job Status: </strong>{jobDetails.status}</p>
              <p><strong>No of Positions:</strong>{jobDetails.positions}</p>
              <p><strong>Pay Grade:</strong>{jobDetails.salary}</p>
              <p><strong>Work Location: </strong>{jobDetails.location}</p>
              <p><strong>Working Days &amp; Hours:</strong>{jobDetails.hours}</p>
              <p><strong>Qualification:</strong>{jobDetails.qualification}</p>
              <p><strong>Experience:</strong>{jobDetails.experience}</p>
            </div>
          </div>
        </div>
      </div>

      <section id="testo" class="career-sec-1">
        <div className="container">
          <div className="row testo_section">
            {sections.map((section, index) => (
              <div key={index} className="col-md-6 testimonials_box">
                <div className="icon">
                  <Image 
                    src={section.icon} 
                    alt={`${section.title} icon`}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="testimonial_shadow">
                  <div className="border-img">
                    <Image 
                      src="/img/left_border.png" 
                      alt="border-left"
                      width={50}
                      height={10}
                    />
                  </div>
                  <h4>{section.title}:</h4>
                  <ul className="skill-list">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingJobOne;