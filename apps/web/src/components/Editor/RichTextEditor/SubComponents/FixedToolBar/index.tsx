'use client'

import { Toolbar } from "@/components/ToolBar"
import { cn } from "@/utils/styleHelper"
import React from "react";

export function FixedToolBar(props: React.ComponentProps<typeof Toolbar>) {
  return (
    <Toolbar
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
