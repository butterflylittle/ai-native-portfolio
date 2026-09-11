import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of 吴汇森 (Huisen Wu, also known as Lucas Wu), a senior frontend engineer focused on AI Agent engineering.',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        '吴汇森（Huisen Wu，亦使用 Lucas Wu），拥有 5+ 年经验的高级前端开发工程师，当前专注 AI Agent 与全栈式 AI 应用工程。',
    };
  },
});
