# Switch

A switch component.

## Props

| Name     | Type     | Description                                  |
| -------- | -------- | -------------------------------------------- |
| checked  | boolean  | Switch state                                 |
| color    | string   | Spinner color                                |
| disabled | boolean  | Switch disabled state                        |
| id       | string   | Switch id                                    |
| label    | string   | Switch label                                 |
| onChange | function | Callback function when the switch is changed |

## Example

```jsx
<Switch
  checked={false}
  color='purple'
  disabled={false}
  id='switch-1'
  label='Switch'
  onChange={() => {}}
/>
```

## License

ISC
