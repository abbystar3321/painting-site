"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { paintings } from "@/lib/paintings";

/**
 * Full-viewport landing hero that picks a random painting on each visit.
 *
 * Renders a deterministic painting on the server (to avoid hydration mismatch),
 * then swaps to a random one on the client after mount.
 */
export default function ImmersiveHero() {
  // Stable initial pick (first painting) so SSR + first client render match.
  const [hero, setHero] = useState(paintings[0]);

  // Memoize the painting pool so it's stable across renders.
  const pool = useMemo(() => paintings, []);

  useEffect(() => {
    const pick = pool[Math.floor(Math.random() * pool.length)];
    // One-time post-hydration randomization. SSR uses the stable initial pick
    // so HTML matches; once we're on the client we swap to a random painting.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHero(pick);
  }, [pool]);

  return (
    <section className="relative h-[calc(100vh-72px)] min-h-[560px] w-full overflow-hidden">
      {/* Full-bleed painting */}
      <div className="absolute inset-0">
        <Image
          key={hero.slug}
          src={hero.image}
          alt={hero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-hero-fade"
        />
        {/* Soft warm vignette so text + CTA stay readable on any painting.
            Stronger bands at top and bottom where the small labels sit. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.45) 100%), linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 22%, rgba(0,0,0,0) 45%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 80%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-4 right-5 text-[10px] sm:text-xs font-medium tracking-wide text-white/50 mix-blend-difference"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
        >
          @abbystarmerart
        </span>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p
          className="text-[11px] uppercase tracking-[0.4em] text-white font-semibold"
          style={{
            textShadow:
              "0 0 14px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.95)",
          }}
        >
          Original oil paintings
        </p>
        <h1
          className="mt-4 text-5xl md:text-7xl font-serif tracking-tight text-white"
          style={{
            textShadow:
              "0 2px 22px rgba(0,0,0,0.55), 0 0 8px rgba(0,0,0,0.4)",
          }}
        >
          Abby Starmer Art
        </h1>
        <p
          className="mt-5 text-lg md:text-2xl font-serif italic text-white max-w-xl"
          style={{
            textShadow:
              "0 0 18px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.85)",
          }}
        >
          Faces and eyes that speak louder than words.
        </p>

        {/* Title strip for the painting being shown */}
        <div
          className="mt-8 text-xs uppercase tracking-[0.3em] text-white font-medium"
          style={{
            textShadow:
              "0 0 14px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.95)",
          }}
        >
          <span className="opacity-90">Featured · </span>
          <span className="font-semibold">{hero.title}</span>
        </div>
      </div>

      {/* Bottom CTA */}
      <a
        href="#gallery"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center text-white"
      >
        <span
          className="text-[11px] uppercase tracking-[0.35em] font-semibold"
          style={{
            textShadow:
              "0 0 14px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.9), 0 1px 2px rgba(0,0,0,0.95)",
          }}
        >
          Step into the gallery
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-3 w-6 h-6 animate-bounce-slow group-hover:translate-y-0.5 transition-transform"
          aria-hidden="true"
          style={{
            filter: "drop-shadow(0 0 6px rgba(0,0,0,0.8)) drop-shadow(0 1px 2px rgba(0,0,0,0.6))",
          }}
        >
          <path d="M12 5v14" />
          <path d="m6 13 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
