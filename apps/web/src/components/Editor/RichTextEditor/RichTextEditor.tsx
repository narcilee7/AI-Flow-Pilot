'use client'

import type { Value } from 'platejs'
import { Plate, usePlateEditor } from 'platejs/react'
import EditorContainer from './EditorContaner'
import Editor from './Editor'
import EditorKit from './EditorKit'

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
        ...EditorKit,
      ],
      value,
    }
  );

  const handleContentChange = ({ value }: { value: Value }) => {
    onChange(value);
  }

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant="demo" />
      </EditorContainer>
      {/* <SettingsDIalog /> */}
    </Plate>
  )
}

export default RichTextEditor;
