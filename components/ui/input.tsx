import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex w-full rounded-full bg-zinc-900",
					"transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white border border-transparent hover:border-white/20 disabled:cursor-not-allowed disabled:opacity-50",
					"[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
