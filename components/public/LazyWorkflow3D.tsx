"use client";

import dynamic from "next/dynamic";

const Workflow3D = dynamic(() => import("@/components/public/Workflow3D").then((mod) => mod.Workflow3D), {
  ssr: false,
  loading: () => (
    <div className="industrial-card grid min-h-[420px] place-items-center rounded-lg p-8 text-center">
      <div>
        <div className="mx-auto mb-4 h-10 w-10 animate-pulse rounded-full border border-safety/40 bg-safety/10" />
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-safety">Loading Workflow</p>
        <p className="mt-3 text-slate-300">Preparing the AI construction process visualization.</p>
      </div>
    </div>
  )
});

export function LazyWorkflow3D() {
  return <Workflow3D />;
}
