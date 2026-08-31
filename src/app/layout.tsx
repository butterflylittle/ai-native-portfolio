import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import SpotifyWidget from '@/components/SpotifyWidget';
import './globals.css';

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (productionHost ? `https://${productionHost}` : 'http://localhost:3000');

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '吴汇森（Lucas Wu）｜高级前端开发工程师',
  description:
    '吴汇森的 AI 交互式作品集，展示 5+ 年前端开发经验、技术能力与项目经历。',
  keywords: [
    '吴汇森',
    'Lucas Wu',
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
      name: 'Lucas Wu',
      url: siteUrl,
    },
  ],
  creator: 'Lucas Wu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: '吴汇森（Lucas Wu）｜高级前端开发工程师',
    description:
      '5+ 年前端开发经验，专注 Vue3、TypeScript、React、Next.js 与前端工程化。',
    siteName: 'Lucas Wu AI Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={cn(
          // "min-h-screen bg-background font-sans antialiased",
          'min-h-screen bg-white font-sans text-black antialiased transition-colors duration-500 ease-in-out dark:bg-black dark:text-white',
          inter.variable
        )}
      >
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
