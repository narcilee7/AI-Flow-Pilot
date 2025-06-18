import { BaseAlignKit } from "./plugins/Kit/BaseAlignKit";
import { BasicBlockKit } from "./plugins/Kit/BasicBlockKit";
import BasicMarksKit from "./plugins/Kit/BasicMarksKit";
import { BlockPlaceHolderKit } from "./plugins/Placeholder/BlockPlaceHolderKit";

const EditorKit = [
  // AI

  // Elements
  // 基础块套件
  ...BasicBlockKit,

  // Mark
  ...BasicMarksKit,

  // BlockStyle

  // Collaboration

  // Editing
  

  // UI
  ...BlockPlaceHolderKit, // 块占位符
]

export default EditorKit