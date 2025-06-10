"use client";

import { useState } from 'react';
import { toast } from 'sonner';
import { CanvasData, CanvasElement } from '@/types/editor';

export function CanvasEditor({ data, setData }: { data: CanvasData; setData: (data: CanvasData) => void }) {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [history, setHistory] = useState<CanvasData[]>([]);

  const handleAddElement = (type: 'line' | 'rect' | 'circle' | 'text') => {
    const newElement: CanvasElement = {
      type,
      props: {
        x: Math.random() * 300,
        y: Math.random() * 300,
        width: type === 'rect' ? 100 : undefined,
        height: type === 'rect' ? 60 : undefined,
        radius: type === 'circle' ? 30 : undefined,
        text: type === 'text' ? 'Sample Text' : undefined,
        stroke: '#4a6fa5',
        fill: type === 'text' ? '#4a6fa5' : 'transparent'
      }
    };

    setHistory([...history, data]);
    setData({
      ...data,
      elements: [...data.elements, newElement]
    });
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const prevState = history[history.length - 1];
      setData(prevState);
      setHistory(history.slice(0, -1));
      toast('Undo successful');
    } else {
      toast.error('No history to undo');
    }
  };

  const handleExport = (type: 'png' | 'svg') => {
    toast.success(`${type.toUpperCase()} exported (check console)`);
    console.log(`${type.toUpperCase()} content:`, data);
  };

  return (
    <div className="container mx-auto mt-8 max-w-6xl rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-2xl font-semibold text-gray-800">Canvas Editor</h2>
      <div className="flex space-x-4">
        <div className="w-48 space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-700">Tools</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleAddElement('line')}
                className="rounded-md bg-gray-200 p-2 hover:bg-gray-300"
              >
                <i className="fa-solid fa-slash"></i> Line
              </button>
              <button
                onClick={() => handleAddElement('rect')}
                className="rounded-md bg-gray-200 p-2 hover:bg-gray-300"
              >
                <i className="fa-solid fa-square"></i> Rect
              </button>
              <button
                onClick={() => handleAddElement('circle')}
                className="rounded-md bg-gray-200 p-2 hover:bg-gray-300"
              >
                <i className="fa-solid fa-circle"></i> Circle
              </button>
              <button
                onClick={() => handleAddElement('text')}
                className="rounded-md bg-gray-200 p-2 hover:bg-gray-300"
              >
                <i className="fa-solid fa-font"></i> Text
              </button>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-gray-700">Layers</h3>
            <div className="space-y-1">
              {data.layers.map((layer) => (
                <div key={layer} className="flex items-center">
                  <input type="checkbox" defaultChecked className="mr-2" />
                  <span>{layer}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleUndo}
              className="rounded-md bg-gray-600 px-3 py-1 text-white hover:bg-gray-700"
            >
              Undo
            </button>
            <button
              onClick={() => handleExport('png')}
              className="rounded-md bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
            >
              PNG
            </button>
            <button
              onClick={() => handleExport('svg')}
              className="rounded-md bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
            >
              SVG
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="h-96 w-full rounded-md border border-gray-300 bg-gray-50">
            {data.elements.length === 0 ? (
              <div className="flex h-full items-center justify-center text-gray-400">
                Click tools to add elements
              </div>
            ) : (
              <svg width="100%" height="100%">
                {data.elements.map((element, index) => {
                  switch (element.type) {
                    case 'line':
                      return (
                        <line
                          key={index}
                          x1={element.props.x}
                          y1={element.props.y}
                          x2={element.props.x + 100}
                          y2={element.props.y}
                          stroke={element.props.stroke}
                          strokeWidth="2"
                        />
                      );
                    case 'rect':
                      return (
                        <rect
                          key={index}
                          x={element.props.x}
                          y={element.props.y}
                          width={element.props.width}
                          height={element.props.height}
                          stroke={element.props.stroke}
                          strokeWidth="2"
                          fill="transparent"
                        />
                      );
                    case 'circle':
                      return (
                        <circle
                          key={index}
                          cx={element.props.x}
                          cy={element.props.y}
                          r={element.props.radius}
                          stroke={element.props.stroke}
                          strokeWidth="2"
                          fill="transparent"
                        />
                      );
                    case 'text':
                      return (
                        <text
                          key={index}
                          x={element.props.x}
                          y={element.props.y}
                          fill={element.props.fill}
                          fontSize="16"
                        >
                          {element.props.text}
                        </text>
                      );
                    default:
                      return null;
                  }
                })}
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
