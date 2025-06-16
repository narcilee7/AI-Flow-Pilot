'use client'

import { ToolBar } from "./ToolBar"
import { cn } from "@/utils/styleHelper"

export function FixedToolBar(props: React.ComponentProps<typeof ToolBar>) {
  return (
    <ToolBar 
      {...props} 
      className={cn(
        'sticky top-0 left-0 z-100',
        'scrollbar-hide w-full justify-between overflow-x-auto',
        'rounded-t-lg border-b',
        'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        props.className
      )}
    />
  )
}

