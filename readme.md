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

-  created a working framework of the theme (OS 2.0) on Liquid, added structure, minimal required files (index.json, theme.liquid), added 2 localization files: en.default.json, uk.json

- Created and stylized 2 sections header.liquid and footer.liquid
   header.liquid: the header logo is used as a snippet, there was added a check for the logo resourse. Added a navigation snippet using the linklists object.
   footer.liquid: links to the store pages are used via routes

- Added and set up my training section banner-product.liquid.
  The cart button add-to-cart-button.liquid is displayed in a separate snippet.
  The selector for choosing the color or size of shoes product-option-selector.liquid is displayed in a separate snippet, and the output of the number of products in stock, if any, is also added.
  In case of the absence of the above options, the output of service messages of the type (one size, one color) is added.
  In case if the product is not selected, then the service message product.banner.no_product has been added
- Texts have been implemented with t:
- Aria label tags added for navigation.
- Image: image_url → image_tag with alt, add width/height, loading: 'lazy' in the lists.


  ## Technologies:
    •	Liquid, logic with tags.
    •	Shopify Admin
    •	Git
    •	JS CSS

  ## Improvements:
    Add burger menu.
    Separate js and css for product-option-selector.liquid
