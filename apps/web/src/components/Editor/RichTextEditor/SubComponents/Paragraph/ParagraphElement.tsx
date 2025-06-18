'use client'

import * as React from 'react'

import type { PlateElementProps } from 'platejs/react'

import { PlateElement } from 'platejs/react'

import { cn } from '@/lib/utils'
/**
 * Plate段落组件
 * @param props 
 * @returns 
 */
export function ParagraphElement(props: PlateElementProps) {
  return (
    <PlateElement {...props} className={cn('m-0 px-0 py-1')}>
      {props.children}
    </PlateElement>
  )
}