import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/Button"
import { cn } from "@/lib/utils"

import { getNavActiveLink } from "../lib/routes"

type NavbarProps = {
  dark: boolean
  activeId: string
  onToggleTheme: () => void
  onNavigate: (id: string) => void
}

const navLinks = [
  { label: "Getting Started", id: "getting-started" },
  { label: "Components", id: "overview" },
  { label: "Releases", id: "releases" },
]

export function Navbar({
  dark,
  activeId,
  onToggleTheme,
  onNavigate,
}: NavbarProps) {
  const activeLink = getNavActiveLink(activeId)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4 lg:px-8">
        <Button
          variant="ghost"
          className="h-auto px-0 font-semibold hover:bg-transparent"
          onClick={() => onNavigate("overview")}
        >
          erco-ui
        </Button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="sm"
              onClick={() => onNavigate(link.id)}
              className={cn(
                activeLink === link.label
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>
      </div>
    </header>
  )
}
