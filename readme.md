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

# 🧩 Working with Metafields and Metaobjects

## 📝 Task Description
Implementation of functionality for working with **Shopify metafields** and **metaobjects**.

---

## 🚀 Implemented Functionality

- Created a new branch: **`feat-hw-working-with-metafields-and-metaobjects`**  
- In **Shopify Admin**, a **Metaobject: `Designer`** was created with the following fields:

| Field name | Key | Type | Notes |
|-------------|------|------|-------|
| Name | `designer.name` | Single line text |  |
| Avatar | `designer.avatar` | File → Image |  |
| Bio | `designer.bio` | Multiline text |  |
| Tags | `designer.tags` | List of single line strings | Limited to preset choices |
| Portfolio links | `designer.portfolio_links` | List of links |  |
| Date of Birth | `designer.date_of_birth` | Date |  |
| Verified designer | `designer.verified_designer` | True/False |  |

---

- Added **4 designer entries**, one of which:
  - has no image,
  - includes a single portfolio link,
  - is marked as **unverified**.

- Created section **`collection-designers`**, which displays cards for all designers.

```liquid
'{% assign designers = collection.metafields.custom.designers.value %}'
Section settings allow toggling the visibility of specific metaobject fields.

- Added value validation checks for all designer card elements.
- Styles moved to assets.
- Translatable text is implemented using t in en.default.json.
- Section schema translations handled via t in en.schema.default.json.


## 5. Technologies and Approaches

Liquid
Shopify Admin
Git
CSS