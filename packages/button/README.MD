# Button

A button component.

## Props

| Name      | Type    | Description                   |
| --------- | ------- | ----------------------------- |
| ariaLabel | string  | Aria label for the button     |
| children  | node    | Node to display on the button |
| className | string  | Additional class names        |
| color     | string  | Button color                  |
| isLoading | boolean | Button loading state          |
| size      | string  | Button size                   |

## Events

| Name    | Type     | Description                                  |
| ------- | -------- | -------------------------------------------- |
| onClick | function | Callback function when the button is clicked |

## Example

```jsx
<Button
  ariaLabel='Click me'
  color='primary'
  className='my-button'
  isLoading={false}
  onClick={() => {}}
  size='xs'
>
  Click me
</Button>
```

## License

ISC
