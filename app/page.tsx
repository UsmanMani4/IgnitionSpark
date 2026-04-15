export default function Home() {
  return (
    <main className="page-shell home-bg flex items-center justify-center px-6 text-zinc-100">
      <section className="w-full max-w-4xl rounded-3xl border border-zinc-700/70 bg-zinc-950/55 p-10 text-center shadow-2xl backdrop-blur-sm">
        <h1 className="text-5xl font-extrabold text-yellow-400 sm:text-6xl">IgnitionSparks</h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-200 sm:text-xl">
          Where code ignites intelligence through AI systems, machine learning, and practical software engineering.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a href="/projects" className="rounded-xl bg-yellow-400 px-7 py-3 font-semibold text-zinc-900 transition-colors hover:bg-yellow-300">
            View Projects
          </a>
          <a href="/contact" className="rounded-xl border border-zinc-500 bg-zinc-900/80 px-7 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-800">
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}