'use client';

import * as React from 'react';

import {
	flip,
	type FloatingToolbarState,
	offset,
	useFloatingToolbar,
	useFloatingToolbarState,
} from '@platejs/floating';
import { useComposedRef } from '@udecode/cn';
import { KEYS } from 'platejs';
import { useEditorId, useEventEditorValue, usePluginOption } from 'platejs/react';

import { cn } from '@/lib/utils';

import { Toolbar } from '@/components/ToolBar';

interface FloatingToolbarProps extends React.ComponentProps<typeof Toolbar> {
	state?: FloatingToolbarState;
}

export function FloatingToolbar({ children, className, state, ...props }: FloatingToolbarProps ){
	const editorId = useEditorId()
	const focusedEditorId = useEventEditorValue('focus')
	const isFloatingLinkOpen = !!usePluginOption({ key: KEYS.link }, 'mode')
	const isAIChatOpen = usePluginOption({ key: KEYS.aiChat }, 'open' )

	const floatingToolbarState = useFloatingToolbarState(({
		editorId,
		focusedEditorId,
		hideToolbar: isFloatingLinkOpen || isAIChatOpen,
		...state,
		floatingOptions: {
			middleware: [
				offset(12),
				flip({
					fallbackPlacements: [
						'top-start',
						'top-end',
						'bottom-start',
						'bottom-end'
					],
					padding: 12
				})
			],
			placement: 'top',
			...state?.floatingOptions
		}
	}))

	const {
		clickOutsideRef,
		hidden,
		props: rootProps,
		ref: floatingRef
	} = useFloatingToolbar(floatingToolbarState)

	const { ref: ref1 } = props;
	if (!ref1) {
		return null
	}
	const ref = useComposedRef<HTMLDivElement>(ref1, floatingRef)

	if (hidden) return null

	return (
		<div ref={clickOutsideRef}>
			<Toolbar
				{...props}
				{...rootProps}
				className={cn(
					'absolute z-50 scrollbar-hide overflow-x-hidden rounded-md border bg-popover p-1 whitespace-nowrap opacity-100 shadow-md print:hidden',
					'max-w-[80vw]',
					className
				)}
			>
				{children}
			</Toolbar>
		</div>
	)
}
