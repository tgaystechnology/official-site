'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const ContactExperts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    project_type: '',
    industry: '',
    project_duration: '',
    website: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      const response = await fetch('https://api.tgaystechnology.com/api_v1/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          project_type: '',
          industry: '',
          project_duration: '',
          website: ''
        });
      } else {
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="content-wrapper">
      <section className="contact-details contact-page-section">
        <div className="container">
          <div className="row">
            <div className="crumina-module crumina-heading text-center">
              <h2 className="heading-title">Contact our Experts</h2>
            </div>

            {/* Contact Information */}
            <div className="col-lg-6 col-md-6">
              <div className="row office-info">
                <div className="col-12">
                  <div className="cont-info call-mail-sec">
                    <h4>For Quick Consultation, Contact:</h4>
                    <div className="address-sec">
                      <span><ion-icon name="mail-outline"></ion-icon></span>
                      <h5>info@tgaystechnology.com</h5>
                    </div>

                    <div className="address-sec">
                      <span><ion-icon name="call-outline" role="img" class="md hydrated"></ion-icon></span>
                      <h5><strong>India:-</strong> (+91) 9211827216 <br/><strong>Budapest, Hungary:-</strong> +36 704032902  </h5>

                    </div>

                    
                    <p>
                      Sometimes, we might be busy in addressing other customer queries. Please contact us
                      on the above email and we will reply you within the next 24 hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row office-info">
                <div className="col-12">
                  <div className="cont-info">
                    <h4>Our Presence:</h4>
                    <div className="address-sec">
                      <span><ion-icon name="location-outline"></ion-icon></span>
                      <p>
                        <strong>Head Office:</strong> S2 5A-36, 6th Floor at Cloud-9 Tower, Sector-1, Vaishali, I.E.Sahibabad,
                        Ghaziabad, Uttar Pradesh, India -201010
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="create-location-area">
                    <div className="link-create">
                      <Link href="/about-us/company" className="btn">Click Here</Link>
                    </div>
                    <div className="create-text">
                      <h5>About Company</h5>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="create-location-area">
                    <div className="link-create">
                      <Link href="/about-us/career" className="btn">Click Here</Link>
                    </div>
                    <div className="create-text">
                      <h5>Career</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6 col-md-6 box-second">
              <form className="blog-page-form" onSubmit={handleSubmit}>
                <div className="crumina-module crumina-heading">
                  <h2 className="heading-title">Contact our Experts</h2>
                  <h6 className="heading-sup-title">Share your requirement now, we don't let you look back!</h6>
                </div>
                
                {submitMessage && (
                  <div className={`alert ${submitMessage.includes('successfully') ? 'alert-success' : 'alert-error'}`}>
                    {submitMessage}
                  </div>
                )}

                <div className="row">
                  <div className="col-lg-6">
                    <input 
                      name="name" 
                      type="text" 
                      placeholder="Name" 
                      className="form-field" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="Enter Your email" 
                      className="form-field" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input 
                      name="phone" 
                      type="text" 
                      placeholder="Phone No" 
                      className="form-field" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 select-box">
                    <select 
                      name="project_type" 
                      className="form-select"
                      value={formData.project_type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Project Type</option>
                      <option value="ERP">ERP</option>
                      <option value="Website">Website</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="CRM">CRM</option>
                      <option value="Website & Mobile App">Website & Mobile App</option>
                      <option value="Others">Others</option>
                    </select>
                    <span className="angle-down-arrow"><i className="fa fa-angle-down"></i></span>
                  </div>
                  <div className="col-lg-6 select-box">
                    <select 
                      name="industry" 
                      className="form-select"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Industry</option>
                      <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Education">Education</option>
                      <option value="Entertainment & Arts">Entertainment & Arts</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Hotels & Restaurants">Hotels & Restaurants</option>
                      <option value="Logistics">Logistics</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Tour & Travel">Tour & Travel</option>
                      <option value="Others">Others</option>
                    </select>
                    <span className="angle-down-arrow nw"><i className="fa fa-angle-down"></i></span>
                  </div>
                  <div className="col-lg-6 select-box">
                    <select 
                      name="project_duration" 
                      className="form-select"
                      value={formData.project_duration}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Project Duration</option>
                      <option value="1 month">1 month</option>
                      <option value="Less than 3 months">Less than 3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="More than 1 year">More than 1 year</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                    <span className="angle-down-arrow nw"><i className="fa fa-angle-down"></i></span>
                  </div>
                  <div className="col-lg-12">
                    <input 
                      name="website" 
                      type="url" 
                      placeholder="Enter Your website" 
                      className="form-field" 
                      value={formData.website}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <input 
                      name="subject" 
                      type="text" 
                      placeholder="Subject" 
                      className="form-field" 
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea 
                      name="message" 
                      placeholder="Description" 
                      className="form-field"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <div className="g-recaptcha" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>
                  <div className="col-lg-4">
                    <button 
                      type="submit" 
                      className="btn send-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactExperts;