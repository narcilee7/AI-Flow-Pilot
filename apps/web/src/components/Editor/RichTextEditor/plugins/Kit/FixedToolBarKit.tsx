'use client'

import { createPlatePlugin } from "platejs/react"
import { FixedToolBar } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar"
import { FixedToolbarButtons } from "@/components/Editor/RichTextEditor/SubComponents/FixedToolBar/FixedToolBarButtons"

export const FixedToolBarKit = [
  createPlatePlugin({
    key: 'fixed-toolbar',
    render: {
      beforeEditable: () => (
        <FixedToolBar>
          <FixedToolbarButtons />
        </FixedToolBar>
      ),
    },
  }),
]
