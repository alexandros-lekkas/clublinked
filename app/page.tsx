import Image from "next/image";
import profilePic from "./Profile_picture.png";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-black">
      <main className="max-w-3xl mx-auto px-6 py-8">
  <div className="grid grid-cols-1 gap-12 items-start text-left">
          <section className="space-y-6">
            <div className="flex justify-start mb-4">
              <div className="w-40 h-28 overflow-hidden">
                <Image
                  src={profilePic}
                  alt="Founder"
                  width={640}
                  height={448}
                  sizes="(max-width: 768px) 160px, 320px"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Connect. Manage. Grow.
            </h1>

            <p className="max-w-xl text-lg text-muted-foreground">
              ClubLinked helps clubs and communities manage memberships, events,
              and communication in a single simple platform. Engage members,
              streamline signups, and grow your community.
            </p>

            <div className="flex gap-4 flex-wrap mt-8 justify-start">
              <Button asChild>
                <a href="#get-started">Get started</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#features">See features</a>
              </Button>
            </div>

            <div className="pt-6">
              <div className="text-sm text-muted-foreground">
                Join 10,000+ clubs using ClubLinked to manage their communities.
              </div>
            </div>
          </section>
        </div>
        <footer className="mt-10">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h4 className="text-sm font-semibold">ClubLinked</h4>
                <p className="text-sm text-muted-foreground mt-1">Helping clubs connect and grow — built with care.</p>
                <div className="flex gap-4 mt-4">
                  <a href="#features" className="text-sm hover:underline">Features</a>
                  <a href="#pricing" className="text-sm hover:underline">Pricing</a>
                </div>
              </div>

              <div className="flex items-center">
                <Button variant="ghost">Contact us</Button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
