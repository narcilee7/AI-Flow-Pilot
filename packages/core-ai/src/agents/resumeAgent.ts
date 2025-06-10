import { ChatOpenAI } from 'langchain/chat_models/openai';
import { initializeAgentExecutorWithOptions } from 'langchain/agents';
import { codeRunner } from '../tools/codeRunner';

export const createResumeAgent = async () => {
  const model = new ChatOpenAI({
    openAIApiKey: process.env.MOONSHOT_API_KEY, // 支持 Moonshot 替代 openai
    configuration: { baseURL: "https://api.moonshot.cn/v1" },
    modelName: "moonshot-v1-8k",
    temperature: 0.3
  });

  const tools = [codeRunner]; // 你可以添加更多工具
  const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "openai-functions",
    verbose: true,
  });

  return executor;
}
