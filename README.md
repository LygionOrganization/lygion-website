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
4. 运行 `npm run dev` 检查首页和详情页。

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
- `detailPath`：可选。填写后，产品卡片会跳到独立详情页资料包，例如 `/product-pages/dw69/index.html`
- `name`：中英文产品名
- `summary`：卡片上的一句话简介
- `description`：详情页的完整介绍
- `highlights`：详情页亮点列表
- `specs`：详情页参数表
- `links`：可选的文档、GitHub、联系链接

替换产品图片时，把真实图片放到 `public/assets/products/`，然后修改该产品的 `image` 字段即可。当前 Demo 使用 SVG 占位图，方便先看布局效果。

## 独立产品详情页资料包

如果某个产品的详情页很复杂，包含大量图片、CSS、HTML 或下载资料，可以把它作为独立资料包放到：

```text
public/product-pages/{product-slug}/
  index.html
  styles.css
  assets/
```

例如 DW69 当前放在：

```text
public/product-pages/dw69/
  index.html
  styles.css
  assets/
```

然后在 `src/data/products.ts` 中给产品增加：

```ts
image: "/product-pages/dw69/assets/hero-product.jpg",
detailPath: "/product-pages/dw69/index.html",
```

这样主站首页和模块页会展示该产品，并在点击产品卡片时直接打开这个独立 HTML 详情页。HTML 内部图片建议使用相对路径，例如 `assets/hero-product.jpg`，这样整个文件夹移动时不容易断链。

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
