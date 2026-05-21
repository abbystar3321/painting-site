import Image from "next/image";
import Link from "next/link";
import {
  paintings,
  getPrintOptions,
  type Painting,
  type StickerShape,
} from "@/lib/paintings";

export const metadata = {
  title: "Shop — Abby Starmer Art",
  description:
    "Prints and stickers of original oil paintings by Abby Starmer. Fine art paper and canvas prints in multiple sizes, plus weatherproof vinyl stickers.",
};

// Per-painting image overrides for stickers: a different source image
// (e.g. cropped to remove photo borders), scale tweaks, or crop position.
const STICKER_IMAGE_TWEAKS: Record<
  string,
  { src?: string; scale?: number; position?: string }
> = {
  // Use a sticker-specific source image that has the dark photo borders
  // (top and bottom of the original photo) cropped out.
  "in-bloom": { src: "/paintings/stickers/in-bloom.jpeg" },
};

function stickerAspectClass(shape: StickerShape): string {
  if (shape === "portrait") return "aspect-[2/3]";
  if (shape === "landscape") return "aspect-[3/2]";
  return "aspect-square";
}

function stickerMaxWidth(shape: StickerShape): string {
  if (shape === "portrait") return "max-w-[180px]";
  if (shape === "landscape") return "max-w-[230px]";
  return "max-w-[200px]";
}

function printAspectClass(shape: StickerShape): string {
  // Print preview cards take their aspect from the painting's shape.
  if (shape === "portrait") return "aspect-[3/4]";
  if (shape === "landscape") return "aspect-[4/3]";
  return "aspect-square";
}

function printsInquireHref(p: Painting, material: "paper" | "canvas"): string {
  const subject = encodeURIComponent(
    `${material === "canvas" ? "Canvas" : "Paper"} print inquiry: "${p.title}"`
  );
  const body = encodeURIComponent(
    `Hi Abby,\n\nI'd like to order a ${material} print of "${p.title}".\n\nSize:\n\nThanks!`
  );
  return `mailto:abbystarmerart@gmail.com?subject=${subject}&body=${body}`;
}

function stickerInquireHref(p: Painting): string {
  const subject = encodeURIComponent(`Sticker inquiry: "${p.title}"`);
  const body = encodeURIComponent(
    `Hi Abby,\n\nI'd love to order the "${p.title}" sticker (${p.stickerSize}, $${p.stickerPriceFrom}).\n\nQuantity:\n\nThanks!`
  );
  return `mailto:abbystarmerart@gmail.com?subject=${subject}&body=${body}`;
}

