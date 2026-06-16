import { cn } from "@/lib/utils/cn";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "glow-hover inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-safety",
        variant === "primary" && "bg-safety text-steel shadow-[0_0_28px_rgba(245,179,1,0.18)] hover:bg-amber-300 hover:shadow-[0_0_38px_rgba(245,179,1,0.26)]",
        variant === "secondary" && "border border-white/15 bg-white/10 text-white hover:border-safety/35 hover:bg-white/15",
        variant === "ghost" && "text-white/80 hover:bg-white/10 hover:text-white",
        className
      )}
      {...props}
    />
  );
}

export function LinkButton({
  className,
  variant = "primary",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: "primary" | "secondary" | "ghost"; children: ReactNode }) {
  return (
    <a
      className={cn(
        "glow-hover inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-safety",
        variant === "primary" && "bg-safety text-steel shadow-[0_0_28px_rgba(245,179,1,0.18)] hover:bg-amber-300 hover:shadow-[0_0_38px_rgba(245,179,1,0.26)]",
        variant === "secondary" && "border border-white/15 bg-white/10 text-white hover:border-safety/35 hover:bg-white/15",
        variant === "ghost" && "text-white/80 hover:bg-white/10 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
