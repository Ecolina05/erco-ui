import { cn } from "@/lib/utils"

type InlineCodeProps = {
  children: React.ReactNode
}

export function InlineCode({ children }: InlineCodeProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] text-foreground"
      )}
    >
      {children}
    </code>
  )
}
