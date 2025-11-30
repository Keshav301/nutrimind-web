import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, icon, id, ...props }, ref) => {
        const inputId = id || React.useId();

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-zinc-400 ml-1"
                    >
                        {label}
                    </label>
                )}
                <div className="relative group">
                    {icon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 transition-colors group-focus-within:text-emerald-500">
                            {icon}
                        </div>
                    )}
                    <input
                        id={inputId}
                        ref={ref}
                        className={cn(
                            "flex h-11 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 transition-all duration-200",
                            "focus:border-emerald-500/50 focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/10",
                            "hover:border-zinc-700",
                            icon && "pl-10",
                            error && "border-red-500/50 focus:border-red-500 focus:ring-red-500/10",
                            className
                        )}
                        {...props}
                    />
                </div>
                {error && (
                    <p className="text-xs text-red-400 ml-1 animate-in slide-in-from-top-1 fade-in-0">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
