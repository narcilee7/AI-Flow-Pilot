import {
  BaseBlockquotePlugin,
  BaseH1Plugin,
  BaseH2Plugin,
  BaseH3Plugin,
  BaseH4Plugin,
  BaseH5Plugin,
  BaseH6Plugin,
  BaseHorizontalRulePlugin,
} from '@platejs/basic-nodes';
import { BaseParagraphPlugin } from 'platejs';

import BlockquoteElementStatic from '@/components/Editor/RichTextEditor/SubComponents/Block/BlockQuoteElementStatic';
import { HeadingStaticH1, HeadingStaticH2, HeadingStaticH3, HeadingStaticH4, HeadingStaticH5, HeadingStaticH6 } from '@/components/Editor/RichTextEditor/SubComponents/Heading/HeadingStatic';
import { HrElementStatic } from '@/components/Editor/RichTextEditor/SubComponents/HR/HrElementStatic';
import { ParagraphElementStatic } from '@/components/Editor/RichTextEditor/SubComponents/Paragraph/ParagraphElementStatic';


export const BaseBasicBlocksKit = [
  // 段落插件
  BaseParagraphPlugin.withComponent(ParagraphElementStatic),

  // 引用插件
  BaseBlockquotePlugin.withComponent(BlockquoteElementStatic),

  // 标题插件
  BaseH1Plugin.withComponent(HeadingStaticH1),
  BaseH2Plugin.withComponent(HeadingStaticH2),
  BaseH3Plugin.withComponent(HeadingStaticH3),
  BaseH4Plugin.withComponent(HeadingStaticH4),
  BaseH5Plugin.withComponent(HeadingStaticH5),
  BaseH6Plugin.withComponent(HeadingStaticH6),

  // 分割线插件
  BaseHorizontalRulePlugin.withComponent(HrElementStatic),
]