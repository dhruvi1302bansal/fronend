import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
const faqs =
 [
    {
        q: "What is online doctor consultation?",
        a: "Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet"
    },
    {
      q: "How does the online consultation work?",
      a: "You book a slot, fill your health details, and an Ayurvedic doctor connects with you via call/video.",
    },
    {
      q: "Are the doctors certified?",
      a: "Yes, all doctors are BAMS/MD Ayurveda experts with years of clinical experience.",
    },
    {
      q: "Will I get a treatment plan?",
      a: "Yes, your doctor provides a personalized plan including herbs, diet & lifestyle.",
    },
    {
      q: "Is Ayurveda safe?",
      a: "Ayurvedic treatments are natural and focus on long-term healing with minimal side effects.",
    },

 ]
    const mid = Math.ceil(faqs.length / 2);
    const col1 = faqs.slice(0, mid);
    const col2 = faqs.slice(mid);
  return (
   <section className="w-full py-20 px-6 bg-[#efe9cb] text-[#4f6339]">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* LEFT COLUMN */}
        <Accordion type="single" collapsible className="space-y-4">
          {col1.map((f, i) => (
            <AccordionItem
              key={i}
              value={`left-${i}`}
              className="bg-white border rounded-xl shadow-md px-4"
            >
              <AccordionTrigger className="text-lg font-semibold text-[#4f6339] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm opacity-90 pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* RIGHT COLUMN */}
        <Accordion type="single" collapsible className="space-y-4">
          {col2.map((f, i) => (
            <AccordionItem
              key={i}
              value={`right-${i}`}
              className="bg-white border rounded-xl shadow-md px-4"
            >
              <AccordionTrigger className="text-lg font-semibold text-[#4f6339] hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm opacity-90 pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
