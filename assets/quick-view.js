class QuickView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.content = this.querySelector(".quick-view__content");
    this.openButtons = document.querySelectorAll(".product-card__btn");
    this.closeButton = this.querySelector("[data-close]");
    this.handleClick = this.handleClick.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);

    this.openButtons.forEach((button) => {
      button.addEventListener("click", this.handleClick);
    });
    this.closeButton.addEventListener("click", this.closeDrawer);
  }

  disconnectedCallback() {
    this.openButtons.forEach((button) => {
      button.removeEventListener("click", this.handleClick);
    });
    this.closeButton.removeEventListener("click", this.closeDrawer);
  }

  async handleClick(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const variantId = button.dataset.productId;
    if (!variantId) return;

    try {
      // Додаємо товар до кошика
      await fetch("/cart/add.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: variantId, quantity: 1 }),
      });

      // Завантажуємо оновлену сторінку кошика
      const response = await fetch("/cart");
      const data = await response.text();

      // Тимчасовий контейнер для парсингу
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      const cartContents = tempDiv.querySelector(".cart__contents");
      const cartFooter = tempDiv.querySelector(".cart__footer");

      this.content.innerHTML = "";

      if (cartContents) this.content.appendChild(cartContents);
      if (cartFooter) this.content.appendChild(cartFooter);

      this.openDrawer();
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  }

  openDrawer() {
    this.setAttribute("open", "");
    document.body.classList.add("no-scroll"); // щоб не прокручувався фон
  }

  closeDrawer() {
    this.removeAttribute("open");
    document.body.classList.remove("no-scroll");
  }
}

customElements.define("quick-view", QuickView);
