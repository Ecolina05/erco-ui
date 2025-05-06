# Link

A link component.

## Props

| Name      | Type            | Description    |
| --------- | --------------- | -------------- |
| className | string          | Link className |
| children  | React.ReactNode | Link children  |
| color     | string          | Link color     |
| href      | string          | Link href      |
| size      | string          | Link size      |
| target    | string          | Link target    |
| underline | boolean         | Link underline |

## Events

| Name    | Type                                       | Description  |
| ------- | ------------------------------------------ | ------------ |
| onClick | React.MouseEventHandler<HTMLAnchorElement> | Link onClick |

## Example

```jsx
<Link
  className=''
  color='purple'
  href='https://example.com'
  size='sm'
>
  Link
</Link>
```

## License

ISC
