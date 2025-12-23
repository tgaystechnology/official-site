import React from 'react';
import Image from 'next/image';

const SolutionMobileApp = () => {
  // Solutions data
  const solutions = [
    {
      id: 1,
      number: "1",
      title: "Health & Fitness App",
      description: "Help your users crush their fitness goals! We build engaging health and fitness apps with personalized workout plans, progress tracking, and seamless wearable integration. Let's create a tool that inspires a healthier lifestyle, one tap at a time.",
      arrow: true,
      className: "first mb-md50"
    },
    {
      id: 2,
      number: "2",
      title: "Food Ordering App",
      description: "Craving convenience? We cook up intuitive food ordering apps that make finding and ordering meals a delight for customers. With real-time tracking and easy payment options, we help restaurants serve more happy clients and manage orders effortlessly.",
      arrow: true,
      className: "odd mb-md50 manage-botm"
    },
    {
      id: 3,
      number: "3",
      title: "Patient Scheduling App",
      description: "Make healthcare less stressful. Our patient scheduling apps help clinics and hospitals streamline appointments and reduce no-shows with smart reminders. We create a simple, secure way for patients to manage their health and for providers to manage their day.",
      arrow: true,
      className: "mb-sm50 system-top"
    },
    {
      id: 4,
      number: "4",
      title: "E-Commerce Multi-language, Multi-currency app",
      description: "Put your store in every pocket. We build beautiful, high-performance e-commerce apps that make shopping a joy. With features like multi-language support, global currencies, and secure checkout, we’ll help you connect with customers around the world and boost your sales.",
      arrow: false,
      className: "odd manage-botm"
    },
    {
      id: 5,
      number: "5",
      title: "SAAS Products",
      description: "Unchain your software from the desktop. We create powerful companion apps for your SaaS platform, allowing your users to stay productive, manage their accounts, and access key features from anywhere. It's the mobile extension your business needs to thrive.",
      arrow: true,
      className: "first mb-md50"
    },
    {
      id: 6,
      number: "6",
      title: "School & College App",
      description: "Connect your entire campus community. From attendance and grades to event notifications and fee payments, our school and college apps build a seamless digital bridge between students, parents, and faculty, creating a modern and engaged learning environment.",
      arrow: true,
      className: "odd mb-md50 manage-botm"
    },
    {
      id: 7,
      number: "7",
      title: "LMS App",
      description: "Empower learning, anytime, anywhere. We develop custom Learning Management System (LMS) apps that deliver courses, quizzes, and educational content directly to your users' devices. Let's build a flexible and engaging platform for your students or employees.",
      arrow: true,
      className: "mb-sm50 system-top"
    },
  ];

  return (
    <div className="process section-padding bg-img bg-fixed pos-re text-center was_section">
      <div className="container">
        <div className="row">
          <div className="crumina-module crumina-heading">
            <h2 className="heading-title">Our Mobile App <span className="c-primary">Solutions</span></h2>
          </div>
          <div className="full-width clearfix"></div>
          
          {solutions.map((solution) => (
            <div key={solution.id} className="col-lg-3 col-md-6">
              <div className={`item ${solution.className}`}>
                {solution.arrow && (
                  <Image 
                    src="/img/arrow.png" 
                    alt="" 
                    width={50} 
                    height={20}
                    className="tobotm"
                  />
                )}
                <h3 className="icon icon-basic-lightbulb">{solution.number}</h3>
                <div className={solution.id <= 4 ? "cont f_for" : "cont"}>
                  <h6>{solution.title}</h6>
                  <p>{solution.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="curve curve-gray-t curve-top"></div>
      <div className="curve curve-bottom"></div>
    </div>
  );
};

export default SolutionMobileApp;