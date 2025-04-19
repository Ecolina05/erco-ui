# Card

A card component.

## Props

| Name        | Type              | Description                         |
| ----------- | ----------------- | ----------------------------------- |
| children    | `React.ReactNode` | The content of the card             |
| classNames  | `string`          | Additional class names              |
| isBordered  | `boolean`         | Whether the card has a border       |
| isClickable | `boolean`         | Whether the card is clickable       |
| isHoverable | `boolean`         | Whether the card has a hover effect |
| isPressable | `boolean`         | Whether the card has a press effect |
| radius      | `string`          | The border radius of the card       |
| shadow      | `string`          | The shadow of the card              |

## Events

| Name    | Type     | Description                                |
| ------- | -------- | ------------------------------------------ |
| onClick | function | Callback function when the card is clicked |

## Example

```jsx
<Card>Card children</Card>
```

## License

ISC
