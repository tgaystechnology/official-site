'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandX,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutubeFilled,
  IconBrandInstagram
} from "@tabler/icons-react";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Enable button only when mounted & remove any jQuery listeners
  useEffect(() => {
    setIsMounted(true);
    const initScrollButton = () => {
      if (typeof window.$ !== 'undefined') {
        window.$('.back-to-top').off('click');
      }
    };
    const timer = setTimeout(initScrollButton, 1000);
    return () => clearTimeout(timer);
  }, []);

  const usefulLinks = [
    { href: "/", text: "Home" },
    { href: "/about-us/company", text: "About Company" },
    { href: "/privacy-policy", text: "Privacy Policy" },
    // { href: "/blog", text: "Blogs" },
    { href: "https://blog.tgaystechnology.com/", text: "Blogs" },
    { href: "/contact-us", text: "Contact Us" },
    { href: "/about-us/career", text: "Career" }
  ];

  const links = [
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutubeFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.youtube.com/@tgaystechnology6038",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/company/tgays-technology/",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/web.mobileapp.services",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/tgays.technology?igsh=MXFtdnA4cjE4MTRhcg==",
    },
  ];

  // Scroll to top logic (jQuery → native → instant)
  const scrollToTop = () => {
    if (typeof window !== 'undefined' && isMounted) {
      if (typeof window.$ !== 'undefined') {
        try {
          window.$('html, body').animate({ scrollTop: 0 }, 800);
          return;
        } catch (error) {
          console.log('jQuery scroll failed:', error);
        }
      }
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        return;
      } catch (error) {
        console.log('Native smooth scroll failed:', error);
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  return (
    <>
      <footer className="footer" id="site-footer">
        <div className="container">
          <div className="row">
            {/* Company Info Column */}
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <div className="widget w-info">
                <div className="site-logo">
                  <Link href="/" className="full-block"></Link>
                  <div className="logo-text">
                    <div className="logo-title">
                      <Link href="/">TGAYS Technology</Link>
                    </div>
                    {/* <div className="logo-sub-title">app specialist</div> */}
                  </div>
                </div>
                <p>
                  TGAYS(Tech Geeks) Technology has emerged out of technology requirements to provide solutions to Startups and Large-scale Businesses across the Globe. We love to speak with people and help them with all that we have got.
                </p>
                <p>
                  We provide remote staffing to hire dedicated employees in Website, Web Application, and Mobile App development. Our Clients can hire dedicated employees to work exclusively for them from our well-equipped managed office in India.
                </p>
              </div>
            </div>

            {/* Useful Links Column */}
            <div className="col-lg-2 col-lg-offset-1 col-md-3 col-sm-12 col-sm-offset-0 col-xs-12">
              <div className="widget w-list">
                <h5 className="widget-title">Useful Links</h5>
                <ul className="list list--primary">
                  {usefulLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.text}</Link>
                      <svg className="utouch-icon utouch-icon-arrow-right">
                        <use xlinkHref="#utouch-icon-arrow-right"></use>
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Column */}
            <div className="col-lg-3 col-lg-offset-1 col-md-4 col-sm-12 col-sm-offset-0 col-xs-12">
              <div className="widget w-contacts">
                <h5 className="widget-title">Contact Us</h5>
                <div className="contact-item display-flex">
                  <svg className="utouch-icon utouch-icon-message-closed-envelope-1">
                    <use xlinkHref="#utouch-icon-message-closed-envelope-1"></use>
                  </svg>
                  <span className="info">(+91) 9211827216<br></br> +36 704032902</span>
                </div>
                <div className="contact-item display-flex">
                  <svg className="utouch-icon utouch-icon-message-closed-envelope-1">
                    <use xlinkHref="#utouch-icon-message-closed-envelope-1"></use>
                  </svg>
                  <span className="info">info@tgaystechnology.com, sales@tgaystechnology.com</span>
                </div>
                <Link href="/contact-us" className="btn btn--green full-width">
                  Let's Talk
                </Link>
              </div>

              {/* Floating Dock */}
              <div className="widget w-follow">
                <FloatingDock
                  mobileClassName="translate-y-20" // adjust/remove for production
                  items={links}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sub Footer */}
        <div className="sub-footer">
          <a
            className="back-to-top"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
              scrollToTop();
            }}
            style={{ cursor: isMounted ? 'pointer' : 'not-allowed', opacity: isMounted ? 1 : 0.5 }}
          >
            <span>
              <i className="fa fa-arrow-up" aria-hidden="true"></i>
            </span>
          </a>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <span>
                  Copyright © 2018 - 2025{' '}
                  <Link href="/" className="sub-footer__link">
                    TGAYS Technology
                  </Link>{' '}
                  Pvt. Ltd, All Rights Reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
