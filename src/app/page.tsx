import Image from "next/image";
import Link from "next/link";
import { paintings } from "@/lib/paintings";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-slate-900">
          Abby Starmer Art
        </h1>
        <p className="mt-4 text-lg md:text-xl font-serif italic text-slate-700">
          Faces and eyes that speak louder than words.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-500">
          Oil Painter &nbsp;·&nbsp; Brentwood
        </p>
      </section>

      <section>
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
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <h2 className="text-base font-medium text-slate-900">
                  {painting.title}
                </h2>
                <div className="text-right shrink-0 leading-tight">
                  {painting.status === "For Sale" && painting.price ? (
                    <div className="text-base font-medium text-slate-900">
                      ${painting.price.toLocaleString()}
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500">Sold</div>
                  )}
                  <div className="mt-0.5 text-xs text-slate-400">
                    Prints from ${painting.printPriceFrom}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}