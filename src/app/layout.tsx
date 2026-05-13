import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abby Starmer Art — Oil Paintings",
  description: "Original oil paintings by Abby Starmer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen text-slate-900 antialiased"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 15% 10%, rgba(255, 195, 210, 0.45), transparent 60%),
            radial-gradient(ellipse 70% 50% at 85% 15%, rgba(255, 220, 175, 0.4), transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 55%, rgba(175, 215, 230, 0.4), transparent 60%),
            radial-gradient(ellipse 60% 60% at 75% 90%, rgba(215, 195, 240, 0.4), transparent 60%),
            radial-gradient(ellipse 70% 50% at 15% 80%, rgba(255, 215, 195, 0.42), transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255, 245, 235, 0.3), transparent 70%),
            linear-gradient(180deg, #fbf8f3 0%, #f6f1e8 100%)
          `,
        }}
      >
        <header className="sticky top-0 z-20 border-b border-stone-300/60 backdrop-blur-md bg-white/70">
          <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
            <Link
              href="/"
              className="font-serif italic text-xl tracking-wide text-slate-900 hover:text-slate-700 transition-colors"
            >
              Abby Starmer Art
            </Link>
            <div className="flex gap-8 text-xs uppercase tracking-[0.2em] font-semibold text-slate-700">
              <Link
                href="/"
                className="border-b-2 border-transparent hover:border-slate-900 hover:text-slate-900 pb-1 transition-all"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="border-b-2 border-transparent hover:border-slate-900 hover:text-slate-900 pb-1 transition-all"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="border-b-2 border-transparent hover:border-slate-900 hover:text-slate-900 pb-1 transition-all"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="mt-24 border-t border-stone-300/40 backdrop-blur-sm bg-white/30">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
            © {new Date().getFullYear()} Abby Starmer Art
          </div>
        </footer>
      </body>
    </html>
  );
}