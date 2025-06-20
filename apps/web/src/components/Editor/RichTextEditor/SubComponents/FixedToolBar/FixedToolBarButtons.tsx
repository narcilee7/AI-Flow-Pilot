'use client'

import { useEditorReadOnly } from "platejs/react"
import { KEYS } from "platejs"
import { ToolbarGroup } from "../../../../ToolBar"
import { UndoToolbarButton, RedoToolbarButton } from "./History-Toolbar-Button"
import { AIToolbarButton } from "../AI/AIToolbarButton"
import { ArrowUpToLineIcon, BaselineIcon, BoldIcon, Code2Icon, HighlighterIcon, ItalicIcon, PaintBucketIcon, StrikethroughIcon, UnderlineIcon, WandSparklesIcon } from "lucide-react"
import { ExportToolbarButton } from "./ExportToolbarButton"
import { ImportToolbarButton } from "./ImportToolbarButton"
import { InsertToolbarButton } from "./InsertToolbarButton"
import { TurnInfoToolbarButton } from "./TurnInfoToolbarButton"
import { FontSizeToolbarButton } from "./FontSizeToolbarButton"
import { MarkToolbarButton } from "./MarkToolbarButton"
import { FontColorToolbarButton } from "./FontColorToolbarButton"
import { AlignToolbarButton } from "./AlignToolbarButton"
import { BulletedListToolbarButton, NumberedListToolbarButton, TodoListToolbarButton } from "./ListToolbarButtons"
import { ToggleToolbarButton } from "./ToggleToolbarButton"
import { LinkToolbarButton } from "./LinkToolbarButton"
import { TableToolbarButton } from "./TableToolbarButton"
import { EmojiToolbarButton } from "./EmojiToolbarButton"
import { MediaToolbarButton } from "./MediaToolbarButton"
import { LineHeightToolbarButton } from "./LineHeightToolbarButton"
import { OutdentToolbarButton, IndentToolbarButton } from "./IndentToolbarButton"
import { MoreToolbarButton } from "./MoreToolbarButton"
import { ModeToolbarButton } from "./ModeToolbarButton"
import { CommentToolbarButton } from './CommentToolbarButton'

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

          {/* 排版对齐 */}
          <ToolbarGroup>
            <AlignToolbarButton />

            {/* 列表 */}
            <BulletedListToolbarButton />
            <NumberedListToolbarButton />
            <TodoListToolbarButton />

            {/* 折叠 */}
            <ToggleToolbarButton />
          </ToolbarGroup>

          {/* 链接 表格 emoji */}
          <ToolbarGroup>
            <LinkToolbarButton />
            <TableToolbarButton />
            <EmojiToolbarButton />
          </ToolbarGroup>

          {/* 图片 视频 音频 文件 */}
          <ToolbarGroup>
            <MediaToolbarButton nodeType={KEYS.img} />
            <MediaToolbarButton nodeType={KEYS.video} />
            <MediaToolbarButton nodeType={KEYS.audio} />
            <MediaToolbarButton nodeType={KEYS.file} />
          </ToolbarGroup>

          {/* 行高 缩进 外缩 */}
          <ToolbarGroup>
            <LineHeightToolbarButton />
            <IndentToolbarButton />
            <OutdentToolbarButton />
          </ToolbarGroup>

          {/* 更多 */}
          <ToolbarGroup>
            <MoreToolbarButton />
          </ToolbarGroup>
        </>
      )}

      <div className="grow" />

      <ToolbarGroup>
        {/* 高亮 */}
        <MarkToolbarButton nodeType={KEYS.highlight} tooltip="Highlight">
          <HighlighterIcon />
        </MarkToolbarButton>
				 {/* 评论组件 */}
         <CommentToolbarButton />
      </ToolbarGroup>

      <ToolbarGroup>
        {/* 模式 */}
        <ModeToolbarButton />
      </ToolbarGroup>
    </div>
  )
}
