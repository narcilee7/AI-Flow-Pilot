import { cn } from "@/utils/styleHelper";
import { PlateContainer } from "platejs/react";
import { VariantProps } from "tailwind-variants";
import { editorContainerVariants } from "./styles/EditorContainerVariants";

export function EditorContainer({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof editorContainerVariants>) {
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