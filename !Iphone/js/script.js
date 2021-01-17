$(document).ready(function () {
  $("#carousel1").owlCarousel({
    center: true,
    loop: true,
    items: 5,
    margin: 40,
    dots: false,
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      375: {
        items: 1.15
      },
      425: {
        items: 1.3
      },
      475: {
        items: 1.4
      },
      540: {
        items: 1.6
      },
      600: {
        items: 1.8
      },
      650: {
        items: 2
      },
      700: {
        items: 2.2
      },
      767: {
        items: 2.2
      },
      820: {
        items: 2.5
      },
      992: {
        items: 2.7
      },
      1024: {
        items: 3
      },
      1200: {
        items: 3.8
      },
      1440: {
        items: 4.5
      }
    },
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
  });

  $('#customers_carousel1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,

    centerMode: true,
    asNavFor: '#customers_carousel2',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('#customers_carousel2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#customers_carousel1',
    dots: false,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      },
    ]
  });
  //закрытие
});


//Меню бургер
let headerBtn = document.querySelector(".header__nav-btn"),
  spanBtn = document.querySelector(".header__nav-btn_span"),

  navItems = document.querySelectorAll('.header__nav-itmes__item'),
  fbItems = document.querySelectorAll('.header__feedback-itmes__item');

headerBtn.onclick = function () {

  spanBtn.classList.toggle("close")

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.toggle("header-active");
  }
  for (var i = 0; i < fbItems.length; i++) {
    fbItems[i].classList.toggle("header-active");
  }

}

