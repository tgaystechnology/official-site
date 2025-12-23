'use client';

import { useState } from 'react';

export default function BlogContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    industry: '',
    project_duration: '',
    website: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Full Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(form.email)) newErrors.email = 'Invalid email address.';
    if (!form.phone.trim()) newErrors.phone = 'Phone No is required.';
    if (!form.project_type) newErrors.project_type = 'Please select a project type.';
    if (!form.industry) newErrors.industry = 'Please select an industry.';
    if (!form.project_duration) newErrors.project_duration = 'Please select project duration.';
    if (!form.message.trim()) newErrors.message = 'Description is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerMessage('');
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      setSubmitting(true);

      const params = new URLSearchParams();
      Object.entries(form).forEach(([k, v]) => params.append(k, v ?? ''));

      const res = await fetch('https://tgaystechnology.com/blog/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: params.toString(),
      });

      const text = await res.text();
      if (res.ok) {
        setServerMessage('Thank you we will connect you soon...!');
        setForm({
          name: '',
          email: '',
          phone: '',
          project_type: '',
          industry: '',
          project_duration: '',
          website: '',
          message: '',
        });
        setErrors({});
      } else {
        setServerMessage(text || 'Submission failed. Please try again.');
      }
    } catch {
      setServerMessage('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const errorStyle = { marginTop: -15, marginBottom: 15, color: 'red' };

  return (
    <div>
      <form className="blog-page-form" id="form" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="crumina-module crumina-heading">
              <h2 className="heading-title">Contact our Experts</h2>
              <h6 className="heading-sup-title">
                Share your requirement now, we don’t let you look back!
              </h6>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="frm_form_field form-field">
              <label>
                Full Name <span className="mandatory-text">*</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
              />
              <div className="error-msg" style={errorStyle}>{errors.name}</div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="frm_form_field form-field">
              <label>
                Email Address <span className="mandatory-text">*</span>
              </label>
              <input
                name="email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Enter Your email"
                required
                value={form.email}
                onChange={handleChange}
              />
              <div className="error-msg" style={errorStyle}>{errors.email}</div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="frm_form_field form-field">
              <label>
                Phone No <span className="mandatory-text">*</span>
              </label>
              <input
                name="phone"
                placeholder="Phone No"
                type="number"
                required
                value={form.phone}
                onChange={handleChange}
              />
              <div className="error-msg" style={errorStyle}>{errors.phone}</div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="frm_form_field form-field select-box">
              <label>
                Select Project Type <span className="mandatory-text">*</span>
              </label>
              <select
                name="project_type"
                className="form-select"
                aria-label="Default select example"
                required
                value={form.project_type}
                onChange={handleChange}
              >
                <option value="">Select Project Type</option>
                <option value="ERP">ERP</option>
                <option value="Website">Website</option>
                <option value="Mobile App">Mobile App</option>
                <option value="CRM">CRM</option>
                <option value="Website &amp; Mobile App">Website &amp; Mobile App</option>
                <option value="Others">Others</option>
              </select>
              <div className="error-msg" style={errorStyle}>{errors.project_type}</div>
              <span className="angle-down-arrow">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="frm_form_field form-field select-box">
              <label>
                Select Industry <span className="mandatory-text">*</span>
              </label>
              <select
                name="industry"
                className="form-select"
                aria-label="Default select example"
                required
                value={form.industry}
                onChange={handleChange}
              >
                <option value="">Select Industry</option>
                <option value="Beauty &amp; Personal Care">Beauty &amp; Personal Care</option>
                <option value="E-Commerce">E-Commerce</option>
                <option value="Education">Education</option>
                <option value="Entertainment &amp; Arts">Entertainment &amp; Arts</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Hotels &amp;  Restaurants">Hotels &amp; Restaurants</option>
                <option value="Logistics">Logistics</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Transportation">Transportation</option>
                <option value="Tour &amp; Travel">Tour &amp; Travel</option>
                <option value="Others">Others</option>
              </select>
              <div className="error-msg" style={errorStyle}>{errors.industry}</div>
              <span className="angle-down-arrow nw">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="frm_form_field form-field select-box">
              <label>
                Select Project Duration <span className="mandatory-text">*</span>
              </label>
              <select
                name="project_duration"
                className="form-select"
                aria-label="Default select example"
                required
                value={form.project_duration}
                onChange={handleChange}
              >
                <option value="">Select Project Duration</option>
                <option value="1 month">1 month</option>
                <option value="Less than 3 months">Less than 3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="More than 1 year">More than 1 year</option>
                <option value="Not sure">Not sure</option>
              </select>
              <div className="error-msg" style={errorStyle}>{errors.project_duration}</div>
              <span className="angle-down-arrow nw">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="frm_form_field form-field">
              <label>Website</label>
              <input
                name="website"
                type="text"
                placeholder="Enter Your website"
                value={form.website}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="frm_form_field form-field">
              <label>
                Description <span className="mandatory-text">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Description"
                required
                value={form.message}
                onChange={handleChange}
              />
              <div className="error-msg" style={errorStyle}>{errors.message}</div>
            </div>
          </div>

          {/* reCAPTCHA placeholder; integrate via script or a React component */}
          <div className="g-recaptcha" data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"></div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <button type="submit" className="btn send-btn" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send'}
            </button>
          </div>

          <p style={{ marginTop: 10 }} id="message">
            {serverMessage}
          </p>
        </div>
      </form>
    </div>
  );
}