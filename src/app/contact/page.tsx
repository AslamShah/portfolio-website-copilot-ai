export default function Contact() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 sm:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-xl shadow-slate-950/40">
        <h1 className="text-4xl font-semibold text-white">Contact</h1>
        <p className="mt-4 text-slate-300 sm:text-lg">
          Want to discuss a website project or collaboration? Reach out and let’s build something great.
        </p>
        <div className="mt-8 space-y-4 text-slate-200">
          <div>
            <p className="font-semibold text-white">Email</p>
            <p>aslam@example.com</p>
          </div>
          <div>
            <p className="font-semibold text-white">Location</p>
            <p>Remote / Global</p>
          </div>
        </div>
      </section>
    </main>
  );
}
