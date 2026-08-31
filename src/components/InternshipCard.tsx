'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code2, GraduationCap } from 'lucide-react';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:13710610218@163.com', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="https://avatars.githubusercontent.com/u/65402909?v=4"
              alt="Lucas Wu's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              吴汇森（Lucas Wu）
            </h2>
            <p className="text-muted-foreground text-sm">
              Senior Frontend Engineer
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Open to Connect
          </span>
        </div>
      </div>

      {/* Role Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <Briefcase className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Role</p>
            <p className="text-muted-foreground text-sm">
              高级前端开发工程师 · 5+ 年前端经验
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <GraduationCap className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Education</p>
            <p className="text-muted-foreground text-sm">
              广东工业大学 · 控制工程
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech Stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                <li>Vue3, Vue2, React, Next.js</li>
                <li>TypeScript, Vite, Webpack, pnpm</li>
                <li>Element Plus, Ant Design Vue</li>
                <li>ECharts, Canvas, WebRTC</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Git, ESLint, Prettier</li>
                <li>Docker, Jenkins, Nginx, Linux</li>
                <li>Dify, LangChain, LLM API</li>
                <li>
                  <a
                    href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer items-center text-blue-500 underline"
                  >
                    See full stack →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>
        <p className="text-foreground text-sm">
          5+ 年企业级前端开发经验，覆盖云平台、AI 应用、数据可视化、移动端 H5
          与官网。
          <br />
          擅长复杂模块开发、组件抽象、响应式适配、性能优化与工程化交付。
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Goal</p>
        <p className="text-foreground text-sm">
          持续探索 Next.js、Dify、LangChain、Codex 与 Claude Code，推动 AI
          与前端工程实践结合。
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Get in Touch
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
