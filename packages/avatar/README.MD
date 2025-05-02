# Avatar

An accessible avatar component with fallback support and customization options.

## Props

| Name       | Type    | Description                                       |
| ---------- | ------- | ------------------------------------------------- |
| alt        | string  | Alt text for the image (accessibility)            |
| className | string  | Additional class names                            |
| color      | string  | Avatar background color                           |
| isBordered | boolean | Whether the avatar has a border                   |
| name       | string  | Full name (generates initials if no image/text)   |
| radius     | string  | Border radius style (sm, md, lg, full)            |
| size       | string  | Avatar size (sm, md, lg)                          |
| src        | string  | Image source URL                                  |
| text       | string  | Text to display (limited to 2 chars)              |

## Example

```jsx
<Avatar
  alt='Ernesto Colina'
  color='purple'
  className='my-avatar'
  isBordered={false}
  name='Ernesto Colina'
  radius='lg'
  size='md'
  src='https://example.com/avatar.jpg'
  text='EC'
/>
```

## License

ISC
