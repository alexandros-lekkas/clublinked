export default function LandingPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-4xl font-bold mb-4 text-[var(--primary)]">Welcome to Clublinked</h1>
      <p className="text-lg text-[var(--muted-foreground)] mb-8">Connecting students and clubs at your university.</p>
      <div className="flex gap-4">
        <a href="/user/explore" className="rounded-lg px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold hover:bg-[var(--secondary)] transition">I'm a Student</a>
        <a href="/club/onboarding" className="rounded-lg px-6 py-3 bg-[var(--secondary)] text-[var(--secondary-foreground)] font-semibold hover:bg-[var(--primary)] transition">I'm a Club</a>
      </div>
    </section>
  );
} 