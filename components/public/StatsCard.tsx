export function StatsCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-panel rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-safety/30">
      <p className="text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}
