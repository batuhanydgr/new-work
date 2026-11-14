import Link from "next/link";
import { cn } from "@/utils/cn";

const variants = {
  primary: "bg-ink text-cream hover:bg-bronze hover:text-ink",
  bronze: "bg-bronze text-ink hover:bg-bronze-deep hover:text-cream",
  outline: "border border-current bg-transparent hover:border-bronze hover:bg-bronze hover:text-ink",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-center text-[12px] font-medium uppercase tracking-[0.18em] transition-colors disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
