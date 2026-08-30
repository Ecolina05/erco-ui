import { categories } from "../data/components"
import { SidebarLink } from "./SidebarLink"

type SidebarProps = {
  activeId: string
  onNavigate: (id: string) => void
}

export function Sidebar({ activeId, onNavigate }: SidebarProps) {
  const isGettingStarted = activeId === "getting-started"
  const isReleases = activeId === "releases"

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6 pr-4">
        <div className="space-y-6">
          <div>
            <p className="mb-2 px-2 text-sm font-medium">Get Started</p>
            <SidebarLink
              active={isGettingStarted}
              onClick={() => onNavigate("getting-started")}
            >
              Installation
            </SidebarLink>
            <SidebarLink
              active={isReleases}
              onClick={() => onNavigate("releases")}
            >
              Releases
            </SidebarLink>
          </div>

          <div>
            <p className="mb-2 px-2 text-sm font-medium">Components</p>
            <SidebarLink
              active={activeId === "overview"}
              onClick={() => onNavigate("overview")}
            >
              All Components
            </SidebarLink>

            {categories.map((category) => (
              <div key={category.id} className="mt-4">
                <p className="mb-1 px-2 text-xs font-medium text-muted-foreground">
                  {category.label}
                </p>
                <ul className="space-y-0.5">
                  {category.components.map((component) => (
                    <li key={component.id}>
                      <SidebarLink
                        active={activeId === component.id}
                        onClick={() => onNavigate(component.id)}
                      >
                        {component.name}
                      </SidebarLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}
