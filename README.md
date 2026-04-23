# 个人主页（AcadHomepage 风格 · React）

基于 Vite、React、TypeScript、Tailwind CSS 的单页个人主页/简历站点（**保留 React 技术栈，整体布局与信息结构对齐 acad-homepage**）。

- 内容数据集中在 `src/content/resume.ts` 的 `resumes.zh` / `resumes.en`，分别维护中英文
- 顶栏支持 **日间/夜间** 主题与 **中/EN** 语言切换
- 页面结构采用 acad-homepage 风格的 **顶栏 + 左侧作者栏 + 右侧正文**，并使用锚点导航

## 页面栏目（锚点）

当前页面按学术主页风格重排为以下栏目（可在顶栏跳转）：About / News / Publications & Projects / Honors / Educations / Internships / Skills / Contact。

## 本地开发

需要安装 [Node.js](https://nodejs.org/) 18+（含 npm）。

```bash
npm install
npm run dev
```

浏览器打开终端中提示的本地地址（通常为 `http://localhost:5173`）。

## 构建与预览

```bash
npm run build
npm run preview
```

产物在 `dist/` 目录，可部署到任意静态托管。

## 部署

### Vercel

1. 将项目推送到 Git 仓库。
2. 在 [Vercel](https://vercel.com) 导入该仓库，框架选 Vite，构建命令 `npm run build`，输出目录 `dist`。
3. 部署完成后使用提供的 `*.vercel.app` 链接即可。

### Netlify

构建命令：`npm run build`，发布目录：`dist`。

### GitHub Pages（推荐：GitHub Actions）

1. 在 GitHub 新建仓库，将本项目推送上去（默认分支 `main` 或 `master`）。
2. 打开仓库 **Settings → Pages**，**Build and deployment** 里 **Source** 选 **GitHub Actions**。
3. 推送任意提交到 `main`/`master`，或手动运行 **Actions → Deploy to GitHub Pages → Run workflow**。工作流见 [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml)。
4. 部署完成后，站点地址一般为 **`https://<你的用户名>.github.io/<仓库名>/`**（用户名站 `username.github.io` 仓库则为根域名）。

`vite.config.ts` 中 `base` 为 `./`，资源使用相对路径，适合上述 Pages 子路径。

个人 GitHub 主页链接已写在 `resume.ts` 的联系区：**[https://github.com/lansijian](https://github.com/lansijian)**。

## 打印 / PDF

可在浏览器中使用打印（Ctrl+P）另存为 PDF。导航会在打印时通过 `no-print` 类隐藏，正文使用浅色打印样式（见 `src/index.css` 中 `@media print`）。

## 主题与语言

- 主题与语言偏好保存在浏览器 `localStorage`（`resume-theme`、`resume-locale`）。
- 首屏闪烁：见 `index.html` 内联脚本，在渲染前同步 `dark` class。
