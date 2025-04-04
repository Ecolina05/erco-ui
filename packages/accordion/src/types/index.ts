export type AccordionProps = {
  children: React.ReactNode
  title: string
  isOpen?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>
