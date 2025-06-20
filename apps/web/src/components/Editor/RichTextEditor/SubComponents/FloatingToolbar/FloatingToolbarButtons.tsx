'use client'


import { useEditorReadOnly } from 'platejs/react';
import { ToolbarGroup } from '@/components/ToolBar';
import { AIToolbarButton } from '@/components/Editor/RichTextEditor/SubComponents/AI/AIToolbarButton';
import { BoldIcon, Code2Icon, ItalicIcon, StrikethroughIcon, UnderlineIcon, WandSparklesIcon } from 'lucide-react';
import {
	TurnInfoToolbarButton
} from '@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/TurnInfoToolbarButton';
import { MarkToolbarButton } from '@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/MarkToolbarButton';
import { KEYS } from 'platejs';
import { LinkToolbarButton } from '@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/LinkToolbarButton';
import {
	InlineEquationToolbarButton
} from '@/components/Editor/RichTextEditor/SubComponents/FloatingToolbar/InlineEuqationToolbarButton';

export function FloatingToolbarButtons() {
	const readOnly = useEditorReadOnly()

	return (
		<>
			{!readOnly && (
				<>
					<ToolbarGroup>
						<AIToolbarButton tooltip='AI Commands'>
							<WandSparklesIcon />
							询问AI
						</AIToolbarButton>
					</ToolbarGroup>

					<ToolbarGroup>
						<TurnInfoToolbarButton />
						{/* 加粗 */}
						<MarkToolbarButton nodeType={KEYS.bold} tooltip="Bold (⌘+B)">
							<BoldIcon />
						</MarkToolbarButton>
						{/* 斜体 */}
						<MarkToolbarButton nodeType={KEYS.italic} tooltip="Italic (⌘+I)">
							<ItalicIcon />
						</MarkToolbarButton>
						{/* 下划线 */}
						<MarkToolbarButton nodeType={KEYS.underline} tooltip="Underline (⌘+U)">
							<UnderlineIcon />
						</MarkToolbarButton>
						{/* 删除线*/}
						<MarkToolbarButton nodeType={KEYS.strikethrough} tooltip="Strikethrough (⌘+⇧+M)">
							<StrikethroughIcon />
						</MarkToolbarButton>
						{/*	代码块 */}
						<MarkToolbarButton nodeType={KEYS.code} tooltip="Code (⌘+E)">
							<Code2Icon />
						</MarkToolbarButton>

						<InlineEquationToolbarButton />

						<LinkToolbarButton />
					</ToolbarGroup>
				</>
			)}
		</>
	)
}
