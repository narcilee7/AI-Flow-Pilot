'use client'

import { ToolbarButton } from '@/components/ToolBar';
import { useEditorRef } from 'platejs/react';
import { insertInlineEquation } from '@platejs/math';
import { RadiationIcon } from 'lucide-react';

export function InlineEquationToolbarButton(props: React.ComponentProps<typeof ToolbarButton>) {
	const editorRef = useEditorRef()

	return (
		<ToolbarButton {...props} onClick={() => insertInlineEquation(editorRef)} tooltip="Mark as Equation">
			<RadiationIcon />
		</ToolbarButton>
	)
}
