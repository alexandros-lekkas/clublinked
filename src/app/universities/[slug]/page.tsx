const mockUniversities = {
  mit: {
    name: "Massachusetts Institute of Technology",
    description: "A world leader in science, engineering, and technology.",
    clubs: [
      {
        id: "robotics",
        name: "Robotics Club",
        description: "Build and program robots.",
      },
      {
        id: "art",
        name: "Art Society",
        description: "Explore your creativity with fellow artists.",
      },
      {
        id: "debate",
        name: "Debate Team",
        description: "Sharpen your public speaking skills.",
      },
    ],
  },
  stanford: {
    name: "Stanford University",
    description: "Renowned for innovation and entrepreneurship.",
    clubs: [
      {
        id: "chess",
        name: "Chess Club",
        description: "Challenge your mind with chess.",
      },
      {
        id: "music",
        name: "Music Ensemble",
        description: "Perform and enjoy music together.",
      },
    ],
  },
  harvard: {
    name: "Harvard University",
    description: "America's oldest institution of higher learning.",
    clubs: [
      {
        id: "theatre",
        name: "Theatre Group",
        description: "Perform and produce plays.",
      },
    ],
  },
  berkeley: {
    name: "UC Berkeley",
    description: "Leading public university in California.",
    clubs: [
      {
        id: "ai",
        name: "AI Society",
        description: "Explore artificial intelligence.",
      },
    ],
  },
};

export default function UniversityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const uni = mockUniversities[params.slug as keyof typeof mockUniversities];
  if (!uni) {
    return <div>University not found.</div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{uni.name}</h1>
      <p className="mb-6 text-[var(--muted-foreground)]">{uni.description}</p>
      <h2 className="text-lg font-semibold mb-4">Clubs</h2>
      <ul className="space-y-4">
        {uni.clubs.map((club) => (
          <li
            key={club.id}
            className="border border-[var(--border)] bg-[var(--card)] rounded-lg p-4"
          >
            <a
              href={`/universities/${params.slug}/club/${club.id}`}
              className="font-semibold text-[var(--primary)] hover:underline"
            >
              {club.name}
            </a>
            <div className="text-[var(--muted-foreground)]">
              {club.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
