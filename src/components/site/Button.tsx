import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition shadow-soft hover:translate-y-[-1px] active:translate-y-0";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:opacity-95",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-95",
  ghost: "bg-transparent text-foreground border border-border hover:bg-muted shadow-none",
};

export function CTAButton({
  variant = "primary",
  to,
  href,
  children,
  className = "",
  ...rest
}: {
  variant?: Variant;
  to?: ComponentProps<typeof Link>["to"];
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"a">, "href">) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <a href={href} className={cls} {...rest}>{children}</a>;
}
