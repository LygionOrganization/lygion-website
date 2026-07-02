# Lygion Website

灵影 Lygion Robotics 品牌主站 Demo，使用 Astro 构建，目标是方便后续持续增加产品。

## 本地运行

```bash
npm install
npm run dev
```

打开终端输出的本地地址即可预览。根路径 `/` 会根据浏览器语言自动跳转到 `/zh/` 或 `/en/`。

## 目录结构

```text
src/
  data/
    i18n.ts       # 中英文文案
    products.ts   # 模块和产品数据，后续主要维护这里
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    [lang]/
      index.astro
      products/[slug].astro
  styles/
    global.css
public/
  assets/
    lygion-hero.png
  product-pages/
    {product-slug}/
      index.html
      en/index.html
      styles.css
      assets/
```

## 维护教程

详细维护说明见：

```text
docs/网站维护教程.md
```

## 新增产品

1. 打开 `src/data/products.ts`。
2. 在 `products` 数组里复制一个产品对象。
3. 修改 `slug`、`module`、中英文名称、简介、参数和链接。
4. 在 `public/product-pages/{product-slug}/` 新增该产品自己的独立详情页资料包。
5. 运行 `npm run dev` 检查首页、模块页和详情页。

`module` 只能使用下面四类：

- `bus-devices`：总线设备
- `robot-modules`：机器人模组
- `robot-systems`：机器人整机
- `lygion-open`：灵影开源

## 维护单个产品

每个产品都是 `src/data/products.ts` 里的一个对象。常用字段如下：

- `slug`：产品 URL，例如 `lg-bus-core` 会生成 `/zh/products/lg-bus-core/`
- `module`：产品所属模块，只能使用上面的四类之一
- `image`：产品图片路径，建议放在 `public/assets/products/`
- `detailPath`：独立详情页路径。后续产品默认都填写该字段，并指向 `public/product-pages/{product-slug}/index.html`
- `name`：中英文产品名
- `summary`：卡片上的一句话简介
- `description`：详情页的完整介绍
- `highlights`：详情页亮点列表
- `specs`：详情页参数表
- `links`：可选的文档、GitHub、联系链接

替换产品图片时，把真实图片放到 `public/assets/products/`，然后修改该产品的 `image` 字段即可。当前 Demo 使用 SVG 占位图，方便先看布局效果。

## 独立产品详情页资料包

后续每个产品都采用独立资料包维护。每个产品都有自己的 `index.html`，中文详情页、英文详情页、CSS、图片和下载资料都放在同一个产品目录内：

```text
public/product-pages/{product-slug}/
  index.html        # 中文详情页
  en/
    index.html      # 英文详情页
  styles.css
  assets/
```

例如 DW69 当前放在：

```text
public/product-pages/DW69/
  index.html
  en/
    index.html
  styles.css
  assets/
```

然后在 `src/data/products.ts` 中给产品增加：

```ts
image: "/product-pages/DW69/assets/hero-product.jpg",
detailPath: {
  zh: "/product-pages/DW69/index.html",
  en: "/product-pages/DW69/en/index.html"
},
```

这样中文主站会打开中文独立详情页，英文主站会打开英文独立详情页。HTML 内部图片建议使用相对路径：中文页使用 `assets/hero-product.jpg`，英文页位于 `en/` 子目录时使用 `../assets/hero-product.jpg`。这样整个资料包移动时不容易断链。

### 英文详情页维护方式

1. 中文详情页固定使用 `public/product-pages/{product-slug}/index.html`。
2. 英文详情页固定使用 `public/product-pages/{product-slug}/en/index.html`。
3. 中英文页共用同一个 `styles.css` 和 `assets/`，不要复制图片。
4. 中文页导航里放英文切换按钮，例如：

```html
<a class="language-switch" href="en/index.html" lang="en">English</a>
```

5. 英文页导航里放中文切换按钮，例如：

```html
<a class="language-switch" href="../index.html" lang="zh-CN">中文</a>
```

6. 如果产品已有中文 `index.html`，新增英文页时优先复制页面结构，只翻译标题、正文、表格、图片 `alt` 和 SEO `title/description`。不要改动共用 CSS 类名，避免中英文页面样式分叉。
7. 新产品上线前检查三处路径：`products.ts` 的 `image`、`detailPath.zh`、`detailPath.en`。

## 模块页面

每个模块会自动生成中英文页面：

- `/zh/modules/bus-devices/`
- `/zh/modules/robot-modules/`
- `/zh/modules/robot-systems/`
- `/zh/modules/lygion-open/`

英文路径同理，把 `/zh/` 换成 `/en/`。

## 构建

```bash
npm run build
```

后续可以接 GitHub Actions，把构建产物部署到 GitHub Pages、Cloudflare Pages 或其他静态托管平台。
