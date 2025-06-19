'use client'

import * as React from 'react'

import { NodeApi, type TCodeBlockElement } from 'platejs'
import { PlateElement, PlateElementProps, PlateLeafProps, useEditorRef, useElement, useReadOnly } from 'platejs/react'
import { cn } from '@/utils/styleHelper'
import { formatCodeBlock, isLangSupported } from '@platejs/code-block'
import { Button } from '@/components/Button'
import { BracesIcon, Check, CheckIcon, CopyIcon } from 'lucide-react'
import { languages } from './constants'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover'
import { Command, CommandInput, CommandEmpty, CommandList, CommandItem, CommandGroup } from '@/components/Command'
import type { TCodeSyntaxLeaf } from 'platejs'
import { PlateLeaf } from 'platejs/react'

/**
 * 代码块
 * @param props 
 */
function CodeBlockElement(props: PlateElementProps<TCodeBlockElement>) {
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
          {/* 编程语言选择 */}
          <CodeBlockCombobox />
          {/* 复制代码按钮 */}
          <CopyButton
            size="icon"
            variant="ghost"
            className="size-6 gap-1 text-xs text-muted-foreground"
            value={() => NodeApi.string(element)}
          />
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
    () =>
      languages.filter(
        (language) =>
          !searchValue ||
          language.label.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue]
  );

  if (readOnly) return null

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          className="h-6 justify-between gap-1 px-2 text-xs text-muted-foreground select-none"
          aria-expanded={open}
          role="combobox"
        >
          {languages.find((language) => language.value === value)?.label ??
            'Plain Text'}
        </Button>
      </PopoverTrigger> 
      <PopoverContent className='w-[200px] p-0' onCloseAutoFocus={() => setSearchValue('')}>
        <Command shouldFilter={false}>
          {/* 输入命令 */}
          <CommandInput
            className="h-9"
            value={searchValue}
            onValueChange={(value) => setSearchValue(value)}
            placeholder="Search language..."
          />
          {/* 没有找到 */}
          <CommandEmpty>No language found.</CommandEmpty>
          {/* 编程语言列表 */}
          <CommandList className='h-[344px] overflow-y-auto'>
            <CommandGroup heading='Languages'>
              {items.map((language) => (
                <CommandItem
                  key={language.label}
                  className="cursor-pointer"
                  value={language.value}
                  onSelect={(value) => {
                    editorRef.tf.setNodes<TCodeBlockElement>(
                      { lang: value },
                      { at: element }
                    );
                    setSearchValue(value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      value === language.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function CopyButton({
  value,
  ...props
}: { value: (() => string) | string } & Omit<
  React.ComponentProps<typeof Button>,
  'value'
>) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(
    () => {
      const timeout = setTimeout(() => {
        setHasCopied(false)
      }, 2000)
      // 清除计时器
      return () => clearTimeout(timeout)
    },
    [hasCopied]
  )
  
  return (
    <Button
      onClick={() => {
        void navigator.clipboard.writeText(
          typeof value === 'function' ? value() : value
        );
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="!size-3" />
      ) : (
        <CopyIcon className="!size-3" />
      )}
    </Button>
  )
}

function CodeLineElement(props: PlateElementProps) {
  return (
    <PlateElement {...props} />
  )
}

function CodeSyntaxLeaf(props: PlateLeafProps<TCodeSyntaxLeaf>) {
  const tokenClassName = props.leaf.className as string;

  return <PlateLeaf className={tokenClassName} {...props} />;
}

export {
  CodeBlockElement,
  CodeLineElement,
  CodeSyntaxLeaf
}