export default function ShopPage() {
  const generalInquireHref = `mailto:abbystarmerart@gmail.com?subject=${encodeURIComponent(
    "Shop inquiry"
  )}&body=${encodeURIComponent(
    "Hi Abby,\n\nI'd like to ask about prints and/or stickers. Here's what I'm interested in:\n\n"
  )}`;

  // Subtle scattered tilt for sticker-like personality
  const rotations = [
    "-2.5deg",
    "1.5deg",
    "-1deg",
    "2deg",
    "-2deg",
    "1deg",
    "-1.5deg",
    "2.5deg",
    "-1deg",
    "1.5deg",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16 flex flex-col items-center text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-slate-900">Shop</h1>
        <p className="mt-6 text-slate-700 leading-relaxed">
          Take a piece of the work home. Every painting is available as a
          print on fine art paper or gallery-wrapped canvas, and as a
          weatherproof vinyl sticker. Prints and stickers are available even
          for originals that have already sold.
        </p>

        <a
          href={generalInquireHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
        >
          Inquire about the shop
        </a>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-500">
          <a href="#paper" className="hover:text-slate-900 transition-colors">
            Paper prints
          </a>
          <span aria-hidden="true">·</span>
          <a href="#canvas" className="hover:text-slate-900 transition-colors">
            Canvas prints
          </a>
          <span aria-hidden="true">·</span>
          <a
            href="#stickers"
            className="hover:text-slate-900 transition-colors"
          >
            Stickers
          </a>
        </div>
      </section>

      {/* Paper prints */}
      <section id="paper" className="mb-24 scroll-mt-24">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
            Paper prints
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900">
            Fine art paper
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Archival prints on heavyweight matte fine art paper, made to last.
            Sized to fit common off-the-shelf frames, so you can frame them
            easily at home.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
            <span>
              <span className="text-slate-400">Small</span> from $28
            </span>
            <span>
              <span className="text-slate-400">Medium</span> from $48
            </span>
            <span>
              <span className="text-slate-400">Large</span> from $75
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {paintings.map((painting) => {
            const options = getPrintOptions(painting).filter(
              (o) => o.material === "paper"
            );
            return (
              <div key={painting.slug} className="flex flex-col">
                <Link href={`/paintings/${painting.slug}`} className="group block">
                  <div
                    className={`relative ${printAspectClass(
                      painting.stickerShape
                    )} w-full overflow-hidden`}
                  >
                    <Image
                      src={painting.image}
                      alt={painting.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium text-slate-900">
                    {painting.title}
                  </h3>
                </Link>

                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  {options.map((opt) => (
                    <li
                      key={`${opt.material}-${opt.tier}`}
                      className="flex items-baseline justify-between gap-3 border-b border-stone-200/70 pb-1.5"
                    >
                      <span>
                        <span className="text-slate-500 capitalize mr-1.5 text-xs uppercase tracking-wide">
                          {opt.tier}
                        </span>
                        {opt.size}
                      </span>
                      <span className="text-slate-900">${opt.price}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={printsInquireHref(painting, "paper")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  Inquire about paper print
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Canvas prints */}
      <section id="canvas" className="mb-24 scroll-mt-24">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
            Canvas prints
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900">
            Gallery-wrapped canvas
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Museum-quality canvas reproductions, gallery-wrapped over a 1.25&quot;
            wooden stretcher with the image wrapping around the edges. Ready to
            hang — no framing required.
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-600">
            <span>
              <span className="text-slate-400">Small</span> from $85
            </span>
            <span>
              <span className="text-slate-400">Medium</span> from $135
            </span>
            <span>
              <span className="text-slate-400">Large</span> from $185
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {paintings.map((painting) => {
            const options = getPrintOptions(painting).filter(
              (o) => o.material === "canvas"
            );
            return (
              <div key={painting.slug} className="flex flex-col">
                <Link href={`/paintings/${painting.slug}`} className="group block">
                  <div
                    className={`relative ${printAspectClass(
                      painting.stickerShape
                    )} w-full overflow-hidden`}
                  >
                    <Image
                      src={painting.image}
                      alt={painting.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-medium text-slate-900">
                    {painting.title}
                  </h3>
                </Link>

                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  {options.map((opt) => (
                    <li
                      key={`${opt.material}-${opt.tier}`}
                      className="flex items-baseline justify-between gap-3 border-b border-stone-200/70 pb-1.5"
                    >
                      <span>
                        <span className="text-slate-500 capitalize mr-1.5 text-xs uppercase tracking-wide">
                          {opt.tier}
                        </span>
                        {opt.size}
                      </span>
                      <span className="text-slate-900">${opt.price}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={printsInquireHref(painting, "canvas")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  Inquire about canvas print
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stickers */}
      <section id="stickers" className="scroll-mt-24">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
            Stickers
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900">
            Vinyl stickers
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Carry a little piece of art with you. Each sticker is printed on
            durable, weather-resistant vinyl — perfect for laptops, water
            bottles, journals, or anywhere you&apos;d like a small reminder
            that beauty lives in the everyday. $8 each.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 items-end">
          {paintings.map((painting, i) => {
            const tweak = STICKER_IMAGE_TWEAKS[painting.slug] ?? {};
            const aspect = stickerAspectClass(painting.stickerShape);
            const maxW = stickerMaxWidth(painting.stickerShape);
            return (
              <div
                key={painting.slug}
                className="flex flex-col items-center"
                style={{
                  transform: `rotate(${rotations[i % rotations.length]})`,
                }}
              >
                <div
                  className={`relative ${aspect} w-full ${maxW} overflow-hidden rounded-[10px] transition-transform duration-300 hover:scale-[1.04] hover:rotate-0`}
                  style={{
                    filter:
                      "drop-shadow(0 14px 22px rgba(0,0,0,0.22)) drop-shadow(0 3px 6px rgba(0,0,0,0.12))",
                  }}
                >
                  <Image
                    src={tweak.src ?? painting.image}
                    alt={`${painting.title} sticker`}
                    fill
                    sizes="240px"
                    className="object-cover"
                    style={{
                      objectPosition: tweak.position ?? "center",
                      transform: tweak.scale ? `scale(${tweak.scale})` : undefined,
                    }}
                  />
                  {/* faint highlight to suggest glossy vinyl */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.10) 100%)",
                    }}
                  />
                </div>
                <div className="mt-5 text-sm font-medium text-slate-900 text-center">
                  {painting.title}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">
                  {painting.stickerSize} · ${painting.stickerPriceFrom}
                </div>
                <a
                  href={stickerInquireHref(painting)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  Inquire
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-16 text-center text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
          Bundling stickers, mixing prints and stickers, or want a different
          size? Send me a note — I&apos;m happy to put together a custom
          order.
        </p>
      </section>
    </main>
  );
}
