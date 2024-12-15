import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I save my favorite recipes?</AccordionTrigger>
        <AccordionContent>
          Yes. You can create an account and save your favorite recipes for
          quick access anytime.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Are the recipes beginner-friendly?</AccordionTrigger>
        <AccordionContent>
          Absolutely! We provide step-by-step instructions, ingredient lists,
          and cooking tips for all levels.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Can I filter recipes by dietary preferences?
        </AccordionTrigger>
        <AccordionContent>
          Yes. You can filter recipes by vegan, gluten-free, keto, and other
          dietary preferences using our advanced search.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
