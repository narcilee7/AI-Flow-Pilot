'use client'

import { useEditorReadOnly } from "platejs/react"
import { ToolbarGroup } from "./ToolBar"
import { UndoToolbarButton, RedoToolbarButton } from "./History-Toolbar-Button"
import { AIToolbarButton } from "../AI/AIToolbarButton"
import { ArrowUpToLineIcon, WandSparklesIcon } from "lucide-react"
import { ExportToolbarButton } from "./ExportToolbarButton"

export function FixedToolBarButtons() {
  const readOnly = useEditorReadOnly()

  return (
    <div className="flex w-full">
      {!readOnly && (
        <>
          <ToolbarGroup>
            <UndoToolbarButton />
            <RedoToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <AIToolbarButton tooltip="AI commands">
              <WandSparklesIcon />
            </AIToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <ExportToolbarButton>
              <ArrowUpToLineIcon />
            </ExportToolbarButton>
          </ToolbarGroup>
        </>
      )}
    </div>
  )
}