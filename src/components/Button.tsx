import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Loading } from "@/components/Loading";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-transparent text-xs font-medium backdrop-blur-md backdrop-saturate-150 transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-primary/15 bg-primary/95 text-primary-foreground hover:border-primary/30 hover:bg-primary",
        destructive:
          "border-destructive/15 bg-destructive/95 text-destructive-foreground hover:border-destructive/30 hover:bg-destructive",
        outline:
          "border-input bg-background/95 text-foreground hover:border-foreground/20 hover:bg-background",
        secondary:
          "border-border/70 bg-secondary/95 text-secondary-foreground hover:border-border hover:bg-secondary",
        ghost:
          "border-transparent bg-transparent hover:border-border/50 hover:bg-foreground/5",
        link: "rounded-none border-transparent bg-transparent text-primary underline-offset-4 backdrop-blur-none hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-4",
        lg: "h-10 px-8 text-sm",
        icon: "size-9 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const loadingIconSizes = {
  default: 16,
  sm: 14,
  lg: 18,
  icon: 16,
} as const;

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading,
      isLoading,
      disabled,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const isBusy = loading ?? isLoading ?? false;
    const isDisabled = disabled || isBusy;
    const resolvedSize = size ?? "default";
    const loaderSize = loadingIconSizes[resolvedSize];

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isDisabled}
        aria-busy={isBusy}
        onClick={onClick}
        {...props}
      >
        <span className="relative inline-flex items-center justify-center">
          <span className={cn(isBusy && "invisible")}>{children}</span>
          {isBusy ? (
            <span className="absolute inset-0 inline-flex items-center justify-center">
              <Loading size={loaderSize} className="text-current" />
            </span>
          ) : null}
        </span>
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
