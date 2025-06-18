'use client'

import { CodeBlockPlugin } from "@platejs/code-block/react"
import { all, createLowlight } from "lowlight"



const lowHight = createLowlight(all)

const CodeBlockKit = [
  CodeBlockPlugin.configure({
    node: { component: }
  })
]

export default CodeBlockKit