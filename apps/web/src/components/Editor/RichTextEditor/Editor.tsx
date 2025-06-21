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
        className={cn(
          editorVariants({
            disabled, 
            focused,
            variant,
          }),
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