'use client'

import * as React from 'react'

import type { TElement } from 'platejs'

import { toUnitLess } from '@platejs/basic-styles'
import { FontSizePlugin } from '@platejs/basic-styles/react'
import { Minus, Plus } from 'lucide-react'
import { useEditorPlugin, useEditorSelector } from 'platejs/react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/Popover'
import { ToolbarButton } from '@/components/ToolBar'
import { cn } from '@/utils/styleHelper'

// 默认字号
const DEFAULT_FONT_SIZE = 16

const FONT_SIZE_MAP = {
  h1: '36',
  h2: '24',
  h3: '20',
  h4: '18',
  h5: '16',
  h6: '14',
} as const

const FONT_SIZES = [
  '8',
  '9',
  '10',
  '12',
  '14',
  '16',
  '18',
  '24',
  '30',
  '36',
  '48',
  '60',
  '72',
  '96',
] as const
