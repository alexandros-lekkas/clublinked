export default function FormBuilderPage() {
  return (
    <div className="flex gap-8 w-full">
      <div className="w-1/3">
        <div className="border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] rounded-lg p-4">
          <h2 className="font-semibold mb-4">Components</h2>
          <div className="space-y-2">
            <div className="rounded-md border border-[var(--border)] bg-[var(--muted)] p-2 cursor-move">Input</div>
            <div className="rounded-md border border-[var(--border)] bg-[var(--muted)] p-2 cursor-move">Checkbox</div>
            <div className="rounded-md border border-[var(--border)] bg-[var(--muted)] p-2 cursor-move">Textarea</div>
            {/* Add more draggable components here */}
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] rounded-lg p-4 min-h-[400px]">
          <h2 className="font-semibold mb-4">Live Preview</h2>
          <div className="text-muted-foreground">Drag components here to build your form.</div>
        </div>
      </div>
    </div>
  );
} 