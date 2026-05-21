import Image from "next/image";
import Link from "next/link";
import { paintings } from "@/lib/paintings";
import ImmersiveHero from "./_components/ImmersiveHero";

export default function Home() {
  return (
    <>
      <ImmersiveHero />

      {/* Artist intro — "behind the scenes" feel without a studio photo for now */}
      <section className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500 mb-6">
          Meet the artist
        </div>
        <p className="text-2xl md:text-3xl font-serif italic text-slate-800 leading-snug">
          “I&apos;ve always been drawn to faces, especially eyes. To me, an eye
          can reveal more than words ever could.”
        </p>
        <p className="mt-10 text-slate-700 leading-relaxed">
          I&apos;m Abby — an oil painter based in Brentwood. I paint between
          early mornings, late nights, and the in-between moments of raising
          two young kids. Oil is my medium because it lets me slow down, layer,
          and rework until a piece feels honest. Each painting starts somewhere
          quiet and ends up somewhere personal.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
          >
            More about Abby
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
          >
            Visit the shop
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="mx-auto max-w-6xl px-6 pb-16 pt-4 scroll-mt-20"
      >
        <div className="mb-10 text-center">
          <div className="text-[11px] uppercase tracking-[0.35em] text-slate-500 mb-2">
            The gallery
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-slate-900">
            Originals &amp; prints
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <Link
              key={painting.slug}
              href={`/paintings/${painting.slug}`}
              className="group block"
            >
              <div className="relative aspect-square">
                <Image
                  src={painting.image}
                  alt={painting.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs font-medium tracking-wide text-white/40 mix-blend-difference"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  @abbystarmerart
                </span>
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="text-base font-medium text-slate-900">
                  {painting.title}
                </h3>
                <div className="text-right shrink-0 leading-tight">
                  {painting.status === "For Sale" && painting.price ? (
                    <div className="text-base font-medium text-slate-900">
                      <span className="text-[10px] uppercase tracking-[0.15em] text-slate-500 font-normal mr-1.5 align-middle">
                        Original
                      </span>
                      ${painting.price.toLocaleString()}
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500">Original sold</div>
                  )}
                  <div className="mt-0.5 text-xs text-slate-400">
                    Prints from ${painting.printPriceFrom}
                  </div>
                  <div className="text-xs text-slate-400">
                    {painting.stickerSize} sticker · ${painting.stickerPriceFrom}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
