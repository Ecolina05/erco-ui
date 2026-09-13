import { Button } from "@/components/Button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card"

import { CodeBlock } from "../components/CodeBlock"
import { InlineCode } from "../components/InlineCode"

const setupOptions = [
  {
    title: "Install the package",
    description: "Add erco-ui to your project with your preferred package manager.",
  },
  {
    title: "Import the styles",
    description: "Include the Tailwind CSS theme once in your app entry point.",
  },
  {
    title: "Use components",
    description: "Import and render components anywhere in your React app.",
  },
]

const frameworks = ["Next.js", "Vite", "React Router", "Astro"]

type GettingStartedPageProps = {
  onViewComponents: () => void
}

export function GettingStartedPage({ onViewComponents }: GettingStartedPageProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Installation
          </h1>
          <p className="mt-2 text-muted-foreground">
            How to install dependencies and structure your app.
          </p>
        </div>
      </div>

      <section className="mt-8">
        <p className="text-sm text-muted-foreground">
          Choose the setup that matches your starting point.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {setupOptions.map((option) => (
            <Card key={option.title} className="shadow-none">
              <CardHeader className="p-4">
                <CardTitle className="text-sm">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Install the package
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Add erco-ui to your project. React and React DOM are peer dependencies.
        </p>
        <CodeBlock
          commands={{
            pnpm: "pnpm add erco-ui",
            npm: "npm install erco-ui",
            yarn: "yarn add erco-ui",
            bun: "bun add erco-ui",
          }}
        />
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Import the styles
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Import the stylesheet once in your root layout or main entry file.
        </p>
        <CodeBlock code={`import "erco-ui/style.css"`} />
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Use components
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Import components from the package and use them in your app.
        </p>
        <CodeBlock
          code={`import { Button, Input, Card } from "erco-ui"

export function App() {
  return (
    <Card className="max-w-sm p-6">
      <Input placeholder="Email" />
      <Button className="mt-4">Continue</Button>
    </Card>
  )
}`}
        />
        <Button size="sm" onClick={onViewComponents}>
          Browse components
        </Button>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Existing Project
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Install erco-ui, import <InlineCode>erco-ui/style.css</InlineCode> once,
          and use the components. You do not need Tailwind CSS in the host app unless
          you use your own utility classes alongside erco-ui. If the host keeps its
          own tokens and skips <InlineCode>style.css</InlineCode>, import{" "}
          <InlineCode>erco-ui/dialog.css</InlineCode> so Modal stays centered with
          its backdrop.
        </p>
      </section>

      <section className="mt-10 space-y-3 pb-8">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Choose Your Framework
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          erco-ui works with any React framework. Pick the one you are using.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {frameworks.map((framework) => (
            <Button
              key={framework}
              variant="outline"
              className="h-auto justify-start px-4 py-3 font-normal"
            >
              {framework}
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}
