import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "sm" | "md" | "lg" | "icon";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";

        const variants = {
            primary:
                "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:from-emerald-600 hover:to-emerald-700 focus:ring-emerald-500",
            secondary:
                "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus:ring-zinc-500 border border-zinc-700",
            outline:
                "border-2 border-zinc-700 text-zinc-300 hover:border-emerald-500 hover:text-emerald-500 focus:ring-emerald-500 bg-transparent",
            ghost: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 focus:ring-zinc-500",
            link: "text-emerald-500 hover:text-emerald-400 underline-offset-4 hover:underline p-0 h-auto font-normal",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], variant !== 'link' && sizes[size], className)}
                disabled={isLoading || props.disabled}
                {...props}
            >
                {isLoading ? (
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
