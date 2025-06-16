import { editorVariants } from "@/components/Editor/RichTextEditor/styles/RichEditorVariants";
import { cn } from "@/utils/styleHelper";
import { PlateContent } from "platejs/react";
import React from "react";
import type { RichContextEditorProps } from "@/components/Editor/RichTextEditor/types/RichContextEditorProps";


const Editor = React.forwardRef<HTMLDivElement, RichContextEditorProps>(
  ({ className, disabled, focused, variant, ...props }, ref) => {
    return (
      <PlateContent
        ref={ref}
        // className={cn(
        //   editorVariants({
        //     disabled, 
        //     focused,
        //     variant,
        //   }),
        //   className
        // )}
        className={cn(
          'relative overflow-x-hidden break-words select-text w-full h-full border-none bg-transparent text-sm focus:outline-none rounded-e-md ring-offset-background',
          className
        )}
        disabled={disabled}
        disableDefaultStyles
        {...props}
      />
    );
  }
);

export default Editor;