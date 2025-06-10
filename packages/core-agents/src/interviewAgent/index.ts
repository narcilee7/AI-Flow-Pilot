import { chatWithMoonshot } from '@jobPilot/core-ai';

export async function simulateInterview(question: string, answer: string) {
  const messages = [
    { role: 'system', content: '你是一个技术面试官，请基于以下提问分析应聘者回答并给出建议。' },
    { role: 'user', content: `问题：${question}\n回答：${answer}` },
  ];
  return await chatWithMoonshot({ messages });
}