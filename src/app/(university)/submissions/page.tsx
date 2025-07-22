import { Table } from "@/components/ui/table";

export default function SubmissionsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Submissions</h1>
      <div className="border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] rounded-lg p-6">
        <Table>
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Submission Date</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Doe</td>
              <td>jane@university.edu</td>
              <td>2024-06-01</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>John Smith</td>
              <td>john@university.edu</td>
              <td>2024-06-02</td>
              <td>Reviewed</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
} 