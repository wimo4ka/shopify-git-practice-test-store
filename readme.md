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
I# Product Recommendations Carousel

## Overview

This project implements a custom JavaScript component for product recommendations on Shopify: the **Recommendations Carousel**.

## Features

- **Tailwind CSS & Swiper:** Integrated via Vite with global Swiper initialization.  
- **Shopify Setup:** App Search and Discovery added; some products have manual recommendations, others are AI-generated.  
- **RecommendationsCarousel Component:** Asynchronous loading of recommendations based on the current product.  
- **Page Integration:** Section `recommendations-carousel` added to the product page.  
- **Custom Product Cards:** Moved to a separate snippet `custom-product-card`.  
- **Styling:** All section and snippet styles implemented with Tailwind CSS.  
- **Localization:** Translatable text elements via `t` in `en.default.json`; section schema translations via `t` in `en.schema.default.json`.  
- **Documentation:** Added README with project description.  
- **Pull Request:** Created in the `dev` branch with detailed description.


