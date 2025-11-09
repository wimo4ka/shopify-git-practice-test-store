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


  //   color choice
  colorThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      colorThumbs.forEach((t) => t.classList.remove("active", "border-gray-900", "dark:border-gray-300"));
      thumb.classList.add("active", "border-gray-900", "dark:border-gray-300");

      selectedColor = thumb.dataset.value;
      if (colorInput) colorInput.value = selectedColor;

      updateVariant();
    });
  });

  //   Size choice
  sizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sizeBtns.forEach((b) => b.classList.remove("active", "bg-black", "text-white", "dark:bg-white", "dark:!text-black"));
      btn.classList.add("active", "bg-black", "text-white", "dark:bg-white", "dark:!text-black");

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

    // Шукаємо відповідний варіант за кольором та розміром
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

    const mainWrapper = section.querySelector(".mySwiper2 .swiper-wrapper");
    const thumbsWrapper = section.querySelector(".mySwiper .swiper-wrapper");

    if (!mainWrapper || !thumbsWrapper) return;

    mainWrapper.innerHTML = "";
    thumbsWrapper.innerHTML = "";

    filteredImages.forEach((img) => {
      thumbsWrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="swiper-slide w-fit h-fit">
         <img src="${img.src}" alt="${img.alt}" width="88" height="88"
              class="object-contain aspect-square" loading="lazy">
       </div>`
      );

      mainWrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="swiper-slide">
         <img src="${img.src}" alt="${img.alt}" width="584" height="584"
              class="object-contain aspect-square" loading="lazy">
       </div>`
      );
    });

    const mainSwiperEl = section.querySelector(".mySwiper2").swiper;
    const thumbsSwiperEl = section.querySelector(".mySwiper").swiper;
 
    /* Я дуже хотіла звернутися саме до компонента Swiper, 
    але в мене не вийшло, можете будь ласка проглянути, і підказати як краще зробити
    if (!mainSwiperEl || !thumbsSwiperEl) return;

    mainSwiperEl.removeAllSlides();
    thumbsSwiperEl.removeAllSlides();

    filteredImages.forEach((img) => {
      mainSwiperEl.appendSlide(
        `<div class="swiper-slide">
          <img src="${img.src}" alt="${img.alt}" width="584" height="584"
            class="object-contain aspect-square" loading="lazy">
          </div>`
      );

      thumbsSwiperEl.appendSlide(
        `<div class="swiper-slide w-fit h-fit">
          <img src="${img.src}" alt="${img.alt}" width="88" height="88"
            class="object-contain aspect-square" loading="lazy">
          </div>`
      ); 
    });
    */

    if (mainSwiperEl) mainSwiperEl.update();
    if (thumbsSwiperEl) thumbsSwiperEl.update();
  }
});
