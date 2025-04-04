# Checkbox

A checkbox component.

## Props

| Name     | Type    | Description             |
| -------- | ------- | ----------------------- |
| color    | string  | Checkbox color          |
| id       | string  | Checkbox id             |
| label    | string  | Checkbox label          |
| checked  | boolean | Checkbox state          |
| disabled | boolean | Checkbox disabled state |

## Events

| Name     | Type     | Description                                    |
| -------- | -------- | ---------------------------------------------- |
| onChange | function | Callback function when the checkbox is changed |

## Example

```jsx
<Checkbox
  color='primary'
  id='my-checkbox'
  label='My checkbox'
  checked={true}
  onChange={() => {}}
  disabled={false}
/>
```

## License

ISC
