export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-lg border border-dashed border-white/15 p-10 text-center">
      <p className="text-lg font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{message}</p>
    </div>
  );
}
