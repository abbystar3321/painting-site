export const metadata = {
    title: "Contact — Abby Starmer",
  };
  
  export default function ContactPage() {
    const mailto = "mailto:abbystarmerart@gmail.com?subject=Hello%20from%20abbystarmerart.org";
  
    return (
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-serif text-slate-900">Contact</h1>
        <p className="mt-6 text-slate-700 leading-relaxed">
          For inquiries about original paintings, commissions, or prints, email me at:
        </p>
        <p className="mt-4">
        <a href={mailto} target="_blank" rel="noopener noreferrer" className="text-lg text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900 transition-colors">
          abbystarmerart@gmail.com
        </a>
        </p>

        <div className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-slate-500">Follow along</h2>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="https://instagram.com/abbystarmerart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-900 hover:text-slate-700 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">
                @abbystarmerart
              </span>
            </a>
            <a
              href="https://www.facebook.com/AbbyStarmerArt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-900 hover:text-slate-700 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900">
                Abby Starmer Art
              </span>
            </a>
          </div>
        </div>
      </main>
    );
  }