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
# Tailwind CSS Integration in Dawn Theme

## Task
Theme Accessibility

## Overview

This task focused on improving performance, visual consistency, and user experience across the Shopify theme through image optimization, responsive adjustments, and UI refinements.

This update enhances accessibility (a11y), Swiper integration, variant-based gallery switching, and HTML validity across multiple product UI components in the Shopify theme.

The work focused on:
- updating the image gallery when selecting a color,
- proper aria-attribute usage,
- accessibility improvements for Swiper buttons,
- fixing W3C Validator errors,
- optimizing alt text,
- correcting label ↔ form control associations,
- resolving warnings in the product card.

---

## 🚀 Implemented Functionality

### **1. Color-Based Product Gallery Updates**
- Implemented a JS function `updateGalleryByColor(color)` that:
  - filters images by color using `media.alt`,
  - removes existing slides,
  - appends new slides to both mainSwiper and thumbsSwiper,
  - updates accessibility attributes:
    - `aria-label`,
    - `aria-pressed`,
    - `aria-current`.

### **2. Thumbnail Button Accessibility (Swiper)**
- Each thumbnail button now includes:
  - `type="button"`
  - `aria-label="Show image X"`
  - `aria-pressed="false"`

- When a slide becomes active:
  - active thumbnail gets `aria-pressed="true"`,
  - all others become `aria-pressed="false"`,
  - `aria-current="true"` is assigned to the active item.

This ensures proper screen reader behavior and keyboard accessibility.

---

## 🏷 3. Variant Picker Accessibility

### **3.1 Labels & Radiogroups**
- Added:
  - `role="radiogroup"`
  - `aria-labelledby="label-color"`
- Labels are now correctly associated via `id`.

### **3.2 Fix: “Orphaned form label”**
The issue occurred because the label did not directly correspond to a form control.  
Resolved by:

- letting the label describe the entire radiogroup (not a single input),
- ensuring each variant button has `role="radio"`.

### **3.3 Hidden Select Label Fix**
- Added `aria-labelledby="label-color"` to the hidden `<select>`.
- Fully resolves Lighthouse “Select missing label”.

---

## 🖼 4. Product Card Improvements

### 4.1 ALT Text Fix
Resolved Lighthouse warning: **Suspicious alternative text**  
Logic implemented:
- decorative images → `alt=""`,
- alt text no longer duplicates product titles,
- placeholder images use meaningful alt text (e.g., `"Placeholder image"`).

All validation issues have been fixed:

### ✔ Orphaned form label  
Label now correctly associated with a radiogroup.

### ✔ Select missing label  
Hidden select receives an accessible label through `aria-labelledby`.

### ✔ Suspicious alternative text  
All alt attributes rewritten to follow accessibility best practices.

### ✔ Role mismatches  
`role="radio"` added correctly.

---

## 📦 Result
After all improvements:

- The gallery correctly updates on color selection.
- Swiper thumbnails support full aria interaction (`aria-pressed`, `aria-current`).
- All labels have valid associations.
- The hidden select now has a proper accessible name.
- ALT text is optimized and no longer triggers warnings.
- All W3C Validator errors have been resolved.
- Overall accessibility, SEO, and UX have significantly improved.

---

## 💻 Technologies Used
- **Shopify Liquid**
- **Vanilla JavaScript**
- **Swiper.js**
- **Tailwind CSS**
- **ARIA Accessibility Patterns**

---



