'use client'

import * as React from 'react'

import { Redo2Icon } from 'lucide-react'
import { useEditorRef, useEditorSelector } from 'platejs/react'
import { ToolbarButton } from '@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/ToolBar'

/**
 * 回退按钮
 */

type RedoToolbarButtonProps = React.ComponentProps<typeof ToolbarButton>

export function RedoToolbarButton(props: RedoToolbarButtonProps) {
  const editor = useEditorRef()
  const disabled = useEditorSelector(
    (editor) => editor.history.redos.length === 0,
    []
  )

  return (
    <ToolbarButton
      {...props}
      disabled={disabled}
      onClick={() => editor.redo()}
      onMouseDown={(e) => e.preventDefault()}
      tooltip="Redo"
    >
      <Redo2Icon />
    </ToolbarButton>
  )
}

/**
 * 前进按钮
 */
type UndoToolbarButtonProps = React.ComponentProps<typeof ToolbarButton>

export function UndoToolbarButton(props: UndoToolbarButtonProps) {
  const editor = useEditorRef()
  const disabled = useEditorSelector(
    (editor) => editor.history.undos.length === 0,
    []
  )

  return (
    <ToolbarButton
      {...props}
      disabled={disabled}
      onClick={() => editor.undo()}
      onMouseDown={(e) => e.preventDefault()}
      tooltip="Undo"
    >
      <Redo2Icon />
    </ToolbarButton>
  )
}