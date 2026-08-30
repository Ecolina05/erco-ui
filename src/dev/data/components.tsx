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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select"
import { Switch } from "@/components/Switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/Tabs"
import { Textarea } from "@/components/Textarea"

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

// Single source of truth for docs navigation.
// Add a component here to update the sidebar, All Components page, and routes.
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
    id: "textarea",
    name: "Textarea",
    categoryId: "forms",
    categoryLabel: "Forms",
    overviewPreview: (
      <Textarea
        className="pointer-events-none max-w-[220px] resize-none text-xs"
        placeholder="Share an update..."
        rows={3}
      />
    ),
    variants: [
      {
        id: "textarea-default",
        label: "Default",
        description: "A multiline text input for longer content.",
        preview: (
          <Textarea
            className="max-w-md"
            placeholder="Share a quick project update..."
          />
        ),
        code: `import { Textarea } from "erco-ui"

export function TextareaDemo() {
  return (
    <Textarea placeholder="Share a quick project update..." />
  )
}`,
      },
      {
        id: "textarea-disabled",
        label: "Disabled",
        description: (
          <>
            Use the <InlineCode>disabled</InlineCode> prop to disable the
            textarea.
          </>
        ),
        preview: (
          <Textarea
            className="max-w-md"
            disabled
            placeholder="Disabled textarea"
          />
        ),
        code: `import { Textarea } from "erco-ui"

export function TextareaDisabled() {
  return <Textarea disabled placeholder="Disabled textarea" />
}`,
      },
    ],
  },
  {
    id: "select",
    name: "Select",
    categoryId: "forms",
    categoryLabel: "Forms",
    overviewPreview: (
      <Select defaultValue="Florida">
        <SelectTrigger className="pointer-events-none max-w-[180px] text-xs">
          <SelectValue placeholder="Select one" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Florida">Florida</SelectItem>
          <SelectItem value="California">California</SelectItem>
        </SelectContent>
      </Select>
    ),
    variants: [
      {
        id: "select-default",
        label: "Default",
        description: "A dropdown for selecting a single option.",
        preview: (
          <div className="grid w-full max-w-xs gap-1.5">
            <label className="text-sm font-medium leading-none">State</label>
            <Select defaultValue="Florida">
              <SelectTrigger>
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Florida">Florida</SelectItem>
                <SelectItem value="Delaware">Delaware</SelectItem>
                <SelectItem value="California">California</SelectItem>
              </SelectContent>
            </Select>
          </div>
        ),
        code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "erco-ui"

export function SelectDemo() {
  return (
    <Select defaultValue="Florida">
      <SelectTrigger>
        <SelectValue placeholder="Select one" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Florida">Florida</SelectItem>
        <SelectItem value="Delaware">Delaware</SelectItem>
        <SelectItem value="California">California</SelectItem>
      </SelectContent>
    </Select>
  )
}`,
      },
      {
        id: "select-disabled",
        label: "Disabled",
        description: (
          <>
            Use the <InlineCode>disabled</InlineCode> prop to disable the
            select.
          </>
        ),
        preview: (
          <Select disabled>
            <SelectTrigger className="max-w-xs">
              <SelectValue placeholder="Select one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Florida">Florida</SelectItem>
            </SelectContent>
          </Select>
        ),
        code: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "erco-ui"

export function SelectDisabled() {
  return (
    <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Select one" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Florida">Florida</SelectItem>
      </SelectContent>
    </Select>
  )
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
    id: "switch",
    name: "Switch",
    categoryId: "forms",
    categoryLabel: "Forms",
    overviewPreview: (
      <Switch defaultChecked className="pointer-events-none">
        Notifications
      </Switch>
    ),
    variants: [
      {
        id: "switch-default",
        label: "Default",
        description: "A toggle switch for boolean states.",
        preview: <Switch defaultChecked>Enable notifications</Switch>,
        code: `import { Switch } from "erco-ui"

export function SwitchDemo() {
  return <Switch defaultChecked>Enable notifications</Switch>
}`,
      },
      {
        id: "switch-disabled",
        label: "Disabled",
        description: (
          <>
            Use the <InlineCode>disabled</InlineCode> prop to disable the
            switch.
          </>
        ),
        preview: (
          <div className="flex flex-col gap-3">
            <Switch disabled>Enable notifications</Switch>
            <Switch disabled defaultChecked>
              Enable notifications
            </Switch>
          </div>
        ),
        code: `import { Switch } from "erco-ui"

export function SwitchDisabled() {
  return (
    <>
      <Switch disabled>Enable notifications</Switch>
      <Switch disabled defaultChecked>
        Enable notifications
      </Switch>
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
  {
    id: "tabs",
    name: "Tabs",
    categoryId: "navigation",
    categoryLabel: "Navigation",
    overviewPreview: (
      <Tabs defaultValue="overview" className="pointer-events-none w-full max-w-[220px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    ),
    variants: [
      {
        id: "tabs-default",
        label: "Default",
        description: "Segmented tabs for switching between related views.",
        preview: (
          <Tabs defaultValue="overview" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              View your project overview and recent activity.
            </TabsContent>
            <TabsContent value="analytics">
              Explore analytics and performance metrics.
            </TabsContent>
            <TabsContent value="reports">
              Download and review generated reports.
            </TabsContent>
          </Tabs>
        ),
        code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "erco-ui"

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        View your project overview and recent activity.
      </TabsContent>
      <TabsContent value="analytics">
        Explore analytics and performance metrics.
      </TabsContent>
      <TabsContent value="reports">
        Download and review generated reports.
      </TabsContent>
    </Tabs>
  )
}`,
      },
      {
        id: "tabs-secondary",
        label: "Secondary",
        description: (
          <>
            Use <InlineCode>variant="secondary"</InlineCode> on{" "}
            <InlineCode>TabsList</InlineCode> for underline tabs.
          </>
        ),
        preview: (
          <Tabs defaultValue="overview" className="w-full max-w-md">
            <TabsList variant="secondary" className="w-full">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              View your project overview and recent activity.
            </TabsContent>
            <TabsContent value="analytics">
              Explore analytics and performance metrics.
            </TabsContent>
            <TabsContent value="reports">
              Download and review generated reports.
            </TabsContent>
          </Tabs>
        ),
        code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "erco-ui"

export function TabsSecondary() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="secondary">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        View your project overview and recent activity.
      </TabsContent>
    </Tabs>
  )
}`,
      },
      {
        id: "tabs-vertical",
        label: "Vertical",
        description: (
          <>
            Use <InlineCode>orientation="vertical"</InlineCode> for a vertical
            tab layout with the default pill style.
          </>
        ),
        preview: (
          <Tabs
            defaultValue="account"
            orientation="vertical"
            className="w-full max-w-lg"
          >
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="font-medium text-foreground">Account Settings</p>
              <p className="mt-1">
                Manage your account information and preferences.
              </p>
            </TabsContent>
            <TabsContent value="security">
              <p className="font-medium text-foreground">Security</p>
              <p className="mt-1">
                Update passwords and security preferences.
              </p>
            </TabsContent>
            <TabsContent value="notifications">
              <p className="font-medium text-foreground">Notifications</p>
              <p className="mt-1">
                Configure how and when you receive alerts.
              </p>
            </TabsContent>
            <TabsContent value="billing">
              <p className="font-medium text-foreground">Billing</p>
              <p className="mt-1">
                Manage your plan, invoices, and payment methods.
              </p>
            </TabsContent>
          </Tabs>
        ),
        code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "erco-ui"

export function TabsVertical() {
  return (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Manage your account information and preferences.
      </TabsContent>
      <TabsContent value="security">
        Update passwords and security preferences.
      </TabsContent>
    </Tabs>
  )
}`,
      },
      {
        id: "tabs-vertical-secondary",
        label: "Vertical Secondary",
        description: (
          <>
            Combine <InlineCode>orientation="vertical"</InlineCode> with{" "}
            <InlineCode>variant="secondary"</InlineCode> for vertical underline
            tabs.
          </>
        ),
        preview: (
          <Tabs
            defaultValue="account"
            orientation="vertical"
            className="w-full max-w-lg"
          >
            <TabsList variant="secondary">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <p className="font-medium text-foreground">Account Settings</p>
              <p className="mt-1">
                Manage your account information and preferences.
              </p>
            </TabsContent>
            <TabsContent value="security">
              <p className="font-medium text-foreground">Security</p>
              <p className="mt-1">
                Update passwords and security preferences.
              </p>
            </TabsContent>
            <TabsContent value="notifications">
              <p className="font-medium text-foreground">Notifications</p>
              <p className="mt-1">
                Configure how and when you receive alerts.
              </p>
            </TabsContent>
            <TabsContent value="billing">
              <p className="font-medium text-foreground">Billing</p>
              <p className="mt-1">
                Manage your plan, invoices, and payment methods.
              </p>
            </TabsContent>
          </Tabs>
        ),
        code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "erco-ui"

export function TabsVerticalSecondary() {
  return (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList variant="secondary">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Manage your account information and preferences.
      </TabsContent>
      <TabsContent value="security">
        Update passwords and security preferences.
      </TabsContent>
    </Tabs>
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
