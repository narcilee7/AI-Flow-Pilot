'use client'
import { useMemo, useState } from "react"
import { createEditor, Descendant } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'


const EditorPage = () => {
  const [editor] = useState(() => withReact(createEditor()))

  const initialValue = useMemo(() => {
    const content = localStorage.getItem('content')
    if (content) {
      return JSON.parse(content)
    }
    return [
      {
        type: 'paragraph',
        children: [{ text: 'This is editable text. You can focus it and change it.' }]
      }
    ]
  }, [])

  const handleChange = (value: Descendant[]) => {
    const isAstChange = editor.operations.some(
      op => 'set_selection' !== op.type
    )
    if (isAstChange) {
      const content = JSON.stringify(value)
      localStorage.setItem('content', content)
    }
  }

  return (
    <Slate editor={editor} initialValue={initialValue} onChange={handleChange}>
      <Editable />
    </Slate>
  )
}

export default EditorPage