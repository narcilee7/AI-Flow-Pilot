'use client'

import { useEditorReadOnly } from "platejs/react"

export function FixedToolBarButtons() {
  const readOnly = useEditorReadOnly()

  return (
    <div className="flex w-full"></div>
  )
}