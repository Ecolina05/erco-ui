# Button

A button component.

## Props

| Name      | Type   | Description                   |
| --------- | ------ | ----------------------------- |
| children  | node   | Node to display on the button |
| className | string | Additional class names        |
| color     | string | Button color                  |
| size      | string | Button size                   |

## Events

| Name    | Type     | Description                                  |
| ------- | -------- | -------------------------------------------- |
| onClick | function | Callback function when the button is clicked |

## Example

```jsx
<Button
  color='primary'
  className='my-button'
  onClick={() => {}}
  size='xs'
>
  Click me
</Button>
```

## License

ISC
