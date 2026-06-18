import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-safety">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-[0.01em]">Page not found</h1>
        <p className="mt-4 text-slate-400">The construction company page you requested does not exist.</p>
        <Link href="/" className="mt-8 inline-flex rounded-md bg-safety px-5 py-3 font-semibold text-steel">Return home</Link>
      </div>
    </main>
  );
}
