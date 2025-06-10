import { Tool } from 'langchain/tools';

export const codeRunner = new Tool({
  name: 'CodeRunner',
  description: '运行javascript 或 Python 代码，检查编程问题或运行算法',
  func: async (code: string) => {
    try {
      const result = eval(code);
      return `结果是: ${result}`;
    } catch (error) {
      console.error('执行错误: ', error);
    }
  }
})