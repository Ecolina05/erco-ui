# Avatar

An avatar component.

## Props

| Name       | Type    | Description                    |
| ---------- | ------- | ------------------------------ |
| alt        | string  | Alt text for the image         |
| classNames | string  | Additional class names         |
| color      | string  | Avatar color                   |
| isBordered | boolean | Whether the avatar is bordered |
| radius     | string  | Avatar radius                  |
| size       | string  | Avatar size                    |
| src        | string  | Image source                   |
| text       | string  | Text content                   |

## Example

```jsx
<Avatar
  alt='Avatar'
  color='purple'
  className='my-avatar'
  isBordered={false}
  radius='sm'
  size='sm'
  src='https://example.com/avatar.jpg'
  text='John Doe'
>
```

## License

ISC
