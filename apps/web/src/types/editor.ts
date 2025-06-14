export type EditorType = "form" | "markdown" | "richtext" | "canvas";

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select';
  required: boolean;
  value: any;
  options?: string[];
}

export interface FormData {
  fields: FormField[];
}

export interface MarkdownData {
  raw: string;
  html: string;
}

export interface RichTextData {
  content: string;
  history: string[];
}

export interface CanvasElement {
  type: 'line' | 'rect' | 'circle' | 'text';
  props: any;
}

export interface CanvasData {
  elements: CanvasElement[];
  layers: string[];
}
