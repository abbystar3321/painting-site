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
      </main>
    );
  }