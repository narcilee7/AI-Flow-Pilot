'use client'

import { cn } from "@/utils/styleHelper"
import type { PlateElementProps } from "platejs/react"
import { PlateElement, useFocused, useReadOnly, useSelected } from "platejs/react"


/**
 * 删除线动态节点
 * @param props 
 * @returns 
 */
export function HrElement(props: PlateElementProps) {
  /* hooks */
  const readOnly = useReadOnly()
  const selected = useSelected()
  const focused = useFocused()
  return (
    <PlateElement {...props}>
      <div className="py-6" contentEditable={false}>
        <hr
          className={cn(
            'h-0.5 rounded-sm border-none bg-muted bg-clip-content',
            selected && focused && 'ring-2 ring-ring ring-offset-2',
            !readOnly && 'cursor-pointer'
          )}
        />
      </div>
      {props.children}
    </PlateElement>
  )
}