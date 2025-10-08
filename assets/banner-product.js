document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".banner-product");
  if (!container) return;

  const variantSelect = container.querySelector("#variant-select");
  const colorInput = container.querySelector("#selected-color");
  const sizeInput = container.querySelector("#selected-size");

  const colorThumbs = container.querySelectorAll(".color-thumb");
  const sizeBtns = container.querySelectorAll(".size-btn");

  const mainImage = container.querySelector("#main-image");
  const priceBox = container.querySelector("#product-price");
  const stockBox = container.querySelector("#product-stock");

  // Current values
  let selectedColor = colorInput ? colorInput.value : null;
  let selectedSize = sizeInput ? sizeInput.value : null;

 //   color choice
  colorThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      colorThumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");

      selectedColor = thumb.dataset.value;
      if (colorInput) colorInput.value = selectedColor;

      updateVariant();
    });
  });

//   Size choice
  sizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      sizeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      selectedSize = btn.dataset.value;
      if (sizeInput) sizeInput.value = selectedSize;

      updateVariant();
    });
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

    // update price
    if (priceBox && matchedVariant.dataset.price) {
      priceBox.textContent = matchedVariant.dataset.price;
    }

    // update stock
    if (stockBox && matchedVariant.dataset.stock) {
      stockBox.textContent = matchedVariant.dataset.stock;
    }

    // console.log("Selected variant:", {
    //   id: matchedVariant.value,
    //   color: matchedVariant.dataset.color,
    //   size: matchedVariant.dataset.size,
    //   image: matchedVariant.dataset.image,
    //   price: matchedVariant.dataset.price,
    //   stock: matchedVariant.dataset.stock,
    // });
  }
});
