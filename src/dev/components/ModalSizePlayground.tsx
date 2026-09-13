import { useState } from "react"
import { Rocket } from "lucide-react"

import { Button } from "@/components/Button"
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalIcon,
  ModalTitle,
  ModalTrigger,
  type ModalSize,
} from "@/components/Modal"

import { InlineCode } from "./InlineCode"

const SIZES: { id: ModalSize; label: string }[] = [
  { id: "xs", label: "Xs" },
  { id: "sm", label: "Sm" },
  { id: "md", label: "Md" },
  { id: "lg", label: "Lg" },
]

export function ModalSizePlayground() {
  const [size, setSize] = useState<ModalSize>("md")

  return (
    <Modal>
      <div className="space-y-4 rounded-2xl border border-dashed border-border bg-muted/20 p-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Active size: <InlineCode>{size}</InlineCode>. Open the modal to preview
          width.
        </p>

        <div className="flex flex-wrap gap-2">
          {SIZES.map((slot) => (
            <Button
              key={slot.id}
              type="button"
              size="sm"
              variant={size === slot.id ? "default" : "outline"}
              className="min-w-[3rem]"
              onClick={() => setSize(slot.id)}
            >
              {slot.label}
            </Button>
          ))}
        </div>

        <ModalTrigger className="inline-flex h-8 cursor-pointer items-center rounded-full border border-primary/15 bg-primary/95 px-4 text-xs font-medium text-primary-foreground">
          Open modal
        </ModalTrigger>
      </div>

      <ModalContent size={size} backdrop="blur">
        <ModalHeader>
          <ModalIcon>
            <Rocket aria-hidden />
          </ModalIcon>
          <ModalTitle>Size: {size.toUpperCase()}</ModalTitle>
          <ModalDescription>
            This dialog uses the native HTML <InlineCode>&lt;dialog&gt;</InlineCode>{" "}
            element with a blurred backdrop. Resize with the{" "}
            <InlineCode>size</InlineCode> prop.
          </ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <form method="dialog">
            <Button
              type="submit"
              className="w-full border-blue-500/20 bg-blue-600 text-white hover:border-blue-400/30 hover:bg-blue-500"
            >
              Continue
            </Button>
          </form>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
