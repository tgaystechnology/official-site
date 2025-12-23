import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./_components/root/Header";
import Footer from "./_components/root/Footer";
import BottomNavigationWrapper from './../components/ui/BottomNavigationWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TGays Technology",
  description: "Web site created using create-react-app",
  keywords: "technology, web development, software solutions",
  viewport: "width=device-width,initial-scale=1",
  themeColor: "#000000",
  
  // Open Graph metadata
  openGraph: {
    title: "TGays Technology",
    description: "Web site created using create-react-app",
    url: "https://techsgeeks.in",
    siteName: "TGays Technology",
    images: [
      {
        url: "/img/logo-tgys.png",
        width: 800,
        height: 600,
        alt: "TGays Technology Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },

  // Icons
  icons: {
    icon: "/tgays_favicon.png",
    apple: "/logo192.png",
  },

  // Manifest
  manifest: "/manifest.json",

  // Google site verification
  verification: {
    google: "zJYroidUj1dWPTfiiL8XAdDafkcKqmVstPv6B_phDac",
  },

  // Canonical URL
  alternates: {
    canonical: "https://techsgeeks.in",
  },

  // Additional metadata
  other: {
    "google-site-verification": "zJYroidUj1dWPTfiiL8XAdDafkcKqmVstPv6B_phDac",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* External CSS */}
        <link rel="stylesheet" href="/css/theme-styles.css" />
        <link rel="stylesheet" href="/css/blocks.css" />
        <link rel="stylesheet" href="/css/widgets.css" />
        <link rel="stylesheet" href="/css/ion.rangeSlider.css" />
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/site.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/slick.css" />
        <link rel="stylesheet" href="/css/slick-theme.css" />
        {/* <link rel="stylesheet" href="/css/swiper.min.css" /> */}
        
        {/* Font Awesome */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
        />

        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,700,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Baloo+Paaji" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lustria&family=Pacifico&family=Roboto:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap" rel="stylesheet" />

        {/* Slick Carousel */}
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css" />

        {/* jQuery */}
        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
          strategy="afterInteractive"
        />
        {/* <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="afterInteractive"
        /> */}
        <Script
          src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
          strategy="afterInteractive"
        />

        {/* Ion Icons */}
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />

        <link
          href="https://unpkg.com/ionicons@5.5.2/dist/css/ionicons.min.css"
          rel="stylesheet"
        />
        <Script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
        />
        <Script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          strategy="afterInteractive"
        />


        {/* Local JS Files */}
        <Script src="/js/bootstrap.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery-3.3.1.js" strategy="afterInteractive" />
        <Script src="/js/js-plugins/crum-mega-menu.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/swiper.jquery.min.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/form-actions.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/jquery.nice-select.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/imagesLoaded.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/jquery.magnific-popup.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/jquery.matchHeight.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/smooth-scroll.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/bootstrap.js" strategy="lazyOnload" />
        <Script src="/js/js-plugins/ion.rangeSlider.js" strategy="lazyOnload" />
        <Script src="/js/slick.js" strategy="lazyOnload" />
        <Script src="/js/slick.min.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />


        {/* Tawk.to Chat */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date;
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/63ea20eec2f1ac1e2032fa49/1gp5919de';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        /> */}

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C86Y1VFR37"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C86Y1VFR37');
            `,
          }}
        />

        {/* Custom JavaScript */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              $(document).ready(function () {
                function handleMenuToggle() {
                  if ($(window).width() <= 768) {
                    $(".menu-list").off("click").on("click", function (e) {
                      e.stopPropagation();
                      $(".menu-list").not(this).removeClass("active").find(".megamenu").slideUp();
                      $(this).toggleClass("active");
                      $(this).find(".megamenu").stop(true, true).slideToggle();
                    });

                    $(document).off("click.megamenu").on("click.megamenu", function () {
                      $(".menu-list").removeClass("active").find(".megamenu").slideUp();
                    });
                  }
                }

                handleMenuToggle();
                $(window).resize(function () {
                  handleMenuToggle();
                });

                $("button.navbar-toggler").click(function(){
                  $("#primary-menu ul.primary-menu-menu").toggle();
                });

                $('.testimonial-slider').slick({
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 3000,
                  arrows: true,
                  adaptiveHeight: true
                });

                $('.check_step_view').slick({
                  dots: true, 
                  infinite: true,  
                  speed: 500,  
                  slidesToShow: 1,  
                  slidesToScroll: 1,  
                  autoplay: true,  
                  autoplaySpeed: 3000,  
                  arrows: true,  
                  adaptiveHeight: true  
                });

                $('.case-inner-section').slick({
                  dots: true,
                  infinite: true,
                  autoplay: true,
                  speed: 900,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                });

                $('.why-us-slider').slick({
                  dots: true,
                  infinite: false,
                  autoplay: true,
                  speed: 900,
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                });

                const solutionItems = document.querySelectorAll('.solution-list');
                solutionItems.forEach(item => {
                  item.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
                      e.stopPropagation();
                      solutionItems.forEach(i => {
                        if (i !== this) {
                          i.classList.remove('active');
                          const icon = i.querySelector('.arrow-icon');
                          if (icon) {
                            icon.classList.remove('fa-angle-up');
                            icon.classList.add('fa-angle-down');
                          }
                        }
                      });

                      this.classList.toggle('active');
                      const arrowIcon = this.querySelector('.arrow-icon');
                      if (arrowIcon) {
                        if (this.classList.contains('active')) {
                          arrowIcon.classList.remove('fa-angle-down');
                          arrowIcon.classList.add('fa-angle-up');
                        } else {
                          arrowIcon.classList.remove('fa-angle-up');
                          arrowIcon.classList.add('fa-angle-down');
                        }
                      }
                    }
                  });
                });

                window.addEventListener('resize', () => {
                  if (window.innerWidth > 768) {
                    solutionItems.forEach(i => i.classList.remove('active'));
                  }
                });
              });
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header/>
        {children}
        <Footer/>
        <BottomNavigationWrapper />
         {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0QD6J1K87W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0QD6J1K87W');
          `}
        </Script>
      </body>
    </html>
  );
}