'use client'

import { useEditorReadOnly } from "platejs/react"
import { ToolbarGroup } from "../../../../ToolBar"
import { UndoToolbarButton, RedoToolbarButton } from "./History-Toolbar-Button"
import { AIToolbarButton } from "../AI/AIToolbarButton"
import { ArrowUpToLineIcon, BaselineIcon, BoldIcon, Code2Icon, ItalicIcon, PaintBucketIcon, StrikethroughIcon, UnderlineIcon, WandSparklesIcon } from "lucide-react"
import { ExportToolbarButton } from "./ExportToolbarButton"
import { ImportToolbarButton } from "./ImportToolbarButton"
import { InsertToolbarButton } from "./InsertToolbarButton"
import { TurnInfoToolbarButton } from "./TurnInfoToolbarButton"
import { FontSizeToolbarButton } from "./FontSizeToolbarButton"
import { MarkToolbarButton } from "./MarkToolbarButton"
import { KEYS } from "platejs"
import { FontColorToolbarButton } from "./FontColorToolbarButton"

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

          {/* 加粗 加斜线 下划线... */}
          <ToolbarGroup>
            {/* 加粗 */}
            <MarkToolbarButton nodeType={KEYS.bold} tooltip="Bold (⌘+B)">
              <BoldIcon />
            </MarkToolbarButton>
            {/* 斜体 */}
            <MarkToolbarButton nodeType={KEYS.italic} tooltip="Italic (⌘+I)">
              <ItalicIcon />
            </MarkToolbarButton>
            {/* 下划线 */}
            <MarkToolbarButton
              nodeType={KEYS.underline}
              tooltip="Underline (⌘+U)"
            >
              <UnderlineIcon />
            </MarkToolbarButton>
            {/* 删除线 */}
            <MarkToolbarButton
              nodeType={KEYS.strikethrough}
              tooltip="Strikethrough (⌘+⇧+M)"
            >
              <StrikethroughIcon />
            </MarkToolbarButton>
            {/* 代码块 */}
            <MarkToolbarButton nodeType={KEYS.code} tooltip="Code (⌘+E)">
              <Code2Icon />
            </MarkToolbarButton>

            {/* 字体颜色 */}
            <FontColorToolbarButton nodeType={KEYS.color} tooltip="Text Color">
              <BaselineIcon />
            </FontColorToolbarButton>

            {/* 背景颜色 */}
            <FontColorToolbarButton
              nodeType={KEYS.backgroundColor}
              tooltip="Background Color"
            >
              <PaintBucketIcon />
            </FontColorToolbarButton>
          </ToolbarGroup>
        </>
      )}
    </div>
  )
}