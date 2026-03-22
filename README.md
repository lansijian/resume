#个人简历网页

基于 Vite、React、TypeScript、Tailwind CSS 的单页简历站点。文案集中在 `src/content/resume.ts` 的 `resumes.zh` / `resumes.en` 中，分别维护中英文；顶栏可切换 **日间/夜间** 主题与 **中/EN** 语言。

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

页面右上角 Hero 区域有「打印 / 存 PDF」按钮，或在浏览器中使用打印（Ctrl+P），选择「另存为 PDF」。导航与页脚在打印时通过 `no-print` 类隐藏，正文使用浅色打印样式（见 `src/index.css` 中 `@media print`）。

## 主题与语言

- 主题与语言偏好保存在浏览器 `localStorage`（`resume-theme`、`resume-locale`）。
- 首屏闪烁：见 `index.html` 内联脚本，在渲染前同步 `dark` class。
