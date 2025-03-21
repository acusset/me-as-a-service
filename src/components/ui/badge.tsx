import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline"
}

export function Badge({ 
  className, 
  variant = "default", 
  ...props 
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
        variant === "default" && "bg-alabaster/10 text-alabaster",
        variant === "outline" && "border border-alabaster/20 text-alabaster",
        className
      )}
      {...props}
    />
  )
} 