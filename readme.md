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

Task Description

Create two custom sections with different types of settings and dynamic blocks.

Implemented Functionality:

    Created a new git branch feature-hw_dynamic-content-sections.
    A pull request was made to the dev branch (based on the Dawn theme) for easier review and testing.

    1. promo-banners.liquid
        Implemented section schema with the following settings:
            Heading (text)
            Subheading (richtext)
            Text alignment (select): left, center, right
            Section padding (range): 0–100px
            Color scheme (select): light, dark, accent
        All textual setting values are defined in en.default.schema.json for localization support.
        Added dynamic “banner” blocks with the following settings:
            Image (image_picker)
            Title (text)
            Button text (text)
            Button link (url)
            Aspect ratio (select): 16:9, 1:1, 3:2
        Implemented a responsive grid layout:
            1 column on mobile,
            2 columns on tablet,
            3 columns on desktop.

    2. featured-products.liquid
        Implemented the following section settings:
            Heading (text)
            Collection selection (collection)
            Number of products (range): 2–12
            Show price (checkbox)
            Show rating (checkbox)
            Add to cart button (checkbox)
        Added sorting filters (best-selling, price-low, price-high, title-ascending).
        Sorting is currently implemented on the frontend; an attempt using the Section Rendering API was made but not yet successful.

        On clicking “Add to cart,” a popup opens that renders part of the cart section.
        The popup is implemented through the quick-view.liquid snippet.

    Styles and JavaScript are stored in the assets folder.
    Static text elements that may require translation are localized using the t filter and en.default.json.

    Added a README file with a project description.

## Technologies and Approaches

Liquid
Shopify Admin
Git
JavaScript & CSS

## Improvements
    I would like to see an example of how sorting in a section can be implemented using the Section Rendering API.

    Potential improvement: make the popup snippet more universal so it can be reused beyond the cart.

    Future enhancement: implement filters using the App Search and Discovery feature.
