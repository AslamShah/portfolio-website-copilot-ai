export default function About() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 sm:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold text-white">About Aslam Shah</h1>
        <p className="mt-6 text-slate-300 sm:text-lg">
          I am a web developer focused on crafting modern, responsive websites and applications. My work centers on clean design, fast performance, and accessible user experiences.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-slate-950/80 p-6">
            <h2 className="text-xl font-semibold text-white">What I do</h2>
            <p className="mt-4 text-slate-300">
              I build full-stack websites using Next.js, React, and Tailwind CSS. I enjoy turning ideas into polished digital products that work beautifully on any screen.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-950/80 p-6">
            <h2 className="text-xl font-semibold text-white">My approach</h2>
            <p className="mt-4 text-slate-300">
              I focus on fast loading, responsive layouts, and intuitive navigation. Every project is an opportunity to deliver a professional, user-friendly experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
