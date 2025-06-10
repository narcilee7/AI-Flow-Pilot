import OpenAI from "openai";
import "dotenv/config";
import { createResumeAgent } from "./agents/resumeAgent";

const client = new OpenAI({
  apiKey: process.env.MOONSHOT_API_KEY,
  baseURL: 'https://api.moonshot.cn/v1'
})

// let history = [{"role": "system", "content": "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。"}]

// const chat = async (prompt: string) => {
//   history.push({
//     role: 'user',
//     content: prompt
//   })
//   const completion = await client.chat.completions.create({
//     model: "moonshot-v1-8k",         
//     messages: history,
//   })
//   history = history.concat(completion.choices[0].message);
//   return completion.choices[0].message.content;
// }


// const main = async() => {
//   let reply = '';
//   reply = await chat("RAG向量检索是什么？");
//   console.log(reply);
//   reply = await chat("Prompt工程呢?");
//   console.log(reply);
// }

// main();
// const main = async() => {
//     const completion = await client.chat.completions.create({
//         model: "moonshot-v1-8k",         
//         "messages": [
//             {"role": "system", "content": "你是 Kimi，由 Moonshot AI 提供的人工智能助手，你更擅长中文和英文的对话。你会为用户提供安全，有帮助，准确的回答。同时，你会拒绝一切涉及恐怖主义，种族歧视，黄色暴力等问题的回答。Moonshot AI 为专有名词，不可翻译成其他语言。"},
//             {"role": "user", "content": "编程判断 3214567 是否是素数。"}
//         ],
//         "tools": [{
//             "type": "function",
//             "function": {
//                 "name": "CodeRunner",
//                 "description": "代码执行器，支持运行 python 和 javascript 代码",
//                 "parameters": {
//                     "properties": {
//                         "language": {
//                             "type": "string",
//                             "enum": ["python", "javascript"]
//                         },
//                         "code": {
//                             "type": "string",
//                             "description": "代码写在这里"
//                         }
//                     },
//                 "type": "object"
//                 }
//             }
//         }],
//         "temperature": 0.3
//     });
//     console.log(completion.choices[0].message);
// }

// main();

const main = async () => {
    const agent = await createResumeAgent();
    
    const res = await agent.call({
        input: "请判断 3214567 是否是素数，输出判断代码并执行。",
    });

    console.log("Agent answer: ", res.output);
}

main();