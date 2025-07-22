const mockUniversities = [
  { id: "mit", name: "Massachusetts Institute of Technology" },
  { id: "stanford", name: "Stanford University" },
  { id: "harvard", name: "Harvard University" },
  { id: "berkeley", name: "UC Berkeley" },
];

export default function UniversityListPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Universities</h1>
      <ul className="space-y-4">
        {mockUniversities.map((uni) => (
          <li
            key={uni.id}
            className="border border-[var(--border)] bg-[var(--card)] rounded-lg p-4"
          >
            <a
              href={`/university/${uni.id}`}
              className="font-semibold text-[var(--primary)] hover:underline"
            >
              {uni.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
