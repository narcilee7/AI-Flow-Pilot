"use client";

import { useEditor } from '@/hooks/useEditor';
import { EditorNav } from '@/components/Editor/EditorNav';
import { FormEditor } from '@/components/Editor/FormEditor';
import { MarkdownEditor } from '@/components/Editor/MarkdownEditor';
import { RichTextEditor } from '@/components/Editor/RichTextEditor';
import { CanvasEditor } from '@/components/Editor/CanvasEditor';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const {
    activeEditor,
    switchEditor,
    formData,
    setFormData,
    markdownData,
    setMarkdownData,
    richTextData,
    setRichTextData,
    canvasData,
    setCanvasData
  } = useEditor();

  const renderEditor = () => {
    switch (activeEditor) {
      case 'form':
        return <FormEditor data={formData} setData={setFormData} />;
      case 'markdown':
        return <MarkdownEditor data={markdownData} setData={setMarkdownData} />;
      case 'richtext':
        return <RichTextEditor data={richTextData} setData={setRichTextData} />;
      case 'canvas':
        return <CanvasEditor data={canvasData} setData={setCanvasData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EditorNav activeEditor={activeEditor} onEditorTypeChange={switchEditor} />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeEditor}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="pb-8"
        >
          {renderEditor()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
