import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import SpotifyWidget from '@/components/SpotifyWidget';
import { siteUrl } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '吴汇森（Huisen Wu）｜AI Agent 与高级前端工程师',
    template: '%s｜吴汇森（Huisen Wu）',
  },
  description:
    '吴汇森（Huisen Wu，亦使用 Lucas Wu），高级前端工程师，专注 AI Agent、RAG、Agent Runtime 与全栈式 AI 应用工程。',
  keywords: [
    '吴汇森',
    'Huisen Wu',
    'Lucas Wu',
    'AI Agent Engineer',
    'AI Agent',
    'RAG',
    'Agent Runtime',
    '高级前端开发工程师',
    'Frontend Developer',
    'Vue3',
    'TypeScript',
    'Next.js',
    'React',
    'AI Portfolio',
  ],
  authors: [
    {
      name: 'Huisen Wu（吴汇森）',
      url: '/about',
    },
  ],
  creator: 'Huisen Wu（吴汇森）',
  publisher: 'Huisen Wu',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: 'en_US',
    url: siteUrl,
    title: '吴汇森（Huisen Wu）｜AI Agent 与高级前端工程师',
    description:
      '5+ 年前端经验，专注 AI Agent、RAG、Agent Runtime、Vue3、TypeScript、React 与 Next.js。',
    siteName: 'Huisen Wu AI Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: '吴汇森（Huisen Wu）｜AI Agent 与高级前端工程师',
    description:
      '吴汇森的 AI 原生作品集：AI Agent、RAG、Agent Runtime 与高级前端工程。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-black antialiased transition-colors duration-500 ease-in-out dark:bg-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <main className="flex min-h-screen flex-col">{children}</main>
          <SpotifyWidget />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
