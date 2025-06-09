# FlowPilot 最好的招聘全链路服务AI平台

--version: node v20.19.2 (npm v10.8.2)

## 产品简介
Resume Flow AI Platform AI为核心的Agent求职服务平台

### Slogan
FlowPilot：做你的求职领航员。

#### 产品功能全链路打通
1. 简历editor：核心在于将简历数据使用 JSON schema化、结构化。目标是：
  1. 适配表单、markdown、rich context、canvas，保证编辑
  2. 结构化后可以通过LangChain调用ai能力，实现AI简历润色，AI简历优化等等
  3. 模版生成、AI生成简历：收录或者mock优质的模版，或者直接调用LLM能力(生成一份前端工程师简历、后端工程师简历)
  4. 导入导出功能实现
2. 面试辅导：
  1. 题库文档系统：收录各大面试题、八股文(初步面向互联网)
    1. 支持打高亮、记笔记、收藏题目、阅读记录等阅读功能；
    2. 随时调用面试题chatbot：回答自己的延伸问题；
    3. 这一层数据链路，用户的阅读、tag、高亮、收藏都是关键，要用给AI
  2. 刷题系统：
    1. Cloud ide：支持代码题
  3. 面试系统：AI视频面试、电话面试、算法题面试
    1. LangChain 多轮 Agent 实现“思考+追问”
    2. 收录答题数据、打分、量化面试结果以及给出建议
    3. 错题积累
3. 目标管理、自我管理、可视化成长曲线
  1. 刷题记录
  2. 学习曲线
  3. 求职目标管理、打卡，学习进度可视化

  
### 技术栈

1. 前端：next.js vue.js
2. 后端：koa prisma
3. typescript
4. AI: Langchain + HuggingFace Transformers
5. 数据库：PostgreSql + Chroma向量数据库

### monorepo架构文件下介绍

/app:
  - web: 用户端
  - admin：管理端
  - server：服务层

/packages:
  - core-ai: 封装AI能力，调用Langchain，HuggingFace能力
  - core-db: Prisma Model能力封装
  - core-vectors: 向量库统一封装 + Retriever	
  - core-agents: Agent能力封装调用
  - lib: 通用工具库、埋点、日志功能、甚至抽象组件库能力、底层ai能力等
  - core-prompts: prompts模版管理(比如模版回答、模版提问、模版简历)，插值工具
  - ui: 外部ui库或者封装ui业务组件库


