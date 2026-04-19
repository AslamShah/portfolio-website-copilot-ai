export default function Projects() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 sm:px-10">
      <section className="space-y-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/40">
          <h1 className="text-4xl font-semibold text-white">Website Development Projects</h1>
          <p className="mt-4 text-slate-300 sm:text-lg">
            Here are a few website projects built with a focus on modern UI, responsive design, and performance.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Portfolio Website</h2>
            <p className="mt-3 text-slate-300">
              A clean, responsive portfolio site showcasing professional work and skills, built with Next.js and Tailwind CSS.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Landing Page Design</h2>
            <p className="mt-3 text-slate-300">
              A marketing-focused landing page with clear messaging, strong visuals, and optimized mobile layout.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8">
            <h2 className="text-2xl font-semibold text-white">Business Website</h2>
            <p className="mt-3 text-slate-300">
              A polished website for small businesses with custom sections for services, testimonials, and contact.
            </p>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8">
            <h2 className="text-2xl font-semibold text-white">E-commerce Showcase</h2>
            <p className="mt-3 text-slate-300">
              A responsive product showcase with smooth animations, easy navigation, and clean product detail layout.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
