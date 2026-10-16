/** Shared wrapper: consistent width, spacing, anchor offset under the sticky navbar. */
export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  );
}
