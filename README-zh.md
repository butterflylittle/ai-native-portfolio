<div align="center">

  <br />
  <p>
    <a href="https://github.com/butterflylittle"><img src="./public/banner.png" alt="千树同学 banner" width="120"/></a>
  </p>
  <br />

  <h1>🌐 全球首个 AI 原生作品集 🤖✨</h1>

  <p>
    <a href="./README.md">English</a> · <a href="./README-zh.md">中文</a>
  </p>
</div>

---

### **徽章**

<p align="center">
  <img src="https://img.shields.io/github/repo-size/butterflylittle/ai-native-portfolio?style=for-the-badge" alt="Repo Size">
  <img src="https://img.shields.io/github/license/butterflylittle/ai-native-portfolio?style=for-the-badge" alt="License">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deployment"></a>
  <a href="https://openai.com/"><img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI API"></a>
  <a href="https://www.deepseek.com/"><img src="https://img.shields.io/badge/DeepSeek-4D6BFE?style=for-the-badge" alt="DeepSeek API"></a>
  <a href="https://github.com/butterflylittle/ai-native-portfolio/stargazers"><img src="https://img.shields.io/github/stars/butterflylittle/ai-native-portfolio?style=for-the-badge&color=ffd700" alt="Repo Stars"></a>
  <a href="https://github.com/butterflylittle/ai-native-portfolio/graphs/contributors"><img src="https://img.shields.io/github/contributors/butterflylittle/ai-native-portfolio?style=for-the-badge&color=ff69b4" alt="Contributors"></a>
</p>

---

### **关于本项目** 💡

静态作品集已经过时了。它们只呈现开发者经历中单薄、死板的一面。本项目探索了一种更具对话感的方式：一个访客可以直接与之互动的 AI 原生作品集。

这是一个 **由 AI 驱动的交互式作品集**，把「关于我」页面变成了动态、有吸引力的对话。它不再让招聘者、开发者、朋友无休止地滚动信息，而是邀请他们直接提问，并获得专门为他们量身定制的回答。

这是一个不止于「展示」，更能「交流」的作品集。

---

### **特性** ✨

- **🗣️ 交互式 AI 形象：** 实时对话。从技术栈到兴趣爱好，尽管提问，都能得到即时的、结合上下文的回答。
- **🧠 上下文感知引擎：** AI 的性格与回复会根据对话对象而变化——无论你是招聘者、同行开发者还是朋友。
- **🎨 动态响应式 UI：** 用 TailwindCSS 打造、由 Framer Motion 动画赋能的流畅现代界面。
- **🚀 为所有人而生：** 精心设计，为技术招聘者、潜在合作者以及好奇的朋友们带来独特体验。
- **💬 告别无聊的自我介绍：** 这个作品集会「回应」你。

---

### **技术栈** 🛠️

| **分类**         | **技术**                                                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **前端**         | [Next.js](https://nextjs.org/)、[React](https://reactjs.org/)、[Tailwind CSS](https://tailwindcss.com/)、[Framer Motion](https://www.framer.com/motion/) |
| **后端**         | [Node.js](https://nodejs.org/)、Next.js API Routes                                                                                                      |
| **AI 与 API**    | [OpenAI API](https://openai.com/)、[DeepSeek API](https://api-docs.deepseek.com/)、[GitHub API](https://docs.github.com/en/rest)                        |
| **部署**         | [Vercel](https://vercel.com/)                                                                                                                           |
| **包管理器**     | [pnpm](https://pnpm.io/)                                                                                                                                |

---

### **安装与使用** 🚀

想把本项目跑在本地？跟着下面的简单步骤来。

#### **前置条件**

- Node.js（v18 或更高版本）
- pnpm 包管理器
- DeepSeek API Token
- GitHub API Token

#### **本地搭建**

1.  **克隆仓库：**

    ```sh
    git clone https://github.com/butterflylittle/ai-native-portfolio.git
    cd ai-native-portfolio
    ```

2.  **安装依赖：**

    ```sh
    pnpm install
    ```

3.  **配置环境变量：**
    在项目根目录创建 `.env.local` 文件，并添加以下键：

    ```env
    DEEPSEEK_API_KEY="your_deepseek_api_key_here"
    GITHUB_TOKEN="your_github_token_here"
    GITHUB_USERNAME="butterflylittle"
    ```

    - 从 [platform.deepseek.com](https://platform.deepseek.com/api_keys) 获取你的 DeepSeek API Key。
    - 在 [github.com/settings/tokens](https://github.com/settings/personal-access-tokens) 生成你的 GitHub Token。

4.  **启动开发服务器：**

    ```sh
    pnpm dev
    ```

5.  **打开浏览器**，访问 `http://localhost:3000`。

---

### **参与贡献** 🤝

开源社区之所以是学习、激发灵感与创造的绝佳场所，正是因为有大家的贡献。你的任何贡献都将 **备受感激**。

1.  **Fork** 本项目。
2.  创建你的功能分支（`git checkout -b feature/AmazingFeature`）。
3.  提交你的改动（`git commit -m 'Add some AmazingFeature'`）。
4.  推送到分支（`git push origin feature/AmazingFeature`）。
5.  发起一个 **Pull Request**。

如果你发现了 bug 或有功能建议，欢迎随时提 issue。  
关于安全问题，请参见 [SECURITY.md](.github/SECURITY.md)。

---

### **路线图** 🗺️

- [ ] 增加更多 AI 人格「模式」
- [ ] 集成带有在线演示的项目展示
- [ ] 实现浅色 / 深色主题切换
- [ ] 为 AI 对话增加多语言支持

---

### **许可证** 📄

本项目基于 **MIT License** 开源。更多信息请参见 [LICENSE](LICENSE) 文件。

---

### **联系与链接** 🔗

**千树同学 (@butterflylittle)** — 来交个朋友吧！

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-butterflylittle-181717?style=for-the-badge&logo=github)](https://github.com/butterflylittle)

</div>

---

### **标签**

`#AIPortfolio` `#NextJS` `#React` `#Portfolio` `#Vercel` `#OpenAI` `#DeepSeek` `#DeveloperPortfolio` `#WebDevelopment` `#InteractiveUI`
