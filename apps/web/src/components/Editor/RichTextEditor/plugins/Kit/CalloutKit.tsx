'use client';

import { CalloutPlugin } from '@platejs/callout/react';

import { CalloutElement } from '@/components/Editor/RichTextEditor/SubComponents/CalloutElement'

export const CalloutKit = [
  CalloutPlugin.configure({
    node: {
      component: CalloutElement,
    },
  }),
];
