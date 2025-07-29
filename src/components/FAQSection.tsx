import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

export default function FAQSection({ faqs = [] }: FAQSectionProps) {
  return (
    <section id="faq" className="py-20 bg-xbox-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-glow">
          Часто задаваемые вопросы
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-xbox-gray/30 rounded-lg bg-xbox-black">
                <AccordionTrigger className="px-6 py-4 text-left hover:text-xbox-green" id={faq.id}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-xbox-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}