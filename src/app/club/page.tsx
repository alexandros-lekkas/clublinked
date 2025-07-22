const mockStats = [
  { label: "Forms Created", value: 3 },
  { label: "Submissions Received", value: 42 },
  { label: "Pending Reviews", value: 5 },
];

export default function ClubHomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Club Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {mockStats.map((stat) => (
          <div key={stat.label} className="border border-[var(--border)] bg-[var(--card)] rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[var(--primary)]">{stat.value}</div>
            <div className="text-[var(--muted-foreground)] mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 