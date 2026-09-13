import type { ReactNode } from "react"
import { ChevronRight, CircleCheck, MoreVertical, Rocket, Search } from "lucide-react"

import { Badge } from "@/components/Badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/Avatar"
import { Brand } from "@/components/Brand"
import { Button, buttonVariants } from "@/components/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card"
import { Checkbox } from "@/components/Checkbox"
import { DateInput } from "@/components/DateInput"
import {
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
} from "@/components/DatePicker"
import { Input } from "@/components/Input"
import { InputOTP } from "@/components/InputOTP"
import { Loading } from "@/components/Loading"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@/components/Menu"
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalIcon,
  ModalTitle,
  ModalTrigger,
} from "@/components/Modal"
import { toast } from "@/components/Toast"
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
import { Label, Typography } from "@/components/Typography"
import { cn } from "@/lib/utils"

import { ErcoMark } from "../components/ErcoMark"
import { InlineCode } from "../components/InlineCode"
import { ModalSizePlayground } from "../components/ModalSizePlayground"
import { ToastPositionPlayground } from "../components/ToastPositionPlayground"

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
            Use <InlineCode>size="icon"</InlineCode> for icon buttons with a
            circular shape.
          </>
        ),
        preview: (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button size="icon" aria-label="Search">
              <Search />
            </Button>
            <Button variant="outline" size="icon" aria-label="Search">
              <Search />
            </Button>
            <Button variant="secondary" size="icon" aria-label="Search">
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
      <Button variant="outline" size="icon" aria-label="Search">
        <Search />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Search">
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
        id: "input-with-label",
        label: "With Label",
        description: (
          <>
            Pair <InlineCode>Input</InlineCode> with{" "}
            <InlineCode>Label</InlineCode> using matching{" "}
            <InlineCode>id</InlineCode> and <InlineCode>htmlFor</InlineCode>.
          </>
        ),
        preview: (
          <div className="max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="you@example.com" type="email" />
          </div>
        ),
        code: `import { Input, Label } from "erco-ui"

export function InputWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  )
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
      {
        id: "input-date-mask",
        label: "Date mask",
        description: (
          <>
            Use <InlineCode>DateInput</InlineCode> for a masked{" "}
            <InlineCode>DD/MM/YYYY</InlineCode> field — slashes stay fixed while
            typing.
          </>
        ),
        preview: <DateInput className="max-w-xs" defaultValue="13091990" />,
        code: `import { DateInput } from "erco-ui"

export function InputDateMask() {
  return (
    <DateInput
      defaultValue="13091990"
      onValueChange={(value) => console.log(value)}
    />
  )
}`,
      },
    ],
  },
  {
    id: "input-otp",
    name: "Input OTP",
    categoryId: "forms",
    categoryLabel: "Forms",
    overviewPreview: (
      <InputOTP
        defaultValue="123456"
        className="pointer-events-none max-w-[220px]"
      />
    ),
    variants: [
      {
        id: "input-otp-default",
        label: "Default",
        description:
          "One-time code input with joined slots, paste support, and keyboard navigation.",
        preview: <InputOTP defaultValue="123456" />,
        code: `import { InputOTP } from "erco-ui"

export function InputOTPDemo() {
  return <InputOTP defaultValue="123456" onChange={(value) => console.log(value)} />
}`,
      },
      {
        id: "input-otp-length",
        label: "Length",
        description: (
          <>
            Use the <InlineCode>length</InlineCode> prop to change the number of
            slots.
          </>
        ),
        preview: <InputOTP length={4} defaultValue="1234" />,
        code: `import { InputOTP } from "erco-ui"

export function InputOTPFourDigits() {
  return <InputOTP length={4} />
}`,
      },
    ],
  },
  {
    id: "date-input",
    name: "Date Input",
    categoryId: "forms",
    categoryLabel: "Forms",
    overviewPreview: (
      <DateInput
        className="pointer-events-none max-w-[180px]"
        defaultValue="13091990"
      />
    ),
    variants: [
      {
        id: "date-input-default",
        label: "Default",
        description: (
          <>
            Masked date field. The value is always formatted as{" "}
            <InlineCode>DD/MM/YYYY</InlineCode>; slashes cannot be deleted.
          </>
        ),
        preview: <DateInput className="max-w-xs" defaultValue="13091990" />,
        code: `import { DateInput } from "erco-ui"

export function DateInputDemo() {
  return (
    <DateInput
      defaultValue="13091990"
      onValueChange={(value) => console.log(value)}
    />
  )
}`,
      },
      {
        id: "date-input-custom",
        label: "Custom label",
        description: (
          <>
            Override <InlineCode>label</InlineCode>. The mask format stays{" "}
            <InlineCode>DD/MM/YYYY</InlineCode>.
          </>
        ),
        preview: (
          <DateInput
            className="max-w-xs"
            label="Birth date"
            defaultValue="01012000"
          />
        ),
        code: `import { DateInput } from "erco-ui"

export function DateInputCustom() {
  return (
    <DateInput
      label="Birth date"
      onValueChange={(value) => console.log(value)}
    />
  )
}`,
      },
    ],
  },
  {
    id: "date-picker",
    name: "Date Picker",
    categoryId: "forms",
    categoryLabel: "Forms",
    overviewPreview: (
      <DatePicker defaultValue={new Date(2026, 8, 13)}>
        <DatePickerTrigger className="pointer-events-none max-w-[180px]" />
      </DatePicker>
    ),
    variants: [
      {
        id: "date-picker-default",
        label: "Default",
        description: "Calendar popover for picking a single date.",
        preview: (
          <DatePicker defaultValue={new Date(2026, 8, 13)}>
            <DatePickerTrigger />
            <DatePickerContent />
          </DatePicker>
        ),
        code: `import {
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
} from "erco-ui"

export function DatePickerDemo() {
  return (
    <DatePicker>
      <DatePickerTrigger placeholder="Pick a date" />
      <DatePickerContent />
    </DatePicker>
  )
}`,
      },
      {
        id: "date-picker-controlled",
        label: "Controlled",
        description: (
          <>
            Use <InlineCode>value</InlineCode> and{" "}
            <InlineCode>onValueChange</InlineCode> for controlled selection.
          </>
        ),
        preview: (
          <DatePicker>
            <DatePickerTrigger placeholder="Pick a date" />
            <DatePickerContent />
          </DatePicker>
        ),
        code: `import { useState } from "react"
import {
  DatePicker,
  DatePickerContent,
  DatePickerTrigger,
} from "erco-ui"

export function DatePickerControlled() {
  const [value, setValue] = useState<Date>()

  return (
    <DatePicker value={value} onValueChange={setValue}>
      <DatePickerTrigger />
      <DatePickerContent />
    </DatePicker>
  )
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
        id: "textarea-with-label",
        label: "With Label",
        description: (
          <>
            Pair <InlineCode>Textarea</InlineCode> with{" "}
            <InlineCode>Label</InlineCode> for accessible form fields.
          </>
        ),
        preview: (
          <div className="max-w-md space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              placeholder="Share a quick project update..."
            />
          </div>
        ),
        code: `import { Label, Textarea } from "erco-ui"

export function TextareaWithLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Share a quick project update..." />
    </div>
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
            <Select id="state">
              <Label htmlFor="state">State</Label>
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
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "erco-ui"

export function SelectDemo() {
  return (
    <Select id="state">
      <Label htmlFor="state">State</Label>
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
          <CardDescription>
            Deploy your new project in one click.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <div className="h-9 rounded-2xl border border-input bg-background" />
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
              <CardTitle>Transparent Variant</CardTitle>
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
              <CardTitle>Default Variant</CardTitle>
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
              <CardTitle>Secondary Variant</CardTitle>
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
    id: "avatar",
    name: "Avatar",
    categoryId: "data-display",
    categoryLabel: "Data Display",
    overviewPreview: (
      <div className="flex items-center gap-2">
        <Avatar className="pointer-events-none">
          <AvatarImage
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
            alt="User"
          />
          <AvatarFallback>EC</AvatarFallback>
        </Avatar>
        <Avatar className="pointer-events-none">
          <AvatarFallback>JR</AvatarFallback>
        </Avatar>
      </div>
    ),
    variants: [
      {
        id: "avatar-default",
        label: "Default",
        description:
          "Display user profile images with customizable fallback content.",
        preview: (
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop"
                alt="Colina"
              />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop"
                alt="Gradient"
              />
              <AvatarFallback>GD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JR</AvatarFallback>
            </Avatar>
          </div>
        ),
        code: `import { Avatar, AvatarFallback, AvatarImage } from "erco-ui"

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="/avatars/user.jpg" alt="Colina" />
        <AvatarFallback>EC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/avatars/gradient.jpg" alt="Gradient" />
        <AvatarFallback>GD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JR</AvatarFallback>
      </Avatar>
    </div>
  )
}`,
      },
      {
        id: "avatar-sizes",
        label: "Size",
        description: (
          <>
            Use the <InlineCode>size</InlineCode> prop for smaller or larger
            avatars.
          </>
        ),
        preview: (
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>MD</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </div>
        ),
        code: `import { Avatar, AvatarFallback } from "erco-ui"

