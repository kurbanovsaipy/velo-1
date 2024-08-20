$(document).on('mouseenter', '.swiper-wrapper .swiper-slide', function() {
  $(this).closest('.swiper-overflow').addClass("swiper-overflow--hovered");
});

$(document).on('mouseleave', '.swiper-wrapper .swiper-slide', function() {
  $(this).closest('.swiper-overflow').removeClass("swiper-overflow--hovered");
});


// Инициализация слайдера
var swiper = new Swiper('.catalog__slider--01', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  breakpoints: {
     1200: {
      slidesPerView: 4,
    }
  },
  loop: true,
  navigation: {
    nextEl: '.catalog__next--01',
    prevEl: '.catalog__prev--01',
  },
  autoplay: {
    speed: 5000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper('.catalog__slider--02', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  breakpoints: {
     1200: {
      slidesPerView: 4,
    }
  },
  loop: true,
  navigation: {
    nextEl: '.catalog__next--02',
    prevEl: '.catalog__prev--02',
  },
  autoplay: {
    speed: 5000,
    delay: 2500,
    disableOnInteraction: false,
  },
});