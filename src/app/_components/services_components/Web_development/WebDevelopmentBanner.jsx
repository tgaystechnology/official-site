'use client'
import React from 'react'
import Link from 'next/link'

const WebDevelopmentBanner = () => {
  return (
    <section
      className="testomonial-banner bg-cover hero-section"
      role="banner"
      aria-labelledby="web-development-heading"
      style={{ backgroundImage: 'url(/img/Web-App-Development-bg.png)' }}
    >
      <div className="container">
        <div className="banner-text">
          <h1 id="web-development-heading">Web Development</h1>
          <p>
            It has been observed that a start-up takes at least 2–3 years to align their business operations,
            while they can achieve the same in just a few months by having a web application that automates
            their business processes.
          </p>
          <Link href="/contact-us" className="first-tag" aria-label="Get a free consultation for web development services">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WebDevelopmentBanner
