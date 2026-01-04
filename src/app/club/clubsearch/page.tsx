import Image from "next/image";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  "Consulting",
  "Sports",
  "Finance",
  "Engineering",
  "Volunteering",
];

const clubs = [
  {
    name: "Business Association",
    desc: "Professional development club",
    tag: "Consulting",
  },
  {
    name: "Investment Group",
    desc: "Learn about investing",
    tag: "Finance",
  },
  {
    name: "Volunteer Network",
    desc: "Service projects in the community",
    tag: "Volunteering",
  },
  {
    name: "Robotics Society",
    desc: "Build and program robots",
    tag: "Engineering",
  },
  {
    name: "Data Science Club",
    desc: "Exploring data science topics",
    tag: "Finance",
  },
  {
    name: "Marketing Club",
    desc: "Gain experience in marketing",
    tag: "Consulting",
  },
];

export default function Clubsearch() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E4AE6] via-[#0B78D7] to-[#16C6C1]">
      <main className="mx-auto w-full max-w-md px-5 pb-10 pt-8">
        {/* Header */}
        <header className="flex items-center gap-3">
          <div className="relative h-9 w-9">
            <Image
              src="/logo.png"
              alt="ClubLinked logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">
            CLUBLINKED
          </span>
        </header>

        {/* Title */}
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white">
          Explore Clubs
        </h1>

        {/* Search */}
        <div className="mt-6 relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            className="h-14 w-full rounded-full bg-white px-12 text-base text-slate-900 placeholder:text-slate-400 shadow-sm outline-none focus:ring-2 focus:ring-white/60"
            placeholder="Search by club name or category"
          />
        </div>

        {/* Categories */}
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
          {categories.map((c) => (
            <button
              key={c}
              className="shrink-0 rounded-full bg-white/80 px-5 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur hover:bg-white"
            >
              {c}
            </button>
          ))}
        </div>

        {/* Club cards */}
        <section className="mt-6 grid grid-cols-2 gap-4">
          {clubs.map((club) => (
            <Card
              key={club.name}
              className="rounded-2xl border-0 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="relative h-12 w-12 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Club logo"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold leading-tight text-slate-900">
                    {club.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {club.desc}
                  </p>

                  <span className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {club.tag}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
