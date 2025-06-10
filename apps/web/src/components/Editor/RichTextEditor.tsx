"use client";
import { useState } from 'react';
import { toast } from 'sonner';
import { RichTextData } from '@/types/editor';

export function RichTextEditor({ data, setData }: { data: RichTextData; setData: (data: RichTextData) => void }) {
  const [content, setContent] = useState(data.content);

  const handleSave = () => {
    setData({
      content,
      history: [...data.history, content]
    });
    toast.success('Content saved');
  };

  const handleUndo = () => {
    if (data.history.length > 0) {
      const lastContent = data.history[data.history.length - 1];
      setContent(lastContent);
      setData({
        content: lastContent,
        history: data.history.slice(0, -1)
      });
      toast('Undo successful');
    } else {
      toast.error('No history to undo');
    }
  };

  return (
    <div className="container mx-auto mt-8 max-w-4xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Rich Text Editor</h2>
      <div className="mb-4 flex space-x-2">
        <button className="rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300">
          <i className="fa-solid fa-bold"></i>
        </button>
        <button className="rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300">
          <i className="fa-solid fa-italic"></i>
        </button>
        <button className="rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300">
          <i className="fa-solid fa-underline"></i>
        </button>
        <button className="rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300">
          <i className="fa-solid fa-list-ul"></i>
        </button>
        <button className="rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300">
          <i className="fa-solid fa-image"></i>
        </button>
        <button className="rounded-md bg-gray-200 px-3 py-1 text-sm hover:bg-gray-300">
          <i className="fa-solid fa-table"></i>
        </button>
      </div>
      <div
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
        className="min-h-64 w-full rounded-md border border-gray-300 p-4 focus:border-blue-500 focus:outline-none"
      />
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleSave}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Save
        </button>
        <button
          onClick={handleUndo}
          className="rounded-md bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          Undo
        </button>
      </div>
    </div>
  );
}