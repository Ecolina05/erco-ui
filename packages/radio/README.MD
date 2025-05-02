# Radio Group

A radio group component.

## Props

| Name        | Type           | Description                         |
| ----------- | -------------- | ----------------------------------- |
| options     | `RadioProps[]` | The options for the radio group     |
| className  | `string`       | The class names for the radio group |
| color       | `string`       | The color for the radio group       |
| label       | `string`       | The label for the radio group       |
| orientation | `string`       | The orientation for the radio group |

## Events

| Name     | Type     | Description                                          |
| -------- | -------- | ---------------------------------------------------- |
| onChange | function | Callback function when the radio group value changes |

## Example

```jsx
<RadioGroup
  options={[
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' }
  ]}
  className=''
  color='purple'
  label='My radio'
  orientation='vertical'
/>
```

## Only Radio

```jsx
<Radio
  value='1'
  text='Option 1'
  isDisabled={false}
  isSelected={false}
  text='Option 1'
  onChange={value => console.log(value)}
/>
```

## License

ISC
