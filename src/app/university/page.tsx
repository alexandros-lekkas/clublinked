const mockClubs = [
  { name: "Robotics Club", description: "Build and program robots." },
  {
    name: "Art Society",
    description: "Explore your creativity with fellow artists.",
  },
  { name: "Debate Team", description: "Sharpen your public speaking skills." },
  { name: "Chess Club", description: "Challenge your mind with chess." },
  { name: "Music Ensemble", description: "Perform and enjoy music together." },
];

export default function UniversityHomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">All Clubs</h1>
      <ul className="space-y-4">
        {mockClubs.map((club) => (
          <li
            key={club.name}
            className="border border-[var(--border)] bg-[var(--card)] rounded-lg p-4"
          >
            <div className="font-semibold text-[var(--primary)]">
              {club.name}
            </div>
            <div className="text-[var(--muted-foreground)]">
              {club.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
