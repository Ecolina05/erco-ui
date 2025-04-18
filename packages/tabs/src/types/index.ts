export type TabOption = {
  label: string
  value: string
  disabled?: boolean
  icon?: React.ReactNode
}

export type TabsProps = {
  tabs: TabOption[]
  content: React.ReactNode[]
  className?: string
  defaultValue?: string
  orientation?: 'horizontal' | 'vertical'
  value?: string
  onChange?: (value: string) => void
}
