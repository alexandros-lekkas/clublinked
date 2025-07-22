"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { WarpBackground } from "@/components/magicui/warp-background";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <WarpBackground>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <AuroraText className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Connect. Empower. Thrive.
          </AuroraText>
          <AnimatedGradientText className="text-2xl md:text-3xl font-semibold mt-2">
            The Ultimate Platform for University Clubs & Students
          </AnimatedGradientText>
          <SparklesText className="text-lg md:text-xl text-muted-foreground mt-4">
            Effortlessly manage clubs, supercharge onboarding, and unlock a
            world of opportunities. Join a vibrant community where passion meets
            possibility.
          </SparklesText>
          <div className="mt-8 flex justify-center">
            <ShinyButton className="text-lg px-8 py-3">
              <a href="#features">Get Started Now</a>
            </ShinyButton>
          </div>
        </div>
      </WarpBackground>
    </section>
  );
}
