'use client'

import { TogglePlugin } from "@platejs/toggle/react"
import { IndentKit } from "./IndentKit"
import { ToggleElement } from "../../SubComponents/Toggle"
// 缩进插件和Toggle插件
export const ToggleKit = [
  ...IndentKit,
  TogglePlugin.withComponent(ToggleElement)
]