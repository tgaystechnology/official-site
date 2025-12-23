import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MeetProfessionals = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Prince Singh",
      designation: "Project Lead - Web & Mobile App",
      image: "/img/prince-dev.png",
      alt: "Prince Singh - Project Lead"
    },
    {
      id: 2,
      name: "Gaurav Kumar",
      designation: "Senior Web Designer",
      image: "/img/gaurav.png",
      alt: "Gaurav Kumar - Senior Web Designer"
    },
    {
      id: 3,
      name: "Md. Najish",
      designation: "Web Developer",
      image: "/img/najish-khan.png",
      alt: "Md. Najish - Web Developer"
    },
    {
      id: 4,
      name: "S K Sarfaraz",
      designation: "Web Developer",
      image: "/img/sarfaraz-dev.png",
      alt: "S K Sarfaraz - Web Developer"
    },
    {
      id: 5,
      name: "Vijay Pandey",
      designation: "Sr. Web Developer",
      image: "/img/vijay-sr-web-developer.png",
      alt: "Vijay Pandey - Sr. Web Developer"
    },
    {
      id: 6,
      name: "Tanuj",
      designation: "Business Development Executive",
      image: "/img/tanuj-bds.png",
      alt: "Tanuj - Business Development Executive"
    },
    {
      id: 7,
      name: "Vansh Lalawat",
      designation: "Business Development Associate",
      image: "/img/vansh.png",
      alt: "Vansh Lalawat - Business Development Associate"
    },
    {
      id: 8,
      name: "Sana Ashraf",
      designation: "HR & Marketing Associate",
      image: "/img/sana.png",
      alt: "Sana Ashraf - HR & Marketing Associate"
    },
  ];

  return (
    <section className="medium-padding100 meet-team-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
            <div className="crumina-module crumina-heading align-center">
              <h2 className="heading-title">Meet <span className="c-primary">Our Team</span></h2>
            </div>
          </div>

          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6 col-12 col-xxl-4">
              <div className="team-info">
                <div className="inner-box">
                  <div className="info-box">
                    <h5 className="name">
                      <Link href="#">{member.name}</Link>
                    </h5>
                    <span className="designation">{member.designation}</span>
                  </div>
                  <div className="image-box">
                    <figure className="image">
                      <Link href="#">
                        <Image 
                          src={member.image} 
                          alt={member.alt}
                          width={300}
                          height={300}
                          className="team-member-image"
                        />
                      </Link>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetProfessionals;