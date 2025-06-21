"use client";
import { useState } from 'react';
import { EditorType, FormData, MarkdownData, RichTextData, CanvasData } from '@/types/editor';

export function useEditor() {
  const [activeEditor, setActiveEditor] = useState<EditorType>('form');

  // Mock data for each editor
  const [formData, setFormData] = useState<FormData>({
    fields: [
      { id: '1', label: 'Name', type: 'text', required: true, value: '' },
      { id: '2', label: 'Age', type: 'number', required: false, value: null },
      { id: '3', label: 'Birthday', type: 'date', required: false, value: null }
    ]
  });

  const [markdownData, setMarkdownData] = useState<MarkdownData>({
    raw: '# Hello World\n\nThis is a **markdown** editor',
    html: ''
  });

  const [richTextData, setRichTextData] = useState<RichTextData>({
    content: '<p>Start editing here...</p>',
    history: []
  });

  const [canvasData, setCanvasData] = useState<CanvasData>({
    elements: [],
    layers: ['Layer 1']
  });

  const switchEditor = (type: EditorType) => {
    setActiveEditor(type);
  };

  return {
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
  };
}
