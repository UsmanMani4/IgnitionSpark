export default function Page() {
  return (
    <main className="page-shell blog-bg grid place-items-center px-6 py-10">
      <section className="w-full max-w-4xl rounded-3xl border border-zinc-700/70 bg-zinc-950/60 p-10 text-zinc-100 shadow-2xl backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-yellow-400">Blog</h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-200">
          Insights on AI, software architecture, and lessons learned while shipping practical machine learning systems.
        </p>
      </section>
    </main>
  );
}