'use client';

import {
  BoldPlugin,
  CodePlugin,
  HighlightPlugin,
  ItalicPlugin,
  KbdPlugin,
  StrikethroughPlugin,
  SubscriptPlugin,
  SuperscriptPlugin,
  UnderlinePlugin,
} from '@platejs/basic-nodes/react';
import HighlightLeaf from '../../HighLightLeaf';
import CodeLeaf from '../../CodeLeaf';
import { KbdLeaf } from '../../KbdLeaf';

const BasicMarksKit = [
  BoldPlugin, // 粗体
  ItalicPlugin, // 斜体
  UnderlinePlugin, // 下划线
  CodePlugin.configure({
    node: { component: CodeLeaf }, // 代码
    shortcuts: { toggle: { keys: 'mod+e' } },
  }),
  StrikethroughPlugin.configure({ // 删除线
    shortcuts: { toggle: { keys: 'mod+shift+x' } },
  }),
  SubscriptPlugin.configure({ // 下标
    shortcuts: { toggle: { keys: 'mod+comma' } },
  }),
  SuperscriptPlugin.configure({ // 上标
    shortcuts: { toggle: { keys: 'mod+period' } },
  }),
  HighlightPlugin.configure({ // 高亮
    node: { component: HighlightLeaf },
    shortcuts: { toggle: { keys: 'mod+shift+h' } },
  }),
  KbdPlugin.withComponent(KbdLeaf), // 键盘
];

export default BasicMarksKit