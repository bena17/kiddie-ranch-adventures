import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-camp.jpg";
import { CTAButton } from "@/components/site/Button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/centri-estivi")({
  head: () => ({
    meta: [
      { title: "Centri Estivi a Cavallo a Calenzano — I Cavalieri del Colle" },
      { name: "description", content: "Centro estivo con cavalli per bambini dai 6 ai 14 anni a Calenzano (FI). Equitazione, laboratori, natura. Iscrizioni aperte." },
      { property: "og:title", content: "Centri Estivi con i Cavalieri del Colle — Calenzano (FI)" },
      { property: "og:description", content: "Un'estate immersa nella natura tra cavalli, laboratori, giochi e nuove amicizie. Per bambini dai 6 ai 14 anni." },
      { property: "og:url", content: "/centri-estivi" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/centri-estivi" }],
  }),
  component: CampPage,
});

const days = [
  "🐴 Avvicinamento al cavallo",
  "🏇 Prime esperienze di equitazione",
  "🌳 Attività nella natura",
  "🎨 Laboratori creativi",
  "🤝 Giochi di gruppo",
  "🐎 Cura e conoscenza dei cavalli",
  "🌾 Vita nel ranch",
  "🚶 Passeggiate e attività all'aperto",
];

const faqs = [
  { q: "Serve esperienza?", a: "No, tutte le attività sono adatte anche ai principianti. I bambini vengono accompagnati passo dopo passo." },
  { q: "Serve avere un cavallo?", a: "No, i cavalli sono messi a disposizione dalla struttura e seguiti dal nostro staff." },
  { q: "Cosa devono portare i bambini?", a: "Abbigliamento comodo, scarpe chiuse, cappellino, crema solare e tanta voglia di divertirsi." },
  { q: "È sicuro?", a: "Sì. Tutte le attività sono svolte sotto la supervisione costante dello staff esperto, in un ambiente protetto." },
];

function CampPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Bambini sorridenti al centro estivo I Cavalieri del Colle" className="h-full w-full object-cover" width={1792} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/55 to-foreground/30" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-28 md:py-36">
          <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            Estate 2026 · Iscrizioni aperte
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-7xl">
            Centri Estivi <em className="not-italic text-accent">a Cavallo</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/90">
            Un'estate immersa nella natura tra cavalli, laboratori, giochi e nuove amicizie.
            Per bambini dai <strong>6 ai 14 anni</strong>, nel cuore delle colline di Calenzano.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton variant="primary" href="https://wa.me/393347077707" target="_blank" rel="noopener">📱 Scrivici su WhatsApp</CTAButton>
            <CTAButton variant="ghost" to="/contatti" className="bg-cream/10 text-cream border-cream/30 backdrop-blur hover:bg-cream/20">Richiedi info</CTAButton>
          </div>
        </div>
      </section>

      {/* COSA FARANNO */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">La giornata</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Ogni giornata è un'avventura</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              I nostri centri estivi a Calenzano uniscono il contatto con i cavalli ad attività
              educative pensate per stimolare curiosità, autonomia e amicizia.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {days.map((d, i) => (
              <li key={i} className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3 shadow-soft">
                <span className="text-lg">{d.split(" ")[0]}</span>
                <span className="text-sm font-medium">{d.substring(d.indexOf(" ") + 1)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ORARI E COSTI */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Orari e Costi</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Scegli la formula giusta</h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {/* FULL TIME */}
            <div className="relative rounded-3xl bg-primary p-8 text-primary-foreground shadow-warm">
              <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">Più scelto</span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Full Time</p>
              <p className="mt-4 font-display text-6xl">140€</p>
              <p className="text-sm text-primary-foreground/70">a settimana — tutto incluso</p>
              <div className="my-6 h-px bg-primary-foreground/20" />
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-accent" /> Lunedì – Venerdì</li>
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-accent" /> 8:30 – 17:00</li>
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-accent" /> Pranzo e merende incluse</li>
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-accent" /> Tutte le attività con i cavalli</li>
              </ul>
            </div>

            {/* PART TIME */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Part Time</p>
              <p className="mt-4 font-display text-6xl text-foreground">80€</p>
              <p className="text-sm text-muted-foreground">a settimana — merenda inclusa</p>
              <div className="my-6 h-px bg-border" />
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-primary" /> Lunedì – Venerdì</li>
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-primary" /> 8:30 – 13:00</li>
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-primary" /> Merenda inclusa</li>
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-primary" /> Attività della mattina</li>
              </ul>
            </div>

            {/* SCONTI */}
            <div className="rounded-3xl border border-secondary/30 bg-secondary/10 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Sconti</p>
              <p className="mt-4 font-display text-6xl text-secondary">-10%</p>
              <p className="text-sm text-muted-foreground">per chi sceglie di più</p>
              <div className="my-6 h-px bg-secondary/20" />
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-secondary" /> Fratelli e sorelle</li>
                <li className="flex gap-2"><Check size={18} className="shrink-0 text-secondary" /> Iscrizione a più settimane</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMA */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Programma tipo</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Una giornata al ranch</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "Mattina", time: "8:30 – 12:30", items: ["Accoglienza", "Attività con i cavalli", "Laboratori", "Merenda"] },
            { title: "Pranzo", time: "12:30 – 14:00", items: ["Momento conviviale", "Relax all'ombra"] },
            { title: "Pomeriggio", time: "14:00 – 17:00", items: ["Passeggiate", "Giochi", "Attività all'aperto"] },
          ].map((b, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">{b.time}</p>
              <h3 className="mt-2 font-display text-2xl">{b.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {b.items.map((it, j) => <li key={j} className="flex gap-2"><span className="text-primary">·</span> {it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Domande frequenti</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Tutto quello che vuoi sapere</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-6 open:shadow-soft">
                <summary className="cursor-pointer list-none font-display text-lg font-medium flex items-center justify-between">
                  {f.q}
                  <span className="ml-4 text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Posti limitati</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Prenota il posto per tuo figlio</h2>
        <p className="mt-5 text-lg text-foreground/75">Chiama Silvia o scrivici su WhatsApp per riservare la tua settimana.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTAButton variant="primary" href="https://wa.me/393347077707" target="_blank" rel="noopener">📱 Scrivici su WhatsApp</CTAButton>
          <CTAButton variant="secondary" href="tel:+393347077707">📞 Chiama Silvia</CTAButton>
        </div>
      </section>
    </>
  );
}