export function AvatarSizes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  )
}`,
      },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    categoryId: "data-display",
    categoryLabel: "Data Display",
    overviewPreview: (
      <Brand name="erco-ui">
        <ErcoMark size={28} />
      </Brand>
    ),
    variants: [
      {
        id: "brand-default",
        label: "Default",
        description: (
          <>
            Pass the mark as <InlineCode>children</InlineCode> and the product
            name with <InlineCode>name</InlineCode>. Brand places a label to the
            right of the logo.
          </>
        ),
        preview: (
          <Brand name="erco-ui">
            <ErcoMark size={32} />
          </Brand>
        ),
        code: `import { Brand } from "erco-ui"

export function BrandDemo() {
  return (
    <Brand name="erco-ui">
      <img src="/marks/erco-ui.svg" alt="" />
    </Brand>
  )
}`,
      },
      {
        id: "brand-sizes",
        label: "Size",
        description: (
          <>
            Use the <InlineCode>size</InlineCode> prop to scale the gap and the
            name label. Size the mark yourself so circular logos stay round.
          </>
        ),
        preview: (
          <div className="flex flex-col items-start gap-5">
            <Brand name="erco-ui" size="sm">
              <ErcoMark size={22} />
            </Brand>
            <Brand name="erco-ui">
              <ErcoMark size={32} />
            </Brand>
            <Brand name="erco-ui" size="lg">
              <ErcoMark size={40} />
            </Brand>
          </div>
        ),
        code: `import { Brand } from "erco-ui"

