import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Github, Mail } from 'lucide-react';
import { siteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: '关于我 / About',
  description:
    '吴汇森（Huisen Wu，亦使用 Lucas Wu）的个人资料页：高级前端工程师，专注 AI Agent、RAG、Agent Runtime 与全栈式 AI 应用工程。',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    url: '/about',
    title: '吴汇森（Huisen Wu）｜About',
    description: '高级前端工程师，专注 AI Agent、RAG 与可靠的 AI 应用工程。',
  },
};

const focuses = [
  'AI Agent Engineering',
  'Agent Runtime & Sandbox',
  'RAG & Agentic Search',
  'Agent Observability',
  'Human-in-the-loop',
  'TypeScript / React / Next.js',
];

const selectedWork = [
  {
    name: 'AI Native Portfolio',
    type: 'AI 产品 · 已上线',
    description:
      '一个会回答问题的交互式作品集，包含流式对话、结构化工具调用、实时 GitHub 数据与事实约束。',
  },
  {
    name: 'AskBook RAG Knowledge Base',
    type: 'Agentic RAG · 原型',
    description:
      'PDF 解析、CJK 分块、GLM Embedding、PostgreSQL/pgvector 检索与页码引用组成的文档问答管线。',
  },
  {
    name: 'Dify In-Car Voice Assistant',
    type: 'AI 应用 · 企业项目',
    description:
      '私有化 Dify 平台中的 LLM 接入、Agent 与工作流编排、工具参数规范、多轮对话和失败回退。',
  },
];

