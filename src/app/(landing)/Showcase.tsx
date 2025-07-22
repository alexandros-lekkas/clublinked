"use client";

import { Globe } from "@/components/magicui/globe";
import { IconCloud } from "@/components/magicui/icon-cloud";

const techIcons = [
  "typescript",
  "react",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "docker",
  "github",
  "figma",
  "vercel",
];

export default function Showcase() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 px-4 bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Built for the Future. Powered by Community.</h2>
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
          <Globe className="top-0 left-0" />
        </div>
        <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center">
          <IconCloud images={techIcons.map(slug => `https://cdn.simpleicons.org/${slug}/${slug}`)} />
        </div>
      </div>
      <p className="mt-12 text-lg md:text-xl text-center text-muted-foreground max-w-2xl mx-auto">
        Clublinked is trusted by innovators, creators, and leaders worldwide. Join a global movement and shape the future of campus life.
      </p>
    </section>
  );
} 