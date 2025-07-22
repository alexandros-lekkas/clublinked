const mockClubs = {
  robotics: {
    name: "Robotics Club",
    description: "Build and program robots.",
    openForms: [
      { id: "signup", title: "Spring Signup", deadline: "2024-07-01" },
      { id: "volunteer", title: "Volunteer Interest", deadline: "2024-08-15" },
    ],
  },
  art: {
    name: "Art Society",
    description: "Explore your creativity with fellow artists.",
    openForms: [
      {
        id: "exhibit",
        title: "Gallery Exhibit Signup",
        deadline: "2024-06-20",
      },
    ],
  },
  debate: {
    name: "Debate Team",
    description: "Sharpen your public speaking skills.",
    openForms: [],
  },
  chess: {
    name: "Chess Club",
    description: "Challenge your mind with chess.",
    openForms: [
      {
        id: "tournament",
        title: "Summer Tournament Registration",
        deadline: "2024-07-10",
      },
    ],
  },
  music: {
    name: "Music Ensemble",
    description: "Perform and enjoy music together.",
    openForms: [],
  },
  theatre: {
    name: "Theatre Group",
    description: "Perform and produce plays.",
    openForms: [
      { id: "audition", title: "Fall Auditions", deadline: "2024-09-01" },
    ],
  },
  ai: {
    name: "AI Society",
    description: "Explore artificial intelligence.",
    openForms: [
      { id: "workshop", title: "Intro to AI Workshop", deadline: "2024-06-30" },
    ],
  },
};

export default function ClubDetailPage({
  params,
}: {
  params: { clubId: string };
}) {
  const club = mockClubs[params.clubId as keyof typeof mockClubs];
  if (!club) {
    return <div>Club not found.</div>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{club.name}</h1>
      <p className="mb-6 text-[var(--muted-foreground)]">{club.description}</p>
      <h2 className="text-lg font-semibold mb-4">Open Forms</h2>
      {club.openForms.length === 0 ? (
        <div className="text-[var(--muted-foreground)]">
          No open forms at the moment.
        </div>
      ) : (
        <ul className="space-y-4">
          {club.openForms.map((form) => (
            <li
              key={form.id}
              className="border border-[var(--border)] bg-[var(--card)] rounded-lg p-4"
            >
              <div className="font-semibold text-[var(--primary)]">
                {form.title}
              </div>
              <div className="text-[var(--muted-foreground)]">
                Deadline: {form.deadline}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
