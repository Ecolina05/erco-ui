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
    summary:
      "Initial release of erco-ui with 12 components, a docs playground, and Tailwind CSS v4 theming.",
    changes: [
      {
        type: "feature",
        text: "Button with default, outline, secondary, ghost, destructive, and link variants, pill shape, sizes, icon mode, and loading state.",
      },
      {
        type: "feature",
        text: "Form components: Input, Textarea, Select, Checkbox, and Switch.",
      },
      {
        type: "feature",
        text: "Card with transparent, default, and secondary surface variants plus composable header, content, and footer sections.",
      },
      {
        type: "feature",
        text: "Avatar with AvatarImage, AvatarFallback, and sm, default, and lg sizes.",
      },
      {
        type: "feature",
        text: "Badge with default, secondary, and outline variants.",
      },
      {
        type: "feature",
        text: "Loading spinner with configurable size.",
      },
      {
        type: "feature",
        text: "Tabs with default, secondary, vertical, and vertical secondary layouts.",
      },
      {
        type: "feature",
        text: "Tailwind CSS v4 theme with light and dark mode support via CSS variables.",
      },
      {
        type: "feature",
        text: "Docs playground with component previews, code snippets, Getting Started, Releases, and All Components overview.",
      },
      {
        type: "feature",
        text: "ESM and UMD builds with TypeScript declarations and a dedicated style.css export.",
      },
    ],
  },
]
