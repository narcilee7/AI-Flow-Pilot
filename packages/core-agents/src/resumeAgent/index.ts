import { chatWithMoonshot } from '@jobPilot/core-ai';
import { resumePolishPrompt } from '@jobPilot/core-prompts';

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
