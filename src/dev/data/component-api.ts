export type ComponentPropDefinition = {
  component: string
  name: string
  type: string
  default?: string
}

export type ComponentApiDefinition = {
  description?: string
  props: ComponentPropDefinition[]
}

export const componentApi: Record<string, ComponentApiDefinition> = {
  button: {
    description:
      "Pill-shaped button wrapper with variants, sizes, and loading state. Extends native button attributes.",
    props: [
      { component: "Button", name: "variant", type: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"', default: '"default"' },
      { component: "Button", name: "size", type: '"default" | "sm" | "lg" | "icon"', default: '"default"' },
      { component: "Button", name: "loading", type: "boolean", default: "false" },
      { component: "Button", name: "isLoading", type: "boolean", default: "false" },
      { component: "Button", name: "disabled", type: "boolean", default: "false" },
      { component: "Button", name: "type", type: '"button" | "submit" | "reset"', default: '"button"' },
      { component: "Button", name: "children", type: "React.ReactNode" },
      { component: "Button", name: "onClick", type: "(event: React.MouseEvent<HTMLButtonElement>) => void" },
      { component: "Button", name: "onFocus", type: "(event: React.FocusEvent<HTMLButtonElement>) => void" },
      { component: "Button", name: "onBlur", type: "(event: React.FocusEvent<HTMLButtonElement>) => void" },
      { component: "Button", name: "className", type: "string" },
    ],
  },
  input: {
    description:
      "Styled text input. Extends InputHTMLAttributes and forwards all native input props.",
    props: [
      { component: "Input", name: "type", type: "string", default: '"text"' },
      { component: "Input", name: "value", type: "string" },
      { component: "Input", name: "defaultValue", type: "string" },
      { component: "Input", name: "placeholder", type: "string" },
      { component: "Input", name: "name", type: "string" },
      { component: "Input", name: "id", type: "string" },
      { component: "Input", name: "required", type: "boolean", default: "false" },
      { component: "Input", name: "readOnly", type: "boolean", default: "false" },
      { component: "Input", name: "disabled", type: "boolean", default: "false" },
      { component: "Input", name: "onChange", type: "(event: React.ChangeEvent<HTMLInputElement>) => void" },
      { component: "Input", name: "onFocus", type: "(event: React.FocusEvent<HTMLInputElement>) => void" },
      { component: "Input", name: "onBlur", type: "(event: React.FocusEvent<HTMLInputElement>) => void" },
      { component: "Input", name: "onKeyDown", type: "(event: React.KeyboardEvent<HTMLInputElement>) => void" },
      { component: "Input", name: "className", type: "string" },
    ],
  },
  textarea: {
    description:
      "Multiline text input. Extends TextareaHTMLAttributes and forwards all native textarea props.",
    props: [
      { component: "Textarea", name: "value", type: "string" },
      { component: "Textarea", name: "defaultValue", type: "string" },
      { component: "Textarea", name: "placeholder", type: "string" },
      { component: "Textarea", name: "name", type: "string" },
      { component: "Textarea", name: "id", type: "string" },
      { component: "Textarea", name: "rows", type: "number" },
      { component: "Textarea", name: "required", type: "boolean", default: "false" },
      { component: "Textarea", name: "readOnly", type: "boolean", default: "false" },
      { component: "Textarea", name: "disabled", type: "boolean", default: "false" },
      { component: "Textarea", name: "onChange", type: "(event: React.ChangeEvent<HTMLTextAreaElement>) => void" },
      { component: "Textarea", name: "onFocus", type: "(event: React.FocusEvent<HTMLTextAreaElement>) => void" },
      { component: "Textarea", name: "onBlur", type: "(event: React.FocusEvent<HTMLTextAreaElement>) => void" },
      { component: "Textarea", name: "onKeyDown", type: "(event: React.KeyboardEvent<HTMLTextAreaElement>) => void" },
      { component: "Textarea", name: "className", type: "string" },
    ],
  },
  select: {
    description:
      "Custom select built with compound components. Pair Label with Select using a shared id for the field label.",
    props: [
      { component: "Select", name: "id", type: "string", default: "auto-generated" },
      { component: "Select", name: "value", type: "string" },
      { component: "Select", name: "defaultValue", type: "string" },
      { component: "Select", name: "onValueChange", type: "(value: string) => void" },
      { component: "Select", name: "disabled", type: "boolean", default: "false" },
      { component: "SelectLabel", name: "children", type: "React.ReactNode" },
      { component: "SelectLabel", name: "className", type: "string" },
      { component: "SelectTrigger", name: "onClick", type: "(event: React.MouseEvent<HTMLButtonElement>) => void" },
      { component: "SelectTrigger", name: "onFocus", type: "(event: React.FocusEvent<HTMLButtonElement>) => void" },
      { component: "SelectTrigger", name: "onBlur", type: "(event: React.FocusEvent<HTMLButtonElement>) => void" },
      { component: "SelectTrigger", name: "className", type: "string" },
      { component: "SelectValue", name: "placeholder", type: "string" },
      { component: "SelectValue", name: "className", type: "string" },
      { component: "SelectContent", name: "className", type: "string" },
      { component: "SelectItem", name: "value", type: "string" },
      { component: "SelectItem", name: "children", type: "React.ReactNode" },
      { component: "SelectItem", name: "onClick", type: "(event: React.MouseEvent<HTMLButtonElement>) => void" },
      { component: "SelectItem", name: "className", type: "string" },
    ],
  },
  checkbox: {
    description:
      "Checkbox control with optional label via children. Extends native checkbox input attributes.",
    props: [
      { component: "Checkbox", name: "checked", type: "boolean" },
      { component: "Checkbox", name: "defaultChecked", type: "boolean" },
      { component: "Checkbox", name: "disabled", type: "boolean", default: "false" },
      { component: "Checkbox", name: "name", type: "string" },
      { component: "Checkbox", name: "id", type: "string", default: "auto-generated" },
      { component: "Checkbox", name: "children", type: "React.ReactNode" },
      { component: "Checkbox", name: "labelClassName", type: "string" },
      { component: "Checkbox", name: "onChange", type: "(event: React.ChangeEvent<HTMLInputElement>) => void" },
      { component: "Checkbox", name: "onFocus", type: "(event: React.FocusEvent<HTMLInputElement>) => void" },
      { component: "Checkbox", name: "onBlur", type: "(event: React.FocusEvent<HTMLInputElement>) => void" },
      { component: "Checkbox", name: "className", type: "string" },
    ],
  },
  switch: {
    description:
      "Toggle switch with optional label via children. Extends native checkbox input attributes.",
    props: [
      { component: "Switch", name: "checked", type: "boolean" },
      { component: "Switch", name: "defaultChecked", type: "boolean" },
      { component: "Switch", name: "disabled", type: "boolean", default: "false" },
      { component: "Switch", name: "name", type: "string" },
      { component: "Switch", name: "id", type: "string", default: "auto-generated" },
      { component: "Switch", name: "children", type: "React.ReactNode" },
      { component: "Switch", name: "labelClassName", type: "string" },
      { component: "Switch", name: "onChange", type: "(event: React.ChangeEvent<HTMLInputElement>) => void" },
      { component: "Switch", name: "onFocus", type: "(event: React.FocusEvent<HTMLInputElement>) => void" },
      { component: "Switch", name: "onBlur", type: "(event: React.FocusEvent<HTMLInputElement>) => void" },
      { component: "Switch", name: "className", type: "string" },
    ],
  },
  card: {
    description:
      "Surface container with composable header, title, description, content, and footer sections. CardTitle and CardDescription use Typography variants.",
    props: [
      { component: "Card", name: "variant", type: '"transparent" | "default" | "secondary"', default: '"default"' },
      { component: "Card", name: "className", type: "string" },
      { component: "CardHeader", name: "className", type: "string" },
      { component: "CardTitle", name: "children", type: "React.ReactNode" },
      { component: "CardTitle", name: "className", type: "string" },
      { component: "CardDescription", name: "children", type: "React.ReactNode" },
      { component: "CardDescription", name: "className", type: "string" },
      { component: "CardContent", name: "className", type: "string" },
      { component: "CardFooter", name: "className", type: "string" },
    ],
  },
  avatar: {
    description:
      "Profile image with fallback content when the image is missing or fails to load.",
    props: [
      { component: "Avatar", name: "size", type: '"sm" | "default" | "lg"', default: '"default"' },
      { component: "Avatar", name: "className", type: "string" },
      { component: "AvatarImage", name: "src", type: "string" },
      { component: "AvatarImage", name: "alt", type: "string" },
      { component: "AvatarImage", name: "className", type: "string" },
      { component: "AvatarFallback", name: "children", type: "React.ReactNode" },
      { component: "AvatarFallback", name: "className", type: "string" },
    ],
  },
  badge: {
    description: "Small label for status, tags, or categorization.",
    props: [
      { component: "Badge", name: "variant", type: '"default" | "secondary" | "outline"', default: '"outline"' },
      { component: "Badge", name: "children", type: "React.ReactNode" },
      { component: "Badge", name: "className", type: "string" },
    ],
  },
  typography: {
    description:
      "Typography primitives for headings, body copy, and captions. Label is a styled native label for form fields.",
    props: [
      {
        component: "Typography",
        name: "variant",
        type: '"title" | "heading" | "subheading" | "section" | "subtitle" | "body" | "muted" | "label" | "caption"',
        default: '"body"',
      },
      { component: "Typography", name: "as", type: "React.ElementType" },
      { component: "Typography", name: "children", type: "React.ReactNode" },
      { component: "Typography", name: "className", type: "string" },
      { component: "Label", name: "htmlFor", type: "string" },
      { component: "Label", name: "children", type: "React.ReactNode" },
      { component: "Label", name: "className", type: "string" },
    ],
  },
  loading: {
    description: "Spinning loader for async or pending states.",
    props: [
      { component: "Loading", name: "size", type: "number", default: "24" },
      { component: "Loading", name: "className", type: "string" },
    ],
  },
  tabs: {
    description:
      "Tabbed interface with pill or underline styles and horizontal or vertical orientation.",
    props: [
      { component: "Tabs", name: "defaultValue", type: "string" },
      { component: "Tabs", name: "value", type: "string" },
      { component: "Tabs", name: "onValueChange", type: "(value: string) => void" },
      { component: "Tabs", name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"' },
      { component: "Tabs", name: "className", type: "string" },
      { component: "TabsList", name: "variant", type: '"default" | "secondary"', default: '"default"' },
      { component: "TabsList", name: "className", type: "string" },
      { component: "TabsTrigger", name: "value", type: "string" },
      { component: "TabsTrigger", name: "children", type: "React.ReactNode" },
      { component: "TabsTrigger", name: "onClick", type: "(event: React.MouseEvent<HTMLButtonElement>) => void" },
      { component: "TabsTrigger", name: "className", type: "string" },
      { component: "TabsContent", name: "value", type: "string" },
      { component: "TabsContent", name: "children", type: "React.ReactNode" },
      { component: "TabsContent", name: "className", type: "string" },
    ],
  },
}

export function getComponentApi(id: string) {
  return componentApi[id]
}
