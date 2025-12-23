import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3501.6168788224068!2d77.33197587429395!3d28.641242483687282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sS1-425%2C%204th%20Floor%2C%20Cloud-9%2C%20Sector-1%2C%20Vaishali%2C%20Ghaziabad-201010!5e0!3m2!1sen!2sin!4v1738220125590!5m2!1sen!2sin"
          width="100%"
          height="450px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
