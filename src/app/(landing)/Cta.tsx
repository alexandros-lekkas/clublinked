"use client";

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { ShinyButton } from "@/components/magicui/shiny-button";

export default function Cta() {
  return (
    <section className="relative flex items-center justify-center py-24 px-4">
      <NeonGradientCard className="max-w-2xl w-full mx-auto p-10 flex flex-col items-center gap-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">Ready to Ignite Your Campus Experience?</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          Join Clublinked today and unlock a universe of opportunities. Whether you’re a club leader or a passionate student, your next adventure starts here.
        </p>
        <ShinyButton className="text-lg px-10 py-4">
          <a href="#">Join the Revolution</a>
        </ShinyButton>
      </NeonGradientCard>
    </section>
  );
} 