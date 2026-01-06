import { Infobox } from "@/app/user/signup/infobox";

export default function UserInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0E4AE6] via-[#0B78D7] to-[#16C6C1]">
      <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT TEXT — hidden on mobile, visible on desktop */}
          <section className="hidden text-white lg:block">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Find Your Campus
              <br />
              Community
            </h1>

            <p className="mt-5 max-w-md text-base text-white/85 sm:text-lg">
              Join and connect with student clubs and organizations across your
              campus.
            </p>

            <div className="mt-10">
              <div className="h-px w-40 bg-white/25" />
            </div>
          </section>

          {/* RIGHT: INFOBOX */}
          <section className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <Infobox />
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
