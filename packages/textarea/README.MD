# Textarea

A textarea component.

## Props

| Name            | Type    | Description                  |
| --------------- | ------- | ---------------------------- |
| borderColor     | string  | Border color of the textarea |
| description     | string  | Textarea description         |
| id              | string  | Textarea id                  |
| inputClassNames | string  | Additional class names       |
| isRequired      | boolean | Textarea required            |
| label           | string  | Textarea label               |
| labelClassNames | string  | Additional label class names |
| placeholder     | string  | Textarea placeholder         |
| radius          | string  | Textarea radius              |
| ...rest         | any     | Additional props             |

## Example

```jsx
<Textarea
  borderColor='purple'
  description=''
  id='first_name'
  inputClassNames=''
  isRequired={true}
  label='First Name'
  labelClassNames=''
  placeholder='Ernesto Colina'
  radius='lg'
/>
```

## License

ISC
