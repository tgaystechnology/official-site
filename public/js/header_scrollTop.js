$(window).scroll(function () {
  if ($(this).scrollTop() > 220) {
    $(".Navigation-sec").addClass("fixed");
  } else {
    $(".Navigation-sec").removeClass("fixed");
  }
});
