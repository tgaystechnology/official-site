import React from 'react';

const ClientsWorldwide = () => {
  const clients = [
    {
      logo: "img/mahindra-Logo.png",
      name: "Mahindra First Choice",
      location: "India"
    },
    {
      logo: "img/QS-Logo.png",
      name: "QS",
      location: "India & UK"
    },
    {
      logo: "img/gurbuz-winery.png",
      name: "Gurbuz Winery & Restaurant",
      location: "Turkey"
    },
    {
      logo: "img/worthmetrix_logo-client.png",
      name: "Worthmetrix LLC",
      location: "USA"
    },
    {
      logo: "img/Mega_Sign_Logo_Web-Recovered.png",
      name: "Mega LED Technology",
      location: "USA"
    },
    {
      logo: "img/log_jlc.png",
      name: "Just Like Children",
      location: "Canada"
    },
    {
      logo: "img/s.png",
      name: "Intensity",
      location: "Estonia"
    },
    {
      logo: "img/Techlab.png",
      name: "Techlabs Systems Ltd",
      location: "Kenya"
    },
    {
      logo: "img/evolveAi.png",
      name: "Evolve AI",
      location: "USA"
    },
    {
      logo: "img/tax-roll-logo.png",
      name: "TM Consulting, Inc",
      location: "USA"
    },
    {
      logo: "img/kia-gts-client.png",
      name: "KIA-GTS LLC",
      location: "Dubai"
    },
    {
      logo: "img/gogiro-white.png",
      name: "Gogiro Internet Group, Inc",
      location: "USA"
    },
    {
      logo: "img/business_logo.png",
      name: "Enovative Technologies, LLC",
      location: "Austria"
    },
    {
      logo: "img/SEALIONPRO.png",
      name: "SEALIONPRO LTD",
      location: "UK"
    },
    {
      logo: "img/creative-intelligence-logo.png",
      name: "Creative Intelligence Agency",
      location: "USA"
    },
    {
      logo: "img/Image3DConversion.png",
      name: "Image3DConversion Pvt Ltd",
      location: "India"
    },
    {
      logo: "img/SGTREK-logo_client.png",
      name: "SGTrek Pte. Ltd",
      location: "Singapore"
    },
    {
      logo: "img/CITY-TEHELKA-LOGO.png",
      name: "JMDK Media Pvt. Ltd.",
      location: "India"
    },
    {
      logo: "img/gi_group.png",
      name: "GI Group Holding",
      location: "India"
    },
    {
      logo: "img/bolton_client_logo.png",
      name: "Bolton Travel Ltd",
      location: "UK, India"
    },
    {
      logo: "img/bid_client.png",
      name: "BidRaves Inc",
      location: "USA"
    }
  ];

  return (
    <section className="crumina-module crumina-clients background-contain bg-secondary-color featured-clients-section">
      <div className="container">
        <div className="crumina-module crumina-clients-heading">
          <h2 className="heading-title">Our Clients Worldwide</h2>
        </div>
        <div className="client_section_row">
          <div className="row">
            {clients.map((client, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-6 col-sm-6 col-xs-3">
                <div className="client_box">
                  <div className="client-img">
                    <img src={client.logo} alt={`${client.name} logo`} />
                  </div>
                  <div className="client_dt">
                    <div className="name-cl">
                      <h5>{client.name}</h5>
                      <h6>Location: {client.location}</h6>
                    </div>
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

export default ClientsWorldwide;