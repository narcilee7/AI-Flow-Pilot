import { editorVariants } from "@/components/Editor/RichTextEditor/styles/RichEditorVariants";
import { PlateContentProps } from "platejs/react";
import { VariantProps } from "tailwind-variants";

type RichContextEditorProps = PlateContentProps &
VariantProps<typeof editorVariants>;


export type {
  RichContextEditorProps,
}