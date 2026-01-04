import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/logo.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1f66e5] via-[#2e86f5] to-[#4db7ff] text-white">
      <main className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-10">
        {/* Top: logo + wordmark */}
        <header className="flex items-center justify-center gap-4">
          <div className="relative h-12 w-12">
            <Image
              src={profilePic}
              alt="ClubLinked logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-extrabold tracking-wide">
            CLUBLINKED
          </span>
        </header>

        {/* Middle: big stacked headline */}
        <section className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="leading-[0.95] tracking-tight">
            <span className="block text-6xl font-extrabold sm:text-7xl">
              Join.
            </span>
            <span className="mt-4 block text-6xl font-extrabold sm:text-7xl">
              Manage.
            </span>
            <span className="mt-4 block text-6xl font-extrabold sm:text-7xl">
              Grow.
            </span>
          </h1>

          {/* Big CTA button */}
          <div className="mt-14 w-full">
            <Button
              asChild
              className="h-16 w-full rounded-full bg-[#1d56d8] text-2xl font-semibold text-white shadow-lg shadow-black/20 hover:bg-[#1a4fc7]"
            >
              <Link href="/user/userinfo">Get Started</Link>
            </Button>
          </div>
        </section>

        {/* Bottom spacing / optional footer (kept minimal like the image) */}
        <footer className="pb-2 text-center text-xs text-white/70">
          © 2025 ClubLinked
        </footer>
      </main>
    </div>
  );
}
