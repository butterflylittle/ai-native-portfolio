import { tool } from 'ai';
import { z } from 'zod';

export const getSports = tool({
  description:
    'This legacy tool is currently disabled while personal media is being updated',
  parameters: z.object({}),
  execute: async () => {
    return 'Here my some pictures of me enjoying a bike ride!';
  },
});
