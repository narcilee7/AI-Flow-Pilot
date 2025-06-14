'use client'

import type { Value } from 'platejs'
import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
} from '@platejs/basic-nodes/react'
import { Plate, PlateContent, usePlateEditor } from 'platejs/react'

interface RichTextEditorProps {
  value: Value;
  onChange: (value: Value) => void;
}

const RichTextEditor = (props: RichTextEditorProps) => {
  const {
    value,
    onChange,
  } = props;

  const editor = usePlateEditor(
    {
      plugins: [
        BoldPlugin,
        ItalicPlugin,
        UnderlinePlugin,
      ],
      value,
    }
  );

  const handleContentChange = ({ value }: { value: Value }) => {
    onChange(value);
  }

  return (
    <Plate editor={editor} onChange={handleContentChange}>
    <PlateContent 
      className='w-full h-full'
      placeholder="Enter some text..."
    />
  </Plate>
  )
}

export default RichTextEditor;