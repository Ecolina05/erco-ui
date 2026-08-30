import { Button } from "@/components/Button"

import { ComponentExample } from "../components/ComponentExample"
import type { ComponentDefinition } from "../data/components"

type ComponentPageProps = {
  component: ComponentDefinition
  onBack: () => void
}

export function ComponentPage({ component, onBack }: ComponentPageProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <section>
        <Button
          variant="link"
          className="mb-4 h-auto p-0 text-muted-foreground"
          onClick={onBack}
        >
          ← All Components
        </Button>

        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          {component.name}
        </h1>
        <p className="mt-2 text-muted-foreground">
          Displays a {component.name.toLowerCase()} or a component that looks like
          a {component.name.toLowerCase()}.
        </p>
      </section>

      <div className="mt-10 space-y-16">
        {component.variants.map((variant) => (
          <ComponentExample key={variant.id} variant={variant} />
        ))}
      </div>
    </div>
  )
}
