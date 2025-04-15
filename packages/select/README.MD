# Select

A select component.

## Props

| Name        | Type     | Description                              |
| ----------- | -------- | ---------------------------------------- |
| options     | `Item[]` | The options for the select component     |
| classNames  | `string` | Additional class names                   |
| borderColor | `string` | The border color of the select component |
| description | `string` | The description of the select component  |
| id          | `string` | The id of the select component           |
| label       | `string` | The label of the select component        |
| radius      | `string` | The radius of the select component       |

## Events

| Name     | Type       | Description                                         |
| -------- | ---------- | --------------------------------------------------- |
| onChange | `function` | The callback function when the select value changes |

## Example

```jsx
<Select
  options={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ]}
  classNames=''
  borderColor='purple'
  description='Select description'
  radius='lg'
  onChange={value => console.log(value)}
/>
```

## License

ISC
