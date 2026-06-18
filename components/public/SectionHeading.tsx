export function SectionHeading({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-safety">{eyebrow}</p> : null}
      <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-[0.01em] text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  );
}
