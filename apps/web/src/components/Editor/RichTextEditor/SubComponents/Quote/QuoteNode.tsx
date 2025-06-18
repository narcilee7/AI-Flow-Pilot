'use client'

import { type PlateElementProps, PlateElement } from 'platejs/react'

/**
 * 块级引用元素
 * @param props 
 * @returns 
 */
export function BlockQuoteELement(props: PlateElementProps) {
  return (
    <PlateElement 
      {...props} 
      as="blockquote" 
      className="my-1 border-l-2 pl-6 italic"
    >
      {props.children}
    </PlateElement>
  )
}