import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  // thumbs slider
  const thumbs = new Swiper('.mySwiper', {
    loop: true,
    direction: "vertical",
    spaceBetween: 0,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });

  // main slider
  const main = new Swiper('.mySwiper2', {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbs,
    },
  });
});