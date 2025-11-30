document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".banner-product");
  if (!container) return;

  const form = document.querySelector(".banner-product form");

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
  const thumbs = section.querySelectorAll(
    ".mySwiper .swiper-wrapper .banner-swiper-slide button"
  );
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
      colorThumbs.forEach((t) =>
        t.classList.remove(
          "active",
          "tw:border-gray-900",
          "tw:dark:border-gray-300"
        )
      );
      thumb.classList.add(
        "active",
        "tw:border-gray-900",
        "tw:dark:border-gray-300"
      );

      selectedColor = thumb.dataset.value;
      if (colorInput) colorInput.value = selectedColor;
      updateAriaState(colorThumbs, thumb);
      updateVariant();
    });
  });

  addKeyboardSupport(colorThumbs);

  //   Size choice
  sizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sizeBtns.forEach((b) =>
        b.classList.remove(
          "active",
          "tw:bg-black",
          "tw:text-white",
          "tw:dark:bg-white",
          "tw:dark:!text-black"
        )
      );
      btn.classList.add(
        "active",
        "tw:bg-black",
        "tw:text-white",
        "tw:dark:bg-white",
        "tw:dark:!text-black"
      );

      selectedSize = btn.dataset.value;
      if (sizeInput) sizeInput.value = selectedSize;

      updateAriaState(sizeBtns, btn);
      updateVariant();
    });
  });

  addKeyboardSupport(sizeBtns);

  form.addEventListener("submit", function () {
    if (!submitButton.disabled) {
      submitButton.disabled = true;
      submitButton.textContent = "Product added to cart successfully!";
      form.setAttribute("aria-busy", "true");
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
        submitButton.textContent = "Add to cart";
        submitButton.disabled = false;
      } else {
        submitButton.textContent = "Sold Out";
        submitButton.disabled = true;
      }
    }
  }

  // Update gallery images based on selected color
  function updateGalleryByColor(color) {
    const productMedia = JSON.parse(section.dataset.media);
    const filteredImages = productMedia.filter(
      (media) =>
        media.media_type === "image" &&
        media.alt?.toLowerCase().includes(color.toLowerCase())
    );

    mainSwiper.removeAllSlides();
    thumbsSwiper.removeAllSlides();

    filteredImages.forEach((img, index) => {
      mainSwiper.appendSlide(`
      <div class="swiper-slide banner-swiper-slide">
        <img src="${img.src}" alt="${img.alt}${index + 1}" width="584" height="584"
          class="tw:object-contain tw:aspect-square" loading="${
            index === 0 ? "eager" : "lazy"
          }">
      </div>
    `);

      thumbsSwiper.appendSlide(`
      <div class="swiper-slide banner-swiper-slide w-fit h-fit">
        <button
          type="button"
          class="tw:appearance-none tw:bg-transparent tw:border-0 tw:p-0 tw:m-0 tw:cursor-pointer tw:focus:outline-none tw:focus:ring-2 tw:focus:ring-black"
          aria-label="Show image ${index + 1}: ${img.alt}"
          aria-pressed="${index === 0 ? "true" : "false"}"
        >
          <img src="${img.src}" alt="${img.alt}${index + 1}" width="88" height="88"
            class="tw:object-cover tw:aspect-square" loading="lazy">
        </button>
      </div>
    `);
    });

    thumbsSwiper.update();
    mainSwiper.update();

    initThumbsAccessibility();
  }

  // Helper for ARIA updates radio (variant select)
  function updateAriaState(buttons, activeBtn) {
    buttons.forEach((btn) => {
      const isActive = btn === activeBtn;

      btn.setAttribute("aria-checked", isActive ? "true" : "false");
      btn.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }

  // Add A11y keyboard navigation for radiogroup
  function addKeyboardSupport(buttons) {
    buttons.forEach((btn, index) => {
      btn.addEventListener("keydown", (e) => {
        const key = e.key;

        // SPACE / ENTER → activate
        if (key === " " || key === "Enter") {
          e.preventDefault();
          btn.click();
          btn.focus();
        }

        // Arrow keys navigation
        let newIndex = index;

        if (key === "ArrowRight" || key === "ArrowDown") newIndex++;
        if (key === "ArrowLeft" || key === "ArrowUp") newIndex--;

        if (newIndex < 0) newIndex = buttons.length - 1;
        if (newIndex >= buttons.length) newIndex = 0;

        if (newIndex !== index) {
          buttons[newIndex].focus();
        }
      });
    });
  }

  // Add accessibility to thumbs ---
  function initThumbsAccessibility() {
    const thumbButtons = section.querySelectorAll(
      ".mySwiper .swiper-wrapper .banner-swiper-slide button"
    );
    if (!thumbButtons.length) return;

    thumbButtons.forEach((btn, index) => {
      // Start state
      btn.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      btn.setAttribute("tabindex", index === 0 ? "0" : "-1");

      // Click
      btn.addEventListener("click", () => {
        updateThumbsAria(thumbButtons, btn);
      });

      // Keyboard
      btn.addEventListener("keydown", (e) => {
        let newIndex = index;

        if (e.key === "ArrowRight" || e.key === "ArrowDown") newIndex++;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") newIndex--;

        if (newIndex < 0) newIndex = thumbButtons.length - 1;
        if (newIndex >= thumbButtons.length) newIndex = 0;

        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          btn.click();
        }

        if (newIndex !== index) {
          thumbButtons[newIndex].focus();
        }
      });
    });
  }

  // --- Update aria-pressed for thumbs ---
  function updateThumbsAria(buttons, activeBtn) {
    buttons.forEach((btn) => {
      btn.setAttribute("aria-pressed", btn === activeBtn ? "true" : "false");
      btn.setAttribute("tabindex", btn === activeBtn ? "0" : "-1");
    });
  }

  initThumbsAccessibility();
});
