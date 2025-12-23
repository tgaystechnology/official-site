$(document).ready(function () {
  $(".brand-logo").slick({
    dots: !0,
    infinite: !1,
    speed: 1e3,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: !0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: !0,
          dots: !0,
        },
      },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }),
    // $(".about-thumb").slick({
    //   dots: !0,
    //   infinite: !0,
    //   speed: 500,
    //   fade: !0,
    //   cssEase: "linear",
    // }),
    $(".let-talk-btn").click(function () {
      $(".window-popup.open").show();
    });
  //   $("button.navbar-toggler.react-toggle").click(function () {
  //     $("ul.primary-menu-menu.react-menu-section").toggle();
  //   });
  // $(".primary-menu-menu>li.hire-nw").click(function () {
  //   $("ul.hire-nw-submenu").toggle();
  // });
  // $(".primary-menu-menu>li.at").click(function () {
  //   $("ul.at-sub-menu").toggle();
  // });
  // $(".primary-menu-menu>li.menu-item-has-mega-menu.prtfolio").click(
  //   function () {
  //     $(".megamenu.prtfolio-mega").toggle();
  //   }
  // );
  // $(".primary-menu-menu>li.servic-nv").click(function () {
  //   $("ul.servic-nv-submenu").toggle();
  // });
  // $(".primary-menu-menu>li.menu-item-has-mega-menu.scss-stories").click(
  //   function () {
  //     $(".megamenu.scss-stories-mega-menu").toggle();
  //   }
  // );

    $('.testomonial_section_box').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $(".Navigation-sec").addClass("fixed");
  } else {
    $(".Navigation-sec").removeClass("fixed");
  }
});


