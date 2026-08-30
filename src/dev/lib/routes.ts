import { components } from "../data/components"

export type RouteId = "getting-started" | "overview" | "releases" | string

export function isComponentRoute(id: string) {
  return components.some((component) => component.id === id)
}

export function parseRouteFromHash(hash: string): RouteId {
  const id = hash.replace(/^#/, "")
  if (!id || id === "overview") return "overview"
  if (id === "getting-started") return "getting-started"
  if (id === "releases") return "releases"
  if (isComponentRoute(id)) return id
  return "overview"
}

export function getNavActiveLink(routeId: RouteId) {
  if (routeId === "getting-started") return "Getting Started"
  if (routeId === "releases") return "Releases"
  if (routeId === "overview" || isComponentRoute(routeId)) return "Components"
  return "Components"
}
