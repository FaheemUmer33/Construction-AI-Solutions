import type { ReactNode } from "react";

export function AdminTable({ headers, children }: { headers: string[]; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-white/[0.06] text-slate-300">
          <tr>{headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-white/10">{children}</tbody>
      </table>
    </div>
  );
}
