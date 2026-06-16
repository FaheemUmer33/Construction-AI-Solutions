export function StatusBadge({ children }: { children: string }) {
  return <span className="rounded-full border border-safety/30 bg-safety/10 px-2.5 py-1 text-xs font-semibold text-safety">{children}</span>;
}
