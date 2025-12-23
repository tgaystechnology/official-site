import Image from "next/image";

const howItWorksData = {
  title: "How It Works",
  description:
    "Our Gym ERP simplifies your entire workflow in a few easy steps, from onboarding members to tracking your business growth.",
  boxes: [
    { icon: "desktop-outline", title: "Member Registration" },
    { icon: "cash-outline", title: "Daily Operations" },
    { icon: "reader-outline", title: "Analyze & Grow" },
  ],
  features: [
    { icon: "bonfire-outline", text: "Automated Payment Reminders" },
    { icon: "color-filter-outline", text: "Integrated Biometric Attendance" },
    { icon: "cog-outline", text: "Detailed Financial Reports" },
    { icon: "earth-outline", text: "Secure Cloud-Based Access" },
  ],
  finalText:
    "Our system is designed to be intuitive, powerful, and tailored to the unique needs of the fitness industry.",
  image: {
    src: "/img/why-choose-5-1.png",
    alt: "Gym ERP Process",
    width: 532,
    height: 642,
  },
};

const GymErpHowItWorks = () => {
  return (
    <section className="why-choose-five">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="why-choose-five__image">
              <Image
                src={howItWorksData.image.src}
                alt={howItWorksData.image.alt}
                width={howItWorksData.image.width}
                height={howItWorksData.image.height}
                priority
              />
            </div>
          </div>

          <div
            className="wow fadeInUp col-xl-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="why-choose-five__content">
              <div className="sec-title-four text-left">
                <h3 className="sec-title-four__title">{howItWorksData.title}</h3>
              </div>

              <p className="why-choose-five__content__text">{howItWorksData.description}</p>

              <div className="gutter-y-30 row">
                {howItWorksData.boxes.map((box, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="why-choose-five__box">
                      <div className="why-choose-five__box__icon">
                        <ion-icon name={box.icon}></ion-icon>
                      </div>
                      <h3 className="why-choose-five__box__title">{box.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <ul className="why-choose-five__list">
                {howItWorksData.features.map((feature, index) => (
                  <li key={index}>
                    <ion-icon name={feature.icon}></ion-icon>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <p className="why-choose-five__content__text">{howItWorksData.finalText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymErpHowItWorks;
