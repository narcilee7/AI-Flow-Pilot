'use client'

import type { Value } from 'platejs'
import { Plate, usePlateEditor } from 'platejs/react'
import EditorContainer from './EditorContaner';
import Editor from './Editor';
import EditorKit from './EditorKit';

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
        ...EditorKit, // 基础标记插件
      ],
      value,
    }
  );

  const handleContentChange = ({ value }: { value: Value }) => {
    onChange(value);
  }

  return (
    <Plate editor={editor} onChange={handleContentChange}>
      <EditorContainer className='w-5/6 h-full p-10'>
        <Editor variant="default"
          placeholder="Enter some text..."
        />
      </EditorContainer>
  </Plate>
  )
}

export default RichTextEditor;