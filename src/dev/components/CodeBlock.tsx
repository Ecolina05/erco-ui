import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/Button"
import { Card } from "@/components/Card"

import { SyntaxCode } from "./SyntaxCode"

type PackageManager = "pnpm" | "npm" | "yarn" | "bun"

type CodeBlockProps = {
  commands?: Record<PackageManager, string>
  code?: string
}

const managers: PackageManager[] = ["pnpm", "npm", "yarn", "bun"]

export function CodeBlock({ commands, code }: CodeBlockProps) {
  const [manager, setManager] = useState<PackageManager>("pnpm")
  const [copied, setCopied] = useState(false)

  const value = commands ? commands[manager] : code ?? ""

  async function handleCopy() {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden py-0 shadow-none">
      <div className="flex items-center justify-between border-b px-3 py-2">
        {commands ? (
          <div className="flex items-center gap-1">
            {managers.map((item) => (
              <Button
                key={item}
                type="button"
                variant={manager === item ? "secondary" : "ghost"}
                size="sm"
                className="h-7 px-2.5 text-xs"
                onClick={() => setManager(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        ) : (
          <span />
        )}
        <Button
          variant="ghost"
          size="icon"
          className="size-7"
          aria-label="Copy code"
          onClick={handleCopy}
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </Button>
      </div>
      <SyntaxCode code={value} />
    </Card>
  )
}
