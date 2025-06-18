import { BaseBasicBlocksKit } from '../Basic/Block-Base-Kit';
import { BaseCodeBlockKit } from '../Code/BaseBlockKit';

// 基础编辑器插件
export const BaseEditorKit = [
  ...BaseBasicBlocksKit, // 基础块插件
  ...BaseCodeBlockKit, // 代码块插件
]