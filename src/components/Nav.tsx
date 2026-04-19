import Link from 'next/link';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Aslam Shah
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="transition hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/skills" className="transition hover:text-white">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/contact" className="rounded-full border border-slate-700 px-4 py-2 transition hover:border-teal-400 hover:text-teal-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
