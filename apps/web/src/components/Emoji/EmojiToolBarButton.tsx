'use client'

import * as React from 'react'

import type { Emoji } from '@emoji-mart/data'

import {
  type EmojiCategoryList,
  type EmojiIconList,
  type GridRow,
  EmojiSettings,
} from '@platejs/emoji'

import {
  type EmojiDropdownMenuOptions,
  type UseEmojiPickerType,
  useEmojiDropdownMenuState,
} from '@platejs/emoji/react'

import * as Popover from '@radix-ui/react-popover'

import {
  AppleIcon,
  ClockIcon,
  CompassIcon,
  FlagIcon,
  LeafIcon,
  LightbulbIcon,
  MusicIcon,
  SearchIcon,
  SmileIcon,
  StarIcon,
  XIcon,
} from 'lucide-react'

import { Button } from '@/components/Button'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ToolTip'

