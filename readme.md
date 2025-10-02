## 1. Project Overview

This project is built on top of Shopify’s Dawn theme, the default reference theme for Online Store 2.0.
It serves as a modern, flexible, and customizable Shopify theme with a focus on performance, accessibility, and maintainability.

## 2. Project Structure

- assets → CSS, JS, and image files
- config → Theme settings and schema
- layout → Global templates (theme.liquid, password.liquid)
- locales → Translations (support for multiple languages)
- sections → Flexible content blocks (slideshow, header, footer, etc.)
- snippets → Reusable Liquid code (icons, product cards, etc.)
- templates → Page templates (product.json, index.json, etc.)

## 3.Technologies Used

- Shopify Liquid – Shopify’s templating language
- Dawn Theme – official base theme by Shopify
- HTML, CSS, JavaScript (Vanilla JS / ESNext)
- Shopify CLI for local development
- JSON Templates for Online Store 2.0

## 4. Features Implemented

- Full Online Store 2.0 support (sections everywhere)
- Responsive layout with Grid & Flexbox
- Theme settings (colors, typography, layout)
- Accessible & SEO-friendly markup
- Performance-optimized (minimal JS, lazy-loaded media)
- Added a Model Info block to the Main-product section, which is rendered when a metaobject is assigned to the product.


## New snippet Universal Product Banner Snippet
  Usage: {% render 'banner-product', product: product %}
  
    Added snippet to the main product section
    Product image: added validation for image availability. If no image exists for the product or the selected color, a placeholder is displayed.
    Product title: added validation to ensure the field contains data.
    Product price: implemented using capture.
    Product stock: added validation for inventory_management and product availability.
    Color and size switchers implemented inside the product form:
    Options for rendering color and size handled via case/when.
    Color buttons generated with a loop (limit: 3), displaying images when available.
    If no image exists, the button is filled with a background color and the color name is displayed.
    Added hidden select to accumulate color and size selection data.
    Added submit button (“Add to cart”).
    Product description: validation for presence.
    Text strings implemented via t (translation).

    Technologies:
    •	Liquid, logic with tags.
    •	Shopify Admin
    •	Git
    •	JS CSS

    Improvements:
    Add a metaobject with additional images and their render.
