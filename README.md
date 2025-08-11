# Vue 3 作品集展示项目

基于 Vue 3 和 TypeScript 构建的现代化个人作品集网站，集成社交媒体卡片、3D 图形、数据可视化等多种交互式展示组件。

## ✨ 项目特点

- 🎨 **个人档案模块** - 带动画效果的技能展示和个人介绍
- 📱 **社交媒体卡片** - 精美的多平台卡片样式 (GitHub、Instagram、Twitter 等)
- 🖼️ **图片展示** - 响应式图片卡片，支持描述和链接跳转
- 🎭 **互动演示** - 3D 图形、图表、地图、设计模式等丰富示例
- 🌗 **响应式设计** - 移动端优先，完美适配各种设备
- ⚡ **现代化架构** - Vue 3 Composition API + TypeScript
- 🎪 **流畅动画** - Lottie 动画和丝滑过渡效果

## 🚀 技术栈

### 核心框架

- [Vue 3](https://vuejs.org/) - 渐进式前端框架
- [Vite](https://vitejs.dev/) - 新一代前端构建工具
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript

### UI 与样式

- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [clsx](https://github.com/lukeed/clsx) - 动态 class 名组合工具
- 自定义字体：DMSerifText、Nabla、NotoColorEmoji

### 动画与图形

- [Lottie](https://airbnb.design/lottie/) - 高质量动画渲染 (v5.12.2)
- [Three.js](https://threejs.org/) - 3D 图形和可视化
- 交互式图表和数据可视化

### 工具库

- [Day.js](https://day.js.org/) - 快速日期处理
- [@pureadmin/utils](https://github.com/pure-admin/utils) - 管理员工具集

## 📁 项目结构

```
my-vue-app/
├── base/                          # 基础组件和样式
│   ├── components/                # 可复用 UI 组件
│   │   ├── base-card/            # 基础卡片组件 (tsx)
│   │   ├── Icon.vue              # Lottie 图标包装器
│   │   └── LottieIcon.vue        # Lottie 动画组件
│   └── styles/                   # 全局样式和字体
│       ├── fonts/                # 自定义字体文件
│       └── *.css                 # 全局样式表
├── build/                        # 构建配置
├── doc/                          # 文档和示例
│   ├── Charts/                   # 数据可视化示例
│   ├── Three/                    # 3D 图形演示
│   ├── designPatterns/           # 设计模式实现
│   ├── map/                      # 交互式地图组件
│   ├── topo/                     # 拓扑可视化
│   ├── command/                  # 命令模式示例
│   ├── flyweight/                # 享元模式演示
│   ├── inkscreen/                # 墨水屏效果
│   └── utils/                    # 文档工具函数
├── domain/                       # 业务组件
│   ├── card/                     # 社交媒体卡片
│   │   ├── cards/               # 各个平台的卡片实现
│   │   └── image-card/          # 图片卡片组件
│   └── profile/                  # 个人档案模块
├── src/                          # 主应用源码
│   ├── assets/                   # 静态资源
│   │   ├── icons/               # Lottie JSON 动画
│   │   ├── images/              # 图片资源
│   │   └── svg/                 # SVG 图标
│   ├── components/              # Vue 组件
│   ├── composables/             # Vue 3 组合式函数
│   ├── constants/               # 应用常量
│   ├── directives/              # 自定义 Vue 指令
│   ├── router/                  # Vue Router 配置
│   ├── stores/                  # Pinia 状态管理
│   ├── types/                   # TypeScript 类型定义
│   ├── utils/                   # 工具函数
│   └── views/                   # 页面组件
├── public/                      # 公共静态资源
└── 配置文件                     # Vite、TypeScript、Tailwind 等配置
```

## 🎯 核心组件

### 社交媒体卡片
- **GithubCard.vue** - GitHub 仓库和个人资料卡片
- **InstagramCard.vue** - Instagram 帖子和个人资料卡片
- **TwitterCard.vue** - Twitter 推文和个人资料卡片
- **WeChatCard.vue** - 微信朋友圈和个人资料卡片
- **XhsCard.vue** - 小红书卡片

### 交互功能
- **个人档案** - 带动画效果的技能展示
- **图片卡片** - 响应式图片画廊，支持描述文字
- **3D 图形** - Three.js 驱动的可视化效果
- **数据图表** - 交互式图表和图形
- **设计模式** - 软件设计模式的实时示例

## 🛠️ 开发环境

### 环境要求
- Node.js (^18.18.0 || ^20.9.0 || >=21.1.0)
- pnpm (>=9)

### 快速开始
```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

### 可用脚本
- `pnpm dev` - 启动带热重载的开发服务器
- `pnpm build` - 构建生产版本并执行 TypeScript 检查
- `pnpm preview` - 本地预览生产版本

## 🎨 设计系统

### 字体系统
- **DMSerifText** - 优雅的衬线字体，用于标题
- **Nabla** - 装饰性字体，用于特殊元素
- **NotoColorEmoji** - 全彩 emoji 支持

### 色彩体系
- 使用 Tailwind CSS 默认色彩系统
- 支持响应式深色/浅色模式
- 自定义 CSS 变量保持一致的主题

### 布局系统
- 移动端优先的响应式设计
- 灵活的 Tailwind CSS 网格系统
- 基于组件的可复用架构

## 🔗 实用资源

### 图标和 Logo 来源
- [SVGLogo](https://svglogo.top/) - SVG 图标和 Logo
- [SimpleIcons](https://simpleicons.org/) - 流行品牌图标
- [Radix Icons](https://www.radix-ui.com/icons) - 简洁 UI 图标

### 开发工具
- [Vue DevTools](https://devtools.vuejs.org/) - Vue 调试浏览器扩展
- [Vite Plugin Vue](https://github.com/vitejs/vite-plugin-vue) - Vite 官方 Vue 插件
- [TypeScript Vue Plugin](https://github.com/vuejs/language-tools) - Vue 的 TypeScript 支持

## 🤝 参与贡献

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/新功能`)
3. 提交更改 (`git commit -m '添加新功能'`)
4. 推送到分支 (`git push origin feature/新功能`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 详情请查看 [LICENSE](LICENSE) 文件。
