import { useEffect, useState } from "react";
import wordmark from "@/assets/otaviodj-wordmark.png.asset.json";

const links = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "oset", label: "O'Set" },
  { id: "musica", label: "Música" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/70 py-3 backdrop-blur-xl"
          : "border-b border-transparent py-6"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src={wordmark.url}
            alt="Otávio DJ"
            className={`shrink-0 transition-all duration-500 ${scrolled ? "h-10 md:h-12" : "h-14 md:h-18"}`}
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="tech text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="tech border border-primary px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Contratar
            </a>
          </li>
        </ul>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 border border-border lg:hidden"
        >
          <span
            className={`h-px w-5 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-5 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[80vh] border-t" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-5 py-4">
          {links.map((l) => (
            <li key={l.id} className="border-b border-border/60 last:border-0">
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="display block py-4 text-2xl text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="tech block bg-primary px-5 py-4 text-center text-primary-foreground"
            >
              Contratar Otávio
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
