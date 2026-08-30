import { useState } from "react"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card"

import { SyntaxCode } from "./SyntaxCode"
import type { ComponentVariant } from "../data/components"

type ComponentExampleProps = {
  variant: ComponentVariant
}

export function ComponentExample({ variant }: ComponentExampleProps) {
  const [showCode, setShowCode] = useState(true)

  return (
    <section id={variant.id} className="scroll-mt-24 space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold tracking-tight">{variant.label}</h3>
        {variant.description ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            {variant.description}
          </p>
        ) : null}
      </div>

      <Card className="overflow-hidden shadow-none">
        <div className="flex min-h-[280px] items-center justify-center p-10">
          {variant.preview}
        </div>

        <div className="relative border-t">
          <Button
            variant="outline"
            size="sm"
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background"
            onClick={() => setShowCode((value) => !value)}
          >
            {showCode ? "Hide Code" : "View Code"}
          </Button>

          {showCode ? <SyntaxCode code={variant.code} /> : null}
        </div>
      </Card>
    </section>
  )
}
