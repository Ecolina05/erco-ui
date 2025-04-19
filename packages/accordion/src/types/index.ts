export type AccordionProps = {
  children: React.ReactNode
  title: string
  id?: string
  isOpen?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>
