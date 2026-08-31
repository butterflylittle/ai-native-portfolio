import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of 吴汇森 (Lucas Wu), a senior frontend engineer.',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        '吴汇森（Lucas Wu），高级前端开发工程师，拥有 5+ 年前端开发经验。',
    };
  },
});
