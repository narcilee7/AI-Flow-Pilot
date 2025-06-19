'use client'

import { useEditorReadOnly } from "platejs/react"
import { ToolbarGroup } from "../../../../ToolBar"
import { UndoToolbarButton, RedoToolbarButton } from "./History-Toolbar-Button"
import { AIToolbarButton } from "../AI/AIToolbarButton"
import { ArrowUpToLineIcon, WandSparklesIcon } from "lucide-react"
import { ExportToolbarButton } from "./ExportToolbarButton"
import { ImportToolbarButton } from "./ImportToolbarButton"
import { InsertToolbarButton } from "./InsertToolbarButton"
import { TurnInfoToolbarButton } from "./TurnInfoToolbarButton"

export function FixedToolBarButtons() {
  const readOnly = useEditorReadOnly()

  return (
    <div className="flex w-full">
      {!readOnly && (
        <>
          {/* 历史记录 */}
          <ToolbarGroup>
            <UndoToolbarButton />
            <RedoToolbarButton />
          </ToolbarGroup>

          {/* AI */}
          <ToolbarGroup>
            <AIToolbarButton tooltip="AI commands">
              <WandSparklesIcon />
            </AIToolbarButton>
          </ToolbarGroup>

          {/* 导入导出 */}
          <ToolbarGroup>
            <ExportToolbarButton>
              <ArrowUpToLineIcon />
            </ExportToolbarButton>

            <ImportToolbarButton />
          </ToolbarGroup>

          {/* 插入各种元素 */}
          <ToolbarGroup>
            <InsertToolbarButton />
            <TurnInfoToolbarButton />
            {/* 字号调整 */}
            <FontSizeToolbarButton />
          </ToolbarGroup>

        </>
      )}
    </div>
  )
}