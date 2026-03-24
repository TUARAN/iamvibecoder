# iamvibecoder-web

`iamvibecoder-web` 是一个基于 Next.js 15 构建的中文品牌站点，用来展示「人人都是程序员」这套叙事和内容结构。网站核心表达是：从“下载软件”转向“生成软件”，让用户围绕真实需求直接生成页面、工具和工作流。

线上站点地址：[`https://iamvibecoder.cn`](https://iamvibecoder.cn)

## 技术栈

- Next.js 15（App Router）
- React 19
- TypeScript
- Tailwind CSS
- lucide-react

## 页面结构

- `/`：首页，包含 Hero、趋势内容、案例、模板、场景入口、创作者与新手引导等模块
- `/scenes`：场景造物页，按办公提效、内容创作、数据处理等方向展示可生成的应用类型
- `/columns`：核心栏目体系页，整理站点内容栏目与信息架构
- `/community`：社区与成长机制页，说明需求广场、作品晒台、挑战和榜单等机制
- `/about`：项目主张页，解释「人人都是程序员」的核心理念

## 本地开发

安装依赖：

```bash
npm install
```

启动开发环境：

```bash
npm run dev
```

默认会运行在 `http://localhost:3000`。

如果本机端口已被占用，可以指定其他端口：

```bash
npm run dev -- --port 3002
```

当前仓库已验证可在 `http://localhost:3002` 启动。

## Cloudflare 构建与部署

当前项目已切换为 Cloudflare Workers 构建方式，使用 `@opennextjs/cloudflare` 和 `wrangler`。

Cloudflare 本地预览：

```bash
npm run preview
```

这条命令会先执行 OpenNext 构建，再通过 Wrangler 启动 Cloudflare Worker 预览。

部署到 Cloudflare：

```bash
npm run deploy
```

如果只想先上传 Worker 而不走完整部署流程，可以使用：

```bash
npm run upload
```

生成 Cloudflare 类型定义：

```bash
npm run cf-typegen
```

## 标准构建

如果只是做常规 Next.js 构建，也仍然可以使用：

```bash
npm run build
```

启动标准 Node 生产服务：

```bash
npm run start
```

## Cloudflare 相关文件

- `wrangler.jsonc`：Cloudflare Worker 配置
- `open-next.config.ts`：OpenNext Cloudflare 适配配置
- `.dev.vars`：Wrangler 本地开发环境变量
- `public/_headers`：静态资源缓存头配置

## 目录说明

```text
app/
  layout.tsx          全站布局、SEO metadata、导航与页脚挂载
  page.tsx            首页
  about/page.tsx      关于页
  columns/page.tsx    栏目体系页
  community/page.tsx  社区机制页
  scenes/page.tsx     场景页
components/
  site-header.tsx     顶部导航
  site-footer.tsx     页脚
  section-heading.tsx 通用分区标题
  external-site-link.tsx 外链图标与链接组件
lib/
  content.ts          站点文案、导航、模块数据源
```

## 内容维护

大部分页面内容来自 [`lib/content.ts`](/Users/tuaran/Documents/GitHub/iamvibecoder-web/lib/content.ts)。如果需要调整导航、首页模块文案、栏目配置、社区机制或 manifesto，优先修改这个文件；页面组件本身主要负责结构和展示。

## 已知情况

本地启动时可能会看到 `@next/swc-darwin-arm64` 的加载警告，但在当前环境下开发服务仍可正常进入 `Ready` 状态并提供页面访问。如果后续出现编译异常，建议先重新安装依赖或清理损坏的原生包。
