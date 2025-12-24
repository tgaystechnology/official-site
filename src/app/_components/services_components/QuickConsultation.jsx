'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const QuickConsultation = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_no: '',
    project_requirement: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const [errors, setErrors] = useState({});

  // Form service options data
  const serviceOptions = [
    { value: 'mobile-app', label: 'A Mobile App' },
    { value: 'website', label: 'A Website' },
    { value: 'web-application', label: 'A Web Application' },
    { value: 'crm-business', label: 'A CRM for my Business' },
    { value: 'custom-crm', label: 'A Custom CRM' },
    { value: 'ecommerce-website', label: 'An E-Commerce Website' },
    { value: 'custom-development', label: 'Custom Development' },
    { value: 'website-maintenance', label: 'Website Maintenance and Security' },
    { value: 'others', label: 'Others' }
  ];

  // Contact information data (updated)
  const contactInfo = [
    {
      icon: 'call-outline',
      text: (
        <>
          <strong>India:-</strong> (+91) 9211827216 <br />
          <strong>Budapest, Hungary:</strong> +36 704032902
        </>
      )
    },
    {
      icon: 'mail-outline',
      text: 'info@tgaystechnology.com'
    }
  ];

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone_no.trim()) {
      newErrors.phone_no = 'Phone number is required';
      isValid = false;
    } 

    if (!formData.project_requirement) {
      newErrors.project_requirement = 'Please select a requirement';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // For phone number, only allow numeric values
    if (name === 'phone_no') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // const response = await fetch('/api/quote-request', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      const response = await fetch('https://api.tgaystechnology.com/api_v1/service-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! Your quote request has been submitted successfully. We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone_no: '',
          project_requirement: '',
          message: ''
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
    <section id="contact-form">
      <div className="container">
        <div className="row">
          {/* Contact Info Column */}
          <div className="map-column col-lg-6">
            <div className="row">
              <div className="title-column col-lg-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>
                      Building Next-Generation Web & Mobile Solutions for Your Business Growth
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="address_box">
              <div className="cont-info call-mail-sec">
                <h4>For Quick Consultation, Contact:</h4>
                
                {contactInfo.map((info, index) => (
                  <div className="address-sec" key={index}>
                    <span>
                      <ion-icon name={info.icon} role="img" className="md hydrated"></ion-icon>
                    </span>
                    <h5>{info.text}</h5>
                  </div>
                ))}
                
                <p>
                  Sometimes, we might be busy in addressing other customer queries.
                  Please contact us on the above email and we will reply you within the next 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="form-column col-lg-6">
            <div className="inner-column">
              <div className="contact-form-four">
                <div className="title-box">
                  <h3 className="text-white text-capitalize">Request a quote</h3>
                </div>
                
                {submitMessage && (
                  <div className={`alert ${submitMessage.includes('successfully') ? 'alert-success' : 'alert-error'}`} 
                       style={{
                         padding: '12px 15px',
                         marginBottom: '20px',
                         borderRadius: '4px',
                         color: submitMessage.includes('successfully') ? '#155724' : '#721c24',
                         backgroundColor: submitMessage.includes('successfully') ? '#d4edda' : '#f8d7da',
                         border: submitMessage.includes('successfully') ? '1px solid #c3e6cb' : '1px solid #f5c6cb'
                       }}>
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} id="anotherForm">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="control-input">
                        {errors.name && <div className="text-danger small mb-1">{errors.name}</div>}
                        <input 
                          type="text" 
                          name="name" 
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                          id="InputName" 
                          placeholder="Full Name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          // required 
                        />
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="control-input">
                        {errors.email && <div className="text-danger small mb-1">{errors.email}</div>}
                        <input 
                          type="email" 
                          name="email" 
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                          id="InputEmail" 
                          placeholder="Email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          // required 
                        />
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="control-input">
                        {errors.phone_no && <div className="text-danger small mb-1">{errors.phone_no}</div>}
                        <input 
                          type="tel" 
                          name="phone_no" 
                          className={`form-control ${errors.phone_no ? 'is-invalid' : ''}`} 
                          id="InputPhoneNumber" 
                          placeholder="Phone Number" 
                          value={formData.phone_no}
                          onChange={handleInputChange}
                          // required 
                        />
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-12 col-lg-6">
                      <div className="control-input">
                        {errors.project_requirement && <div className="text-danger small mb-1">{errors.project_requirement}</div>}
                        <select
                          className={`form-select ${errors.project_requirement ? 'is-invalid' : ''}`}
                          name="project_requirement"
                          id="InputService"
                          value={formData.project_requirement}
                          onChange={handleInputChange}
                          // required
                        >
                          <option value="" disabled>
                            I need
                          </option>
                          {serviceOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-12">
                      <div className="control-input">
                        {errors.message && <div className="text-danger small mb-1">{errors.message}</div>}
                        <textarea 
                          className={`form-textarea ${errors.message ? 'is-invalid' : ''}`} 
                          name="message" 
                          id="ControlTextarea" 
                          rows="3" 
                          placeholder="Describe your requirement" 
                          value={formData.message}
                          onChange={handleInputChange}
                          // required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-12">
                      <div className="submit-btn">
                        <button 
                          type="submit" 
                          className="btn btn-main" 
                          id="submitBtn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit To Get A Free Consultation'}
                        </button>
                      </div>
                    </div>
                    
                    <div className="col-12 col-md-12">
                      <div className="social-section">
                        <span>Visit our LinkedIn Page:</span>
                        <div className="tech-social">
                          <Link 
                            href="https://www.linkedin.com/company/tgays-technology/?viewAsMember=true" 
                            className="linkdin" 
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickConsultation;