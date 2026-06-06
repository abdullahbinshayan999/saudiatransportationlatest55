import { MessageCircle } from "lucide-react";
import { waLink, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppButton({
  className,
  children = "Book on WhatsApp",
  message,
  variant = "solid",
  size = "md",
}: {
  className?: string;
  children?: React.ReactNode;
  message?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}) {
  const sizeCls =
    size === "sm" ? "h-9 px-4 text-sm" : size === "lg" ? "h-12 px-7 text-base" : "h-11 px-6 text-sm";
  const variantCls =
    variant === "solid"
      ? "bg-whatsapp text-whatsapp-foreground hover:brightness-110"
      : variant === "outline"
      ? "border-2 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground"
      : "text-whatsapp hover:bg-whatsapp/10";
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all shadow-card",
        sizeCls,
        variantCls,
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${site.name}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant animate-float-pulse"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
