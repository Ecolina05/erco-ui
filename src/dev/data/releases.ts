export type ReleaseChange = {
  type: "feature" | "fix" | "breaking"
  text: string
}

export type Release = {
  version: string
  date: string
  summary: string
  changes: ReleaseChange[]
}

export const releases: Release[] = [
  {
    version: "1.0.0",
    date: "2026-08-30",
    summary: "Initial public release of erco-ui.",
    changes: [
      {
        type: "feature",
        text: "Button component with default, outline, secondary, ghost, destructive, link, circle, and circle-outline variants.",
      },
      {
        type: "feature",
        text: "Button loading state with built-in spinner that preserves button dimensions.",
      },
      {
        type: "feature",
        text: "Input, Card, Badge, and Loading components with shadcn-inspired styling.",
      },
      {
        type: "feature",
        text: "Tailwind CSS v4 theme with light and dark mode support via CSS variables.",
      },
      {
        type: "feature",
        text: "ESM and UMD builds with TypeScript declarations and a dedicated style.css export.",
      },
    ],
  },
]
