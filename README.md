# erco-ui

Minimal React component library with Tailwind CSS v4 styles precompiled for consumers.

## Install

You only need **React** in your app plus this package:

```bash
pnpm add erco-ui
# npm install erco-ui
# yarn add erco-ui
```

Peer dependencies: `react` and `react-dom` (^18 or ^19).

Runtime helpers used by TypeScript definitions (`clsx`, `class-variance-authority`) are installed automatically as dependencies of `erco-ui`. Icons and other build-time utilities are bundled into the published JS — you do not install `lucide-react` or Tailwind in the host app unless you want them for your own code.

## Setup

1. Import the stylesheet once (layout, main, or `_app`):

```ts
import "erco-ui/style.css"
```

2. Use components:

```tsx
import { Button, Input, Label } from "erco-ui"

export function App() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
      <Button>Continue</Button>
    </div>
  )
}
```

You do **not** need to configure Tailwind CSS in the host project for erco-ui components to look correct, as long as you import `erco-ui/style.css`.

## Publish to npm (maintainers)

1. Log in: `npm login`
2. Ensure the package name `erco-ui` is available or use a scope (`@your-org/erco-ui`).
3. Bump version in `package.json` when releasing.
4. Run `pnpm build` (also runs on `npm publish` via `prepublishOnly`).
5. Publish: `npm publish --access public` (required for scoped packages).

## Development

```bash
pnpm install
pnpm dev      # docs playground
pnpm build    # dist/ for npm
```

## License

ISC
