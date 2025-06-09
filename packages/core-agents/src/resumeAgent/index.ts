import { chatWithMoonshot } from '@flow-pilot/core-ai';
import { resumePolishPrompt } from '@flow-pilot/core-prompts';

export async function optimizeResume(resumeText: string) {
  const prompt = resumePolishPrompt(resumeText);
  const result = await chatWithMoonshot({
    messages: [
      { role: 'system', content: '你是一位资深的简历顾问。' },
      { role: 'user', content: prompt },
    ],
  });
  return result;
}
