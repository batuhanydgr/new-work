import { cn } from "@/utils/cn";

export default function Container({ className = "", children }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
