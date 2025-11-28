document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("[data-section-id]");
  const sectionId = section.dataset.sectionId;
  const sortSelect = document.getElementById(`sort-by-${sectionId}`);
  const grid = document.querySelector(".productsSwiper .swiper-wrapper");

  const swiperEl = section.querySelector(".productsSwiper")

  const productSwiper = new Swiper(swiperEl, {
    direction: "horizontal",
    spaceBetween: 8,
    slidesPerView: 1,
    navigation: {
      nextEl: swiperEl.querySelector(".swiper-button-next"),
      prevEl: swiperEl.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 8,
      },
    },
  });

  const content = document.querySelector(".quick-view__content");

  if (!sortSelect || !grid) return;

  // Sort products function
  function sortProducts(sortValue) {
    const productCards = Array.from(grid.querySelectorAll(".product-card"));
    productCards.sort((a, b) => {
      switch (sortValue) {
        case "price-low":
          return parseInt(a.dataset.price) - parseInt(b.dataset.price);

        case "price-high":
          return parseInt(b.dataset.price) - parseInt(a.dataset.price);

        case "title-ascending":
          return a.dataset.title.localeCompare(b.dataset.title);

        case "best-selling":
        default:
          return 0;
      }
    });
    productCards.forEach((card) => grid.appendChild(card));
  }
  sortSelect.addEventListener("change", (e) => {
    sortProducts(e.target.value);
  });
});
