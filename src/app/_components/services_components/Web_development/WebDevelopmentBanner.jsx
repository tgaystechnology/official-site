'use client'
import React from 'react'
import Link from 'next/link'

const WebDevelopmentBanner = () => {
  return (
    <section
      className="testomonial-banner bg-cover hero-section"
      style={{ backgroundImage: 'url(/img/Web-App-Development-bg.png)' }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Web Development</h3>
          <p>
            It has been observed that a start-up takes at least 2–3 years to align their business operations,
            while they can achieve the same in just a few months by having a web application that automates
            their business processes.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WebDevelopmentBanner
