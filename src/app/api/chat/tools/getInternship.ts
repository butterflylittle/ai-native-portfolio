import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    'Shows Lucas Wu’s professional profile, frontend stack, education, and contact information.',
  parameters: z.object({}),
  execute: async () => {
    return `- **姓名**：吴汇森（Lucas Wu）
- **职位**：高级前端开发工程师
- **经验**：5+ 年
- **技术栈**：Vue3、Vue2、React、Next.js、TypeScript、Vite、Webpack、ECharts、Docker
- **教育**：广东工业大学 · 控制工程
- **邮箱**：13710610218@163.com
- **电话**：13710610218
- **GitHub**：[butterflylittle](https://github.com/butterflylittle)`;
  },
});
