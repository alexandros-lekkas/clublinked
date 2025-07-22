"use client";

import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Marquee } from "@/components/magicui/marquee";
import { Card } from "@/components/ui/card";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Users, Rocket, Sparkles, ShieldCheck, Link2 } from "lucide-react";

const features = [
  {
    Icon: Rocket,
    name: "Lightning Onboarding",
    description: "Effortlessly onboard new members and manage club data with blazing speed.",
    cta: "Streamline Now",
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee pauseOnHover className="absolute top-10 [--duration:18s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] ">
        <span className="text-xl font-bold text-primary">Fast. Simple. Powerful.</span>
      </Marquee>
    ),
  },
  {
    Icon: Users,
    name: "Vibrant Discovery",
    description: "Students explore clubs, connect instantly, and find their tribe.",
    cta: "Find Your Club",
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedList className="absolute right-2 top-4 h-[200px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
        <span className="text-lg font-semibold text-secondary">Art. Tech. Sports. More.</span>
        <span className="text-lg font-semibold text-secondary">Meet. Collaborate. Grow.</span>
        <span className="text-lg font-semibold text-secondary">Events. Projects. Fun.</span>
      </AnimatedList>
    ),
  },
  {
    Icon: ShieldCheck,
    name: "Secure & Trusted",
    description: "Your data is protected with enterprise-grade security and privacy.",
    cta: "Learn More",
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90 p-4 bg-background/80">
        <span className="text-base font-medium text-green-600">End-to-end encrypted</span>
      </Card>
    ),
  },
  {
    Icon: Sparkles,
    name: "Custom Forms",
    description: "Build beautiful, flexible forms for applications, feedback, and more.",
    cta: "Create a Form",
    href: "#",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee pauseOnHover className="absolute top-10 [--duration:22s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] ">
        <span className="text-base font-semibold text-accent">Drag. Drop. Deploy.</span>
      </Marquee>
    ),
  },
  {
    Icon: Link2,
    name: "Unified Platform",
    description: "One hub for clubs and students. Everything you need, all in one place.",
    cta: "See How",
    href: "#",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedList className="absolute right-2 top-4 h-[150px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90">
        <span className="text-base font-semibold text-primary">Dashboard. Analytics. Messaging.</span>
        <span className="text-base font-semibold text-primary">All-in-one. Always-on.</span>
      </AnimatedList>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Event Magic",
    description: "Promote, manage, and track events with ease. Never miss a moment.",
    cta: "Host an Event",
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Card className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90 p-4 bg-background/80">
        <span className="text-base font-medium text-blue-600">Automated reminders</span>
      </Card>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-6xl px-4 py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Unleash the Power of Clublinked</h2>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
} 