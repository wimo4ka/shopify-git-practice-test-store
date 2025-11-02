## 1. Project Overview

This project is built from scratch theme for Online Store 2.0.

## 2. Project Structure

- assets → CSS, JS, and image files
- config → Theme settings and schema
- layout → Global templates (theme.liquid)
- locales → Translations (support for multiple languages)
- sections → Flexible content blocks (banner-product, header, footer, etc.)
- snippets → Reusable Liquid code (buttons, product options, etc.)
- templates → Page template ( index.json, etc.)

## 3.Technologies Used

- Shopify Liquid – Shopify’s templating language
- Dawn Theme – official base theme by Shopify
- HTML, CSS, JavaScript (Vanilla JS / ESNext)
- Shopify CLI for local development
- JSON Templates for Online Store 2.0

## 4. Features Implemented

## 🛠️ Task Description  
**Working with forms in Shopify**

---

## 🚀 Implemented Functionality  
---

### 📨 Contact Form  
Implemented in the `custom-contact-form.liquid` section.  
The section was added to the **homepage**.

**Features:**
- Displays submission status separately (**success / error messages**)
- Added fields:
  - **Name** — text input  
  - **Email** — required, autocomplete enabled  
  - **Phone** — text input  
  - **Message** — required, textarea  
- **HTML validation** added for all fields  
- **Honeypot anti-spam** implemented  
  - If a bot is detected, a console warning appears:  
    `Spam bot detected — form not submitted`
- Works correctly with **reCAPTCHA** enabled (no conflicts)

---

### 🛍️ Product Inquiry Form  
Implemented in the `product-inquiry.liquid` section.  
The section was added to the **product page**.

**Features:**
- Displays submission status separately (**success / error messages**)
- Added fields:
  - **Variant** — select dropdown (visible only if the product has variants, e.g. `/products/nike-air-max-plus`)
  - **Quantity** — number input (`min: 1`, `max: inventory quantity`, or `max: 100` if not specified; required, autocomplete enabled)
  - **Reason for inquiry** — text input  
  - **Preferred contact method** — radio button group  
- When a product variant is **unavailable**:
  - **Submit button** is disabled  
  - A **user message** is displayed  
- `properties[...]` are stored in the **line item**

---

### 🧩 Additional Notes
- **Styles** and **JavaScript** are placed in the `/assets` directory  
- All translatable text elements use the `t` filter and are defined in `en.default.json`  
- **Section schema translations** are handled via `t` in `en.schema.default.json`  


## 5. Technologies and Approaches

Liquid
Shopify Admin
Git
CSS
JS