'use client'

import { TocPlugin } from "@platejs/toc/react"
import { TocElement } from "@/components/Editor/RichTextEditor/SubComponents/Toc/TocElement"
// 目录套件
export const TocKit = [
  TocPlugin.configure({
    options: {
      topOffset: 80, // 距离顶部偏移量
    }
  }).withComponent(TocElement)
]