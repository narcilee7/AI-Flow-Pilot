'use client';

import { IndentPlugin } from '@platejs/indent/react'
import { KEYS } from 'platejs'
// 缩进插件
export const IndentKit = [
  IndentPlugin.configure({
    // 注入到哪些插件中
    inject: {
      targetPlugins: [
        ...KEYS.heading,
        KEYS.p,
        KEYS.blockquote,
        KEYS.codeBlock,
        KEYS.toggle,
      ]
    },
    // 缩进偏移量
    options: {
      offset: 24,
    }
  })
]