'use client'

import * as React from 'react'

import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu'

import { MarkdownPlugin } from '@platejs/markdown'
import { ArrowUpToLineIcon } from 'lucide-react'
import { getEditorDOMFromHtmlString } from 'platejs'
import { useEditorRef } from 'platejs/react'
import { useFilePicker } from 'use-file-picker'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/DropdownMenu'
import { ToolbarButton } from '@/components/ToolBar'

type ImportType = 'html' | 'markdown'

export function ImportToolbarButton(props: DropdownMenuProps) {
  const editorRef = useEditorRef()
  const [open, setOpen] = React.useState(false)

  const getFileNodes = (text: string, type: ImportType) => {
    switch (type) {
      case 'html':
        const editorNode = getEditorDOMFromHtmlString(text)
        return editorRef.api.html.deserialize({
          element: editorNode
        })
      case 'markdown':
        return editorRef.getApi(MarkdownPlugin).markdown.deserialize(text)
      default:
        return []
    }
  }

  const { openFilePicker: openMdFilePicker } = useFilePicker({
    accept: ['.md', 'mdx'],
    multiple: false,
    onFilesSelected: async (data: any) => {
      if (data.plainFiles && data.plainFiles.length > 0) {
        const text = await data.plainFiles[0].text()
        const nodes = getFileNodes(text, 'markdown')
        editorRef.tf.insertNodes(nodes)
      }
    },
  })

  const { openFilePicker: openHtmlFilePicker } = useFilePicker({
    accept: ['text/html'],
    multiple: false,
    onFilesSelected: async (data: any) => {
      if (data.plainFiles && data.plainFiles.length > 0) {
        const text = await data.plainFiles[0].text()
        const nodes = getFileNodes(text, 'html')
        editorRef.tf.insertNodes(nodes)
      }
    }
  })

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false} {...props}>
      <DropdownMenuTrigger asChild>
        <ToolbarButton pressed={open} tooltip='Import' isDropdown>
          <ArrowUpToLineIcon className='size-4'/>
        </ToolbarButton>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align='start'>
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => { openMdFilePicker() }}>
            导入Markdown
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => { openHtmlFilePicker() }}>
            导入HTML
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}