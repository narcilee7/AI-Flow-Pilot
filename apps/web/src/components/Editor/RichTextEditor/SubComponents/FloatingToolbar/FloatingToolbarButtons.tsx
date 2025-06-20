'use client'


import { useEditorReadOnly } from 'platejs/react';
import { ToolbarGroup } from '@/components/ToolBar';
import { AIToolbarButton } from '@/components/Editor/RichTextEditor/SubComponents/AI/AIToolbarButton';
import { BoldIcon, ItalicIcon, WandSparklesIcon } from 'lucide-react';
import {
	TurnInfoToolbarButton
} from '@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/TurnInfoToolbarButton';
import { MarkToolbarButton } from '@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/MarkToolbarButton';
import { KEYS } from 'platejs';

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
					</ToolbarGroup>
				</>
			)}
		</>
	)
}
