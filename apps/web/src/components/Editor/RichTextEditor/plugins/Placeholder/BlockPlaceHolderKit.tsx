'use client'

import { KEYS } from "platejs"
import { BlockPlaceholderPlugin } from 'platejs/react'

export const BlockPlaceHolderKit = [
  BlockPlaceholderPlugin.configure({
    options: {
      className:
        'before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]',
      placeholders: {
        [KEYS.p]: '尝试输入文字...',
      },
      query: ({ path }) => {
        return path.length === 1
      }
    }
  })
]