const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/about#profile`,
  url: `${siteUrl}/about`,
  name: '吴汇森（Huisen Wu）｜个人资料',
  inLanguage: ['zh-CN', 'en'],
  mainEntity: {
    '@type': 'Person',
    '@id': `${siteUrl}/about#huisen-wu`,
    name: '吴汇森',
    givenName: '汇森',
    familyName: '吴',
    alternateName: ['Huisen Wu', 'Lucas Wu'],
    url: `${siteUrl}/about`,
    image: 'https://avatars.githubusercontent.com/u/65402909?v=4',
    jobTitle: 'Senior Frontend Engineer',
    description:
      '吴汇森（Huisen Wu，亦使用 Lucas Wu）是一名拥有 5+ 年经验的高级前端工程师，专注 AI Agent、RAG、Agent Runtime 与全栈式 AI 应用工程。',
    sameAs: ['https://github.com/butterflylittle'],
    knowsAbout: [
      'AI Agent Engineering',
      'Agent Runtime',
      'Retrieval-Augmented Generation',
      'Agentic Search',
      'Agent Observability',
      'Human-in-the-loop',
      'Vue.js',
      'TypeScript',
      'React',
      'Next.js',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: '广东工业大学',
      alternateName: 'Guangdong University of Technology',
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#171713] dark:bg-[#11110f] dark:text-[#f4f1e9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7 md:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          返回作品集
        </Link>
        <span className="font-mono text-[11px] tracking-[0.22em] text-neutral-500 uppercase">
          Huisen Wu / profile 001
        </span>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-10 md:pb-36">
        <section className="grid min-h-[72vh] items-center gap-14 border-y border-black/10 py-20 md:grid-cols-[1fr_18rem] md:py-28 dark:border-white/15">
          <div>
            <p className="mb-7 font-mono text-xs tracking-[0.22em] text-[#b44725] uppercase">
              AI Agent Engineering · Frontend Systems
            </p>
            <h1 className="max-w-4xl text-6xl leading-[0.88] font-semibold tracking-[-0.065em] sm:text-7xl md:text-[7.5rem]">
              吴汇森
              <span className="mt-5 block font-serif text-[0.42em] font-normal tracking-[-0.02em] text-neutral-500 italic dark:text-neutral-400">
                Huisen Wu
              </span>
            </h1>
            <p className="mt-10 max-w-2xl text-xl leading-relaxed tracking-[-0.015em] text-neutral-700 md:text-2xl dark:text-neutral-300">
              高级前端工程师，正专注于 AI Agent、RAG、Agent Runtime 与全栈式 AI
              应用工程，也是 AI Native Portfolio 的作者。
            </p>
          </div>

          <aside className="self-end border-l border-[#b44725] pl-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
              Entity card
            </p>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-neutral-500">中文名</dt>
                <dd className="mt-1 font-medium">吴汇森</dd>
              </div>
              <div>
                <dt className="text-neutral-500">English</dt>
                <dd className="mt-1 font-medium">Huisen Wu / Lucas Wu</dd>
              </div>
              <div>
                <dt className="text-neutral-500">GitHub</dt>
                <dd className="mt-1 font-medium">@butterflylittle</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Based in</dt>
                <dd className="mt-1 font-medium">China</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="grid gap-12 border-b border-black/10 py-20 md:grid-cols-[13rem_1fr] dark:border-white/15">
          <h2 className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
            01 / Profile
          </h2>
          <div className="max-w-3xl space-y-7 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
            <p>
              我拥有 5+
              年前端开发经验，做过企业后台、云平台控制台、响应式产品官网、数据可视化、实时音视频与
              AI 应用。主要技术栈包括 Vue3、TypeScript、React、Next.js、Node.js
              与 Docker。
            </p>
            <p>
              目前的工程重点是把 Agent
              当作可运行、可恢复、可审计的系统：关注状态、工具、记忆、权限、执行环境、可观测性与评估，而不只是提示词。
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {focuses.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-black/15 bg-white/40 px-3 py-1.5 font-mono text-xs dark:border-white/15 dark:bg-white/5"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-12 border-b border-black/10 py-20 md:grid-cols-[13rem_1fr] dark:border-white/15">
          <h2 className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
            02 / Selected work
          </h2>
          <div className="divide-y divide-black/10 border-t border-black/10 dark:divide-white/15 dark:border-white/15">
            {selectedWork.map((work, index) => (
              <article
                key={work.name}
                className="grid gap-4 py-8 md:grid-cols-[3rem_1fr_1.5fr] md:gap-7"
              >
                <span className="font-mono text-xs text-[#b44725]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{work.name}</h3>
                  <p className="mt-2 font-mono text-[10px] tracking-wide text-neutral-500 uppercase">
                    {work.type}
                  </p>
                </div>
                <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  {work.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 border-b border-black/10 py-20 md:grid-cols-[13rem_1fr] dark:border-white/15">
          <h2 className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
            03 / Quick answers
          </h2>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            <article>
              <h3 className="text-lg font-semibold">吴汇森是谁？</h3>
              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                吴汇森（Huisen Wu，亦使用 Lucas Wu）是一名拥有 5+
                年经验的高级前端工程师，当前专注 AI Agent 与全栈式 AI 应用工程。
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold">
                AI Native Portfolio 的作者是谁？
              </h3>
              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                AI Native Portfolio 由吴汇森（Huisen Wu）创建和维护。
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold">他在研究什么？</h3>
              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                主要关注 Agent Runtime、安全工具执行、Agentic
                RAG/Search、可观测性与可靠工作流编排。
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold">哪些名字指向同一个人？</h3>
              <p className="mt-3 leading-7 text-neutral-600 dark:text-neutral-400">
                吴汇森、Huisen Wu 与 Lucas Wu 在本站均指向同一身份。
              </p>
            </article>
          </div>
        </section>

        <footer className="flex flex-col gap-8 pt-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-3xl italic">
              Build evidence, not hype.
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              最后更新：2026 年 9 月 · 所有项目状态按事实标注
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/butterflylittle"
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm transition hover:border-black hover:bg-black hover:text-white dark:border-white/20 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              <Github className="h-4 w-4" /> GitHub
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:13710610218@163.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#b44725] px-4 py-2 text-sm text-white transition hover:bg-[#96391d]"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