export function BrandSizes() {
  return (
    <div className="flex flex-col gap-5">
      <Brand name="erco-ui" size="sm">
        <img src="/marks/erco-ui.svg" alt="" width={22} height={22} />
      </Brand>
      <Brand name="erco-ui">
        <img src="/marks/erco-ui.svg" alt="" width={32} height={32} />
      </Brand>
      <Brand name="erco-ui" size="lg">
        <img src="/marks/erco-ui.svg" alt="" width={40} height={40} />
      </Brand>
    </div>
  )
}`,
      },
    ],
  },
  {
    id: "typography",
    name: "Typography",
    categoryId: "typography",
    categoryLabel: "Typography",
    overviewPreview: (
      <div className="space-y-1">
        <Typography variant="section">Heading</Typography>
        <Typography variant="muted">Body text at text-xs.</Typography>
      </div>
    ),
    variants: [
      {
        id: "typography-headings",
        label: "Headings",
        description: (
          <>
            Use <InlineCode>variant="title"</InlineCode>,{" "}
            <InlineCode>heading</InlineCode>, <InlineCode>subheading</InlineCode>,
            and <InlineCode>section</InlineCode> for page hierarchy.
          </>
        ),
        preview: (
          <div className="space-y-3">
            <Typography variant="title">Page title</Typography>
            <Typography variant="heading">Section heading</Typography>
            <Typography variant="subheading">Subheading</Typography>
            <Typography variant="section">Card or block title</Typography>
          </div>
        ),
        code: `import { Typography } from "erco-ui"

