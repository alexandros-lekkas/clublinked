import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Club Dashboard</h1>
      <Tabs defaultValue="form" className="w-full">
        <TabsList>
          <TabsTrigger value="form">Current Form</TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
        </TabsList>
        <TabsContent value="form">
          <div className="mt-6 p-6 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-none">
            <h2 className="font-semibold text-lg mb-2">Current Form</h2>
            <p className="text-muted-foreground">Form preview or details will appear here.</p>
          </div>
        </TabsContent>
        <TabsContent value="submissions">
          <div className="mt-6 p-6 rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] shadow-none">
            <h2 className="font-semibold text-lg mb-2">Submissions</h2>
            <p className="text-muted-foreground">Recent submissions will appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 