# web Frontend

一个基于 React 19、TypeScript 和 Vite 构建的现代化前端应用，集成了 Ant Design 组件库和 TailwindCSS 样式框架，支持基于后端权限的动态路由和菜单生成。

## 🚀 技术栈

- **框架**: React 19.1.0
- **语言**: TypeScript 5.8.3
- **构建工具**: Vite 7.0.0
- **UI 组件库**: Ant Design 5.26.2
- **样式框架**: TailwindCSS 4.1.11
- **路由**: React Router 7.6.3
- **包管理器**: pnpm
- **代码规范**: ESLint 9.29.0

## 📋 系统要求

- **Node.js**: 建议使用 22.x 版本
- **pnpm**: 推荐使用最新版本

## 🛠️ 安装和运行

### 1. 克隆项目

```bash
git clone <repository-url>
cd web-frontend
```

### 2. 安装依赖

```bash
# 使用 pnpm 安装依赖
pnpm install
```

### 3. 环境配置

复制环境配置文件：

```bash
cp env.development .env.local
```

根据需要修改 `.env.local` 中的配置：

```env
# 开发环境配置
VITE_API_BASE_URL=http://localhost:3000/api
VITE_USE_MOCK=true
```

### 4. 启动开发服务器

```bash
# 启动开发服务器
pnpm dev
```

应用将在 `http://localhost:5173` 启动

## 📁 项目结构

```
src/
├── assets/          # 静态资源文件
├── components/      # 可复用组件
├── contexts/        # React Context 上下文
├── hooks/           # 自定义 Hooks
├── layouts/         # 布局组件
├── pages/           # 页面组件
├── routers/         # 路由配置
├── services/        # API 服务
├── types/           # TypeScript 类型定义
├── common/           # 工具函数
├── App.tsx          # 应用根组件
├── main.tsx         # 应用入口
└── index.css        # 全局样式
```

## 🎯 核心功能

### 权限管理系统
- 基于后端权限菜单动态生成路由
- 支持多级菜单递归渲染
- 路由守卫和权限控制
- 用户权限状态管理

### 动态路由
- 根据后端菜单数据动态生成路由配置
- 支持懒加载和代码分割
- 权限过滤和路由守卫

### 布局系统
- 响应式侧边栏布局
- 支持菜单折叠/展开
- 多级菜单递归渲染

## 🚀 可用脚本

```bash
# 开发模式
pnpm dev

# 构建生产版本
pnpm build

# 代码检查
pnpm lint

# 预览构建结果
pnpm preview
```

## 🔧 开发指南

### 添加新页面

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/routers/` 中配置路由
3. 确保页面组件支持懒加载

### 添加新组件

1. 在 `src/components/` 目录下创建组件
2. 使用 TypeScript 定义组件类型
3. 遵循项目的代码规范

### 权限配置

1. 在 `src/contexts/` 中管理权限状态
2. 使用 `useAuth` Hook 获取用户权限
3. 在路由配置中添加权限检查

## 🎨 样式指南

项目使用 TailwindCSS 作为主要样式框架，同时集成 Ant Design 组件库：

- 使用 TailwindCSS 类名进行样式定制
- 组件样式优先使用 Ant Design 主题
- 自定义样式通过 CSS 模块或 TailwindCSS 实现

## 📦 构建和部署

### 构建生产版本

```bash
pnpm build
```

构建产物将生成在 `dist/` 目录下。

### 部署

将 `dist/` 目录下的文件部署到 Web 服务器即可。

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 常见问题

### Q: 为什么推荐使用 Node.js 22.x？
A: 项目使用了最新的 React 19 和 Vite 7，这些版本对 Node.js 版本有一定要求，22.x 版本提供了更好的性能和兼容性。

### Q: 如何配置开发环境代理？
A: 在 `vite.config.ts` 中添加 `server.proxy` 配置，或在环境变量中设置 API 地址。

### Q: 如何处理权限路由？
A: 项目已集成权限管理系统，通过 `useAuth` Hook 和路由守卫组件自动处理权限控制。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue
- 发送邮件至项目维护者

---

**注意**: 这是一个私有项目，请确保遵循相关的安全和使用规范。
