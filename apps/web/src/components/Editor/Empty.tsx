import { toast } from "sonner";
import { cn } from "@/utils/styleHelper";

// Empty component
export function Empty() {
  return (
    <div className={cn("flex h-full items-center justify-center")} onClick={() => toast('Coming soon')}>Empty</div>
  );
}