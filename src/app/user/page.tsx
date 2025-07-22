const mockClubs = [
  { name: "Robotics Club", description: "Build and program robots." },
  { name: "Art Society", description: "Explore your creativity with fellow artists." },
  { name: "Debate Team", description: "Sharpen your public speaking skills." },
];

export default function UserHomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome, Student!</h1>
      <h2 className="text-lg font-semibold mb-4">Recommended Clubs</h2>
      <ul className="space-y-4">
        {mockClubs.map((club) => (
          <li key={club.name} className="border border-[var(--border)] bg-[var(--card)] rounded-lg p-4">
            <div className="font-semibold text-[var(--primary)]">{club.name}</div>
            <div className="text-[var(--muted-foreground)]">{club.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
} 