export function TypographyHeadings() {
  return (
    <div className="space-y-3">
      <Typography variant="title">Page title</Typography>
      <Typography variant="heading">Section heading</Typography>
      <Typography variant="subheading">Subheading</Typography>
      <Typography variant="section">Card or block title</Typography>
    </div>
  )
}`,
      },
      {
        id: "typography-subtitle",
        label: "Subtitle",
        description: (
          <>
            Use <InlineCode>variant="subtitle"</InlineCode> for supporting text
            below a heading.
          </>
        ),
        preview: (
          <div className="space-y-1">
            <Typography variant="heading">Account settings</Typography>
            <Typography variant="subtitle">
              Manage your profile and notification preferences.
            </Typography>
          </div>
        ),
        code: `import { Typography } from "erco-ui"

export function TypographySubtitle() {
  return (
    <div className="space-y-1">
      <Typography variant="heading">Account settings</Typography>
      <Typography variant="subtitle">
        Manage your profile and notification preferences.
      </Typography>
    </div>
  )
}`,
      },
      {
        id: "typography-body",
        label: "Body & Muted",
        description: (
          <>
            Use <InlineCode>variant="body"</InlineCode> for default copy and{" "}
            <InlineCode>muted</InlineCode> or <InlineCode>caption</InlineCode> for
            secondary details.
          </>
        ),
        preview: (
          <div className="max-w-md space-y-2">
            <Typography variant="body">
              erco-ui uses text-xs as the default body size across form fields
              and documentation.
            </Typography>
            <Typography variant="muted">
              Muted text works well for helper copy and descriptions.
            </Typography>
            <Typography variant="caption">Last updated 2 hours ago</Typography>
          </div>
        ),
        code: `import { Typography } from "erco-ui"

export function TypographyBody() {
  return (
    <div className="space-y-2">
      <Typography variant="body">
        erco-ui uses text-xs as the default body size.
      </Typography>
      <Typography variant="muted">
        Muted text for helper copy and descriptions.
      </Typography>
      <Typography variant="caption">Last updated 2 hours ago</Typography>
    </div>
  )
}`,
      },
      {
        id: "typography-label",
        label: "Label",
        description: (
          <>
            Use the <InlineCode>Label</InlineCode> component for form field names.
            It renders a native <InlineCode>label</InlineCode> with{" "}
            <InlineCode>text-xs font-medium</InlineCode> styling.
          </>
        ),
        preview: (
          <div className="max-w-sm space-y-2">
            <Label htmlFor="email-demo">Email</Label>
            <Input id="email-demo" placeholder="you@example.com" type="email" />
          </div>
        ),
        code: `import { Input, Label } from "erco-ui"

export function TypographyLabel() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  )
}`,
      },
      {
        id: "typography-composition",
        label: "Composition",
        description: "Combine variants to build readable content blocks.",
        preview: (
          <article className="max-w-md space-y-3">
            <Typography variant="title">Design system</Typography>
            <Typography variant="subtitle">
              Consistent typography across components and docs.
            </Typography>
            <Typography variant="body">
              Typography standardizes headings, body copy, and labels so every
              screen shares the same rhythm and hierarchy.
            </Typography>
            <Typography variant="muted">
              Override the rendered element with the as prop when semantic HTML
              matters.
            </Typography>
          </article>
        ),
        code: `import { Typography } from "erco-ui"

