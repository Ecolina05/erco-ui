import type { ReactNode } from "react"

type TokenKind = "keyword" | "string" | "tag" | "component" | "plain"

const KEYWORDS = new Set([
  "import",
  "export",
  "from",
  "function",
  "return",
  "const",
  "default",
])

const TOKEN_REGEX =
  /("[^"]*"|'[^']*'|<\/?[A-Za-z][A-Za-z0-9]*|\b[A-Z][A-Za-z0-9]*\b|\b(?:import|export|from|function|return|const|default)\b)/g

const TOKEN_CLASS: Record<TokenKind, string> = {
  keyword: "text-code-keyword",
  string: "text-code-string",
  tag: "text-code-tag",
  component: "text-code-component",
  plain: "text-code-plain",
}

function getTokenKind(token: string): TokenKind {
  if (KEYWORDS.has(token)) return "keyword"
  if (token.startsWith('"') || token.startsWith("'")) return "string"
  if (token.startsWith("<")) return "tag"
  if (/^[A-Z]/.test(token)) return "component"
  return "plain"
}

export function highlightCode(code: string): ReactNode[] {
  return code.split(TOKEN_REGEX).map((part, index) => {
    if (!part) return null

    const kind = getTokenKind(part)

    return (
      <span key={`${index}-${part}`} className={TOKEN_CLASS[kind]}>
        {part}
      </span>
    )
  })
}
