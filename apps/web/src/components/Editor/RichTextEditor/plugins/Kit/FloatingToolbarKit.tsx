'use client'

import { createPlatePlugin } from 'platejs/react'
import { FloatingToolbar } from '@/components/Editor/RichTextEditor/SubComponents/FloatingToolbar';
import {
	FloatingToolbarButtons
} from '@/components/Editor/RichTextEditor/SubComponents/FloatingToolbar/FloatingToolbarButtons';

export const FloatingToolbarKit = [
	createPlatePlugin({
		key: 'floating-toolbar',
		render: {
			afterEditable: () => (
				<FloatingToolbar>
					<FloatingToolbarButtons />
				</FloatingToolbar>
			)
		}
	})
]
