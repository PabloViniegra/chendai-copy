import { cn } from "@/lib/cn";

type SeparatorProps = {
  className?: string;
};

export function Separator({ className }: SeparatorProps) {
  return (
    <hr
      className={cn(
        "stripe-divider relative m-0 w-full border-x border-line",
        className,
      )}
    />
  );
}
