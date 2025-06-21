'use client';

import { EquationPlugin, InlineEquationPlugin } from '@platejs/math/react';

import {
  EquationElement,
  InlineEquationElement,
} from '@/components/Editor/RichTextEditor/SubComponents/EquationElement';

export const MathKit = [
  InlineEquationPlugin.withComponent(InlineEquationElement),
  EquationPlugin.withComponent(EquationElement),
];
