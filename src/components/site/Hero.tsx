import hero from "@/assets/otavio-hero.jpg.asset.json";

export function Hero() {
  return (
    <section id="inicio" className="night-bg grain relative min-h-[100svh] overflow-hidden">
      <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-8 px-5 pt-32 pb-16 md:px-8 lg:min-h-[100svh] lg:grid-cols-[1.05fr_0.95fr] lg:pt-40">
        <div className="relative z-20">
          <p className="tech text-primary">DJ | Open Format</p>

          <h1 className="display mt-5 text-[19vw] leading-[0.82] sm:text-[15vw] lg:text-[9.5rem]">
            <span className="chrome-text glitch block">Otávio</span>
            <span className="block text-primary">DJ</span>
          </h1>

          <p className="display mt-6 text-xl text-foreground/90 sm:text-2xl">
            Movimento <span className="text-primary">•</span> Frequência{" "}
            <span className="text-primary">•</span> Identidade
          </p>

          <p className="tech mt-5 max-w-md text-muted-foreground">
            House • Funk • Tech House • Reggaeton
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="tech bg-primary px-7 py-4 text-center text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "var(--glow)" }}
            >
              Contratar Otávio
            </a>
            <a
              href="#sobre"
              className="tech border border-border px-7 py-4 text-center text-foreground transition-colors hover:border-foreground"
            >
              Conheça minha trajetória
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-6">
            <div>
              <p className="display text-3xl">08</p>
              <p className="tech text-muted-foreground">Anos de experiência</p>
            </div>
            <div>
              <p className="display text-3xl">BR ↔ UY</p>
              <p className="tech text-muted-foreground">Brasil • Uruguai</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-primary/25 blur-[120px]" />
          <div className="relative paper-edge overflow-hidden">
             <img
               src={hero.url}
               alt="Otávio DJ segurando controladora em sessão fotográfica noturna"
               className="mx-auto max-h-[78svh] w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 block"
               fetchPriority="high"
             />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2">
        <p className="tech animate-pulse text-muted-foreground">Scroll to explore ↓</p>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [
    "MOVIMENTO",
    "FREQUÊNCIA",
    "IDENTIDADE",
    "OPEN FORMAT",
    "BRASIL",
    "URUGUAI",
    "O'SET",
  ];
  return (
    <div className="overflow-hidden border-y border-border bg-card/40 py-4">
      <div className="marquee-track flex w-max gap-10">
        {[0, 1].map((k) => (
          <div key={k} className="flex gap-10">
            {items.map((i) => (
              <span key={i} className="display flex items-center gap-10 text-2xl text-chrome/60">
                {i} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
