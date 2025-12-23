'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import TruckLoader from '@/components/ui/TruckLoader';
import BlobLoader from '@/components/ui/BlobLoader';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const [width, setWidth] = React.useState(0);
  const [menus, setMenus] = React.useState({});
  const breakpoint = 992;
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const handleResizeWindow = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      
      // Close mobile menu when screen gets larger
      if (newWidth >= breakpoint) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    // Set initial width
    handleResizeWindow();
    
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [breakpoint]);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav_box')) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // useEffect(() => {
  //   const fetchMenuData = async () => {
  //     try {
  //       const response = await fetch('https://tgaystechnology.com/api_v1/menus', {
  //         method: 'GET',
  //         mode: 'cors'
  //       });
  //       const data = await response.json();
  //       setMenuData(data);
  //     } catch (error) {
  //       console.error('Error fetching menu data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };


  //   fetchMenuData();
  // }, []);

  useEffect(() => {
  const fetchMenuData = async () => {
    try {
      const response = await fetch('https://api.tgaystechnology.com/api_v1/menus');
      // const response = await fetch('/api/menu');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      console.log("Fetched menu data:", data); // 👈 check here
      setMenuData(data);
    } catch (error) {
      console.error('Error fetching menu data:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchMenuData();
}, []);


  // Add these mouse event handlers to your menu items
const renderMenuItem = (page) => {
  const hasSubPages = page.subPages && page.subPages.length > 0;
  const menuKey = page.page_id;

  if (!hasSubPages) {
    return (
      <li key={page.page_id} className="menu-list">
        <a 
          href={page.page_slug}
          onClick={(e) => handleNavigation(page.page_slug, e)}
        >
          {page.page_title}
        </a>
      </li>
    );
  }

  // Add mouse event handlers for desktop hover
  const handleMouseEnter = (e) => {
    if (!isMobile) {
      const megaMenu = e.currentTarget.querySelector('.megamenu');
      if (megaMenu) {
        megaMenu.style.display = 'block';
      }
    }
  };

  const handleMouseLeave = (e) => {
    if (!isMobile) {
      const megaMenu = e.currentTarget.querySelector('.megamenu');
      if (megaMenu) {
        megaMenu.style.display = 'none';
      }
    }
  };

  return (
    <li 
      key={page.page_id} 
      className={`menu-list ${activeDropdown === menuKey ? 'active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          if (isMobile) {
            setActiveDropdown(prev => (prev === menuKey ? null : menuKey));
          }
        }}
      >
        {page.page_title} <span className="arrow"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
      </a>
      <div 
        className="megamenu with-products submenu-listing hide-menu"
        style={isMobile ? { display: activeDropdown === menuKey ? 'block' : 'none' } : { display: 'none' }}
      >
        <div className="submemu-area-box">
          <div className="sub-menu-title">
            <h3>{page.page_title}</h3>
            <p>{page.page_description || `Explore our ${page.page_title.toLowerCase()} section`}</p>
          </div>
          <div className="sub-menu-list">
            <ul>
              {page.subPages.map((subPage) => (
                <li key={subPage.id}>
                  <a 
                    href={subPage.sub_page_slug} 
                    onClick={(e) => handleNavigation(subPage.sub_page_slug, e)}
                  >
                    {subPage.sub_page_title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

// Keep the navigation handler simple
const handleNavigation = (slug, e) => {
  e.preventDefault();
  const megaMenu = e.target.closest(".megamenu");
  if (megaMenu) {
    megaMenu.style.display = "none";
  }
  
  router.push(slug);
  setIsMenuOpen(false);
  setActiveDropdown(null);
};

const handleToggleMenu = (e) => {
  e.stopPropagation();
  setIsMenuOpen(!isMenuOpen);
  setActiveDropdown(null);
};


  const isMobile = width < breakpoint;

  // Full-page loading overlay
  if (loading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        backdropFilter: 'blur(5px)'
      }}>
        {/* Truck Loader Animation */}
        <div style={{
          marginBottom: '30px'
        }}>
          {/* <TruckLoader /> */}
          <BlobLoader />
        </div>
        
        {/* Loading Text */}
        {/* <p style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#333',
          margin: 0,
          textAlign: 'center'
        }}>Loading...</p> */}
      </div>
    );
  }

  return (
    <div className="main_header">
      <header className="header" id="site-header">
        <div className="container">
          <div className="header-content-wrapper">
            <div className="phone-mail-sec">
              <ul>
                <li>
                  <a title="">
                    <span>
                      <ion-icon name="mail-open-outline" role="img" className="md hydrated"></ion-icon>
                    </span>
                    info@tgaystechnology.com
                  </a>
                </li>
                <li className="main_phone_num">
                   <Image 
                    src="/img/ind-mp.png" 
                    alt="India flag" 
                    width={20}
                    height={15}
                    className="img-fluid"
                  />
                  <a title="">(+91) 9211827216</a>
                </li>  
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="Navigation-sec">
        <div className="container">
          <div className="nav_box">
            <div className="site-logo">
              <a 
                className="" 
                href="#" 
                onClick={(e) => handleNavigation('/', e)}
              >
                <Image 
                  src="/img/logo-tgys.png" 
                  alt="techsgeeks" 
                  width={150}
                  height={50}
                  priority
                />
              </a>
            </div>
            <nav id="primary-menu" className="primary-menu">
              <button className="navbar-toggler react-toggle" type="button" onClick={handleToggleMenu}>
                <span className="navbar-toggler-icon">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
              <ul 
                className="primary-menu-menu react-menu-section" 
                style={isMobile ? { display: isMenuOpen ? 'block' : 'none' } : {}}
              >
                {/* Dynamic menu items from database */}
                {menuData.map(page => renderMenuItem(page))}
                
                {/* Static menu items */}
                {/* <li><a href="/blog">Blog</a></li> */}
                <li><a href="https://blog.tgaystechnology.com/">Blog</a></li>
                <li className="top-head-social-icon">
                  <a href="/contact-us" className="btn top_header_btn">Consult Our Experts</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;