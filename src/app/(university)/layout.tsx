import React from "react";
import Link from "next/link";

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[80vh] w-full">
      <aside
        className="w-64 shrink-0 border-r border-[var(--sidebar-border)] bg-[var(--sidebar)] text-[var(--sidebar-foreground)] p-6 flex flex-col gap-4"
        style={{ borderRadius: "var(--radius-lg) 0 0 var(--radius-lg)" }}
      >
        <nav className="flex flex-col gap-2">
          <Link
            href="/dashboard"
            className="rounded-md px-3 py-2 font-medium hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/club/form-builder"
            className="rounded-md px-3 py-2 font-medium hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] transition-colors"
          >
            Form Builder
          </Link>
          <Link
            href="/club/submissions"
            className="rounded-md px-3 py-2 font-medium hover:bg-[var(--sidebar-accent)] hover:text-[var(--sidebar-accent-foreground)] transition-colors"
          >
            Submissions
          </Link>
        </nav>
      </aside>
      <section className="flex-1 p-8">{children}</section>
    </div>
  );
} 