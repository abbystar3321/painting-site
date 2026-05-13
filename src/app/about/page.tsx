import Image from "next/image";

export const metadata = {
  title: "About — Abby Starmer Art",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="relative w-44 h-44 rounded-full overflow-hidden bg-slate-100">
          <Image
            src="/abby.jpg"
            alt="Abby Starmer"
            fill
            sizes="176px"
            className="object-cover"
          />
        </div>
        <h1 className="mt-6 text-3xl md:text-4xl font-serif text-slate-900">About</h1>
      </div>

      <div className="space-y-5 text-slate-700 leading-relaxed">
        <p>
          I'm Abby Starmer, an oil painter based in Brentwood, Tennessee. Outside of painting, I work as an internal auditor for the Tennessee Lottery, where integrity and attention to detail are a big part of my everyday life. Both sides of my work influence how I see the world and the way I approach my art.
        </p>
        <p>
          I've been painting since I was a child, and I've always been drawn to faces, especially eyes. To me, an eye can reveal more than words ever could. I'm fascinated by quiet expressions, fleeting emotions, and the moments people don't always realize they're showing. That's what I try to capture on canvas.
        </p>
        <p>
          Oil paint is my favorite medium because it allows me to slow down and really work through a piece. I love the ability to layer, blend, soften, and rework until a painting feels honest. The process itself is calming, thoughtful, and deeply personal to me.
        </p>
        <p>
          At home, my two kids, ages 3 and 5, are often creating right alongside me. They've reminded me that art doesn't have to be perfect to be meaningful. Sometimes the best parts come from freedom, instinct, and a little bit of mess.
        </p>
        <p>
          I create original portraits, eye studies, and commissioned pieces, and prints of existing work are also available. If a piece connects with you, or you have an idea you'd like brought to life on canvas, I'd love to hear from you.
        </p>
      </div>
    </main>
  );
}