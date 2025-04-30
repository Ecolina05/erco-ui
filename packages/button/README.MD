# Button

A button component.

## Props

| Name       | Type    | Description                   |
| ---------- | ------- | ----------------------------- |
| children   | node    | Node to display on the button |
| ariaLabel  | string  | Aria label for the button     |
| className  | string  | Additional class names        |
| color      | string  | Button color                  |
| isDisabled | boolean | Button disabled state         |
| isIconOnly | boolean | Button icon only state        |
| isLoading  | boolean | Button loading state          |
| size       | string  | Button size                   |
| variant    | string  | Button variant                |

## Events

| Name    | Type     | Description                                  |
| ------- | -------- | -------------------------------------------- |
| onClick | function | Callback function when the button is clicked |

## Example

```jsx
<Button
  ariaLabel='Click me'
  color='purple'
  className='my-button'
  isDisabled={false}
  isIconOnly={false}
  isLoading={false}
  onClick={() => {}}
  size='xs'
  variant='solid'
>
  Click me
</Button>
```

## License

ISC
