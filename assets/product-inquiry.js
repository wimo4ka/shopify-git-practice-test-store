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
          ? '{{ "product-form.inquiry.submit" | t }}'
          : '{{ "product-form.inquiry.sold_out" | t }}';
        if (stockBox && selectedOption.dataset.stock) {
          stockBox.textContent = selectedOption.dataset.stock;
        }
      });
    }

    form.addEventListener('submit', function () {
      if (!submitButton.disabled) {
        submitButton.disabled = true;
        submitButton.textContent = '{{ "product-form.inquiry.success" | t }}';
        form.setAttribute('aria-busy', 'true');
      }
    });
  });