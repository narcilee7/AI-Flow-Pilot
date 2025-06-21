'use client';

import { LinkPlugin } from '@platejs/link/react';

import { LinkElement } from '@/components/Editor/RichTextEditor/SubComponents/LinkElement';
import { LinkFloatingToolbar } from '@/components/Editor/RichTextEditor/SubComponents/LinkElement/LinkToolbar';

export const LinkKit = [
  LinkPlugin.configure({
    render: {
      node: LinkElement,
      afterEditable: () => <LinkFloatingToolbar />,
    },
  }),
];
