import type { ReactNode } from "react"
import { Search } from "lucide-react"

import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import { Checkbox } from "@/components/Checkbox"
import { Input } from "@/components/Input"
import { Loading } from "@/components/Loading"

import { InlineCode } from "../components/InlineCode"

export type ComponentVariant = {
  id: string
  label: string
  description?: ReactNode
  preview: ReactNode
  code: string
}

export type ComponentDefinition = {
  id: string
  name: string
  categoryId: string
  categoryLabel: string
  overviewPreview?: ReactNode
  variants: ComponentVariant[]
}

export type ComponentCategory = {
  id: string
  label: string
  components: ComponentDefinition[]
}

export const components: ComponentDefinition[] = [
  {
    id: "button",
    name: "Button",
    categoryId: "buttons",
    categoryLabel: "Buttons",
    variants: [
      {
        id: "button-default",
        label: "Default",
        description: "The default button style.",
        preview: <Button>Button</Button>,
        code: `import { Button } from "erco-ui"

export function ButtonDemo() {
  return <Button>Button</Button>
}`,
      },
      {
        id: "button-outline",
        label: "Outline",
        description: (
          <>
            Use the <InlineCode>variant="outline"</InlineCode> prop for a bordered
            button.
          </>
        ),
        preview: <Button variant="outline">Outline</Button>,
        code: `import { Button } from "erco-ui"

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}`,
      },
      {
        id: "button-secondary",
        label: "Secondary",
        description: (
          <>
            Use the <InlineCode>variant="secondary"</InlineCode> prop for a muted
            style.
          </>
        ),
        preview: <Button variant="secondary">Secondary</Button>,
        code: `import { Button } from "erco-ui"

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}`,
      },
      {
        id: "button-ghost",
        label: "Ghost",
        description: (
          <>
            Use the <InlineCode>variant="ghost"</InlineCode> prop for a button
            without background.
          </>
        ),
        preview: <Button variant="ghost">Ghost</Button>,
        code: `import { Button } from "erco-ui"

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>
}`,
      },
      {
        id: "button-destructive",
        label: "Destructive",
        description: (
          <>
            Use the <InlineCode>variant="destructive"</InlineCode> prop for
            destructive actions.
          </>
        ),
        preview: <Button variant="destructive">Destructive</Button>,
        code: `import { Button } from "erco-ui"

export function ButtonDestructive() {
  return <Button variant="destructive">Destructive</Button>
}`,
      },
      {
        id: "button-link",
        label: "Link",
        description: (
          <>
            Use the <InlineCode>variant="link"</InlineCode> prop for a link-style
            button.
          </>
        ),
        preview: <Button variant="link">Link</Button>,
        code: `import { Button } from "erco-ui"

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}`,
      },
      {
        id: "button-circle",
        label: "Circle",
        description: (
          <>
            Use the <InlineCode>variant="circle"</InlineCode> prop for pill-shaped
            buttons, like Apple marketing CTAs.
          </>
        ),
        preview: (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="circle">Learn more</Button>
            <Button variant="circle-outline">Buy now</Button>
          </div>
        ),
        code: `import { Button } from "erco-ui"

export function ButtonCircle() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="circle">Learn more</Button>
      <Button variant="circle-outline">Buy now</Button>
    </div>
  )
}`,
      },
      {
        id: "button-sizes",
        label: "Size",
        description: (
          <>
            Use the <InlineCode>size</InlineCode> prop to change the size of the
            button.
          </>
        ),
        preview: (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        ),
        code: `import { Button } from "erco-ui"

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}`,
      },
      {
        id: "button-loading",
        label: "Loading",
        description: (
          <>
            Use the <InlineCode>loading</InlineCode> prop to disable the button
            and show a spinner while keeping its size.
          </>
        ),
        preview: (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button loading size="sm">
              Save
            </Button>
            <Button loading>Submit</Button>
            <Button loading size="lg">
              Continue
            </Button>
          </div>
        ),
        code: `import { Button } from "erco-ui"

export function ButtonLoading() {
  return (
    <>
      <Button loading size="sm">Save</Button>
      <Button loading>Submit</Button>
      <Button loading size="lg">Continue</Button>
    </>
  )
}`,
      },
      {
        id: "button-icon",
        label: "Icon",
        description: (
          <>
            Use <InlineCode>size="icon"</InlineCode> for icon buttons. Combine with{" "}
            <InlineCode>variant="circle"</InlineCode> for a perfect circle.
          </>
        ),
        preview: (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="icon" aria-label="Search">
              <Search />
            </Button>
            <Button variant="circle" size="icon" aria-label="Search">
              <Search />
            </Button>
            <Button variant="circle-outline" size="icon" aria-label="Search">
              <Search />
            </Button>
          </div>
        ),
        code: `import { Search } from "lucide-react"
import { Button } from "erco-ui"

export function ButtonIcon() {
  return (
    <div className="flex items-center gap-3">
      <Button size="icon" aria-label="Search">
        <Search />
      </Button>
      <Button variant="circle" size="icon" aria-label="Search">
        <Search />
      </Button>
      <Button variant="circle-outline" size="icon" aria-label="Search">
        <Search />
      </Button>
    </div>
  )
}`,
      },
    ],
  },
  {
    id: "input",
    name: "Input",
    categoryId: "forms",
    categoryLabel: "Forms",
    variants: [
      {
        id: "input-default",
        label: "Default",
        description: "A basic text input field.",
        preview: (
          <Input className="max-w-sm" placeholder="Enter your email" type="email" />
        ),
        code: `import { Input } from "erco-ui"

export function InputDemo() {
  return <Input type="email" placeholder="Enter your email" />
}`,
      },
      {
        id: "input-disabled",
        label: "Disabled",
        description: (
          <>
            Use the <InlineCode>disabled</InlineCode> prop to disable the input.
          </>
        ),
        preview: (
          <Input className="max-w-sm" disabled placeholder="Disabled input" />
        ),
        code: `import { Input } from "erco-ui"

export function InputDisabled() {
  return <Input disabled placeholder="Disabled input" />
}`,
      },
    ],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    categoryId: "forms",
    categoryLabel: "Forms",
    overviewPreview: (
      <Checkbox defaultChecked className="pointer-events-none">
        Accept terms
      </Checkbox>
    ),
    variants: [
      {
        id: "checkbox-default",
        label: "Default",
        description: "A control that toggles between checked and unchecked states.",
        preview: (
          <Checkbox defaultChecked>Accept terms and conditions</Checkbox>
        ),
        code: `import { Checkbox } from "erco-ui"

export function CheckboxDemo() {
  return <Checkbox defaultChecked>Accept terms and conditions</Checkbox>
}`,
      },
      {
        id: "checkbox-disabled",
        label: "Disabled",
        description: (
          <>
            Use the <InlineCode>disabled</InlineCode> prop to disable the
            checkbox.
          </>
        ),
        preview: (
          <div className="flex flex-col gap-3">
            <Checkbox disabled>Accept terms and conditions</Checkbox>
            <Checkbox disabled defaultChecked>
              Accept terms and conditions
            </Checkbox>
          </div>
        ),
        code: `import { Checkbox } from "erco-ui"

export function CheckboxDisabled() {
  return (
    <>
      <Checkbox disabled>Accept terms and conditions</Checkbox>
      <Checkbox disabled defaultChecked>
        Accept terms and conditions
      </Checkbox>
    </>
  )
}`,
      },
    ],
  },
  {
    id: "card",
    name: "Card",
    categoryId: "data-display",
    categoryLabel: "Data Display",
    overviewPreview: (
      <Card className="w-full max-w-[240px] shadow-none">
        <CardHeader className="p-4 pb-2">
          <CardTitle className="text-sm">Create project</CardTitle>
          <CardDescription className="text-xs">
            Deploy your new project in one click.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="h-9 rounded-md border border-input bg-background" />
        </CardContent>
      </Card>
    ),
    variants: [
      {
        id: "card-transparent",
        label: "Transparent",
        description: (
          <>
            Use <InlineCode>variant="transparent"</InlineCode> for minimal
            prominence with a transparent background.
          </>
        ),
        preview: (
          <Card variant="transparent" className="w-full max-w-md shadow-none">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-base">Transparent Variant</CardTitle>
              <CardDescription>
                Minimal prominence with transparent background.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Use for less important content or nested cards.
              </p>
            </CardContent>
          </Card>
        ),
        code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "erco-ui"

export function CardTransparent() {
  return (
    <Card variant="transparent">
      <CardHeader>
        <CardTitle>Transparent Variant</CardTitle>
        <CardDescription>
          Minimal prominence with transparent background.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Use for less important content or nested cards.
        </p>
      </CardContent>
    </Card>
  )
}`,
      },
      {
        id: "card-surface",
        label: "Default",
        description: (
          <>
            The default surface appearance with{" "}
            <InlineCode>variant="default"</InlineCode>.
          </>
        ),
        preview: (
          <Card className="w-full max-w-md shadow-none">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-base">Default Variant</CardTitle>
              <CardDescription>Standard card appearance.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                The default card variant for most use cases.
              </p>
            </CardContent>
          </Card>
        ),
        code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "erco-ui"

export function CardDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Default Variant</CardTitle>
        <CardDescription>Standard card appearance.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          The default card variant for most use cases.
        </p>
      </CardContent>
    </Card>
  )
}`,
      },
      {
        id: "card-secondary",
        label: "Secondary",
        description: (
          <>
            Use <InlineCode>variant="secondary"</InlineCode> for medium
            prominence.
          </>
        ),
        preview: (
          <Card variant="secondary" className="w-full max-w-md shadow-none">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-base">Secondary Variant</CardTitle>
              <CardDescription>Medium prominence.</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground">
                Use to draw moderate attention.
              </p>
            </CardContent>
          </Card>
        ),
        code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "erco-ui"

export function CardSecondary() {
  return (
    <Card variant="secondary">
      <CardHeader>
        <CardTitle>Secondary Variant</CardTitle>
        <CardDescription>Medium prominence.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Use to draw moderate attention.
        </p>
      </CardContent>
    </Card>
  )
}`,
      },
      {
        id: "card-structure",
        label: "Structure",
        description: "A card with header, content, and footer sections.",
        preview: (
          <Card className="w-full max-w-sm shadow-none">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Input placeholder="Project name" />
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Continue</Button>
            </CardFooter>
          </Card>
        ),
        code: `import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input } from "erco-ui"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>
          Deploy your new project in one click.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Project name" />
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" size="sm">Cancel</Button>
        <Button size="sm">Continue</Button>
      </CardFooter>
    </Card>
  )
}`,
      },
    ],
  },
  {
    id: "badge",
    name: "Badge",
    categoryId: "data-display",
    categoryLabel: "Data Display",
    variants: [
      {
        id: "badge-default",
        label: "Default",
        description: "The default badge style.",
        preview: <Badge>Badge</Badge>,
        code: `import { Badge } from "erco-ui"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`,
      },
      {
        id: "badge-secondary",
        label: "Secondary",
        description: (
          <>
            Use the <InlineCode>variant="secondary"</InlineCode> prop for a muted
            badge.
          </>
        ),
        preview: <Badge variant="secondary">Secondary</Badge>,
        code: `import { Badge } from "erco-ui"

export function BadgeSecondary() {
  return <Badge variant="secondary">Secondary</Badge>
}`,
      },
      {
        id: "badge-outline",
        label: "Outline",
        description: (
          <>
            Use the <InlineCode>variant="outline"</InlineCode> prop for a bordered
            badge.
          </>
        ),
        preview: <Badge variant="outline">Outline</Badge>,
        code: `import { Badge } from "erco-ui"

export function BadgeOutline() {
  return <Badge variant="outline">Outline</Badge>
}`,
      },
    ],
  },
  {
    id: "loading",
    name: "Loading",
    categoryId: "feedback",
    categoryLabel: "Feedback",
    variants: [
      {
        id: "loading-default",
        label: "Default",
        description: "A spinning loader for async states.",
        preview: <Loading size={24} />,
        code: `import { Loading } from "erco-ui"

export function LoadingDemo() {
  return <Loading size={24} />
}`,
      },
      {
        id: "loading-sizes",
        label: "Size",
        description: (
          <>
            Use the <InlineCode>size</InlineCode> prop to change the loader size.
          </>
        ),
        preview: (
          <div className="flex items-center gap-4">
            <Loading size={16} />
            <Loading size={24} />
            <Loading size={32} />
          </div>
        ),
        code: `import { Loading } from "erco-ui"

export function LoadingSizes() {
  return (
    <div className="flex items-center gap-4">
      <Loading size={16} />
      <Loading size={24} />
      <Loading size={32} />
    </div>
  )
}`,
      },
    ],
  },
]

export const categories: ComponentCategory[] = Object.values(
  components.reduce<Record<string, ComponentCategory>>((acc, component) => {
    if (!acc[component.categoryId]) {
      acc[component.categoryId] = {
        id: component.categoryId,
        label: component.categoryLabel,
        components: [],
      }
    }
    acc[component.categoryId].components.push(component)
    return acc
  }, {})
)

export function getComponentById(id: string) {
  return components.find((component) => component.id === id)
}

export function getOverviewPreview(component: ComponentDefinition) {
  return component.overviewPreview ?? component.variants[0]?.preview ?? null
}
