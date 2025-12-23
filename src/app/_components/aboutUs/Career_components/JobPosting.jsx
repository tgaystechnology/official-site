import Image from 'next/image';

const JobPosting = () => {
  return (
    <div className="post-content">
      <div className="career-top-section">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
            <div className="left-box-sec align-center">
              <div className="crumina-module crumina-heading">
                <h2 className="heading-title">
                  2. Job Title: <br />
                  <span className="c-primary">Digital Branding Executive</span>
                </h2>
                <p className="align-left">
                  We are looking for someone who can help us build our brand and raise brand awareness. You'll work across all levels and departments of our organization to find
                  what makes us unique and communicate it to the world. Digital Brand Executives are the people who shape a company's outward image. To do that, you'll need to uncover consumer insights and
                  deliver innovative marketing campaigns. We'll turn to you to learn what can attract our customers and prospects and how we can improve customer experience.
                </p>
                <p className="align-left">If you're creative and possess a strategic mind, we'd like to meet you.</p>
                <p className="align-left">Ultimately, you'll help us improve our company's reputation and drive growth.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-12 col-xxl-12">
            <div className="right-box-sec">
              <p><strong>Date of Opening:</strong> 20-02-2023</p>
              <p><strong>Job Status: </strong>Close</p>
              <p><strong>No of Positions:</strong> 1</p>
              <p><strong>Pay Grade:</strong> Rs. 10,000 per month + Internet Cost</p>
              <p><strong>Work Location:</strong> Work from Home(Should have a Laptop or a Computer)</p>
              <p><strong>Working Days &amp; Hours:</strong> 5.5 days a week, (44 hours per week)</p>
              <p><strong>Qualification: </strong> Graduation / Pursuing Graduation in any stream like BCom, BBA, BSc, BCA, BA or MA, MCom, MBA</p>
              <p><strong>Experience:</strong> Fresher, a 2 weeks training will be provided.</p>
            </div>
          </div>
        </div>
      </div>
      <section id="testo" class="career-sec-2">
        <div className="container">
          <div className="row testo_section">
            <div className="col-md-6 testimonials_box">
              <div className="icon">
                <Image 
                  src="/img/skill-icon.png" 
                  alt="testimonial" 
                  width={50} 
                  height={50}
                />
              </div>
              <div className="testimonial_shadow">
                <div className="border-img">
                </div>
                <h4>Skills:</h4>
                <ul className="skill-list">
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Good Communication Skills</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Good English Written Skills</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Should be able to create nice Powerpoint Presentation</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Awareness with Canva, Creating Templates / Banners / Animated Clips(Optional)</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Awareness of Social Media Marketing, Advertising and Campaigns on platforms like LinkedIn, Facebook, Instagram, Twitter, Youtube</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Awareness of using websites like Google and Youtube to search about any problem or a topic and find solutions.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 testimonials_box">
              <div className="icon">
                <Image 
                  src="/img/Attitude.png" 
                  alt="testimonial" 
                  width={50} 
                  height={50}
                />
              </div>
              <div className="testimonial_shadow">
                <div className="border-img">
                </div>
                <h4>Attitude:</h4>
                <ul className="skill-list">
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Hard-working and always ready to take challenges</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Never giving up attitude</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Always ready and excited to learn new things</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Kind and Friendly</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Should take challenges, meet deadlines, be punctual and energetic.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 testimonials_box">
              <div className="icon">
                <Image 
                  src="/img/Job-Responsibility.png" 
                  alt="testimonial" 
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
                    height={50}
                  />
                </div>
                <h4>Job Responsibility:</h4>
                <ul className="skill-list">
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Update popular online directories with details of our services and achievements.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Blog Writing related to our Services and Products</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Upload Official Videos on Youtube and Update Title and Description Organically</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Social Media Marketing/Advertising</span>
                  </li>
                  {/* <form className="career-form">
                    <input type="checkbox" id="" name="" value="" checked disabled /><label> Promotion of our Services/Products</label><br />
                    <input type="checkbox" id="" name="" value="" checked disabled /><label>Promoting Landing Pages</label><br />
                    <input type="checkbox" id="" name="" value="" checked disabled /><label> Promoting Blogs</label><br />
                    <input type="checkbox" id="" name="" value="" checked disabled /><label>Promoting Youtube Videos</label><br />
                    <input type="checkbox" id="" name="" value="" checked disabled /><label> Promoting Client's Testimonials</label><br />
                  </form> */}

                  <div class="career-form-built">
                    <ul>
                      <li><span><ion-icon name="caret-forward-outline"></ion-icon></span> Promotion of our Services/Products</li>
                      <li><span><ion-icon name="caret-forward-outline"></ion-icon></span> Promoting Landing Pages</li>
                      <li><span><ion-icon name="caret-forward-outline"></ion-icon></span> Promoting Blogs</li>
                      <li><span><ion-icon name="caret-forward-outline"></ion-icon></span> Promoting Youtube Videos</li>
                      <li><span><ion-icon name="caret-forward-outline"></ion-icon></span> Promoting Client's Testimonials</li>
                    </ul>
                  </div>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Taking Online Surveys.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Preparing Newsletters content for target customers.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Company's Work Portfolio Management in PPT/Pdf format.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Company's Profile Management in PPT/Pdf format.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Keeping track of Analytics(Visitors location, demographics etc.) and making improvements accordingly.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Lead creative development to motivate the target audience to "take action".</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Measure and report performance of all marketing campaigns, and assess ROI and KPIs.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Monitor market trends, research consumer markets and competitors' activities.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Oversee new and ongoing marketing and advertising activities.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Devise innovative growth strategies.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 testimonials_box">
              <div className="icon">
                <Image 
                  src="/img/Goals.png" 
                  alt="testimonial" 
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
                    height={50}
                  />
                </div>
                <h4>Top 5 Goals:</h4>
                <ul className="skill-list">
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Write at least 2 Blogs per week for the Company.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Social Media Advertising/Marketing and tracking of Analytics.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>aking Online Surveys about Company's product and Services.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Plan innovative ways of promoting the company's products and services.</span>
                  </li>
                  <li>
                    <ion-icon name="checkmark-outline" role="img" className="md hydrated"></ion-icon>
                    <span>Helping shape and communicate our vision and mission.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobPosting;