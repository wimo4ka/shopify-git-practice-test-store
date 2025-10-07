
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".banner-product");
    if (!container) return;

    const colorThumbs = container.querySelectorAll(".color-thumb");
    const sizeBtns = container.querySelectorAll(".size-btn");
    const colorInput = container.querySelector("#selected-color");
    const sizeInput = container.querySelector("#selected-size");
    const variantSelect = container.querySelector("#variant-select");
    const mainImage = container.querySelector("#main-image");
    const priceBox = container.querySelector("#product-price");
    const stockBox = container.querySelector("#product-stock");
    const galleryEl = document.querySelectorAll(".swiper-slide img");

    let selectedColor = colorInput.value;
    let selectedSize = sizeInput.value;


    // {% comment %} Color chose {% endcomment %}
    colorThumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        colorThumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        selectedColor = thumb.dataset.value;
        colorInput.value = selectedColor;

        galleryEl.forEach (el => {
        if (el.dataset.color !== selectedColor.toLowerCase()) {
            el.style.display = 'none';
          } else {
            el.style.display = 'block';
          }
        })
        updateVariant();
      });
    });

//    {% comment %} Color size {% endcomment %}
    sizeBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        sizeBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedSize = btn.dataset.value;
        sizeInput.value = selectedSize;
        updateVariant();
      });
    });

    // {% comment %} Variants update {% endcomment %}
    function updateVariant() {
      if (!selectedColor || !selectedSize) return;
      const options = variantSelect.querySelectorAll("option");
      options.forEach(opt => {
        if (opt.dataset.color === selectedColor && opt.dataset.size === selectedSize) {
          variantSelect.value = opt.value;
          mainImage.src = opt.dataset.image;
          priceBox.textContent = opt.dataset.price;
          console.log(opt.dataset)
          stockBox.textContent = opt.dataset.stock;
        }
      });
    }

    

    console.log(galleryEl)
  });

  
 