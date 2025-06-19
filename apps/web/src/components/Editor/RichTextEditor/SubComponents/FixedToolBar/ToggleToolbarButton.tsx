'use client'

import * as React from 'react';

import {
  useToggleToolbarButton,
  useToggleToolbarButtonState,
} from '@platejs/toggle/react';
import { ListCollapseIcon } from 'lucide-react';

import { ToolbarButton } from '@/components/ToolBar';

export function ToggleToolbarButton(props: React.ComponentProps<typeof ToolbarButton>) {
  const state = useToggleToolbarButtonState()
  const { props: ButtonProps } = useToggleToolbarButton(state)

  return (
    <ToolbarButton {...props} {...ButtonProps} tooltip="Toggle">
      <ListCollapseIcon />
    </ToolbarButton>
  )
}