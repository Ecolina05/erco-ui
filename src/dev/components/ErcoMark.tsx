import { cn } from "@/lib/utils"

type MarkProps = {
  size?: number
  className?: string
}

export function ErcoMark({ size = 22, className }: MarkProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 overflow-hidden rounded-full bg-foreground",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        className="size-full"
      >
        <path
          d="M5 16 Q9 11.5 13 16 T21 16 T26 16"
          className="stroke-background"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

