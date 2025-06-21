'use client';

import { CursorOverlayPlugin } from '@platejs/selection/react';

import { CursorOverlay } from '@/components/Editor/RichTextEditor/SubComponents/CursorOverlay';

export const CursorOverlayKit = [
  CursorOverlayPlugin.configure({
    render: {
      afterEditable: () => <CursorOverlay />,
    },
  }),
];
