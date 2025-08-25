"use client";

import Image from "next/image";
import tech from "@/data/tech.json";

function MarqueeRow({ items, reverse = false, speed = 36 }) {
  return (
    <div className="group relative overflow-hidden">
      {/* Track duplicado para loop perfecto */}
      <div
        className={[
          "flex gap-4 whitespace-nowrap",
          "motion-reduce:animate-none",
          reverse
            ? "animate-[scroll-reverse_var(--duration)_linear_infinite]"
            : "animate-[scroll_var(--duration)_linear_infinite]",
          "group-hover:[animation-play-state:paused]"
        ].join(" ")}
        style={{ "--duration": `${speed}s` }}
      >
        {[...items, ...items].map((t, i) => (
          <a
            key={t.name + i}
            rel={t.href ? "noreferrer" : undefined}
            className="inline-flex"
            aria-label={t.name}
            title={t.name}
          >
            <div className="h-16 w-28 md:h-20 md:w-36 relative transition will-change-transform">
              <Image
                src={t.src}
                alt={t.name}
                fill                      //que ocupe todo el contenedor
                sizes="(max-width: 768px) 112px, 144px" // coincide con w-28 / md:w-36
                className="object-cover" // o 'object-cover' 
                priority={false}
              />
            </div>

          </a>
        ))}
      </div>

      {/* Fades en los bordes (estéticos) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent" />
    </div>
  );
}

export default function TechShowcase() {
  const mid = Math.ceil(tech.length / 2);
  const first = tech.slice(0, mid);
  const second = tech.slice(mid);

  return (
    <section id="stack" className="py-14">
      <h2 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight">Tecnologías & Frameworks</h2>
      <MarqueeRow items={first} speed={34} />
      <div className="h-4" />
      <MarqueeRow items={second} reverse speed={38} />
    </section>
  );
}
