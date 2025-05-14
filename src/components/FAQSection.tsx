
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of web development services including responsive website design, e-commerce solutions, custom web applications, CMS integration, performance optimization, and maintenance."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while more complex projects may take 2-3 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer: "Yes, we provide ongoing maintenance and support for all our projects. We offer various maintenance packages to ensure your website remains secure, up-to-date, and functioning optimally."
    },
    {
      question: "What is your development process?",
      answer: "Our development process includes discovery, planning, design, development, testing, deployment, and maintenance. We maintain clear communication throughout to ensure your project meets your expectations."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Absolutely! We specialize in website redesigns that improve aesthetics, functionality, and performance while maintaining your brand identity."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background relative">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-pixel-purple/20 px-4 py-2 rounded-lg mb-4">
            <h2 className="font-pixel text-pixel-purple text-sm">FAQ</h2>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently <span className="text-pixel-purple">Asked Questions</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and support.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-pixel-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      <div className="section-divider mt-16"></div>
    </section>
  );
};

export default FAQSection;
