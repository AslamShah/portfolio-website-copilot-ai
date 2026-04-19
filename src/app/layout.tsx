import type { Metadata } from 'next';
import './globals.css';
import Nav from '../components/Nav';

export const metadata: Metadata = {
  title: 'Aslam Shah Portfolio',
  description: 'Portfolio website of Aslam Shah',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
