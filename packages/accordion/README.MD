# Accordion

An accordion component.

## Props

| Name     | Type            | Description          |
| -------- | --------------- | -------------------- |
| children | React.ReactNode | Accordion content    |
| title    | string          | Accordion title      |
| id       | string          | Accordion id         |
| isOpen   | boolean         | Accordion open state |

## Example

```jsx
<Accordion
  title='Accordion Title'
  id='accordion-1'
  isOpen={true}
>
  <p>Accordion Content</p>
</Accordion>
```

## License

ISC
