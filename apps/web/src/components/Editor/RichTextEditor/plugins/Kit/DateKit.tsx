'use client';

import { DatePlugin } from '@platejs/date/react';

import { DateElement } from '@/components/Editor/RichTextEditor/SubComponents/DateElement';

export const DateKit = [DatePlugin.withComponent(DateElement)];
