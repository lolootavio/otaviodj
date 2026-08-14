import { Reveal, SectionLabel, useInView } from "./Reveal";
import portrait from "@/assets/otavio-portrait.jpg.asset.json";
import crowd from "@/assets/crowd.jpg.asset.json";
import osetLogo from "@/assets/oset-logo.png.asset.json";
import osetCover from "@/assets/oset-cover.png.asset.json";

export function About() {
  return (
    <section id="sobre" className="grain relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="01">Sobre</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <h2 className="display text-[13vw] leading-[0.85] sm:text-6xl lg:text-7xl">
                Sobre o<br />
                <span className="text-primary">artista</span>
              </h2>
            </Reveal>
            <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-muted-foreground">
              {[
                "Otávio DJ, nome artístico de Luís Otávio, é DJ e artista do extremo sul do Brasil, natural de Santa Vitória do Palmar e atualmente residente entre Santa Vitória do Palmar e Pelotas.",
                "Com 8 anos de experiência, construiu sua trajetória passando por diferentes casas, eventos e públicos no Brasil e no Uruguai, desenvolvendo uma identidade baseada em versatilidade, leitura de pista, presença e profissionalismo.",
                "Sua atuação como DJ Open Format permite transitar por diferentes estilos e públicos, tendo maior experiência em Funk, Tech House e Reggaeton, além de explorar diferentes vertentes da música de acordo com a proposta de cada evento.",
                "Mais do que simplesmente executar músicas, Otávio trabalha a construção de uma experiência. Cada apresentação é pensada a partir da energia do público, do ambiente e do momento, buscando criar uma conexão real entre música, pista e artista.",
              ].map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                ["08+", "Anos de experiência"],
                ["BRASIL + URUGUAI", "Atuação internacional"],
                ["OPEN FORMAT", "Identidade musical"],
              ].map(([big, small], i) => (
                <Reveal key={big} delay={i * 100}>
                  <div className="h-full bg-background p-6">
                    <p className="display text-2xl text-primary">{big}</p>
                    <p className="tech mt-3 text-muted-foreground">{small}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="relative group">
              <div className="absolute -inset-6 -z-10 bg-primary/15 blur-[90px]" />
              <div className="relative paper-edge overflow-hidden">
                <img
                  src={portrait.url}
                  alt="Retrato de Otávio DJ em estúdio com iluminação noturna"
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[0.15] group-hover:grayscale-0 transition-all duration-700 block"
                />
              </div>
              <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const venues = [
  { name: "Santo Deck Hermena", loc: "Brasil" },
  { name: "Santo Deck Clube", loc: "Brasil" },
  { name: "Engenho Eventos", loc: "Brasil" },
  { name: "Horizon", loc: "Brasil" },
  { name: "Boteco da Maria", loc: "Brasil" },
  { name: "Almo2Bar", loc: "Uruguai" },
  { name: "Primata", loc: "Uruguai" },
  { name: "Beira Mar", loc: "Uruguai" },
  { name: "Xmania Casa Show", loc: "Brasil" },
  { name: "Eventos de 15 anos", loc: "Brasil • Uruguai" },
  { name: "Casamentos", loc: "Brasil" },
  { name: "Formaturas", loc: "Brasil" },
  { name: "Eventos sociais e particulares", loc: "Brasil" },
  { name: "Entre outros eventos e casas da região", loc: "Sul" },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative border-y border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="02">Trajetória</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display mt-6 text-[14vw] sm:text-7xl lg:text-8xl">Experiência</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Uma trajetória construída entre pistas, eventos e fronteiras.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((v, i) => (
            <Reveal key={v.name} delay={(i % 3) * 70}>
              <div className="group relative h-full overflow-hidden bg-background p-7 transition-colors duration-500 hover:bg-card">
                <span className="tech text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="display mt-4 text-2xl transition-transform duration-500 group-hover:translate-x-1">
                  {v.name}
                </p>
                <p className="tech mt-3 text-primary">{v.loc}</p>
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="display mt-14 text-center text-4xl sm:text-6xl">
            Brasil <span className="text-primary">↔</span> Uruguai
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Borders() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const stops = ["Santa Vitória do Palmar", "Pelotas", "Uruguai"];
  return (
    <section className="night-bg grain relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="03">Fronteiras</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display mt-6 max-w-3xl text-[11vw] sm:text-6xl lg:text-7xl">
            Uma carreira entre <span className="text-primary">fronteiras</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-muted-foreground">
            {[
              "Natural de Santa Vitória do Palmar, cidade localizada no extremo sul do Brasil, Otávio construiu parte importante de sua carreira em uma região marcada pela proximidade e conexão cultural com o Uruguai.",
              "Essa característica também faz parte de sua identidade artística.",
              "Ao longo dos anos, suas apresentações atravessaram a fronteira e chegaram a diferentes espaços e eventos uruguaios, ampliando sua experiência com públicos, culturas e ambientes distintos.",
              "Hoje, sua trajetória continua em movimento, com atuação principalmente entre Santa Vitória do Palmar, Pelotas, região Sul do Brasil e Uruguai.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <div ref={ref} className="relative border border-border bg-card/30 p-8">
            <svg viewBox="0 0 400 260" className="w-full" role="img" aria-label="Rota entre Santa Vitória do Palmar, Pelotas e Uruguai">
              <defs>
                <linearGradient id="route" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.58 0.24 27)" />
                  <stop offset="100%" stopColor="oklch(0.9 0 0)" />
                </linearGradient>
              </defs>
              <path
                d="M60 40 C 180 60, 120 150, 220 130 S 330 200, 340 220"
                fill="none"
                stroke="url(#route)"
                strokeWidth="2"
                strokeDasharray="900"
                strokeDashoffset={inView ? 0 : 900}
                style={{ transition: "stroke-dashoffset 2.4s ease-out" }}
              />
              {(
                [
                  [60, 40],
                  [220, 130],
                  [340, 220],
                ] as const
              ).map(([cx, cy], i) => (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="6" fill="oklch(0.58 0.24 27)" />
                  <circle
                    cx={cx}
                    cy={cy}
                    r="14"
                    fill="none"
                    stroke="oklch(0.58 0.24 27 / 0.4)"
                    strokeWidth="1"
                  />
                  <text
                    x={cx + 22}
                    y={cy + 4}
                    fill="oklch(0.9 0 0)"
                    fontSize="12"
                    fontFamily="Chakra Petch, monospace"
                    letterSpacing="1.5"
                  >
                    {stops[i]?.toUpperCase()}
                  </text>
                </g>
              ))}
            </svg>
            <p className="tech mt-6 text-muted-foreground">Rota • Movimento • Fronteira</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OSet() {
  return (
    <section
      id="oset"
      className="relative overflow-hidden border-y border-border bg-card/40 py-24 md:py-36"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="04">Projeto autoral</SectionLabel>
        </Reveal>

        <div className="mt-8 grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative">
              <img
                src={osetLogo.url}
                alt="Logo do projeto O'Set"
                loading="lazy"
                className="float-slow mx-auto w-full max-w-sm"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="display text-[22vw] leading-none sm:text-8xl">
                O<span className="text-primary">’</span>Set
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="tech mt-4 text-primary">Projeto autoral</p>
            </Reveal>
            <div className="mt-7 space-y-5 text-muted-foreground">
              {[
                "Além de sua atuação como DJ, Otávio criou o O’Set, seu projeto autoral.",
                "O projeto representa seu lado mais experimental e criativo, funcionando como um espaço para explorar novas sonoridades, combinações e conceitos musicais.",
                "O’Set traduz sua pesquisa musical para além do formato tradicional de uma apresentação, permitindo construir uma experiência mais autoral e desenvolver uma assinatura própria.",
                "É onde diferentes referências se encontram e ganham uma nova identidade através da visão de Otávio.",
              ].map((p, i) => (
                <Reveal key={i} delay={i * 70}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-10 overflow-hidden border border-border bg-card/60">
                <iframe
                  src="https://www.instagram.com/reel/DZYdUEWRUfZ/embed"
                  className="w-full aspect-video"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency={true}
                ></iframe>
                <div className="p-4 bg-background/60">
                  <p className="tech text-center text-primary text-[0.7rem] uppercase tracking-widest">
                    O’Set — Visual Concept
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <a
                href="https://youtube.com/@otaviodj?si=e5R2iNgB5mJipuHg"
                target="_blank"
                rel="noopener noreferrer"
                className="tech mt-8 inline-block border border-primary px-7 py-4 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Assistir no YouTube
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const genres = [
  { name: "Funk", bars: [0.9, 0.4, 1, 0.6] },
  { name: "Tech House", bars: [0.5, 1, 0.7, 0.9] },
  { name: "House", bars: [0.7, 0.6, 0.95, 0.5] },
  { name: "Reggaeton", bars: [1, 0.55, 0.8, 0.75] },
];

export function Genres() {
  return (
    <section id="musica" className="grain relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="05">Som</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display mt-6 text-[13vw] sm:text-7xl lg:text-8xl">Identidade musical</h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="mt-5 max-w-xl text-muted-foreground">
            A música de Otávio é construída a partir da mistura.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {genres.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 90}>
              <div className="group relative h-full overflow-hidden bg-background p-8">
                <div className="flex h-24 items-end gap-2">
                  {g.bars.map((h, i) => (
                    <span
                      key={i}
                      className="w-3 origin-bottom bg-primary/70"
                      style={{
                        height: `${h * 100}%`,
                        animation: `pulse-bar ${1.1 + i * 0.25 + gi * 0.1}s ease-in-out infinite`,
                      }}
                    />
                  ))}
                </div>
                <p className="display mt-7 text-3xl transition-colors duration-500 group-hover:text-primary">
                  {g.name}
                </p>
                <span className="absolute inset-x-8 bottom-6 h-px bg-gradient-to-r from-primary to-transparent opacity-40" />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            "Como DJ Open Format, sua pesquisa passa por diferentes estilos, com destaque para Funk, Tech House, House e Reggaeton.",
            "Essa diversidade não significa falta de identidade. Pelo contrário: sua assinatura está justamente na capacidade de conectar diferentes estilos, entender o público e construir uma sequência musical coerente com cada momento.",
            "Seu trabalho combina técnica, pesquisa musical, leitura de pista e presença, criando sets dinâmicos e adaptáveis.",
          ].map((p, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="border-t border-border pt-5 text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Universe() {
  return (
    <section className="relative overflow-hidden border-y border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="06">Universo</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Reveal>
              <h2 className="display text-[13vw] leading-[0.85] sm:text-6xl lg:text-7xl">
                Um universo em <span className="text-primary">movimento</span>
              </h2>
            </Reveal>
            <div className="mt-8 space-y-5 text-muted-foreground">
              {[
                "A identidade visual de Otávio acompanha sua personalidade musical.",
                "Uma estética urbana, noturna, contemporânea e energética, influenciada pela cultura club, estética Y2K, rave, tecnologia e elementos analógicos.",
                "O contraste entre o digital e o físico faz parte dessa linguagem.",
                "A proposta visual não busca apenas apresentar um DJ, mas representar um universo. Um artista em movimento, conectado à música, à cidade, às pistas e às diferentes experiências que fazem parte de sua trajetória.",
              ].map((p, i) => (
                <Reveal key={i} delay={i * 70}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["luzes", "telas", "vinis", "equipamentos", "textura", "cidade", "movimento", "noite"].map(
                  (t) => (
                    <span key={t} className="tech border border-border px-3 py-2 text-muted-foreground">
                      {t}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative h-full min-h-72">
              <img
                src={crowd.url}
                alt="Pista lotada durante apresentação de Otávio DJ"
                loading="lazy"
                className="h-full w-full border border-border object-cover"
              />
              <div className="scanlines pointer-events-none absolute inset-0 opacity-50" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const values = [
  "Pontualidade",
  "Responsabilidade",
  "Versatilidade",
  "Leitura de pista",
  "Presença de palco",
  "Adaptação ao público",
  "Profissionalismo",
  "Comprometimento",
];

export function Professionalism() {
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="07">Estrutura</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display mt-6 text-[13vw] sm:text-7xl">Profissionalismo</h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Além da experiência artística, Otávio possui equipamento próprio de mixagem, permitindo
            maior autonomia e estrutura para diferentes formatos de eventos.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v} delay={(i % 4) * 80}>
              <div className="group flex h-full items-center gap-4 bg-background p-6">
                <span className="h-8 w-px bg-primary transition-all duration-500 group-hover:h-12" />
                <p className="tech text-foreground">{v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Award() {
  return (
    <section className="night-bg grain border-y border-border py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="08">Reconhecimento</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <div
            className="relative mt-8 overflow-hidden border border-primary/40 bg-card/60 p-10 text-center md:p-16"
            style={{ boxShadow: "var(--glow)" }}
          >
            <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-primary/20 blur-[80px]" />
            <p className="text-5xl">🏆</p>
            <p className="tech mt-6 text-primary">Destaque 2026</p>
            <h3 className="display mx-auto mt-5 max-w-3xl text-3xl sm:text-5xl">
              Melhor DJ de Santa Vitória do Palmar
            </h3>
            <p className="mx-auto mt-7 max-w-2xl text-muted-foreground">
              Reconhecido em 2026 com o prêmio de Destaque de Melhor DJ de Santa Vitória do Palmar,
              consolidando uma trajetória construída ao longo de anos de trabalho na cena local e
              regional.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: "Horizon",
      role: "Club / Eventos",
      text: "DJ super responsável, profissional demais, setlist bizarro de bom, além da presença de palco! INTOCÁVEL E REFERÊNCIA na cidade! A HORIZON te espera novamente muito em breve ❤️",
      event: "Horizon"
    },
    {
      name: "Cleber Ávila",
      role: "Engenho Bar — SVP",
      text: "Cara, só tenho que elogiar teu trabalho, carisma e educação. Baita profissional. Espero que essa nova fase da tua vida seja cheia de vitórias, porque tu merece!",
      event: "Engenho Bar — Santa Vitória do Palmar"
    },
    {
      name: "Santo Deck Clube",
      role: "Club / Lounge",
      text: "Aproveitar pra te agradecer e parabenizar por todos esses anos à frente da nossa festa. Tu é um cara humilde, que sabe escutar, eclético e muito inteligente pra entender a pista. Sem falar na tua responsabilidade: anos sem nunca atrasar um minuto do teu horário, comprometido em estar sempre inovando. Tenho certeza que irás crescer muito na tua carreira ainda. Tens um potencial fora de série. Pra mim, o melhor DJ que tive na cidade — e olha que já tô há 20 anos nesse mercado 😂 Parabéns e sucesso! 🤙🏻👊🏻👊🏻",
      event: "Santo Deck Clube"
    },
    {
      name: "Almo2Bar | Uruguai",
      role: "Beach Bar",
      text: "Otávio sempre entregou um trabalho muito bonito no Almo2Bar. Sabe ler a pista, manter a galera e se adapta muito bem ao público. Profissional, pontual e fácil de trabalhar. Recomendamos sem dúvida.",
      event: "Almo2Bar — Uruguai"
    },
    {
      name: "La 214 | Primata",
      role: "Punta del Diablo, Uruguay",
      text: "Otávio hizo un excelente trabajo en Bar214. Tiene muy buena lectura del público, mezcla muy bien los estilos y mantiene la energía durante toda la noche. Es un DJ profesional, responsable y totalmente recomendable.",
      event: "La 214 — Primata, Punta del Diablo"
    }
  ];

  return (
    <section id="depoimentos" className="relative border-y border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="09">Feedback</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display mt-6 text-[10vw] sm:text-7xl lg:text-8xl leading-tight">Quem já viveu a experiência</h2>
        </Reveal>

        <div className="mt-14 relative group/carousel">
          <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 100} className="min-w-[85vw] md:min-w-[400px] snap-center">
                <div className="flex h-full flex-col border border-border bg-card/20 p-8 transition-colors hover:bg-card/40 relative">
                  <div className="mb-6 flex gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="flex-grow italic text-muted-foreground leading-relaxed">
                    "{r.text}"
                  </p>
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="display text-xl">{r.name}</p>
                    <p className="tech mt-1 text-xs text-primary uppercase tracking-wider">{r.role}</p>
                    <p className="tech mt-1 text-[0.65rem] text-muted-foreground/60">{r.event}</p>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-5 tech text-[0.4rem] rotate-90 origin-top-right">
                    VERIFIED EXPERIENCE
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="hidden md:flex justify-end gap-4 mt-8">
             <button 
               onClick={() => {
                 const container = document.querySelector('.snap-x');
                 if (container) container.scrollBy({ left: -450, behavior: 'smooth' });
               }}
               className="h-14 w-14 border border-border hover:border-primary flex items-center justify-center transition-colors group/btn"
             >
               <span className="tech group-hover:text-primary transition-colors">←</span>
             </button>
             <button 
               onClick={() => {
                 const container = document.querySelector('.snap-x');
                 if (container) container.scrollBy({ left: 450, behavior: 'smooth' });
               }}
               className="h-14 w-14 border border-border hover:border-primary flex items-center justify-center transition-colors group/btn"
             >
               <span className="tech group-hover:text-primary transition-colors">→</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}


export function Moments() {
  const media = [
    {
      type: "video",
      url: "https://www.instagram.com/reel/DRxyk5CjE60/",
      embedUrl: "https://www.instagram.com/reel/DRxyk5CjE60/embed",
      alt: "Apresentação Otávio DJ - Vídeo 1",
    },
    {
      type: "video",
      url: "https://www.instagram.com/reel/DTluEH7DNxr/",
      embedUrl: "https://www.instagram.com/reel/DTluEH7DNxr/embed",
      alt: "Apresentação Otávio DJ - Vídeo 2",
    },
    {
      type: "video",
      url: "https://www.instagram.com/reel/DMgeyKbuSTn/",
      embedUrl: "https://www.instagram.com/reel/DMgeyKbuSTn/embed",
      alt: "Apresentação Otávio DJ - Vídeo 3",
    },
    {
      type: "video",
      url: "https://www.instagram.com/reel/DZbK-M-MB7h/",
      embedUrl: "https://www.instagram.com/reel/DZbK-M-MB7h/embed",
      alt: "Apresentação Otávio DJ - Vídeo 4",
    },
    {
      type: "image",
      url: crowd.url,
      alt: "Pista lotada durante apresentação de Otávio DJ",
    },
    {
      type: "image",
      url: portrait.url,
      alt: "Otávio DJ em estúdio",
    },
  ];

  return (
    <section id="momentos" className="grain py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="10">Pista</SectionLabel>
        </Reveal>
        <Reveal>
          <h2 className="display mt-6 text-[13vw] sm:text-7xl lg:text-8xl">Momentos</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item, i) => (
            <Reveal key={i} delay={i * 100} className="group relative overflow-hidden aspect-[4/5] border border-border bg-card/20">
              {item.type === "video" ? (
                <div className="h-full w-full relative">
                  <iframe
                    src={item.embedUrl}
                    className="h-full w-full"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                  ></iframe>
                  <div className="absolute inset-0 pointer-events-none border border-border/50" />
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-4 tech text-[0.6rem] bg-background/80 px-2 py-1 border border-border opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    VER NO INSTAGRAM
                  </a>
                </div>
              ) : (
                <>
                  <img
                    src={item.url}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </>
              )}
            </Reveal>
          ))}
          <Reveal delay={media.length * 100} className="flex aspect-[4/5] items-center justify-center border border-border border-dashed bg-card/20 p-8 text-center">
            <p className="tech text-muted-foreground/60 italic text-xs uppercase tracking-widest">
              Galeria em expansão<br/>mais registros em breve
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Listen() {
  return (
    <section id="ouca" className="night-bg grain border-y border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="11">Áudio</SectionLabel>
        </Reveal>
        <div className="mt-8 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <h2 className="display text-[15vw] leading-none sm:text-8xl">Ouça o som</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-7 max-w-xl text-muted-foreground">
                Explore a identidade musical de Otávio DJ através de sets selecionados e mixagens exclusivas.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4 border border-border bg-card/40 p-5">
                  <div className="flex h-12 w-12 items-center justify-center bg-primary text-xl">▶</div>
                  <div>
                    <p className="tech text-primary">Mix Recente</p>
                    <p className="display mt-1 text-xl">O’Set Session #01</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 border border-border bg-card/10 p-5 opacity-60">
                  <div className="flex h-12 w-12 items-center justify-center border border-border text-xl">⌛</div>
                  <div>
                    <p className="tech">Em breve</p>
                    <p className="display mt-1 text-xl text-muted-foreground">O’Set Nostalgia</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative border border-border bg-card/60 flex flex-col md:flex-row items-center overflow-hidden">
               <div className="absolute inset-0 bg-primary/5 blur-[80px]" />
               
               {/* Cover Image */}
               <div className="w-full md:w-1/2 aspect-square relative z-10 border-b md:border-b-0 md:border-r border-border">
                 <img 
                   src={osetCover.url} 
                   alt="O'Set Cover" 
                   className="h-full w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden" />
               </div>

               {/* Player Content */}
               <div className="w-full md:w-1/2 p-6 md:p-10 z-10 text-center md:text-left">
                 <p className="tech text-primary mb-2">O’Set Session #01</p>
                 <h3 className="display text-3xl mb-8 uppercase tracking-tighter">Ouça agora</h3>
                 
                 <div className="flex justify-center md:justify-start">
                   <iframe 
                     width="100%" 
                     height="166" 
                     scrolling="no" 
                     frameBorder="no" 
                     allow="autoplay" 
                     src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1388748448&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                     className="max-w-md border border-border bg-black/40"
                   ></iframe>
                 </div>
                 
                 <a 
                   href="https://on.soundcloud.com/fZBPELSBoCkEW7Ew9B" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="tech text-primary hover:underline mt-8 inline-block text-xs uppercase tracking-widest"
                 >
                   Ver no SoundCloud →
                 </a>
               </div>
               
               <div className="scanlines absolute inset-0 opacity-20 pointer-events-none" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="py-24 md:py-48 text-center overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <p className="tech text-primary mb-10">Missão</p>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="display text-[10vw] sm:text-7xl lg:text-[6rem] leading-[0.9] tracking-tighter">
            "A música é o <span className="chrome-text">movimento</span> que conecta a pista à <span className="text-primary">alma</span> do artista."
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="relative border-t border-border py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionLabel index="12">Booking</SectionLabel>
        </Reveal>
        
        <div className="mt-8 grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="display text-[15vw] leading-[0.85] sm:text-8xl">Vamos<br />falar?</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-8 max-w-md text-muted-foreground text-lg">
                Disponível para eventos sociais, corporativos e clubes no Brasil e Uruguai.
                Entre em contato para orçamentos e informações técnicas.
              </p>
            </Reveal>

            <div className="mt-12 space-y-8">
              <Reveal delay={150}>
                <div>
                  <p className="tech text-primary mb-2">E-mail</p>
                  <a href="mailto:otavio_demoura@hotmail.com" className="display text-2xl sm:text-3xl hover:text-primary transition-colors">otavio_demoura@hotmail.com</a>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div>
                  <p className="tech text-primary mb-2">WhatsApp</p>
                  <a href="https://wa.me/5553999642689" target="_blank" rel="noopener noreferrer" className="display text-2xl sm:text-3xl hover:text-primary transition-colors">+55 (53) 99964-2689</a>
                </div>
              </Reveal>
              <Reveal delay={250}>
                <div>
                  <p className="tech text-primary mb-2">Social</p>
                  <div className="flex gap-6 mt-4">
                    {[
                      { name: "Instagram", url: "https://www.instagram.com/otaviodj_/" },
                      { name: "SoundCloud", url: "https://on.soundcloud.com/fZBPELSBoCkEW7Ew9B" },
                      { name: "YouTube", url: "https://youtube.com/@otaviodj?si=e5R2iNgB5mJipuHg" },
                      { name: "Spotify", url: "https://open.spotify.com/playlist/32I4H7rHliJtxhAyw60sJw?si=TYsGTRMvTqinMpVwsZZ4Yg" }
                    ].map(s => (
                      <a key={s.name} href={s.url} target={s.url !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="tech hover:text-primary transition-colors">{s.name}</a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={300}>
            <form className="border border-border bg-card/30 p-8 md:p-12 space-y-6">
              <div className="space-y-2">
                <label className="tech text-[0.65rem] text-muted-foreground">Nome Completo</label>
                <input type="text" className="w-full bg-background border border-border p-4 tech focus:border-primary outline-none transition-colors" placeholder="SEU NOME" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="tech text-[0.65rem] text-muted-foreground">E-mail</label>
                  <input type="email" className="w-full bg-background border border-border p-4 tech focus:border-primary outline-none transition-colors" placeholder="EMAIL@EXEMPLO.COM" />
                </div>
                <div className="space-y-2">
                  <label className="tech text-[0.65rem] text-muted-foreground">Telefone</label>
                  <input type="tel" className="w-full bg-background border border-border p-4 tech focus:border-primary outline-none transition-colors" placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="tech text-[0.65rem] text-muted-foreground">Tipo de Evento</label>
                <select className="w-full bg-background border border-border p-4 tech focus:border-primary outline-none transition-colors appearance-none">
                  <option>15 ANOS / FORMATURA</option>
                  <option>CASAMENTO</option>
                  <option>CLUBE / FESTA</option>
                  <option>EVENTO CORPORATIVO</option>
                  <option>OUTRO</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="tech text-[0.65rem] text-muted-foreground">Mensagem</label>
                <textarea rows={4} className="w-full bg-background border border-border p-4 tech focus:border-primary outline-none transition-colors" placeholder="DETALHES DO EVENTO, DATA, LOCAL..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary py-5 tech text-primary-foreground hover:scale-[1.02] transition-transform active:scale-100" style={{ boxShadow: 'var(--glow)' }}>
                Enviar Solicitação
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="display text-2xl">Otávio <span className="text-primary">DJ</span></p>
            <p className="tech mt-2 text-muted-foreground text-[0.6rem]">Movimento • Frequência • Identidade</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#inicio" className="tech text-muted-foreground hover:text-foreground transition-colors">Início</a>
            <a href="#sobre" className="tech text-muted-foreground hover:text-foreground transition-colors">Artista</a>
            <a href="#oset" className="tech text-muted-foreground hover:text-foreground transition-colors">O’Set</a>
            <a href="#contato" className="tech text-muted-foreground hover:text-foreground transition-colors">Contato</a>
          </div>

          <p className="tech text-muted-foreground/40 text-[0.6rem]">
            &copy; 2026 OTÁVIO DJ. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
