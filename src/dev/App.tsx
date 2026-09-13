import { useEffect, useState } from "react"

import { getComponentById } from "./data/components"
import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"
import { ComponentPage } from "./pages/ComponentPage"
import { GettingStartedPage } from "./pages/GettingStartedPage"
import { OverviewPage } from "./pages/OverviewPage"
import { ReleasesPage } from "./pages/ReleasesPage"
import { isComponentRoute, parseRouteFromHash } from "./lib/routes"

export function App() {
  const [dark, setDark] = useState(false)
  const [activeId, setActiveId] = useState(() =>
    parseRouteFromHash(window.location.hash)
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  useEffect(() => {
    function handleHashChange() {
      setActiveId(parseRouteFromHash(window.location.hash))
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const activeComponent = getComponentById(activeId)
  const isGettingStarted = activeId === "getting-started"
  const isReleases = activeId === "releases"

  function navigateTo(id: string) {
    const nextHash = id === "overview" ? "#overview" : `#${id}`

    setActiveId(id)
    window.scrollTo({ top: 0, behavior: "smooth" })

    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        activeId={activeId}
        onToggleTheme={() => setDark((value) => !value)}
        onNavigate={navigateTo}
      />

      <div className="mx-auto flex max-w-7xl px-4 lg:px-8">
        <Sidebar activeId={activeId} onNavigate={navigateTo} />

        <main className="min-w-0 flex-1 py-8 lg:py-10 lg:pl-8">
          {isGettingStarted ? (
            <GettingStartedPage onViewComponents={() => navigateTo("overview")} />
          ) : isReleases ? (
            <ReleasesPage />
          ) : activeId === "overview" ? (
            <OverviewPage onSelectComponent={navigateTo} />
          ) : isComponentRoute(activeId) && activeComponent ? (
            <ComponentPage
              component={activeComponent}
              onBack={() => navigateTo("overview")}
            />
          ) : (
            <OverviewPage onSelectComponent={navigateTo} />
          )}
        </main>
      </div>
    </div>
  )
}
