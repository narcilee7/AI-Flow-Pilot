'use client'

import { createPlatePlugin } from 'platejs/react'
import { FloatingToolbar } from '@/components/Editor/RichTextEditor/SubComponents/FloatingToolbar';

export const FloatingToolbarKit = [
	createPlatePlugin({
		key: 'floating-toolbar',
		render: {
			afterEditable: () => (
				<FloatingToolbar>
					
				</FloatingToolbar>
			)
		}
	})
]
