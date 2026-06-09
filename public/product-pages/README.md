# Product Detail Packages

Put standalone product detail pages here.

Recommended structure:

```text
product-pages/
  product-slug/
    index.html
    styles.css
    assets/
```

In `src/data/products.ts`, point a product to the package:

```ts
image: "/product-pages/product-slug/assets/hero-product.jpg",
detailPath: "/product-pages/product-slug/index.html",
```
