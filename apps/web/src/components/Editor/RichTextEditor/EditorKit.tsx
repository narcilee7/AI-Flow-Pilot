import { BaseAlignKit } from "./plugins/Kit/BaseAlignKit";
import { BasicBlockKit } from "./plugins/Kit/BasicBlockKit";
import BasicMarksKit from "./plugins/Kit/BasicMarksKit";
import CodeBlockKit from "./plugins/Kit/CodeBlockKit";
import { BlockPlaceHolderKit } from "./plugins/Placeholder/BlockPlaceHolderKit";
import { ToggleKit } from "./plugins/Kit/ToggleKit";
import { TocKit } from "./plugins/Kit/TocKit";

const EditorKit = [
  // AI

  // Elements
  // 基础块套件
  ...BasicBlockKit,
  // 代码块套件
  ...CodeBlockKit,
  // 表格套件 TODO: 待实现
  // ...TableKit, 
  // Toggle套件
  ...ToggleKit,
  // 目录套件
  ...TocKit,

  // Mark
  ...BasicMarksKit,

  // BlockStyle

  // Collaboration

  // Editing
  

  // UI
  ...BlockPlaceHolderKit, // 块占位符
]

export default EditorKit