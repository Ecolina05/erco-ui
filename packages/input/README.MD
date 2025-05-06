# Input

An input component.

## Props

| Name            | Type    | Description                  |
| --------------- | ------- | ---------------------------- |
| borderColor     | string  | Border color of the input    |
| description     | string  | Input description            |
| id              | string  | Input id                     |
| className       | string  | Additional class names       |
| isRequired      | boolean | Input required               |
| label           | string  | Input label                  |
| labelClassName  | string  | Additional label class names |
| placeholder     | string  | Input placeholder            |
| radius          | string  | Input radius                 |
| ...rest         | any     | Additional props             |

## Example

```jsx
<Input
  borderColor='purple'
  description=''
  id='first_name'
  className=''
  isRequired={true}
  label='First Name'
  labelClassName=''
  placeholder='Ernesto Colina'
  radius='lg'
/>
```

## License

ISC
