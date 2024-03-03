import React, { useState } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-purple-500 text-white hover:bg-purple-500/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border text-purple-500 border-purple-500 bg-white hover:bg-purple-500 hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-black underline-offset-4 underline hover:no-underline",
        toggle: "bg-blue-500 text-white hover:bg-blue-500/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
      setIsToggled(true); // Set to true to apply "toggle" variant
    };
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant: isToggled ? "toggle" : variant,
            size,
            className,
          })
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      />
    );
  }
);
MenuButton.displayName = "MenuButton";

export { MenuButton, buttonVariants };
