import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import FlyingButterfly from "./_components/FlyingButterfly";

export const metadata: Metadata = {
  metadataBase: new URL("https://abbystarmerart.org"),
  title: {
    default: "Abby Starmer Art — Original Oil Paintings",
    template: "%s — Abby Starmer Art",
  },
  description:
    "Original oil paintings, prints, and stickers by Abby Starmer — faces and eyes that speak louder than words.",
  openGraph: {
    title: "Abby Starmer Art — Original Oil Paintings",
    description:
      "Original oil paintings, prints, and stickers by Abby Starmer — faces and eyes that speak louder than words.",
    url: "https://abbystarmerart.org",
    siteName: "Abby Starmer Art",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abby Starmer Art — Original Oil Paintings",
    description:
      "Original oil paintings, prints, and stickers by Abby Starmer.",
  },
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
        <header className="sticky top-0 z-20 border-b border-stone-300/60 relative overflow-hidden">
          {/* Floral SVG background */}
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <defs>
              <radialGradient id="navCream" cx="50%" cy="50%" r="80%">
                <stop offset="0%" stopColor="#fbf2e6" stopOpacity="1" />
                <stop offset="60%" stopColor="#f5e6d3" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#e8d3b8" stopOpacity="0.7" />
              </radialGradient>
              <radialGradient id="navGlowL" cx="10%" cy="50%" r="22%">
                <stop offset="0%" stopColor="#fff4d4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f8d98a" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="navGlowR" cx="90%" cy="50%" r="22%">
                <stop offset="0%" stopColor="#fad8c8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#e8b8a0" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="navRose" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#fbe0e0" stopOpacity="1" />
                <stop offset="50%" stopColor="#f0a8b8" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#c87090" stopOpacity="0.9" />
              </radialGradient>
              <radialGradient id="navDeepPink" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="#e088a0" stopOpacity="1" />
                <stop offset="100%" stopColor="#a04868" stopOpacity="0.95" />
              </radialGradient>
              <radialGradient id="navCreamRose" cx="50%" cy="40%" r="65%">
                <stop offset="0%" stopColor="#fff8ec" stopOpacity="1" />
                <stop offset="60%" stopColor="#f4e0c0" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#d8b890" stopOpacity="0.85" />
              </radialGradient>
              <radialGradient id="navWingPink" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#fce4ea" stopOpacity="1" />
                <stop offset="100%" stopColor="#e898b0" stopOpacity="0.85" />
              </radialGradient>
              <radialGradient id="navWingBlue" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#e6f0fa" stopOpacity="1" />
                <stop offset="100%" stopColor="#9abcd8" stopOpacity="0.85" />
              </radialGradient>
              <radialGradient id="navPetal" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#fbe0e0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#d890a0" stopOpacity="0.65" />
              </radialGradient>
            </defs>

            {/* Cream wash background */}
            <rect width="1440" height="80" fill="url(#navCream)" />
            <rect width="1440" height="80" fill="url(#navGlowL)" />
            <rect width="1440" height="80" fill="url(#navGlowR)" />

            {/* Soft candle halo on far left */}
            <ellipse cx="120" cy="40" rx="80" ry="40" fill="#fff0c8" opacity="0.3" />
            <ellipse cx="120" cy="40" rx="40" ry="25" fill="#ffe8a8" opacity="0.3" />

            {/* Sage stem suggestion across center */}
            <path d="M450 55 Q600 50 720 52 Q840 54 990 50" stroke="#9aaa78" strokeWidth="1" fill="none" opacity="0.35" strokeLinecap="round" />

            {/* Small sage leaves */}
            <g opacity="0.55">
              <ellipse cx="560" cy="58" rx="10" ry="3.5" fill="#9ab080" transform="rotate(-12 560 58)" />
              <ellipse cx="880" cy="58" rx="10" ry="3.5" fill="#9ab080" transform="rotate(10 880 58)" />
            </g>

            {/* Center pink rose (focal) */}
            <g transform="translate(720 50)">
              <ellipse cx="0" cy="0" rx="26" ry="20" fill="url(#navRose)" opacity="0.55" />
              <ellipse cx="-4" cy="-3" rx="22" ry="17" fill="url(#navRose)" opacity="0.7" transform="rotate(-15)" />
              <ellipse cx="4" cy="-2" rx="20" ry="15" fill="url(#navRose)" opacity="0.72" transform="rotate(20)" />
              <ellipse cx="0" cy="0" rx="15" ry="11" fill="url(#navRose)" opacity="0.88" transform="rotate(-30)" />
              <ellipse cx="0" cy="0" rx="13" ry="9" fill="url(#navRose)" opacity="0.9" transform="rotate(45)" />
              <ellipse cx="0" cy="0" rx="8" ry="6" fill="url(#navDeepPink)" opacity="0.85" transform="rotate(10)" />
              <ellipse cx="0" cy="0" rx="3" ry="2.5" fill="#9a3a58" opacity="0.85" />
              <ellipse cx="-6" cy="-7" rx="4" ry="2" fill="#fff0f0" opacity="0.55" transform="rotate(-25)" />
            </g>

            {/* Left small cream rose */}
            <g transform="translate(540 55)">
              <ellipse cx="0" cy="0" rx="16" ry="12" fill="url(#navCreamRose)" opacity="0.65" />
              <ellipse cx="-3" cy="-2" rx="13" ry="10" fill="url(#navCreamRose)" opacity="0.78" transform="rotate(-18)" />
              <ellipse cx="3" cy="-1" rx="11" ry="8" fill="url(#navCreamRose)" opacity="0.82" transform="rotate(25)" />
              <ellipse cx="0" cy="0" rx="6" ry="4" fill="#f4d8a8" opacity="0.7" />
              <ellipse cx="0" cy="0" rx="3" ry="2" fill="#d8a868" opacity="0.7" />
            </g>

            {/* Right small pink rose */}
            <g transform="translate(900 55)">
              <ellipse cx="0" cy="0" rx="16" ry="13" fill="url(#navRose)" opacity="0.6" />
              <ellipse cx="-3" cy="-2" rx="13" ry="10" fill="url(#navRose)" opacity="0.75" transform="rotate(-15)" />
              <ellipse cx="3" cy="-1" rx="11" ry="8" fill="url(#navRose)" opacity="0.78" transform="rotate(22)" />
              <ellipse cx="0" cy="0" rx="6" ry="4.5" fill="url(#navDeepPink)" opacity="0.8" transform="rotate(-10)" />
              <ellipse cx="0" cy="0" rx="2.5" ry="2" fill="#9a3a58" opacity="0.85" />
            </g>

            {/* Pink butterfly upper-left of center */}
            <g transform="translate(620 22)">
              <path d="M0 0 Q-12 -11 -22 -10 Q-29 -7 -28 0 Q-25 6 -17 7 Q-8 7 -3 4 Z" fill="url(#navWingPink)" opacity="0.92" />
              <path d="M0 0 Q12 -11 22 -10 Q29 -7 28 0 Q25 6 17 7 Q8 7 3 4 Z" fill="url(#navWingPink)" opacity="0.92" />
              <path d="M0 4 Q-8 9 -12 16 Q-14 20 -10 21 Q-4 20 -1 16 Q0 11 0 7 Z" fill="url(#navWingPink)" opacity="0.85" />
              <path d="M0 4 Q8 9 12 16 Q14 20 10 21 Q4 20 1 16 Q0 11 0 7 Z" fill="url(#navWingPink)" opacity="0.85" />
              <circle cx="-18" cy="-6" r="1" fill="#8a3a52" opacity="0.65" />
              <circle cx="18" cy="-6" r="1" fill="#8a3a52" opacity="0.65" />
              <path d="M0 -3 Q-0.8 3 -0.8 13 Q-0.5 18 0 21 Q0.5 18 0.8 13 Q0.8 3 0 -3 Z" fill="#3a2030" opacity="0.9" />
              <circle cx="0" cy="-3" r="1.2" fill="#3a2030" />
              <path d="M-0.5 -5 Q-4 -10 -6 -13" stroke="#3a2030" strokeWidth="0.5" strokeLinecap="round" fill="none" />
              <path d="M0.5 -5 Q4 -10 6 -13" stroke="#3a2030" strokeWidth="0.5" strokeLinecap="round" fill="none" />
              <circle cx="-6" cy="-13" r="0.8" fill="#3a2030" />
              <circle cx="6" cy="-13" r="0.8" fill="#3a2030" />
            </g>

            {/* Blue butterfly upper-right of center */}
            <g transform="translate(820 20)">
              <path d="M0 0 Q-10 -10 -18 -9 Q-24 -6 -23 0 Q-20 5 -14 6 Q-7 6 -3 3 Z" fill="url(#navWingBlue)" opacity="0.9" />
              <path d="M0 0 Q10 -10 18 -9 Q24 -6 23 0 Q20 5 14 6 Q7 6 3 3 Z" fill="url(#navWingBlue)" opacity="0.9" />
              <path d="M0 3 Q-7 8 -10 14 Q-11 17 -8 18 Q-3 17 -1 14 Q0 9 0 6 Z" fill="url(#navWingBlue)" opacity="0.85" />
              <path d="M0 3 Q7 8 10 14 Q11 17 8 18 Q3 17 1 14 Q0 9 0 6 Z" fill="url(#navWingBlue)" opacity="0.85" />
              <circle cx="-14" cy="-5" r="0.9" fill="#3a5a78" opacity="0.65" />
              <circle cx="14" cy="-5" r="0.9" fill="#3a5a78" opacity="0.65" />
              <path d="M0 -2 Q-0.6 3 -0.6 11 Q-0.4 16 0 18 Q0.4 16 0.6 11 Q0.6 3 0 -2 Z" fill="#2a2030" opacity="0.9" />
              <circle cx="0" cy="-2" r="1" fill="#2a2030" />
              <path d="M-0.4 -4 Q-3 -8 -5 -11" stroke="#2a2030" strokeWidth="0.4" strokeLinecap="round" fill="none" />
              <path d="M0.4 -4 Q3 -8 5 -11" stroke="#2a2030" strokeWidth="0.4" strokeLinecap="round" fill="none" />
              <circle cx="-5" cy="-11" r="0.7" fill="#2a2030" />
              <circle cx="5" cy="-11" r="0.7" fill="#2a2030" />
            </g>

            {/* Falling petals across center area */}
            <g>
              <ellipse cx="480" cy="18" rx="5" ry="3" fill="url(#navPetal)" opacity="0.65" transform="rotate(35 480 18)" />
              <ellipse cx="600" cy="65" rx="4.5" ry="2.5" fill="url(#navPetal)" opacity="0.6" transform="rotate(-25 600 65)" />
              <ellipse cx="680" cy="15" rx="4" ry="2.5" fill="url(#navPetal)" opacity="0.55" transform="rotate(15 680 15)" />
              <ellipse cx="770" cy="68" rx="5" ry="3" fill="url(#navPetal)" opacity="0.6" transform="rotate(45 770 68)" />
              <ellipse cx="850" cy="60" rx="4" ry="2.5" fill="url(#navPetal)" opacity="0.55" transform="rotate(-30 850 60)" />
              <ellipse cx="950" cy="20" rx="4.5" ry="2.5" fill="url(#navPetal)" opacity="0.6" transform="rotate(25 950 20)" />
              <ellipse cx="1020" cy="40" rx="4" ry="2.5" fill="url(#navPetal)" opacity="0.55" transform="rotate(-15 1020 40)" />
              <ellipse cx="400" cy="40" rx="4" ry="2.5" fill="url(#navPetal)" opacity="0.55" transform="rotate(50 400 40)" />
            </g>

            {/* Tiny sparkle dabs */}
            <g opacity="0.7">
              <circle cx="500" cy="30" r="1" fill="#fff4d8" />
              <circle cx="650" cy="40" r="1.2" fill="#fff4d8" />
              <circle cx="800" cy="40" r="1" fill="#fff4d8" />
              <circle cx="940" cy="35" r="1.2" fill="#fff4d8" />
            </g>
          </svg>

          {/* Soft white veil for nav text readability */}
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px] pointer-events-none" />

          <nav className="relative z-10 mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
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
                href="/shop"
                className="border-b-2 border-transparent hover:border-slate-900 hover:text-slate-900 pb-1 transition-all"
              >
                Shop
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

        <FlyingButterfly />

        <footer className="mt-24 border-t border-stone-300/40 backdrop-blur-sm bg-white/30">
          <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div>© {new Date().getFullYear()} Abby Starmer Art</div>
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com/abbystarmerart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/AbbyStarmerArt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-slate-500 hover:text-slate-900 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}