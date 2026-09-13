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
    version: "1.1.2",
    date: "2026-09-13",
    summary:
      "Menu dropdowns now render in a portal so they stay above overflow containers like tables.",
    changes: [
      {
        type: "fix",
        text: "MenuContent portals to document.body with fixed positioning so action menus are no longer clipped by parent overflow.",
      },
    ],
  },
  {
    version: "1.1.1",
    date: "2026-09-13",
    summary:
      "Adds Brand lockups for product logos and names, and rounds the erco-ui mark in the docs navbar.",
    changes: [
      {
        type: "feature",
        text: "Brand component: pass the logo as children and the product name with the name prop; the name is rendered to the right with Label typography.",
      },
      {
        type: "feature",
        text: "Brand sizes sm, default, and lg to scale the gap and name label across product lockups.",
      },
      {
        type: "fix",
        text: "erco-ui mark in the playground uses a CSS circle so the logo stays fully round at small sizes.",
      },
    ],
  },
  {
    version: "1.1.0",
    date: "2026-09-13",
    summary:
      "Adds Toast, Menu, Modal, and date/OTP inputs, plus expanded docs and API reference for every exported component.",
    changes: [
      {
        type: "feature",
        text: "Toast notifications with Toaster, success/error/info variants, optional description, configurable position, and duration.",
      },
      {
        type: "feature",
        text: "Menu dropdown with MenuTrigger, MenuContent, MenuItem, MenuSeparator, and MenuShortcut.",
      },
      {
        type: "feature",
        text: "Modal built on the native HTML dialog element with blurred or dim backdrop and xs–lg sizes.",
      },
      {
        type: "feature",
        text: "DatePicker calendar popover, DateInput with fixed DD/MM/YYYY mask, and InputOTP for one-time codes.",
      },
      {
        type: "feature",
        text: "Typography and Label components for consistent headings and accessible form labels.",
      },
      {
        type: "feature",
        text: "Docs playground updates: new component pages, live examples, and unified API Reference tables.",
      },
      {
        type: "fix",
        text: "Modal no longer scrolls the page to the top when closed; scroll position and focus are restored.",
      },
    ],
  },
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
