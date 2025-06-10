"use client";

import { EditorType } from '@/types/editor';
import { motion } from 'framer-motion';
import { cn } from '@/utils/styleHelper';

interface EditorNavProps {
  activeEditor: EditorType;
  onEditorTypeChange: (mode: EditorType) => void;
}

export function EditorNav({ activeEditor, onEditorTypeChange }: EditorNavProps) {
  const editorTypes: EditorType[] = ['form', 'markdown', 'richtext', 'canvas'];
  const editorLabels = {
    form: 'Form',
    markdown: 'Markdown',
    richtext: 'Rich Text',
    canvas: 'Canvas'
  };

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-xl font-medium text-gray-800">Multi Editor</h1>
          <div className="flex space-x-6">
            {editorTypes.map((type) => (
              <button
                key={type}
                onClick={() => onEditorTypeChange(type)}
                className={cn(
                  'relative px-1 py-2 text-gray-600 transition-colors hover:text-blue-700',
                  activeEditor === type && 'text-blue-700'
                )}
              >
                {editorLabels[type]}
                {activeEditor === type && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-700"
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
