import { highlightCode } from "../lib/highlightCode"

type SyntaxCodeProps = {
  code: string
}

export function SyntaxCode({ code }: SyntaxCodeProps) {
  return (
    <pre className="overflow-x-auto bg-muted/40 p-4 pt-6 font-mono text-[0.8125rem] leading-[1.7]">
      <code>{highlightCode(code)}</code>
    </pre>
  )
}
