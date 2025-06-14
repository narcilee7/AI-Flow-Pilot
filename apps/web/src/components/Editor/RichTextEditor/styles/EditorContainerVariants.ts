import { cn } from "@/utils/styleHelper";
import { cva } from "class-variance-authority";



const editorContainerVariants = cva(
  'relative w-full cursor-text overflow-y-auto caret-primary select-text selection:bg-brand/25 focus-visible:outline-none [&_.slate-selection-area]:z-50 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-brand/25 [&_.slate-selection-area]:bg-brand/15',
  // {
  //   defaultVariants: {
  //     variant: 'default',
  //   },
  //   variants: {
  //     variant: {
  //       comment: cn(
  //         'flex flex-wrap justify-between gap-1 px-1 py-0.5 text-sm',
  //         'rounded-md border-[1.5px] border-transparent bg-transparent',
  //         'has-[[data-slate-editor]:focus]:border-brand/50 has-[[data-slate-editor]:focus]:ring-2 has-[[data-slate-editor]:focus]:ring-brand/30',
  //         'has-aria-disabled:border-input has-aria-disabled:bg-muted'
  //       ),
  //       default: 'h-full w-5/6 p-10',
  //       demo: 'h-[650px]',
  //       select: cn(
  //         'group rounded-md border border-input ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
  //         'has-data-readonly:w-fit has-data-readonly:cursor-default has-data-readonly:border-transparent has-data-readonly:focus-within:[box-shadow:none]'
  //       ),
  //     },
  //   },
  // }
);

export {
  editorContainerVariants,
}