'use client'

import { MarkdownPlugin, remarkMdx, remarkMention } from '@platejs/markdown';
import { KEYS } from 'platejs';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
// 解析Markdown套件
export const MarkdownKit = [
	MarkdownPlugin.configure({
		options: {
			disallowedNodes: [KEYS.suggestion],
			remarkPlugins: [remarkMath, remarkGfm, remarkMdx, remarkMention]
		}
	})
]
