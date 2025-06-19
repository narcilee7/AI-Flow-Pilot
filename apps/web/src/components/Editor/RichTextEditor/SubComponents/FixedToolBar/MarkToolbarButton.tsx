'use client'

import * as React from 'react'

import { useMarkToolbarButton, useMarkToolbarButtonState } from 'platejs/react'

import { ToolbarButton } from '@/components/ToolBar'

interface MarkToolbarButtonProps extends React.ComponentProps<typeof ToolbarButton> {
  nodeType: string;
  clear?: string[] | string;
}

export function MarkToolbarButton({ clear, nodeType, ...props }: MarkToolbarButtonProps) {
  const state = useMarkToolbarButtonState({ clear, nodeType })
  const { props: buttonProps } = useMarkToolbarButton(state)

  return <ToolbarButton {...props} {...buttonProps} />
}
