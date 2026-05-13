import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { paintings, getPainting } from "@/lib/paintings";

export function generateStaticParams() {
  return paintings.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const painting = getPainting(slug);
  if (!painting) return {};
  return {
    title: `${painting.title} — Abby Starmer Art`,
    description: `${painting.title}, ${painting.medium}.`,
  };
}

export default async function PaintingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const painting = getPainting(slug);
  if (!painting) notFound();

  const inquireSubject = encodeURIComponent(`Inquiry about "${painting.title}"`);
  const inquireBody = encodeURIComponent(`Hi Abby, I'm interested in "${painting.title}". Could you tell me more? Thanks!`);
  const inquireHref = `mailto:abbystarmerart@gmail.com?subject=${inquireSubject}&body=${inquireBody}`;

  const printsSubject = encodeURIComponent(`Print inquiry: "${painting.title}"`);
  const printsBody = encodeURIComponent(`Hi Abby, I'd like to ask about a print of "${painting.title}". Thanks!`);
  const printsHref = `mailto:abbystarmerart@gmail.com?subject=${printsSubject}&body=${printsBody}`;

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
        ← Back to gallery
      </Link>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square">
          <Image src={painting.image} alt={painting.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain drop-shadow-2xl" priority />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-serif text-slate-900">{painting.title}</h1>
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
              <dt className="text-slate-500 w-24">Status</dt>
              <dd>{painting.status}</dd>
            </div>
          </dl>
          <p className="mt-8 text-sm text-slate-600 italic">
            Prints are available for every painting, including sold originals.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {painting.status === "For Sale" && (
              <a href={inquireHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                Inquire
              </a>
            )}
            <a href={printsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
              Inquire about prints
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}