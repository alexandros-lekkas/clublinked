import Link from "next/link";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="w-full border-b border-[var(--border)] bg-[var(--sidebar)] text-[var(--sidebar-foreground)] px-6 py-3 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight">Clublinked</span>
        <div className="flex gap-4">
          <Link href="/user/explore" className="hover:underline">Explore</Link>
          <Link href="/user/profile" className="hover:underline">Profile</Link>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto w-full px-4 py-8">{children}</main>
    </div>
  );
} 