import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 sm:px-10">
      <section className="flex flex-1 flex-col justify-center gap-8 text-center lg:text-left">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
          <p className="mb-4 uppercase tracking-[0.3em] text-teal-300">Aslam Shah Portfolio</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Crafting modern websites with clean design.</h1>
          <p className="mt-6 max-w-3xl text-slate-300 sm:text-lg">
            I build responsive web experiences using Next.js and Tailwind CSS. Explore my work, skills, and contact details below.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-start">
            <Link href="/projects" className="rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-300">
              View Projects
            </Link>
            <Link href="/contact" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-teal-400 hover:text-teal-300">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
