export default function Skills() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 sm:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold text-white">Skills</h1>
        <p className="mt-4 text-slate-300 sm:text-lg">
          Strong experience in the tools and technologies used to build modern web applications.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'Responsive Design'].map((skill) => (
            <div key={skill} className="rounded-3xl bg-slate-950/80 p-6 text-slate-100 shadow-lg shadow-slate-950/20">
              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
