'use client'

import * as React from 'react'

import type { TCodeBlockElement } from 'platejs'
import { PlateElement, PlateElementProps, useEditorRef, useElement, useReadOnly } from 'platejs/react'
import { cn } from '@/utils/styleHelper'
import { formatCodeBlock, isLangSupported } from '@platejs/code-block'
import { Button } from '@/components/Button'
import { BracesIcon } from 'lucide-react'
import { languages } from './constants'

/**
 * 代码块
 * @param props 
 */
export function CodeBlockElement(props: PlateElementProps<TCodeBlockElement>) {
  const { element, editor } = props

  return (
    <PlateElement
      className="py-1 **:[.hljs-addition]:bg-[#f0fff4] **:[.hljs-addition]:text-[#22863a] **:[.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable]:text-[#005cc5] **:[.hljs-built_in,.hljs-symbol]:text-[#e36209] **:[.hljs-bullet]:text-[#735c0f] **:[.hljs-comment,.hljs-code,.hljs-formula]:text-[#6a737d] **:[.hljs-deletion]:bg-[#ffeef0] **:[.hljs-deletion]:text-[#b31d28] **:[.hljs-emphasis]:italic **:[.hljs-keyword,.hljs-doctag,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_]:text-[#d73a49] **:[.hljs-name,.hljs-quote,.hljs-selector-tag,.hljs-selector-pseudo]:text-[#22863a] **:[.hljs-regexp,.hljs-string,.hljs-meta_.hljs-string]:text-[#032f62] **:[.hljs-section]:font-bold **:[.hljs-section]:text-[#005cc5] **:[.hljs-strong]:font-bold **:[.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_]:text-[#6f42c1]"
      {...props}
    >
      <div className='reactive rounded-md bg-muted/50'>
        {/* 核心代码层 */}
        <pre className='overflow-x-auto p-8 pr-4 font-mono text-sm leading-[normal] [tab-size:2] print:break-inside-avoid'>
          <code>{props.children}</code>
        </pre>
        {/* 头部 */}
        <div className='absolute top-1 right-1 z-10 flex gap-0.5 select-none' contentEditable={false}>
          {/* 支持语言 Format Code*/}
          {isLangSupported(element.lang) && (
            <Button
              size="icon"
              variant='ghost'
              className='size-6 text-xs'
              title='Format code'
              onClick={() => formatCodeBlock(editor, { element })}
            >
              <BracesIcon className="!size-3.5 text-muted-foreground" />
            </Button> 
          )}

          <CodeBlockCombobox />
        </div>
      </div>
    </PlateElement>
  )
}

const CodeBlockCombobox = () => {
  const readOnly = useReadOnly()
  const editorRef = useEditorRef()
  const element = useElement<TCodeBlockElement>()

  const value = element.lang || 'plainText'
  // 选中
  const [searchValue, setSearchValue] = React.useState('')
  const [open, setOpen] = React.useState(false)

  const items = React.useMemo(
    () => {
      languages.filter(
        (language) => 
          !searchValue ||
          language.label.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
      )
    },
    [searchValue]
  )

  if (readOnly) return null

  return (
    <Popover></Popover>
  )
}