export function TypographyComposition() {
  return (
    <article className="space-y-3">
      <Typography variant="title">Design system</Typography>
      <Typography variant="subtitle">
        Consistent typography across components and docs.
      </Typography>
      <Typography variant="body">
        Typography standardizes headings, body copy, and labels.
      </Typography>
      <Typography variant="muted">
        Override the element with the as prop when needed.
      </Typography>
    </article>
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
    id: "modal",
    name: "Modal",
    categoryId: "feedback",
    categoryLabel: "Feedback",
    overviewPreview: (
      <div className="pointer-events-none max-w-[200px] rounded-3xl border border-border bg-surface p-4 shadow-lg">
        <div className="mb-2 inline-flex size-8 items-center justify-center rounded-full border border-border bg-secondary">
          <Rocket className="size-4" aria-hidden />
        </div>
        <p className="text-xs font-semibold text-foreground">Backdrop: Blur</p>
        <p className="mt-1 text-[11px] text-muted-foreground">
          Native dialog with a frosted overlay.
        </p>
      </div>
    ),
    variants: [
      {
        id: "modal-blur",
        label: "Backdrop blur",
        description: (
          <>
            Uses the native <InlineCode>&lt;dialog&gt;</InlineCode> element with{" "}
            <InlineCode>showModal()</InlineCode> and a blurred{" "}
            <InlineCode>::backdrop</InlineCode>.
          </>
        ),
        preview: (
          <Modal>
            <ModalTrigger className="inline-flex h-9 cursor-pointer items-center rounded-full border border-primary/15 bg-primary/95 px-4 text-xs font-medium text-primary-foreground">
              Open modal
            </ModalTrigger>
            <ModalContent size="sm" backdrop="blur">
              <ModalHeader>
                <ModalIcon>
                  <Rocket aria-hidden />
                </ModalIcon>
                <ModalTitle>Backdrop: Blur</ModalTitle>
                <ModalDescription>
                  The background is dimmed and blurred while this dialog is open.
                  Press Escape or click outside to dismiss.
                </ModalDescription>
              </ModalHeader>
              <ModalFooter>
                <form method="dialog">
                  <Button
                    type="submit"
                    className="w-full border-blue-500/20 bg-blue-600 text-white hover:border-blue-400/30 hover:bg-blue-500"
                  >
                    Continue
                  </Button>
                </form>
              </ModalFooter>
            </ModalContent>
          </Modal>
        ),
        code: `import { Rocket } from "lucide-react"
import {
  Button,
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalIcon,
  ModalTitle,
  ModalTrigger,
} from "erco-ui"

export function ModalBlurDemo() {
  return (
    <Modal>
      <ModalTrigger>Open modal</ModalTrigger>
      <ModalContent size="sm" backdrop="blur">
        <ModalHeader>
          <ModalIcon>
            <Rocket aria-hidden />
          </ModalIcon>
          <ModalTitle>Backdrop: Blur</ModalTitle>
          <ModalDescription>
            The background is dimmed and blurred while this dialog is open.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <form method="dialog">
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}`,
      },
      {
        id: "modal-sizes",
        label: "Sizes",
        description: (
          <>
            Set <InlineCode>size</InlineCode> on{" "}
            <InlineCode>ModalContent</InlineCode> to{" "}
            <InlineCode>xs</InlineCode>, <InlineCode>sm</InlineCode>,{" "}
            <InlineCode>md</InlineCode>, or <InlineCode>lg</InlineCode>.
          </>
        ),
        preview: <ModalSizePlayground />,
        code: `import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  type ModalSize,
} from "erco-ui"

export function ModalSizesDemo() {
  const size: ModalSize = "md"

  return (
    <Modal>
      <ModalTrigger>Open modal</ModalTrigger>
      <ModalContent size={size} backdrop="blur">
        <ModalHeader>
          <ModalTitle>Responsive width</ModalTitle>
          <ModalDescription>
            Adjust the size prop to change max-width.
          </ModalDescription>
        </ModalHeader>
      </ModalContent>
    </Modal>
  )
}`,
      },
      {
        id: "modal-controlled",
        label: "Controlled",
        description: (
          <>
            Use <InlineCode>open</InlineCode> and{" "}
            <InlineCode>onOpenChange</InlineCode> when state lives outside the
            trigger.
          </>
        ),
        preview: (
          <Modal>
            <ModalTrigger className="inline-flex h-9 cursor-pointer items-center rounded-full border border-input bg-background px-4 text-xs font-medium">
              Open controlled
            </ModalTrigger>
            <ModalContent size="md" backdrop="blur">
              <ModalHeader>
                <ModalTitle>Controlled modal</ModalTitle>
                <ModalDescription>
                  Pair with React state via open and onOpenChange on Modal.
                </ModalDescription>
              </ModalHeader>
            </ModalContent>
          </Modal>
        ),
        code: `import { useState } from "react"
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from "erco-ui"

export function ModalControlled() {
  const [open, setOpen] = useState(false)

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger>Open</ModalTrigger>
      <ModalContent backdrop="blur">
        <ModalHeader>
          <ModalTitle>Controlled modal</ModalTitle>
          <ModalDescription>
            open and onOpenChange sync with showModal and close.
          </ModalDescription>
        </ModalHeader>
      </ModalContent>
    </Modal>
  )
}`,
      },
    ],
  },
  {
    id: "toast",
    name: "Toast",
    categoryId: "feedback",
    categoryLabel: "Feedback",
    overviewPreview: (
      <div className="flex max-w-[220px] items-center gap-2 rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 text-xs font-semibold text-white shadow-lg">
        <CircleCheck className="size-4 shrink-0 text-green-500" aria-hidden />
        Successfully toasted!
      </div>
    ),
    variants: [
      {
        id: "toast-types",
        label: "Types",
        description: (
          <>
            Call <InlineCode>toast.success</InlineCode>,{" "}
            <InlineCode>toast.error</InlineCode>, or <InlineCode>toast.info</InlineCode>.
            Mount a single <InlineCode>Toaster</InlineCode> in your app root.
          </>
        ),
        preview: (
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              onClick={() => toast.success("Successfully toasted!")}
            >
              Success
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => toast.error("This is an error!")}
            >
              Error
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => toast.info("Here is some information.")}
            >
              Info
            </Button>
          </div>
        ),
        code: `import { Toaster, toast } from "erco-ui"

export function ToastDemo() {
  return (
    <>
      <Toaster />
      <button type="button" onClick={() => toast.success("Successfully toasted!")}>
        Success
      </button>
      <button type="button" onClick={() => toast.error("This is an error!")}>
        Error
      </button>
      <button type="button" onClick={() => toast.info("Here is some information.")}>
        Info
      </button>
    </>
  )
}`,
      },
      {
        id: "toast-position",
        label: "Position",
        description: (
          <>
            Use the <InlineCode>position</InlineCode> prop on{" "}
            <InlineCode>Toaster</InlineCode>. Try each slot below and trigger a
            toast to preview placement.
          </>
        ),
        preview: <ToastPositionPlayground />,
        code: `import { useState } from "react"
import { Toaster, toast, type ToastPosition } from "erco-ui"

const positions: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
]

export function ToastPositionDemo() {
  const [position, setPosition] = useState<ToastPosition>("top-right")

  return (
    <>
      <Toaster position={position} />
      <div className="grid grid-cols-3 gap-2">
        {positions.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => setPosition(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
      <button type="button" onClick={() => toast.success(\`Shown at \${position}\`)}>
        Show toast
      </button>
    </>
  )
}`,
      },
      {
        id: "toast-description",
        label: "Description",
        description: (
          <>
            Pass <InlineCode>description</InlineCode> in the options object for
            supporting text under the title.
          </>
        ),
        preview: (
          <Button
            type="button"
            onClick={() =>
              toast.success("Profile updated", {
                description: "Your changes were saved and synced across devices.",
              })
            }
          >
            Toast with description
          </Button>
        ),
        code: `import { Toaster, toast } from "erco-ui"

export function ToastDescription() {
  return (
    <>
      <Toaster />
      <button
        type="button"
        onClick={() =>
          toast.success("Profile updated", {
            description: "Your changes were saved and synced across devices.",
          })
        }
      >
        Show toast
      </button>
    </>
  )
}`,
      },
      {
        id: "toast-duration",
        label: "Duration",
        description: (
          <>
            Default visibility is 4 seconds. Override per toast with{" "}
            <InlineCode>duration</InlineCode> (ms) or set a default on{" "}
            <InlineCode>Toaster</InlineCode>.
          </>
        ),
        preview: (
          <Button
            type="button"
            variant="outline"
            onClick={() => toast.success("Gone in 2 seconds", { duration: 2000 })}
          >
            Short toast (2s)
          </Button>
        ),
        code: `import { Toaster, toast } from "erco-ui"

export function ToastDuration() {
  return (
    <>
      <Toaster duration={4000} />
      <button
        type="button"
        onClick={() => toast.success("Quick message", { duration: 2000 })}
      >
        Short toast
      </button>
    </>
  )
}`,
      },
    ],
  },
  {
    id: "menu",
    name: "Menu",
    categoryId: "navigation",
    categoryLabel: "Navigation",
    overviewPreview: (
      <Menu>
        <MenuTrigger className="inline-flex h-8 items-center rounded-full border border-input bg-background px-4 text-xs font-medium">
          Open
        </MenuTrigger>
        <MenuContent className="pointer-events-none w-44">
          <MenuItem>First item</MenuItem>
          <MenuItem>Second item</MenuItem>
        </MenuContent>
      </Menu>
    ),
    variants: [
      {
        id: "menu-default",
        label: "Default",
        description: "Dropdown menu for actions, navigation, or commands.",
        preview: (
          <Menu>
            <MenuTrigger
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Open
            </MenuTrigger>
            <MenuContent className="w-48">
              <MenuItem>First item</MenuItem>
              <MenuItem className="justify-between">
                Second item
                <ChevronRight className="size-4 text-muted-foreground" aria-hidden />
              </MenuItem>
              <MenuItem className="justify-between">
                Third item
                <MenuShortcut>⌘ K</MenuShortcut>
              </MenuItem>
            </MenuContent>
          </Menu>
        ),
        code: `import { buttonVariants } from "erco-ui"
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuShortcut,
  MenuTrigger,
} from "erco-ui"
import { cn } from "erco-ui"

export function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
        Open
      </MenuTrigger>
      <MenuContent className="w-48">
        <MenuItem>First item</MenuItem>
        <MenuItem>Second item</MenuItem>
        <MenuItem>
          Third item
          <MenuShortcut>⌘ K</MenuShortcut>
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}`,
      },
      {
        id: "menu-actions",
        label: "Actions",
        description: (
          <>
            Use <InlineCode>variant="destructive"</InlineCode> on{" "}
            <InlineCode>MenuItem</InlineCode> for dangerous actions.
          </>
        ),
        preview: (
          <Menu>
            <MenuTrigger className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full border border-input bg-background text-foreground transition-colors hover:bg-accent">
              <MoreVertical className="size-4" aria-hidden />
              <span className="sr-only">Open menu</span>
            </MenuTrigger>
            <MenuContent align="end" className="w-44">
              <MenuItem>Option one</MenuItem>
              <MenuItem>Option two</MenuItem>
              <MenuItem>Option three</MenuItem>
              <MenuSeparator />
              <MenuItem variant="destructive">Remove</MenuItem>
            </MenuContent>
          </Menu>
        ),
        code: `import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "erco-ui"

export function MenuActions() {
  return (
    <Menu>
      <MenuTrigger aria-label="Open menu">⋯</MenuTrigger>
      <MenuContent align="end" className="w-44">
        <MenuItem>Option one</MenuItem>
        <MenuItem>Option two</MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive">Remove</MenuItem>
      </MenuContent>
    </Menu>
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
