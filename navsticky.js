$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 192) {
      $(".navbar-sticky").removeClass("d-none");
    } else {
      $(".navbar-sticky").addClass("d-none");
    }
  });
    