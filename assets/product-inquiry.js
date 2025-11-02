document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.product-inquiry-section form');
    if (!form) return;

    const variantSelect = document.getElementById('product-variant');
    const submitButton = form.querySelector('button[type="submit"]');
    const stockBox = form.querySelector('#product-stock');

    if (variantSelect) {
      variantSelect.addEventListener('change', function () {
        const selectedOption = this.options[this.selectedIndex];
        const isAvailable = !selectedOption.disabled;
        submitButton.disabled = !isAvailable;
        submitButton.textContent = isAvailable
          ? 'Add to cart'
          : 'Sold Out';
        if (stockBox && selectedOption.dataset.stock) {
          stockBox.textContent = selectedOption.dataset.stock;
        }
      });
    }

    form.addEventListener('submit', function () {
      if (!submitButton.disabled) {
        submitButton.disabled = true;
        submitButton.textContent = 'Product added to cart successfully!';
        form.setAttribute('aria-busy', 'true');
      }
    });
  });