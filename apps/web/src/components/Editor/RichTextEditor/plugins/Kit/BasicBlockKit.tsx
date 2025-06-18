'use client'

/**
 * Plate基础块套件
 */
import {
  BlockquotePlugin,
  H1Plugin,
  H2Plugin,
  H3Plugin,
  H4Plugin,
  H5Plugin,
  H6Plugin,
  HorizontalRulePlugin,
} from '@platejs/basic-nodes/react';
import { ParagraphPlugin } from 'platejs/react';
import { ParagraphElement } from '../../SubComponents/Paragraph/ParagraphElement';
import { H1Element, H2Element, H3Element, H4Element, H5Element, H6Element } from '../../SubComponents/Heading/HeadingNode';
import { BlockQuoteELement } from '../../SubComponents/Quote/QuoteNode';
import { HrElement } from '../../SubComponents/HR/HrElement';

const BasicBlockKit = [
  ParagraphPlugin.withComponent(ParagraphElement),
  H1Plugin.configure({
    node: {
      component: H1Element
    },
    rules: {
      break: { empty: 'reset' }
    },
    shortcuts: { toggle: { keys: 'mod+alt+1' } }
  }),
  H2Plugin.configure({
    node: {
      component: H2Element,
    },
    rules: {
      break: { empty: 'reset' }
    },
    shortcuts: { toggle: { keys: 'mod+alt+2' } }
  }),
  H3Plugin.configure({
    node: {
      component: H3Element,
    },
    rules: {
      break: { empty: 'reset' }
    },
    shortcuts: { toggle: { keys: 'mod+alt+3' } }
  }),
  H4Plugin.configure({
    node: {
      component: H4Element,
    },
    rules: {
      break: { empty: 'reset' }
    },
    shortcuts: { toggle: { keys: 'mod+alt+2' } }
  }),
  H5Plugin.configure({
    node: {
      component: H5Element,
    },
    rules: {
      break: { empty: 'reset' }
    },
    shortcuts: { toggle: { keys: 'mod+alt+2' } }
  }),
  H6Plugin.configure({
    node: {
      component: H6Element,
    },
    rules: {
      break: { empty: 'reset' }
    },
    shortcuts: { toggle: { keys: 'mod+alt+2' } }
  }),
  BlockquotePlugin.configure({
    node: {
      component: BlockQuoteELement,
    },
    shortcuts: { toggle: { keys: 'mod+alt+period' } }
  }),
  HorizontalRulePlugin.withComponent(HrElement)
]

export {
  BasicBlockKit
}