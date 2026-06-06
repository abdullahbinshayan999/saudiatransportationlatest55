import { faqs } from "@/lib/vehicles";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border bg-card mb-3 px-5 shadow-card">
          <AccordionTrigger className="py-4 text-left font-display text-base font-bold hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-foreground/85">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
