'use client';

import { motion } from 'framer-motion';
import React from 'react';

export function Presentation() {
  // Personal information
  const profile = {
    name: '吴汇森（Lucas Wu）',
    role: '高级前端开发工程师 · 5+ 年经验',
    description:
      '专注 Vue3、TypeScript、React、Next.js 与前端工程化，具备企业级后台、云平台、数据可视化、响应式官网和 AI 应用交付经验。',
    src: 'https://avatars.githubusercontent.com/u/65402909?v=4',
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation for the entire paragraph rather than word-by-word
  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Image section */}
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
            >
              <img
                src={profile.src}
                alt={profile.name}
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
        </div>

        {/* Text content section */}
        <div className="space-y flex flex-col">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground">{profile.role}</p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {profile.description}
          </motion.p>

          {/* Tags/Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {[
              'Vue3',
              'TypeScript',
              'React',
              'Next.js',
              'Frontend Engineering',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
