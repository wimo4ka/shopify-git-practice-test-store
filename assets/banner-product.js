document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".banner-product");
  if (!container) return;

  const form = document.querySelector('.banner-product form');

  const variantSelect = container.querySelector("#variant-select");
  const colorInput = container.querySelector("#selected-color");
  const sizeInput = container.querySelector("#selected-size");

  const colorThumbs = container.querySelectorAll(".color-thumb");
  const sizeBtns = container.querySelectorAll(".size-btn");

  const mainImage = container.querySelector("#main-image");
  const priceBox = container.querySelector("#product-price");
  const stockBox = container.querySelector("#product-stock");
  const submitButton = form.querySelector('button[type="submit"]');
  

  // Current values
  let selectedColor = colorInput ? colorInput.value : null;
  let selectedSize = sizeInput ? sizeInput.value : null;

  const section = document.querySelector(".product-gallery-section");
  if (!section) return;

  const thumbsEl = section.querySelector(".mySwiper");
  const mainEl = section.querySelector(".mySwiper2");
  if (!thumbsEl || !mainEl) return;


const thumbsSwiper = new Swiper(thumbsEl, {
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
    spaceBetween: 0,
    navigation: {
      nextEl: mainEl.querySelector(".swiper-button-next"),
      prevEl: mainEl.querySelector(".swiper-button-prev"),
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });


  //   color choice
  colorThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      colorThumbs.forEach((t) => t.classList.remove("active", "tw:border-gray-900", "tw:dark:border-gray-300"));
      thumb.classList.add("active", "tw:border-gray-900", "tw:dark:border-gray-300");

      selectedColor = thumb.dataset.value;
      if (colorInput) colorInput.value = selectedColor;

      updateVariant();
    });
  });

  //   Size choice
  sizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sizeBtns.forEach((b) => b.classList.remove("active", "tw:bg-black", "tw:text-white", "tw:dark:bg-white", "tw:dark:!text-black"));
      btn.classList.add("active", "tw:bg-black", "tw:text-white", "tw:dark:bg-white", "tw:dark:!text-black");

      selectedSize = btn.dataset.value;
      if (sizeInput) sizeInput.value = selectedSize;

      updateVariant();
    });
  });

  form.addEventListener('submit', function () {
      if (!submitButton.disabled) {
        submitButton.disabled = true;
        submitButton.textContent = 'Product added to cart successfully!';
        form.setAttribute('aria-busy', 'true');
      }
    });

  //   Update function
  function updateVariant() {
    if (!variantSelect) return;

    const options = Array.from(variantSelect.options);
    let matchedVariant = null;

    for (const opt of options) {
      const matchColor = !selectedColor || opt.dataset.color === selectedColor;
      const matchSize = !selectedSize || opt.dataset.size === selectedSize;

      if (matchColor && matchSize) {
        matchedVariant = opt;
        break;
      }
    }

    if (!matchedVariant) return;

    // update select
    variantSelect.value = matchedVariant.value;

    // update image
    if (mainImage && matchedVariant.dataset.image) {
      mainImage.src = matchedVariant.dataset.image;
    }

    if (selectedColor) {
      updateGalleryByColor(selectedColor);
    }

    // update price
    if (priceBox && matchedVariant.dataset.price) {
      priceBox.textContent = matchedVariant.dataset.price;
    }

    // update stock
    if (stockBox && matchedVariant.dataset.stock) {
      stockBox.textContent = matchedVariant.dataset.stock;
    }

    if (submitButton) {
      if (matchedVariant.dataset.available === "true") {
        submitButton.textContent = 'Add to cart';
        submitButton.disabled = false;
      } else {
        submitButton.textContent = 'Sold Out';
        submitButton.disabled = true;
      }
    }
  }

  // Update gallery images based on selected color
  function updateGalleryByColor(color) {
    const section = document.querySelector(".product-gallery-section");
    if (!section) return;

    const productMedia = JSON.parse(section.dataset.media);
    const filteredImages = productMedia.filter(
      (media) =>
        media.media_type === "image" &&
        media.alt?.toLowerCase().includes(color.toLowerCase())
    );

    mainSwiper.removeAllSlides();
    thumbsSwiper.removeAllSlides();

    filteredImages.forEach((img) => {
      mainSwiper.appendSlide(
        `<div class="swiper-slide banner-swiper-slide">
          <img src="${img.src}" alt="${img.alt}" width="584" height="584"
            class="tw:object-contain tw:aspect-square" loading="lazy">
          </div>`
      );

      thumbsSwiper.appendSlide(
        `<div class="swiper-slide banner-swiper-slide w-fit h-fit">
          <img src="${img.src}" alt="${img.alt}" width="88" height="88"
            class="tw:object-contain tw:aspect-square" loading="lazy">
          </div>`
      ); 
    });
  }
});
