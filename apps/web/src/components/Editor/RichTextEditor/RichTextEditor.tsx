'use client'

import type { Value } from 'platejs'
import { Plate, usePlateEditor } from 'platejs/react'
import EditorContainer from './EditorContaner';
import Editor from './Editor';
import BasicMarksKit from './plugins/BasicMarksKit';

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
        ...BasicMarksKit
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