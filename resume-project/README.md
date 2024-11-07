# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

.
├── public/                 # 静态资源目录
│   ├── favicon.ico        # 网站图标
│   └── index.html         # 主 HTML 文件
│
├── src/                   # 源代码目录
│   ├── api/              # API 接口管理
│   │   ├── modules/      # 按模块划分的接口文件
│   │   │   ├── user.ts   # 用户相关接口
│   │   │   └── product.ts # 产品相关接口
│   │   └── request.ts    # axios 请求封装
│   │
│   ├── assets/           # 静态资源
│   │   ├── images/       # 图片资源
│   │   ├── styles/       # 样式文件
│   │   │   ├── variables.scss  # 全局变量
│   │   │   └── global.scss     # 全局样式
│   │   └── fonts/        # 字体文件
│   │
│   ├── components/       # 全局公共组件
│   │   ├── common/       # 基础公共组件
│   │   │   ├── Button/
│   │   │   └── Input/
│   │   └── business/     # 业务公共组件
│   │       ├── Header/
│   │       └── Footer/
│   │
│   ├── composables/      # 组合式函数
│   │   ├── useUser.ts
│   │   └── useTheme.ts
│   │
│   ├── constants/        # 常量定义
│   │   ├── api.ts       # API 相关常量
│   │   └── enum.ts      # 枚举值
│   │
│   ├── directives/       # 全局指令
│   │   ├── permission.ts
│   │   └── index.ts
│   │
│   ├── hooks/           # 钩子函数
│   │   ├── usePermission.ts
│   │   └── useCache.ts
│   │
│   ├── layouts/         # 布局组件
│   │   ├── DefaultLayout.vue
│   │   └── UserLayout.vue
│   │
│   ├── router/          # 路由配置
│   │   ├── modules/     # 路由模块
│   │   ├── guards.ts    # 路由守卫
│   │   └── index.ts     # 路由主文件
│   │
│   ├── stores/          # Pinia 状态管理
│   │   ├── modules/     # 状态模块
│   │   │   ├── user.ts
│   │   │   └── app.ts
│   │   └── index.ts
│   │
│   ├── types/           # TypeScript 类型定义
│   │   ├── api.ts       # API 相关类型
│   │   └── global.d.ts  # 全局类型声明
│   │
│   ├── utils/           # 工具函数
│   │   ├── auth.ts      # 认证相关
│   │   ├── request.ts   # 请求相关
│   │   └── storage.ts   # 存储相关
│   │
│   ├── views/           # 页面组件
│   │   ├── home/        # 按模块划分页面
│   │   ├── user/
│   │   └── error/
│   │
│   ├── App.vue          # 根组件
│   ├── main.ts          # 入口文件
│   └── env.d.ts         # 环境变量类型声明
│
├── .env                  # 环境变量
├── .env.development      # 开发环境变量
├── .env.production       # 生产环境变量
├── .eslintrc.js         # ESLint 配置
├── .prettierrc          # Prettier 配置
├── tsconfig.json        # TypeScript 配置
├── vite.config.ts       # Vite 配置
└── package.json         # 项目配置文件
