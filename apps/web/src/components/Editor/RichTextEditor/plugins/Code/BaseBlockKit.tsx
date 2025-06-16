import {
  BaseCodeBlockPlugin,
  BaseCodeLinePlugin,
  BaseCodeSyntaxPlugin,
} from '@platejs/code-block'

import { all, createLowlight } from 'lowlight'

import { CodeBlockElementStatic, CodeLineElementStatic, CodeSyntaxLeafStatic } from '@/components/Editor/RichTextEditor/SubComponents/Code/CodeBlockElementStatc'

// 代码高亮
const lowlight = createLowlight(all)

export const BaseCodeBlockKit = [
  // 代码块插件
  BaseCodeBlockPlugin.configure({
    node: {
      component: CodeBlockElementStatic,
    },
    options: {
      lowlight, // 代码高亮插件
    }
  }),

  // 代码行插件
  BaseCodeLinePlugin.withComponent(CodeLineElementStatic),

  // 代码语法叶子插件
  BaseCodeSyntaxPlugin.withComponent(CodeSyntaxLeafStatic),
]