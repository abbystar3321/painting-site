import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  paintings,
  getPainting,
  getPrintOptions,
  type Painting,
} from "@/lib/paintings";

export function generateStaticParams() {
  return paintings.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const painting = getPainting(slug);
  if (!painting) return {};
  return {
    title: `${painting.title} — Abby Starmer Art`,
    description: `${painting.title}, ${painting.medium}.`,
  };
}

function printInquireHref(
  p: Painting,
  material: "paper" | "canvas",
  size: string,
  price: number
): string {
  const subject = encodeURIComponent(
    `${material === "canvas" ? "Canvas" : "Paper"} print: "${p.title}" — ${size}`
  );
  const body = encodeURIComponent(
    `Hi Abby,\n\nI'd like to order a ${material} print of "${p.title}".\n\nSize: ${size}\nPrice: $${price}\n\nThanks!`
  );
  return `mailto:abbystarmerart@gmail.com?subject=${subject}&body=${body}`;
}

export default async function PaintingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const painting = getPainting(slug);
  if (!painting) notFound();

  const inquireSubject = encodeURIComponent(`Inquiry about "${painting.title}"`);
  const inquireBody = encodeURIComponent(
    `Hi Abby,\n\nI'm interested in "${painting.title}"${painting.price ? ` ($${painting.price.toLocaleString()})` : ""}. Could you tell me more?\n\nThanks!`
  );
  const inquireHref = `mailto:abbystarmerart@gmail.com?subject=${inquireSubject}&body=${inquireBody}`;

  const stickersSubject = encodeURIComponent(`Sticker: "${painting.title}"`);
  const stickersBody = encodeURIComponent(
    `Hi Abby,\n\nI'd like to order the "${painting.title}" sticker (${painting.stickerSize}, $${painting.stickerPriceFrom}).\n\nQuantity:\n\nThanks!`
  );
  const stickersHref = `mailto:abbystarmerart@gmail.com?subject=${stickersSubject}&body=${stickersBody}`;

  const allOptions = getPrintOptions(painting);
  const paperOptions = allOptions.filter((o) => o.material === "paper");
  const canvasOptions = allOptions.filter((o) => o.material === "canvas");

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
        ← Back to gallery
      </Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={painting.image}
            alt={painting.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain drop-shadow-2xl"
            priority
          />
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute bottom-3 left-1/2 -translate-x-1/2 text-xs sm:text-sm font-medium tracking-wide text-white/40 mix-blend-difference"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
          >
            @abbystarmerart
          </span>
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-serif text-slate-900">
            {painting.title}
          </h1>

          <dl className="mt-6 space-y-2 text-slate-700">
            {painting.size && (
              <div className="flex gap-3">
                <dt className="text-slate-500 w-24">Size</dt>
                <dd>{painting.size}</dd>
              </div>
            )}
            <div className="flex gap-3">
              <dt className="text-slate-500 w-24">Medium</dt>
              <dd>{painting.medium}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-slate-500 w-24">Original</dt>
              <dd>
                {painting.status === "For Sale" && painting.price ? (
                  <>${painting.price.toLocaleString()}</>
                ) : (
                  <span className="text-slate-500">Sold</span>
                )}
              </dd>
            </div>
          </dl>

          {painting.description && (
            <p className="mt-8 text-slate-700 leading-relaxed">
              {painting.description}
            </p>
          )}

          {painting.status === "For Sale" && (
            <div className="mt-8">
              <a
                href={inquireHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                Inquire about original
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Shop section: prints + stickers for this painting */}
      <section className="mt-20 border-t border-stone-300/60 pt-12">
        <div className="mb-10 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
            Prints &amp; stickers
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-900">
            Take this one home
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Prints and stickers are available for every painting, including
            sold originals. Tap an option below to send a quick inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Paper prints */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-3">
              Paper prints
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Printed on heavyweight matte fine art paper.
            </p>
            <ul className="space-y-2 text-sm">
              {paperOptions.map((opt) => (
                <li
                  key={`paper-${opt.tier}`}
                  className="flex items-center justify-between gap-3 border-b border-stone-200/70 pb-2"
                >
                  <div className="leading-tight">
                    <div className="text-slate-900">{opt.size}</div>
                    <div className="text-xs text-slate-500 capitalize">
                      {opt.tier} · ${opt.price}
                    </div>
                  </div>
                  <a
                    href={printInquireHref(painting, "paper", opt.size, opt.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    Inquire
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Canvas prints */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-3">
              Canvas prints
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Gallery-wrapped on a 1.25&quot; wooden stretcher — ready to hang.
            </p>
            <ul className="space-y-2 text-sm">
              {canvasOptions.map((opt) => (
                <li
                  key={`canvas-${opt.tier}`}
                  className="flex items-center justify-between gap-3 border-b border-stone-200/70 pb-2"
                >
                  <div className="leading-tight">
                    <div className="text-slate-900">{opt.size}</div>
                    <div className="text-xs text-slate-500 capitalize">
                      {opt.tier} · ${opt.price}
                    </div>
                  </div>
                  <a
                    href={printInquireHref(painting, "canvas", opt.size, opt.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    Inquire
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sticker */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500 mb-3">
              Sticker
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Weatherproof vinyl, perfect for laptops, journals, and water bottles.
            </p>
            <div className="flex items-center justify-between gap-3 border-b border-stone-200/70 pb-2 text-sm">
              <div className="leading-tight">
                <div className="text-slate-900">{painting.stickerSize}</div>
                <div className="text-xs text-slate-500">
                  ${painting.stickerPriceFrom} each
                </div>
              </div>
              <a
                href={stickersHref}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors"
              >
                Inquire
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Looking for a different size, multiple prints, or a sticker bundle?{" "}
          <Link href="/shop" className="underline hover:text-slate-900">
            See the full shop
          </Link>{" "}
          or send a note and I&apos;ll put together a custom order.
        </p>
      </section>
    </main>
  );
}
