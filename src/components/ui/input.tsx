import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-alabaster/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-tekhelet disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default: "border-xanthous bg-eerie text-alabaster",
        outline: "border-input bg-transparent", 
        ghost: "border-transparent bg-transparent",
      },
      size: {
        default: "h-9 px-3 py-1",
        sm: "h-8 px-2 text-xs",
        lg: "h-10 px-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, 
  VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
