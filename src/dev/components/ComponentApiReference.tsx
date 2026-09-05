import type { ComponentApiDefinition } from "../data/component-api"

type ComponentApiReferenceProps = {
  api: ComponentApiDefinition
}

function PropCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
      {children}
    </code>
  )
}

export function ComponentApiReference({ api }: ComponentApiReferenceProps) {
  const componentNames = [...new Set(api.props.map((prop) => prop.component))]
  const showComponentColumn = componentNames.length > 1

  return (
    <section className="mt-20 border-t pt-10 pb-8">
      <h2 className="scroll-m-20 text-xl font-bold tracking-tight">
        API Reference
      </h2>
      {api.description ? (
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {api.description}
        </p>
      ) : null}

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b text-left">
              {showComponentColumn ? (
                <th className="pb-2 pr-4 font-medium text-foreground">
                  Component
                </th>
              ) : null}
              <th className="pb-2 pr-4 font-medium text-foreground">Prop</th>
              <th className="pb-2 pr-4 font-medium text-foreground">Type</th>
              <th className="pb-2 font-medium text-foreground">Default</th>
            </tr>
          </thead>
          <tbody>
            {api.props.map((prop) => (
              <tr
                key={`${prop.component}-${prop.name}`}
                className="border-b border-border/60"
              >
                {showComponentColumn ? (
                  <td className="py-2.5 pr-4 align-top text-muted-foreground">
                    <PropCode>{prop.component}</PropCode>
                  </td>
                ) : null}
                <td className="py-2.5 pr-4 align-top">
                  <PropCode>{prop.name}</PropCode>
                </td>
                <td className="py-2.5 pr-4 align-top font-mono text-muted-foreground">
                  {prop.type}
                </td>
                <td className="py-2.5 align-top text-muted-foreground">
                  {prop.default ? (
                    <PropCode>{prop.default}</PropCode>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
