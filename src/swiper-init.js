import Swiper from "swiper";
import { Navigation, Thumbs, FreeMode  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".product-gallery-section");
  if (!section) return;

  const thumbsEl = section.querySelector(".mySwiper");
  const mainEl = section.querySelector(".mySwiper2");
  if (!thumbsEl || !mainEl) return;


const thumbsSwiper = new Swiper(thumbsEl, {
    modules: [Navigation, Thumbs, FreeMode ],
    direction: "horizontal",
    spaceBetween: 8,
    slidesPerView: 5,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    freeMode: true,
    breakpoints: {
      1024: {
        direction: "vertical",
        slidesPerView: 5,
        spaceBetween: 8,
      },
    },
  });

  const mainSwiper = new Swiper(mainEl, {
    modules: [Navigation, Thumbs],
    spaceBetween: 0,
    navigation: {
      nextEl: mainEl.querySelector(".swiper-button-next"),
      prevEl: mainEl.querySelector(".swiper-button-prev"),
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
});

