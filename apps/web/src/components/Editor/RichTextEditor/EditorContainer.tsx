import { cn } from "@/utils/styleHelper";
import { PlateContainer } from "platejs/react";
import { VariantProps } from "tailwind-variants";
import { editorContainerVariants } from "./styles/EditorContainerVariants";
import React from "react";

type EditorContainerProps = React.ComponentProps<'div'> & VariantProps<typeof editorContainerVariants>

const EditorContainer = ({ className, variant, ...props }: EditorContainerProps) => {
  return (
    <PlateContainer
      className={cn(
        'ignore-click-outside/toolbar',
        editorContainerVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}

export default EditorContainer;
