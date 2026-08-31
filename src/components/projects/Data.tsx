import { Separator } from '@/components/ui/separator';
import { ChevronRight, Link } from 'lucide-react';
import Image from 'next/image';

interface ProjectLink {
  name: string;
  url: string;
}

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  shortTitle?: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  date: string;
  links: ProjectLink[];
  images: ProjectImage[];
  cover: string;
}

function createProjectCover(
  label: string,
  subtitle: string,
  startColor: string,
  endColor: string
) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${startColor}"/>
          <stop offset="1" stop-color="${endColor}"/>
        </linearGradient>
        <radialGradient id="glow" cx="75%" cy="18%" r="70%">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.28"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="900" height="1200" fill="url(#g)"/>
      <rect width="900" height="1200" fill="url(#glow)"/>
      <circle cx="740" cy="190" r="210" fill="none" stroke="#ffffff" stroke-opacity="0.16" stroke-width="2"/>
      <circle cx="740" cy="190" r="145" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>
      <path d="M-80 880 C180 690 320 1060 620 820 C760 710 850 750 980 620" fill="none" stroke="#ffffff" stroke-opacity="0.18" stroke-width="3"/>
      <text x="72" y="930" fill="#ffffff" font-family="ui-monospace, monospace" font-size="28" letter-spacing="5">${subtitle}</text>
      <text x="68" y="1010" fill="#ffffff" font-family="ui-sans-serif, sans-serif" font-size="68" font-weight="700">${label}</text>
    </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const PROJECT_CONTENT: Project[] = [
  {
    title: 'AI Native Portfolio',
    category: 'Shipped · AI Product',
    tagline:
      'A portfolio that can answer questions instead of only displaying pages.',
    description:
      'An interactive AI portfolio built with Next.js and DeepSeek. It combines streaming chat, structured tool calls, live GitHub profile data, project cards, resume download, and a personalized system prompt grounded in verified experience.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'DeepSeek API',
      'Vercel AI SDK',
      'Tool Calling',
      'Tailwind CSS',
      'Framer Motion',
      'GitHub API',
      'Vercel',
    ],
    date: '2026 · Active',
    links: [
      {
        name: 'GitHub Repository',
        url: 'https://github.com/butterflylittle/ai-native-portfolio',
      },
    ],
    images: [
      {
        src: '/projects/ai-portfolio-home.png',
        alt: 'AI Native Portfolio homepage',
      },
      {
        src: '/projects/ai-portfolio-chat.png',
        alt: 'AI Native Portfolio chat experience',
      },
    ],
    cover: createProjectCover(
      'AI Portfolio',
      'NEXT.JS · DEEPSEEK',
      '#0f172a',
      '#0f766e'
    ),
  },
  {
    title: 'AskBook RAG Knowledge Base',
    shortTitle: 'AskBook RAG',
    category: 'Built · Agentic RAG',
    tagline:
      'Upload documents, retrieve evidence, and answer with page-level citations.',
    description:
      'A modular document question-answering application. The ingestion pipeline parses PDFs, performs CJK-aware chunking, generates 1024-dimensional GLM embeddings, stores vectors in PostgreSQL/pgvector, and uses HNSW cosine retrieval to build grounded context for streaming answers with citations.',
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'Drizzle ORM',
      'GLM Embedding',
      'DeepSeek',
      'HNSW',
      'Vercel AI SDK',
      'RAG',
    ],
    date: '2026 · Prototype',
    links: [],
    images: [],
    cover: createProjectCover(
      'AskBook RAG',
      'PGVECTOR · HNSW',
      '#172554',
      '#4f46e5'
    ),
  },
  {
    title: 'Frontend Performance Investigator Agent',
    shortTitle: 'Performance Agent',
    category: 'Research · Agent Engineering',
    tagline:
      'Detect frontend regressions, collect evidence, and explain likely code causes.',
    description:
      'A planned observability Agent for scheduled frontend performance investigations. The design separates deterministic baseline detection from agentic diagnosis, then correlates RUM metrics, LCP breakdowns, resource timing, CDN cache data, deployments, Git changes, logs, and previous incidents into an auditable root-cause report.',
    techStack: [
      'Agent Runtime',
      'State Machine',
      'Cron',
      'RUM',
      'Core Web Vitals',
      'Git Tooling',
      'Structured Output',
      'Observability',
      'Human Approval',
    ],
    date: 'Research · In Progress',
    links: [],
    images: [],
    cover: createProjectCover(
      'Perf Agent',
      'OBSERVE · DIAGNOSE',
      '#3f0d12',
      '#a71d31'
    ),
  },
  {
    title: 'Flyme Cloud Platform',
    category: 'Professional · Enterprise PaaS',
    tagline:
      'Standardized cloud-resource management across multiple enterprise services.',
    description:
      'Participated in a large PaaS platform covering ECS, Redis, RocketMQ, containers, object storage, load balancing, monitoring, alarms, portal management, and multi-dimensional permissions. Built reusable tables, searches, dynamic forms, authentication, charting, SDKs, and shared interaction patterns.',
    techStack: [
      'Vue3',
      'TypeScript',
      'TSX',
      'Ant Design Vue',
      'Fetch',
      'pnpm',
      'ECharts',
      'RBAC',
      'SSO',
      'PaaS',
    ],
    date: '2022.04 - 2026.04',
    links: [],
    images: [],
    cover: createProjectCover(
      'Flyme Cloud',
      'PAAS · RBAC · SSO',
      '#082f49',
      '#0284c7'
    ),
  },
  {
    title: 'Flyme Auto Website',
    category: 'Professional · Product Website',
    tagline:
      'Responsive product storytelling with carefully controlled motion and loading.',
    description:
      'Delivered product, feature, and brand modules with unified desktop/mobile adaptation. Implemented GSAP scroll-triggered and page-transition motion, Blob-based image sequences, lazy loading, on-demand assets, and Vite build optimizations while reducing visual jitter and browser compatibility issues.',
    techStack: [
      'Vue3',
      'TypeScript',
      'Vite',
      'GSAP',
      'Responsive Design',
      'Lazy Loading',
      'Performance Optimization',
      'Safari Compatibility',
    ],
    date: 'Professional Project',
    links: [],
    images: [],
    cover: createProjectCover(
      'Flyme Auto',
      'VUE3 · GSAP',
      '#111827',
      '#7c3aed'
    ),
  },
  {
    title: 'Dify In-Car Voice Assistant',
    shortTitle: 'Dify AI Assistant',
    category: 'Professional · AI Application',
    tagline:
      'Private AI workflows for in-car voice interactions and tool execution.',
    description:
      'Built and integrated a privately deployed Dify platform for an in-car voice assistant. The work covered LLM API integration, Agent and workflow orchestration, prompt templates, standardized tool parameters, multi-turn dialogue, function execution, and failure fallbacks.',
    techStack: [
      'Docker',
      'Dify',
      'LLM API',
      'LangChain',
      'Next.js',
      'shadcn/ui',
      'Express',
      'AI Agent',
      'Workflow Orchestration',
    ],
    date: 'Professional Project',
    links: [],
    images: [],
    cover: createProjectCover(
      'Dify Agent',
      'VOICE · TOOLS · WORKFLOW',
      '#064e3b',
      '#059669'
    ),
  },
  {
    title: 'AI Customer Service & OTA Platforms',
    shortTitle: 'Operations Platforms',
    category: 'Professional · Enterprise Console',
    tagline:
      'Reusable operational workflows for support, OTA, and content teams.',
    description:
      'Refactored feedback, AI conversation, and report-handling workflows; built reusable CRUD tables, exports, batch operations, and state transitions; developed OTA device-management modules and content-operation capabilities for feeds, comments, AI wallpapers, prompts, night mode, typography, and image preview.',
    techStack: [
      'Vue3',
      'TypeScript',
      'Element Plus',
      'Ant Design Vue',
      'ECharts',
      'CRUD Architecture',
      'Mobile H5',
      'Data Export',
    ],
    date: 'Professional Projects',
    links: [],
    images: [],
    cover: createProjectCover(
      'Ops Platforms',
      'AI SERVICE · OTA · CMS',
      '#431407',
      '#ea580c'
    ),
  },
  {
    title: 'Remote Support & Developer Tooling',
    shortTitle: 'Remote Tooling',
    category: 'Professional · Realtime & DX',
    tagline: 'Realtime support, browser debugging, and productivity tooling.',
    description:
      'Designed WebRTC audio/video and remote-assistance capabilities for encrypted H5-to-App communication, screen sharing, recording, remote keys, and drawing annotations. Also developed Chrome debugging and automation utilities combining proxy inspection, API documentation, TypeScript declaration generation, and automated login.',
    techStack: [
      'Vue3',
      'TypeScript',
      'WebRTC',
      'WebSocket',
      'Canvas',
      'Chrome Extension',
      'whistle',
      'Swagger',
      'Postman',
    ],
    date: 'Professional Projects',
    links: [],
    images: [],
    cover: createProjectCover(
      'Remote Tooling',
      'WEBRTC · CHROME DX',
      '#312e81',
      '#9333ea'
    ),
  },
];

const ProjectContent = ({ project }: { project: Project }) => (
  <div className="space-y-10">
    <p className="font-sans text-base font-medium tracking-wide text-neutral-500 italic dark:text-neutral-400">
      {project.tagline}
    </p>

    <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
      <div className="space-y-6">
        <span className="text-sm text-neutral-500 dark:text-neutral-400">
          {project.date}
        </span>
        <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
          {project.description}
        </p>
        <div className="pt-4">
          <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {project.links.length > 0 && (
      <div className="mb-24">
        <div className="mb-4 flex items-center gap-2 px-6">
          <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
            Links
          </h3>
          <Link className="text-muted-foreground w-4" />
        </div>
        <Separator className="my-4" />
        <div className="space-y-3">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <span className="font-light capitalize">{link.name}</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    )}

    {project.images.length > 0 && (
      <div className="grid grid-cols-1 gap-4">
        {project.images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-video overflow-hidden rounded-2xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    )}
  </div>
);

export const data = PROJECT_CONTENT.map((project) => ({
  category: project.category,
  title: project.title,
  shortTitle: project.shortTitle,
  src: project.cover,
  coverSrc: project.cover,
  content: <ProjectContent project={project} />,
}));
