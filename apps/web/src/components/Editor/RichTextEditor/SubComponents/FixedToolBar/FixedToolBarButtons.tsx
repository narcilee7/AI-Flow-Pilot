'use client';

import * as React from 'react';

import {
  ArrowUpToLineIcon,
  BaselineIcon,
  BoldIcon,
  Code2Icon,
  HighlighterIcon,
  ItalicIcon,
  PaintBucketIcon,
  StrikethroughIcon,
  UnderlineIcon,
  WandSparklesIcon,
} from 'lucide-react';
import { KEYS } from 'platejs';
import { useEditorReadOnly } from 'platejs/react';

import { AIToolbarButton} from "@/components/Editor/RichTextEditor/SubComponents/AI/AIToolbarButton";
import { AlignToolbarButton} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/AlignToolbarButton";
import { ToolbarGroup } from "@/components/ToolBar";
import { ModeToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/ModeToolbarButton";
import {
  CommentToolbarButton
} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/CommentToolbarButton";
import { MoreToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/MoreToolbarButton";
import {
  IndentToolbarButton,
  OutdentToolbarButton
} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/IndentToolbarButton";
import {
  LineHeightToolbarButton
} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/LineHeightToolbarButton";
import { MediaToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/MediaToolbarButton";
import { EmojiToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/EmojiToolbarButton";
import { TableToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/TableToolbarButton";
import { LinkToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/LinkToolbarButton";
import { ToggleToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/ToggleToolbarButton";
import {
  BulletedListToolbarButton, NumberedListToolbarButton,
  TodoListToolbarButton
} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/ListToolbarButtons";
import {
  FontColorToolbarButton
} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/FontColorToolbarButton";
import { MarkToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/MarkToolbarButton";
import { InsertToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/InsertToolbarButton";
import {
  TurnInfoToolbarButton
} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/TurnInfoToolbarButton";
import {
  FontSizeToolbarButton
} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/FontSizeToolbarButton";
import { ImportToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/ImportToolbarButton";
import {
  RedoToolbarButton, UndoToolbarButton
} from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/History-Toolbar-Button";
import { ExportToolbarButton } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/ExportToolbarButton";

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

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

            <ImportToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <InsertToolbarButton />
            <TurnInfoToolbarButton />
            <FontSizeToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <MarkToolbarButton nodeType={KEYS.bold} tooltip="Bold (⌘+B)">
              <BoldIcon />
            </MarkToolbarButton>

            <MarkToolbarButton nodeType={KEYS.italic} tooltip="Italic (⌘+I)">
              <ItalicIcon />
            </MarkToolbarButton>

            <MarkToolbarButton
              nodeType={KEYS.underline}
              tooltip="Underline (⌘+U)"
            >
              <UnderlineIcon />
            </MarkToolbarButton>

            <MarkToolbarButton
              nodeType={KEYS.strikethrough}
              tooltip="Strikethrough (⌘+⇧+M)"
            >
              <StrikethroughIcon />
            </MarkToolbarButton>

            <MarkToolbarButton nodeType={KEYS.code} tooltip="Code (⌘+E)">
              <Code2Icon />
            </MarkToolbarButton>

            <FontColorToolbarButton nodeType={KEYS.color} tooltip="Text color">
              <BaselineIcon />
            </FontColorToolbarButton>

            <FontColorToolbarButton
              nodeType={KEYS.backgroundColor}
              tooltip="Background color"
            >
              <PaintBucketIcon />
            </FontColorToolbarButton>
          </ToolbarGroup>

          <ToolbarGroup>
            <AlignToolbarButton />

            <NumberedListToolbarButton />
            <BulletedListToolbarButton />
            <TodoListToolbarButton />
            <ToggleToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <LinkToolbarButton />
            <TableToolbarButton />
            <EmojiToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <MediaToolbarButton nodeType={KEYS.img} />
            <MediaToolbarButton nodeType={KEYS.video} />
            <MediaToolbarButton nodeType={KEYS.audio} />
            <MediaToolbarButton nodeType={KEYS.file} />
          </ToolbarGroup>

          <ToolbarGroup>
            <LineHeightToolbarButton />
            <OutdentToolbarButton />
            <IndentToolbarButton />
          </ToolbarGroup>

          <ToolbarGroup>
            <MoreToolbarButton />
          </ToolbarGroup>
        </>
      )}

      <div className="grow" />

      <ToolbarGroup>
        <MarkToolbarButton nodeType={KEYS.highlight} tooltip="Highlight">
          <HighlighterIcon />
        </MarkToolbarButton>
        <CommentToolbarButton />
      </ToolbarGroup>

      <ToolbarGroup>
        <ModeToolbarButton />
      </ToolbarGroup>
    </div>
  );

}
