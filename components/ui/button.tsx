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
        variant === "primary" && "bg-cas-light text-cas-forest shadow-[0_0_28px_rgba(223,243,233,0.18)] hover:bg-cas-mint hover:shadow-[0_0_38px_rgba(165,199,183,0.28)]",
        variant === "secondary" && "border border-cas-mint/35 bg-cas-primary/50 text-white hover:border-cas-light/60 hover:bg-cas-muted/40",
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
        variant === "primary" && "bg-cas-light text-cas-forest shadow-[0_0_28px_rgba(223,243,233,0.18)] hover:bg-cas-mint hover:shadow-[0_0_38px_rgba(165,199,183,0.28)]",
        variant === "secondary" && "border border-cas-mint/35 bg-cas-primary/50 text-white hover:border-cas-light/60 hover:bg-cas-muted/40",
        variant === "ghost" && "text-white/80 hover:bg-white/10 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
