import { BasicBlockKit } from "./plugins/Kit/BasicBlockKit";
import BasicMarksKit from "./plugins/Kit/BasicMarksKit";
import CodeBlockKit from "./plugins/Kit/CodeBlockKit";
import { BlockPlaceHolderKit } from "./plugins/Placeholder/BlockPlaceHolderKit";
import { ToggleKit } from "./plugins/Kit/ToggleKit";
import { TocKit } from "./plugins/Kit/TocKit";
import { FixedToolBarKit } from "./plugins/Kit/FixedToolBarKit";
import { FloatingToolbarKit } from '@/components/Editor/RichTextEditor/plugins/Kit/FloatingToolbarKit';
import { DocxKit } from '@/components/Editor/RichTextEditor/plugins/Kit/DocKit';
import { MarkdownKit } from '@/components/Editor/RichTextEditor/plugins/Kit/MarkdownKit';
import { TableKit } from '@/components/Editor/RichTextEditor/plugins/Kit/TableKit';

const EditorKit = [
  // AI

  // Elements
  // 基础块套件
  ...BasicBlockKit,
  // 代码块套件
  ...CodeBlockKit,
  // 表格套件 TODO: 待实现
  ...TableKit,
  // Toggle套件
  ...ToggleKit,
  // 目录套件
  ...TocKit,
  // 媒体套件
  // ...MediaKit,
  // 提示框套件
  // ...CalloutKit,

  // Mark
  ...BasicMarksKit,

  // BlockStyle

  // Collaboration

  // Editing

	// Parsers
	// Docx解析
	...DocxKit,
	...MarkdownKit,

  // UI
  // 块占位符
  ...BlockPlaceHolderKit,
  // 固定工具栏
  ...FixedToolBarKit,
	// 浮动工具栏
	...FloatingToolbarKit,
]

export default EditorKit
