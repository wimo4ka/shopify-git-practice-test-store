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
Integrate Tailwind CSS into the Dawn theme - https://tailwindcss.com/

## Branch
`feat-tailwind` created in the test store.

## Implemented Features

- **banner-product section refactor**
  - All styles rewritten using Tailwind CSS.
  - `tailwind.config.js` added. Custom styles and `tw-` prefix did not apply correctly. Guidance on correct setup is welcome.
  
- **Swiper integration via Vite**
  - Image gallery works with Swiper.
  - Tailwind styles attempted for Swiper elements.
  - **Open question:** How to access Swiper methods (`removeAllSlides()`, `appendSlide()`) in other JS files when initialized via Vite.

- **Theme toggle**
  - Added a light/dark mode switch.
  - Initially tried as a snippet, but caused constant local syncing. Added directly in the section instead.

## How to Build Tailwind + Vite

1. Install dependencies:

```bash
npm install
```

2. Start development with Vite + Tailwind:
```bash
npm run dev
```
This runs:

- Shopify theme development (shopify theme dev)
- Vite build watcher (vite build --watch)
- Tailwind CLI watcher to generate CSS: