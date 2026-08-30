import { categories } from "../data/components"
import { ComponentOverviewCard } from "../components/ComponentOverviewCard"

type OverviewPageProps = {
  onSelectComponent: (id: string) => void
}

export function OverviewPage({ onSelectComponent }: OverviewPageProps) {
  return (
    <div className="mx-auto max-w-5xl">
      <section>
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          All Components
        </h1>
        <p className="mt-2 text-muted-foreground">
          Explore the full list of components available in the library.
        </p>
      </section>

      <div className="mt-8 space-y-10">
        {categories.map((category) => (
          <section key={category.id}>
            <h2 className="mb-4 text-lg font-semibold tracking-tight">
              {category.label}
            </h2>
            <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {category.components.map((component) => (
                <ComponentOverviewCard
                  key={component.id}
                  component={component}
                  onSelect={onSelectComponent}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
