import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-sm border border-transparent px-2 py-0.5 text-xs font-mono whitespace-nowrap transition-colors focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-[#141413] text-[#F6F4EE] [a]:hover:bg-[#C84B31]",
        secondary:
          "bg-[#EFECE4] text-[#141413] border-[#DCD8CE] [a]:hover:bg-[#DCD8CE]/60",
        destructive:
          "bg-[#C84B31]/12 text-[#C84B31] border-[#C84B31]/30 focus-visible:ring-[#C84B31]/20 [a]:hover:bg-[#C84B31]/20",
        outline:
          "border-[#DCD8CE] text-[#141413] [a]:hover:bg-[#EFECE4] [a]:hover:text-[#6E6A63]",
        ghost:
          "hover:bg-[#EFECE4] hover:text-[#6E6A63]",
        link: "text-[#141413] underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      variant,
    },
  })
}

export { Badge, badgeVariants }
