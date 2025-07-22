"use client";

import { AnimatedList } from "@/components/magicui/animated-list";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    q: "What is Clublinked?",
    a: "Clublinked is the ultimate platform connecting university clubs and students, making onboarding, discovery, and management effortless.",
  },
  {
    q: "How do I join a club?",
    a: "Simply browse clubs, explore their profiles, and submit your application or interest form in just a few clicks.",
  },
  {
    q: "Is Clublinked free to use?",
    a: "Yes! Clublinked is free for students. Clubs can get started with powerful tools at no cost.",
  },
  {
    q: "How secure is my data?",
    a: "Your privacy and security are our top priorities. We use enterprise-grade encryption and never share your data without consent.",
  },
  {
    q: "Can clubs customize their onboarding forms?",
    a: "Absolutely! Clubs can build custom forms, track submissions, and manage everything from a unified dashboard.",
  },
];

export default function Faq() {
  return (
    <section className="relative mx-auto max-w-3xl px-4 py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <AnimatedList delay={800} className="flex flex-col gap-6">
        {faqs.map((faq, idx) => (
          <Card key={idx} className="p-6 bg-background/80 border rounded-xl shadow-sm">
            <div className="font-semibold text-lg mb-2 text-primary">{faq.q}</div>
            <div className="text-base text-muted-foreground">{faq.a}</div>
          </Card>
        ))}
      </AnimatedList>
    </section>
  );
} 