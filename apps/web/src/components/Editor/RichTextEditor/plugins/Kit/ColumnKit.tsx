'use client';

import { ColumnItemPlugin, ColumnPlugin } from '@platejs/layout/react';

import { 
  ColumnElement,
  ColumnGroupElement
} from '@/components/Editor/RichTextEditor/SubComponents/ColumnElement';

export const ColumnKit = [
  ColumnPlugin.withComponent(ColumnGroupElement),
  ColumnItemPlugin.withComponent(ColumnElement),
];
