'use client';

import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from '@platejs/code-block/react';

import { CodeBlockElementStatic, CodeLineElementStatic, CodeSyntaxLeafStatic } from '@/components/Editor/RichTextEditor/SubComponents/Code/CodeBlockElementStatc'

import { all, createLowlight } from 'lowlight'

const lowlight = createLowlight(all)

export const CodeBlockKit = [
  CodeBlockPlugin.configure({
    node: {
      component: CodeBlockElementStatic,
    },
    options: {
      lowlight,
    },
    shortcuts: {
      toggle: {
        keys: 'mod+alt+8',
      },
      // split: {
      //   keys: 'mod+alt+9'
      // },
      // join: {
      //   keys: 'mod+alt+0'
      // },
    }
  }),

  CodeLinePlugin.withComponent(CodeLineElementStatic),

  CodeSyntaxPlugin.withComponent(CodeSyntaxLeafStatic),
]