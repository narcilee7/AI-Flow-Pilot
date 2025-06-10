"use client";
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { toast } from 'sonner';
import { MarkdownData } from '@/types/editor';

interface MarkdownEditorProps {
  data: MarkdownData;
  setData: (data: MarkdownData) => void;
}

export function MarkdownEditor({ data, setData }: MarkdownEditorProps) {
  const [raw, setRaw] = useState(data.raw);

  const handleExportHTML = () => {
    toast.success('HTML exported (check console)');
    console.log('HTML content:', raw);
  };

  const handleExportPDF = () => {
    toast.success('PDF exported (check console)');
    console.log('PDF content:', raw);
  };

  return (
    <div className="container mx-auto mt-8 max-w-6xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Markdown Editor</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Editor</label>
          <textarea
            value={raw}
            onChange={(e) => setRaw(e.target.value)}
            className="h-96 w-full rounded-md border border-gray-300 p-4 font-mono text-sm focus:border-blue-500 focus:outline-none"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleExportHTML}
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Export HTML
            </button>
            <button
              onClick={handleExportPDF}
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Export PDF
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Preview</label>
          <div className="prose h-96 max-w-none overflow-auto rounded-md border border-gray-300 p-4">
            <ReactMarkdown>{raw}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
