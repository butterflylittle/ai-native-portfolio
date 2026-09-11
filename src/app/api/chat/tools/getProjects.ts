import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description: 'This tool will show a list of projects made by Huisen Wu',
  parameters: z.object({}),
  execute: async () => {
    return 'My project showcase is being updated from my latest resume.';
  },
});
