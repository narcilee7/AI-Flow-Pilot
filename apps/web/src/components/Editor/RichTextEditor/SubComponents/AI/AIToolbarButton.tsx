'use client'

import * as React from 'react'

import { AIChatPlugin } from '@platejs/ai/react'
import { useEditorPlugin } from 'platejs/react'
import { ToolbarButton } from '@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/ToolBar'

type AIToolbarButtonProps = React.ComponentProps<typeof ToolbarButton>

/**
 * AI聊天按钮
 */
export function AIToolbarButton(props: AIToolbarButtonProps) {
  const { api } = useEditorPlugin(AIChatPlugin)

  return (
    <ToolbarButton 
      {...props}
      onClick={() => {
        api.aiChat.show();
      }}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      tooltip="AI Chat"
    />
  )
}