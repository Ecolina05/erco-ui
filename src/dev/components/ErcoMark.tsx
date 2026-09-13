import { cn } from "@/lib/utils"

type ErcoMarkProps = {
  size?: number
  className?: string
}

export function ErcoMark({ size = 22, className }: ErcoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <circle cx="16" cy="16" r="16" fill="#000000" />
      <path
        d="M5 16 Q9 11.5 13 16 T21 16 T26 16"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
