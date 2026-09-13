import { Button } from "@/components/Button"
import { toast, type ToastPosition } from "@/components/Toast"

import { InlineCode } from "./InlineCode"
import { useToastPagePosition } from "./ToastPageProvider"

const POSITIONS: { id: ToastPosition; label: string }[] = [
  { id: "top-left", label: "Top left" },
  { id: "top-center", label: "Top center" },
  { id: "top-right", label: "Top right" },
  { id: "bottom-left", label: "Bottom left" },
  { id: "bottom-center", label: "Bottom center" },
  { id: "bottom-right", label: "Bottom right" },
]

export function ToastPositionPlayground() {
  const { position, setPosition } = useToastPagePosition()

  return (
    <div className="space-y-4 rounded-2xl border border-dashed border-border bg-muted/20 p-4">
      <p className="text-xs leading-relaxed text-muted-foreground">
        Active position: <InlineCode>{position}</InlineCode>. Select a slot, then
        trigger a toast to see it on screen.
      </p>

      <div className="grid max-w-sm grid-cols-3 gap-2">
        {POSITIONS.map((slot) => (
          <Button
            key={slot.id}
            type="button"
            size="sm"
            variant={position === slot.id ? "default" : "outline"}
            className="h-auto px-2 py-2 text-[11px] leading-tight"
            onClick={() => setPosition(slot.id)}
          >
            {slot.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-border pt-4">
        <Button
          type="button"
          size="sm"
          onClick={() =>
            toast.success(`Success at ${position.replace("-", " ")}`)
          }
        >
          Success
        </Button>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => toast.error(`Error at ${position.replace("-", " ")}`)}
        >
          Error
        </Button>
        <Button
          type="button"
          size="sm"
          variant="secondary"
          onClick={() => toast.info(`Info at ${position.replace("-", " ")}`)}
        >
          Info
        </Button>
      </div>
    </div>
  )
}
