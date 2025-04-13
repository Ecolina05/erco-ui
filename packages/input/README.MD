# Input

An input component.

## Props

| Name        | Type    | Description               |
| ----------- | ------- | ------------------------- |
| borderColor | string  | Border color of the input |
| classNames  | string  | Additional class names    |
| id          | string  | Input id                  |
| isRequired  | boolean | Input required            |
| label       | string  | Input label               |
| placeholder | string  | Input placeholder         |
| radius      | string  | Input radius              |
| ...rest     | any     | Additional props          |

## Example

```jsx
<Input
  borderColor='purple'
  id='first_name'
  isRequired={true}
  label='First Name'
  placeholder='John'
  radius='lg'
/>
```

## License

ISC
