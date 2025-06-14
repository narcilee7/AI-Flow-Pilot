'use client'
import RichTextEditor from '@/components/Editor/RichTextEditor/RichTextEditor'
import LocalForageHelper from '@/utils/localForageHelper';
import { Value } from 'platejs';
import { useEffect, useState } from 'react'

export default function EditorPage() {
  const [value, setValue] = useState<Value>([]);

  useEffect(() => {
    const fetchValue = async () => {
      const rawValue = await LocalForageHelper.getInstance().getItem('editor-value');
      if (rawValue) {
        setValue(JSON.parse(rawValue as string));
      }
    }
    fetchValue();
  }, [])

  const handleContentChange = (value: Value) => {
    setValue(value);
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className='text-3xl font-bold text-amber-100 mt-10 mb-10'>Resume Editor</h1>
      <RichTextEditor value={value} onChange={handleContentChange} />
    </div>
  )
}