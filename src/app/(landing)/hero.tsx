import Link from "next/link";

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { WarpBackground } from "@/components/magicui/warp-background";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center">
      <WarpBackground>
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Welcome to{" "}
            <AnimatedGradientText colorFrom="var(--primary)">
              ClubLinked
            </AnimatedGradientText>
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold">
            The Ultimate Platform for University Clubs & Students
          </h3>
          <div className="mt-4 flex justify-center">
            <Link href="/auth" passHref>
              <Button size="lg">Join the Club</Button>
            </Link>
          </div>
        </div>
      </WarpBackground>
    </section>
  );
}
