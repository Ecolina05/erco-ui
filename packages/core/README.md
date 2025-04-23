# @erco-ui/core

The central package that exports all components from the ERCO UI library.

## Installation

```bash
npm install @erco-ui/core
```

## Usage

You can import all components from a single package:

```jsx
import { Button, Avatar, Card } from '@erco-ui/core'

function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Avatar name='Example User' />
      <Card>Card content</Card>
    </div>
  )
}
```

You can also import a specific component:

```jsx
import { Checkbox } from '@erco-ui/core'

function FormExample() {
  return (
    <form>
      <Checkbox label='I accept the terms and conditions' />
    </form>
  )
}
```

Or use the default object:

```jsx
import ERCO from '@erco-ui/core'

function App() {
  return (
    <div>
      <ERCO.Button>Click me</ERCO.Button>
      <ERCO.Avatar name='Example User' />
    </div>
  )
}
```

## Included Components

- Accordion
- Avatar
- Button
- Card
- Checkbox
- Input
- Radio
- Select
- Spinner
- Switch
- Tabs
- TextArea
