import { ArrowRight } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import { cn } from "@/lib/utils"

import { getOverviewPreview } from "../data/components"
import type { ComponentDefinition } from "../data/components"

type ComponentOverviewCardProps = {
  component: ComponentDefinition
  onSelect: (id: string) => void
}

export function ComponentOverviewCard({
  component,
  onSelect,
}: ComponentOverviewCardProps) {
  const preview = getOverviewPreview(component)

  return (
    <button
      type="button"
      onClick={() => onSelect(component.id)}
      className={cn(
        "group h-full w-full rounded-lg text-left",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      )}
    >
      <Card className="flex h-full flex-col overflow-hidden shadow-none transition-colors group-hover:bg-muted/20">
        <CardContent className="flex h-[180px] shrink-0 items-center justify-center bg-muted/30 p-6">
          {preview}
        </CardContent>
        <CardHeader className="mt-auto border-t py-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-sm">{component.name}</CardTitle>
              <CardDescription>{component.categoryLabel}</CardDescription>
            </div>
            <ArrowRight
              size={16}
              aria-hidden
              className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
            />
          </div>
        </CardHeader>
      </Card>
    </button>
  )
}
