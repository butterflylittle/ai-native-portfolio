import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getGitHubProfile } from './tools/getGitHubProfile';
import { getInternship } from './tools/getInternship';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getWeather } from './tools/getWeather';

export const maxDuration = 30;

const deepseek = createOpenAICompatible({
  name: 'deepseek',
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com',
});

// ❌ Pas besoin de l'export ici, Next.js n'aime pas ça
function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getCrazy,
      getGitHubProfile,
      getInternship,
      getProjects,
      getWeather,
    };

    const result = streamText({
      model: deepseek('deepseek-v4-flash'),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
